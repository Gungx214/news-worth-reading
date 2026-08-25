module.exports = function (eleventyConfig) {
  // Copy images, admin panel, and styles straight through to the built site
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/styles.css");

  // Articles collection, newest first
  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/articles/*.md").reverse();
  });

  // Turns a date into "AGOSTO 14, 2026" style display text
  eleventyConfig.addFilter("displayDate", function (dateObj) {
    const months = [
      "ENERO", "PEBRERO", "MARSO", "ABRIL", "MAYO", "HUNYO",
      "HULYO", "AGOSTO", "SETYEMBRE", "OKTUBRE", "NOBYEMBRE", "DISYEMBRE"
    ];
    const d = new Date(dateObj);
    return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
