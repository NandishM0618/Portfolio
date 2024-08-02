export const projects = [
  {
    title: "E-commerce Website",
    image: "./images/ecomm.png",
    desc: "A full-stack e-commerce platform developed using the MERN stack. It includes features such as user authentication, product management, shopping cart functionality, and order processing.",
    link: "https://github.com/NandishM0618/E-commerce/",
    liveLink: "https://ecomm-shopio.vercel.app/",
    date: "August 2023",
  },
  {
    title: "Event WebApp",
    image: "./images/Event_organizer.png",
    desc: "An event webpage project is a digital platform created to provide information, registration, and engagement opportunities for a specific event or gathering. It serves as an online hub for all aspects related to the event.",
    link: "https://github.com/NandishM0618/Event_organizing",
    liveLink: "https://gevent.netlify.app/",
    date: "April 2023",
  },

  {
    title: "Real time Collaborative Coding Platform",
    image: "./images/real-code.png",
    desc: "Blog Website: Explore a diverse world of engaging articles and stories. Immerse yourself in thought-provoking content curated for every passion and interest. Your go-to platform for inspiration, information, and endless discovery.",
    link: "https://github.com/NandishM0618/blog-app",
    liveLink: "https://collabcoe-ui.vercel.app/",
    date: "May 2023",
  },
  {
    title: "Task Management System",
    image: "./images/taskie.png",
    desc: "The Task Management System is a comprehensive tool designed to help teams efficiently manage their tasks, collaborate effectively, and track progress towards their goals. ",
    link: "https://github.com/NandishM0618/ReactCreations/tree/main/chat-app",
    date: "December 2023",
  },
  {
    title: "Space Exploration Dashboard",
    image: "./images/Space_Exploration.png",
    desc: "The Space Exploration Dashboard! This project provides a real-time view of Earth events and space launches, allowing users to stay updated on the latest happenings in the cosmos.",
    link: "https://github.com/NandishM0618/spaceExplorationDashboard/",
    liveLink: "https://mern-space.onrender.com/",
    date: "November 2023",
  },
  {
    title: "Real Time Chat App",
    image: "./images/Chat_App.png",
    desc: "A simple real-time chat application built with React and Firebase. Some features Real-time chatting, User-Authentication and Website is responsive.",
    link: "https://github.com/NandishM0618/ReactCreations/tree/main/chat-app",
    date: "December 2023",
  },
];

export const skills = [
  {
    id: 1,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-globe"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Web development",
    desc: (
      <div
        dangerouslySetInnerHTML={{
          __html: `I have strong expertise in building responsive and dynamic web applications using <strong>HTML</strong>, <strong>CSS,</strong> and <strong>JavaScript</strong>. I'm proficient in modern web development frameworks and libraries like React.`,
        }}
      />
    ),
  },
  {
    id: 2,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-layers-3"
      >
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
        <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
      </svg>
    ),
    title: "Front-end development",
    desc: (
      <div
        dangerouslySetInnerHTML={{
          __html: `I specialize in front-end development, with a strong focus on creating engaging user interfaces. I have expertise in usingmodern technologies and frameworks, including <strong>React,</strong> <strong>Next.js,</strong>  <strong>Tailwind CSS,</strong> and <strong>Bootstrap</strong>.,`,
        }}
      />
    ),
  },
  {
    id: 3,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-database"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
    title: "Back-end development",
    desc: (
      <div
        dangerouslySetInnerHTML={{
          __html: `I have experience in server-side development, designing databases,  and creating RESTful <strong>APIs</strong>. I'm proficient in languages like <strong>Node.js</strong> and <strong>Java</strong> and databases like <strong>MySQL</strong> and<strong>MongoDB</strong>.`,
        }}
      />
    ),
  },
  {
    id: 4,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-github"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    title: "Git Version Control",
    desc: (
      <div
        dangerouslySetInnerHTML={{
          __html: `I am proficient in utilizing Git, a distributed version control system that plays a pivotal role in collaborative software development. With strong expertise in leveraging Git's capabilities, I efficiently manage project histories, track changes, and collaborate seamlessly with distributed teams.`,
        }}
      />
    ),
  },
];
