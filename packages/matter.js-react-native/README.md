# matter.js-react-native

[![license](https://img.shields.io/badge/license-Apache2-green.svg?style=flat)](https://raw.githubusercontent.com/mfucci/node-matter/master/LICENSE)

Matter protocol for react-native.

[!Note] This package is still in development and should be considered experimental and not usable for production usage until it got validated that all functionality works as expected.

This package uses the following react-native libraries to provide the needed functionality:
- react-native-quick-crypto
- react-native-ble-plx
- react-native-udp
- @react-native-community/netinfo
- @react-native-async-storage/async-storage
  Please check these projects if special preparations need to be done for your developed app.


## Building

-   `npm run build`: Build all code and create CommonJS and ES6 variants in dist directory. This will built incrementally and only build the changed files.
-   `npm run build-clean`: Clean the dist directory and build all code from scratch

## Tests

No tests available for now

## React Native Configuration

To use \`**matter.js**\` with React Native, you need to modify your Metro configuration to ensure that the packages are resolved correctly. You need to add a special resolver entry and merge it with your existing Metro configuration. Below is an example of how to do this:

```javascript
/* eslint-env node */
const { mergeConfig } = require('@react-native/metro-config');
const { getYourConfig } = require('your-config-provider');

// Get your config.
const yourConfig = getYourConfig();

// New resolver configuration to fix the package resolution issue.
const customConfig = { resolver: { unstable_enablePackageExports: true } };

// Merging your existing configuration with the new resolver configuration.
module.exports = mergeConfig(yourConfig, customConfig);
```

In this example, \`**customConfig**\` includes the necessary resolver configuration, and \`**mergeConfig**\` is used to combine it with your existing configuration (\`**yourConfig**\` in this case). Adjust \`**yourConfig**\` to fit your existing Metro configuration setup.