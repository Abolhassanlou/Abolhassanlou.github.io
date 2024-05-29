module.exports = function(eleventyConfig) {
    // Pass the images folder to the output
    eleventyConfig.addPassthroughCopy("images");

    return {
        dir: {
            input: "pages",          // Look for templates in the 'pages' directory
            includes: "../_includes", // Look for includes in the '_includes' directory
            output: "_site"          // Output generated HTML files to the '_site' directory
        },
        templateFormats: ["njk", "html"] // Process files with the extensions 'njk' and 'html' as Nunjucks templates
    };
};
