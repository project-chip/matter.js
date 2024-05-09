[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / NetworkConfigResponse

# Interface: NetworkConfigResponse

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).NetworkConfigResponse

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

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvNetworkConfigResponse`](../modules/cluster_export.NetworkCommissioning.md#tlvnetworkconfigresponse)\>

  ↳ **`NetworkConfigResponse`**

## Table of contents

### Properties

- [debugText](cluster_export.NetworkCommissioning.NetworkConfigResponse.md#debugtext)
- [networkIndex](cluster_export.NetworkCommissioning.NetworkConfigResponse.md#networkindex)
- [networkingStatus](cluster_export.NetworkCommissioning.NetworkConfigResponse.md#networkingstatus)

## Properties

### debugText

• `Optional` **debugText**: `string`

#### Inherited from

TypeFromSchema.debugText

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:391](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L391)

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

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:400](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L400)

___

### networkingStatus

• **networkingStatus**: [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)

#### Inherited from

TypeFromSchema.networkingStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:390](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L390)
