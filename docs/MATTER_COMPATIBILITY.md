# Compatibility with the Matter standard

The Matter standard evolves continuously and delivers two updates per year. matter.js tries to follow the standard as closely as possible. The following list provides an overview which matter.js version is implementing which Matter standard version:
- **Matter 1.0**: matter.js up to 0.7.x
- **Matter 1.1**: matter.js 0.8.x - 0.9.x
- **Matter 1.2**: skipped
- **Matter 1.3**: matter.js 0.10.x and higher
- **Matter 1.4**: matter.js 0.13.x and higher

The following Matter protocol level feature are not yet supported by matter.js:
* BDX (File transfer) and OTA is not yet implemented on server and client side
* Groups are only partially implemented
* Bindings are only partially implemented
* DCL validation for controllers is not yet implemented
* ICD is not yet implemented on client and server side
* UDC is not yet implemented

For a list of clusters where default implementations are available see [here](./CLUSTER_DEFAULT_IMPLEMENTATIONS.md).

If you want to use matter.js and have questions on other specific protocol features or clusters please contact us!

## A note on certification

If you plan to officially certify a device, bridge or controller based on matter.js please contact us via E-Mail or Discord to get the latest information of the certification status of matter.js, supported and not yet supported features and consulting on the certification process.

matter.js successfully passed certification already. There are still thinks to consider and to discuss when you plan to certify.
