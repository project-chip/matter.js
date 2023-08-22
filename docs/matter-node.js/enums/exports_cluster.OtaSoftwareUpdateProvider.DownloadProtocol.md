[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md) / DownloadProtocol

# Enumeration: DownloadProtocol

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md).DownloadProtocol

Note that only HTTP over TLS (HTTPS) is supported (see RFC 7230). Using HTTP without TLS shall

NOT be supported, as there is no way to authenticate the involved participants.

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.4.3

## Table of contents

### Enumeration Members

- [BdxAsynchronous](exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md#bdxasynchronous)
- [BdxSynchronous](exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md#bdxsynchronous)
- [Https](exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md#https)
- [VendorSpecific](exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md#vendorspecific)

## Enumeration Members

### BdxAsynchronous

• **BdxAsynchronous** = ``1``

Indicates support for asynchronous BDX.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:24

___

### BdxSynchronous

• **BdxSynchronous** = ``0``

Indicates support for synchronous BDX.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:20

___

### Https

• **Https** = ``2``

Indicates support for HTTPS.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:28

___

### VendorSpecific

• **VendorSpecific** = ``3``

Indicates support for vendor specific protocol.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:32
