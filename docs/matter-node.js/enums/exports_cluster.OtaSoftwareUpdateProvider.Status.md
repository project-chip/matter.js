[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md) / Status

# Enumeration: Status

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md).Status

See Section 11.19.3.2, “Querying the OTA Provider” for the semantics of these values.

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.4.1

## Table of contents

### Enumeration Members

- [Busy](exports_cluster.OtaSoftwareUpdateProvider.Status.md#busy)
- [DownloadProtocolNotSupported](exports_cluster.OtaSoftwareUpdateProvider.Status.md#downloadprotocolnotsupported)
- [NotAvailable](exports_cluster.OtaSoftwareUpdateProvider.Status.md#notavailable)
- [UpdateAvailable](exports_cluster.OtaSoftwareUpdateProvider.Status.md#updateavailable)

## Enumeration Members

### Busy

• **Busy** = ``1``

Indicates OTA Provider may have an update, but it is not ready yet.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:62

___

### DownloadProtocolNotSupported

• **DownloadProtocolNotSupported** = ``3``

Indicates that the requested download protocol is not supported by the OTA Provider.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:70

___

### NotAvailable

• **NotAvailable** = ``2``

Indicates that there is definitely no update currently available from the OTA Provider.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:66

___

### UpdateAvailable

• **UpdateAvailable** = ``0``

Indicates that the OTA Provider has an update available.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:58
