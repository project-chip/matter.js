[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md) / Status

# Enumeration: Status

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md).Status

See Section 11.19.3.2, “Querying the OTA Provider” for the semantics of these values.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.4.1

## Table of contents

### Enumeration Members

- [Busy](cluster_export.OtaSoftwareUpdateProvider.Status.md#busy)
- [DownloadProtocolNotSupported](cluster_export.OtaSoftwareUpdateProvider.Status.md#downloadprotocolnotsupported)
- [NotAvailable](cluster_export.OtaSoftwareUpdateProvider.Status.md#notavailable)
- [UpdateAvailable](cluster_export.OtaSoftwareUpdateProvider.Status.md#updateavailable)

## Enumeration Members

### Busy

• **Busy** = ``1``

Indicates OTA Provider may have an update, but it is not ready yet.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:78](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L78)

___

### DownloadProtocolNotSupported

• **DownloadProtocolNotSupported** = ``3``

Indicates that the requested download protocol is not supported by the OTA Provider.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:88](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L88)

___

### NotAvailable

• **NotAvailable** = ``2``

Indicates that there is definitely no update currently available from the OTA Provider.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:83](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L83)

___

### UpdateAvailable

• **UpdateAvailable** = ``0``

Indicates that the OTA Provider has an update available.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:73](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L73)
