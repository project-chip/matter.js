[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / OnOff

# Namespace: OnOff

[exports/cluster](exports_cluster.md).OnOff

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.OnOff.Feature.md)
- [OnOffEffectIdentifier](../enums/exports_cluster.OnOff.OnOffEffectIdentifier.md)
- [StartUpOnOff](../enums/exports_cluster.OnOff.StartUpOnOff.md)

### Type Aliases

- [Extension](exports_cluster.OnOff.md#extension)

### Variables

- [Base](exports_cluster.OnOff.md#base)
- [Cluster](exports_cluster.OnOff.md#cluster)
- [Complete](exports_cluster.OnOff.md#complete)
- [LevelControlForLightingComponent](exports_cluster.OnOff.md#levelcontrolforlightingcomponent)
- [OnOffControl](exports_cluster.OnOff.md#onoffcontrol)
- [TlvOffWithEffectRequest](exports_cluster.OnOff.md#tlvoffwitheffectrequest)
- [TlvOnWithTimedOffRequest](exports_cluster.OnOff.md#tlvonwithtimedoffrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.OnOff.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `levelControlForLighting`: ``true``  } ? typeof [`LevelControlForLightingComponent`](exports_cluster.OnOff.md#levelcontrolforlightingcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:343

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `onOff`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\>  }, { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all OnOff clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:115

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.OnOff.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

On/Off

Attributes and commands for turning devices on and off.

OnOffCluster supports optional features that you can enable with the OnOffCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:287

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `offWithEffect`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `onWithRecallGlobalScene`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `onWithTimedOff`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, {}\>

This cluster supports all OnOff features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:354

___

### LevelControlForLightingComponent

• `Const` **LevelControlForLightingComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `globalSceneControl`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md) \| ``null``, `any`\>  }, { `offWithEffect`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A OnOffCluster supports these elements if it supports feature LevelControlForLighting.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:153

___

### OnOffControl

• `Const` **OnOffControl**: `Object`

The value of OnOff.onOffControl

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5.7.6.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acceptOnlyWhenOn` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `reserved` | [`BitField`](exports_schema.md#bitfield-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:61

___

### TlvOffWithEffectRequest

• `Const` **TlvOffWithEffectRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OnOff offWithEffect command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5.7.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:37

___

### TlvOnWithTimedOffRequest

• `Const` **TlvOnWithTimedOffRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OnOff onWithTimedOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5.7.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:70
