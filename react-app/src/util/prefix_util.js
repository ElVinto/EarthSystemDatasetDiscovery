
export const prefix2uri = {
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

export function getPrefixFromUri(resourceUri){

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

export function getPrefixedUri(resourceUri){

    // console.log(`getPrefixedUri(resourceUri: ', ${resourceUri})`);

    const prefix = getPrefixFromUri(resourceUri);

    if(prefix==='')
        return resourceUri;

    const prefixUri = prefix2uri[prefix];
    const prefixedUri = resourceUri.replace(prefixUri,prefix);

     console.log(` prefixedUri: ', ${prefixedUri}`);

    return prefixedUri;
}

export const prefix2group ={ // THEAI ODATIS FORMATER AERIS
    'i1:': 1,
    'i2:': 1,
    'i3:': 1,
    'i4:': 2,
    'i5:': 2,
    'i6:': 2,
    'i7:': 3,
    'i8:': 3,
    'i9:': 3,
    'i10:': 3,

    'skos:':5,
    'sosa:':6,
    'ucmm:':7,
    'rdf:': 8,
    'dcat:':9,
    'dcterms:':10
}

function getGroupFromPrefixedUri(prefixedUri){

    // console.log('prefixedUri',prefixedUri);
    
    const  end = String(prefixedUri).indexOf(":");

    // console.log('end',end);

    const prefix= prefixedUri.substring(0,end+1)

    
    if(prefix2group[prefix]){
        return prefix2group[prefix];
    }else{
        return 4;
    }
}
