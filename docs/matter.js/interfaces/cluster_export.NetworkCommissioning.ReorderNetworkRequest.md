[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / ReorderNetworkRequest

# Interface: ReorderNetworkRequest

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).ReorderNetworkRequest

Input to the NetworkCommissioning reorderNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.11

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvReorderNetworkRequest`](../modules/cluster_export.NetworkCommissioning.md#tlvreordernetworkrequest)\>

  ↳ **`ReorderNetworkRequest`**

## Table of contents

### Properties

- [breadcrumb](cluster_export.NetworkCommissioning.ReorderNetworkRequest.md#breadcrumb)
- [networkId](cluster_export.NetworkCommissioning.ReorderNetworkRequest.md#networkid)
- [networkIndex](cluster_export.NetworkCommissioning.ReorderNetworkRequest.md#networkindex)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

Effect when received

If the Networks attribute does not contain a matching entry, the command shall immediately respond with
NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound.

If the NetworkIndex field has a value larger or equal to the current number of entries in the Networks
attribute, the command shall immediately respond with NetworkConfigResponse having NetworkingStatus status
field set to OutOfRange.

On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based index of
the entry in the Networks attribute that was just updated, matching the incoming NetworkIndex, and a
NetworkingStatus status field set to Success.

The entry selected shall be inserted at the new position in the list. All other entries, if any exist, shall
be moved to allow the insertion, in a way that they all retain their existing relative order between each
other, with the exception of the newly re-ordered entry.

Re-ordering to the same NetworkIndex as the current location shall be considered as a success and yield no
visible changes of the Networks attribute.

Examples of re-ordering

To better illustrate the re-ordering operation, consider this initial state, exemplary of a Wi-Fi

device:

On receiving ReorderNetwork with:

  • NetworkId = Home-Guest

  • NetworkIndex = 0

The outcome, after applying to the initial state would be:

In the above outcome, FancyCat and BlueDolphin moved "down" and Home-Guest became the highest priority
network in the list.

On receiving ReorderNetwork with:

  • NetworkId = FancyCat

  • NetworkIndex = 3

The outcome, after applying to the initial state would be:

In the above outcome, BlueDolphin, Home-Guest and WillowTree moved "up" and FancyCat became the lowest
priority network in the list.

**`See`**

MatterSpecification.v11.Core § 11.8.7.11.3

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:628](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L628)

___

### networkId

• **networkId**: `Uint8Array`

This field shall contain the NetworkID for the entry to reorder: the SSID for Wi-Fi and XPAN ID for Thread.

**`See`**

MatterSpecification.v11.Core § 11.8.7.11.1

#### Inherited from

TypeFromSchema.networkId

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:565](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L565)

___

### networkIndex

• **networkIndex**: `number`

This field shall contain the 0-based index of the new desired position of the entry in the Networks
attribute.

**`See`**

MatterSpecification.v11.Core § 11.8.7.11.2

#### Inherited from

TypeFromSchema.networkIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:573](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L573)
