[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / MoveColorRequest

# Interface: MoveColorRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).MoveColorRequest

Input to the ColorControl moveColor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.12

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveColorRequest`](../modules/cluster_export.ColorControl.md#tlvmovecolorrequest)\>

  ↳ **`MoveColorRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.ColorControl.MoveColorRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.MoveColorRequest.md#optionsoverride)
- [rateX](cluster_export.ColorControl.MoveColorRequest.md#ratex)
- [rateY](cluster_export.ColorControl.MoveColorRequest.md#ratey)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:343](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L343)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:344](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L344)

___

### rateX

• **rateX**: `number`

The RateX field specifies the rate of movement in steps per second. A step is a change in the device’s
CurrentX attribute of one unit.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.12.1

#### Inherited from

TypeFromSchema.rateX

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:333](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L333)

___

### rateY

• **rateY**: `number`

The RateY field specifies the rate of movement in steps per second. A step is a change in the device’s
CurrentY attribute of one unit.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.12.2

#### Inherited from

TypeFromSchema.rateY

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:341](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L341)
