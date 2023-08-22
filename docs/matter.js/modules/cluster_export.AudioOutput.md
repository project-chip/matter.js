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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.AudioOutput.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `nameUpdates`: ``true``  } ? typeof [`NameUpdatesComponent`](cluster_export.AudioOutput.md#nameupdatescomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:189](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L189)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `currentOutput`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `outputList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\>  }, { `selectOutput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all AudioOutput clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L105)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `currentOutput`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `outputList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `selectOutput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.AudioOutput.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Audio Output

This cluster provides an interface for controlling the Output on a Video Player device such as a TV.

AudioOutputCluster supports optional features that you can enable with the AudioOutputCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:170](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L170)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `currentOutput`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `outputList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `nameUpdates`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `renameOutput`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, `void`, `any`\>\> ; `selectOutput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, {}\>

This cluster supports all AudioOutput features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:201](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L201)

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `renameOutput`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A AudioOutputCluster supports these elements if it supports feature NameUpdates.

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:146](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L146)

___

### TlvOutputInfoStruct

• `Const` **TlvOutputInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `outputType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`OutputType`](../enums/cluster_export.AudioOutput.OutputType.md)\>  }\>

This contains information about an output.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L50)

___

### TlvRenameOutputRequest

• `Const` **TlvRenameOutputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

Input to the AudioOutput renameOutput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L86)

___

### TlvSelectOutputRequest

• `Const` **TlvSelectOutputRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `index`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the AudioOutput selectOutput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.5.4

#### Defined in

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:79](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L79)
