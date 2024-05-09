[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / PressureMeasurement

# Namespace: PressureMeasurement

[exports/cluster](exports_cluster.md).PressureMeasurement

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.PressureMeasurement.Feature.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.PressureMeasurement.Cluster.md)
- [Complete](../interfaces/exports_cluster.PressureMeasurement.Complete.md)

### Variables

- [Base](exports_cluster.PressureMeasurement.md#base)
- [Cluster](exports_cluster.PressureMeasurement.md#cluster)
- [ClusterInstance](exports_cluster.PressureMeasurement.md#clusterinstance)
- [Complete](exports_cluster.PressureMeasurement.md#complete)
- [CompleteInstance](exports_cluster.PressureMeasurement.md#completeinstance)
- [ExtendedComponent](exports_cluster.PressureMeasurement.md#extendedcomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all PressureMeasurement clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `maxMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } | - |
| `attributes.maxMeasuredValue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> | This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for more details. The null value indicates that the value is not available. **`See`** MatterSpecification.v11.Cluster § 2.4.5.3 |
| `attributes.measuredValue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> | This attribute represents the pressure in kPa as follows: MeasuredValue = 10 x Pressure [kPa] The null value indicates that the value is not available. **`See`** MatterSpecification.v11.Cluster § 2.4.5.1 |
| `attributes.minMeasuredValue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> | This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for more details. The null value indicates that the value is not available. **`See`** MatterSpecification.v11.Cluster § 2.4.5.2 |
| `attributes.tolerance` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> | This attribute indicates the magnitude of the possible error that is associated with ScaledValue. See Measured Value. **`See`** MatterSpecification.v11.Cluster § 2.4.5.4 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `minScaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `scale`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `extended`: ``true``  }  }] | This metadata controls which PressureMeasurementCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `extended`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.extended` | [`BitFlag`](exports_schema.md#bitflag) | Extended The cluster is capable of extended range and resolution |
| `id` | ``1027`` | - |
| `name` | ``"PressureMeasurement"`` | - |
| `revision` | ``3`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:76

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.PressureMeasurement.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:300

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:302

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `minScaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `scale`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `extended`: ``true``  }  }] ; `features`: \{ `extended`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1027`` ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>

**`See`**

[Cluster](exports_cluster.PressureMeasurement.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:184

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.PressureMeasurement.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:384

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:386

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `maxScaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `measuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `minScaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `scale`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `scaledTolerance`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `extended`: `boolean`  }]  } ; `scaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `extended`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `tolerance`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3``  }\>

**`See`**

[Complete](exports_cluster.PressureMeasurement.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:306

___

### ExtendedComponent

• `Const` **ExtendedComponent**: `Object`

A PressureMeasurementCluster supports these elements if it supports feature Extended.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxScaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `minScaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `scale`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.maxScaledValue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minScaledValue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.scale` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.scaledTolerance` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> |
| `attributes.scaledValue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:15
