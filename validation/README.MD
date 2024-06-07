# Validation with SHACL

Different shapes based on the w3c recommendation, SHACL, are implemented in this project. This enables us to detect evident errors and assures the quality of the output Knowledge Graph.

So far, we present the main constrainst:

* <b>Tree Root Observation Collection Shape:</b> In the model UCMM observation collections are organised as a tree structured, this contraint ensures that the root collection is linked to exactly one dcat:Dataset.

* <b>Interval Shape:</b> This constraint validates that the begin date must be before than the end date conserning the perioid of dataset generation.

* <b>Geometry Shape:</b> For the spatial aspects, this constraint valids that the GeoSPARQL wktLiteral exists and is well-formed.

* <b>Dataset shape:</b> this constraint aims to validate the dcat:Dataset instances. In our settings a dataset cannot be a blank node since URIs are required in several parts of the user interface and the dataset search
