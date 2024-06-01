[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [LevelControl](../README.md) / StepWithOnOffRequest

# Interface: StepWithOnOffRequest

Input to the LevelControl stepWithOnOff command

## See

MatterSpecification.v11.Cluster § 1.6.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStepWithOnOffRequest`](../README.md#tlvstepwithonoffrequest)\>

## Properties

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:212

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:216

***

### stepMode

> **stepMode**: [`StepMode`](../enumerations/StepMode.md)

#### Inherited from

`TypeFromSchema.stepMode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:209

***

### stepSize

> **stepSize**: `number`

#### Inherited from

`TypeFromSchema.stepSize`

#### Source

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:210

***

### transitionTime

> **transitionTime**: `null` \| `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:211
