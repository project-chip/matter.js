[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [MediaInput](../modules/exports_cluster.MediaInput.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[MediaInput](../modules/exports_cluster.MediaInput.md).Cluster

Media Input

This cluster provides an interface for controlling the Input Selector on a media device such as a Video Player.

MediaInputCluster supports optional features that you can enable with the MediaInputCluster.with() factory
method.

**`See`**

MatterSpecification.v11.Cluster § 6.9

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.MediaInput.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.MediaInput.Cluster.md#attributes)
- [base](exports_cluster.MediaInput.Cluster.md#base)
- [commands](exports_cluster.MediaInput.Cluster.md#commands)
- [events](exports_cluster.MediaInput.Cluster.md#events)
- [extensions](exports_cluster.MediaInput.Cluster.md#extensions)
- [features](exports_cluster.MediaInput.Cluster.md#features)
- [id](exports_cluster.MediaInput.Cluster.md#id)
- [name](exports_cluster.MediaInput.Cluster.md#name)
- [revision](exports_cluster.MediaInput.Cluster.md#revision)
- [supportedFeatures](exports_cluster.MediaInput.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.MediaInput.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.MediaInput.Cluster.md#alter)
- [enable](exports_cluster.MediaInput.Cluster.md#enable)
- [set](exports_cluster.MediaInput.Cluster.md#set)
- [with](exports_cluster.MediaInput.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hideInputStatus` | [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> | Upon receipt, this shall hide the input list from the screen. **`See`** MatterSpecification.v11.Cluster § 6.9.4.3 |
| `selectInput` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | Upon receipt, this shall change the media input on the device to the input at a specific index in the Input List. **`See`** MatterSpecification.v11.Cluster § 6.9.4.1 |
| `showInputStatus` | [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> | Upon receipt, this shall display the active status of the input list on screen. **`See`** MatterSpecification.v11.Cluster § 6.9.4.2 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }]

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameUpdates` | [`BitFlag`](../modules/exports_schema.md#bitflag) | NameUpdates Supports updates to the input names |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1287``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"MediaInput"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentInput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `description`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `inputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`InputType`](../enums/exports_cluster.MediaInput.InputType.md)\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `hideInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameInput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1287`` ; `name`: ``"MediaInput"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
