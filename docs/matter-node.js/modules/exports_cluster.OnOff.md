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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.OnOff.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `levelControlForLighting`: ``true``  } ? typeof [`LevelControlForLightingComponent`](exports_cluster.OnOff.md#levelcontrolforlightingcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:411

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `onOff`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>

These elements and properties are present in all OnOff clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:116

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `off`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: \{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"OnOff"`` ; `revision`: ``4`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `onOff`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.OnOff.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

On/Off

Attributes and commands for turning devices on and off.

OnOffCluster supports optional features that you can enable with the OnOffCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:298

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `globalSceneControl`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `offWaitTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `onOff`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `startUpOnOff`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md) \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `off`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `offWithEffect`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `on`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `onWithTimedOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `toggle`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``6`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>

This cluster supports all OnOff features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:422

___

### LevelControlForLightingComponent

• `Const` **LevelControlForLightingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `globalSceneControl`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `startUpOnOff`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md) \| ``null``, `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

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
| `acceptOnlyWhenOn` | [`BitFlag`](exports_schema.md#bitflag) |
| `reserved` | [`BitField`](exports_schema.md#bitfield) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:62

___

### TlvOffWithEffectRequest

• `Const` **TlvOffWithEffectRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OnOff offWithEffect command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5.7.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:38

___

### TlvOnWithTimedOffRequest

• `Const` **TlvOnWithTimedOffRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OnOff onWithTimedOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5.7.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:71
