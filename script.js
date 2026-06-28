document.addEventListener("DOMContentLoaded", () => {
  const qs = (selector) => document.querySelector(selector);
  const qsa = (selector) => Array.from(document.querySelectorAll(selector));

  const safeStorage = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        return null;
      }
    }
  };

  const menuBtn = qs("#menuBtn");
  const navLinks = qs("#navLinks");
  const printBtn = qs("#printBtn");
  const themeToggle = qs("#themeToggle");
  const readingProgress = qs("#readingProgress");
  const backToTop = qs("#backToTop");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("show");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    qsa(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  qsa(".accordion-header").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      const isOpen = item.classList.toggle("active");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  qsa(".flashcard").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.classList.toggle("flipped");
      }
    });
  });

  const quizData = {
    beginner: [
      {
        question: "Why was de novo assembly used first in the case?",
        options: [
          "Because the pathogen was already fully known",
          "Because no close reference genome was initially available",
          "Because Nanopore sequencing cannot be used for bacteria"
        ],
        answer: 1,
        explanation: "De novo assembly is used when there is no suitable reference genome, so the genome is reconstructed from the reads themselves."
      },
      {
        question: "What does a contig represent?",
        options: [
          "A continuous assembled DNA sequence",
          "A patient sample only",
          "A type of antibiotic"
        ],
        answer: 0,
        explanation: "A contig is a continuous DNA sequence assembled from overlapping sequencing reads."
      },
      {
        question: "Which sequencing platform produced 150 bp reads in the case?",
        options: [
          "Nanopore",
          "Illumina",
          "Reference mapping"
        ],
        answer: 1,
        explanation: "The case states that Illumina produced 20 million reads of 150 bp."
      },
      {
        question: "Which assembly is more complete based on the metrics?",
        options: [
          "Assembly A",
          "Assembly B",
          "Neither assembly"
        ],
        answer: 1,
        explanation: "Assembly B has fewer contigs, a higher N50, and higher coverage."
      },
      {
        question: "What does higher coverage generally suggest?",
        options: [
          "More of the genome is represented",
          "The pathogen is not bacterial",
          "The assembly must be wrong"
        ],
        answer: 0,
        explanation: "Higher coverage usually means more of the genome is represented by the sequencing data or assembly."
      }
    ],

    intermediate: [
      {
        question: "Why can Illumina-only assembly become fragmented?",
        options: [
          "Short reads may fail to span repetitive or complex regions",
          "Illumina reads are always longer than Nanopore reads",
          "Illumina cannot sequence DNA"
        ],
        answer: 0,
        explanation: "Short reads are accurate but may not connect repeated or structurally complex regions."
      },
      {
        question: "What does N50 measure?",
        options: [
          "Assembly continuity",
          "The number of patients",
          "The temperature of sequencing"
        ],
        answer: 0,
        explanation: "N50 is a continuity metric. A higher N50 means larger assembled sequences contribute to half of the assembly length."
      },
      {
        question: "Why did Assembly B improve after adding Nanopore reads?",
        options: [
          "Long reads helped bridge gaps and connect contigs",
          "Nanopore removed all genes",
          "The assembly ignored all sequencing reads"
        ],
        answer: 0,
        explanation: "Nanopore long reads can span repeats and link contigs, improving continuity."
      },
      {
        question: "What is the main advantage of hybrid assembly?",
        options: [
          "It combines the accuracy of short reads with the continuity of long reads",
          "It prevents any need for quality control",
          "It always removes reference bias completely"
        ],
        answer: 0,
        explanation: "Hybrid assembly benefits from Illumina accuracy and Nanopore long-range structure."
      },
      {
        question: "What is the safest role of the 96% similar genome?",
        options: [
          "Use it for comparison and validation after de novo assembly",
          "Force all reads to match it and ignore unique regions",
          "Delete the de novo assembly"
        ],
        answer: 0,
        explanation: "The reference is useful, but the novel pathogen should not be forced to fit it completely."
      }
    ],

    advanced: [
      {
        question: "Which interpretation best explains the improvement from 375 contigs to 15 contigs?",
        options: [
          "Long reads resolved gaps and repeats that short reads could not bridge",
          "The genome became smaller after sequencing",
          "The 96% reference automatically completed the genome"
        ],
        answer: 0,
        explanation: "Long reads improve structural continuity by spanning repetitive regions and connecting fragmented contigs."
      },
      {
        question: "Why can reference mapping be biased for this case?",
        options: [
          "Unique genes or rearrangements in the novel pathogen may be missed",
          "Reference mapping never uses genomes",
          "Bias only occurs in viral genomes"
        ],
        answer: 0,
        explanation: "A reference can hide or misrepresent genomic regions that are absent from the reference but present in the new organism."
      },
      {
        question: "Which downstream analysis should follow assembly?",
        options: [
          "Quality assessment, annotation, taxonomic classification, and comparative analysis",
          "Only counting patients",
          "Discarding long reads immediately"
        ],
        answer: 0,
        explanation: "After assembly, researchers must check assembly quality and interpret the genome biologically."
      },
      {
        question: "Why is 96% similarity not enough reason to depend entirely on the reference?",
        options: [
          "The remaining difference may contain important unique genes or structural changes",
          "96% means the genomes are completely identical",
          "Similarity values are never useful"
        ],
        answer: 0,
        explanation: "Even a small percentage difference across a bacterial genome can represent many important genetic differences."
      },
      {
        question: "Which final recommendation is strongest for the PBL case?",
        options: [
          "Use hybrid de novo assembly first, then compare carefully with the related reference",
          "Use Sanger sequencing alone",
          "Use the 96% reference as the only assembly method"
        ],
        answer: 0,
        explanation: "Hybrid de novo assembly is best because the organism is novel and the long-read data improved assembly quality."
      }
    ]
  };

  let currentLevel = "beginner";

  const quizQuestions = qs("#quizQuestions");
  const quizForm = qs("#quizForm");
  const quizResult = qs("#quizResult");
  const quizAdvice = qs("#quizAdvice");
  const resetQuiz = qs("#resetQuiz");
  const scorePanel = qs("#scorePanel");
  const currentLevelLabel = qs("#currentLevel");
  const questionCount = qs("#questionCount");
  const lastScore = qs("#lastScore");

  function formatLevel(level) {
    return level.charAt(0).toUpperCase() + level.slice(1);
  }

  function renderQuiz(level) {
    if (!quizQuestions || !quizData[level]) return;

    currentLevel = level;
    const questions = quizData[level];

    if (currentLevelLabel) currentLevelLabel.textContent = formatLevel(level);
    if (questionCount) questionCount.textContent = questions.length;
    if (lastScore) lastScore.textContent = safeStorage.get(`score-${level}`) || "Not attempted";

    quizQuestions.innerHTML = questions.map((item, index) => {
      const options = item.options.map((option, optionIndex) => `
        <label data-question="${index}" data-option="${optionIndex}">
          <input type="radio" name="q${index}" value="${optionIndex}">
          ${option}
        </label>
      `).join("");

      return `
        <div class="question">
          <p><strong>${index + 1}. ${item.question}</strong></p>
          ${options}
          <p class="answer-note" id="explanation-${index}">${item.explanation}</p>
        </div>
      `;
    }).join("");

    if (scorePanel) scorePanel.classList.remove("show");
    if (quizResult) quizResult.textContent = "";
    if (quizAdvice) quizAdvice.textContent = "";
  }

  qsa(".quiz-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      qsa(".quiz-tab").forEach((btn) => btn.classList.remove("active"));
      tab.classList.add("active");
      renderQuiz(tab.dataset.level);
    });
  });

  if (quizForm) {
    quizForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const questions = quizData[currentLevel];
      let score = 0;

      qsa(".question label").forEach((label) => {
        label.classList.remove("option-correct", "option-wrong");
      });

      questions.forEach((item, index) => {
        const selected = qs(`input[name="q${index}"]:checked`);
        const correctLabel = qs(`label[data-question="${index}"][data-option="${item.answer}"]`);
        const explanation = qs(`#explanation-${index}`);

        if (correctLabel) {
          correctLabel.classList.add("option-correct");
        }

        if (selected) {
          const selectedIndex = Number(selected.value);
          const selectedLabel = qs(`label[data-question="${index}"][data-option="${selectedIndex}"]`);

          if (selectedIndex === item.answer) {
            score++;
          } else if (selectedLabel) {
            selectedLabel.classList.add("option-wrong");
          }
        }

        if (explanation) {
          explanation.classList.add("show");
        }
      });

      const total = questions.length;
      const scoreText = `${score}/${total}`;
      safeStorage.set(`score-${currentLevel}`, scoreText);

      if (lastScore) lastScore.textContent = scoreText;
      if (scorePanel) scorePanel.classList.add("show");
      if (quizResult) quizResult.textContent = `You scored ${scoreText}.`;

      if (quizAdvice) {
        if (score === total) {
          quizAdvice.textContent = "Excellent. You can explain this level confidently.";
        } else if (score >= Math.ceil(total * 0.6)) {
          quizAdvice.textContent = "Good attempt. Review the corrections and try again.";
        } else {
          quizAdvice.textContent = "Go back to the learning modules, especially Assembly Metrics and Hybrid Assembly, then retake the quiz.";
        }
      }
    });
  }

  if (resetQuiz) {
    resetQuiz.addEventListener("click", () => {
      renderQuiz(currentLevel);
    });
  }

  renderQuiz(currentLevel);

  const glossarySearch = qs("#glossarySearch");
  const glossaryCards = qsa(".glossary-card");
  const noGlossaryResults = qs("#noGlossaryResults");

  if (glossarySearch) {
    glossarySearch.addEventListener("input", () => {
      const searchValue = glossarySearch.value.trim().toLowerCase();
      let visibleCount = 0;

      glossaryCards.forEach((card) => {
        const term = (card.dataset.term || "").toLowerCase();
        const text = card.textContent.toLowerCase();
        const isMatch = term.includes(searchValue) || text.includes(searchValue);

        card.style.display = isMatch ? "block" : "none";

        if (isMatch) visibleCount++;
      });

      if (noGlossaryResults) {
        noGlossaryResults.classList.toggle("show", visibleCount === 0);
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    qsa(".reveal").forEach((el) => observer.observe(el));
  } else {
    qsa(".reveal").forEach((el) => el.classList.add("visible"));
  }

  function updateProgress() {
    if (!readingProgress) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    readingProgress.style.width = `${progress}%`;

    if (backToTop) {
      backToTop.classList.toggle("show", scrollTop > 600);
    }
  }

  window.addEventListener("scroll", updateProgress);
  updateProgress();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (themeToggle) {
    const savedTheme = safeStorage.get("genomeHubTheme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggle.textContent = "Light";
    }

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "Light" : "Dark";
      safeStorage.set("genomeHubTheme", isDark ? "dark" : "light");
    });
  }
});
