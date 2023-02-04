/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["category", "product", "variant"],
  singleTypes: [],
  loginData: {
    identifier: "test-identifier",
    password: "test-passord"
  },
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "https://your-site-domain/",
    Authorization: `Bearer eyJhabcdefg_${process.env.STRAPI_TOKEN}`,
  },
};

module.exports = {
  siteMetadata: {
    title: `e-commerce`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Philosopher:i7:latin', 'Montserrat:n6:n5:n4:n3:latin']
      }
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp",`gatsby-plugin-material-ui`,{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    
    
  ]
};