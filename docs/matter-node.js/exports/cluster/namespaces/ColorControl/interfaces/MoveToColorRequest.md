[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / MoveToColorRequest

# Interface: MoveToColorRequest

Input to the ColorControl moveToColor command

## See

MatterSpecification.v11.Cluster § 3.2.11.11

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvMoveToColorRequest`](../README.md#tlvmovetocolorrequest)\>

## Properties

### colorX

> **colorX**: `number`

#### Inherited from

`TypeFromSchema.colorX`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:294

***

### colorY

> **colorY**: `number`

#### Inherited from

`TypeFromSchema.colorY`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:295

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:297

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:300

***

### transitionTime

> **transitionTime**: `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:296
