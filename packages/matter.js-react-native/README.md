# matter.js-react-native

[![license](https://img.shields.io/badge/license-Apache2-green.svg?style=flat)](https://raw.githubusercontent.com/mfucci/node-matter/master/LICENSE)

Matter protocol for react-native.

[!Note] This package is still in development and should be considered experimental and not usable for production usage until it got validated that all functionality works as expected.

This package uses the following react-native libraries to provide the needed functionality:
- react-native-quick-crypto
- react-native-ble-plx
- react-native-udp
- @react-native-async-storage/async-storage
  Please check these projects if special preparations need to be done for your developed app.


## Building

-   `npm run build`: Build all code and create CommonJS and ES6 variants in dist directory. This will built incrementally and only build the changed files.
-   `npm run build-clean`: Clean the dist directory and build all code from scratch

## Tests

No tests available for now
