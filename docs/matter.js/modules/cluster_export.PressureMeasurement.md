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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.PressureMeasurement.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `extended`: ``true``  } ? typeof [`ExtendedComponent`](cluster_export.PressureMeasurement.md#extendedcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:182](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L182)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all PressureMeasurement clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L42)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.PressureMeasurement.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Pressure Measurement

This cluster provides an interface to pressure measurement functionality, including configuration and provision
of notifications of pressure measurements.

PressureMeasurementCluster supports optional features that you can enable with the
PressureMeasurementCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:163](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L163)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `maxMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `maxScaledValue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>\> ; `measuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minScaledValue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>\> ; `scale`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `scaledTolerance`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>\> ; `scaledValue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>\> ; `tolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `extended`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, {}, {}\>

This cluster supports all PressureMeasurement features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:195](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L195)

___

### ExtendedComponent

• `Const` **ExtendedComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `maxScaledValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A PressureMeasurementCluster supports these elements if it supports feature Extended.

#### Defined in

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:102](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L102)
