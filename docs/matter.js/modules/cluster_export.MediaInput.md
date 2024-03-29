[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / MediaInput

# Namespace: MediaInput

[cluster/export](cluster_export.md).MediaInput

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.MediaInput.Feature.md)
- [InputType](../enums/cluster_export.MediaInput.InputType.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.MediaInput.Cluster.md)
- [Complete](../interfaces/cluster_export.MediaInput.Complete.md)
- [InputInfoStruct](../interfaces/cluster_export.MediaInput.InputInfoStruct.md)
- [RenameInputRequest](../interfaces/cluster_export.MediaInput.RenameInputRequest.md)
- [SelectInputRequest](../interfaces/cluster_export.MediaInput.SelectInputRequest.md)

### Variables

- [Base](cluster_export.MediaInput.md#base)
- [Cluster](cluster_export.MediaInput.md#cluster)
- [ClusterInstance](cluster_export.MediaInput.md#clusterinstance)
- [Complete](cluster_export.MediaInput.md#complete)
- [CompleteInstance](cluster_export.MediaInput.md#completeinstance)
- [NameUpdatesComponent](cluster_export.MediaInput.md#nameupdatescomponent)
- [TlvInputInfoStruct](cluster_export.MediaInput.md#tlvinputinfostruct)
- [TlvRenameInputRequest](cluster_export.MediaInput.md#tlvrenameinputrequest)
- [TlvSelectInputRequest](cluster_export.MediaInput.md#tlvselectinputrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all MediaInput clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentInput`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  } | - |
| `attributes.currentInput` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> | This field contains the value of the index field of the currently selected InputInfoStruct. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.3.2 |
| `attributes.inputList` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\> | This list provides the media inputs supported by the device. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.3.1 |
| `commands` | \{ `hideInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } | - |
| `commands.hideInputStatus` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | Upon receipt, this shall hide the input list from the screen. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.3 |
| `commands.selectInput` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | Upon receipt, this shall change the media input on the device to the input at a specific index in the Input List. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.1 |
| `commands.showInputStatus` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | Upon receipt, this shall display the active status of the input list on screen. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.2 |
| `extensions` | readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\>  }  } = NameUpdatesComponent; `flags`: \{ `nameUpdates`: ``true`` = true }  }] | This metadata controls which MediaInputCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.nameUpdates` | [`BitFlag`](schema_export.md#bitflag) | NameUpdates Supports updates to the input names |
| `id` | ``1287`` | - |
| `name` | ``"MediaInput"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:159](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L159)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.MediaInput.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:235](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L235)

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:237](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L237)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\>  }  } = NameUpdatesComponent; `flags`: \{ `nameUpdates`: ``true`` = true }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1287`` = 0x507; `name`: ``"MediaInput"`` = "MediaInput"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.MediaInput.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:223](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L223)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.MediaInput.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:261](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L261)

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:263](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L263)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: [`Merge`](util_export.md#merge)\<\{ `currentInput`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.MediaInput.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:243](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L243)

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: `Object`

A MediaInputCluster supports these elements if it supports feature NameUpdates.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `renameInput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\>  } |
| `commands.renameInput` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:130](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L130)

___

### TlvInputInfoStruct

• `Const` **TlvInputInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `description`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

This contains information about an input.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:66](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L66)

___

### TlvRenameInputRequest

• `Const` **TlvRenameInputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the MediaInput renameInput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:28](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L28)

___

### TlvSelectInputRequest

• `Const` **TlvSelectInputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the MediaInput selectInput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:110](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L110)
