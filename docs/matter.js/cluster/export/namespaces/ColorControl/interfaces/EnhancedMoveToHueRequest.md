[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / EnhancedMoveToHueRequest

# Interface: EnhancedMoveToHueRequest

Input to the ColorControl enhancedMoveToHue command

## See

MatterSpecification.v11.Cluster § 3.2.11.15

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnhancedMoveToHueRequest`](../README.md#tlvenhancedmovetohuerequest)\>

## Properties

### direction

> **direction**: [`ColorControlDirection`](../enumerations/ColorControlDirection.md)

This field is identical to the Direction field of the MoveToHue command of the Color Control cluster (see
sub-clause Use of the OptionsMask and OptionsOverride fields).

#### See

MatterSpecification.v11.Cluster § 3.2.11.15.2

#### Inherited from

`TypeFromSchema.direction`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:558](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L558)

***

### enhancedHue

> **enhancedHue**: `number`

The EnhancedHue field specifies the target extended hue for the lamp.

#### See

MatterSpecification.v11.Cluster § 3.2.11.15.1

#### Inherited from

`TypeFromSchema.enhancedHue`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:550](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L550)

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:568](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L568)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:569](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L569)

***

### transitionTime

> **transitionTime**: `number`

This field is identical to the TransitionTime field of the MoveToHue command of the Color Control cluster
(see sub-clause Use of the OptionsMask and OptionsOverride fields).

#### See

MatterSpecification.v11.Cluster § 3.2.11.15.3

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:566](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L566)
