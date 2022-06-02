const withTM = require("next-transpile-modules")(["ui"]);

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withTM({ ...config });
