[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / StepColorRequest

# Interface: StepColorRequest

Input to the ColorControl stepColor command

## See

MatterSpecification.v11.Cluster § 3.2.11.13

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStepColorRequest`](../README.md#tlvstepcolorrequest)\>

## Properties

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:360

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:363

***

### stepX

> **stepX**: `number`

#### Inherited from

`TypeFromSchema.stepX`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:351

***

### stepY

> **stepY**: `number`

#### Inherited from

`TypeFromSchema.stepY`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:352

***

### transitionTime

> **transitionTime**: `number`

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
color change.

#### See

MatterSpecification.v11.Cluster § 3.2.11.13.2

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:359
