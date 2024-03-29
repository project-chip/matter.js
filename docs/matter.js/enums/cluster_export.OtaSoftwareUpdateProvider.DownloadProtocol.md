[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md) / DownloadProtocol

# Enumeration: DownloadProtocol

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md).DownloadProtocol

Note that only HTTP over TLS (HTTPS) is supported (see RFC 7230). Using HTTP without TLS shall

NOT be supported, as there is no way to authenticate the involved participants.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.4.3

## Table of contents

### Enumeration Members

- [BdxAsynchronous](cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md#bdxasynchronous)
- [BdxSynchronous](cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md#bdxsynchronous)
- [Https](cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md#https)
- [VendorSpecific](cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md#vendorspecific)

## Enumeration Members

### BdxAsynchronous

• **BdxAsynchronous** = ``1``

Indicates support for asynchronous BDX.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:39](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L39)

___

### BdxSynchronous

• **BdxSynchronous** = ``0``

Indicates support for synchronous BDX.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:34](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L34)

___

### Https

• **Https** = ``2``

Indicates support for HTTPS.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:44](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L44)

___

### VendorSpecific

• **VendorSpecific** = ``3``

Indicates support for vendor specific protocol.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:49](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L49)
