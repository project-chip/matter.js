[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / ScanNetworksResponse

# Interface: ScanNetworksResponse

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).ScanNetworksResponse

This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
operation was successful.

Results are valid only if NetworkingStatus is Success.

Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

**`See`**

MatterSpecification.v11.Core § 11.8.7.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvScanNetworksResponse`](../modules/cluster_export.NetworkCommissioning.md#tlvscannetworksresponse)\>

  ↳ **`ScanNetworksResponse`**

## Table of contents

### Properties

- [debugText](cluster_export.NetworkCommissioning.ScanNetworksResponse.md#debugtext)
- [networkingStatus](cluster_export.NetworkCommissioning.ScanNetworksResponse.md#networkingstatus)
- [threadScanResults](cluster_export.NetworkCommissioning.ScanNetworksResponse.md#threadscanresults)
- [wiFiScanResults](cluster_export.NetworkCommissioning.ScanNetworksResponse.md#wifiscanresults)

## Properties

### debugText

• `Optional` **debugText**: `string`

This field, if present and non-empty, may contain error information which may be communicated to the user in
case the NetworkingStatus was not Success. Its purpose is to help developers in troubleshooting errors and
may go into logs or crash reports.

**`See`**

MatterSpecification.v11.Core § 11.8.7.2.2

#### Inherited from

TypeFromSchema.debugText

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L293)

___

### networkingStatus

• **networkingStatus**: [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)

The NetworkingStatus field shall indicate the status of the last scan operation, taking one of these values:

  • Success: Scanning succeeded.

  • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the scan.
    This error cannot occur if no network identifier was provided, such as when scanning for all available
    networks.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • RegulatoryError: Could not scan on any bands due to lack of regulatory configuration.

  • UnknownError: An internal error occurred during scanning.

**`See`**

MatterSpecification.v11.Core § 11.8.7.2.1

#### Inherited from

TypeFromSchema.networkingStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:284](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L284)

___

### threadScanResults

• `Optional` **threadScanResults**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `channel`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `lqi`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[]

If NetworkingStatus was Success, this field shall contain the Thread network scan results. The list may be
empty if none were found in range on the bands supported by the interface.

The maximum number of results present in the result list supported may depend on memory and may contain a
subset of possibilities, to avoid memory exhaustion on the cluster server and avoid crossing the maximum
command response size supported (see Section 4.4.4, “Message Size Requirements”).

The order in which results are reported is implementation-specific. Results SHOULD be reported in decreasing
LQI order, to maximize the likelihood that most likely to be reachable elements are included within the size
limits of the response.

**`See`**

MatterSpecification.v11.Core § 11.8.7.2.4

#### Inherited from

TypeFromSchema.threadScanResults

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:326](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L326)

___

### wiFiScanResults

• `Optional` **wiFiScanResults**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bssid`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `unencrypted`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wep`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpa2Personal`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpa3Personal`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpaPersonal`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `ssid`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>[]

If NetworkingStatus was Success, this field shall contain the Wi-Fi network scan results. The list may be
empty if none were found in range on the bands supported by the interface, or if directed scanning had been
used and the desired SSID was not found in range.

The maximum number of results present in the result list supported may depend on memory and may contain a
subset of possibilities, to avoid memory exhaustion on the cluster server and avoid crossing the maximum
command response size supported (see Section 4.4.4, “Message Size Requirements”).

The order in which results are reported is implementation-specific. Results SHOULD be reported in decreasing
RSSI order, even if RSSI is not reported in the response, to maximize the likelihood that most likely to be
reachable elements are included within the size limits of the response.

**`See`**

MatterSpecification.v11.Core § 11.8.7.2.3

#### Inherited from

TypeFromSchema.wiFiScanResults

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:310](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L310)
