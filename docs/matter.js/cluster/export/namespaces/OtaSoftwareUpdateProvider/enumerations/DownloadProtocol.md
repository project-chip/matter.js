[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / DownloadProtocol

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

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L38)

***

### BdxSynchronous

> **BdxSynchronous**: `0`

Indicates support for synchronous BDX.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L33)

***

### Https

> **Https**: `2`

Indicates support for HTTPS.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L43)

***

### VendorSpecific

> **VendorSpecific**: `3`

Indicates support for vendor specific protocol.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L48)
