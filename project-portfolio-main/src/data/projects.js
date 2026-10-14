// Project data shown in the Projects section and modal.
// To add a project, append an object with the same shape.

export const projects = [
  {
    id: "securityquest",
    title: "SecurityQuest",
    subtitle: "AI-Powered Cybersecurity Education Platform",
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
];
