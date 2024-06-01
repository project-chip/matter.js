[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / MoveToSaturationRequest

# Interface: MoveToSaturationRequest

Input to the ColorControl moveToSaturation command

## See

MatterSpecification.v11.Cluster § 3.2.11.7

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvMoveToSaturationRequest`](../README.md#tlvmovetosaturationrequest)\>

## Properties

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:172

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:175

***

### saturation

> **saturation**: `number`

#### Inherited from

`TypeFromSchema.saturation`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:170

***

### transitionTime

> **transitionTime**: `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:171
