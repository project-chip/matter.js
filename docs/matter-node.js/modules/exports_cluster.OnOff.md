[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / OnOff

# Namespace: OnOff

[exports/cluster](exports_cluster.md).OnOff

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.OnOff.Feature.md)
- [OnOffEffectIdentifier](../enums/exports_cluster.OnOff.OnOffEffectIdentifier.md)
- [StartUpOnOff](../enums/exports_cluster.OnOff.StartUpOnOff.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.OnOff.Cluster.md)
- [Complete](../interfaces/exports_cluster.OnOff.Complete.md)
- [OffWithEffectRequest](../interfaces/exports_cluster.OnOff.OffWithEffectRequest.md)
- [OnWithTimedOffRequest](../interfaces/exports_cluster.OnOff.OnWithTimedOffRequest.md)

### Variables

- [Base](exports_cluster.OnOff.md#base)
- [Cluster](exports_cluster.OnOff.md#cluster)
- [ClusterInstance](exports_cluster.OnOff.md#clusterinstance)
- [Complete](exports_cluster.OnOff.md#complete)
- [CompleteInstance](exports_cluster.OnOff.md#completeinstance)
- [LevelControlForLightingComponent](exports_cluster.OnOff.md#levelcontrolforlightingcomponent)
- [OnOffControl](exports_cluster.OnOff.md#onoffcontrol)
- [TlvOffWithEffectRequest](exports_cluster.OnOff.md#tlvoffwitheffectrequest)
- [TlvOnWithTimedOffRequest](exports_cluster.OnOff.md#tlvonwithtimedoffrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all OnOff clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `onOff`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  } | - |
| `attributes.onOff` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> | The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively. **`See`** MatterSpecification.v11.Cluster § 1.5.6.1 |
| `commands` | \{ `off`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } | - |
| `commands.off` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.1 |
| `commands.on` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.2 |
| `commands.toggle` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | This command does not have any data fields. **`See`** MatterSpecification.v11.Cluster § 1.5.7.3 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `startUpOnOff`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md) \| ``null``, `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] | This metadata controls which OnOffCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.levelControlForLighting` | [`BitFlag`](exports_schema.md#bitflag) | LevelControlForLighting Behavior that supports lighting applications. |
| `id` | ``6`` | - |
| `name` | ``"OnOff"`` | - |
| `revision` | ``4`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:263

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.OnOff.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:631

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:633

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `onOff`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `off`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `on`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `toggle`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `globalSceneControl`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `startUpOnOff`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md) \| ``null``, `any`\>  } ; `commands`: \{ `offWithEffect`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `levelControlForLighting`: ``true``  }  }] ; `features`: \{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``6`` ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>

**`See`**

[Cluster](exports_cluster.OnOff.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:444

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.OnOff.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:794

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:796

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `globalSceneControl`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `offWaitTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `onOff`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `startUpOnOff`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md) \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `off`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `offWithEffect`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `on`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `onWithTimedOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `levelControlForLighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `toggle`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `levelControlForLighting`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"OnOff"`` ; `revision`: ``4``  }\>

**`See`**

[Complete](exports_cluster.OnOff.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:637

___

### LevelControlForLightingComponent

• `Const` **LevelControlForLightingComponent**: `Object`

A OnOffCluster supports these elements if it supports feature LevelControlForLighting.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `globalSceneControl`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `offWaitTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `startUpOnOff`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md) \| ``null``, `any`\>  } |
| `attributes.globalSceneControl` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> |
| `attributes.offWaitTime` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.onTime` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.startUpOnOff` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`StartUpOnOff`](../enums/exports_cluster.OnOff.StartUpOnOff.md) \| ``null``, `any`\> |
| `commands` | \{ `offWithEffect`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `onWithRecallGlobalScene`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `onWithTimedOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.offWithEffect` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |
| `commands.onWithRecallGlobalScene` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |
| `commands.onWithTimedOff` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:119

___

### OnOffControl

• `Const` **OnOffControl**: `Object`

The value of OnOff.onOffControl

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acceptOnlyWhenOn` | [`BitFlag`](exports_schema.md#bitflag) |
| `reserved` | [`BitField`](exports_schema.md#bitfield) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:71

___

### TlvOffWithEffectRequest

• `Const` **TlvOffWithEffectRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OnOff offWithEffect command

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:40

___

### TlvOnWithTimedOffRequest

• `Const` **TlvOnWithTimedOffRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the OnOff onWithTimedOff command

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:80
