[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / AudioOutput

# Namespace: AudioOutput

[cluster/export](cluster_export.md).AudioOutput

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.AudioOutput.Feature.md)
- [OutputType](../enums/cluster_export.AudioOutput.OutputType.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.AudioOutput.Cluster.md)
- [Complete](../interfaces/cluster_export.AudioOutput.Complete.md)
- [OutputInfoStruct](../interfaces/cluster_export.AudioOutput.OutputInfoStruct.md)
- [RenameOutputRequest](../interfaces/cluster_export.AudioOutput.RenameOutputRequest.md)
- [SelectOutputRequest](../interfaces/cluster_export.AudioOutput.SelectOutputRequest.md)

### Variables

- [Base](cluster_export.AudioOutput.md#base)
- [Cluster](cluster_export.AudioOutput.md#cluster)
- [ClusterInstance](cluster_export.AudioOutput.md#clusterinstance)
- [Complete](cluster_export.AudioOutput.md#complete)
- [CompleteInstance](cluster_export.AudioOutput.md#completeinstance)
- [NameUpdatesComponent](cluster_export.AudioOutput.md#nameupdatescomponent)
- [TlvOutputInfoStruct](cluster_export.AudioOutput.md#tlvoutputinfostruct)
- [TlvRenameOutputRequest](cluster_export.AudioOutput.md#tlvrenameoutputrequest)
- [TlvSelectOutputRequest](cluster_export.AudioOutput.md#tlvselectoutputrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all AudioOutput clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentOutput`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } | - |
| `attributes.currentOutput` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> | This field contains the value of the index field of the currently selected OutputInfoStruct. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.3.2 |
| `attributes.outputList` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\> | This list provides the outputs supported by the device. **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.3.1 |
| `commands` | \{ `selectOutput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } | - |
| `commands.selectOutput` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | **`See`** [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4 |
| `extensions` | readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\>  }  } = NameUpdatesComponent; `flags`: \{ `nameUpdates`: ``true`` = true }  }] | This metadata controls which AudioOutputCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.nameUpdates` | [`BitFlag`](schema_export.md#bitflag) | NameUpdates Supports updates to output names |
| `id` | ``1291`` | - |
| `name` | ``"AudioOutput"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:138](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L138)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.AudioOutput.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:197](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L197)

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:199](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L199)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentOutput`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: \{ `selectOutput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `renameOutput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\>  }  } = NameUpdatesComponent; `flags`: \{ `nameUpdates`: ``true`` = true }  }] ; `features`: \{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1291`` = 0x50b; `name`: ``"AudioOutput"`` = "AudioOutput"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.AudioOutput.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:185](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L185)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.AudioOutput.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:227](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L227)

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:229](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L229)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: [`Merge`](util_export.md#merge)\<\{ `currentOutput`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `outputList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `renameOutput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `nameUpdates`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `selectOutput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `features`: \{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``1291``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AudioOutput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.AudioOutput.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:205](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L205)

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: `Object`

A AudioOutputCluster supports these elements if it supports feature NameUpdates.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `renameOutput`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\>  } |
| `commands.renameOutput` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:107](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L107)

___

### TlvOutputInfoStruct

• `Const` **TlvOutputInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>

This contains information about an output.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:59](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L59)

___

### TlvRenameOutputRequest

• `Const` **TlvRenameOutputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the AudioOutput renameOutput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:27](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L27)

___

### TlvSelectOutputRequest

• `Const` **TlvSelectOutputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the AudioOutput selectOutput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:95](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L95)
