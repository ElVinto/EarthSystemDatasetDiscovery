import {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { Card } from 'react-bootstrap';

export default function LinkedSearchDatasetVarTable({linkedSearchPathList, linkedSearchLabel,  kbUri}){

    const [varNames,setVarNames] = useState([]);
    const [bindings, setBindings] = useState([]);

    

    function composeQuery(){
        return 'PREFIX skos: <http://www.w3.org/2004/02/skos/core#> '+
            'PREFIX sosa: <http://www.w3.org/ns/sosa/> '+
            'PREFIX ucmm: <http://purl.org/ucmm#> '+
            'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> '+
            'PREFIX dcat: <http://www.w3.org/ns/dcat#> '+
            'PREFIX dcterms: <http://purl.org/dc/terms/> '+
            'SELECT DISTINCT ?dataset '+
            'WHERE{ '+
            '  { '+
            '    ?dataset rdf:type dcat:Dataset . '+
            '    ?dataset ?p ?concept . '+ // ?p matches: dcterms:subject, dcterms:theme
            '    ?concept skos:prefLabel ?searchLabel . '+ // ?p matches: dcterms:subject, dcterms:theme '+
            '  }UNION{ '+
            '    ?dataset rdf:type dcat:Dataset . '+
            '    ?dataset dcterms:description|dcterms:title ?searchLabel. '+ 
            '  }UNION{ '+
            '    ?dataset rdf:type dcat:Dataset . '+
            '    ?obsColl ucmm:hasAggregatedResult ?dataset . '+
            '    ?obsColl  (sosa:hasFeatureofInterest|sosa:hasUltimateFeatureofInterest) ?concept . '+
            '    ?concept skos:prefLabel ?searchLabel . '+
            '  }UNION{ '+
            '    ?dataset rdf:type dcat:Dataset .'+
            '    ?obsColl ucmm:hasAggregatedResult ?dataset . '+
            '    ?obsColl sosa:observedProperty ?concept . '+
            '    ?concept skos:prefLabel ?searchLabel . '+
            '  }'+
            '  FILTER ('+ 
            '    regex(?searchLabel,"'+linkedSearchLabel+'","i") '+
            '  )'+
            '  FILTER ('+ 
            '    lang(?searchLabel)="en"'+
            '  )'+
            '}'
    }

    async function fetchData ()   {

        try {  

            console.log('kbUri : ',kbUri);
            console.log('searchLabel : ',linkedSearchLabel);

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
            if(linkedSearchLabel !== ''){
                fetchData();
            }
        },
        [linkedSearchLabel]
    );

 
    return(
        <>
        {(bindings.length >0) ?(
            <Card>
                <Card.Header>
                    {linkedSearchPathList.length>0?(
                        <ul>
                            {linkedSearchPathList.map( (linkedSearchPath) => <li>{linkedSearchPath}</li>)}
                        </ul>
                    ):(
                        <></>
                    )}
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
                                        <td> {binding[varName]["value"]} </td>
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Card.Body> 
            </Card>
        ):(
             <></>
        )}
        </>
    )
}
