[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / EnhancedMoveToHueAndSaturationRequest

# Interface: EnhancedMoveToHueAndSaturationRequest

Input to the ColorControl enhancedMoveToHueAndSaturation command

## See

MatterSpecification.v11.Cluster § 3.2.11.18

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvEnhancedMoveToHueAndSaturationRequest`](../README.md#tlvenhancedmovetohueandsaturationrequest)\>

## Properties

### enhancedHue

> **enhancedHue**: `number`

The EnhancedHue field specifies the target extended hue for the lamp.

#### See

MatterSpecification.v11.Cluster § 3.2.11.18.1

#### Inherited from

`TypeFromSchema.enhancedHue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:663

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:678

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:681

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:670

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:677
