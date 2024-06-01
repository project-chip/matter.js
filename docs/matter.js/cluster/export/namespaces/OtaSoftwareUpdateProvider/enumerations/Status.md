[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / Status

# Enumeration: Status

See Section 11.19.3.2, “Querying the OTA Provider” for the semantics of these values.

## See

MatterSpecification.v11.Core § 11.19.6.4.1

## Enumeration Members

### Busy

> **Busy**: `1`

Indicates OTA Provider may have an update, but it is not ready yet.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L88)

***

### DownloadProtocolNotSupported

> **DownloadProtocolNotSupported**: `3`

Indicates that the requested download protocol is not supported by the OTA Provider.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L98)

***

### NotAvailable

> **NotAvailable**: `2`

Indicates that there is definitely no update currently available from the OTA Provider.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L93)

***

### UpdateAvailable

> **UpdateAvailable**: `0`

Indicates that the OTA Provider has an update available.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L83)
