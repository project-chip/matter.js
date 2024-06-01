[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / Status

# Enumeration: Status

See Section 11.19.3.2, “Querying the OTA Provider” for the semantics of these values.

## See

MatterSpecification.v11.Core § 11.19.6.4.1

## Enumeration Members

### Busy

> **Busy**: `1`

Indicates OTA Provider may have an update, but it is not ready yet.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:72

***

### DownloadProtocolNotSupported

> **DownloadProtocolNotSupported**: `3`

Indicates that the requested download protocol is not supported by the OTA Provider.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:80

***

### NotAvailable

> **NotAvailable**: `2`

Indicates that there is definitely no update currently available from the OTA Provider.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:76

***

### UpdateAvailable

> **UpdateAvailable**: `0`

Indicates that the OTA Provider has an update available.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:68
