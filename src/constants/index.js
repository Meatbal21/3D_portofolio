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
    python,
    tailwind,
    wordpress,
    aws,
    git,
    figma,
    udemy,
    mimoapp,
    mimodev,
    awslogo,
    cinetrail,
    unilife,
    fakestore,
    rickmorty,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Cloud Computing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
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
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Learning user",
      company_name: "Mimo App",
      icon: mimoapp,
      iconBg: "#383E56",
      date: "January 2022 - November 2022",
      points: [
        "Introduction to web developer learning app",
        "Learning fundamanetal html, css and javascript.",
        "Implementing learning theory with quiz program",
        "Apply code with coding challenge.",
      ],
    },
    {
      title: "Bootcamp Student",
      company_name: "Mimo Dev",
      icon: mimodev,
      iconBg: "#E6DEDD",
      date: "January 2023 - July 2023",
      points: [
        "Developing fundamental skill to build and develop website from scratch.",
        "Building website using API that produce dynamic and responsive website with beautiful design.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other classmate.",
      ],
    },
    {
      title: "Cloud Practicioner Learner",
      company_name: "AWS",
      icon: awslogo,
      iconBg: "#383E56",
      date: "July 2023 - August 2023",
      points: [
        "Learning basic fundamental about cloud computing and managing cloud computing flow.",
        "Prepare for cloud practicioner exam and certification.",
        "implementing practical knowledge on how to use AWS inside and out.",
        ,
      ],
    },
    {
      title: "Python Developer Course",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Learn basic and fundamental about python 3 with tools and tehcnology support.",
        "Making a realworld project that can handle real-life problem.",
        "Learn and implement supportive tools and technology such as web scraping, Pycharm, Selenium.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Movie Preview",
      description:
        "Web-based platform that allows users to search movie with synopsis to preview. User can see what's popular, upcoming movies and top rated movies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: cinetrail,
      source_live_link: "https://cinepreview.netlify.app/",
      source_code_link: "https://github.com/Meatbal21/Cinetrail",
    },
    {
      name: "Uni Life",
      description:
        "Web application that enables users to search for dorm listing on UK area. Also user can filter and sort the price, how many bedroom and bathroom for they need",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: unilife,
      source_code_link: "https://github.com/Meatbal21/UniLife",
      source_live_link: "https://unilife-ruby.netlify.app/"
    },
    {
      name: "Online Store Clone",
      description:
        "An Online Store Project that allow user to buy, saved favorite item that they loved.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "responsive",
          color: "pink-text-gradient",
        },
      ],
      image: fakestore,
      source_code_link: "https://github.com/Meatbal21/Fake-Store-Project",
      source_live_link: "https://fakestore-ruby.netlify.app/",
    },
    {
      name: "Rick & Morty Wiki",
      description:
        "A website app that allow user to find all characters from Rick & Morty series. User can see which character will showed up on each episode",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "responsive",
          color: "pink-text-gradient",
        },
      ],
      image: rickmorty,
      source_code_link: "https://github.com/Meatbal21/RIck-and-Morty",
      source_live_link: "https://ricknmortywikiped.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  