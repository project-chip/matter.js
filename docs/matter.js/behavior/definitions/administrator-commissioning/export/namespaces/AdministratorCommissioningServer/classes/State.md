[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/administrator-commissioning/export](../../../README.md) / [AdministratorCommissioningServer](../README.md) / State

# Class: State

## Extends

- `State`

## Constructors

### new State()

> **new State**(): [`State`](State.md)

#### Returns

[`State`](State.md)

#### Inherited from

`AdministratorCommissioningBehavior.State.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

## Properties

### adminFabricIndex

> **adminFabricIndex**: `null` \| [`FabricIndex`](../../../../../../../datatype/export/README.md#fabricindex)

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be
used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.

If, during an open commissioning window, the fabric for the Administrator that opened the window is
removed, then this attribute shall be set to null.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

#### See

MatterSpecification.v11.Core § 11.18.7.2

#### Inherited from

`AdministratorCommissioningBehavior.State.adminFabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:265](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L265)

***

### adminVendorId

> **adminVendorId**: `null` \| [`VendorId`](../../../../../../../datatype/export/README.md#vendorid)

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID
associated with the Fabric scoping of the Administrator that opened the window. This field shall match
the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened
the window, at the time of window opening. If the fabric for the Administrator that opened the window is
removed from the node while the commissioning window is still open, this attribute shall NOT be updated.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

#### See

MatterSpecification.v11.Core § 11.18.7.3

#### Inherited from

`AdministratorCommissioningBehavior.State.adminVendorId`

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L278)

***

### windowStatus

> **windowStatus**: [`CommissioningWindowStatus`](../../../../../../../cluster/export/namespaces/AdministratorCommissioning/enumerations/CommissioningWindowStatus.md) = `AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen`

#### Overrides

`AdministratorCommissioningBehavior.State.windowStatus`

#### Source

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningServer.ts:284](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningServer.ts#L284)
