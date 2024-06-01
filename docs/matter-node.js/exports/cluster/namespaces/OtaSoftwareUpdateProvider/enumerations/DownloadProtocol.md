[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / DownloadProtocol

# Enumeration: DownloadProtocol

Note that only HTTP over TLS (HTTPS) is supported (see RFC 7230). Using HTTP without TLS shall

NOT be supported, as there is no way to authenticate the involved participants.

## See

MatterSpecification.v11.Core § 11.19.6.4.3

## Enumeration Members

### BdxAsynchronous

> **BdxAsynchronous**: `1`

Indicates support for asynchronous BDX.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:27

***

### BdxSynchronous

> **BdxSynchronous**: `0`

Indicates support for synchronous BDX.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:23

***

### Https

> **Https**: `2`

Indicates support for HTTPS.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:31

***

### VendorSpecific

> **VendorSpecific**: `3`

Indicates support for vendor specific protocol.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:35
