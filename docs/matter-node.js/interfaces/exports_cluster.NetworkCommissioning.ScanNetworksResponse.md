[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / ScanNetworksResponse

# Interface: ScanNetworksResponse

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).ScanNetworksResponse

This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
operation was successful.

Results are valid only if NetworkingStatus is Success.

Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

**`See`**

MatterSpecification.v11.Core § 11.8.7.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvScanNetworksResponse`](../modules/exports_cluster.NetworkCommissioning.md#tlvscannetworksresponse)\>

  ↳ **`ScanNetworksResponse`**

## Table of contents

### Properties

- [debugText](exports_cluster.NetworkCommissioning.ScanNetworksResponse.md#debugtext)
- [networkingStatus](exports_cluster.NetworkCommissioning.ScanNetworksResponse.md#networkingstatus)
- [threadScanResults](exports_cluster.NetworkCommissioning.ScanNetworksResponse.md#threadscanresults)
- [wiFiScanResults](exports_cluster.NetworkCommissioning.ScanNetworksResponse.md#wifiscanresults)

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:272

___

### networkingStatus

• **networkingStatus**: [`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md)

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:264

___

### threadScanResults

• `Optional` **threadScanResults**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `channel`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `lqi`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\>  }\>[]

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:342

___

### wiFiScanResults

• `Optional` **wiFiScanResults**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bssid`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `unencrypted`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wep`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wpa2Personal`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wpa3Personal`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wpaPersonal`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `ssid`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`WiFiBand`](../enums/exports_cluster.NetworkCommissioning.WiFiBand.md)\>  }\>[]

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:288
