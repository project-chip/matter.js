[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md) / [WindowCoveringServerLogic](../modules/behavior_definitions_window_covering_export.WindowCoveringServerLogic.md) / State

# Class: State

[behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md).[WindowCoveringServerLogic](../modules/behavior_definitions_window_covering_export.WindowCoveringServerLogic.md).State

## Hierarchy

- `State`

  ↳ **`State`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#constructor)

### Properties

- [configStatus](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#configstatus)
- [currentPositionLift](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#currentpositionlift)
- [currentPositionLiftPercent100ths](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#currentpositionliftpercent100ths)
- [currentPositionLiftPercentage](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#currentpositionliftpercentage)
- [currentPositionTilt](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#currentpositiontilt)
- [currentPositionTiltPercent100ths](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#currentpositiontiltpercent100ths)
- [currentPositionTiltPercentage](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#currentpositiontiltpercentage)
- [endProductType](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#endproducttype)
- [installedClosedLimitLift](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#installedclosedlimitlift)
- [installedClosedLimitTilt](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#installedclosedlimittilt)
- [installedOpenLimitLift](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#installedopenlimitlift)
- [installedOpenLimitTilt](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#installedopenlimittilt)
- [mode](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#mode)
- [numberOfActuationsLift](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#numberofactuationslift)
- [numberOfActuationsTilt](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#numberofactuationstilt)
- [operationalStatus](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#operationalstatus)
- [physicalClosedLimitLift](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#physicalclosedlimitlift)
- [physicalClosedLimitTilt](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#physicalclosedlimittilt)
- [safetyStatus](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#safetystatus)
- [supportsCalibration](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#supportscalibration)
- [supportsMaintenanceMode](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#supportsmaintenancemode)
- [targetPositionLiftPercent100ths](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#targetpositionliftpercent100ths)
- [targetPositionTiltPercent100ths](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#targetpositiontiltpercent100ths)
- [type](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md#type)

## Constructors

### constructor

• **new State**(): [`State`](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md)

#### Returns

[`State`](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md)

#### Inherited from

WindowCoveringServerBase.State.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

## Properties

### configStatus

• **configStatus**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

The ConfigStatus attribute makes configuration and status information available. To change settings,
devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.8

#### Inherited from

WindowCoveringServerBase.State.configStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:777](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L777)

___

### currentPositionLift

• `Optional` **currentPositionLift**: ``null`` \| `number`

The CurrentPositionLift attribute identifies the actual Lift position (in centimeters) of the window
covering from the fully-open position.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.4

#### Inherited from

WindowCoveringServerBase.State.currentPositionLift

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:358](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L358)

___

### currentPositionLiftPercent100ths

• **currentPositionLiftPercent100ths**: ``null`` \| `number`

The CurrentPositionLiftPercent100ths attribute identifies the actual position as a percentage with a
minimal step of 0.01%. E.g Max 10000 equals 100.00%.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.9

#### Inherited from

WindowCoveringServerBase.State.currentPositionLiftPercent100ths

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:539](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L539)

___

### currentPositionLiftPercentage

• `Optional` **currentPositionLiftPercentage**: ``null`` \| `number`

The CurrentPositionLiftPercentage attribute identifies the actual position as a percentage from 0% to
100% with 1% default step. This attribute is equal to CurrentPositionLiftPercent100ths attribute divided
by 100.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.11

#### Inherited from

WindowCoveringServerBase.State.currentPositionLiftPercentage

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:515](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L515)

___

### currentPositionTilt

• `Optional` **currentPositionTilt**: ``null`` \| `number`

The CurrentPositionTilt attribute identifies the actual Tilt position (in tenth of an degree) of the
window covering from the fully-open position.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.5

#### Inherited from

WindowCoveringServerBase.State.currentPositionTilt

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:402](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L402)

___

### currentPositionTiltPercent100ths

• **currentPositionTiltPercent100ths**: ``null`` \| `number`

The CurrentPositionTiltPercent100ths attribute identifies the actual position as a percentage with a
minimal step of 0.01%. E.g Max 10000 equals 100.00%.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.10

#### Inherited from

WindowCoveringServerBase.State.currentPositionTiltPercent100ths

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:606](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L606)

___

### currentPositionTiltPercentage

• `Optional` **currentPositionTiltPercentage**: ``null`` \| `number`

The CurrentPositionTiltPercentage attribute identifies the actual position as a percentage from 0% to
100% with 1% default step. This attribute is equal to CurrentPositionTiltPercent100ths attribute divided
by 100.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.12

#### Inherited from

WindowCoveringServerBase.State.currentPositionTiltPercentage

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:582](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L582)

___

### endProductType

• **endProductType**: [`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md)

The EndProductType attribute identifies the product type in complement of the main category indicated by
the Type attribute. The window covering shall set this value to one of the values in the table below.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.16

#### Inherited from

WindowCoveringServerBase.State.endProductType

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:800](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L800)

___

### installedClosedLimitLift

• **installedClosedLimitLift**: `number`

The InstalledClosedLimitLift attribute identifies the Closed Limit for Lifting the Window Covering
whether position (in centimeters) is encoded or timed.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.18

#### Inherited from

WindowCoveringServerBase.State.installedClosedLimitLift

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:374](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L374)

___

### installedClosedLimitTilt

• **installedClosedLimitTilt**: `number`

The InstalledClosedLimitTilt attribute identifies the Closed Limit for Tilting the Window Covering
whether position (in tenth of a degree) is encoded or timed.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.20

#### Inherited from

WindowCoveringServerBase.State.installedClosedLimitTilt

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:418](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L418)

___

### installedOpenLimitLift

• **installedOpenLimitLift**: `number`

The InstalledOpenLimitLift attribute identifies the Open Limit for Lifting the Window Covering whether
position (in centimeters) is encoded or timed.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.17

#### Inherited from

WindowCoveringServerBase.State.installedOpenLimitLift

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:366](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L366)

___

### installedOpenLimitTilt

• **installedOpenLimitTilt**: `number`

The InstalledOpenLimitTilt attribute identifies the Open Limit for Tilting the Window Covering whether
position (in tenth of a degree) is encoded or timed.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.19

#### Inherited from

WindowCoveringServerBase.State.installedOpenLimitTilt

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:410](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L410)

___

### mode

• **mode**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction,
placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling
the network, and disabling status LEDs. See below for details.

In the case a device does not support or implement a specific mode, e.g. the device has a specific
installation method and reversal is not relevant or the device does not include a maintenance mode, any
write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits set,
must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.21

#### Inherited from

WindowCoveringServerBase.State.mode

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:814](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L814)

___

### numberOfActuationsLift

• `Optional` **numberOfActuationsLift**: `number`

The NumberOfActuationsLift attribute identifies the total number of lift/slide actuations applied to the
Window Covering since the device was installed.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.6

#### Inherited from

WindowCoveringServerBase.State.numberOfActuationsLift

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:437](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L437)

___

### numberOfActuationsTilt

• `Optional` **numberOfActuationsTilt**: `number`

The NumberOfActuationsTilt attribute identifies the total number of tilt actuations applied to the
Window Covering since the device was installed.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.7

#### Inherited from

WindowCoveringServerBase.State.numberOfActuationsTilt

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:475](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L475)

___

### operationalStatus

• **operationalStatus**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>

The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
devices. See below for details about the meaning of individual bits.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.15

#### Inherited from

WindowCoveringServerBase.State.operationalStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:792](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L792)

___

### physicalClosedLimitLift

• `Optional` **physicalClosedLimitLift**: `number`

The PhysicalClosedLimitLift attribute identifies the maximum possible encoder position possible (in
centimeters) to position the height of the window covering Lift.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.2

#### Inherited from

WindowCoveringServerBase.State.physicalClosedLimitLift

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:350](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L350)

___

### physicalClosedLimitTilt

• `Optional` **physicalClosedLimitTilt**: `number`

The PhysicalClosedLimitTilt attribute identifies the maximum possible encoder position possible (tenth
of a degrees) to position the angle of the window covering Tilt.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.3

#### Inherited from

WindowCoveringServerBase.State.physicalClosedLimitTilt

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:394](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L394)

___

### safetyStatus

• `Optional` **safetyStatus**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
movements. By default for nominal operation all flags are cleared (0). A device might support none, one
or several bit flags from this attribute (all optional). See below for details about the meaning of
individual bits.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.22

#### Inherited from

WindowCoveringServerBase.State.safetyStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:828](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L828)

___

### supportsCalibration

• **supportsCalibration**: `boolean` = `false`

Does the device supports calibration?

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:716](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L716)

___

### supportsMaintenanceMode

• **supportsMaintenanceMode**: `boolean` = `true`

Does the device supports maintenance mode?

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:719](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L719)

___

### targetPositionLiftPercent100ths

• **targetPositionLiftPercent100ths**: ``null`` \| `number`

The TargetPositionLiftPercent100ths attribute identifies the position where the Window Covering Lift
will go or is moving to as a percentage.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.13

#### Inherited from

WindowCoveringServerBase.State.targetPositionLiftPercent100ths

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:527](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L527)

___

### targetPositionTiltPercent100ths

• **targetPositionTiltPercent100ths**: ``null`` \| `number`

The TargetPositionTiltPercent100ths attribute identifies the position where the Window Covering Tilt
will go or is moving to as a percentage.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.14

#### Inherited from

WindowCoveringServerBase.State.targetPositionTiltPercent100ths

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:594](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L594)

___

### type

• **type**: [`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md)

The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
set to one of the non-reserved values in the table below.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.1

#### Inherited from

WindowCoveringServerBase.State.type

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:768](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L768)
