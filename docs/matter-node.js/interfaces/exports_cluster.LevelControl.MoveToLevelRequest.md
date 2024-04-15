[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [LevelControl](../modules/exports_cluster.LevelControl.md) / MoveToLevelRequest

# Interface: MoveToLevelRequest

[exports/cluster](../modules/exports_cluster.md).[LevelControl](../modules/exports_cluster.LevelControl.md).MoveToLevelRequest

Input to the LevelControl moveToLevel command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveToLevelRequest`](../modules/exports_cluster.LevelControl.md#tlvmovetolevelrequest)\>

  ↳ **`MoveToLevelRequest`**

## Table of contents

### Properties

- [level](exports_cluster.LevelControl.MoveToLevelRequest.md#level)
- [optionsMask](exports_cluster.LevelControl.MoveToLevelRequest.md#optionsmask)
- [optionsOverride](exports_cluster.LevelControl.MoveToLevelRequest.md#optionsoverride)
- [transitionTime](exports_cluster.LevelControl.MoveToLevelRequest.md#transitiontime)

## Properties

### level

• **level**: `number`

#### Inherited from

TypeFromSchema.level

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:43

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:45

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:49

___

### transitionTime

• **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:44
