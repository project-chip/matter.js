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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.LevelControl.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `lighting`: ``true``  } ? typeof [`LightingComponent`](exports_cluster.LevelControl.md#lightingcomponent) : {} & `SF` extends { `frequency`: ``true``  } ? typeof [`FrequencyComponent`](exports_cluster.LevelControl.md#frequencycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:820

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentLevel`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `maxLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `onLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, { `move`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all LevelControl clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:213

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `onOff`: ``true``  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `move`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.LevelControl.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Level Control

This cluster provides an interface for controlling a characteristic of a device that can be set to a level, for
example the brightness of a light, the degree of closure of a door, or the power output of a heater.

LevelControlCluster supports optional features that you can enable with the LevelControlCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:530

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `move`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToClosestFrequency`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, {}\>

This cluster supports all LevelControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:833

___

### FrequencyComponent

• `Const` **FrequencyComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `currentFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `maxFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `minFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  }, { `moveToClosestFrequency`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A LevelControlCluster supports these elements if it supports feature Frequency.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:489

___

### LightingComponent

• `Const` **LightingComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `remainingTime`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A LevelControlCluster supports these elements if it supports feature Lighting.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:464

___

### Options

• `Const` **Options**: `Object`

The value of the LevelControl options attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.5.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coupleColorTempToLevel` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `executeIfOff` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:15

___

### TlvMoveRequest

• `Const` **TlvMoveRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the LevelControl move command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:45

___

### TlvMoveToClosestFrequencyRequest

• `Const` **TlvMoveToClosestFrequencyRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the LevelControl moveToClosestFrequency command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:181

___

### TlvMoveToLevelRequest

• `Const` **TlvMoveToLevelRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the LevelControl moveToLevel command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:24

___

### TlvMoveToLevelWithOnOffRequest

• `Const` **TlvMoveToLevelWithOnOffRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the LevelControl moveToLevelWithOnOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:114

___

### TlvMoveWithOnOffRequest

• `Const` **TlvMoveWithOnOffRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the LevelControl moveWithOnOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:131

___

### TlvStepRequest

• `Const` **TlvStepRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the LevelControl step command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:81

___

### TlvStepWithOnOffRequest

• `Const` **TlvStepWithOnOffRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the LevelControl stepWithOnOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:148

___

### TlvStopRequest

• `Const` **TlvStopRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the LevelControl stop command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:99

___

### TlvStopWithOnOffRequest

• `Const` **TlvStopWithOnOffRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the LevelControl stopWithOnOff command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/LevelControlCluster.d.ts:166
