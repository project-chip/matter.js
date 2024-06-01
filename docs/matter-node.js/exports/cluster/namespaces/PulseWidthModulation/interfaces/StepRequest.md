[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [PulseWidthModulation](../README.md) / StepRequest

# Interface: StepRequest

Input to the PulseWidthModulation step command

## See

MatterSpecification.v11.Cluster § 1.6.6.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStepRequest`](../README.md#tlvsteprequest)\>

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

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:118

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

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:122

***

### stepMode

> **stepMode**: `number`

#### Inherited from

`TypeFromSchema.stepMode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:115

***

### stepSize

> **stepSize**: `number`

#### Inherited from

`TypeFromSchema.stepSize`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:116

***

### transitionTime

> **transitionTime**: `null` \| `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:117
