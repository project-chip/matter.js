[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / OccupancySensing

# Namespace: OccupancySensing

## Index

### Enumerations

- [OccupancySensorType](enumerations/OccupancySensorType.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OccupancySensingCluster.d.ts:194

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.occupancy

> `readonly` **occupancy**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

The Occupancy attribute indicates the status of occupancy.

###### See

MatterSpecification.v11.Cluster § 2.7.6.1

##### attributes.occupancySensorType

> `readonly` **occupancySensorType**: [`Attribute`](../../interfaces/Attribute.md)\<[`OccupancySensorType`](enumerations/OccupancySensorType.md), `any`\>

The OccupancySensorType attribute specifies the type of the occupancy sensor.

###### See

MatterSpecification.v11.Cluster § 2.7.6.2

##### attributes.occupancySensorTypeBitmap

> `readonly` **occupancySensorTypeBitmap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

The OccupancySensorTypeBitmap attribute specifies the types of the occupancy sensor. A ‘1’ in each bit
position indicates the capability is implemented.

The value of the OccupancySensorTypeBitmap attribute and the OccupancySensorType attribute shall be
aligned as defined below.

Table 32. Mapping between OccupancySensorTypeBitmap and OccupancySensorType Attributes

###### See

MatterSpecification.v11.Cluster § 2.7.6.3

##### attributes.physicalContactOccupiedToUnoccupiedDelay

> `readonly` **physicalContactOccupiedToUnoccupiedDelay**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The PhysicalContactOccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact occupancy sensor changes to its unoccupied state after detecting the unoccupied event.
The null value indicates that the sensor does not report occupied to unoccupied transition.

###### See

MatterSpecification.v11.Cluster § 2.7.9.1

##### attributes.physicalContactUnoccupiedToOccupiedDelay

> `readonly` **physicalContactUnoccupiedToOccupiedDelay**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The PhysicalContactUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact sensor changes to its occupied state after the detection of the occupied event.

The null value indicates that the sensor does not report unoccupied to occupied transition.

###### See

MatterSpecification.v11.Cluster § 2.7.9.2

##### attributes.physicalContactUnoccupiedToOccupiedThreshold

> `readonly` **physicalContactUnoccupiedToOccupiedThreshold**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PhysicalContactUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection
events that must occur in the period PhysicalContactUnoccupiedToOccupiedDelay, before the PIR sensor
changes to its occupied state. This attribute is mandatory if the
PhysicalContactUnoccupiedToOccupiedDelay attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.9.3

##### attributes.pirOccupiedToUnoccupiedDelay

> `readonly` **pirOccupiedToUnoccupiedDelay**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PIROccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its unoccupied state after the last detection of movement in the sensed area.

###### See

MatterSpecification.v11.Cluster § 2.7.7.1

##### attributes.pirUnoccupiedToOccupiedDelay

> `readonly` **pirUnoccupiedToOccupiedDelay**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PIRUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its occupied state after the detection of movement in the sensed area. This attribute is
mandatory if the PIRUnoccupiedToOccupiedThreshold attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.7.2

##### attributes.pirUnoccupiedToOccupiedThreshold

> `readonly` **pirUnoccupiedToOccupiedThreshold**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The PIRUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events that
must occur in the period PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied
state. This attribute is mandatory if the PIRUnoccupiedToOccupiedDelay attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.7.3

##### attributes.ultrasonicOccupiedToUnoccupiedDelay

> `readonly` **ultrasonicOccupiedToUnoccupiedDelay**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The UltrasonicOccupiedToUnoccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its unoccupied state after the last detection of movement in the sensed
area.

###### See

MatterSpecification.v11.Cluster § 2.7.8.1

##### attributes.ultrasonicUnoccupiedToOccupiedDelay

> `readonly` **ultrasonicUnoccupiedToOccupiedDelay**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The UltrasonicUnoccupiedToOccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its occupied state after the detection of movement in the sensed area. This
attribute is mandatory if the UltrasonicUnoccupiedToOccupiedThreshold attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.8.2

##### attributes.ultrasonicUnoccupiedToOccupiedThreshold

> `readonly` **ultrasonicUnoccupiedToOccupiedThreshold**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

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

#### Source

packages/matter.js/dist/esm/cluster/definitions/OccupancySensingCluster.d.ts:64

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OccupancySensingCluster.d.ts:197

***

### OccupancyBitmap

> `const` **OccupancyBitmap**: `object`

All other bits are reserved.

#### See

MatterSpecification.v11.Cluster § 2.7.5.1

#### Type declaration

##### occupied

> **occupied**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OccupancySensingCluster.d.ts:17

***

### OccupancySensorTypeBitmap

> `const` **OccupancySensorTypeBitmap**: `object`

#### See

MatterSpecification.v11.Cluster § 2.7.5.3

#### Type declaration

##### physicalContact

> **physicalContact**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicates a physical contact sensor.

##### pir

> **pir**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicates a passive infrared sensor.

##### ultrasonic

> **ultrasonic**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicates a ultrasonic sensor.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OccupancySensingCluster.d.ts:47
