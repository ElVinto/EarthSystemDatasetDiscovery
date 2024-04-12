import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import SearchLabelForm from './components/SearchLabelForm';
import RetrievedDatasetVarTable from './components/bindingVarTable/RetrievedDatasetVarTable'
import EndpointsCheckBox from './components/EndpointsCheckBox';
import LinkedSearchVarTableList from './components/LinkedSearchVarTableList';

import NetworkDiagram  from './examples/react-graph-gallery/NetworkDiagramBasicCanvas/NetworkDiagram';
import data from './examples/react-graph-gallery/NetworkDiagramBasicCanvas/data';
import DatasetDiscoveryExplainedGraph from './components/DatasetDiscoveryExplainedGraph';
import DatasetDiscoveryExplainedSVGGraph from './components/DatasetDiscoveryExplainedSVGGraph';
import DatasetDiscoveryExplainedSVGGraph_v2 from './components/DatasetDiscoveryExplainedSVGGraph_v2';
import ExplainedDatasetDiscovery from './components/ExplainedDatasetDiscovery';



const App = () => {

  const [searchLabel, setSearchLabel] = useState(''); 

  const rdf4jRepositories = 'http://13.38.99.184:8080/rdf4j-server/repositories/';
  const kbUri = 'http://13.38.99.184:8080/rdf4j-server/repositories/ucmm_instance_graph';


  const [linkedConceptMap, setLinkedConceptMap] = useState({});

  return (
    <Container>
      <Row>
        <div class="d-flex justify-content-center">
          <h1 > Explaining Discovery of Earth Observation Datasets </h1>
        </div>
      </Row>
      <Row >
        <Col lg={4} >
          <Row>
            <SearchLabelForm kbUri={kbUri} updateCallBack={setSearchLabel} />
         </Row>
         <Row>
          {/* <EndpointsCheckBox
            rdf4jRepositories ={rdf4jRepositories}
            searchLabel={searchLabel}
            setLinkedConceptMapCallBack={setLinkedConceptMap}
            /> */}
          </Row> 
        </Col>
        
        <Col lg={8} >
          <RetrievedDatasetVarTable selectedLabel={searchLabel} kbUri={kbUri} />
          {/* <DatasetDiscoveryExplainedGraph kbUri={kbUri} width={400} height={400} termInfo={{term:searchLabel}} ></DatasetDiscoveryExplainedGraph> */}
          {/* <DatasetDiscoveryExplainedSVGGraph kbUri={kbUri} width={600} height={400} termInfo={{term:searchLabel}}></DatasetDiscoveryExplainedSVGGraph> */}
                   {/* <ExplainedDatasetDiscovery kbUri={kbUri} width={600} height={400} termInfo={{term:searchLabel}}></ExplainedDatasetDiscovery> */}
          {/* <NetworkDiagram data={data} width={400} height={400} />  */}
          {/* <LinkedSearchVarTableList linkedConceptMap={linkedConceptMap} kbUri={kbUri} /> */}
        </Col>
      </Row>
      <Row>
        <DatasetDiscoveryExplainedSVGGraph_v2 kbUri={kbUri} width={1000} height={800} termInfo={{term:searchLabel}}></DatasetDiscoveryExplainedSVGGraph_v2>
      </Row>
    </Container>
  );

};

export default App;

/*
npm run build && ssh -i ~/.ssh/portableHP.pem ec2-user@13.38.36.148 'rm -rf ~/tomcat9/webapps/ReactRestApiCall/*' && scp -r -i ~/.ssh/portableHP.pem ./build/* ec2-user@13.38.36.148:~/tomcat9/webapps/ReactRestApiCall/
*/

/*
npm run build && 
ssh -i ~/.ssh/portableHP.pem ubuntu@13.38.99.184 'rm -rf ExplainingOpenDiscovery' &&
ssh -i ~/.ssh/portableHP.pem ubuntu@13.38.99.184 'mkdir ExplainingOpenDiscovery' &&
scp -r -i ~/.ssh/portableHP.pem ./build/* ubuntu@13.38.99.184:~/ExplainingOpenDiscovery/ &&
ssh -i ~/.ssh/portableHP.pem ubuntu@13.38.99.184 'sudo rm -rf /opt/tomcat/updated/webapps/ExplainingOpenDiscovery' &&
ssh -i ~/.ssh/portableHP.pem ubuntu@13.38.99.184 'sudo cp -R  ExplainingOpenDiscovery  /opt/tomcat/updated/webapps/' &&
ssh -i ~/.ssh/portableHP.pem ubuntu@13.38.99.184 'sudo chown -R tomcat:tomcat  /opt/tomcat/updated/webapps/ExplainingOpenDiscovery' 
*/