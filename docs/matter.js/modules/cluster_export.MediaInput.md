[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / MediaInput

# Namespace: MediaInput

[cluster/export](cluster_export.md).MediaInput

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.MediaInput.Feature.md)
- [InputType](../enums/cluster_export.MediaInput.InputType.md)

### Type Aliases

- [Extension](cluster_export.MediaInput.md#extension)

### Variables

- [Base](cluster_export.MediaInput.md#base)
- [Cluster](cluster_export.MediaInput.md#cluster)
- [Complete](cluster_export.MediaInput.md#complete)
- [NameUpdatesComponent](cluster_export.MediaInput.md#nameupdatescomponent)
- [TlvInputInfoStruct](cluster_export.MediaInput.md#tlvinputinfostruct)
- [TlvRenameInputRequest](cluster_export.MediaInput.md#tlvrenameinputrequest)
- [TlvSelectInputRequest](cluster_export.MediaInput.md#tlvselectinputrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.MediaInput.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `nameUpdates`: ``true``  } ? typeof [`NameUpdatesComponent`](cluster_export.MediaInput.md#nameupdatescomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:227](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L227)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `currentInput`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[], `any`\>  }, { `hideInputStatus`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `selectInput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all MediaInput clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:128](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L128)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `currentInput`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `hideInputStatus`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `selectInput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.MediaInput.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Media Input

This cluster provides an interface for controlling the Input Selector on a media device such as a Video Player.

MediaInputCluster supports optional features that you can enable with the MediaInputCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:208](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L208)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `currentInput`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `hideInputStatus`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `renameInput`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, `void`, `any`\>\> ; `selectInput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, {}\>

This cluster supports all MediaInput features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:239](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L239)

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `renameInput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A MediaInputCluster supports these elements if it supports feature NameUpdates.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:186](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L186)

___

### TlvInputInfoStruct

• `Const` **TlvInputInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

This contains information about an input.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:57](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L57)

___

### TlvRenameInputRequest

• `Const` **TlvRenameInputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

Input to the MediaInput renameInput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L109)

___

### TlvSelectInputRequest

• `Const` **TlvSelectInputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the MediaInput selectInput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:94](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L94)
