[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/on-off/export](../modules/behavior_definitions_on_off_export.md) / [OnOffBehavior](../modules/behavior_definitions_on_off_export.OnOffBehavior.md) / State

# Interface: State

[behavior/definitions/on-off/export](../modules/behavior_definitions_on_off_export.md).[OnOffBehavior](../modules/behavior_definitions_on_off_export.OnOffBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_on_off_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [onOff](behavior_definitions_on_off_export.OnOffBehavior.State.md#onoff)

## Properties

### onOff

• **onOff**: `boolean`

The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or
turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.

**`See`**

MatterSpecification.v11.Cluster § 1.5.6.1

#### Inherited from

StateType.onOff

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:263](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L263)
