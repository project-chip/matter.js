[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PulseWidthModulation](../modules/cluster_export.PulseWidthModulation.md) / MoveToLevelRequest

# Interface: MoveToLevelRequest

[cluster/export](../modules/cluster_export.md).[PulseWidthModulation](../modules/cluster_export.PulseWidthModulation.md).MoveToLevelRequest

Input to the PulseWidthModulation moveToLevel command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveToLevelRequest`](../modules/cluster_export.PulseWidthModulation.md#tlvmovetolevelrequest)\>

  ↳ **`MoveToLevelRequest`**

## Table of contents

### Properties

- [level](cluster_export.PulseWidthModulation.MoveToLevelRequest.md#level)
- [optionsMask](cluster_export.PulseWidthModulation.MoveToLevelRequest.md#optionsmask)
- [optionsOverride](cluster_export.PulseWidthModulation.MoveToLevelRequest.md#optionsoverride)
- [transitionTime](cluster_export.PulseWidthModulation.MoveToLevelRequest.md#transitiontime)

## Properties

### level

• **level**: `number`

#### Inherited from

TypeFromSchema.level

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L56)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L58)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L59)

___

### transitionTime

• **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L57)
