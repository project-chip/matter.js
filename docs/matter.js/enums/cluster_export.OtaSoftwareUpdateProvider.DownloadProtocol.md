[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md) / DownloadProtocol

# Enumeration: DownloadProtocol

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md).DownloadProtocol

Note that only HTTP over TLS (HTTPS) is supported (see RFC 7230). Using HTTP without TLS shall

NOT be supported, as there is no way to authenticate the involved participants.

**`See`**

MatterSpecification.v11.Core § 11.19.6.4.3

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

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L38)

___

### BdxSynchronous

• **BdxSynchronous** = ``0``

Indicates support for synchronous BDX.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L33)

___

### Https

• **Https** = ``2``

Indicates support for HTTPS.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L43)

___

### VendorSpecific

• **VendorSpecific** = ``3``

Indicates support for vendor specific protocol.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L48)
