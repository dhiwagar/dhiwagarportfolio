import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/eccomerce.png";
import rmtdevImg from "@/public/crud.png";
import wordanalyticsImg from "@/public/matrialui.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Keprevos.pvt.Ltd Pondicherry, India",
    description: "I worked as a front-end developer for 2 year",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2025",
  },
] as const;

export const projectsData = [
   {
    title: "Food Commerce",
    description:
      "A responsive food commerce web app showcasing food items and cart functionality.",
    tags: ["React", "Tailwind", "Commerce"],
    imageUrl: "https://onlinepngtools.com/images/png/illustrations/remove-png-background.png", // Make sure to import this image
    imageUrlLink: "https://thefoodfarmacy.vercel.app/",
  },
  {
    title: "Room Booking",
    description:
      "A full-featured room booking application where users can search, view, and reserve hotel rooms.",
    tags: ["React", "Bootstrap", "Booking"],
    imageUrl: "https://onlinepngtools.com/images/png/illustrations/remove-png-background.png", // Import this image as well
    imageUrlLink: "https://roombookingreact.vercel.app/",
  },
  {
    title: "Ecommerce",
    description:
      "A multi-page eCommerce web application, that includes most of the functionalities that an eCommerce website has.",
    tags: ["React"],
    imageUrl: corpcommentImg,
    imageUrlLink: "https://ecommerceui-i8rv6z5hy-dhiwagar.vercel.app/",
  },
  {
    title: "Crud",
    description:
      "A React Task Management App which performs all the CRUD operations like Add, Update, Read, Edit, and Delete tasks.",
    tags: ["React", "Bootstrap", "Redux"],
    imageUrl: rmtdevImg,
    imageUrlLink: "https://react-redux-crud-8chi5bzvu-dhiwagar.vercel.app/",
  },
  {
    title: "Material UI",
    description: "Responsive design using Material UI components.",
    tags: ["React", "Material UI"],
    imageUrl: wordanalyticsImg,
    imageUrlLink: "https://matrialui-dhiwagar.vercel.app/",
  },
 
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",


 "React",
  "Matrial ui",
  "Git",
  "Git-hub",
  "Tailwind",
] as const;
