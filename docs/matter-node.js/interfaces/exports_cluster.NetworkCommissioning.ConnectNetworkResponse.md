[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / ConnectNetworkResponse

# Interface: ConnectNetworkResponse

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).ConnectNetworkResponse

Before generating a ConnectNetworkResponse, the server shall:

  • Set the LastNetworkingStatus attribute value to the NetworkingStatus matching the response.

  • Set the LastNetworkID attribute value to the NetworkID that was used in the ConnectNetwork command which
    caused the response to be generated.

  • Set the LastConnectErrorValue attribute value to the ErrorValue matching the response, including setting it
    to null if the ErrorValue is not applicable.

The NetworkingStatus field shall indicate the status of the last connection attempt, taking one of these values:

  • Success: Connection succeeded.

  • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the attempt to
    join the network.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • NetworkIdNotFound: The network identifier was not found among the added network configurations in Networks
    attribute.

  • RegulatoryError: Could not connect to a network due to lack of regulatory configuration.

  • UnknownError: An internal error occurred during the operation.

  • Association errors (see also description of errors in Section 11.8.5.3, “NetworkCommissioningStatusEnum”):
    AuthFailure, UnsupportedSecurity, OtherConnectionFailure, IPV6Failed, IPBindFailed

See Section 11.8.7.2.2, “DebugText Field” for usage.

**`See`**

MatterSpecification.v11.Core § 11.8.7.10

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvConnectNetworkResponse`](../modules/exports_cluster.NetworkCommissioning.md#tlvconnectnetworkresponse)\>

  ↳ **`ConnectNetworkResponse`**

## Table of contents

### Properties

- [debugText](exports_cluster.NetworkCommissioning.ConnectNetworkResponse.md#debugtext)
- [errorValue](exports_cluster.NetworkCommissioning.ConnectNetworkResponse.md#errorvalue)
- [networkingStatus](exports_cluster.NetworkCommissioning.ConnectNetworkResponse.md#networkingstatus)

## Properties

### debugText

• `Optional` **debugText**: `string`

#### Inherited from

TypeFromSchema.debugText

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:513

___

### errorValue

• **errorValue**: ``null`` \| `number`

• ErrorValue interpretation for Wi-Fi association errors:

    ◦ On any association failure during enabling of a network, the ErrorValue field shall be set to the
      Status Code value that was present in the last frame related to association where Status Code was not
      equal to zero and which caused the failure of a final retry attempt, if this final failure was due to
      one of the following Management frames:

      ▪ Association Response (Type 0, Subtype 1)

      ▪ Reassociation Response (Type 0, Subtype 3)

      ▪ Authentication (Type 0, Subtype 11)

    ◦ Table 9-50 "Status Codes" in IEEE 802.11-2020 contains a description of all values possible, which can
      unambiguously be used to determine the cause, such as an invalid security type, unsupported rate, etc.

  • Otherwise, the ErrorValue field shall contain an implementation-dependent value which may be used by a
    reader of the structure to record, report or diagnose the failure.

**`See`**

MatterSpecification.v11.Core § 11.8.7.10.1

#### Inherited from

TypeFromSchema.errorValue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:536

___

### networkingStatus

• **networkingStatus**: [`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md)

#### Inherited from

TypeFromSchema.networkingStatus

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:512
