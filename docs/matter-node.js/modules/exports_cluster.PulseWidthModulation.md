[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / PulseWidthModulation

# Namespace: PulseWidthModulation

[exports/cluster](exports_cluster.md).PulseWidthModulation

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.PulseWidthModulation.Feature.md)
- [MoveMode](../enums/exports_cluster.PulseWidthModulation.MoveMode.md)

### Type Aliases

- [Extension](exports_cluster.PulseWidthModulation.md#extension)

### Variables

- [Base](exports_cluster.PulseWidthModulation.md#base)
- [Cluster](exports_cluster.PulseWidthModulation.md#cluster)
- [Complete](exports_cluster.PulseWidthModulation.md#complete)
- [FrequencyComponent](exports_cluster.PulseWidthModulation.md#frequencycomponent)
- [LightingComponent](exports_cluster.PulseWidthModulation.md#lightingcomponent)
- [Options](exports_cluster.PulseWidthModulation.md#options)
- [TlvMoveRequest](exports_cluster.PulseWidthModulation.md#tlvmoverequest)
- [TlvMoveToClosestFrequencyRequest](exports_cluster.PulseWidthModulation.md#tlvmovetoclosestfrequencyrequest)
- [TlvMoveToLevelRequest](exports_cluster.PulseWidthModulation.md#tlvmovetolevelrequest)
- [TlvStepRequest](exports_cluster.PulseWidthModulation.md#tlvsteprequest)
- [TlvStopRequest](exports_cluster.PulseWidthModulation.md#tlvstoprequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.PulseWidthModulation.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `lighting`: ``true``  } ? typeof [`LightingComponent`](exports_cluster.PulseWidthModulation.md#lightingcomponent) : {} & `SF` extends { `frequency`: ``true``  } ? typeof [`FrequencyComponent`](exports_cluster.PulseWidthModulation.md#frequencycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:668

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentLevel`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `maxLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `onLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, { `move`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all PulseWidthModulation clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:147

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `onOff`: ``true``  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `move`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.PulseWidthModulation.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Pulse Width Modulation

This cluster provides an interface for controlling a characteristic of a device that can be set to a level, for
example the brightness of a light, the degree of closure of a door, or the power output of a heater.

PulseWidthModulationCluster supports optional features that you can enable with the
PulseWidthModulationCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:421

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `move`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToClosestFrequency`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, {}\>

This cluster supports all PulseWidthModulation features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:681

___

### FrequencyComponent

• `Const` **FrequencyComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `currentFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `maxFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `minFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  }, { `moveToClosestFrequency`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A PulseWidthModulationCluster supports these elements if it supports feature Frequency.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:380

___

### LightingComponent

• `Const` **LightingComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `remainingTime`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A PulseWidthModulationCluster supports these elements if it supports feature Lighting.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:355

___

### Options

• `Const` **Options**: `Object`

The value of the PulseWidthModulation options attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.5.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coupleColorTempToLevel` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `executeIfOff` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:15

___

### TlvMoveRequest

• `Const` **TlvMoveRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the PulseWidthModulation move command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:50

___

### TlvMoveToClosestFrequencyRequest

• `Const` **TlvMoveToClosestFrequencyRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the PulseWidthModulation moveToClosestFrequency command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:115

___

### TlvMoveToLevelRequest

• `Const` **TlvMoveToLevelRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the PulseWidthModulation moveToLevel command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:24

___

### TlvStepRequest

• `Const` **TlvStepRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the PulseWidthModulation step command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:82

___

### TlvStopRequest

• `Const` **TlvStopRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the PulseWidthModulation stop command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PulseWidthModulationCluster.d.ts:100
