const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Nabe Docs",
    tagline: `Let's eat Nabe on Binance Smart Chain`,
    url: "https://docs.nabe.finance",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "nabefinance",
    projectName: "nabe-docs",

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // editUrl: 'https://github.com/nabefinance/nabe-docs',
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Nabe.Finance",
          logo: {
            alt: "Nabe Logo",
            src: "img/logo.png",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Docs",
            },
            {
              href: "https://github.com/nabefinance",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Learn ",
              items: [
                {
                  label: "Docs",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Discord",
                  href: "https://discord.gg/dzAym5KDS2",
                },
                {
                  label: "Telegram",
                  href: "https://t.me/nabefinance",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/NabeFinance",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/nabefinance",
                },
              ],
            },
          ],
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
