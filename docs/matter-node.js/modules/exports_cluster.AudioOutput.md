[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / AudioOutput

# Namespace: AudioOutput

[exports/cluster](exports_cluster.md).AudioOutput

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.AudioOutput.Feature.md)
- [OutputType](../enums/exports_cluster.AudioOutput.OutputType.md)

### Type Aliases

- [Extension](exports_cluster.AudioOutput.md#extension)

### Variables

- [Base](exports_cluster.AudioOutput.md#base)
- [Cluster](exports_cluster.AudioOutput.md#cluster)
- [Complete](exports_cluster.AudioOutput.md#complete)
- [NameUpdatesComponent](exports_cluster.AudioOutput.md#nameupdatescomponent)
- [TlvOutputInfoStruct](exports_cluster.AudioOutput.md#tlvoutputinfostruct)
- [TlvRenameOutputRequest](exports_cluster.AudioOutput.md#tlvrenameoutputrequest)
- [TlvSelectOutputRequest](exports_cluster.AudioOutput.md#tlvselectoutputrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.AudioOutput.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `nameUpdates`: ``true``  } ? typeof [`NameUpdatesComponent`](exports_cluster.AudioOutput.md#nameupdatescomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AudioOutputCluster.d.ts:229

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentOutput`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `outputList`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)[], `any`\>  }, { `selectOutput`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all AudioOutput clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AudioOutputCluster.d.ts:85

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `selectOutput`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.AudioOutput.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Audio Output

This cluster provides an interface for controlling the Output on a Video Player device such as a TV.

AudioOutputCluster supports optional features that you can enable with the AudioOutputCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AudioOutputCluster.d.ts:160

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `renameOutput`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `selectOutput`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, {}\>

This cluster supports all AudioOutput features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AudioOutputCluster.d.ts:240

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `renameOutput`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A AudioOutputCluster supports these elements if it supports feature NameUpdates.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AudioOutputCluster.d.ts:136

___

### TlvOutputInfoStruct

• `Const` **TlvOutputInfoStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This contains information about an output.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.5.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AudioOutputCluster.d.ts:31

___

### TlvRenameOutputRequest

• `Const` **TlvRenameOutputRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the AudioOutput renameOutput command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.5.4.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AudioOutputCluster.d.ts:65

___

### TlvSelectOutputRequest

• `Const` **TlvSelectOutputRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the AudioOutput selectOutput command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.5.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AudioOutputCluster.d.ts:57
