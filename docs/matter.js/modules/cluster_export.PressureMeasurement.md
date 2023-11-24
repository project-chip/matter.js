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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.PressureMeasurement.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `extended`: ``true``  } ? typeof [`ExtendedComponent`](cluster_export.PressureMeasurement.md#extendedcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:177](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L177)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  } ; `features`: { `extended`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>

These elements and properties are present in all PressureMeasurement clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:34](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L34)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: { `extended`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``1027`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"PressureMeasurement"`` ; `revision`: ``3`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  } ; `features`: { `extended`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.PressureMeasurement.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Pressure Measurement

This cluster provides an interface to pressure measurement functionality, including configuration and provision
of notifications of pressure measurements.

PressureMeasurementCluster supports optional features that you can enable with the
PressureMeasurementCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:155](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L155)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `scale`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `scaledValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  } ; `features`: { `extended`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``1027`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"PressureMeasurement"`` = Cluster.name; `revision`: ``3`` = Cluster.revision }\>

This cluster supports all PressureMeasurement features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:190](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L190)

___

### ExtendedComponent

• `Const` **ExtendedComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxScaledValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>  }  }\>

A PressureMeasurementCluster supports these elements if it supports feature Extended.

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:94](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L94)
