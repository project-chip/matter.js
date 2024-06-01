[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/occupancy-sensing/export](../../../README.md) / [OccupancySensingBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### occupancy

> **occupancy**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The Occupancy attribute indicates the status of occupancy.

#### See

MatterSpecification.v11.Cluster § 2.7.6.1

#### Type declaration

##### occupied

> **occupied**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied.

#### Inherited from

`StateType.occupancy`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L89)

***

### occupancySensorType

> **occupancySensorType**: [`OccupancySensorType`](../../../../../../../cluster/export/namespaces/OccupancySensing/enumerations/OccupancySensorType.md)

The OccupancySensorType attribute specifies the type of the occupancy sensor.

#### See

MatterSpecification.v11.Cluster § 2.7.6.2

#### Inherited from

`StateType.occupancySensorType`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L96)

***

### occupancySensorTypeBitmap

> **occupancySensorTypeBitmap**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The OccupancySensorTypeBitmap attribute specifies the types of the occupancy sensor. A ‘1’ in each bit
position indicates the capability is implemented.

The value of the OccupancySensorTypeBitmap attribute and the OccupancySensorType attribute shall be
aligned as defined below.

Table 32. Mapping between OccupancySensorTypeBitmap and OccupancySensorType Attributes

#### See

MatterSpecification.v11.Cluster § 2.7.6.3

#### Type declaration

##### physicalContact

> **physicalContact**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Indicates a physical contact sensor.

##### pir

> **pir**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Indicates a passive infrared sensor.

##### ultrasonic

> **ultrasonic**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Indicates a ultrasonic sensor.

#### Inherited from

`StateType.occupancySensorTypeBitmap`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L109)

***

### physicalContactOccupiedToUnoccupiedDelay?

> `optional` **physicalContactOccupiedToUnoccupiedDelay**: `null` \| `number`

The PhysicalContactOccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact occupancy sensor changes to its unoccupied state after detecting the unoccupied event.
The null value indicates that the sensor does not report occupied to unoccupied transition.

#### See

MatterSpecification.v11.Cluster § 2.7.9.1

#### Inherited from

`StateType.physicalContactOccupiedToUnoccupiedDelay`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:196](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L196)

***

### physicalContactUnoccupiedToOccupiedDelay?

> `optional` **physicalContactUnoccupiedToOccupiedDelay**: `null` \| `number`

The PhysicalContactUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact sensor changes to its occupied state after the detection of the occupied event.

The null value indicates that the sensor does not report unoccupied to occupied transition.

#### See

MatterSpecification.v11.Cluster § 2.7.9.2

#### Inherited from

`StateType.physicalContactUnoccupiedToOccupiedDelay`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:210](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L210)

***

### physicalContactUnoccupiedToOccupiedThreshold?

> `optional` **physicalContactUnoccupiedToOccupiedThreshold**: `number`

The PhysicalContactUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection
events that must occur in the period PhysicalContactUnoccupiedToOccupiedDelay, before the PIR sensor
changes to its occupied state. This attribute is mandatory if the
PhysicalContactUnoccupiedToOccupiedDelay attribute is implemented.

#### See

MatterSpecification.v11.Cluster § 2.7.9.3

#### Inherited from

`StateType.physicalContactUnoccupiedToOccupiedThreshold`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L224)

***

### pirOccupiedToUnoccupiedDelay?

> `optional` **pirOccupiedToUnoccupiedDelay**: `number`

The PIROccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its unoccupied state after the last detection of movement in the sensed area.

#### See

MatterSpecification.v11.Cluster § 2.7.7.1

#### Inherited from

`StateType.pirOccupiedToUnoccupiedDelay`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L117)

***

### pirUnoccupiedToOccupiedDelay?

> `optional` **pirUnoccupiedToOccupiedDelay**: `number`

The PIRUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its occupied state after the detection of movement in the sensed area. This attribute is
mandatory if the PIRUnoccupiedToOccupiedThreshold attribute is implemented.

#### See

MatterSpecification.v11.Cluster § 2.7.7.2

#### Inherited from

`StateType.pirUnoccupiedToOccupiedDelay`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L130)

***

### pirUnoccupiedToOccupiedThreshold?

> `optional` **pirUnoccupiedToOccupiedThreshold**: `number`

The PIRUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events that
must occur in the period PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied
state. This attribute is mandatory if the PIRUnoccupiedToOccupiedDelay attribute is implemented.

#### See

MatterSpecification.v11.Cluster § 2.7.7.3

#### Inherited from

`StateType.pirUnoccupiedToOccupiedThreshold`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L143)

***

### ultrasonicOccupiedToUnoccupiedDelay?

> `optional` **ultrasonicOccupiedToUnoccupiedDelay**: `number`

The UltrasonicOccupiedToUnoccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its unoccupied state after the last detection of movement in the sensed
area.

#### See

MatterSpecification.v11.Cluster § 2.7.8.1

#### Inherited from

`StateType.ultrasonicOccupiedToUnoccupiedDelay`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L156)

***

### ultrasonicUnoccupiedToOccupiedDelay?

> `optional` **ultrasonicUnoccupiedToOccupiedDelay**: `number`

The UltrasonicUnoccupiedToOccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its occupied state after the detection of movement in the sensed area. This
attribute is mandatory if the UltrasonicUnoccupiedToOccupiedThreshold attribute is implemented.

#### See

MatterSpecification.v11.Cluster § 2.7.8.2

#### Inherited from

`StateType.ultrasonicUnoccupiedToOccupiedDelay`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L169)

***

### ultrasonicUnoccupiedToOccupiedThreshold?

> `optional` **ultrasonicUnoccupiedToOccupiedThreshold**: `number`

The UltrasonicUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events
that must occur in the period UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes
to its occupied state. This attribute is mandatory if the UltrasonicUnoccupiedToOccupiedDelay attribute
is implemented.

#### See

MatterSpecification.v11.Cluster § 2.7.8.3

#### Inherited from

`StateType.ultrasonicUnoccupiedToOccupiedThreshold`

#### Source

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L183)
