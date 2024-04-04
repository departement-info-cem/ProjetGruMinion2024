import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Projet Gru Minion 2024",
  tagline: "Projet Gru Minion 2024",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://info.cegepmontpetit.ca/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/ProjetGruMinion2024",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "departement-info-cem", // Usually your GitHub org/user name.
  projectName: "ProjetGruMinion2024", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "diego",
        routeBasePath: "diego",
        path: "./diego",
        authorsMapPath: "../authors.yml",
        blogSidebarTitle: "Articles récents",
        blogSidebarCount: 30,
        editUrl:
          "https://github.com/departement-info-cem/ProjetGruMinion2024/tree/main",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "ilyas",
        routeBasePath: "ilyas",
        path: "./ilyas",
        authorsMapPath: "../authors.yml",
        blogSidebarTitle: "Articles récents",
        blogSidebarCount: 30,
        editUrl:
          "https://github.com/departement-info-cem/ProjetGruMinion2024/tree/main",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "yadian",
        routeBasePath: "yadian",
        path: "./yadian",
        authorsMapPath: "../authors.yml",
        blogSidebarTitle: "Articles récents",
        blogSidebarCount: 30,
        editUrl:
          "https://github.com/departement-info-cem/ProjetGruMinion2024/tree/main",
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Projet Gru Minion 2024",
      logo: {
        alt: "Projet Gru Minion 2024",
        src: "img/logo.svg",
      },
      items: [
        { to: "/diego", label: "Diego", position: "left" },
        { to: "/ilyas", label: "Ilyas", position: "left" },
        { to: "/yadian", label: "Yadian", position: "left" },
        {
          href: "https://github.com/jorisdeguet/GruMinions",
          label: "Code source",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Tous droit réservés © ${new Date().getFullYear()} CÉGEP Édouard-Montpetit.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
