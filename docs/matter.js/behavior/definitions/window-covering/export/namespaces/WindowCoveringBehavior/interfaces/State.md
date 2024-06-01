[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/window-covering/export](../../../README.md) / [WindowCoveringBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### configStatus

> **configStatus**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The ConfigStatus attribute makes configuration and status information available. To change settings,
devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.

#### See

MatterSpecification.v11.Cluster § 5.3.5.8

#### Type declaration

##### liftEncoderControlled

> **liftEncoderControlled**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an
encoder for positioning the height of the window covering.

##### liftMovementReversed

> **liftMovementReversed**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Reversal: This status bit identifies if the directions of the lift/slide movements have been reversed in
order for commands (e.g: Open, Close, GoTos) to match the physical installation conditionsThis bit can be
adjusted by setting the appropriate reversal bit value in the Mode attribute

##### liftPositionAware

> **liftPositionAware**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Control - Lift: This status bit identifies if the window covering supports the Position Aware Lift Control

##### onlineReserved

> **onlineReserved**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

deprecated

##### operational

> **operational**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Operational: This status bit defines if the Window Covering is operational.The SafetyStatus & Mode
attributes might affect this bit

##### tiltEncoderControlled

> **tiltEncoderControlled**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an
encoder for tilting the window covering.

##### tiltPositionAware

> **tiltPositionAware**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Control - Tilt: This status bit identifies if the window covering supports the Position Aware Tilt Control

#### Inherited from

`StateType.configStatus`

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:777](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L777)

***

### endProductType

> **endProductType**: [`EndProductType`](../../../../../../../cluster/export/namespaces/WindowCovering/enumerations/EndProductType.md)

The EndProductType attribute identifies the product type in complement of the main category indicated by
the Type attribute. The window covering shall set this value to one of the values in the table below.

#### See

MatterSpecification.v11.Cluster § 5.3.5.16

#### Inherited from

`StateType.endProductType`

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:800](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L800)

***

### mode

> **mode**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction,
placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling
the network, and disabling status LEDs. See below for details.

In the case a device does not support or implement a specific mode, e.g. the device has a specific
installation method and reversal is not relevant or the device does not include a maintenance mode, any
write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits set,
must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.

#### See

MatterSpecification.v11.Cluster § 5.3.5.21

#### Type declaration

##### calibrationMode

> **calibrationMode**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Disabled (0) or Enabled (1) placing the Window Covering into calibration Mode where limits are either setup
using tools or learned by the Window Covering by doing self-calibration.If in calibration mode, all commands
(e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, could be accepted and result in a
self-calibration being initiated before the command is executed. In case the Window Covering does not have
the ability or is not able to perform a self-calibration, the command SHOULD be ignored and a FAILURE status
SHOULD be returned.In a write interaction, setting this bit to 0, while the device is in calibration mode,
is not allowed and SHALL generate a FAILURE error status. In order to leave calibration mode, the device
must perform its calibration routine, either as a self- calibration or assisted by external tool(s),
depending on the device/manufacturer implementation.A manufacturer might choose to set the operational bit
to its not operational value, if applicable during calibration mode

##### ledFeedback

> **ledFeedback**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Disables (0) or Enables (1) the display of any feedback LEDs resident especially on the packaging of an
endpoint where they may cause distraction to the occupant.

##### maintenanceMode

> **maintenanceMode**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Disables (0) or Enables (1) placing the Window Covering into Maintenance Mode where it cannot be moved over
the network or by a switch connected to a Local Switch Input.While in maintenance mode, all commands (e.g:
UpOrOpen, DownOrClose, GoTos) that can result in movement, must be ignored and respond with a BUSY status.
Additionally, the operational bit of the ConfigStatus attribute should be set to its not operational value.

##### motorDirectionReversed

> **motorDirectionReversed**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Disables (0) or Enables (1) Lift reversal

#### Inherited from

`StateType.mode`

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:814](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L814)

***

### operationalStatus

> **operationalStatus**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
devices. See below for details about the meaning of individual bits.

#### See

MatterSpecification.v11.Cluster § 5.3.5.15

#### Type declaration

##### global

> **global**: [`BitFieldEnum`](../../../../../../../schema/export/README.md#bitfieldenume)\<[`MovementStatus`](../../../../../../../cluster/export/namespaces/WindowCovering/enumerations/MovementStatus.md)\>

Movement status of the cover

##### lift

> **lift**: [`BitFieldEnum`](../../../../../../../schema/export/README.md#bitfieldenume)\<[`MovementStatus`](../../../../../../../cluster/export/namespaces/WindowCovering/enumerations/MovementStatus.md)\>

Movement status of the cover's lift function

##### tilt

> **tilt**: [`BitFieldEnum`](../../../../../../../schema/export/README.md#bitfieldenume)\<[`MovementStatus`](../../../../../../../cluster/export/namespaces/WindowCovering/enumerations/MovementStatus.md)\>

Movement status of the cover's tilt function

#### Inherited from

`StateType.operationalStatus`

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:792](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L792)

***

### safetyStatus?

> `optional` **safetyStatus**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
movements. By default for nominal operation all flags are cleared (0). A device might support none, one
or several bit flags from this attribute (all optional). See below for details about the meaning of
individual bits.

#### See

MatterSpecification.v11.Cluster § 5.3.5.22

#### Type declaration

##### failedCommunication

> **failedCommunication**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Communication failure to sensors or other safety equipment.

##### hardwareFailure

> **hardwareFailure**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

PCB, fuse and other electrics problems.

##### manualOperation

> **manualOperation**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled).

##### motorJammed

> **motorJammed**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Mechanical problem related to the motor(s) detected.

##### obstacleDetected

> **obstacleDetected**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

An obstacle is preventing actuator movement.

##### positionFailure

> **positionFailure**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Device has failed to reach the desired position. e.g. with Position Aware device, time expired before
TargetPosition is reached.

##### power

> **power**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power
might not be fully available at the moment.

##### protection

> **protection**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Protection is activated.

##### remoteLockout

> **remoteLockout**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range.

##### stopInput

> **stopInput**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335).

##### tamperDetection

> **tamperDetection**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without
its actuator(s).

##### thermalProtection

> **thermalProtection**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

Motor(s) and/or electric circuit thermal protection activated.

#### Inherited from

`StateType.safetyStatus`

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:828](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L828)

***

### type

> **type**: [`WindowCoveringType`](../../../../../../../cluster/export/namespaces/WindowCovering/enumerations/WindowCoveringType.md)

The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
set to one of the non-reserved values in the table below.

#### See

MatterSpecification.v11.Cluster § 5.3.5.1

#### Inherited from

`StateType.type`

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:768](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L768)
