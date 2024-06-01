[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / MoveToHueRequest

# Interface: MoveToHueRequest

Input to the ColorControl moveToHue command

## See

MatterSpecification.v11.Cluster § 3.2.11.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvMoveToHueRequest`](../README.md#tlvmovetohuerequest)\>

## Properties

### direction

> **direction**: [`ColorControlDirection`](../enumerations/ColorControlDirection.md)

The Direction field shall be one of the non-reserved values in Values of the Direction Field.

#### See

MatterSpecification.v11.Cluster § 3.2.11.4.2

#### Inherited from

`TypeFromSchema.direction`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:47

***

### hue

> **hue**: `number`

The Hue field specifies the hue to be moved to.

#### See

MatterSpecification.v11.Cluster § 3.2.11.4.1

#### Inherited from

`TypeFromSchema.hue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:41

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:55

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:58

***

### transitionTime

> **transitionTime**: `number`

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to move to the new
hue.

#### See

MatterSpecification.v11.Cluster § 3.2.11.4.3

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:54
