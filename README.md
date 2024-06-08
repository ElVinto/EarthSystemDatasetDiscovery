# Earth System Dataset Discovery (ESDD) application

Monitoring Earth System compartments, including the atmosphere, the solid earth, the continental surface, and the ocean and the interfaces between them is a crucial task that helps scientists better understand and predict the Earth System's evolution. To cope with this task, a constantly increasing number of Earth System observations of different kinds, such as satellite images, in-situ, and airborne observations are sensed by devices before being processed and shared by domain-specific data catalogues. In the context of the [Data-Terra](https://www.data-terra.org/en/) research infrastructure, four data hubs, each representing a compartment of the Earth System, offer several data services with machine-readable access.



The ESDD app enables multi-source dataset discovery from four data hub services: [ODATIS](https://www.odatis-ocean.fr/en), [THEIA](https://catalogue.theia-land.fr/), [FORM@TER](https://en.poleterresolide.fr/data-access/catalog/#/), and [AERIS](https://www.aeris-data.fr/en/catalogue-en/).
Each data-hub represents a compartment of the Earth System and enabled access to data products and services supporting the observation of the Ocean, the continental surfaces, the solid Earth and the atmosphere.


## Knowledge Graphs (KGs)
To address semantic and structural heterogeneities persisting from Earth System data hubs, we transform harvested dataset metadata into an harmonized RDF description using the User Centric Metadata Model (UCMM) as a pivotal integration model. UCMM is mainly based on fundational ontologies including SOSA, SSN-EXT, DCAT, PROV vocabularies. 
For each datahub service, the Knowledge Graph resulting from the transformation from dataset metadata to UCMM instances can be found here :

- [ODATIS knowledge Graph](https://github.com/ElVinto/EarthSystemDatasetDiscovery/blob/main/knowledge-graphs/ODATIS_graph.zip)
- [THEIA Knowledge Graph](https://github.com/ElVinto/EarthSystemDatasetDiscovery/blob/main/knowledge-graphs/THEIA_graph.zip)
- [FORMATER Knowledge Graph](https://github.com/ElVinto/EarthSystemDatasetDiscovery/blob/main/knowledge-graphs/FORMATER_graph.zip)
- [AERIS Knowledge Graph](https://github.com/ElVinto/EarthSystemDatasetDiscovery/blob/main/knowledge-graphs/AERIS_graph.zip)

<!-- The Merge Knowledge Graph gathering harmonized metadata descriptions from all datahubs can be found here : [Merge Knowledge Graph] (https://github.com/ElVinto/EarthSystemDatasetDiscovery/blob/main/knowledge-graphs/MERGE_graph.zip) -->
All KGs are placed in the repository [knowledge-graphs](https://github.com/ElVinto/EarthSystemDatasetDiscovery/tree/main/knowledge-graphs].



## Evaluation
The result of preliminary evaluation showing the benefit of the Earth System Dataset Discovery application app can be found in the  [evaluation](https://github.com/ElVinto/EarthSystemDatasetDiscovery/tree/main/evaluation/) repository.

## Source code
The deployable source code of the app can be found in the [source](https://github.com/ElVinto/EarthSystemDatasetDiscovery/tree/main/react-app/) repository.

## Validation
The Shacl shape file can be found in the [validation](https://github.com/ElVinto/EarthSystemDatasetDiscovery/tree/main/validation/) repository.
