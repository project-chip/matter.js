[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / MoveToHueRequest

# Interface: MoveToHueRequest

Input to the ColorControl moveToHue command

## See

MatterSpecification.v11.Cluster § 3.2.11.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToHueRequest`](../README.md#tlvmovetohuerequest)\>

## Properties

### direction

> **direction**: [`ColorControlDirection`](../enumerations/ColorControlDirection.md)

The Direction field shall be one of the non-reserved values in Values of the Direction Field.

#### See

MatterSpecification.v11.Cluster § 3.2.11.4.2

#### Inherited from

`TypeFromSchema.direction`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L66)

***

### hue

> **hue**: `number`

The Hue field specifies the hue to be moved to.

#### See

MatterSpecification.v11.Cluster § 3.2.11.4.1

#### Inherited from

`TypeFromSchema.hue`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L59)

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L76)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L77)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L74)
