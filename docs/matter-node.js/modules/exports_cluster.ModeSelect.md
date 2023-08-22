[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ModeSelect

# Namespace: ModeSelect

[exports/cluster](exports_cluster.md).ModeSelect

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.ModeSelect.Feature.md)

### Type Aliases

- [Extension](exports_cluster.ModeSelect.md#extension)

### Variables

- [Base](exports_cluster.ModeSelect.md#base)
- [Cluster](exports_cluster.ModeSelect.md#cluster)
- [Complete](exports_cluster.ModeSelect.md#complete)
- [OnOffComponent](exports_cluster.ModeSelect.md#onoffcomponent)
- [TlvChangeToModeRequest](exports_cluster.ModeSelect.md#tlvchangetomoderequest)
- [TlvModeOptionStruct](exports_cluster.ModeSelect.md#tlvmodeoptionstruct)
- [TlvSemanticTagStruct](exports_cluster.ModeSelect.md#tlvsemantictagstruct)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.ModeSelect.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `onOff`: ``true``  } ? typeof [`OnOffComponent`](exports_cluster.ModeSelect.md#onoffcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ModeSelectCluster.d.ts:438

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentMode`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `description`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `supportedModes`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)[], `any`\>  }, { `changeToMode`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all ModeSelect clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ModeSelectCluster.d.ts:116

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `changeToMode`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.ModeSelect.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Mode Select

This cluster provides an interface for controlling a characteristic of a device that can be set to one of
several predefined values. For example, the light pattern of a disco ball, the mode of a massage chair, or the
wash cycle of a laundry machine.

The server allows the client to set a mode on the server. A mode is one of a list of options that may be
presented by a client for a user choice, or understood by the client, via the semantic tags on the mode.

A semantic tag is either a standard tag within a standard category namespace, or a manufacturer specific tag,
within the namespace of the vendor ID of the manufacturer. If there is no semantic tag, the mode is anonymous,
and the selection is made by the user solely based on the Label string.

Each cluster ID that indicates this specification shall define a distinct purpose for the cluster instance. For
example: A LightBlinking cluster ID supports blinking modes for a light (and is described that way).

An anonymous mode shall support the derived cluster purpose. A manufacturer specific semantic tag shall support
the derived cluster purpose. An anonymous mode shall NOT replace the meaning of a standard semantic tag, when
one exists, for the cluster purpose.

ModeSelectCluster supports optional features that you can enable with the ModeSelectCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ModeSelectCluster.d.ts:287

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `changeToMode`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, {}\>

This cluster supports all ModeSelect features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ModeSelectCluster.d.ts:449

___

### OnOffComponent

• `Const` **OnOffComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `onMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ModeSelectCluster supports these elements if it supports feature OnOff.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ModeSelectCluster.d.ts:249

___

### TlvChangeToModeRequest

• `Const` **TlvChangeToModeRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ModeSelect changeToMode command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.8.6.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ModeSelectCluster.d.ts:97

___

### TlvModeOptionStruct

• `Const` **TlvModeOptionStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This is a struct representing a possible mode of the server.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.8.8.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ModeSelectCluster.d.ts:40

___

### TlvSemanticTagStruct

• `Const` **TlvSemanticTagStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.8.8.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ModeSelectCluster.d.ts:15
