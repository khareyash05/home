// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#86E3CE, #D0E6A5, #FFDD94, #FA897B, #CCABD8, #ecf0f1",
  firstName: "Yash",
  middleName: "",
  lastName: "Khare",
  message: "Technology is best when it brings people together.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/khareyash05",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/khareyash05409/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/khareyash05/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yash-khare-0978821aa/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/YashKha57954753",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.jfif"),
  imageSize: 375,
  message:
    "My name is Yash Khare. I’m a student pursuing bachelors in Computer Science and Engineering at AKGEC,Ghaziabad. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time, I love to play tennis and listen to rock music to cheer me up for the next task.If you dont find me at Home , you can find me at the nearest planetariums(I love to observe and talk about the universe).Altogether, I would sum up myself as an enthusiast and a hardworker; who would do anything to complete the task.",
  resume: "https://drive.google.com/file/d/14g12vcEHarrkxibnHFnu9EoRZassoxGV/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "khareyash05", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "NodeJS", value: 90 },
    { name: "ReactJS", value: 80 },
    { name: "Computer Vision", value: 75 },
    { name: "Jupyter Notebook", value: 80 },
    { name: "Python", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "Golang", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "khareyash05@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Research Intern',// Here Add Company Name
      companylogo: require('../assets/img/stan.png'),
      date: 'Sept 2022 – Present',
    },
    {
      role: 'Undergraduate Research Assistant',// Here Add Company Name
      companylogo: require('../assets/img/akg.png'),
      date: 'Oct 2021 – Aug 2022',
    },
    {
      role: 'Mentor at Open Source at GWOC',// Here Add Company Name
      companylogo: require('../assets/img/gwoc.png'),
      date: 'Sept 2021 - present',
    },
    {
      role: 'Full Stack Web Development Intern at Procial',// Here Add Company Name
      companylogo: require('../assets/img/procial.jfif'),
      date: 'July 2021 - Sept 2021',
    },
    {
      role: 'Mentor at Open Source at Lets Grow More',// Here Add Company Name
      companylogo: require('../assets/img/lgm.jpeg'),
      date: 'May 2021 - July 2021',
    },
    {
      role: 'Top Open Source Contributor at GirlScript Summer of Code',// Here Add Company Name
      companylogo: require('../assets/img/girl.jpeg'),
      date: 'March 2021 - June 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
