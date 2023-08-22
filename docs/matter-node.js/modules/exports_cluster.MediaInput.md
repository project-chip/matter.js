[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / MediaInput

# Namespace: MediaInput

[exports/cluster](exports_cluster.md).MediaInput

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.MediaInput.Feature.md)
- [InputType](../enums/exports_cluster.MediaInput.InputType.md)

### Type Aliases

- [Extension](exports_cluster.MediaInput.md#extension)

### Variables

- [Base](exports_cluster.MediaInput.md#base)
- [Cluster](exports_cluster.MediaInput.md#cluster)
- [Complete](exports_cluster.MediaInput.md#complete)
- [NameUpdatesComponent](exports_cluster.MediaInput.md#nameupdatescomponent)
- [TlvInputInfoStruct](exports_cluster.MediaInput.md#tlvinputinfostruct)
- [TlvRenameInputRequest](exports_cluster.MediaInput.md#tlvrenameinputrequest)
- [TlvSelectInputRequest](exports_cluster.MediaInput.md#tlvselectinputrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.MediaInput.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `nameUpdates`: ``true``  } ? typeof [`NameUpdatesComponent`](exports_cluster.MediaInput.md#nameupdatescomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaInputCluster.d.ts:302

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentInput`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `inputList`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)[], `any`\>  }, { `hideInputStatus`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all MediaInput clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaInputCluster.d.ts:104

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `hideInputStatus`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `selectInput`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.MediaInput.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Media Input

This cluster provides an interface for controlling the Input Selector on a media device such as a Video Player.

MediaInputCluster supports optional features that you can enable with the MediaInputCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.9

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaInputCluster.d.ts:205

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `nameUpdates`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `hideInputStatus`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `renameInput`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `selectInput`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `showInputStatus`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, {}\>

This cluster supports all MediaInput features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaInputCluster.d.ts:313

___

### NameUpdatesComponent

• `Const` **NameUpdatesComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `renameInput`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A MediaInputCluster supports these elements if it supports feature NameUpdates.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaInputCluster.d.ts:183

___

### TlvInputInfoStruct

• `Const` **TlvInputInfoStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This contains information about an input.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.9.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaInputCluster.d.ts:37

___

### TlvRenameInputRequest

• `Const` **TlvRenameInputRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the MediaInput renameInput command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.9.4.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaInputCluster.d.ts:84

___

### TlvSelectInputRequest

• `Const` **TlvSelectInputRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the MediaInput selectInput command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.9.4.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaInputCluster.d.ts:70
