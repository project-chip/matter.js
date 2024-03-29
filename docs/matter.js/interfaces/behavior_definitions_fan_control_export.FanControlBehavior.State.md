[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/fan-control/export](../modules/behavior_definitions_fan_control_export.md) / [FanControlBehavior](../modules/behavior_definitions_fan_control_export.FanControlBehavior.md) / State

# Interface: State

[behavior/definitions/fan-control/export](../modules/behavior_definitions_fan_control_export.md).[FanControlBehavior](../modules/behavior_definitions_fan_control_export.FanControlBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_fan_control_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [fanMode](behavior_definitions_fan_control_export.FanControlBehavior.State.md#fanmode)
- [fanModeSequence](behavior_definitions_fan_control_export.FanControlBehavior.State.md#fanmodesequence)
- [percentCurrent](behavior_definitions_fan_control_export.FanControlBehavior.State.md#percentcurrent)
- [percentSetting](behavior_definitions_fan_control_export.FanControlBehavior.State.md#percentsetting)

## Properties

### fanMode

• **fanMode**: [`FanMode`](../enums/cluster_export.FanControl.FanMode.md)

This attribute shall indicate the current speed mode of the fan. This attribute may be written by the
client to indicate a new speed mode of the fan. This attribute shall be set to one of the values in the
table below.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.4.6.1

#### Inherited from

StateType.fanMode

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:313](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L313)

___

### fanModeSequence

• **fanModeSequence**: [`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md)

This indicates the fan speed ranges that shall be supported.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.4.6.2

#### Inherited from

StateType.fanModeSequence

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:320](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L320)

___

### percentCurrent

• **percentCurrent**: `number`

This attribute shall indicate the actual currently operating fan speed, or zero to indicate that the fan
is off. See Section 4.4.6.3.1 for more details.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.4.6.4

#### Inherited from

StateType.percentCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:341](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L341)

___

### percentSetting

• **percentSetting**: ``null`` \| `number`

This attribute shall indicate the speed setting for the fan. This attribute may be written by the client
to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT
change. If this is set to 0, the server shall set the FanMode attribute value to Off.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.4.6.3

#### Inherited from

StateType.percentSetting

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:333](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L333)
