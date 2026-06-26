export interface TechCategory {
  category: string;
  items: string[];
}

export interface SiteConfig {
  url: string;
  goatCounterCode: string;
  meta: { title: string; description: string ; ogImage: string };
  hero: any;
  about: any;
  experiences: any[];
  contact: {
    github: string;
    linkedin: string;
    itch: string;
    artstation: string;
    resumeUrl: string;
  };
  certifications: Certification[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export const site: SiteConfig = {
  url: 'https://kanbarudesu.github.io',
  goatCounterCode: 'kanbarudesu',
  meta: {
    title: 'Yogie Sukandi Wijaya | Game Programmer',
    description: 'Game Programmer specializing in Unity C# and editor tool development. Explore the games, prototypes, and Unity editor tools I have created.',
    ogImage : '/Images/og-cover.png'
  },
  hero: {
    name: 'Yogie Sukandi Wijaya',
    role: 'Game Programmer',
    tagline: '',
    domicile: 'Bekasi City, West Java, Indonesia',
  },
  about: {
    paragraphs: [
      'Game Programmer with 4+ years of hands-on experience using Unity, focusing on gameplay systems, technical prototyping, and tool development. Comfortable building core gameplay logic, UI systems, and custom editor workflows, with a strong interest in creating clean, maintainable systems. Also experienced in technical art and VFX using Shader Graph and URP, and continuously improving my technical depth through hands-on projects.'
      , {
        heading: 'SKILLS & WHAT I WORK WITH',
        techItems: ['Unity', 'C#', 'Git', 'VS Code', 'Blender', 'Photoshop', 'Design Patterns', 'OOP', 'Gameplay Programming', 'Tools Programming', 'Shader Graph', 'HLSL', 'Particle System', 'Debugging', 'Asset Management', 'Unity UI/UX', 'Unity UI Toolkit', 'Multiplayer/Netcode', 'Behaviour Trees'],
      },
    ],
  },
  experiences: [
    {
      period: 'June - September 2022',
      title: 'Game Programmer Intern',
      company: 'Hiscory Studio (formerly 4Happy Studio)',
      summary: '',
      highlights: [
        'Implemented gameplay systems (checkpoint, save/load, menus, notifications) for Unity project Let Me Out.',
        'Developed functional UI for menus (main, options, inventory) with focus on usability.',
        'Collaborated using GitLab (version control), Notion (documentation), and Discord (coordination).'],
      tech: ['C#', 'Unity', 'GitLab', 'Notion', 'Discord'],
    }, {
      period: 'February - June 2020',
      title: 'Assistant Lecturer - 2D Game Programming',
      company: 'Kalbis Institute',
      summary: '',
      highlights: [
        'Mentored students in 2D game programming using Construct engine.',
        'Guided students through 9 game projects, providing feedback on mechanics and design.',
        'Supervised, graded, and evaluated midterm and final projects.'],
      tech: ['Construct2'],
    }, {
      period: 'July - September 2019',
      title: 'Game Programmer Intern',
      company: 'Benua Softworks',
      summary: 'Working collaboratively in a small team to prototype a game using Unreal Engine Blueprints, with Perforce used for version control.',
      highlights: [],
      tech: ['UnrealEngine', 'Perforce'],
    },
  ],
  contact: {
    github: 'https://github.com/kanbarudesu/',
    linkedin: 'https://www.linkedin.com/in/yogiesukandiwijaya',
    itch: 'https://kanbarudesu.itch.io/',
    artstation: 'https://artstation.com/kanbarudesu',
    resumeUrl: 'https://github.com/kanbarudesu/kanbarudesu.github.io/releases/latest/download/CV_Yogie_Sukandi_Wijaya.pdf',
  },
  certifications: [
    {
      title: 'Unity Certified Programmer',
      issuer: 'Unity Technologies',
      date: '2025',
      image: 'UnityCertificate.jpg',
      credentialUrl: 'https://www.credly.com/badges/e03f56eb-5e1b-4531-8b08-20e2f354ea0a/'
    }, {
      title: 'Programming Design Patterns for Unity - Write Better Code',
      issuer: 'Gamedev.tv - Udemy',
      date: '2022',
      image: 'UdemyCert1.jpg',
      credentialUrl: 'https://www.udemy.com/certificate/UC-24cd20b2-89ee-4a15-8a3e-71a440dfb9ec/'
    }, {
      title: 'Design Pattern for Game Programming',
      issuer: 'Penny de Byl - Udemy',
      date: '2022',
      image: 'UdemyCert2.jpg',
      credentialUrl: 'https://www.udemy.com/certificate/UC-0be2b997-aa09-4d84-b80d-4c829da30519/'
    },
  ]
};