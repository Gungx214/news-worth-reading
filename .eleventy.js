module.exports = function(eleventyConfig) {
  // 1. Create the "articles" collection automatically from files inside src/articles/
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/articles/*.md").reverse();
  });

  // 2. Custom date filter
  eleventyConfig.addFilter("displayDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    });
  });

  // 3. Copy static assets to output
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
