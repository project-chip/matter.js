[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AudioOutput](../modules/exports_cluster.AudioOutput.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[AudioOutput](../modules/exports_cluster.AudioOutput.md).Cluster

Audio Output

This cluster provides an interface for controlling the Output on a Video Player device such as a TV.

AudioOutputCluster supports optional features that you can enable with the AudioOutputCluster.with() factory
method.

**`See`**

MatterSpecification.v11.Cluster § 6.5

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.AudioOutput.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.AudioOutput.Cluster.md#attributes)
- [base](exports_cluster.AudioOutput.Cluster.md#base)
- [commands](exports_cluster.AudioOutput.Cluster.md#commands)
- [events](exports_cluster.AudioOutput.Cluster.md#events)
- [extensions](exports_cluster.AudioOutput.Cluster.md#extensions)
- [features](exports_cluster.AudioOutput.Cluster.md#features)
- [id](exports_cluster.AudioOutput.Cluster.md#id)
- [name](exports_cluster.AudioOutput.Cluster.md#name)
- [revision](exports_cluster.AudioOutput.Cluster.md#revision)
- [supportedFeatures](exports_cluster.AudioOutput.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.AudioOutput.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.AudioOutput.Cluster.md#alter)
- [enable](exports_cluster.AudioOutput.Cluster.md#enable)
- [set](exports_cluster.AudioOutput.Cluster.md#set)
- [with](exports_cluster.AudioOutput.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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
| `selectOutput` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 6.5.4 |

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

• **extensions**: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }]

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
| `nameUpdates` | [`BitFlag`](../modules/exports_schema.md#bitflag) | NameUpdates Supports updates to output names |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1291``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"AudioOutput"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](exports_tlv.FieldType.md)\<[`OutputType`](../enums/exports_cluster.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `index`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } ; `flags`: \{ `nameUpdates`: ``true``  }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1291`` ; `name`: ``"AudioOutput"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
