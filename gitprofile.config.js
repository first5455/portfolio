// gitprofile.config.js

const config = {
  github: {
    username: 'first5455', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 3, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'supakorn-boonsongnern-821a25248',
    twitter: '',
    facebook: 'First5455',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'first545455',
    dev: '',
    website: 'https://first5455.github.io/portfolio/',
    phone: '+66 922085128',
    email: 'supakornboonsongnern@gmail.com',
  },
  skills: [
    'Kotlin',
    'Java',
    'JavaScript',
    'React.js',
    'SpringBoot',
    'MySQL',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Metrabyte Cloud',
      position: 'Developer',
      from: 'June 2022',
      to: 'Present',
    },
  ],
  education: [
    {
      institution: '',
      degree: 'Bachelor of Computer Science',
      from: '2018',
      to: '2022',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'first545455', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#E3E3ED',
      'base-100': '#2A2730',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
