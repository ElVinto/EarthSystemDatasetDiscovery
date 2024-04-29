import {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { Card } from 'react-bootstrap';

export default function RetrievedDatasetVarTable({selectedLabel, kbUri}){

    
    const prefix2uri = {
        'skos:':'http://www.w3.org/2004/02/skos/core#',
        'sosa:': 'http://www.w3.org/ns/sosa/',
        'ucmm:':'http://purl.org/ucmm#',
        'rdf:': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'dcat:':'http://www.w3.org/ns/dcat#',
        'dcterms:':'http://purl.org/dc/terms/',
        'cpm:':  'http://purl.org/voc/cpm#' ,
        'geo:': 'http://www.opengis.net/ont/geosparql#',
        'ssn-ext:': 'http://www.w3.org/ns/ssn/ext/' ,
        'time:':  'http://www.w3.org/2006/time#',
        'xsd:':  'http://www.w3.org/2001/XMLSchema#',

        'i1:':'http://example.org/b2a5ed57-5c4e-4596-b803-d2ac7f5b9991#',
        'i2:':'http://example.org/51824c86-ae0f-442f-9df2-e86244984ba3#',
        'i3:':'http://example.org/97b4842b-94b3-4205-8781-476813d8177b#',
        'i4:':'http://example.org/e747d804-a5d1-4fd1-bd9b-306a8ebd4904#',
        'i5:': 'http://example.org/de5b570a-b560-4e84-a755-52c2aa499874#',
        'i6:': 'http://example.org/3df904de-e47d-4bf9-85a0-7c0942aff8b6#',
        'i7:': 'http://example.org/BDML_TCHR#',
        'i8:': 'http://example.org/4f676524-a831-41fe-9afb-d95f4e7597e3#',
        'i9:': 'http://example.org/f4968943-ad6f-4563-a737-58fe3285fb3c#',
        'i10:': 'http://example.org/17e24931-ccd6-4de0-a01c-9ffb3be88461#'
    };

    function getPrefixFromUri(resourceUri){

        // console.log(`getPrefixFromUri(resourceUri: ', ${resourceUri})`);

        let prefix = '';
        Object.entries(prefix2uri).map( ([prefixKey,uri]) => {
            if(resourceUri.includes(uri)){
                // console.log(` resourceUri.includes(${uri})`);
                prefix = prefixKey;
                return; // exit map function
            }
        })

        // console.log(` prefix: ', ${prefix}`);

        return prefix;
    }
    
    function getPrefixedUri(resourceUri){

        // console.log(`getPrefixedUri(resourceUri: ', ${resourceUri})`);

        const prefix = getPrefixFromUri(resourceUri);

        if(prefix==='')
            return resourceUri;

        const prefixUri = prefix2uri[prefix];
        const prefixedUri = resourceUri.replace(prefixUri,prefix);

         console.log(` prefixedUri: ', ${prefixedUri}`);

        return prefixedUri;
    }


    const [varNames,setVarNames] = useState([]);
    const [bindings, setBindings] = useState([]);

    
    function composeQuery(){
        return ` 
            PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
            PREFIX sosa: <http://www.w3.org/ns/sosa/> 
            PREFIX ucmm: <http://purl.org/ucmm#> 
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
            PREFIX dcat: <http://www.w3.org/ns/dcat#> 
            PREFIX dcterms: <http://purl.org/dc/terms/> 
            SELECT DISTINCT ?dataset 
            WHERE{ 
              { 
                ?dataset rdf:type dcat:Dataset . 
                ?dataset ?p ?concept .  
                ?concept skos:prefLabel ?searchLabel .  
              }UNION{ 
                ?dataset rdf:type dcat:Dataset . 
                ?dataset dcterms:description|dcterms:title|dcat:keyword ?searchLabel.  
              }UNION{ 
                ?dataset rdf:type dcat:Dataset . 
                ?obsColl ucmm:hasAggregatedResult ?dataset . 
                ?obsColl rdf:type sosa:ObservationCollection .
                ?obsColl  ?obsCollProp ?concept. 
                ?concept skos:prefLabel ?searchLabel . 
              }UNION{ 
                ?obsColl  (^sosa:hasMember)%2B ?obsCollParent.
                ?obsColl  ?obsCollProp ?concept. 
                ?concept skos:prefLabel ?searchLabel .
                OPTIONAL{
                    ?dataset rdf:type dcat:Dataset . 
                    ?obsCollParent ucmm:hasAggregatedResult ?dataset . 
                }
              }
              FILTER (strlen(str(?dataset)) > 0)
              FILTER (regex(?searchLabel,"${selectedLabel}","i") )
              FILTER (lang(?searchLabel)="en")
            }`.toString().replace('\n',' ');
    }

    async function fetchData ()   {

        try {  

            console.log('kbUri : ',kbUri);
            console.log('selectedLabel : ',selectedLabel);

            console.log('composeQuery : ',composeQuery());

            const response = await fetch(kbUri,{
                method: "POST",
                credentials: "same-origin",
                headers:{
                    "Content-Type": 'application/x-www-form-urlencoded',
                    "xhrFields": {withCredentials: true},
                    "Accept" : "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: "query="+ composeQuery()
            }
            )            
            
            const jsonData = await response.json();
            
            console.log('jsonData:', jsonData);
            
            if(jsonData){

                if(jsonData.results){
                    if(jsonData.results.bindings){
                        setBindings(jsonData.results.bindings);
                    }}

                if(jsonData.head){
                    if(jsonData.head.vars){
                        setVarNames(jsonData.head.vars);
                    }
                }
                
            }

            // console.log('varNames:', varNames); 
            // console.log('bindings:', bindings);

        } catch (error) {
            console.log('Error:', error);
            
        }
    }

    useEffect (
         () =>{
            if(selectedLabel !== ''){
                fetchData();
            }
        },
        [selectedLabel]
    );

 
    return(
        <Card>
            {varNames.length>0 ?(
                <>
                    <Card.Header>
                    {selectedLabel} 
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover responsive size='lg' >
                            <thead >
                                <tr text-align="center">
                                    {varNames.map(v => <th> {`${v}(s)`} </th> )}
                                </tr>
                            </thead>
                            <tbody>
                                {bindings.map(binding =>
                                    <tr>
                                        {varNames.map(varName => 
                                            <td> {getPrefixedUri(binding[varName]["value"])} </td>
                                        )}
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Card.Body> 
                </>
            ):(
                <p> {` Enter a search label and press the button: Retrieve Datasets `}  </p>
            )}
        </Card>  
    )
}
