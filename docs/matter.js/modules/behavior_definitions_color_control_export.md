[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/color-control/export

# Module: behavior/definitions/color-control/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_color_control_export._internal_.md)

### Namespaces

- [ColorControlBehavior](behavior_definitions_color_control_export.ColorControlBehavior.md)
- [ColorControlInterface](behavior_definitions_color_control_export.ColorControlInterface.md)

### Classes

- [ColorControlServer](../classes/behavior_definitions_color_control_export.ColorControlServer.md)

### Interfaces

- [ColorControlBehavior](../interfaces/behavior_definitions_color_control_export.ColorControlBehavior-1.md)

### Type Aliases

- [ColorControlInterface](behavior_definitions_color_control_export.md#colorcontrolinterface)
- [ColorLoopSetRequest](behavior_definitions_color_control_export.md#colorloopsetrequest)
- [EnhancedMoveHueRequest](behavior_definitions_color_control_export.md#enhancedmovehuerequest)
- [EnhancedMoveToHueAndSaturationRequest](behavior_definitions_color_control_export.md#enhancedmovetohueandsaturationrequest)
- [EnhancedMoveToHueRequest](behavior_definitions_color_control_export.md#enhancedmovetohuerequest)
- [EnhancedStepHueRequest](behavior_definitions_color_control_export.md#enhancedstephuerequest)
- [MoveColorRequest](behavior_definitions_color_control_export.md#movecolorrequest)
- [MoveColorTemperatureRequest](behavior_definitions_color_control_export.md#movecolortemperaturerequest)
- [MoveHueRequest](behavior_definitions_color_control_export.md#movehuerequest)
- [MoveSaturationRequest](behavior_definitions_color_control_export.md#movesaturationrequest)
- [MoveToColorRequest](behavior_definitions_color_control_export.md#movetocolorrequest)
- [MoveToColorTemperatureRequest](behavior_definitions_color_control_export.md#movetocolortemperaturerequest)
- [MoveToHueAndSaturationRequest](behavior_definitions_color_control_export.md#movetohueandsaturationrequest)
- [MoveToHueRequest](behavior_definitions_color_control_export.md#movetohuerequest)
- [MoveToSaturationRequest](behavior_definitions_color_control_export.md#movetosaturationrequest)
- [StepColorRequest](behavior_definitions_color_control_export.md#stepcolorrequest)
- [StepColorTemperatureRequest](behavior_definitions_color_control_export.md#stepcolortemperaturerequest)
- [StepHueRequest](behavior_definitions_color_control_export.md#stephuerequest)
- [StepSaturationRequest](behavior_definitions_color_control_export.md#stepsaturationrequest)
- [StopMoveStepRequest](behavior_definitions_color_control_export.md#stopmovesteprequest)

### Variables

- [ColorControlBehavior](behavior_definitions_color_control_export.md#colorcontrolbehavior)

## Type Aliases

### ColorControlInterface

Ƭ **ColorControlInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: \{ `hueSaturation`: ``true``  } ; `methods`: [`HueSaturation`](../interfaces/behavior_definitions_color_control_export.ColorControlInterface.HueSaturation.md)  }, \{ `flags`: \{ `xy`: ``true``  } ; `methods`: [`Xy`](../interfaces/behavior_definitions_color_control_export.ColorControlInterface.Xy.md)  }, \{ `flags`: \{ `colorTemperature`: ``true``  } ; `methods`: [`ColorTemperature`](../interfaces/behavior_definitions_color_control_export.ColorControlInterface.ColorTemperature.md)  }, \{ `flags`: \{ `enhancedHue`: ``true``  } ; `methods`: [`EnhancedHue`](../interfaces/behavior_definitions_color_control_export.ColorControlInterface.EnhancedHue.md)  }, \{ `flags`: \{ `colorLoop`: ``true``  } ; `methods`: [`ColorLoop`](../interfaces/behavior_definitions_color_control_export.ColorControlInterface.ColorLoop.md)  }, \{ `flags`: \{ `hueSaturation`: ``true``  } ; `methods`: [`HueSaturationOrXyOrColorTemperature`](../interfaces/behavior_definitions_color_control_export.ColorControlInterface.HueSaturationOrXyOrColorTemperature.md)  }, \{ `flags`: \{ `xy`: ``true``  } ; `methods`: [`HueSaturationOrXyOrColorTemperature`](../interfaces/behavior_definitions_color_control_export.ColorControlInterface.HueSaturationOrXyOrColorTemperature.md)  }, \{ `flags`: \{ `colorTemperature`: ``true``  } ; `methods`: [`HueSaturationOrXyOrColorTemperature`](../interfaces/behavior_definitions_color_control_export.ColorControlInterface.HueSaturationOrXyOrColorTemperature.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:133](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L133)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:267](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L267)

___

### ColorLoopSetRequest

Ƭ **ColorLoopSetRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvColorLoopSetRequest`](cluster_export.ColorControl.md#tlvcolorloopsetrequest)\>

The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through its range of
hues.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.19

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:121](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L121)

___

### EnhancedMoveHueRequest

Ƭ **EnhancedMoveHueRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEnhancedMoveHueRequest`](cluster_export.ColorControl.md#tlvenhancedmovehuerequest)\>

The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their current hue to a
target hue.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.16

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:97](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L97)

___

### EnhancedMoveToHueAndSaturationRequest

Ƭ **EnhancedMoveToHueAndSaturationRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEnhancedMoveToHueAndSaturationRequest`](cluster_export.ColorControl.md#tlvenhancedmovetohueandsaturationrequest)\>

The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition from their
current hue to a target hue and from their current saturation to a target saturation.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.18

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:113](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L113)

___

### EnhancedMoveToHueRequest

Ƭ **EnhancedMoveToHueRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEnhancedMoveToHueRequest`](cluster_export.ColorControl.md#tlvenhancedmovetohuerequest)\>

The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their current hue to a
target hue.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.15

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:89](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L89)

___

### EnhancedStepHueRequest

Ƭ **EnhancedStepHueRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEnhancedStepHueRequest`](cluster_export.ColorControl.md#tlvenhancedstephuerequest)\>

The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a target hue,
resulting in a linear transition through XY space.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.17

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:105](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L105)

___

### MoveColorRequest

Ƭ **MoveColorRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveColorRequest`](cluster_export.ColorControl.md#tlvmovecolorrequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.12

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L57)

___

### MoveColorTemperatureRequest

Ƭ **MoveColorTemperatureRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveColorTemperatureRequest`](cluster_export.ColorControl.md#tlvmovecolortemperaturerequest)\>

The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.21

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:74](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L74)

___

### MoveHueRequest

Ƭ **MoveHueRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveHueRequest`](cluster_export.ColorControl.md#tlvmovehuerequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.5

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:22](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L22)

___

### MoveSaturationRequest

Ƭ **MoveSaturationRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveSaturationRequest`](cluster_export.ColorControl.md#tlvmovesaturationrequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.8

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:37](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L37)

___

### MoveToColorRequest

Ƭ **MoveToColorRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveToColorRequest`](cluster_export.ColorControl.md#tlvmovetocolorrequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.11

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:52](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L52)

___

### MoveToColorTemperatureRequest

Ƭ **MoveToColorTemperatureRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveToColorTemperatureRequest`](cluster_export.ColorControl.md#tlvmovetocolortemperaturerequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.14

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:67](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L67)

___

### MoveToHueAndSaturationRequest

Ƭ **MoveToHueAndSaturationRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveToHueAndSaturationRequest`](cluster_export.ColorControl.md#tlvmovetohueandsaturationrequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.10

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:47](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L47)

___

### MoveToHueRequest

Ƭ **MoveToHueRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveToHueRequest`](cluster_export.ColorControl.md#tlvmovetohuerequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.4

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:17](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L17)

___

### MoveToSaturationRequest

Ƭ **MoveToSaturationRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvMoveToSaturationRequest`](cluster_export.ColorControl.md#tlvmovetosaturationrequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.7

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:32](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L32)

___

### StepColorRequest

Ƭ **StepColorRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStepColorRequest`](cluster_export.ColorControl.md#tlvstepcolorrequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.13

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:62](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L62)

___

### StepColorTemperatureRequest

Ƭ **StepColorTemperatureRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStepColorTemperatureRequest`](cluster_export.ColorControl.md#tlvstepcolortemperaturerequest)\>

The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified step size.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.22

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:81](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L81)

___

### StepHueRequest

Ƭ **StepHueRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStepHueRequest`](cluster_export.ColorControl.md#tlvstephuerequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.6

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:27](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L27)

___

### StepSaturationRequest

Ƭ **StepSaturationRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStepSaturationRequest`](cluster_export.ColorControl.md#tlvstepsaturationrequest)\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.9

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:42](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L42)

___

### StopMoveStepRequest

Ƭ **StopMoveStepRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStopMoveStepRequest`](cluster_export.ColorControl.md#tlvstopmovesteprequest)\>

The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this automatically
provides symmetry to the Level Control cluster.)

Note: the StopMoveStep command has no effect on an active color loop.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.20

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:131](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L131)

## Variables

### ColorControlBehavior

• `Const` **ColorControlBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\>, [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\>

ColorControlBehavior is the base class for objects that support interaction with [ColorControl.Cluster](cluster_export.ColorControl.md#cluster).

This class does not have optional features of ColorControl.Cluster enabled. You can enable additional features using
ColorControlBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts:19](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts:24](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts:26](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts#L26)
