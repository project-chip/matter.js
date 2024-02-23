[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / LevelControl

# Namespace: LevelControl

[exports/cluster](exports_cluster.md).LevelControl

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.LevelControl.Feature.md)
- [MoveMode](../enums/exports_cluster.LevelControl.MoveMode.md)
- [StepMode](../enums/exports_cluster.LevelControl.StepMode.md)

### Type Aliases

- [Extension](exports_cluster.LevelControl.md#extension)

### Variables

- [Base](exports_cluster.LevelControl.md#base)
- [Cluster](exports_cluster.LevelControl.md#cluster)
- [Complete](exports_cluster.LevelControl.md#complete)
- [FrequencyComponent](exports_cluster.LevelControl.md#frequencycomponent)
- [LightingComponent](exports_cluster.LevelControl.md#lightingcomponent)
- [Options](exports_cluster.LevelControl.md#options)
- [TlvMoveRequest](exports_cluster.LevelControl.md#tlvmoverequest)
- [TlvMoveToClosestFrequencyRequest](exports_cluster.LevelControl.md#tlvmovetoclosestfrequencyrequest)
- [TlvMoveToLevelRequest](exports_cluster.LevelControl.md#tlvmovetolevelrequest)
- [TlvMoveToLevelWithOnOffRequest](exports_cluster.LevelControl.md#tlvmovetolevelwithonoffrequest)
- [TlvMoveWithOnOffRequest](exports_cluster.LevelControl.md#tlvmovewithonoffrequest)
- [TlvStepRequest](exports_cluster.LevelControl.md#tlvsteprequest)
- [TlvStepWithOnOffRequest](exports_cluster.LevelControl.md#tlvstepwithonoffrequest)
- [TlvStopRequest](exports_cluster.LevelControl.md#tlvstoprequest)
- [TlvStopWithOnOffRequest](exports_cluster.LevelControl.md#tlvstopwithonoffrequest)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.LevelControl.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `lighting`: ``true``  } ? typeof [`LightingComponent`](exports_cluster.LevelControl.md#lightingcomponent) : {} & `SF` extends \{ `frequency`: ``true``  } ? typeof [`FrequencyComponent`](exports_cluster.LevelControl.md#frequencycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:1148

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `maxLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `move`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `step`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stop`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `frequency`: [`BitFlag`](exports_schema.md#bitflag) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``8`` ; `name`: ``"LevelControl"`` ; `revision`: ``5``  }\>

These elements and properties are present in all LevelControl clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:214

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `move`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `step`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stop`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: {} ; `features`: \{ `frequency`: [`BitFlag`](exports_schema.md#bitflag) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"LevelControl"`` ; `revision`: ``5`` ; `supportedFeatures`: \{ `onOff`: ``true``  } ; `unknown`: ``false``  } & `Omit`\<\{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `move`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `step`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stop`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: {} ; `features`: \{ `frequency`: [`BitFlag`](exports_schema.md#bitflag) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``8`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"LevelControl"`` ; `revision`: ``5`` ; `supportedFeatures`: \{ `onOff`: ``true``  } ; `unknown`: ``false``  }, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.LevelControl.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `frequency`: [`BitFlag`](exports_schema.md#bitflag) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

Level Control

This cluster provides an interface for controlling a characteristic of a device that can be set to a level, for
example the brightness of a light, the degree of closure of a door, or the power output of a heater.

LevelControlCluster supports optional features that you can enable with the LevelControlCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:543

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `frequency`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `frequency`: [`BitFlag`](exports_schema.md#bitflag) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `maxFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `frequency`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `minFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `frequency`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remainingTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `lighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `startUpCurrentLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `lighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `move`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToClosestFrequency`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `frequency`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToLevel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `step`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stop`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `frequency`: [`BitFlag`](exports_schema.md#bitflag) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``8`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"LevelControl"`` ; `revision`: ``5``  }\>

This cluster supports all LevelControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:1161

___

### FrequencyComponent

• `Const` **FrequencyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `currentFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `maxFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `minFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveToClosestFrequency`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A LevelControlCluster supports these elements if it supports feature Frequency.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:499

___

### LightingComponent

• `Const` **LightingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `remainingTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A LevelControlCluster supports these elements if it supports feature Lighting.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:472

___

### Options

• `Const` **Options**: `Object`

The value of the LevelControl options attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.5.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coupleColorTempToLevel` | [`BitFlag`](exports_schema.md#bitflag) |
| `executeIfOff` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:16

___

### TlvMoveRequest

• `Const` **TlvMoveRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the LevelControl move command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:46

___

### TlvMoveToClosestFrequencyRequest

• `Const` **TlvMoveToClosestFrequencyRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the LevelControl moveToClosestFrequency command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:182

___

### TlvMoveToLevelRequest

• `Const` **TlvMoveToLevelRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the LevelControl moveToLevel command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:25

___

### TlvMoveToLevelWithOnOffRequest

• `Const` **TlvMoveToLevelWithOnOffRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the LevelControl moveToLevelWithOnOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:115

___

### TlvMoveWithOnOffRequest

• `Const` **TlvMoveWithOnOffRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the LevelControl moveWithOnOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:132

___

### TlvStepRequest

• `Const` **TlvStepRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the LevelControl step command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:82

___

### TlvStepWithOnOffRequest

• `Const` **TlvStepWithOnOffRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the LevelControl stepWithOnOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:149

___

### TlvStopRequest

• `Const` **TlvStopRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the LevelControl stop command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:100

___

### TlvStopWithOnOffRequest

• `Const` **TlvStopWithOnOffRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the LevelControl stopWithOnOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:167
