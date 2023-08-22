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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.FanControl.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `multiSpeed`: ``true``  } ? typeof [`MultiSpeedComponent`](exports_cluster.FanControl.md#multispeedcomponent) : {} & `SF` extends { `rocking`: ``true``  } ? typeof [`RockingComponent`](exports_cluster.FanControl.md#rockingcomponent) : {} & `SF` extends { `wind`: ``true``  } ? typeof [`WindComponent`](exports_cluster.FanControl.md#windcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:460

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `auto`: [`BitFlag`](exports_schema.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wind`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `fanMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all FanControl clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:163

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `auto`: [`BitFlag`](exports_schema.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wind`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `auto`: [`BitFlag`](exports_schema.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wind`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.FanControl.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `auto`: [`BitFlag`](exports_schema.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wind`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Fan Control

An interface for controlling a fan in a heating/cooling system.

FanControlCluster supports optional features that you can enable with the FanControlCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:329

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `auto`: [`BitFlag`](exports_schema.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wind`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `auto`: [`BitFlag`](exports_schema.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rocking`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wind`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, {}\>

This cluster supports all FanControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:475

___

### MultiSpeedComponent

• `Const` **MultiSpeedComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `speedCurrent`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A FanControlCluster supports these elements if it supports feature MultiSpeed.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:222

___

### RockSetting

• `Const` **RockSetting**: `Object`

The value of the FanControl rockSetting attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.9

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rockLeftRight` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `rockRound` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `rockUpDown` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:106

___

### RockSupport

• `Const` **RockSupport**: `Object`

The value of the FanControl rockSupport attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rockLeftRight` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `rockRound` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `rockUpDown` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:96

___

### RockingComponent

• `Const` **RockingComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `rockSetting`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `rockLeftRight`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rockRound`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rockUpDown`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `rockLeftRight`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rockRound`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rockUpDown`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A FanControlCluster supports these elements if it supports feature Rocking.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:250

___

### WindComponent

• `Const` **WindComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `windSetting`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `naturalWind`: [`BitFlag`](exports_schema.md#bitflag-1) ; `sleepWind`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `naturalWind`: [`BitFlag`](exports_schema.md#bitflag-1) ; `sleepWind`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A FanControlCluster supports these elements if it supports feature Wind.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:287

___

### WindSetting

• `Const` **WindSetting**: `Object`

The value of the FanControl windSetting attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.11

#### Type declaration

| Name | Type |
| :------ | :------ |
| `naturalWind` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `sleepWind` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:125

___

### WindSupport

• `Const` **WindSupport**: `Object`

The value of the FanControl windSupport attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.4.6.10

#### Type declaration

| Name | Type |
| :------ | :------ |
| `naturalWind` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `sleepWind` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FanControlCluster.d.ts:116
