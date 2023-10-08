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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.PulseWidthModulation.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `lighting`: ``true``  } ? typeof [`LightingComponent`](exports_cluster.PulseWidthModulation.md#lightingcomponent) : {} & `SF` extends { `frequency`: ``true``  } ? typeof [`FrequencyComponent`](exports_cluster.PulseWidthModulation.md#frequencycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:949

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `currentLevel`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `maxLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `onLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: { `move`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `features`: { `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``28`` ; `name`: ``"PulseWidthModulation"`` ; `revision`: ``5``  }\>

These elements and properties are present in all PulseWidthModulation clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:148

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: { `move`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: { `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PulseWidthModulation"`` ; `revision`: ``5`` ; `supportedFeatures`: { `onOff`: ``true``  } ; `unknown`: ``false``  } & `Omit`<{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: { `move`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: { `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``28`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PulseWidthModulation"`` ; `revision`: ``5`` ; `supportedFeatures`: { `onOff`: ``true``  } ; `unknown`: ``false``  }, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.PulseWidthModulation.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Pulse Width Modulation

This cluster provides an interface for controlling a characteristic of a device that can be set to a level, for
example the brightness of a light, the degree of closure of a door, or the power output of a heater.

PulseWidthModulationCluster supports optional features that you can enable with the
PulseWidthModulationCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:434

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)<`number`, `never`\> ; `currentFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentLevel`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `eventList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `maxFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `minFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minLevel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `onLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remainingTime`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `startUpCurrentLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: { `move`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToClosestFrequency`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToLevel`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  } ; `features`: { `frequency`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``28`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PulseWidthModulation"`` ; `revision`: ``5``  }\>

This cluster supports all PulseWidthModulation features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:962

___

### FrequencyComponent

• `Const` **FrequencyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `maxFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `minFrequency`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  } ; `commands`: { `moveToClosestFrequency`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A PulseWidthModulationCluster supports these elements if it supports feature Frequency.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:390

___

### LightingComponent

• `Const` **LightingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `remainingTime`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\>  }  }\>

A PulseWidthModulationCluster supports these elements if it supports feature Lighting.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:363

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

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:16

___

### TlvMoveRequest

• `Const` **TlvMoveRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the PulseWidthModulation move command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:51

___

### TlvMoveToClosestFrequencyRequest

• `Const` **TlvMoveToClosestFrequencyRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the PulseWidthModulation moveToClosestFrequency command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:116

___

### TlvMoveToLevelRequest

• `Const` **TlvMoveToLevelRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the PulseWidthModulation moveToLevel command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:25

___

### TlvStepRequest

• `Const` **TlvStepRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the PulseWidthModulation step command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:83

___

### TlvStopRequest

• `Const` **TlvStopRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the PulseWidthModulation stop command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.6.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:101
