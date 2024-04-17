[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / PressureMeasurement

# Namespace: PressureMeasurement

[cluster/export](cluster_export.md).PressureMeasurement

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.PressureMeasurement.Feature.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.PressureMeasurement.Cluster.md)
- [Complete](../interfaces/cluster_export.PressureMeasurement.Complete.md)

### Variables

- [Base](cluster_export.PressureMeasurement.md#base)
- [Cluster](cluster_export.PressureMeasurement.md#cluster)
- [ClusterInstance](cluster_export.PressureMeasurement.md#clusterinstance)
- [Complete](cluster_export.PressureMeasurement.md#complete)
- [CompleteInstance](cluster_export.PressureMeasurement.md#completeinstance)
- [ExtendedComponent](cluster_export.PressureMeasurement.md#extendedcomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all PressureMeasurement clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } | - |
| `attributes.maxMeasuredValue` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> | This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for more details. The null value indicates that the value is not available. **`See`** MatterSpecification.v11.Cluster § 2.4.5.3 |
| `attributes.measuredValue` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> | This attribute represents the pressure in kPa as follows: MeasuredValue = 10 x Pressure [kPa] The null value indicates that the value is not available. **`See`** MatterSpecification.v11.Cluster § 2.4.5.1 |
| `attributes.minMeasuredValue` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> | This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for more details. The null value indicates that the value is not available. **`See`** MatterSpecification.v11.Cluster § 2.4.5.2 |
| `attributes.tolerance` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> | This attribute indicates the magnitude of the possible error that is associated with ScaledValue. See Measured Value. **`See`** MatterSpecification.v11.Cluster § 2.4.5.4 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] | This metadata controls which PressureMeasurementCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `extended`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.extended` | [`BitFlag`](schema_export.md#bitflag) | Extended The cluster is capable of extended range and resolution |
| `id` | ``1027`` | - |
| `name` | ``"PressureMeasurement"`` | - |
| `revision` | ``3`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L88)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.PressureMeasurement.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L167)

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:169](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L169)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>

**`See`**

[Cluster](cluster_export.PressureMeasurement.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L154)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.PressureMeasurement.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L207)

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L209)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `extended`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `extended`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `scale`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `extended`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `extended`: `boolean` = true }]  } ; `scaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `extended`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``1027``, ``"ClusterId"``\> = Cluster.id; `name`: ``"PressureMeasurement"`` = Cluster.name; `revision`: ``3`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.PressureMeasurement.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:176](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L176)

___

### ExtendedComponent

• `Const` **ExtendedComponent**: `Object`

A PressureMeasurementCluster supports these elements if it supports feature Extended.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.maxScaledValue` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minScaledValue` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.scale` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `attributes.scaledTolerance` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> |
| `attributes.scaledValue` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L21)
