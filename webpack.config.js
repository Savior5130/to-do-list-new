/* eslint-disable no-undef */
module.exports = {
  resolve: {
    extensions: ["js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
};
