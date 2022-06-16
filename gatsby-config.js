module.exports = {
    siteMetadata: {
        title: `GatsbyJS Test`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: `${__dirname}/blog`,
            },
        },
        "gatsby-plugin-mdx",
    ],
};
