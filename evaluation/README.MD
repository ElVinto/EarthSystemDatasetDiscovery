# Evaluation

## Core Evaluation
In the context of multidisciplinary and multisource datasets search, this evaluation shows the benefit of discovering dataset over harmonized dataset metadata compare to dataset search carried out on individual portal.
In this preliminary experiments, we consider 3 data-hubs ( ODATIS, THEIA-Land, THEIA-Hydro) along with five different searchs ( S1="Temperature" , S2="Air", S3 = "Water", S4 = "Carbon", S5 = "Conductivity"). In favour of reproducibility, we share in this folder the corresponding query: queryDiscoveryTemplate.rq.

### Knowledge graph stats
|  | ODATIS | THEIA-LAND | THEIA-HYDRO | merged-KG |
|--------|--------|------------|-------------|-----------|
Number of datasets |10930 |337 | 24594 | 35861 |
Number of triples |669857 | 18071 | 1032948 | 1720876 |


### Number of retrieved datasets

| Search | ODATIS | THEIA-LAND | THEIA-HYDRO | merged-KG |
|--------|--------|------------|-------------|-----------|
S1 (temperature) | 4622| 248| 0| 4870 |
S2 (air)| 2859| 203| 25| 3087 |
S3 (water) | 8265| 459| 73806| 82530 |
S4 (carbon)| 539| 80| 0| 619 |
S5 (conductivity)| 98| 94| 0| 192 |

### Dataset gain ratio
 We calculate the dataset gain ratio as (\# of results (merged KG) - \# of results (data hub))/ \# of results (data hub).} 

| Search | ODATIS | THEIA-LAND | THEIA-HYDRO | merged-KG |
|--------|--------|------------|-------------|-----------|
S1 (temperature)DDDDDZ0,07 	14,36 	-	-
S2 (air)	0,05 	25,90 	74,32 	-
S3 (water)	10,21 	142,97 	0,11 	-
S4 (carbon)	0,15 	6,70 	-	-
S5 (conductivity)	1,30 	0,77 	-	-


## Extended Evaluation
This extended evaluation adds new data hubs to the core evaluation that were previously unavailable (FORMATER, AERIS).
<!-- Besides, this evaluation showcases the benefit of enabling Dataset Discovery for retrieving relevant datasets in a multidisciplinary context. -->
### Knowledge graph stats
|  | ODATIS | THEIA-LAND | THEIA-HYDRO | FORMATER | AERIS |merged-KG |
|--------|--------|------------|-------------|----------|-------|----------|
Number of datasets|10930 |337 | 24594  |255 | 2786| 38902 |
Number of triples |669857 | 18071 | 1032948 | 13263 | 53493 | 1787632 | 


### Number of retrieved datasets
| Search | ODATIS | THEIA-LAND | THEIA-HYDRO | FORMATER | AERIS |merged-KG |
|--------|--------|------------|-------------|----------|-------|----------|
S1 (temperature)| 1149| 80| 0| 33| 378| 1640
S2 (air)| 1788| 70| 25| 25| 491| 2399
S3 (water)| 2427| 189| 24594| 28| 200| 27438
S4 (carbon)| 268| 40| 0| 2| 99| 409
S5 (conductivity)| 54| 70| 0| 0| 9| 133


### Dataset gain ratio
| Search | ODATIS | THEIA-LAND | THEIA-HYDRO | FORMATER | AERIS |merged-KG |
|--------|--------|------------|-------------|----------|-------|----------|
S1 (temperature) | 0,43  | 19,50  | - | 48,70  | 3,34  | -
S2 (air) | 0,34  | 33,27  | 94,96  | 94,96  | 3,89  | -
S3 (water) | 10,31  | 144,17  | 0,12  | 978,93  | 136,19  | -
S4 (carbon) | 0,53  | 9,23  | - | 203,50  | 3,13  | -
S5 (conductivity) | 1,46  | 0,90  | - | - | 13,78  | -
