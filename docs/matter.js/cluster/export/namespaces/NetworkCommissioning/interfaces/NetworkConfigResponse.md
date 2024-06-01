[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [NetworkCommissioning](../README.md) / NetworkConfigResponse

# Interface: NetworkConfigResponse

This response command relates status information for some commands which require it as their response command.
See each individual cluster server command for the situations that may cause a NetworkingStatus different than
Success.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value to the
NetworkID that was used in the command for which an invocation caused the response to be generated.

## See

MatterSpecification.v11.Core § 11.8.7.8

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNetworkConfigResponse`](../README.md#tlvnetworkconfigresponse)\>

## Properties

### debugText?

> `optional` **debugText**: `string`

See Section 11.8.7.2.2, “DebugText Field” for usage.

#### See

MatterSpecification.v11.Core § 11.8.7.8.2

#### Inherited from

`TypeFromSchema.debugText`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:411](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L411)

***

### networkIndex?

> `optional` **networkIndex**: `number`

When the NetworkingStatus is Success, this field shall be present. It shall contain the 0-based index of the
entry in the Networks attribute that was last added, updated or removed successfully by the associated
request command.

#### See

MatterSpecification.v11.Core § 11.8.7.8.3

#### Inherited from

`TypeFromSchema.networkIndex`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:420](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L420)

***

### networkingStatus

> **networkingStatus**: [`NetworkCommissioningStatus`](../enumerations/NetworkCommissioningStatus.md)

The NetworkingStatus field shall indicate the status of the last operation attempting to modify the Networks
attribute configuration, taking one of these values:

  • Success: Operation succeeded.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • BoundsExceeded: Adding this network configuration would exceed the limit defined by Section 11.8.6.1,
    “MaxNetworks Attribute”.

  • NetworkIdNotFound: The network identifier was expected to be found, but was not found among the added
    network configurations in Networks attribute.

  • UnknownError: An internal error occurred during the operation.

#### See

MatterSpecification.v11.Core § 11.8.7.8.1

#### Inherited from

`TypeFromSchema.networkingStatus`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:404](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L404)
