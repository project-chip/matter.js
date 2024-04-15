[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/administrator-commissioning/export](../modules/behavior_definitions_administrator_commissioning_export.md) / [AdministratorCommissioningBehavior](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningBehavior.md) / State

# Interface: State

[behavior/definitions/administrator-commissioning/export](../modules/behavior_definitions_administrator_commissioning_export.md).[AdministratorCommissioningBehavior](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_administrator_commissioning_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [adminFabricIndex](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningBehavior.State.md#adminfabricindex)
- [adminVendorId](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningBehavior.State.md#adminvendorid)
- [windowStatus](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningBehavior.State.md#windowstatus)

## Properties

### adminFabricIndex

• **adminFabricIndex**: ``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be
used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.

If, during an open commissioning window, the fabric for the Administrator that opened the window is
removed, then this attribute shall be set to null.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

**`See`**

MatterSpecification.v11.Core § 11.18.7.2

#### Inherited from

StateType.adminFabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:260](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L260)

___

### adminVendorId

• **adminVendorId**: ``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid)

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID
associated with the Fabric scoping of the Administrator that opened the window. This field shall match
the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened
the window, at the time of window opening. If the fabric for the Administrator that opened the window is
removed from the node while the commissioning window is still open, this attribute shall NOT be updated.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

**`See`**

MatterSpecification.v11.Core § 11.18.7.3

#### Inherited from

StateType.adminVendorId

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:273](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L273)

___

### windowStatus

• **windowStatus**: [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md)

This attribute shall indicate whether a new Commissioning window has been opened by an Administrator,
using either the OCW command or the OBCW command.

This attribute shall revert to WindowNotOpen upon expiry of a commissioning window.

Note that an initial commissioning window is not opened using either the OCW command or the OBCW
command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.

**`See`**

MatterSpecification.v11.Core § 11.18.7.1

#### Inherited from

StateType.windowStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:246](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L246)
