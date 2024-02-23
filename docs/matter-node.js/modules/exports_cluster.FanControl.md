[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / FanControl

# Namespace: FanControl

[exports/cluster](exports_cluster.md).FanControl

## Table of contents

### Enumerations

- [FanMode](../enums/exports_cluster.FanControl.FanMode.md)
- [FanModeSequence](../enums/exports_cluster.FanControl.FanModeSequence.md)
- [Feature](../enums/exports_cluster.FanControl.Feature.md)

### Type Aliases

- [Extension](exports_cluster.FanControl.md#extension)

### Variables

- [Base](exports_cluster.FanControl.md#base)
- [Cluster](exports_cluster.FanControl.md#cluster)
- [Complete](exports_cluster.FanControl.md#complete)
- [MultiSpeedComponent](exports_cluster.FanControl.md#multispeedcomponent)
- [RockSetting](exports_cluster.FanControl.md#rocksetting)
- [RockSupport](exports_cluster.FanControl.md#rocksupport)
- [RockingComponent](exports_cluster.FanControl.md#rockingcomponent)
- [WindComponent](exports_cluster.FanControl.md#windcomponent)
- [WindSetting](exports_cluster.FanControl.md#windsetting)
- [WindSupport](exports_cluster.FanControl.md#windsupport)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.FanControl.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `multiSpeed`: ``true``  } ? typeof [`MultiSpeedComponent`](exports_cluster.FanControl.md#multispeedcomponent) : {} & `SF` extends \{ `rocking`: ``true``  } ? typeof [`RockingComponent`](exports_cluster.FanControl.md#rockingcomponent) : {} & `SF` extends \{ `wind`: ``true``  } ? typeof [`WindComponent`](exports_cluster.FanControl.md#windcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:546

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  } ; `features`: \{ `auto`: [`BitFlag`](exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag) ; `wind`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>

These elements and properties are present in all FanControl clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:164

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: {} ; `features`: \{ `auto`: [`BitFlag`](exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag) ; `wind`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"FanControl"`` ; `revision`: ``2`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  } ; `features`: \{ `auto`: [`BitFlag`](exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag) ; `wind`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.FanControl.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `auto`: [`BitFlag`](exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag) ; `wind`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

Fan Control

An interface for controlling a fan in a heating/cooling system.

FanControlCluster supports optional features that you can enable with the FanControlCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:342

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `fanMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `auto`: [`BitFlag`](exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag) ; `wind`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `percentCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `rockSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rocking`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `rockSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rocking`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `speedCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `multiSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `speedMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `multiSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `speedSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `multiSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `windSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wind`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `windSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wind`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `auto`: [`BitFlag`](exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag) ; `wind`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``514`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>

This cluster supports all FanControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:561

___

### MultiSpeedComponent

• `Const` **MultiSpeedComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `speedCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A FanControlCluster supports these elements if it supports feature MultiSpeed.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:229

___

### RockSetting

• `Const` **RockSetting**: `Object`

The value of the FanControl rockSetting attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.9

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rockLeftRight` | [`BitFlag`](exports_schema.md#bitflag) |
| `rockRound` | [`BitFlag`](exports_schema.md#bitflag) |
| `rockUpDown` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:107

___

### RockSupport

• `Const` **RockSupport**: `Object`

The value of the FanControl rockSupport attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rockLeftRight` | [`BitFlag`](exports_schema.md#bitflag) |
| `rockRound` | [`BitFlag`](exports_schema.md#bitflag) |
| `rockUpDown` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:97

___

### RockingComponent

• `Const` **RockingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `rockSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  }\>

A FanControlCluster supports these elements if it supports feature Rocking.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:259

___

### WindComponent

• `Const` **WindComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `windSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `windSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  }\>

A FanControlCluster supports these elements if it supports feature Wind.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:298

___

### WindSetting

• `Const` **WindSetting**: `Object`

The value of the FanControl windSetting attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.11

#### Type declaration

| Name | Type |
| :------ | :------ |
| `naturalWind` | [`BitFlag`](exports_schema.md#bitflag) |
| `sleepWind` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:126

___

### WindSupport

• `Const` **WindSupport**: `Object`

The value of the FanControl windSupport attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.10

#### Type declaration

| Name | Type |
| :------ | :------ |
| `naturalWind` | [`BitFlag`](exports_schema.md#bitflag) |
| `sleepWind` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:117
