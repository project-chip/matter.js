[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / PressureMeasurement

# Namespace: PressureMeasurement

[cluster/export](cluster_export.md).PressureMeasurement

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.PressureMeasurement.Feature.md)

### Type Aliases

- [Extension](cluster_export.PressureMeasurement.md#extension)

### Variables

- [Base](cluster_export.PressureMeasurement.md#base)
- [Cluster](cluster_export.PressureMeasurement.md#cluster)
- [Complete](cluster_export.PressureMeasurement.md#complete)
- [ExtendedComponent](cluster_export.PressureMeasurement.md#extendedcomponent)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.PressureMeasurement.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `extended`: ``true``  } ? typeof [`ExtendedComponent`](cluster_export.PressureMeasurement.md#extendedcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:177](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L177)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>

These elements and properties are present in all PressureMeasurement clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:34](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L34)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `extended`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `extended`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: \{ `extended`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``1027`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.PressureMeasurement.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `extended`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

Pressure Measurement

This cluster provides an interface to pressure measurement functionality, including configuration and provision
of notifications of pressure measurements.

PressureMeasurementCluster supports optional features that you can enable with the
PressureMeasurementCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:155](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L155)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `extended`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `extended`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `extended`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `scale`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `extended`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `extended`: `boolean` = true }]  } ; `scaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `extended`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `extended`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: ``1027`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"PressureMeasurement"`` = Cluster.name; `revision`: ``3`` = Cluster.revision }\>

This cluster supports all PressureMeasurement features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:190](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L190)

___

### ExtendedComponent

• `Const` **ExtendedComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  }\>

A PressureMeasurementCluster supports these elements if it supports feature Extended.

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:94](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L94)
