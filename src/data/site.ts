import bgBusinessCover from '../assets/images/projects/bg-business/bg-business-cover.png';
import mybldCover from '../assets/images/projects/mybld/mybld-cover.jpg';

export const contactEmail = 'ivaylo@headless.team';

export const socialLinks = {
  github: 'https://github.com/IvoTsochev',
  linkedin: 'https://www.linkedin.com/in/ivaylotsochev/',
};

export const capabilities = [
  "React & TypeScript Web Apps",
  "Websites for Small Businesses",
  "Headless CMS (Sanity)",
  "Node.js & Python Backend"
];

export const projects = [
  {
    title: "MyBld",
    category: "Website",
    description: "Уебсайт на строителна фирма от Варна, който представя услугите и завършените ѝ проекти на български, английски и руски. Клиентът управлява съдържанието сам чрез Sanity CMS.",
    image: mybldCover,
    tags: ["React", "TypeScript", "Sanity", "TailwindCSS"],
    links: { demo: "https://mybld.bg", github: "" }
  },
  {
    title: "БГ Бизнеси",
    category: "iOS / Android",
    description: "Вашият пътеводител към бизнеси и услуги от цяла България. Намерете магазини, заведения, специалисти и още – бързо, лесно и безплатно.",
    image: bgBusinessCover,
    tags: ["React Native", "TypeScript", "Nativewind", "Supabase"],
    links: { demo: "https://troyanskibiznesi.headless.team", github: "" }
  }
];
