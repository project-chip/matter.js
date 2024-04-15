[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / FanControl

# Namespace: FanControl

[exports/cluster](exports_cluster.md).FanControl

## Table of contents

### Enumerations

- [FanMode](../enums/exports_cluster.FanControl.FanMode.md)
- [FanModeSequence](../enums/exports_cluster.FanControl.FanModeSequence.md)
- [Feature](../enums/exports_cluster.FanControl.Feature.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.FanControl.Cluster.md)
- [Complete](../interfaces/exports_cluster.FanControl.Complete.md)

### Variables

- [Base](exports_cluster.FanControl.md#base)
- [Cluster](exports_cluster.FanControl.md#cluster)
- [ClusterInstance](exports_cluster.FanControl.md#clusterinstance)
- [Complete](exports_cluster.FanControl.md#complete)
- [CompleteInstance](exports_cluster.FanControl.md#completeinstance)
- [MultiSpeedComponent](exports_cluster.FanControl.md#multispeedcomponent)
- [RockSetting](exports_cluster.FanControl.md#rocksetting)
- [RockSupport](exports_cluster.FanControl.md#rocksupport)
- [RockingComponent](exports_cluster.FanControl.md#rockingcomponent)
- [WindComponent](exports_cluster.FanControl.md#windcomponent)
- [WindSetting](exports_cluster.FanControl.md#windsetting)
- [WindSupport](exports_cluster.FanControl.md#windsupport)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all FanControl clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `fanMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  } | - |
| `attributes.fanMode` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> | This attribute shall indicate the current speed mode of the fan. This attribute may be written by the client to indicate a new speed mode of the fan. This attribute shall be set to one of the values in the table below. **`See`** MatterSpecification.v11.Cluster § 4.4.6.1 |
| `attributes.fanModeSequence` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> | This indicates the fan speed ranges that shall be supported. **`See`** MatterSpecification.v11.Cluster § 4.4.6.2 |
| `attributes.percentCurrent` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> | This attribute shall indicate the actual currently operating fan speed, or zero to indicate that the fan is off. See Section 4.4.6.3.1 for more details. **`See`** MatterSpecification.v11.Cluster § 4.4.6.4 |
| `attributes.percentSetting` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> | This attribute shall indicate the speed setting for the fan. This attribute may be written by the client to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT change. If this is set to 0, the server shall set the FanMode attribute value to Off. **`See`** MatterSpecification.v11.Cluster § 4.4.6.3 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `rockSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `windSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] | This metadata controls which FanControlCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `auto`: [`BitFlag`](exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag) ; `wind`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.auto` | [`BitFlag`](exports_schema.md#bitflag) | Auto Automatic mode supported for fan speed |
| `features.multiSpeed` | [`BitFlag`](exports_schema.md#bitflag) | MultiSpeed 1-100 speeds |
| `features.rocking` | [`BitFlag`](exports_schema.md#bitflag) | Rocking Rocking movement supported |
| `features.wind` | [`BitFlag`](exports_schema.md#bitflag) | Wind Wind emulation supported |
| `id` | ``514`` | - |
| `name` | ``"FanControl"`` | - |
| `revision` | ``2`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:271

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.FanControl.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:636

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:638

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `rockSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `windSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag) ; `wind`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>

**`See`**

[Cluster](exports_cluster.FanControl.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:450

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.FanControl.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:786

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:788

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `fanMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `percentCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `rockSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rocking`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `rockSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rocking`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `speedCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `multiSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `speedMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `multiSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `speedSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `multiSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `windSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wind`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `windSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wind`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `auto`: [`BitFlag`](exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag) ; `wind`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>

**`See`**

[Complete](exports_cluster.FanControl.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:642

___

### MultiSpeedComponent

• `Const` **MultiSpeedComponent**: `Object`

A FanControlCluster supports these elements if it supports feature MultiSpeed.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `speedCurrent`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.speedCurrent` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.speedMax` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.speedSetting` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:134

___

### RockSetting

• `Const` **RockSetting**: `Object`

The value of the FanControl rockSetting attribute

**`See`**

MatterSpecification.v11.Cluster § 4.4.6.9

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rockLeftRight` | [`BitFlag`](exports_schema.md#bitflag) |
| `rockRound` | [`BitFlag`](exports_schema.md#bitflag) |
| `rockUpDown` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:27

___

### RockSupport

• `Const` **RockSupport**: `Object`

The value of the FanControl rockSupport attribute

**`See`**

MatterSpecification.v11.Cluster § 4.4.6.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rockLeftRight` | [`BitFlag`](exports_schema.md#bitflag) |
| `rockRound` | [`BitFlag`](exports_schema.md#bitflag) |
| `rockUpDown` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:17

___

### RockingComponent

• `Const` **RockingComponent**: `Object`

A FanControlCluster supports these elements if it supports feature Rocking.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `rockSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `rockSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } |
| `attributes.rockSetting` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |
| `attributes.rockSupport` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:164

___

### WindComponent

• `Const` **WindComponent**: `Object`

A FanControlCluster supports these elements if it supports feature Wind.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `windSetting`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `windSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } |
| `attributes.windSetting` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |
| `attributes.windSupport` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:203

___

### WindSetting

• `Const` **WindSetting**: `Object`

The value of the FanControl windSetting attribute

**`See`**

MatterSpecification.v11.Cluster § 4.4.6.11

#### Type declaration

| Name | Type |
| :------ | :------ |
| `naturalWind` | [`BitFlag`](exports_schema.md#bitflag) |
| `sleepWind` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:46

___

### WindSupport

• `Const` **WindSupport**: `Object`

The value of the FanControl windSupport attribute

**`See`**

MatterSpecification.v11.Cluster § 4.4.6.10

#### Type declaration

| Name | Type |
| :------ | :------ |
| `naturalWind` | [`BitFlag`](exports_schema.md#bitflag) |
| `sleepWind` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FanControlCluster.d.ts:37
