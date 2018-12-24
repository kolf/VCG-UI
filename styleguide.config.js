var path = require("path");

module.exports = {
  title: "VCG UI",
  components: "src/components/**/[A-Z]*.js",
  require: [path.join(__dirname, "node_modules/antd/dist/antd.css")]
};
