# Group 2 Study Notes
## Genome Reconstruction of a Novel Emerging Pathogen

### 1. Case Background
A previously unidentified bacterial pathogen was isolated from patients with severe febrile illness in rural Ghana. Conventional diagnostic methods failed to identify the organism, so researchers used whole-genome sequencing.

### 2. Sequencing Data
- Illumina: 20 million reads, 150 bp
- Nanopore: 250,000 reads, 12–20 kb

### 3. Why Whole-Genome Sequencing Was Needed
Whole-genome sequencing was needed because the pathogen was unknown. It allows researchers to study the organism at genome level, identify possible genes, classify the organism, and support diagnosis and public health surveillance.

### 4. Illumina Sequencing
Illumina produces many short but accurate reads. It is useful for high-accuracy base-level information. Its limitation is that short reads may not span repetitive or complex genome regions.

### 5. Nanopore Sequencing
Nanopore produces long reads. These reads are useful for bridging gaps, resolving repeats, and improving genome continuity.

### 6. De Novo Assembly
De novo assembly means reconstructing the genome without a reference genome. It was used because no closely related reference genome was initially available.

### 7. Assembly Metrics
- Contigs: continuous assembled DNA sequences. Many contigs mean fragmentation.
- N50: a measure of assembly continuity. Higher N50 means longer assembled sequences.
- Coverage: how much of the genome is represented.

### 8. Assembly A Interpretation
Assembly A had:
- 375 contigs
- N50 of 40 kb
- 95% coverage

This means Assembly A was fragmented and incomplete.

### 9. Assembly B Interpretation
Assembly B had:
- 15 contigs
- N50 of 2.3 Mb
- 99.7% coverage

This means Assembly B was much more complete and continuous.

### 10. Why Hybrid Assembly Improved the Result
Hybrid assembly combines Illumina short-read accuracy with Nanopore long-read continuity. Nanopore reads helped connect contigs and span repetitive regions.

### 11. Reference Mapping and Bias
A 96% similar reference genome was later discovered. It can be used for comparison and annotation support, but relying on it too strongly can cause reference bias. Unique genes or rearrangements in the new pathogen may be missed.

### 12. Recommended Strategy
The best strategy is hybrid de novo assembly, followed by polishing, quality assessment, annotation, taxonomic classification, and careful comparison with the 96% similar reference genome.

### 13. Clinical and Public Health Significance
Genome reconstruction helps identify the pathogen, support diagnostic development, detect important genes, guide surveillance, and support public health response.

### 14. Final Summary
The case shows that Illumina reads alone may produce a fragmented assembly, while Nanopore long reads improve continuity. For a novel pathogen, hybrid de novo assembly is the best primary strategy.
