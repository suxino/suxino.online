import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `suxino.online`,
        siteUrl: `https://suxino.online`
    },
    pathPrefix: "/suxino.online",
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: ["gatsby-plugin-styled-components", {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
            "trackingId": "dasf"
        }
    }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
        resolve: 'gatsby-plugin-manifest',
        options: {
            "icon": "src/images/icon.png"
        }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    }, {
        resolve: `gatsby-omni-font-loader`,
        options: {
            enableListener: true,
            preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
            web: [
                {
                    name: `Jetbrains Mono`,
                    file: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;300;400;700&display=swap`,
                },
            ],
        },
    }]
};

export default config;
