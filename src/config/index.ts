import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Imanudin — Mobile & Web Developer",
  author: "Muhammad Imanudin",
  description:
    "Developer based in West Kalimantan, Indonesia. I specialize in Software Development for around 7+ years experienced. Make a plan for project creation until completion, Develop a Web and Mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/iman.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Contact", href: "https://wa.me/+6285161755854" },
    { text: "Jobstreet", href: "https://id.jobstreet.com/profile/muhammad-imanudin-phZCmsb8kT" },
    { text: "GitLab", href: "https://gitlab.com/mimdudin" },
    { text: "Curriculum Vitae", href: "https://drive.google.com/file/d/1tWcSCZI1_durf8DnE2iNCNnWOrLy9nYS/view?usp=sharing" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Imanudin",
    specialty: "Mobile & Web Developer",
    summary:
      "Developer based in West Kalimantan, Indonesia. I specialize in Software Development for around 7+ years experienced. Make a plan for project creation until completion, Develop a Web and Mobile application development and maintenance.",
    email: "mimdudin@gmail.com",
  },
  experience: [
    {
      company: "Fiverr Frelancer",
      position: "Mobile Developer Developer",
      startDate: "May 2018",
      endDate: "Present",
      summary: [
        "Develop a various applications such us Marketplace, E-Learning, Event App and many more.",
        "Focussing on Mobile Development using Flutter framework",
        "Develop a Back End system using Laravel Framework",
      ],
    },
    {
      company: "Transact Indonesia",
      position: "Mobile Developer",
      startDate: "Feb 2020",
      endDate: "Dec 2023",
      summary: [
        "Make a roadmap development plan for Mobile Application, Rest API and Web System"
      ],
    },
     {
      company: "KubeNative (Malaysia)",
      position: "Mobile Developer",
      startDate: "Jan 2023",
      endDate: "Dec 2024",
      summary: [
        "Designing and implement an ISPEMOS Application from scratch for Perbendaharaan Malaysia."
      ],
    },
    {
      company: "Hisfarma (Ikatan Apoteker Indonesia)",
      position: "Mobile Developer",
      startDate: "Mar 2025",
      endDate: "Present",
      summary: [
        "Mobile App Development using Flutter with key features such as Event Application Flow and Self Screening"
      ]
    },
  ],
  projects: [
    {
      name: "Transact Indonesia",
      summary: "Aplikasi Transact Australia adalah pasar Australia untuk Pemasok dan Pengecer. Memungkinkan Anda sebagai penjual terhubung dengan pemasok dan pembeli di sekitar Anda.",
      linkPreview: "/",
      linkSource: "https://play.google.com/store/apps/details?id=etransact.com.au",
      image: "/ss1.png",
    },
    
    {
      name: "SWCorp ISPEMOS",
      summary: "Untuk memudahkan kerja-kerja pengesahan dan semakan oleh anggota pegawai SWCORP",
      linkPreview: "/",
      linkSource: "https://play.google.com/store/apps/details?id=com.swcorp.ispemos&hl=id",
      image: "/ss2.png",
    },
     {
      name: "Hisfarma Back End",
      summary: "Hisfarma SuperApp memungkinkan kamu untuk menjelajahi seluruh agenda khususnya jika kamu seorang Apoteker yang ingin menambah ilmu pengetahuan dengan menghadiri berbagai event menarik yang hanya tersedia disini",
      linkPreview: "/",
      linkSource: "https://play.google.com/store/apps/details?id=hisfarma.superapp.com&hl=id",
      image: "/ss4.png",
    },
    {
      name: "Hisfarma SuperApp",
      summary: "Hisfarma SuperApp memungkinkan kamu untuk menjelajahi seluruh agenda khususnya jika kamu seorang Apoteker yang ingin menambah ilmu pengetahuan dengan menghadiri berbagai event menarik yang hanya tersedia disini",
      linkPreview: "/",
      linkSource: "https://play.google.com/store/apps/details?id=hisfarma.superapp.com&hl=id",
      image: "/ss3.png",
    },
  ],
  about: {
    description: `
     Hi, Im Fullstack Developer specialist.

     Focussing develop the back end system using Laravel (PHP Framework) and Mobile Application development using Flutter techstack for Android & iOS around 7+ years and Experienced in Linux Environment.
     
     I'm Bachelore Degree in Information System. Also more experienced in designing and implement a project plan to completion.
     I'm working with HTML, CSS, PHP, MySQL, Dart, Flutter, Android Studio, XCode and Rest API Integration.
    `,
    image: "/iman.jpeg",
  },
};

// #5755ff
