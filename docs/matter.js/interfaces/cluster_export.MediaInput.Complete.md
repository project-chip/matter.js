[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaInput](../modules/cluster_export.MediaInput.md) / Complete

# Interface: Complete

[cluster/export](../modules/cluster_export.md).[MediaInput](../modules/cluster_export.MediaInput.md).Complete

This cluster supports all MediaInput features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CompleteInstance`](../modules/cluster_export.MediaInput.md#completeinstance)\>

  ↳ **`Complete`**

## Table of contents

### Properties

- [attributes](cluster_export.MediaInput.Complete.md#attributes)
- [base](cluster_export.MediaInput.Complete.md#base)
- [commands](cluster_export.MediaInput.Complete.md#commands)
- [events](cluster_export.MediaInput.Complete.md#events)
- [extensions](cluster_export.MediaInput.Complete.md#extensions)
- [features](cluster_export.MediaInput.Complete.md#features)
- [id](cluster_export.MediaInput.Complete.md#id)
- [name](cluster_export.MediaInput.Complete.md#name)
- [revision](cluster_export.MediaInput.Complete.md#revision)
- [supportedFeatures](cluster_export.MediaInput.Complete.md#supportedfeatures)
- [unknown](cluster_export.MediaInput.Complete.md#unknown)

### Methods

- [alter](cluster_export.MediaInput.Complete.md#alter)
- [enable](cluster_export.MediaInput.Complete.md#enable)
- [set](cluster_export.MediaInput.Complete.md#set)
- [with](cluster_export.MediaInput.Complete.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<[`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hideInputStatus` | [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> | Upon receipt, this shall hide the input list from the screen. **`See`** MatterSpecification.v11.Cluster § 6.9.4.3 |
| `renameInput` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } | - |
| `selectInput` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | Upon receipt, this shall change the media input on the device to the input at a specific index in the Input List. **`See`** MatterSpecification.v11.Cluster § 6.9.4.1 |
| `showInputStatus` | [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> | Upon receipt, this shall display the active status of the input list on screen. **`See`** MatterSpecification.v11.Cluster § 6.9.4.2 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameUpdates` | [`BitFlag`](../modules/schema_export.md#bitflag) | NameUpdates Supports updates to the input names |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<[`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\>, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"MediaInput"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `description`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](tlv_export.FieldType.md)\<[`InputType`](../enums/cluster_export.MediaInput.InputType.md)\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `hideInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `renameInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `selectInput`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaInput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
