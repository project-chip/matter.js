[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / MoveToHueAndSaturationRequest

# Interface: MoveToHueAndSaturationRequest

Input to the ColorControl moveToHueAndSaturation command

## See

MatterSpecification.v11.Cluster § 3.2.11.10

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvMoveToHueAndSaturationRequest`](../README.md#tlvmovetohueandsaturationrequest)\>

## Properties

### hue

> **hue**: `number`

#### Inherited from

`TypeFromSchema.hue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:271

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:274

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:277

***

### saturation

> **saturation**: `number`

#### Inherited from

`TypeFromSchema.saturation`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:272

***

### transitionTime

> **transitionTime**: `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:273
