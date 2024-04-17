[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / MoveToColorTemperatureRequest

# Interface: MoveToColorTemperatureRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).MoveToColorTemperatureRequest

Input to the ColorControl moveToColorTemperature command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.14

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveToColorTemperatureRequest`](../modules/cluster_export.ColorControl.md#tlvmovetocolortemperaturerequest)\>

  ↳ **`MoveToColorTemperatureRequest`**

## Table of contents

### Properties

- [colorTemperatureMireds](cluster_export.ColorControl.MoveToColorTemperatureRequest.md#colortemperaturemireds)
- [optionsMask](cluster_export.ColorControl.MoveToColorTemperatureRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.MoveToColorTemperatureRequest.md#optionsoverride)
- [transitionTime](cluster_export.ColorControl.MoveToColorTemperatureRequest.md#transitiontime)

## Properties

### colorTemperatureMireds

• **colorTemperatureMireds**: `number`

#### Inherited from

TypeFromSchema.colorTemperatureMireds

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:387](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L387)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:389](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L389)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:390](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L390)

___

### transitionTime

• **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:388](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L388)
