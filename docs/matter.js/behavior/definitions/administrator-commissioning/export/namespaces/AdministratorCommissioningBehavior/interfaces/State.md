[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/administrator-commissioning/export](../../../README.md) / [AdministratorCommissioningBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

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

`StateType.adminFabricIndex`

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

`StateType.adminVendorId`

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L278)

***

### windowStatus

> **windowStatus**: [`CommissioningWindowStatus`](../../../../../../../cluster/export/namespaces/AdministratorCommissioning/enumerations/CommissioningWindowStatus.md)

This attribute shall indicate whether a new Commissioning window has been opened by an Administrator,
using either the OCW command or the OBCW command.

This attribute shall revert to WindowNotOpen upon expiry of a commissioning window.

Note that an initial commissioning window is not opened using either the OCW command or the OBCW
command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.

#### See

MatterSpecification.v11.Core § 11.18.7.1

#### Inherited from

`StateType.windowStatus`

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L251)
