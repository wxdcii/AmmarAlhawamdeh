import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  royal,
  ad,
  ain,
  quick,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  Nix,
  sport,
  drone,
  fantasy,
  me,
  sign,
  match,
  self,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: creator,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "PHP",
    icon: tailwind,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "IT Manager & Web Developer",
    company_name: "Royal Class",
    company_website: "https://rct-uae.com/",
    icon: royal,
    iconBg: "#E6DEDD",
    date: "April 2025 - Present",
    points: [
      "Led the development of the company’s primary web platform using HTML, CSS, JavaScript, and PHP, increasing online traffic by 60% within 3 months.",
      "Managed IT infrastructure and provided technical support for 30+ employees, resolving issues with systems, networking, and hardware.",
      "Worked on AI Interview Agent to schedule automated interviews, targeting a 50% reduction in recruiter efforts.",
      "Oversaw vendor negotiations, implemented software upgrades, and enforced data security policies across 2 office branches.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "ICT Center - AD Police",
    company_website: "https://www.adpolice.gov.ae/en/Media-Center/News/2021/06/29/ADP-ICT-Department-Renews-ISO-Certificate-",
    icon: ad,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - April 2025",
    points: [
      "Developed 8+ internal web platforms using React, TypeScript, and HTML/CSS, streamlining workflows for 5+ departments.",
      "Built and deployed a TensorFlow-based chatbot handling 100+ daily queries, reducing support load by 40%.",
      "Integrated 6+ REST APIs and a MySQL database, improving data access speed and backend performance.",
      "Collaborated with a team of 4 senior developers to debug and refactor legacy code, boosting system reliability by 25%.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Al-Ain University",
    company_website: "https://www.aau.ac.ae/en/",
    icon: ain,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Co-authored and presented the paper `AI-Powered Sign Language Translation ` at GACLM 2025, an international AI conference attended by 200+ researchers.",
      "Contributed to 6+ AI-focused research projects exploring machine learning, natural language processing, and assistive technologies for accessibility.",
      "Participated in the creation and refinement of 5+ academic papers, including peer-reviewed submissions for international journals and conferences.",
      "Collaborated with 3 faculty supervisors and 6 researchers, contributing to cross-functional research teams across a period of 18+ months.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Quickworks",
    company_website: "https://quick-works.com/",
    icon: quick,
    iconBg: "#E6DEDD",
    date: "june 2022 - Jul 2023",
    points: [
  "Implemented pre-built, AI-enhanced white-label on-demand applications (e.g., Quick Delivery, Quick Orders, Quick Rides) to accelerate product deployment for diverse industries.",

  "Customized and configured full-stack solutions—covering admin dashboards, merchant and driver panels, customer-facing apps, and responsive websites—for faster time-to-market across delivery, e-commerce, taxi and home-services verticals.",

  "Leveraged modern tech stack including Node.js, Angular, MongoDB, AWS, Swift, and Kotlin to ensure high performance, scalability, and adaptability across mobile and web platforms.",

  "Integrated advanced features like real-time order tracking, AI-powered route optimization, real-time inventory management, multi-payment options, and push notifications to enhance user experience and operational efficiency.",

  "Supported end-to-end client projects—deploying solutions within days through white-label frameworks while offering customizable workflows, localization, and on-going support across multiple geographies.",
],

  },
  {
    title: "Front-End developer  ",
    company_name: "N-iX",
    company_website: "https://www.n-ix.com/",
    icon: Nix,
    iconBg: "#E6DEDD",
    date: " Sep 2021 - Nov 2022",
   points: [
  "Collaborated on enterprise-grade software solutions at N-iX, focusing on scalability, performance, and security across diverse platforms.",
  "Worked with distributed teams to deliver projects for global clients in industries such as fintech, healthcare, logistics, and telecom.",
  "Developed and integrated cloud-native applications leveraging AWS, Azure, and Google Cloud services to optimize system reliability and cost efficiency.",
  "Applied agile methodologies and CI/CD pipelines to streamline development workflows and ensure faster delivery cycles.",
  "Contributed to innovative projects involving big data analytics, machine learning models, and AI-driven automation.",
],


  },
  {
    title: "Software Engineer & Technical Instructor",
    company_name: "Self-employed",
    company_website: "https://www.linkedin.com/in/ammaralhawamdeh/",
    icon: self,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Aug 2023",
  points: [
  "Designed and delivered coding courses and technical workshops, simplifying complex software engineering concepts for students and junior developers.",
  "Developed full-stack applications using technologies such as React, Node.js, and Python, while integrating real project examples into teaching material.",
  "Mentored aspiring programmers through one-on-one sessions and group coding labs, guiding them in best practices, debugging techniques, and problem-solving strategies.",
  "Created curriculum and hands-on exercises covering software development fundamentals, algorithms, data structures, and modern frameworks.",
  "Balanced dual responsibilities of building production-ready software solutions and nurturing the next generation of developers through structured training programs.",
],


  },
];

const projects = [
  {
    name: "DRONE PLATFORM",
    description: "HTML, CSS, JavaScript, Stripe",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Stripe", color: "orange-text-gradient" },
    ],
    image: drone,
    hosted_link: "https://drone-leaf-website.vercel.app/", 
  },
  {
    name: "PORTFOLIO WEBSITE",
    description: "React, GSAP, Framer Motion, TypeScript",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
      { name: "TypeScript", color: "orange-text-gradient" },
    ],
    image: me,
    hosted_link: "#",
  },
  {
    name: "Eazy Talk - MOBILE APP",
    description: "Flutter, Swift, React Native, Firebase",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Swift", color: "green-text-gradient" },
      { name: "React Native", color: "pink-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
    ],
    image: sign,
    hosted_link: "sign",
  },
  {
    name: "Sports Ticket Booking",
    description: "React, html&css, paypal",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "HTML&CSS", color: "green-text-gradient" },
      { name: "Paypal", color: "pink-text-gradient" },
    ],
    image: sport,
    hosted_link: "https://wxdcii.github.io/TicketBooking/",
  },
  {
    name: "RCT Website",
    description: "Node.js, JavaScript, React,",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: " JavaScript", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: match,
    hosted_link: "https://rct-uae.com/",
  },
  {
    name: "Jordanian Fantasy ",
    description: "Node.js, JavaScript, React, Firebase, SQL",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
    ],
    image: fantasy,
    hosted_link: "https://jordanianleaugefantsayy.vercel.app/",
  },
];

const personalInfo = {
  name: "Ammar",
  fullName: "Ammar Al-Hawamdeh",
  email: "ammarralhawamdeh@gmail.com",
  mobile: "+971567132854",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React.Js, Next.Js, React-naitve,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1J8Rmwi_kSmO8HSp5y_y7BR7mORckDLJu/view?usp=drive_link",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/ammaralhawamdeh/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/wxdcii",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
