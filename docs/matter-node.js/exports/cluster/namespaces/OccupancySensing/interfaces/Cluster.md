[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OccupancySensing](../README.md) / Cluster

# Interface: Cluster

Occupancy Sensing

Attributes and commands for configuring occupancy sensing, and reporting occupancy status.

## See

MatterSpecification.v11.Cluster § 2.7

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### occupancy

> `readonly` **occupancy**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The Occupancy attribute indicates the status of occupancy.

###### See

MatterSpecification.v11.Cluster § 2.7.6.1

##### occupancySensorType

> `readonly` **occupancySensorType**: [`Attribute`](../../../interfaces/Attribute.md)\<[`OccupancySensorType`](../enumerations/OccupancySensorType.md), `any`\>

The OccupancySensorType attribute specifies the type of the occupancy sensor.

###### See

MatterSpecification.v11.Cluster § 2.7.6.2

##### occupancySensorTypeBitmap

> `readonly` **occupancySensorTypeBitmap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The OccupancySensorTypeBitmap attribute specifies the types of the occupancy sensor. A ‘1’ in each bit
position indicates the capability is implemented.

The value of the OccupancySensorTypeBitmap attribute and the OccupancySensorType attribute shall be
aligned as defined below.

Table 32. Mapping between OccupancySensorTypeBitmap and OccupancySensorType Attributes

###### See

MatterSpecification.v11.Cluster § 2.7.6.3

##### physicalContactOccupiedToUnoccupiedDelay

> `readonly` **physicalContactOccupiedToUnoccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The PhysicalContactOccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact occupancy sensor changes to its unoccupied state after detecting the unoccupied event.
The null value indicates that the sensor does not report occupied to unoccupied transition.

###### See

MatterSpecification.v11.Cluster § 2.7.9.1

##### physicalContactUnoccupiedToOccupiedDelay

> `readonly` **physicalContactUnoccupiedToOccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The PhysicalContactUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact sensor changes to its occupied state after the detection of the occupied event.

The null value indicates that the sensor does not report unoccupied to occupied transition.

###### See

MatterSpecification.v11.Cluster § 2.7.9.2

##### physicalContactUnoccupiedToOccupiedThreshold

> `readonly` **physicalContactUnoccupiedToOccupiedThreshold**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PhysicalContactUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection
events that must occur in the period PhysicalContactUnoccupiedToOccupiedDelay, before the PIR sensor
changes to its occupied state. This attribute is mandatory if the
PhysicalContactUnoccupiedToOccupiedDelay attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.9.3

##### pirOccupiedToUnoccupiedDelay

> `readonly` **pirOccupiedToUnoccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PIROccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its unoccupied state after the last detection of movement in the sensed area.

###### See

MatterSpecification.v11.Cluster § 2.7.7.1

##### pirUnoccupiedToOccupiedDelay

> `readonly` **pirUnoccupiedToOccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PIRUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its occupied state after the detection of movement in the sensed area. This attribute is
mandatory if the PIRUnoccupiedToOccupiedThreshold attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.7.2

##### pirUnoccupiedToOccupiedThreshold

> `readonly` **pirUnoccupiedToOccupiedThreshold**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PIRUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events that
must occur in the period PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied
state. This attribute is mandatory if the PIRUnoccupiedToOccupiedDelay attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.7.3

##### ultrasonicOccupiedToUnoccupiedDelay

> `readonly` **ultrasonicOccupiedToUnoccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The UltrasonicOccupiedToUnoccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its unoccupied state after the last detection of movement in the sensed
area.

###### See

MatterSpecification.v11.Cluster § 2.7.8.1

##### ultrasonicUnoccupiedToOccupiedDelay

> `readonly` **ultrasonicUnoccupiedToOccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The UltrasonicUnoccupiedToOccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its occupied state after the detection of movement in the sensed area. This
attribute is mandatory if the UltrasonicUnoccupiedToOccupiedThreshold attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.8.2

##### ultrasonicUnoccupiedToOccupiedThreshold

> `readonly` **ultrasonicUnoccupiedToOccupiedThreshold**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The UltrasonicUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events
that must occur in the period UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes
to its occupied state. This attribute is mandatory if the UltrasonicUnoccupiedToOccupiedDelay attribute
is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.8.3

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`1030`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"OccupancySensing"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `3`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object`

##### attributes.occupancy

> `readonly` **occupancy**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The Occupancy attribute indicates the status of occupancy.

###### See

MatterSpecification.v11.Cluster § 2.7.6.1

##### attributes.occupancySensorType

> `readonly` **occupancySensorType**: [`Attribute`](../../../interfaces/Attribute.md)\<[`OccupancySensorType`](../enumerations/OccupancySensorType.md), `any`\>

The OccupancySensorType attribute specifies the type of the occupancy sensor.

###### See

MatterSpecification.v11.Cluster § 2.7.6.2

##### attributes.occupancySensorTypeBitmap

> `readonly` **occupancySensorTypeBitmap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The OccupancySensorTypeBitmap attribute specifies the types of the occupancy sensor. A ‘1’ in each bit
position indicates the capability is implemented.

The value of the OccupancySensorTypeBitmap attribute and the OccupancySensorType attribute shall be
aligned as defined below.

Table 32. Mapping between OccupancySensorTypeBitmap and OccupancySensorType Attributes

###### See

MatterSpecification.v11.Cluster § 2.7.6.3

##### attributes.physicalContactOccupiedToUnoccupiedDelay

> `readonly` **physicalContactOccupiedToUnoccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The PhysicalContactOccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact occupancy sensor changes to its unoccupied state after detecting the unoccupied event.
The null value indicates that the sensor does not report occupied to unoccupied transition.

###### See

MatterSpecification.v11.Cluster § 2.7.9.1

##### attributes.physicalContactUnoccupiedToOccupiedDelay

> `readonly` **physicalContactUnoccupiedToOccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The PhysicalContactUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact sensor changes to its occupied state after the detection of the occupied event.

The null value indicates that the sensor does not report unoccupied to occupied transition.

###### See

MatterSpecification.v11.Cluster § 2.7.9.2

##### attributes.physicalContactUnoccupiedToOccupiedThreshold

> `readonly` **physicalContactUnoccupiedToOccupiedThreshold**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PhysicalContactUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection
events that must occur in the period PhysicalContactUnoccupiedToOccupiedDelay, before the PIR sensor
changes to its occupied state. This attribute is mandatory if the
PhysicalContactUnoccupiedToOccupiedDelay attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.9.3

##### attributes.pirOccupiedToUnoccupiedDelay

> `readonly` **pirOccupiedToUnoccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PIROccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its unoccupied state after the last detection of movement in the sensed area.

###### See

MatterSpecification.v11.Cluster § 2.7.7.1

##### attributes.pirUnoccupiedToOccupiedDelay

> `readonly` **pirUnoccupiedToOccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PIRUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its occupied state after the detection of movement in the sensed area. This attribute is
mandatory if the PIRUnoccupiedToOccupiedThreshold attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.7.2

##### attributes.pirUnoccupiedToOccupiedThreshold

> `readonly` **pirUnoccupiedToOccupiedThreshold**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PIRUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events that
must occur in the period PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied
state. This attribute is mandatory if the PIRUnoccupiedToOccupiedDelay attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.7.3

##### attributes.ultrasonicOccupiedToUnoccupiedDelay

> `readonly` **ultrasonicOccupiedToUnoccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The UltrasonicOccupiedToUnoccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its unoccupied state after the last detection of movement in the sensed
area.

###### See

MatterSpecification.v11.Cluster § 2.7.8.1

##### attributes.ultrasonicUnoccupiedToOccupiedDelay

> `readonly` **ultrasonicUnoccupiedToOccupiedDelay**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The UltrasonicUnoccupiedToOccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its occupied state after the detection of movement in the sensed area. This
attribute is mandatory if the UltrasonicUnoccupiedToOccupiedThreshold attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.8.2

##### attributes.ultrasonicUnoccupiedToOccupiedThreshold

> `readonly` **ultrasonicUnoccupiedToOccupiedThreshold**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The UltrasonicUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events
that must occur in the period UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes
to its occupied state. This attribute is mandatory if the UltrasonicUnoccupiedToOccupiedDelay attribute
is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.8.3

##### id

> `readonly` **id**: `1030`

##### name

> `readonly` **name**: `"OccupancySensing"`

##### revision

> `readonly` **revision**: `3`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
