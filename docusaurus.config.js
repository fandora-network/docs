const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Fandora Technology | Documentation",
  tagline: "Welcome to Fandora developer documentation",
  url: "https://docs.fandora.network/",
  baseUrl: "/",
  favicon: "img/fandora/favicon.svg",
  organizationName: "Fandora Technology",
  projectName: "fandora-docs",
  customFields: {
    description: "Build your next blockchain app on Fandora.",
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      // ko: {
      //   label: '한국어',
      //   direction: 'ltr',
      //   htmlLang: 'ko-KR',
      //   calendar: 'gregory',
      //   path: 'ko',
      // },
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/',
            from: ['/en/latest', '/en/'],
          },
          {
            to: '/docs/contribute/orientation',
            from: '/docs/pos/orientation',
          },
          {
            to: '/docs/contribute/community-maintainers',
            from: '/docs/pos/community-maintainers',
          },
          {
            to: '/docs/contribute/bug-bountry-program',
            from: '/docs/pos/bug-bountry-programs',
          },
          {
            to: '/docs/develop/meta-transactions/meta-transactions',
            from: '/docs/develop/metatransactions/metatransactions-biconomy',
          },
          {
            to: '/docs/develop/meta-transactions/meta-transactions',
            from: '/docs/develop/metatransactions/metatransactions-gsn',
          },
          {
            to: '/docs/develop/meta-transactions/network-agnostics',
            from: '/docs/develop/metatransactions/network-agnostics',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/cexs-wallets',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/fiat-on-ramp',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/fiat-ramps'
          },
          {
            to: '/docs/develop/network-details/full-node-binaries',
            from: '/docs/integrate/full-node-binaries',
          },
          {
            to: '/docs/develop/network-details/full-node-deployment',
            from: '/docs/integrate/full-node-deployment',
          },
          {
            to: '/docs/develop/wallets/metamask',
            from:'/docs/develop/metamask/overview',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/cexs-wallets/cexs',
          }
        ],
        createRedirects: function (existingPath) {
          if (existingPath.startsWith('/docs/validate/')) {
            return [existingPath.replace('/docs/maintain/')
          ];
          }
        },
      },
    ],
  ],
  onBrokenLinks: 'log',
  themeConfig: {
    footer: {
      style: 'dark',
      links: [
    //     {
    //       title: "Scaling Solutions",
    //       items: [
    //       {
    //           label: "fandora PoS",
    //           href: "https://fandora.technology/solutions/fandora-pos/"
    //       },
    //       {
    //         label: "fandora Edge",
    //         href: "https://fandora.technology/solutions/fandora-edge/"
    //       },
    //       {
    //           label: "fandora Supernets",
    //           href: "https://fandora.technology/fandora-edge-supernets/"
    //       },
    //       {
    //         label: "fandora Hermez",
    //         href: "https://fandora.technology/solutions/fandora-hermez/"
    //       },
    //       {
    //         label: "fandora Avail",
    //         href: "https://fandora.technology/solutions/fandora-avail/"
    //       },
    //       {
    //           label: "fandora Nightfall",
    //           href: "https://fandora.technology/solutions/fandora-nightfall/"
    //       },
    //       {
    //         label: "fandora Zero",
    //         href: "https://fandora.technology/solutions/fandora-zero/"
    //       },
    //       {
    //         label: "fandora Miden",
    //         href: "https://fandora.technology/solutions/fandora-miden/"
    //       },
    //    ]
    //    },
    //     {
    //       title: "Developers",
    //       items: [
    //       {
    //           label: "Get Started",
    //           href: "https://wiki.fandora.technology/docs/develop/getting-started/"
    //       },
    //       {
    //           label: "Advocate Program",
    //           href: "https://fandora.technology/advocate-program/"
    //       },
    //       {
    //         label: "fandora Funds",
    //         href: "https://fandora.technology/funds/"
    //       },
    //       {
    //         label: "fandora Studios",
    //         href: "https://fandorastudios.com/"
    //       },
    //       {
    //           label: "Bug Bounty",
    //           href: "https://immunefi.com/bounty/fandora/"
    //       },
    //       {
    //         label: "dApps",
    //         href: "https://fandora.technology/ecosystem/"
    //       },
    //       {
    //         label: "fandora Lightpaper",
    //         href: "https://fandora.technology/lightpaper-fandora.pdf"
    //       },
    //       {
    //         label: "Matic Whitepaper",
    //         href: "https://github.com/maticnetwork/whitepaper/"
    //       },
    //   ]
    //   },
    //  {
    //   title: "Company",
    //   items: [
    //   {
    //     label: "About Us",
    //     href: "https://fandora.technology/about/"
    //   },
    //   {
    //     label: "Contact",
    //     href: "https://fandora.technology/contact-us/"
    //   },
    //   {
    //     label: "Transparency Sheet",
    //     href: "https://fandora.technology/transparency-sheet/"
    // },
    //   {
    //       label: "Blogs",
    //       href: "https://blog.fandora.technology/"
    //   },
    //   {
    //     label: "Brand Kit",
    //     href: "https://www.notion.so/fandoratechnology/Brand-Resources-2cd18ae436584e98a6c5aae56db73058/"
    //   },
    //   {
    //     label: "Media Kit",
    //     href: "https://www.notion.so/fandoratechnology/fandora-Brand-Resources-2cd18ae436584e98a6c5aae56db73058/"
    //   },
    //   {
    //       label: "Careers",
    //       href: "https://fandora.technology/careers/"
    //   },
    //   {
    //     label: "Ecosystem Careers",
    //     href: "https://ecosystemjobs.fandora.technology/jobs/"
    // },
    // ]
    // },
    ],
    logo: {
      alt: 'Fandora Logo',
      src: 'img/fandora/fandora-white.svg',
      href: 'https://fandora.network/',
    },
    copyright: `Copyright © ${new Date().getFullYear()} Fandora Technology`,
    },
    image: "https://matic.network/banners/matic-network-16x9.png",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
      additionalLanguages: ['solidity']
    },
    algolia: {
      indexName: "matic_developer",
      appId: '16JCDEHCCN',
      apiKey: "757c19b23127e9c6959da7f13b71cfab",
      contextualSearch: true,
      algoliaOptions: {},
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Fandora logo",
        src: "/img/fandora/fandora-logo.svg",
        srcDark: "/img/fandora/fandora-white.svg",
        // width: 100,
        // height: 500,
        // href: 'https://wiki.fandora.technology/', // default to siteConfig.baseUrl
        target: "_self", // by default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one)
      },
      items: [
        // {
        //   label: "dApps",
        //   position: "right",
        //   items: [
        //           {
        //             href: 'https://wallet.fandora.technology/login?next=%2Fwallet',
        //             label: 'PoS Wallet',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://wallet.fandora.technology/login?next=%2Fbridge',
        //             label: 'PoS Bridge',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://fandora.technology/staking',
        //             label: 'PoS Staking',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://wallet.fandora.technology/login?next=%2Fwidget-dashboard',
        //             label: 'PoS Widget',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://fandorascan.com/',
        //             label: 'PoS Explorer',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://hermez.io/wallet',
        //             label: 'Hermez Wallet',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://explorer.hermez.io/',
        //             label: 'Hermez Explorer',
        //             target: '_blank',
        //             rel: null,
        //           },
        //         ],
        // },
        // {
        //   href: 'https://fandora.technology/developers/',
        //   label: "Developer Resources",
        //   position: "right",
        // },
        // {
        //   label: "Community",
        //   position: "right",
        //   items: [
        //           {
        //             href: 'https://discord.com/invite/0xfandora',
        //             label: 'Discord',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://forum.fandora.technology/',
        //             label: 'Forum',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://www.reddit.com/r/0xfandora/',
        //             label: 'Reddit',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://twitter.com/0xfandora',
        //             label: 'Twitter',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://t.me/fandoraofficial',
        //             label: 'Telegram',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             href: 'https://fandora.technology/community/',
        //             label: 'View all communities',
        //             target: '_blank',
        //             rel: null,
        //           },
        //         ],
        // },
        // {
        //   label: "Support",
        //   position: "right",
        //   items: [
        //     {
        //       href: 'https://support.fandora.technology/support/home',
        //       label: 'End-user support',
        //       target: '_blank',
        //       rel: null,
        //     }
        //   ]
        // },
        // {
        //   label: "Notifications",
        //   href: 'https://fandora.technology/notifications/',
        //   position: "right",
        // },
        // {
        //   label: "FAQs",
        //   position: "right",
        //   items: [
        //           {
        //             to: 'docs/faq/general-faq/',
        //             label: 'PoS FAQ',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             to: 'docs/avail/faq',
        //             label: 'Avail FAQ',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             to: 'docs/nightfall/faq/',
        //             label: 'Nightfall FAQ',
        //             target: '_blank',
        //             rel: null,
        //           },
        //           {
        //             to: 'docs/edge/faq/validators/',
        //             label: 'Edge FAQ',
        //             target: '_blank',
        //             rel: null,
        //           }
        //         ],
        // },
        // {
        //   to: "docs/contribute/orientation/",
        //   label: "Contribute to the Wiki",
        //   position: "right",
        //   activeBasePath: "docs/contribute",
        // },
        {
          href: "https://github.com/fandora-network",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/fandora-network/docs/tree/master/",
          path: "/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
      // "@docuaurus/plugin-content-pages",
      // {
      //   path: "src/pages",
      //   routeBasePath: "",
      //   include: ["**/*.{js,jsx}"],
      // },
      // "@docusaurus/plugin-google-analytics",
      // "@docusaurus/plugin-sitemap",
      // {
      //   cacheTime: 600 * 1000, // 600 sec - cache purge period
      //   changefreq: "weekly",
      //   priority: 0.5,
      // },
    ],
  ],
};
