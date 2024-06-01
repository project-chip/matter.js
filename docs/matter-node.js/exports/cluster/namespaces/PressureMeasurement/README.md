[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / PressureMeasurement

# Namespace: PressureMeasurement

## Index

### Enumerations

- [Feature](enumerations/Feature.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all PressureMeasurement clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.3

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

This attribute represents the pressure in kPa as follows:

MeasuredValue = 10 x Pressure [kPa]

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.1

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.2

##### attributes.tolerance

> `readonly` **tolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute indicates the magnitude of the possible error that is associated with ScaledValue.

See Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.4.5.4

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which PressureMeasurementCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.extended

> `readonly` **extended**: [`BitFlag`](../../../schema/README.md#bitflag)

Extended

The cluster is capable of extended range and resolution

##### id

> `readonly` **id**: `1027`

##### name

> `readonly` **name**: `"PressureMeasurement"`

##### revision

> `readonly` **revision**: `3`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:76

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:300

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.3

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

This attribute represents the pressure in kPa as follows:

MeasuredValue = 10 x Pressure [kPa]

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.1

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.2

##### attributes.tolerance

> `readonly` **tolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute indicates the magnitude of the possible error that is associated with ScaledValue.

See Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.4.5.4

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which PressureMeasurementCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.extended

> `readonly` **extended**: [`BitFlag`](../../../schema/README.md#bitflag)

Extended

The cluster is capable of extended range and resolution

##### id

> `readonly` **id**: `1027`

##### name

> `readonly` **name**: `"PressureMeasurement"`

##### revision

> `readonly` **revision**: `3`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:184

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:384

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_AttributeId/README.md)[], `never`\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.maxScaledValue

> `readonly` **maxScaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.minScaledValue

> `readonly` **minScaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.scale

> `readonly` **scale**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.scaledTolerance

> `readonly` **scaledTolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.scaledValue

> `readonly` **scaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.tolerance

> `readonly` **tolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

##### features

> `readonly` **features**: `object`

##### features.extended

> `readonly` **extended**: [`BitFlag`](../../../schema/README.md#bitflag)

Extended

The cluster is capable of extended range and resolution

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"PressureMeasurement"`

##### revision

> `readonly` **revision**: `3`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:306

***

### ExtendedComponent

> `const` **ExtendedComponent**: `object`

A PressureMeasurementCluster supports these elements if it supports feature Extended.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxScaledValue

> `readonly` **maxScaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

This attribute indicates the maximum value of ScaledValue that can be measured. MaxScaledValue shall be
greater than MinScaledValue.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.7

##### attributes.minScaledValue

> `readonly` **minScaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The MinScaledValue attribute indicates the minimum value of ScaledValue that can be measured. The null
value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.6

##### attributes.scale

> `readonly` **scale**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue Attribute).

###### See

MatterSpecification.v11.Cluster § 2.4.5.9

##### attributes.scaledTolerance

> `readonly` **scaledTolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute indicates the magnitude of the possible error that is associated with ScaledValue. The
true value is located in the range

(ScaledValue – ScaledTolerance) to (ScaledValue + ScaledTolerance).

###### See

MatterSpecification.v11.Cluster § 2.4.5.8

##### attributes.scaledValue

> `readonly` **scaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

ScaledValue represents the pressure in Pascals as follows:

ScaledValue = 10Scale x Pressure [Pa]

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/PressureMeasurementCluster.d.ts:15
