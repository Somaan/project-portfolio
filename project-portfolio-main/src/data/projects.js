// Project data shown in the Projects section and modal.
// To add a project, append an object with the same shape.

export const projects = [
  {
    id: "ecg-gradcam",
    title: "Interpretable ECG Classification",
    subtitle: "1D CNN & Grad-CAM for Arrhythmia Detection",
    label: "MSc Thesis",
    category: "Deep Learning Research",
    primaryTech: "PyTorch",
    technologies: [
      "Python",
      "PyTorch",
      "Grad-CAM",
      "SMOTE",
      "SciPy",
      "scikit-learn",
      "WFDB",
    ],
    description:
      "Deep learning research applying Grad-CAM to a 1D CNN for multi-class ECG arrhythmia classification across the five AAMI classes. Achieved a leak-free 77.64% test accuracy on a strict inter-patient split of the MIT-BIH database, with explanations validated against known ECG morphology.",
    keyMetrics: [
      {
        label: "Test Accuracy",
        value: "77.64%",
        description: "Leak-free inter-patient evaluation",
      },
      {
        label: "Faithfulness",
        value: "0.983",
        description: "Peak Grad-CAM faithfulness score",
      },
      {
        label: "Heartbeats",
        value: "99,112",
        description: "Extracted from the MIT-BIH database",
      },
    ],
    keyAchievements: [
      "77.64% test accuracy on de Chazal's inter-patient split, with no patient appearing in both training and test data",
      "Faithfulness scores up to 0.983, confirming Grad-CAM explanations for ventricular and fusion beats reflect what drives the model",
      "0.905 recall on ventricular (V) beats, with activation concentrated on the wide QRS complex and T-wave",
      "84.4% of supraventricular (S) beats misclassified as normal, traced to insufficient P-wave engagement",
      "99,112 heartbeats extracted from the MIT-BIH database and mapped to the five AAMI classes",
      "Manual Grad-CAM implementation using PyTorch hooks, as the standard library does not support 1D signal inputs",
      "Showed faithfulness scores shift with Grad-CAM hook placement, so explanations must be interrogated rather than taken at face value",
    ],
    technicalHighlights: [
      "Zero-phase Butterworth bandpass filter (0.5–40 Hz), selected by comparing passbands, followed by per-record z-score normalisation",
      "One-second (360-sample) beat windows centred on annotated R-peaks, mapped to the five AAMI classes (N, S, V, F, Q)",
      "SMOTE applied to the training set only, balancing all five classes while validation and test sets keep their true distributions",
      "Two-block 1D CNN (32/64 filters, kernel size 7, batch normalisation, max pooling, dropout 0.5) with a two-layer classification head",
      "Trained with Adam (learning rate 0.001, batch size 64) and cross-entropy loss",
      "Grad-CAM computed from the final convolutional layer using pre-softmax logits to preserve the class-discriminative gradient signal",
    ],
    liveDemo: null,
    githubRepo: null,
    reportLink: "/documents/ecg-gradcam-dissertation.pdf",
    images: [
      {
        src: "/images/ecg-cnn-architecture.png",
        alt: "1D CNN architecture with Grad-CAM target layer",
        caption:
          "Two-block 1D CNN architecture, with the Grad-CAM heatmap computed from the second convolutional layer's activations and gradients",
      },
      {
        src: "/images/ecg-gradcam-ventricular.png",
        alt: "Grad-CAM heatmap for a correctly classified ventricular beat",
        caption:
          "Grad-CAM on a correctly classified ventricular (V) beat: activation concentrates on the wide QRS complex and the T-wave",
      },
      {
        src: "/images/ecg-gradcam-s-misclassified.png",
        alt: "Grad-CAM heatmap for a supraventricular beat misclassified as normal",
        caption:
          "A supraventricular (S) beat misclassified as normal: weak activation over the P-wave, the region that distinguishes S beats",
      },
      {
        src: "/images/ecg-confusion-matrix-ds2.png",
        alt: "Confusion matrix on the DS2 test set",
        caption:
          "Confusion matrix on the held-out DS2 test set, drawn entirely from patients unseen during training",
      },
      {
        src: "/images/ecg-filter-comparison.png",
        alt: "Bandpass filter comparison",
        caption:
          "Raw signal compared against loose, aggressive and selected (0.5–40 Hz) bandpass filters, used to justify the preprocessing choice",
      },
    ],
  },
  {
    id: "securityquest",
    title: "SecurityQuest",
    subtitle: "AI-Powered Cybersecurity Education Platform",
    label: "BSc Thesis",
    //period: "2024-2025 (Final Year Project)",
    category: "Full-Stack Development",
    primaryTech: "React",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Express.js",
      "LLM Integration",
      "Jest",
      "bcrypt",
    ],
    description:
      "PERN full-stack gamified platform addressing human vulnerability to social engineering attacks through interactive learning experiences. Features AI-powered personalised feedback and comprehensive achievement systems.",
    keyMetrics: [
      {
        label: "User Improvement",
        value: "52.2%",
        description: "Increase in cybersecurity confidence",
      },
      {
        label: "Test Coverage",
        value: "100%",
        description: "Across 326 automated test cases",
      },
      {
        label: "User Accuracy",
        value: "100%",
        description: "Phishing identification post-training",
      },
    ],
    keyAchievements: [
      "52.2% improvement in user cybersecurity confidence through testing across 6 participants",
      "100% test coverage across 326 automated test cases using Jest and React Testing Library",
      "AI-powered personalised feedback system using locally-hosted LLM (Ollama)",
      "Three-tier progressive difficulty system covering phishing, vishing, smishing, and spear-phishing",
      "100% of participants correctly identified phishing responses after intervention (vs 66.6% before)",
      "83.3% accuracy identifying threats across multiple communication channels",
    ],
    technicalHighlights: [
      "PERN stack architecture (PostgreSQL-Express-React-Node.js) with integrated LLM capabilities",
      "Secure authentication with bcrypt hashing (work factor 10) and CAPTCHA verification",
      "Achievement system with streak tracking, leaderboards, and visual progress indicators",
      "Comprehensive user analytics with detailed performance tracking and behavioural analysis",
      "Multi-format quiz system: email phishing, SMS smishing, voice transcript analysis",
      "Real-time feedback generation with context-aware AI recommendations",
    ],
    liveDemo: null,
    githubRepo: "https://github.com/Somaan/SecurityQuest",
    images: [
      {
        src: "/images/dashboard.png",
        alt: "SecurityQuest Main Dashboard Interface",
        caption:
          "Main dashboard showing progress tracking, achievement notifications, and learning modules",
      },
      {
        src: "/images/system architecture.png",
        alt: "System Architecture - SecurityQuest (PERN Stack with LLM Integration)",
        caption:
          "Three-tier system architecture showing client-side React, server-side Node.js/Express, and PostgreSQL database with Ollama LLM layer",
      },
      {
        src: "/images/email phishing.png",
        alt: "Email Phishing Quiz Interface",
        caption:
          "Interactive phishing identification with clickable suspicious elements",
      },
      {
        src: "/images/pre vs post.png",
        alt: "Pre vs Post-Intervention Security Knowledge Results",
        caption:
          "User testing results showing 52.2% average improvement in cybersecurity confidence across all measured categories",
      },
    ],
  },
  {
    id: "drug-risk-bayesian",
    title: "Drug Consumption Risk Modelling",
    subtitle: "Bayesian Networks & Influence Diagrams for Public Health Decisions",
    category: "Probabilistic Modelling",
    primaryTech: "Python",
    technologies: [
      "Python",
      "pyAgrum",
      "Bayesian Networks",
      "Influence Diagrams",
      "Causal Inference",
      "pandas",
    ],
    description:
      "Probabilistic risk model applying a causal Bayesian network to the UCI Drug Consumption dataset, extended into an influence diagram for public health intervention decisions. Identified sensation-seeking as the dominant risk factor through observational, interventional and counterfactual reasoning.",
    keyMetrics: [
      {
        label: "High-Risk Posterior",
        value: "67.5%",
        description: "Regular cannabis use, up from a 41.9% prior",
      },
      {
        label: "Counterfactual",
        value: "−48%",
        description: "Regular use had sensation-seeking been low",
      },
      {
        label: "Observations",
        value: "1,884",
        description: "Used to learn network parameters",
      },
    ],
    keyAchievements: [
      "67.5% probability of regular cannabis use for a young, male, high sensation-seeking profile, up from a 41.9% prior",
      "48% drop in regular cannabis use in the counterfactual world where sensation-seeking was low, with regular cocaine use falling from 17.2% to 3.6%",
      "0.672 interventional probability P(Regular | do(SensationSeeking = High)) using the do-operator and backdoor adjustment",
      "9-node causal network spanning demographics, personality traits and drug use outcomes",
      "Parameters learned from 1,884 observations by maximum likelihood estimation",
      "Optimal policy (MEU 1.52) showed population-wide intervention costs outweigh its benefits, supporting targeted intervention for high-risk profiles",
    ],
    technicalHighlights: [
      "Structure defined manually from gateway drug theory and Big Five personality research, rather than hill climbing, to keep arcs causally plausible",
      "Discretised personality scores and collapsed drug use from seven classes to three, keeping CPTs tractable (3 to 81 parameters per node)",
      "Exact inference with LazyPropagation and interventional queries through pyAgrum's causal module",
      "Counterfactual world built by removing SensationSeeking's incoming arcs from Age and Gender",
      "Influence diagram with two decision nodes (Intervention, EducationCampaign) and health utilities from +10 (non-user, no intervention) to −6 (regular user, no intervention)",
      "Optimal policy computed with Shafer-Shenoy LIMID inference and compared against manually fixed decision scenarios",
    ],
    liveDemo: null,
    githubRepo: null,
    reportLink: "/documents/drug-consumption-bayesian-report.pdf",
    images: [
      {
        src: "/images/bayes-network-structure.png",
        alt: "Bayesian network structure",
        caption:
          "Network structure: demographic root nodes, personality mediators and drug use outcomes",
      },
      {
        src: "/images/bayes-posterior-high-risk.png",
        alt: "Posterior distributions for a high-risk profile",
        caption:
          "Inference for a young, male, high sensation-seeking profile: regular cannabis use rises to 67.5%",
      },
      {
        src: "/images/bayes-influence-diagram.png",
        alt: "Influence diagram with decision and utility nodes",
        caption:
          "The network extended into an influence diagram with intervention and education campaign decisions, and health and cost utilities",
      },
      {
        src: "/images/bayes-optimal-policy.png",
        alt: "LIMID inference showing the optimal policy",
        caption:
          "LIMID inference computing the optimal policy and its maximum expected utility (MEU 1.52)",
      },
    ],
  },
  {
    id: "squash-hawkeye",
    title: "Squash Hawkeye",
    subtitle: "Computer Vision Sports Technology",
    //period: "2024 (Ubiquitous Computing Assignment)",
    category: "Computer Vision",
    primaryTech: "Python",
    technologies: [
      "Python",
      "OpenCV",
      "Java",
      "FFmpeg",
      "HoughCircles",
      "Audio Processing",
    ],
    description:
      "Multi-modal system integrating computer vision and audio processing for automated sports officiating. Created cost-effective alternative to professional systems costing £60,000-£100,000.",
    keyMetrics: [
      {
        label: "Accuracy Rate",
        value: "82%",
        description: "In challenging edge cases",
      },
      {
        label: "Cost Reduction",
        value: "99%",
        description: "vs professional systems",
      },
      {
        label: "Video Processing",
        value: "1080p60",
        description: "Smartphone footage analysis",
      },
    ],
    keyAchievements: [
      "82% accuracy in challenging edge cases where ball position is critical for IN/OUT decisions",
      "Successfully developed offline processing pipeline handling smartphone video (1080p@60fps)",
      "Overcame Raspberry Pi hardware limitations by pivoting to PC-based offline analysis",
      "Cost-effective solution using accessible hardware (smartphone, laptop) vs professional systems",
      "Synchronised audio impact detection with visual ball tracking for accurate line calling",
      "Implemented official squash rules in decision logic (ball on line = OUT) with 1-pixel tolerance",
    ],
    technicalHighlights: [
      "Two-stage processing: smartphone video capture followed by offline PC analysis",
      "OpenCV-based ball detection using HoughCircles transform with tuned parameters (dp=1.2, minDist=20)",
      "Audio processing with FFmpeg extraction and Java-based impact detection at 70% amplitude threshold",
      "Synchronised processing handling smartphone video with precise timestamp correlation",
      "Image enhancement pipeline improving contrast and brightness for better detection",
      "Decision logic implementing official squash service line rules with 1-pixel tolerance",
    ],
    liveDemo: null,
    githubRepo: "https://github.com/Somaan/Squash-Hawkeye",
    images: [
      {
        src: "/images/Figure 1.png",
        alt: "Legal Squash Serve Trajectory Diagram",
        caption:
          "Official squash court diagram showing typical ball path during a legal serve, illustrating the technical requirements for service line detection",
      },
      {
        src: "/images/Figure 5.png",
        alt: "Smartphone Recording Setup",
        caption:
          "Cost-effective recording setup using smartphone on tripod positioned with clear view of service box, demonstrating accessible hardware alternative to professional systems",
      },
      {
        src: "/images/Figure 10.png",
        alt: "Edge Case Validation Results",
        caption:
          "Grid of challenging edge cases showing system accuracy in borderline scenarios where ball positions are critical for IN/OUT decisions, achieving 82% accuracy",
      },
      {
        src: "/images/Figure 11.png",
        alt: "Multi-Layer System Output",
        caption:
          "Console output showing precise coordinates, measurements, and decision logic - demonstrating the system's transparent multi-depth feedback for validation and development",
      },
    ],
  },
  {
    id: "mental-health-tech",
    title: "Mental Health in Tech",
    subtitle: "Predicting Treatment-Seeking with SVM & K-Means",
    category: "Machine Learning",
    primaryTech: "Python",
    technologies: [
      "Python",
      "scikit-learn",
      "pandas",
      "SVM",
      "K-Means",
      "PCA",
      "Matplotlib",
    ],
    description:
      "Machine learning study predicting whether tech workers seek mental health treatment from workplace and demographic factors in the OSMI survey. Achieved 69.7% test accuracy with a linear SVM, within published benchmarks, and explored respondent groupings with K-Means clustering.",
    keyMetrics: [
      {
        label: "Test Accuracy",
        value: "69.7%",
        description: "Within the 69–81% published benchmark range",
      },
      {
        label: "Cross-Validation",
        value: "70.9%",
        description: "5-fold, no significant overfitting",
      },
      {
        label: "Respondents",
        value: "1,251",
        description: "After cleaning and preprocessing",
      },
    ],
    keyAchievements: [
      "69.7% test accuracy with a linear SVM (F1 0.705, precision 0.758), within the 69–81% range of published benchmarks",
      "70.9% cross-validation and 72.2% training accuracy, confirming good generalisation without overfitting",
      "19 values of the regularisation parameter C (0.05–0.95) compared with 10-fold cross-validation, showing the default was already near-optimal",
      "3 respondent groups (553, 396 and 302) identified with K-Means, using the elbow method to choose K",
      "50+ inconsistent free-text gender responses standardised into three categories",
      "Critical evaluation of limitations including ordinal encoding, self-report bias and a 79% male, 2014-era sample",
    ],
    technicalHighlights: [
      "Dropped high-missingness columns (state 40.9%, comments 87%) and mode-imputed remaining categorical gaps",
      "Filtered invalid ages to the 18–80 range before modelling",
      "Min-max scaling so no feature dominates the SVM's distance-based hyperplane",
      "80/20 train/test split with a fixed random state for reproducibility",
      "K-Means with k-means++ initialisation, 10 restarts and up to 200 iterations",
      "PCA projection to two components for cluster visualisation (24.6% of variance retained)",
    ],
    liveDemo: null,
    githubRepo: null,
    reportLink: "/documents/mental-health-tech-report.pdf",
    images: [
      {
        src: "/images/mental-health-confusion-matrix.png",
        alt: "SVM confusion matrix",
        caption:
          "Baseline SVM (C = 1.0) confusion matrix on the held-out test set",
      },
      {
        src: "/images/mental-health-c-tuning.png",
        alt: "Cross-validation accuracy across regularisation values",
        caption:
          "Cross-validation accuracy across regularisation values C, peaking at C = 0.75",
      },
      {
        src: "/images/mental-health-elbow.png",
        alt: "K-Means elbow plot",
        caption: "Elbow method used to choose the number of K-Means clusters",
      },
      {
        src: "/images/mental-health-pca-clusters.png",
        alt: "K-Means clusters in PCA space",
        caption: "Three K-Means clusters projected into two PCA components",
      },
    ],
  },
  {
    id: "ubiquitous-computing",
    title: "Sensing & Machine Learning",
    subtitle: "Ubiquitous Computing Research Applications",
    //period: "2024 (Ubiquitous Computing Labs)",
    category: "Machine Learning Research",
    primaryTech: "Python",
    technologies: [
      "Python",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Signal Processing",
      "Feature Engineering",
    ],
    description:
      "Comprehensive research project applying machine learning to mobile sensor data for activity recognition and indoor localisation. Achieved 84.33% cross-user accuracy through sophisticated feature engineering and robust experimental methodology.",
    keyMetrics: [
      {
        label: "Cross-User Accuracy",
        value: "84.33%",
        description: "Activity recognition across different users",
      },
      {
        label: "Feature Engineering",
        value: "13+",
        description: "Statistical, frequency, and temporal features",
      },
      {
        label: "Activity Classes",
        value: "7",
        description: "Stationary, walking, stairs, elevator, running",
      },
    ],
    keyAchievements: [
      "84.33% cross-user accuracy in activity recognition, demonstrating strong model generalisation",
      "Comprehensive feature engineering including FFT analysis, acceleration jerk, and signal energy ratios",
      "Robust experimental methodology with 5-fold cross-validation and person-independent testing",
      "Multi-modal sensor fusion combining accelerometer and barometer data for enhanced classification",
      "Indoor WiFi localisation using cosine similarity of signal strength fingerprints",
      "Systematic performance analysis with precision/recall metrics and detailed confusion matrices",
      "Real-world data collection across multiple users and environmental conditions",
    ],
    technicalHighlights: [
      "Advanced feature extraction: statistical measures, FFT power spectra (equal & logarithmic), pressure slopes",
      "Sensor fusion pipeline combining accelerometer magnitude, variance, and barometric pressure derivatives",
      "Cross-user validation demonstrating model robustness across different individuals and phone placements",
      "Dynamic thresholding and adaptive algorithms for handling varied environmental conditions",
      "WiFi fingerprinting using cosine similarity for indoor localisation across building floors",
      "Comprehensive data preprocessing: lowess smoothing, interpolation, duplicate removal",
      "Decision tree classification with recursive feature elimination for optimal feature selection",
    ],
    liveDemo: null,
    reportLink: "/documents/100318760.pdf",
    images: [
      {
        src: "/images/raw-sensor-data.png",
        alt: "Raw Sensor Data Visualisation",
        caption:
          "Time series visualisation showing accelerometer magnitude, barometric pressure, and activity labels across 7 different movement patterns",
      },
      {
        src: "/images/feature-analysis.png",
        alt: "Mean Acceleration Magnitude Analysis",
        caption:
          "Feature engineering showing distinct acceleration patterns: running peaks (~20m/s²), walking (~15m/s²), and stationary baseline (~9.8m/s²) demonstrating clear activity separability",
      },
      {
        src: "/images/confusion-matrices.png",
        alt: "Cross-User Validation Confusion Matrix",
        caption:
          "Cross-user validation results achieving 84.33% accuracy when trained on other users' data and tested on new subjects, demonstrating strong model generalisation across different individuals",
      },
      {
        src: "/images/wifi-localisation.png",
        alt: "WiFi Signal Strength Indoor Localisation",
        caption:
          "WiFi fingerprinting results showing signal strength patterns across different building locations and cosine similarity heatmap for location classification",
      },
      {
        src: "/images/wifi-combined-data.png",
        alt: "Enhanced WiFi Localisation with Combined User Data",
        caption:
          "Multi-user WiFi fingerprinting demonstrating improved location accuracy when aggregating signal data from multiple devices and users across building floors",
      },
    ],
  },
  {
    id: "social-network",
    title: "Concurrent Social Network Simulator",
    subtitle: "Multi-Threaded Messaging with Haskell MVars",
    category: "Functional Programming",
    primaryTech: "Haskell",
    technologies: ["Haskell", "Stack", "Concurrency", "MVars", "System.Random"],
    description:
      "Haskell simulation of a social network where 10 users run as concurrent threads, exchanging random messages until a global limit is reached. Coordinates shared state safely with MVars and extends the specification with an online/offline presence system.",
    keyMetrics: [
      {
        label: "Concurrent Threads",
        value: "10",
        description: "One forkIO thread per user",
      },
      {
        label: "Message Limit",
        value: "100",
        description: "Enforced exactly, with no overshoot",
      },
      {
        label: "MVars",
        value: "11",
        description: "1 global counter + 10 per-user counters",
      },
    ],
    keyAchievements: [
      "10 concurrent user threads spawned with forkIO, each messaging randomly chosen recipients",
      "Exactly 100 messages enforced after diagnosing a race condition that occasionally sent 101–102",
      "11 MVars in a two-tier design (1 global counter, 10 per-user counters), so threads only contend when updating the same user",
      "Online/offline presence system beyond the specification, with a 50/50 random status per user",
      "Per-user statistics on messages received, plus an online/offline breakdown, reported when the simulation completes",
      "Progress reported every 25 messages to keep console output readable",
    ],
    technicalHighlights: [
      "Atomic check-and-increment: the global counter MVar is held from the limit check until the new count is written back",
      "Offline users still receive messages (inbox simulation) but release the lock and back off for 2 seconds before retrying",
      "Randomised send delays between 0.1 and 1 second with randomRIO to simulate realistic activity",
      "randomIO for type-based status initialisation and randomRIO for range-based message and recipient selection",
      "Separate Message type with sender, receiver and content fields, ready for features like conversation threading",
      "Completion monitor polls the shared counter every 0.5 seconds before printing final statistics",
    ],
    liveDemo: null,
    githubRepo: "https://github.com/Somaan/social-network",
    reportLink: "/documents/social-network-report.pdf",
    images: [],
  },
  {
    id: "ml-fundamentals",
    title: "Machine Learning Fundamentals",
    subtitle: "Core Algorithms from Regression to Density Estimation",
    category: "Machine Learning",
    primaryTech: "Python",
    technologies: [
      "Python",
      "PyTorch",
      "NumPy",
      "SciPy",
      "scikit-learn",
      "pandas",
      "Matplotlib",
    ],
    description:
      "Collection of MSc machine learning assignments implementing core algorithms: linear and logistic regression, neural networks with backpropagation, and Gaussian mixture models trained with expectation-maximisation. Reached 93.3% MLP test accuracy on Iris and 0.95 accuracy classifying phonemes with GMMs.",
    keyMetrics: [
      {
        label: "MLP Accuracy",
        value: "93.3%",
        description: "Iris test set, 32 hidden neurons",
      },
      {
        label: "GMM Accuracy",
        value: "0.95",
        description: "Two-phoneme classification",
      },
      {
        label: "Model Families",
        value: "4",
        description: "Regression, classification, NNs, GMMs",
      },
    ],
    keyAchievements: [
      "93.3% MLP test accuracy on Iris, up from 33% with a single hidden neuron, in a capacity study across 1–32 neurons",
      "0.95 accuracy classifying two phonemes with Gaussian mixture models on Peterson & Barney vowel formants",
      "70% test accuracy on Iris with one-vs-all logistic regression, with analysis of the overlapping versicolor and virginica classes",
      "4 learning rates (0.00001–0.1) compared for diabetes progression regression, identifying 0.1 as the best balance of speed and accuracy",
      "Neural network forward and backward passes implemented by hand and trained on XOR, the non-linear problem logistic regression cannot solve",
      "Showed expectation-maximisation's sensitivity to initialisation, converging to different local maxima across runs",
    ],
    technicalHighlights: [
      "Feature normalisation to zero mean and unit variance before gradient descent",
      "Regularisation strengths compared to show the shift from overfitting to underfitting",
      "Random weight initialisation to break symmetry between hidden neurons",
      "Binary cross-entropy loss for neural network training",
      "Softmax over independent binary classifiers for multiclass prediction",
      "Expectation-maximisation for mixture models with K = 3 and K = 6 components",
    ],
    liveDemo: null,
    githubRepo: null,
    reportLink: "/documents/ml-fundamentals-reports.pdf",
    images: [
      {
        src: "/images/ml-mlp-hidden-neurons.png",
        alt: "MLP accuracy against number of hidden neurons",
        caption:
          "Train and test accuracy as the MLP hidden layer grows, on the Iris dataset",
      },
      {
        src: "/images/ml-gmm-decision-regions.png",
        alt: "GMM classification regions for two phonemes",
        caption:
          "Classification matrix over a grid of F1/F2 values, using K = 3 Gaussian mixture models to separate two phonemes",
      },
      {
        src: "/images/ml-xor-training-loss.png",
        alt: "XOR training loss curve",
        caption:
          "Binary cross-entropy loss over 5,000 iterations as a hand-implemented neural network learns XOR",
      },
      {
        src: "/images/ml-logistic-decision-boundary.png",
        alt: "Logistic regression decision boundary",
        caption:
          "Learned logistic regression decision boundary separating setosa from non-setosa Iris samples",
      },
      {
        src: "/images/ml-feature-normalisation.png",
        alt: "Iris training set before and after normalisation",
        caption:
          "Iris training set before and after normalisation to zero mean and unit variance",
      },
      {
        src: "/images/ml-regularised-regression.png",
        alt: "Regularised regression predictions against ground truth",
        caption:
          "Regularised linear regression (λ = 0.1) predictions plotted against the ground truth",
      },
      {
        src: "/images/ml-vowel-formants.png",
        alt: "Vowel distribution in F1 and F2 formant space",
        caption:
          "Peterson & Barney vowel formants (F1 vs F2) across ten vowel classes",
      },
      {
        src: "/images/ml-gmm-phoneme.png",
        alt: "Gaussian mixture model fitted to a phoneme",
        caption:
          "A 3-component Gaussian mixture model fitted to one phoneme's formants with expectation-maximisation",
      },
      {
        src: "/images/ml-gmm-3d-singularity-fix.png",
        alt: "3D Gaussian mixture model on extended features",
        caption:
          "Mixture model on the extended [F1, F2, F1 + F2] features after resolving the covariance singularity problem",
      },
    ],
  },
];
