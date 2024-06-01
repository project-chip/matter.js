[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/color-control/export

# behavior/definitions/color-control/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ColorControlBehavior](namespaces/ColorControlBehavior/README.md)
- [ColorControlInterface](namespaces/ColorControlInterface/README.md)
- [ColorControlServerLogic](namespaces/ColorControlServerLogic/README.md)

### Classes

- [ColorControlServer](classes/ColorControlServer.md)
- [ColorControlServerLogic](classes/ColorControlServerLogic.md)

### Interfaces

- [ColorControlBehavior](interfaces/ColorControlBehavior.md)

## Type Aliases

### ColorControlInterface

> **ColorControlInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L132)

***

### ColorLoopSetRequest

> **ColorLoopSetRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvColorLoopSetRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvcolorloopsetrequest)\>

The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through its range of
hues.

#### See

MatterSpecification.v11.Cluster § 3.2.11.19

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L120)

***

### EnhancedMoveHueRequest

> **EnhancedMoveHueRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnhancedMoveHueRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvenhancedmovehuerequest)\>

The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their current hue to a
target hue.

#### See

MatterSpecification.v11.Cluster § 3.2.11.16

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L96)

***

### EnhancedMoveToHueAndSaturationRequest

> **EnhancedMoveToHueAndSaturationRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnhancedMoveToHueAndSaturationRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvenhancedmovetohueandsaturationrequest)\>

The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition from their
current hue to a target hue and from their current saturation to a target saturation.

#### See

MatterSpecification.v11.Cluster § 3.2.11.18

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L112)

***

### EnhancedMoveToHueRequest

> **EnhancedMoveToHueRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnhancedMoveToHueRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvenhancedmovetohuerequest)\>

The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their current hue to a
target hue.

#### See

MatterSpecification.v11.Cluster § 3.2.11.15

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L88)

***

### EnhancedStepHueRequest

> **EnhancedStepHueRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnhancedStepHueRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvenhancedstephuerequest)\>

The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a target hue,
resulting in a linear transition through XY space.

#### See

MatterSpecification.v11.Cluster § 3.2.11.17

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L104)

***

### MoveColorRequest

> **MoveColorRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveColorRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvmovecolorrequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.12

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L56)

***

### MoveColorTemperatureRequest

> **MoveColorTemperatureRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveColorTemperatureRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvmovecolortemperaturerequest)\>

The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.

#### See

MatterSpecification.v11.Cluster § 3.2.11.21

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L73)

***

### MoveHueRequest

> **MoveHueRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveHueRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvmovehuerequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.5

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L21)

***

### MoveSaturationRequest

> **MoveSaturationRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveSaturationRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvmovesaturationrequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.8

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L36)

***

### MoveToColorRequest

> **MoveToColorRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToColorRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvmovetocolorrequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.11

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L51)

***

### MoveToColorTemperatureRequest

> **MoveToColorTemperatureRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToColorTemperatureRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvmovetocolortemperaturerequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.14

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L66)

***

### MoveToHueAndSaturationRequest

> **MoveToHueAndSaturationRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToHueAndSaturationRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvmovetohueandsaturationrequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.10

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L46)

***

### MoveToHueRequest

> **MoveToHueRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToHueRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvmovetohuerequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.4

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L16)

***

### MoveToSaturationRequest

> **MoveToSaturationRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToSaturationRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvmovetosaturationrequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.7

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L31)

***

### StepColorRequest

> **StepColorRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStepColorRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvstepcolorrequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.13

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L61)

***

### StepColorTemperatureRequest

> **StepColorTemperatureRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStepColorTemperatureRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvstepcolortemperaturerequest)\>

The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified step size.

#### See

MatterSpecification.v11.Cluster § 3.2.11.22

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L80)

***

### StepHueRequest

> **StepHueRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStepHueRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvstephuerequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.6

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L26)

***

### StepSaturationRequest

> **StepSaturationRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStepSaturationRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvstepsaturationrequest)\>

#### See

MatterSpecification.v11.Cluster § 3.2.11.9

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L41)

***

### StopMoveStepRequest

> **StopMoveStepRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStopMoveStepRequest`](../../../../cluster/export/namespaces/ColorControl/README.md#tlvstopmovesteprequest)\>

The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this automatically
provides symmetry to the Level Control cluster.)

Note: the StopMoveStep command has no effect on an active color loop.

#### See

MatterSpecification.v11.Cluster § 3.2.11.20

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlInterface.ts#L130)

## Variables

### ColorControlBehavior

> `const` **ColorControlBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ColorControlInterface`](README.md#colorcontrolinterface)\>, [`ColorControlInterface`](README.md#colorcontrolinterface)\>

ColorControlBehavior is the base class for objects that support interaction with [ColorControl.Cluster](../../../../cluster/export/namespaces/ColorControl/README.md#cluster).

This class does not have optional features of ColorControl.Cluster enabled. You can enable additional features using
ColorControlBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts#L19)
