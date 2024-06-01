[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/window-covering/export](../README.md) / WindowCoveringBehavior

# Interface: WindowCoveringBehavior

## Extends

- [`WindowCoveringBehaviorType`](../-internal-/README.md#windowcoveringbehaviortype)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`WindowCoveringBehaviorType.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`WindowCoveringBehaviorType.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`WindowCoveringBehaviorType.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`WindowCoveringBehaviorType.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`WindowCoveringBehaviorType.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`WindowCoveringBehaviorType.endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

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

`WindowCoveringBehaviorType.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

`WindowCoveringBehaviorType.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`WindowCoveringBehaviorType.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object`

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

`WindowCoveringBehaviorType.state`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`WindowCoveringBehaviorType.[asyncDispose]`

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

`WindowCoveringBehaviorType.asAdmin`

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

`WindowCoveringBehaviorType.assertAttributeEnabled`

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

`WindowCoveringBehaviorType.callback`

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

`WindowCoveringBehaviorType.downOrClose`

#### See

MatterSpecification.v11.Cluster § 5.3.6.2

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L140)

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

`WindowCoveringBehaviorType.initialize`

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

`WindowCoveringBehaviorType.reactTo`

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

`WindowCoveringBehaviorType.requireAttributeEnabled`

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

`WindowCoveringBehaviorType.stopMotion`

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

`WindowCoveringBehaviorType.toString`

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

`WindowCoveringBehaviorType.upOrOpen`

#### See

MatterSpecification.v11.Cluster § 5.3.6.1

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L108)
