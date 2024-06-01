[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [NetworkCommissioning](../README.md) / ScanNetworksResponse

# Interface: ScanNetworksResponse

This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
operation was successful.

Results are valid only if NetworkingStatus is Success.

Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

## See

MatterSpecification.v11.Core § 11.8.7.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvScanNetworksResponse`](../README.md#tlvscannetworksresponse)\>

## Properties

### debugText?

> `optional` **debugText**: `string`

This field, if present and non-empty, may contain error information which may be communicated to the user in
case the NetworkingStatus was not Success. Its purpose is to help developers in troubleshooting errors and
may go into logs or crash reports.

#### See

MatterSpecification.v11.Core § 11.8.7.2.2

#### Inherited from

`TypeFromSchema.debugText`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:293](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L293)

***

### networkingStatus

> **networkingStatus**: [`NetworkCommissioningStatus`](../enumerations/NetworkCommissioningStatus.md)

The NetworkingStatus field shall indicate the status of the last scan operation, taking one of these values:

  • Success: Scanning succeeded.

  • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the scan.
    This error cannot occur if no network identifier was provided, such as when scanning for all available
    networks.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • RegulatoryError: Could not scan on any bands due to lack of regulatory configuration.

  • UnknownError: An internal error occurred during scanning.

#### See

MatterSpecification.v11.Core § 11.8.7.2.1

#### Inherited from

`TypeFromSchema.networkingStatus`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:284](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L284)

***

### threadScanResults?

> `optional` **threadScanResults**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

If NetworkingStatus was Success, this field shall contain the Thread network scan results. The list may be
empty if none were found in range on the bands supported by the interface.

The maximum number of results present in the result list supported may depend on memory and may contain a
subset of possibilities, to avoid memory exhaustion on the cluster server and avoid crossing the maximum
command response size supported (see Section 4.4.4, “Message Size Requirements”).

The order in which results are reported is implementation-specific. Results SHOULD be reported in decreasing
LQI order, to maximize the likelihood that most likely to be reachable elements are included within the size
limits of the response.

#### See

MatterSpecification.v11.Core § 11.8.7.2.4

#### Inherited from

`TypeFromSchema.threadScanResults`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:326](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L326)

***

### wiFiScanResults?

> `optional` **wiFiScanResults**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

If NetworkingStatus was Success, this field shall contain the Wi-Fi network scan results. The list may be
empty if none were found in range on the bands supported by the interface, or if directed scanning had been
used and the desired SSID was not found in range.

The maximum number of results present in the result list supported may depend on memory and may contain a
subset of possibilities, to avoid memory exhaustion on the cluster server and avoid crossing the maximum
command response size supported (see Section 4.4.4, “Message Size Requirements”).

The order in which results are reported is implementation-specific. Results SHOULD be reported in decreasing
RSSI order, even if RSSI is not reported in the response, to maximize the likelihood that most likely to be
reachable elements are included within the size limits of the response.

#### See

MatterSpecification.v11.Core § 11.8.7.2.3

#### Inherited from

`TypeFromSchema.wiFiScanResults`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:310](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L310)
