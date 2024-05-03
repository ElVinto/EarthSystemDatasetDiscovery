# Evaluation

## Core Evaluation
In the context of multidisciplinary and multisource datasets search, this evaluation shows the benefit of discovering dataset over harmonized dataset metadata compare to dataset search carried out on individual portal.
In this preliminary experiments, we consider 3 data-hubs ( ODATIS, THEIA-Land, THEIA-Hydro) along with five different searchs ( S1="Temperature" , S2="Air", S3 = "Water", S4 = "Carbon", S5 = "Conductivity")


### Number of retrieved datasets

| Search | ODATIS | THEIA-LAND | THEIA-HYDRO | merged-KG |
|--------|--------|------------|-------------|-----------|
S1 (temperature) | 4622| 248| 0| 4870 |
S2 (air)| 2859| 203| 25| 3087 |
S3 (water) | 8265| 459| 73806| 82530 |
S4 (carbon)| 539| 80| 0| 619 |
S5 (conductivity)| 98| 94| 0| 192 |

### Dataset gain ration

| Search | ODATIS | THEIA-LAND | THEIA-HYDRO | merged-KG |
|--------|--------|------------|-------------|-----------|
S1 (temperature) | 0,05| 18,64| -| - |
S2 (air)| 0,08| 14,21| 122,48| - |
S3 (water) | 8,98| 178,80| 0,12| - |
S4 (carbon)| 0,15| 6,74| -| - |
S5 (conductivity)| 0,96| 1,04| -| - |

## Extended Evaluation
This extended evaluation adds new data hubs to the core evaluation that were previously unavailable (FORMATER, AERIS).
<!-- Besides, this evaluation showcases the benefit of enabling Dataset Discovery for retrieving relevant datasets in a multidisciplinary context. -->

### Number of retrieved datasets
| Search | ODATIS | THEIA-LAND | THEIA-HYDRO | FORMATER | AERIS |merged-KG |
|--------|--------|------------|-------------|----------|-------|----------|
S1 (temperature) | 4622 | 248 | 0 | 78 | 398 | 5346
S2 (air) | 2859 | 203 | 25 | 25 | 537 | 3649
S3 (water) | 8265 | 459 | 73806 | 28 | 232 | 82790
S4 (carbon) | 539 | 80 | 0 | 4 | 121 | 744
S5 (conductivity) | 98 | 94 | 0 | 0 | 9 | 201

### Dataset gain factor
| Search | ODATIS | THEIA-LAND | THEIA-HYDRO | FORMATER | AERIS |merged-KG |
|--------|--------|------------|-------------|----------|-------|----------|
S1 (temperature) | 0,16  | 20,56  | - | 67,54  | 12,43  | -
S2 (air) | 0,28  | 16,98  | 144,96  | 144,96  | 5,80  | -
S3 (water) | 9,02  | 179,37  | 0,12  | 2955,79  | 355,85  | -
S4 (carbon) | 0,38  | 8,30  | - | 185,00  | 5,15  | -
S5 (conductivity) | 1,05  | 1,14  | - | - | 21,33  | -