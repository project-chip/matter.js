[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/power-source/export](../modules/behavior_definitions_power_source_export.md) / [PowerSourceBehavior](../modules/behavior_definitions_power_source_export.PowerSourceBehavior.md) / State

# Interface: State

[behavior/definitions/power-source/export](../modules/behavior_definitions_power_source_export.md).[PowerSourceBehavior](../modules/behavior_definitions_power_source_export.PowerSourceBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_power_source_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [description](behavior_definitions_power_source_export.PowerSourceBehavior.State.md#description)
- [order](behavior_definitions_power_source_export.PowerSourceBehavior.State.md#order)
- [status](behavior_definitions_power_source_export.PowerSourceBehavior.State.md#status)

## Properties

### description

• **description**: `string`

This attribute shall provide a user-facing description of this source, used to distinguish it from other
power sources, e.g. "DC Power", "Primary Battery" or "Battery back-up". This attribute shall NOT be used
to convey information such as battery form factor, or chemistry.

**`See`**

MatterSpecification.v11.Core § 11.7.6.3

#### Inherited from

StateType.description

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1313](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1313)

___

### order

• **order**: `number`

This attribute shall indicate the relative preference with which the Node will select this source to
provide power. A source with a lower order shall be selected by the Node to provide power before any
other source with a higher order, if the lower order source is available (see Status).

Note, Order is read-only and therefore NOT intended to allow clients control over power source selection.

**`See`**

MatterSpecification.v11.Core § 11.7.6.2

#### Inherited from

StateType.order

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1304](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1304)

___

### status

• **status**: [`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md)

This attribute shall indicate the participation of this power source in providing power to the Node as
specified in PowerSourceStatusEnum.

**`See`**

MatterSpecification.v11.Core § 11.7.6.1

#### Inherited from

StateType.status

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1293)
