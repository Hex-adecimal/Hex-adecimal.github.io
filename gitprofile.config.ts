// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Hex-adecimal', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Luigi Penza',
    description: '',
    imageURL: 'image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAZlBMVEX///8AAADp6elFRUWlpaXNzc2zs7PKysr5+fmqqqrU1NSUlJSXl5ddXV26urr8/PzCwsJvb281NTXa2tokJCTh4eE6Ojqenp5TU1NNTU3v7++AgIAYGBhpaWkLCwt2dnaKioouLi5tQaUEAAACoklEQVR4nO2bW3eqMBBG5SZXQWoRi6L0///JA0oiy5NARybIw7ffhMWwCZOZtItsNgAAAAAAAExQHfytWyZxR+mmXhF80iYoon2Sf1kqvndlGtnLOxXueXdUGkmuTp4cljOyo/I0LjRku4hTEN6cvzu1uOaVovCbpLSIVlbs031LmoZJU08k1oKj9YqdxvXkG11eqyWz/XiFWneiepVarZi6qH5aa1NpZ8BHtWxt6kMLWtCCFrSgBS1oQQta0IIWtKAFLWhBC1rQgha0oAUtaEELWtCCFrSgBS1oLaXF8x0ft1aYrVAry30WK2at/JfHilXL/rGYBotTyz5aO64PV/VaJTFS2F4TMVmNaNFuETTtJQ6XlVZrV5HCePeL+L6h1WidSEmS3e4X5WxWGq2EEqJK+qtoA0zXOouzh3A7SSIiNHxWSq1QnEw1s0GJwzhYKq1YnAspVryfZv+vJcPTrPiKg1JLjlVJsmJrO2otmVeJ+u46SHOXrCXnoEuzsniWWRot2QepVryvsK1Mw+A3cZSW7az1/cFtEFy+wS3R6sJttRkEd0QfJFXRjpTbajAucgnnU63i0Vu8Q/4MLnpHdKFqMc/CVuEqQv8W/aHDmICKC/9OpWclF2tRW7/dQAN1cf0HROjrvj9QUaWsmt8qen3iYEe1OhrYBicSvul/Z4QtZj0GrOx+e4gsDQ3ZysT+t77FHMXvM9kqHAv/Lo/BkqWB2nIMtMKOvkIJK2p7bnsoex3teGSSyA5yGX32UFYeKy2RHd51yuKV2sz+3XtHlsWw8D0aPuffXwNO5p54BkE3WIaeeAaxkd4/l677sS8q5+ObWFTO52zVRorhTKyvTxuoSPn++8pI9uN9WkGFt8Z0b+fh6qr7nXVaAQAAAACAd/kHPcAgqXqtQrMAAAAASUVORK5CYII=',
  },
  social: {
    linkedin: 'Luigi Penza',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: 'Luigi Penza', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://hex-adecimal.github.io',
    phone: '',
    email: 'luigi.penza08@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Swift',
    'C'
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
