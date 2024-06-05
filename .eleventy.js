
const pluginTOC = require('eleventy-plugin-toc');
module.exports = function (eleventyConfig) {

   eleventyConfig.addPlugin(pluginTOC , {
    tags: ['h2', 'h3'],
    wrapper: 'div'
  });
  // Pass-through copy for images
    eleventyConfig.addPassthroughCopy("images");

    // Set input and output directories
    return {
        dir: {
            input: "pages",
            includes: "../_includes",
            output: "_site"
        },
        templateFormats: ["njk", "html"]
    };
};

