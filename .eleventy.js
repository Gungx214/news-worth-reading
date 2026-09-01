module.exports = function(eleventyConfig) {
  // Automatically group all Markdown files in src/articles/ into collections.articles
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/articles/*.md").reverse();
  });
  // Date formatting filter
  eleventyConfig.addFilter("displayDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    });
  });
  // Pass-through static assets
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  return {
    pathPrefix: "/news-worth-reading/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
