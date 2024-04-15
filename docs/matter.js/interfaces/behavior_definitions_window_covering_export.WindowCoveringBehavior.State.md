[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md) / [WindowCoveringBehavior](../modules/behavior_definitions_window_covering_export.WindowCoveringBehavior.md) / State

# Interface: State

[behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md).[WindowCoveringBehavior](../modules/behavior_definitions_window_covering_export.WindowCoveringBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_window_covering_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [configStatus](behavior_definitions_window_covering_export.WindowCoveringBehavior.State.md#configstatus)
- [endProductType](behavior_definitions_window_covering_export.WindowCoveringBehavior.State.md#endproducttype)
- [mode](behavior_definitions_window_covering_export.WindowCoveringBehavior.State.md#mode)
- [operationalStatus](behavior_definitions_window_covering_export.WindowCoveringBehavior.State.md#operationalstatus)
- [safetyStatus](behavior_definitions_window_covering_export.WindowCoveringBehavior.State.md#safetystatus)
- [type](behavior_definitions_window_covering_export.WindowCoveringBehavior.State.md#type)

## Properties

### configStatus

• **configStatus**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

The ConfigStatus attribute makes configuration and status information available. To change settings,
devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.8

#### Inherited from

StateType.configStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:777](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L777)

___

### endProductType

• **endProductType**: [`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md)

The EndProductType attribute identifies the product type in complement of the main category indicated by
the Type attribute. The window covering shall set this value to one of the values in the table below.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.16

#### Inherited from

StateType.endProductType

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:800](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L800)

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

StateType.mode

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:814](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L814)

___

### operationalStatus

• **operationalStatus**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>

The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
devices. See below for details about the meaning of individual bits.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.15

#### Inherited from

StateType.operationalStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:792](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L792)

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

StateType.safetyStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:828](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L828)

___

### type

• **type**: [`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md)

The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
set to one of the non-reserved values in the table below.

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.1

#### Inherited from

StateType.type

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:768](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L768)
