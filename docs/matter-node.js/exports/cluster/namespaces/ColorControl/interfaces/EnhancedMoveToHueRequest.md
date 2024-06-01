[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / EnhancedMoveToHueRequest

# Interface: EnhancedMoveToHueRequest

Input to the ColorControl enhancedMoveToHue command

## See

MatterSpecification.v11.Cluster § 3.2.11.15

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvEnhancedMoveToHueRequest`](../README.md#tlvenhancedmovetohuerequest)\>

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:550

***

### enhancedHue

> **enhancedHue**: `number`

The EnhancedHue field specifies the target extended hue for the lamp.

#### See

MatterSpecification.v11.Cluster § 3.2.11.15.1

#### Inherited from

`TypeFromSchema.enhancedHue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:543

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:558

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:561

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:557
