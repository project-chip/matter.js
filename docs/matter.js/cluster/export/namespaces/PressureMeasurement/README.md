[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / PressureMeasurement

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

> `readonly` **maxMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.3

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute represents the pressure in kPa as follows:

MeasuredValue = 10 x Pressure [kPa]

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.1

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

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

> `readonly` **extended**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Extended

The cluster is capable of extended range and resolution

##### id

> `readonly` **id**: `1027` = `0x403`

##### name

> `readonly` **name**: `"PressureMeasurement"` = `"PressureMeasurement"`

##### revision

> `readonly` **revision**: `3` = `3`

#### Source

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L88)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:167](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L167)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.3

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute represents the pressure in kPa as follows:

MeasuredValue = 10 x Pressure [kPa]

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.1

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

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

> `readonly` **extended**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Extended

The cluster is capable of extended range and resolution

##### id

> `readonly` **id**: `1027` = `0x403`

##### name

> `readonly` **name**: `"PressureMeasurement"` = `"PressureMeasurement"`

##### revision

> `readonly` **revision**: `3` = `3`

#### Source

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L154)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:207](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L207)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.3

##### attributes.maxScaledValue

> `readonly` **maxScaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute represents the pressure in kPa as follows:

MeasuredValue = 10 x Pressure [kPa]

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.1

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for
more details.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.2

##### attributes.minScaledValue

> `readonly` **minScaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.scale

> `readonly` **scale**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.scaledTolerance

> `readonly` **scaledTolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.scaledValue

> `readonly` **scaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.tolerance

> `readonly` **tolerance**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

This attribute indicates the magnitude of the possible error that is associated with ScaledValue.

See Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.4.5.4

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.extended

> `readonly` **extended**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Extended

The cluster is capable of extended range and resolution

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`1027`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"PressureMeasurement"` = `Cluster.name`

##### revision

> `readonly` **revision**: `3` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L176)

***

### ExtendedComponent

> `const` **ExtendedComponent**: `object`

A PressureMeasurementCluster supports these elements if it supports feature Extended.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxScaledValue

> `readonly` **maxScaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute indicates the maximum value of ScaledValue that can be measured. MaxScaledValue shall be
greater than MinScaledValue.

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.7

##### attributes.minScaledValue

> `readonly` **minScaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

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

> `readonly` **scaledValue**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

ScaledValue represents the pressure in Pascals as follows:

ScaledValue = 10Scale x Pressure [Pa]

The null value indicates that the value is not available.

###### See

MatterSpecification.v11.Cluster § 2.4.5.5

#### Source

[packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PressureMeasurementCluster.ts#L21)
