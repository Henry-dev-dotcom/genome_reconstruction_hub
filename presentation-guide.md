# Presentation Defence Guide
## Group 2: Genome Reconstruction of a Novel Emerging Pathogen

### Opening Summary
Our case involves a previously unidentified bacterial pathogen from rural Ghana. Conventional diagnostics failed, so whole-genome sequencing was used to reconstruct the genome and understand the organism.

### Main Scientific Problem
The major challenge was that no closely related reference genome was initially available. Therefore, reference mapping was not the best starting strategy.

### Why De Novo Assembly?
De novo assembly was used because it reconstructs the genome from sequencing reads without depending on a reference genome. This is important for novel pathogens because the genome may contain unique regions.

### Why Assembly A Was Weak
Assembly A had 375 contigs, an N50 of 40 kb, and 95% coverage. This means it was fragmented and incomplete. Short Illumina reads may not have resolved repeats or complex regions.

### Why Assembly B Was Better
After Nanopore reads were added, Assembly B improved to 15 contigs, N50 of 2.3 Mb, and 99.7% coverage. This shows that long reads improved continuity and genome completeness.

### How to Explain N50
N50 measures assembly continuity. A higher N50 means longer assembled sequences and a more continuous genome.

### How to Explain Contigs
Contigs are continuous assembled DNA sequences. Fewer contigs usually mean a better assembly.

### How to Explain Coverage
Coverage tells how much of the genome is represented. Higher coverage usually means a more complete assembly.

### How to Discuss the 96% Reference Genome
The 96% similar genome is useful for comparison and annotation, but it should not replace de novo assembly. Overdependence may cause reference bias and hide unique genes.

### Recommended Strategy
We recommend hybrid de novo assembly as the primary method, followed by quality assessment, polishing, annotation, taxonomic classification, and careful reference comparison.

### Strong Final Defence Statement
Because this pathogen is novel, the safest and most scientifically reliable approach is hybrid de novo assembly. It avoids early reference bias while using Illumina accuracy and Nanopore long-read continuity to produce a better genome reconstruction.
