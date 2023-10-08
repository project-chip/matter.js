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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.OnOff.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `levelControlForLighting`: ``true``  } ? typeof [`LevelControlForLightingComponent`](exports_cluster.OnOff.md#levelcontrolforlightingcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:411

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `onOff`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\>  } ; `commands`: { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `features`: { `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>

These elements and properties are present in all OnOff clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:116

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: { `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"OnOff"`` ; `revision`: ``4`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `onOff`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\>  } ; `commands`: { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `features`: { `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.OnOff.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

On/Off

Attributes and commands for turning devices on and off.

OnOffCluster supports optional features that you can enable with the OnOffCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:298

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)<`number`, `never`\> ; `eventList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `globalSceneControl`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `offWaitTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `onOff`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md) \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: { `off`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `offWithEffect`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `on`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `onWithTimedOff`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `toggle`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `features`: { `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``6`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>

This cluster supports all OnOff features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:422

___

### LevelControlForLightingComponent

• `Const` **LevelControlForLightingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `globalSceneControl`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> ; `onTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> ; `startUpOnOff`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md) \| ``null``, `any`\>  } ; `commands`: { `offWithEffect`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A OnOffCluster supports these elements if it supports feature LevelControlForLighting.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:161

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

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:62

___

### TlvOffWithEffectRequest

• `Const` **TlvOffWithEffectRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OnOff offWithEffect command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5.7.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:38

___

### TlvOnWithTimedOffRequest

• `Const` **TlvOnWithTimedOffRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OnOff onWithTimedOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5.7.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:71
