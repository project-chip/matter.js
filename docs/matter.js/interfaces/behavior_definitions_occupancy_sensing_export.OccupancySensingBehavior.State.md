[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/occupancy-sensing/export](../modules/behavior_definitions_occupancy_sensing_export.md) / [OccupancySensingBehavior](../modules/behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.md) / State

# Interface: State

[behavior/definitions/occupancy-sensing/export](../modules/behavior_definitions_occupancy_sensing_export.md).[OccupancySensingBehavior](../modules/behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_occupancy_sensing_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [occupancy](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#occupancy)
- [occupancySensorType](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#occupancysensortype)
- [occupancySensorTypeBitmap](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#occupancysensortypebitmap)
- [physicalContactOccupiedToUnoccupiedDelay](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#physicalcontactoccupiedtounoccupieddelay)
- [physicalContactUnoccupiedToOccupiedDelay](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#physicalcontactunoccupiedtooccupieddelay)
- [physicalContactUnoccupiedToOccupiedThreshold](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#physicalcontactunoccupiedtooccupiedthreshold)
- [pirOccupiedToUnoccupiedDelay](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#piroccupiedtounoccupieddelay)
- [pirUnoccupiedToOccupiedDelay](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#pirunoccupiedtooccupieddelay)
- [pirUnoccupiedToOccupiedThreshold](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#pirunoccupiedtooccupiedthreshold)
- [ultrasonicOccupiedToUnoccupiedDelay](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#ultrasonicoccupiedtounoccupieddelay)
- [ultrasonicUnoccupiedToOccupiedDelay](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#ultrasonicunoccupiedtooccupieddelay)
- [ultrasonicUnoccupiedToOccupiedThreshold](behavior_definitions_occupancy_sensing_export.OccupancySensingBehavior.State.md#ultrasonicunoccupiedtooccupiedthreshold)

## Properties

### occupancy

• **occupancy**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

The Occupancy attribute indicates the status of occupancy.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.6.1

#### Inherited from

StateType.occupancy

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:90](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L90)

___

### occupancySensorType

• **occupancySensorType**: [`OccupancySensorType`](../enums/cluster_export.OccupancySensing.OccupancySensorType.md)

The OccupancySensorType attribute specifies the type of the occupancy sensor.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.6.2

#### Inherited from

StateType.occupancySensorType

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:97](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L97)

___

### occupancySensorTypeBitmap

• **occupancySensorTypeBitmap**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pir`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

The OccupancySensorTypeBitmap attribute specifies the types of the occupancy sensor. A ‘1’ in each bit
position indicates the capability is implemented.

The value of the OccupancySensorTypeBitmap attribute and the OccupancySensorType attribute shall be
aligned as defined below.

Table 32. Mapping between OccupancySensorTypeBitmap and OccupancySensorType Attributes

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.6.3

#### Inherited from

StateType.occupancySensorTypeBitmap

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:110](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L110)

___

### physicalContactOccupiedToUnoccupiedDelay

• `Optional` **physicalContactOccupiedToUnoccupiedDelay**: ``null`` \| `number`

The PhysicalContactOccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact occupancy sensor changes to its unoccupied state after detecting the unoccupied event.
The null value indicates that the sensor does not report occupied to unoccupied transition.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.9.1

#### Inherited from

StateType.physicalContactOccupiedToUnoccupiedDelay

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:197](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L197)

___

### physicalContactUnoccupiedToOccupiedDelay

• `Optional` **physicalContactUnoccupiedToOccupiedDelay**: ``null`` \| `number`

The PhysicalContactUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact sensor changes to its occupied state after the detection of the occupied event.

The null value indicates that the sensor does not report unoccupied to occupied transition.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.9.2

#### Inherited from

StateType.physicalContactUnoccupiedToOccupiedDelay

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:211](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L211)

___

### physicalContactUnoccupiedToOccupiedThreshold

• `Optional` **physicalContactUnoccupiedToOccupiedThreshold**: `number`

The PhysicalContactUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection
events that must occur in the period PhysicalContactUnoccupiedToOccupiedDelay, before the PIR sensor
changes to its occupied state. This attribute is mandatory if the
PhysicalContactUnoccupiedToOccupiedDelay attribute is implemented.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.9.3

#### Inherited from

StateType.physicalContactUnoccupiedToOccupiedThreshold

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L225)

___

### pirOccupiedToUnoccupiedDelay

• `Optional` **pirOccupiedToUnoccupiedDelay**: `number`

The PIROccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its unoccupied state after the last detection of movement in the sensed area.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.7.1

#### Inherited from

StateType.pirOccupiedToUnoccupiedDelay

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:118](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L118)

___

### pirUnoccupiedToOccupiedDelay

• `Optional` **pirUnoccupiedToOccupiedDelay**: `number`

The PIRUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its occupied state after the detection of movement in the sensed area. This attribute is
mandatory if the PIRUnoccupiedToOccupiedThreshold attribute is implemented.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.7.2

#### Inherited from

StateType.pirUnoccupiedToOccupiedDelay

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:131](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L131)

___

### pirUnoccupiedToOccupiedThreshold

• `Optional` **pirUnoccupiedToOccupiedThreshold**: `number`

The PIRUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events that
must occur in the period PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied
state. This attribute is mandatory if the PIRUnoccupiedToOccupiedDelay attribute is implemented.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.7.3

#### Inherited from

StateType.pirUnoccupiedToOccupiedThreshold

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:144](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L144)

___

### ultrasonicOccupiedToUnoccupiedDelay

• `Optional` **ultrasonicOccupiedToUnoccupiedDelay**: `number`

The UltrasonicOccupiedToUnoccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its unoccupied state after the last detection of movement in the sensed
area.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.8.1

#### Inherited from

StateType.ultrasonicOccupiedToUnoccupiedDelay

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:157](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L157)

___

### ultrasonicUnoccupiedToOccupiedDelay

• `Optional` **ultrasonicUnoccupiedToOccupiedDelay**: `number`

The UltrasonicUnoccupiedToOccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its occupied state after the detection of movement in the sensed area. This
attribute is mandatory if the UltrasonicUnoccupiedToOccupiedThreshold attribute is implemented.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.8.2

#### Inherited from

StateType.ultrasonicUnoccupiedToOccupiedDelay

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:170](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L170)

___

### ultrasonicUnoccupiedToOccupiedThreshold

• `Optional` **ultrasonicUnoccupiedToOccupiedThreshold**: `number`

The UltrasonicUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events
that must occur in the period UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes
to its occupied state. This attribute is mandatory if the UltrasonicUnoccupiedToOccupiedDelay attribute
is implemented.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.8.3

#### Inherited from

StateType.ultrasonicUnoccupiedToOccupiedThreshold

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:184](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L184)
