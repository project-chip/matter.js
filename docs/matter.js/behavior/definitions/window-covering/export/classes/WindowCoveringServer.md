[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/window-covering/export](../README.md) / WindowCoveringServer

# Class: WindowCoveringServer

## Extends

- [`ClusterBehavior`](../../../../cluster/export/classes/ClusterBehavior.md)\<`this`\> & `Omit`\<[`WindowCoveringServerLogic`](WindowCoveringServerLogic.md), `"state"` \| `"initialize"` \| *typeof* `asyncDispose` \| `"events"` \| `"cluster"` \| `"goToLiftPercentage"` \| `"goToTiltPercentage"` \| `"goToLiftValue"` \| `"goToTiltValue"` \| keyof Base \| `"handleMovement"` \| `"handleStopMovement"` \| `"executeCalibration"`\> & [`Base`](../namespaces/WindowCoveringInterface/interfaces/Base.md) & `Omit`\<`object` & `object`, keyof [`Base`](../namespaces/WindowCoveringInterface/interfaces/Base.md)\> & `object` & `object`

## Constructors

### new WindowCoveringServer()

> **new WindowCoveringServer**(`agent`, `backing`): [`WindowCoveringServer`](WindowCoveringServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`WindowCoveringServer`](WindowCoveringServer.md)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, readonly [[`Lift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#lift), [`Tilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#tilt), [`PositionAwareLift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawarelift), [`PositionAwareTilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawaretilt), [`AbsolutePosition`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#absoluteposition)]\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`WindowCoveringInterface`](../README.md#windowcoveringinterface)\>, [`WindowCoveringInterface`](../README.md#windowcoveringinterface)\>\>, `"type$Changing"` \| `"configStatus$Changing"` \| `"operationalStatus$Changing"` \| `"endProductType$Changing"` \| `"mode$Changing"` \| `"safetyStatus$Changing"` \| `"type$Changed"` \| `"configStatus$Changed"` \| `"operationalStatus$Changed"` \| `"endProductType$Changed"` \| `"mode$Changed"` \| `"safetyStatus$Changed"` \| `"installedOpenLimitLift$Changing"` \| `"installedClosedLimitLift$Changing"` \| `"installedOpenLimitTilt$Changing"` \| `"installedClosedLimitTilt$Changing"` \| `"targetPositionLiftPercent100ths$Changing"` \| `"currentPositionLiftPercent100ths$Changing"` \| `"targetPositionTiltPercent100ths$Changing"` \| `"currentPositionTiltPercent100ths$Changing"` \| `"physicalClosedLimitLift$Changing"` \| `"currentPositionLift$Changing"` \| `"physicalClosedLimitTilt$Changing"` \| `"currentPositionTilt$Changing"` \| `"numberOfActuationsLift$Changing"` \| `"numberOfActuationsTilt$Changing"` \| `"currentPositionLiftPercentage$Changing"` \| `"currentPositionTiltPercentage$Changing"` \| `"installedOpenLimitLift$Changed"` \| `"installedClosedLimitLift$Changed"` \| `"installedOpenLimitTilt$Changed"` \| `"installedClosedLimitTilt$Changed"` \| `"targetPositionLiftPercent100ths$Changed"` \| `"currentPositionLiftPercent100ths$Changed"` \| `"targetPositionTiltPercent100ths$Changed"` \| `"currentPositionTiltPercent100ths$Changed"` \| `"physicalClosedLimitLift$Changed"` \| `"currentPositionLift$Changed"` \| `"physicalClosedLimitTilt$Changed"` \| `"currentPositionTilt$Changed"` \| `"numberOfActuationsLift$Changed"` \| `"numberOfActuationsTilt$Changed"` \| `"currentPositionLiftPercentage$Changed"` \| `"currentPositionTiltPercentage$Changed"`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### configStatus$Changing

> **configStatus$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### endProductType$Changing

> **endProductType$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`EndProductType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/EndProductType.md), `any`\>\>

##### mode$Changing

> **mode$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### operationalStatus$Changing

> **operationalStatus$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### type$Changing

> **type$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`WindowCoveringType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/WindowCoveringType.md), `any`\>\>

#### Type declaration

##### safetyStatus$Changing

> **safetyStatus$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

#### Type declaration

##### configStatus$Changed

> **configStatus$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### endProductType$Changed

> **endProductType$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`EndProductType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/EndProductType.md), `any`\>\>

##### mode$Changed

> **mode$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### operationalStatus$Changed

> **operationalStatus$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### type$Changed

> **type$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`WindowCoveringType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/WindowCoveringType.md), `any`\>\>

#### Type declaration

##### safetyStatus$Changed

> **safetyStatus$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: [`FeaturesAsFlags`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featuresasflagsclustertflagst)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, readonly [[`Lift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#lift), [`Tilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#tilt), [`PositionAwareLift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawarelift), [`PositionAwareTilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawaretilt), [`AbsolutePosition`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#absoluteposition)]\>

Supported features as a flag object.

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<[`State`](../namespaces/WindowCoveringServerLogic/classes/State.md), `"type"` \| `"mode"` \| `"physicalClosedLimitLift"` \| `"currentPositionLift"` \| `"installedOpenLimitLift"` \| `"installedClosedLimitLift"` \| `"physicalClosedLimitTilt"` \| `"currentPositionTilt"` \| `"installedOpenLimitTilt"` \| `"installedClosedLimitTilt"` \| `"numberOfActuationsLift"` \| `"numberOfActuationsTilt"` \| `"currentPositionLiftPercentage"` \| `"targetPositionLiftPercent100ths"` \| `"currentPositionLiftPercent100ths"` \| `"currentPositionTiltPercentage"` \| `"targetPositionTiltPercent100ths"` \| `"currentPositionTiltPercent100ths"` \| `"configStatus"` \| `"operationalStatus"` \| `"endProductType"` \| `"safetyStatus"`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### configStatus

> **configStatus**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The ConfigStatus attribute makes configuration and status information available. To change settings,
devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.

###### See

MatterSpecification.v11.Cluster § 5.3.5.8

###### Type declaration

###### liftEncoderControlled

> **liftEncoderControlled**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an
encoder for positioning the height of the window covering.

###### liftMovementReversed

> **liftMovementReversed**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Reversal: This status bit identifies if the directions of the lift/slide movements have been reversed in
order for commands (e.g: Open, Close, GoTos) to match the physical installation conditionsThis bit can be
adjusted by setting the appropriate reversal bit value in the Mode attribute

###### liftPositionAware

> **liftPositionAware**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Control - Lift: This status bit identifies if the window covering supports the Position Aware Lift Control

###### onlineReserved

> **onlineReserved**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

deprecated

###### operational

> **operational**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Operational: This status bit defines if the Window Covering is operational.The SafetyStatus & Mode
attributes might affect this bit

###### tiltEncoderControlled

> **tiltEncoderControlled**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an
encoder for tilting the window covering.

###### tiltPositionAware

> **tiltPositionAware**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Control - Tilt: This status bit identifies if the window covering supports the Position Aware Tilt Control

##### mode

> **mode**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction,
placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling
the network, and disabling status LEDs. See below for details.

In the case a device does not support or implement a specific mode, e.g. the device has a specific
installation method and reversal is not relevant or the device does not include a maintenance mode, any
write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits set,
must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.

###### See

MatterSpecification.v11.Cluster § 5.3.5.21

###### Type declaration

###### calibrationMode

> **calibrationMode**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

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

###### ledFeedback

> **ledFeedback**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Disables (0) or Enables (1) the display of any feedback LEDs resident especially on the packaging of an
endpoint where they may cause distraction to the occupant.

###### maintenanceMode

> **maintenanceMode**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Disables (0) or Enables (1) placing the Window Covering into Maintenance Mode where it cannot be moved over
the network or by a switch connected to a Local Switch Input.While in maintenance mode, all commands (e.g:
UpOrOpen, DownOrClose, GoTos) that can result in movement, must be ignored and respond with a BUSY status.
Additionally, the operational bit of the ConfigStatus attribute should be set to its not operational value.

###### motorDirectionReversed

> **motorDirectionReversed**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Disables (0) or Enables (1) Lift reversal

##### operationalStatus

> **operationalStatus**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
devices. See below for details about the meaning of individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.15

###### Type declaration

###### global

> **global**: [`BitFieldEnum`](../../../../../schema/export/README.md#bitfieldenume)\<[`MovementStatus`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/MovementStatus.md)\>

Movement status of the cover

###### lift

> **lift**: [`BitFieldEnum`](../../../../../schema/export/README.md#bitfieldenume)\<[`MovementStatus`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/MovementStatus.md)\>

Movement status of the cover's lift function

###### tilt

> **tilt**: [`BitFieldEnum`](../../../../../schema/export/README.md#bitfieldenume)\<[`MovementStatus`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/MovementStatus.md)\>

Movement status of the cover's tilt function

#### Type declaration

##### safetyStatus?

> `optional` **safetyStatus**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
movements. By default for nominal operation all flags are cleared (0). A device might support none, one
or several bit flags from this attribute (all optional). See below for details about the meaning of
individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.22

###### Type declaration

###### failedCommunication

> **failedCommunication**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Communication failure to sensors or other safety equipment.

###### hardwareFailure

> **hardwareFailure**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

PCB, fuse and other electrics problems.

###### manualOperation

> **manualOperation**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled).

###### motorJammed

> **motorJammed**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Mechanical problem related to the motor(s) detected.

###### obstacleDetected

> **obstacleDetected**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

An obstacle is preventing actuator movement.

###### positionFailure

> **positionFailure**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Device has failed to reach the desired position. e.g. with Position Aware device, time expired before
TargetPosition is reached.

###### power

> **power**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power
might not be fully available at the moment.

###### protection

> **protection**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Protection is activated.

###### remoteLockout

> **remoteLockout**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range.

###### stopInput

> **stopInput**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335).

###### tamperDetection

> **tamperDetection**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without
its actuator(s).

###### thermalProtection

> **thermalProtection**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Motor(s) and/or electric circuit thermal protection activated.

#### Type declaration

##### endProductType

> **endProductType**: [`EndProductType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/EndProductType.md)

The EndProductType attribute identifies the product type in complement of the main category indicated by
the Type attribute. The window covering shall set this value to one of the values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.16

##### type

> **type**: [`WindowCoveringType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/WindowCoveringType.md)

The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
set to one of the non-reserved values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.1

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).state`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`WindowCoveringServerLogic`](../namespaces/WindowCoveringServerLogic/README.md)\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### ExtensionInterface

> `static` `readonly` **ExtensionInterface**: `object`

#### executeCalibration()

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### handleMovement()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`MovementType`](../enumerations/MovementType.md) |
| `reversed` | `boolean` |
| `direction` | [`MovementDirection`](../enumerations/MovementDirection.md) |
| `targetPercent100ths`? | `number` |

##### Returns

`Promise`\<`void`\>

#### handleStopMovement()

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).ExtensionInterface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

***

### Interface

> `static` `readonly` **Interface**: [`WindowCoveringInterface`](../README.md#windowcoveringinterface)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### Internal

> `static` `readonly` **Internal**: *typeof* [`Internal`](../namespaces/WindowCoveringServerLogic/classes/Internal.md)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).Internal`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

***

### State()

> `static` `readonly` **State**: () => [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`WindowCoveringServerLogic`](../namespaces/WindowCoveringServerLogic/README.md)\>

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`WindowCoveringServerLogic`](../namespaces/WindowCoveringServerLogic/README.md)\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).State`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

***

### cluster

> `static` `readonly` **cluster**: [`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.configStatus

> `readonly` **configStatus**: [`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The ConfigStatus attribute makes configuration and status information available. To change settings,
devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.

###### See

MatterSpecification.v11.Cluster § 5.3.5.8

##### attributes.endProductType

> `readonly` **endProductType**: [`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`EndProductType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/EndProductType.md), `any`\>

The EndProductType attribute identifies the product type in complement of the main category indicated by
the Type attribute. The window covering shall set this value to one of the values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.16

##### attributes.mode

> `readonly` **mode**: [`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction,
placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling
the network, and disabling status LEDs. See below for details.

In the case a device does not support or implement a specific mode, e.g. the device has a specific
installation method and reversal is not relevant or the device does not include a maintenance mode, any
write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits set,
must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.

###### See

MatterSpecification.v11.Cluster § 5.3.5.21

##### attributes.operationalStatus

> `readonly` **operationalStatus**: [`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
devices. See below for details about the meaning of individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.15

##### attributes.safetyStatus

> `readonly` **safetyStatus**: [`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
movements. By default for nominal operation all flags are cleared (0). A device might support none, one
or several bit flags from this attribute (all optional). See below for details about the meaning of
individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.22

##### attributes.type

> `readonly` **type**: [`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`WindowCoveringType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/WindowCoveringType.md), `any`\>

The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
set to one of the non-reserved values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.1

##### commands

> `readonly` **commands**: `object`

##### commands.downOrClose

> `readonly` **downOrClose**: [`Command`](../../../../../cluster/export/interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide
and tilt is at the maximum closed/down position. This will happen as fast as possible. The server
attributes supported shall be updated as follows:

if Position Aware feature is supported:

  • TargetPositionLiftPercent100ths attribute shall be set to 100.00%.

  • TargetPositionTiltPercent100ths attribute shall be set to 100.00%.

The server positioning attributes will follow the movements, once the movement has successfully
finished, the server attributes shall be updated as follows:

if Position Aware feature is supported:

  • CurrentPositionLiftPercent100ths attribute shall be 100.00%.

  • CurrentPositionLiftPercentage attribute shall be 100%.

  • CurrentPositionTiltPercent100ths attribute shall be 100.00%.

  • CurrentPositionTiltPercentage attribute shall be 100%. if Absolute Position feature is supported:

  • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute.

  • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute.

###### See

MatterSpecification.v11.Cluster § 5.3.6.2

##### commands.stopMotion

> `readonly` **stopMotion**: [`Command`](../../../../../cluster/export/interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
lift/slide that is currently occurring. The server attributes supported shall be updated as follows:

  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
    value.

  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
    value.

###### See

MatterSpecification.v11.Cluster § 5.3.6.3

##### commands.upOrOpen

> `readonly` **upOrOpen**: [`Command`](../../../../../cluster/export/interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide
and tilt is at the maximum open/up position. This will happen as fast as possible. The server attributes
shall be updated as follows:

if Position Aware feature is supported:

  • TargetPositionLiftPercent100ths attribute shall be set to 0.00%.

  • TargetPositionTiltPercent100ths attribute shall be set to 0.00%.

The server positioning attributes will follow the movements, once the movement has successfully
finished, the server attributes shall be updated as follows:

if Position Aware feature is supported:

  • CurrentPositionLiftPercent100ths attribute shall be 0.00%.

  • CurrentPositionLiftPercentage attribute shall be 0%.

  • CurrentPositionTiltPercent100ths attribute shall be 0.00%.

  • CurrentPositionTiltPercentage attribute shall be 0%. if Absolute Position feature is supported:

  • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute.

  • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute.

###### See

MatterSpecification.v11.Cluster § 5.3.6.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which WindowCoveringCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.absolutePosition

> `readonly` **absolutePosition**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

AbsolutePosition

Absolute positioning is supported.

##### features.lift

> `readonly` **lift**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Lift

Lift Control and behavior for lifting/sliding window coverings

##### features.positionAwareLift

> `readonly` **positionAwareLift**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

PositionAwareLift

Position Aware lift control is supported.

##### features.positionAwareTilt

> `readonly` **positionAwareTilt**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

PositionAwareTilt

Position Aware tilt control is supported.

##### features.tilt

> `readonly` **tilt**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Tilt

Tilt Control and behavior for tilting window coverings

##### id

> `readonly` **id**: `258` = `0x102`

##### name

> `readonly` **name**: `"WindowCovering"` = `"WindowCovering"`

##### revision

> `readonly` **revision**: `5` = `5`

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`WindowCoveringServerLogic`](../namespaces/WindowCoveringServerLogic/README.md)\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"windowCovering"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).supervisor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

***

### supports()

> `static` **supports**: (`other`) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`boolean`

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).[asyncDispose]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L198)

***

### asAdmin()

> **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).asAdmin`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L125)

***

### assertAttributeEnabled()

> **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).assertAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

***

### callback()

> `protected` **callback**\<`A`, `R`\>(`reactor`, `options`?): (...`args`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../../../../export/README.md#reactortr).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* `any`[] |
| `R` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`A`, `R`\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).callback`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### downOrClose()

> **downOrClose**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and
tilt is at the maximum closed/down position. This will happen as fast as possible. The server attributes
supported shall be updated as follows:

if Position Aware feature is supported:

  • TargetPositionLiftPercent100ths attribute shall be set to 100.00%.

  • TargetPositionTiltPercent100ths attribute shall be set to 100.00%.

The server positioning attributes will follow the movements, once the movement has successfully finished,
the server attributes shall be updated as follows:

if Position Aware feature is supported:

  • CurrentPositionLiftPercent100ths attribute shall be 100.00%.

  • CurrentPositionLiftPercentage attribute shall be 100%.

  • CurrentPositionTiltPercent100ths attribute shall be 100.00%.

  • CurrentPositionTiltPercentage attribute shall be 100%. if Absolute Position feature is supported:

  • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute.

  • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).downOrClose`

#### See

MatterSpecification.v11.Cluster § 5.3.6.2

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L140)

***

### executeCalibration()

> **executeCalibration**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).executeCalibration`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:730](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L730)

***

### handleMovement()

> **handleMovement**(`type`, `reversed`, `direction`, `targetPercent100ths`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`MovementType`](../enumerations/MovementType.md) |
| `reversed` | `boolean` |
| `direction` | [`MovementDirection`](../enumerations/MovementDirection.md) |
| `targetPercent100ths`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).handleMovement`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:723](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L723)

***

### handleStopMovement()

> **handleStopMovement**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).handleStopMovement`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:729](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L729)

***

### initialize()

> **initialize**(`_options`?): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_options`? | `object` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).initialize`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L192)

***

### reactTo()

> `protected` **reactTo**\<`O`\>(`observable`, `reactor`, `options`?): `void`

Install a [Reactor](../../../../export/README.md#reactortr).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `O` *extends* [`Observable`](../../../../../util/export/interfaces/Observable.md)\<`any`[], `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`Parameters`\<`O`\[`"emit"`\]\>, `ReturnType`\<`O`\[`"emit"`\]\>\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`void`

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).reactTo`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L212)

***

### requireAttributeEnabled()

> **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### stopMotion()

> **stopMotion**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
lift/slide that is currently occurring. The server attributes supported shall be updated as follows:

  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
    value.

  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
    value.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).stopMotion`

#### See

MatterSpecification.v11.Cluster § 5.3.6.3

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L154)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).toString`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)

***

### upOrOpen()

> **upOrOpen**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and
tilt is at the maximum open/up position. This will happen as fast as possible. The server attributes shall
be updated as follows:

if Position Aware feature is supported:

  • TargetPositionLiftPercent100ths attribute shall be set to 0.00%.

  • TargetPositionTiltPercent100ths attribute shall be set to 0.00%.

The server positioning attributes will follow the movements, once the movement has successfully finished,
the server attributes shall be updated as follows:

if Position Aware feature is supported:

  • CurrentPositionLiftPercent100ths attribute shall be 0.00%.

  • CurrentPositionLiftPercentage attribute shall be 0%.

  • CurrentPositionTiltPercent100ths attribute shall be 0.00%.

  • CurrentPositionTiltPercentage attribute shall be 0%. if Absolute Position feature is supported:

  • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute.

  • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).upOrOpen`

#### See

MatterSpecification.v11.Cluster § 5.3.6.1

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L108)

***

### alter()

> `static` **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `AlterationsT` *extends* [`Alterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#alterationsoriginalt)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).alter`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

***

### enable()

> `static` **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `FlagsT` *extends* [`ElementFlags`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagsclustert)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).enable`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

***

### for()

> `static` **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema`?): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `ClusterT` *extends* [`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema`? | [`Schema`](../../../../cluster/export/-internal-/README.md#schema) |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).for`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

***

### set()

> `static` **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../../../../../cluster/export/namespaces/ClusterType/README.md#relaxtypesv)\<`InstanceType`\<`This`\[`"State"`\]\>\>\> |

#### Returns

`This`

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).set`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

***

### with()

> `static` **with**\<`This`, `FeaturesT`\>(`this`, ...`features`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `FeaturesT` *extends* [`FeatureSelection`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featureselectiont)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| ...`features` | `FeaturesT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
