const Image = require("@11ty/eleventy-img");
const shell = require('shelljs');

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [30, 60],
    formats: ["avif", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  }

  shell.mkdir('-p', '_site/images'); // Create the directory if it doesn't exist already
  shell.cp('images/*', '_site/images'); // Copy everything from images directory into _site/images

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addWatchTarget("images/");

    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addLiquidShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);

    return {
        dir: {
            input: "pages",
            includes: "../_includes",
            output: "_site"
        },
        templateFormats: ["njk", "html"]
    };
};

