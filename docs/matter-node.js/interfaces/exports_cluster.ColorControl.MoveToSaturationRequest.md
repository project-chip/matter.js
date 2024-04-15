[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / MoveToSaturationRequest

# Interface: MoveToSaturationRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).MoveToSaturationRequest

Input to the ColorControl moveToSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.7

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveToSaturationRequest`](../modules/exports_cluster.ColorControl.md#tlvmovetosaturationrequest)\>

  ↳ **`MoveToSaturationRequest`**

## Table of contents

### Properties

- [optionsMask](exports_cluster.ColorControl.MoveToSaturationRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.MoveToSaturationRequest.md#optionsoverride)
- [saturation](exports_cluster.ColorControl.MoveToSaturationRequest.md#saturation)
- [transitionTime](exports_cluster.ColorControl.MoveToSaturationRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:172

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:175

___

### saturation

• **saturation**: `number`

#### Inherited from

TypeFromSchema.saturation

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:170

___

### transitionTime

• **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:171
