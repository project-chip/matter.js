[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / NetworkConfigResponse

# Interface: NetworkConfigResponse

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).NetworkConfigResponse

This response command relates status information for some commands which require it as their response command.
See each individual cluster server command for the situations that may cause a NetworkingStatus different than
Success.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value to the
NetworkID that was used in the command for which an invocation caused the response to be generated.

The NetworkingStatus field shall indicate the status of the last operation attempting to modify the Networks
attribute configuration, taking one of these values:

  • Success: Operation succeeded.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • BoundsExceeded: Adding this network configuration would exceed the limit defined by Section 11.8.6.1,
    “MaxNetworks Attribute”.

  • NetworkIdNotFound: The network identifier was expected to be found, but was not found among the added
    network configurations in Networks attribute.

  • UnknownError: An internal error occurred during the operation.

See Section 11.8.7.2.2, “DebugText Field” for usage.

**`See`**

MatterSpecification.v11.Core § 11.8.7.8

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvNetworkConfigResponse`](../modules/exports_cluster.NetworkCommissioning.md#tlvnetworkconfigresponse)\>

  ↳ **`NetworkConfigResponse`**

## Table of contents

### Properties

- [debugText](exports_cluster.NetworkCommissioning.NetworkConfigResponse.md#debugtext)
- [networkIndex](exports_cluster.NetworkCommissioning.NetworkConfigResponse.md#networkindex)
- [networkingStatus](exports_cluster.NetworkCommissioning.NetworkConfigResponse.md#networkingstatus)

## Properties

### debugText

• `Optional` **debugText**: `string`

#### Inherited from

TypeFromSchema.debugText

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:419

___

### networkIndex

• `Optional` **networkIndex**: `number`

When the NetworkingStatus is Success, this field shall be present. It shall contain the 0-based index of the
entry in the Networks attribute that was last added, updated or removed successfully by the associated
request command.

**`See`**

MatterSpecification.v11.Core § 11.8.7.8.1

#### Inherited from

TypeFromSchema.networkIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:427

___

### networkingStatus

• **networkingStatus**: [`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md)

#### Inherited from

TypeFromSchema.networkingStatus

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:418
