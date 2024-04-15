[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/identify/export](../modules/behavior_definitions_identify_export.md) / [IdentifyBehavior](../modules/behavior_definitions_identify_export.IdentifyBehavior.md) / State

# Interface: State

[behavior/definitions/identify/export](../modules/behavior_definitions_identify_export.md).[IdentifyBehavior](../modules/behavior_definitions_identify_export.IdentifyBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_identify_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [identifyTime](behavior_definitions_identify_export.IdentifyBehavior.State.md#identifytime)
- [identifyType](behavior_definitions_identify_export.IdentifyBehavior.State.md#identifytype)

## Properties

### identifyTime

• **identifyTime**: `number`

This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to
identify itself.

If this attribute is set to a value other than 0 then the device shall enter its identification state,
in order to indicate to an observer which of several nodes and/or endpoints it is. It is RECOMMENDED
that this state consists of flashing a light with a period of 0.5 seconds. The IdentifyTime attribute
shall be decremented every second while in this state.

If this attribute reaches or is set to the value 0 then the device shall terminate its identification
state.

**`See`**

MatterSpecification.v11.Cluster § 1.2.5.1

#### Inherited from

StateType.identifyTime

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L255)

___

### identifyType

• **identifyType**: [`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md)

This attribute specifies how the identification state is presented to the user. This field shall contain
one of the values listed below:

Table 2. Values of the IdentifyType attribute

**`See`**

MatterSpecification.v11.Cluster § 1.2.5.2

#### Inherited from

StateType.identifyType

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:265](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L265)
