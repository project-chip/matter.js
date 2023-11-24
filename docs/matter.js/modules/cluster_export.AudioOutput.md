[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / AudioOutput

# Namespace: AudioOutput

[cluster/export](cluster_export.md).AudioOutput

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.AudioOutput.Feature.md)
- [OutputType](../enums/cluster_export.AudioOutput.OutputType.md)

### Type Aliases

- [Extension](cluster_export.AudioOutput.md#extension)

### Variables

- [Base](cluster_export.AudioOutput.md#base)
- [Cluster](cluster_export.AudioOutput.md#cluster)
- [Complete](cluster_export.AudioOutput.md#complete)
- [NameUpdatesComponent](cluster_export.AudioOutput.md#nameupdatescomponent)
- [TlvOutputInfoStruct](cluster_export.AudioOutput.md#tlvoutputinfostruct)
- [TlvRenameOutputRequest](cluster_export.AudioOutput.md#tlvrenameoutputrequest)
- [TlvSelectOutputRequest](cluster_export.AudioOutput.md#tlvselectoutputrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.AudioOutput.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `nameUpdates`: ``true``  } ? typeof [`NameUpdatesComponent`](cluster_export.AudioOutput.md#nameupdatescomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:184](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L184)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `currentOutput`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `outputList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: { `selectOutput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `features`: { `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1291`` = 0x50b; `name`: ``"AudioOutput"`` = "AudioOutput"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all AudioOutput clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:97](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L97)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `currentOutput`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `outputList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: { `selectOutput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `events`: {} ; `features`: { `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``1291`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"AudioOutput"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `currentOutput`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `outputList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\>  } ; `commands`: { `selectOutput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `features`: { `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1291`` = 0x50b; `name`: ``"AudioOutput"`` = "AudioOutput"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.AudioOutput.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Audio Output

This cluster provides an interface for controlling the Output on a Video Player device such as a TV.

AudioOutputCluster supports optional features that you can enable with the AudioOutputCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:162](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L162)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `currentOutput`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `outputList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> = Cluster.attributes; `commands`: { `renameOutput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `selectOutput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `features`: { `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``1291`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"AudioOutput"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all AudioOutput features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:196](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L196)

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `commands`: { `renameOutput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, `void`, `any`\>  }  }\>

A AudioOutputCluster supports these elements if it supports feature NameUpdates.

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:138](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L138)

___

### TlvOutputInfoStruct

• `Const` **TlvOutputInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>

This contains information about an output.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:42](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L42)

___

### TlvRenameOutputRequest

• `Const` **TlvRenameOutputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

Input to the AudioOutput renameOutput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:78](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L78)

___

### TlvSelectOutputRequest

• `Const` **TlvSelectOutputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the AudioOutput selectOutput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:71](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L71)
