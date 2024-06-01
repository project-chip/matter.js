[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / EnhancedMoveToHueAndSaturationRequest

# Interface: EnhancedMoveToHueAndSaturationRequest

Input to the ColorControl enhancedMoveToHueAndSaturation command

## See

MatterSpecification.v11.Cluster § 3.2.11.18

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnhancedMoveToHueAndSaturationRequest`](../README.md#tlvenhancedmovetohueandsaturationrequest)\>

## Properties

### enhancedHue

> **enhancedHue**: `number`

The EnhancedHue field specifies the target extended hue for the lamp.

#### See

MatterSpecification.v11.Cluster § 3.2.11.18.1

#### Inherited from

`TypeFromSchema.enhancedHue`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:669](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L669)

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:687](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L687)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:688](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L688)

***

### saturation

> **saturation**: `number`

This field is identical to the Saturation field of the MoveToHueAndSaturation command of the Color Control
cluster (see sub-clause MoveToHueAndSaturation Command).

#### See

MatterSpecification.v11.Cluster § 3.2.11.18.2

#### Inherited from

`TypeFromSchema.saturation`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:677](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L677)

***

### transitionTime

> **transitionTime**: `number`

This field is identical to the TransitionTime field of the MoveToHue command of the Color Control cluster
(see sub-clause MoveToHueAndSaturation Command).

#### See

MatterSpecification.v11.Cluster § 3.2.11.18.3

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:685](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L685)
