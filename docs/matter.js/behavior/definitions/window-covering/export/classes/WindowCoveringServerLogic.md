[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/window-covering/export](../README.md) / WindowCoveringServerLogic

# Class: WindowCoveringServerLogic

This is the default server implementation of [WindowCoveringBehavior](../README.md#windowcoveringbehavior).

This implementation includes all features of [WindowCovering.Cluster](../../../../../cluster/export/namespaces/WindowCovering/README.md#cluster) and implements all mandatory commands.
You should use [WindowCoveringServer.with](WindowCoveringServer.md#with) to specialize the class for the features your implementation
supports.

If you enable position awareness (positionAware* features), the default logic automatically syncs current positions
and operational state when the currentPosition*Percent100ths attributes change. You should update
currentPosition*Percent100ths with the actual position from your device.  This updates other attributes
automatically.

When targetPosition*Percent100ths attributes change, operational state updates bases on the current and target
values.

If you do not override [handleMovement](WindowCoveringServerLogic.md#handlemovement) the default implementation updates current position to the target
position immediately.

In addition to Matter attributes, [WindowCoveringServerLogic.State](../namespaces/WindowCoveringServerLogic/classes/State.md) includes the following configuration
properties:

  * supportsCalibration (default false): Set to true if the device supports calibration. You must implement
    [WindowCoveringServerLogic.executeCalibration](WindowCoveringServerLogic.md#executecalibration) to perform actual calibration.

  * supportsMaintenanceMode (default true): Set to false if the device has no maintenance mode

When developing for specific hardware you should extend [WindowCoveringServer](WindowCoveringServer.md) and implement the following
methods to map movement to your device. The default implementation maps Matter commands to these methods. The benefit
of this structure is that basic data validations and option checks are already done and you can focus on the actual
hardware interaction:

  * [WindowCoveringServerLogic.handleMovement](WindowCoveringServerLogic.md#handlemovement) Logic to actually move the device. Via Parameters the movement
    type (Lift/Tilt), direction, target percentage and information if motor is configured reversed are provided. When
    the device moves the current Positions (if supported by the device) are updated with the movement. The
    operational state is automatically updated by the default implementation based on current and target values of
    the cluster state.

  * [WindowCoveringServerLogic.handleStopMovement](WindowCoveringServerLogic.md#handlestopmovement) Logic to stop any movement of the device. You can use the
    super.handleStopMovement() to set the target positions to the current positions or do this yourself.

  * [WindowCoveringServerLogic.executeCalibration](WindowCoveringServerLogic.md#executecalibration) If supported, override this method to implement the
    calibration process. The default implementation returns an error to indicate calibration is unsupported. If
    unsupported you should also add a Changing event handler to the mode attribute to ensure calibration mode is not
    set (needs to throw an ConstraintError).

IMPORTANT NOTE:

This default implementation could have pitfalls when the calibration process and/or movement is handled via long
running promises. There could be edge cases not correctly handled by the current implementation when it comes to long
running movements or calibration processes - especially when these processes are long running async JS operations.

A movement coming in while another movement is still running is assumed to be handled by the device. It is not
handled here. If this causes you trouble please provide feedback and we can discuss how to improve the default
implementation.

## Extends

- [`WindowCoveringServerBase`](../-internal-/README.md#windowcoveringserverbase)

## Constructors

### new WindowCoveringServerLogic()

> **new WindowCoveringServerLogic**(`agent`, `backing`): [`WindowCoveringServerLogic`](WindowCoveringServerLogic.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`WindowCoveringServerLogic`](WindowCoveringServerLogic.md)

#### Inherited from

`WindowCoveringServerBase.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`WindowCoveringServerBase.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`WindowCoveringServerBase.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`WindowCoveringServerBase.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`WindowCoveringServerBase.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`WindowCoveringServerBase.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`WindowCoveringServerBase.endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`WindowCoveringInterface`](../README.md#windowcoveringinterface)\>\>, `"type$Changing"` \| `"configStatus$Changing"` \| `"operationalStatus$Changing"` \| `"endProductType$Changing"` \| `"mode$Changing"` \| `"safetyStatus$Changing"` \| `"type$Changed"` \| `"configStatus$Changed"` \| `"operationalStatus$Changed"` \| `"endProductType$Changed"` \| `"mode$Changed"` \| `"safetyStatus$Changed"`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### configStatus$Changing

> **configStatus$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### currentPositionLiftPercent100ths$Changing

> **currentPositionLiftPercent100ths$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### currentPositionTiltPercent100ths$Changing

> **currentPositionTiltPercent100ths$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### endProductType$Changing

> **endProductType$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`EndProductType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/EndProductType.md), `any`\>\>

##### installedClosedLimitLift$Changing

> **installedClosedLimitLift$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### installedClosedLimitTilt$Changing

> **installedClosedLimitTilt$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### installedOpenLimitLift$Changing

> **installedOpenLimitLift$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### installedOpenLimitTilt$Changing

> **installedOpenLimitTilt$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### mode$Changing

> **mode$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### operationalStatus$Changing

> **operationalStatus$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### targetPositionLiftPercent100ths$Changing

> **targetPositionLiftPercent100ths$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### targetPositionTiltPercent100ths$Changing

> **targetPositionTiltPercent100ths$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### type$Changing

> **type$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`WindowCoveringType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/WindowCoveringType.md), `any`\>\>

#### Type declaration

##### currentPositionLift$Changing

> **currentPositionLift$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### currentPositionLiftPercentage$Changing

> **currentPositionLiftPercentage$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### currentPositionTilt$Changing

> **currentPositionTilt$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### currentPositionTiltPercentage$Changing

> **currentPositionTiltPercentage$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### numberOfActuationsLift$Changing

> **numberOfActuationsLift$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### numberOfActuationsTilt$Changing

> **numberOfActuationsTilt$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### physicalClosedLimitLift$Changing

> **physicalClosedLimitLift$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### physicalClosedLimitTilt$Changing

> **physicalClosedLimitTilt$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### safetyStatus$Changing

> **safetyStatus$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

#### Type declaration

##### configStatus$Changed

> **configStatus$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### currentPositionLiftPercent100ths$Changed

> **currentPositionLiftPercent100ths$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### currentPositionTiltPercent100ths$Changed

> **currentPositionTiltPercent100ths$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### endProductType$Changed

> **endProductType$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`EndProductType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/EndProductType.md), `any`\>\>

##### installedClosedLimitLift$Changed

> **installedClosedLimitLift$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### installedClosedLimitTilt$Changed

> **installedClosedLimitTilt$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### installedOpenLimitLift$Changed

> **installedOpenLimitLift$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### installedOpenLimitTilt$Changed

> **installedOpenLimitTilt$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### mode$Changed

> **mode$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### operationalStatus$Changed

> **operationalStatus$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### targetPositionLiftPercent100ths$Changed

> **targetPositionLiftPercent100ths$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### targetPositionTiltPercent100ths$Changed

> **targetPositionTiltPercent100ths$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### type$Changed

> **type$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`WindowCoveringType`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/WindowCoveringType.md), `any`\>\>

#### Type declaration

##### currentPositionLift$Changed

> **currentPositionLift$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### currentPositionLiftPercentage$Changed

> **currentPositionLiftPercentage$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### currentPositionTilt$Changed

> **currentPositionTilt$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### currentPositionTiltPercentage$Changed

> **currentPositionTiltPercentage$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### numberOfActuationsLift$Changed

> **numberOfActuationsLift$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### numberOfActuationsTilt$Changed

> **numberOfActuationsTilt$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### physicalClosedLimitLift$Changed

> **physicalClosedLimitLift$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### physicalClosedLimitTilt$Changed

> **physicalClosedLimitTilt$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### safetyStatus$Changed

> **safetyStatus$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

#### Inherited from

`WindowCoveringServerBase.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: [`FeaturesAsFlags`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featuresasflagsclustertflagst)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, readonly [[`Lift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#lift), [`Tilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#tilt), [`PositionAwareLift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawarelift), [`PositionAwareTilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawaretilt), [`AbsolutePosition`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#absoluteposition)]\>

Supported features as a flag object.

#### Inherited from

`WindowCoveringServerBase.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### internal

> `protected` **internal**: [`Internal`](../namespaces/WindowCoveringServerLogic/classes/Internal.md)

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L122)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`WindowCoveringServerBase.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> **state**: [`State`](../namespaces/WindowCoveringServerLogic/classes/State.md)

#### Overrides

`WindowCoveringServerBase.state`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L123)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, readonly [[`Lift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#lift), [`Tilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#tilt), [`PositionAwareLift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawarelift), [`PositionAwareTilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawaretilt), [`AbsolutePosition`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#absoluteposition)]\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`WindowCoveringInterface`](../README.md#windowcoveringinterface)\>, [`WindowCoveringInterface`](../README.md#windowcoveringinterface)\>\>

#### Inherited from

`WindowCoveringServerBase.Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### Interface

> `static` `readonly` **Interface**: [`WindowCoveringInterface`](../README.md#windowcoveringinterface)

#### Inherited from

`WindowCoveringServerBase.Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### cluster

> `static` `readonly` **cluster**: [`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, readonly [[`Lift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#lift), [`Tilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#tilt), [`PositionAwareLift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawarelift), [`PositionAwareTilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawaretilt), [`AbsolutePosition`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#absoluteposition)]\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

`WindowCoveringServerBase.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, readonly [[`Lift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#lift), [`Tilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#tilt), [`PositionAwareLift`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawarelift), [`PositionAwareTilt`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#positionawaretilt), [`AbsolutePosition`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/Feature.md#absoluteposition)]\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`WindowCoveringInterface`](../README.md#windowcoveringinterface)\>, [`WindowCoveringInterface`](../README.md#windowcoveringinterface)\>\>

#### Inherited from

`WindowCoveringServerBase.defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`WindowCoveringServerBase.dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`WindowCoveringServerBase.early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"windowCovering"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`WindowCoveringServerBase.id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`WindowCoveringServerBase.name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`WindowCoveringServerBase.schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`WindowCoveringServerBase.supervisor`

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

`WindowCoveringServerBase.supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### #assertMotionLockStatus()

> `private` **#assertMotionLockStatus**(): `void`

Asserts if the device can be controlled or not because of an active Maintenance mode or a calibration is
required but not supported.

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:305](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L305)

***

### #computeOperationalState()

> `private` **#computeOperationalState**(`target`, `current`): [`MovementStatus`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/MovementStatus.md)

Compute the operational state based on the current and target position.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `target` | `null` \| `number` |
| `current` | `null` \| `number` |

#### Returns

[`MovementStatus`](../../../../../cluster/export/namespaces/WindowCovering/enumerations/MovementStatus.md)

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:289](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L289)

***

### #convertValue()

> `private` **#convertValue**(`inputLowValue`, `inputHighValue`, `outputLowValue`, `outputHighValue`, `value`): `number`

ConvertValue: Converts values from one range to another
* Range In  -> from  inputLowValue to   inputHighValue
* Range Out -> from outputLowValue to outputHighValue

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `inputLowValue` | `number` |
| `inputHighValue` | `number` |
| `outputLowValue` | `number` |
| `outputHighValue` | `number` |
| `value` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:623](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L623)

***

### #executeCalibrationAndMove()

> `private` **#executeCalibrationAndMove**(`type`, `direction`, `targetPercent100ths`?): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`MovementType`](../enumerations/MovementType.md) |
| `direction` | [`MovementDirection`](../enumerations/MovementDirection.md) |
| `targetPercent100ths`? | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:456](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L456)

***

### #handleLiftTargetPositionChanging()

> `private` **#handleLiftTargetPositionChanging**(`percent100ths`): `void`

Update the operational state when the target lift position changes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `percent100ths` | `null` \| `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L227)

***

### #handleModeChanging()

> `private` **#handleModeChanging**(`mode`): `void`

Sync the mode attribute with the configStatus attribute and the internal state.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L173)

***

### #handleOperationalStatusChanging()

> `private` **#handleOperationalStatusChanging**(`operationalStatus`): `void`

Update the global operational status based on the lift or tilt status.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operationalStatus` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:211](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L211)

***

### #handleTiltTargetPositionChanging()

> `private` **#handleTiltTargetPositionChanging**(`percent100ths`): `void`

Update the operational state when the target tilt position changes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `percent100ths` | `null` \| `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L237)

***

### #liftToPercent100ths()

> `private` **#liftToPercent100ths**(`lift`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `lift` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:676](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L676)

***

### #percent100thsToLift()

> `private` **#percent100thsToLift**(`percent100ths`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `percent100ths` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:683](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L683)

***

### #percent100thsToTilt()

> `private` **#percent100thsToTilt**(`percent100ths`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `percent100ths` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:697](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L697)

***

### #percent100thsToValue()

> `private` **#percent100thsToValue**(`limits`, `relative`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `limits` | [`AbsoluteLimits`](../-internal-/README.md#absolutelimits) |
| `relative` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:666](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L666)

***

### #prepareMovement()

> `private` **#prepareMovement**(`type`, `direction`, `targetPercent100ths`?): `void`

Handle a movement. If calibration is supported and needed then [executeCalibration](WindowCoveringServerLogic.md#executecalibration) runs before the actual
movement. The method increases the numberOfActuations* attribute and updates the operational status.

Actual movement occurs in [handleMovement](WindowCoveringServerLogic.md#handlemovement) as a worker. Thus this method returns before actual movement
completes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`MovementType`](../enumerations/MovementType.md) |
| `direction` | [`MovementDirection`](../enumerations/MovementDirection.md) |
| `targetPercent100ths`? | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:394](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L394)

***

### #syncLiftCurrentPositions()

> `private` **#syncLiftCurrentPositions**(`percent100ths`): `void`

Sync the current lift position attributes and the operational state.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `percent100ths` | `null` \| `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:247](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L247)

***

### #syncTiltCurrentPositions()

> `private` **#syncTiltCurrentPositions**(`percent100ths`): `void`

Sync the current tilt position attributes and the operational state.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `percent100ths` | `null` \| `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:268](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L268)

***

### #tiltToPercent100ths()

> `private` **#tiltToPercent100ths**(`tilt`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tilt` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:690](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L690)

***

### #triggerLiftMotion()

> `private` **#triggerLiftMotion**(`direction`, `targetPercent100ths`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `direction` | [`MovementDirection`](../enumerations/MovementDirection.md) |
| `targetPercent100ths`? | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:492](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L492)

***

### #triggerTiltMotion()

> `private` **#triggerTiltMotion**(`direction`, `targetPercent100ths`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `direction` | [`MovementDirection`](../enumerations/MovementDirection.md) |
| `targetPercent100ths`? | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:496](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L496)

***

### #valueToPercent100ths()

> `private` **#valueToPercent100ths**(`limits`, `absolute`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `limits` | [`AbsoluteLimits`](../-internal-/README.md#absolutelimits) |
| `absolute` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:656](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L656)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`WindowCoveringServerBase.[asyncDispose]`

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

`WindowCoveringServerBase.asAdmin`

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

`WindowCoveringServerBase.assertAttributeEnabled`

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

`WindowCoveringServerBase.callback`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### downOrClose()

> **downOrClose**(): `void`

Move the WindowCovering down or close. For position aware devices the target position is set to 100%. The method
calls the handleMovement method to actually move the device.

#### Returns

`void`

#### Overrides

`WindowCoveringServerBase.downOrClose`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:528](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L528)

***

### executeCalibration()

> `protected` **executeCalibration**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Calibrate the device.  The default implementation takes no action. Override to implement calibration if
necessary.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:335](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L335)

***

### goToLiftPercentage()

> **goToLiftPercentage**(`__namedParameters`): `void`

Move the WindowCovering to a specific tilt value. The method calls the handleMovement method to actually move the
device to the defined position.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### Overrides

`WindowCoveringServerBase.goToLiftPercentage`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:573](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L573)

***

### goToLiftValue()

> **goToLiftValue**(`__namedParameters`): `void`

Move the WindowCovering to a specific lift value. The default implementation calculates the % value for the
target position. The method calls the handleMovement method to actually move the device to the defined position.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### Overrides

`WindowCoveringServerBase.goToLiftValue`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:562](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L562)

***

### goToTiltPercentage()

> **goToTiltPercentage**(`__namedParameters`): `void`

Move the WindowCovering to a specific tilt value. The method calls the handleMovement method to actually move the
device to the defined position.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### Overrides

`WindowCoveringServerBase.goToTiltPercentage`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:603](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L603)

***

### goToTiltValue()

> **goToTiltValue**(`__namedParameters`): `void`

Move the WindowCovering to a specific tilt value. The default implementation calculates the % value for the target
position. The method calls the handleMovement method to actually move the device to the defined position.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### Overrides

`WindowCoveringServerBase.goToTiltValue`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:592](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L592)

***

### handleMovement()

> `protected` **handleMovement**(`type`, `reversed`, `direction`, `targetPercent100ths`?): `Promise`\<`void`\>

Perform actual "movement".  Override to initiate movement of your device.

The default implementation logs and immediately updates current position to the target positions.  This is
probably not desirable for a real device so do not invoke `super.handleMovement()` from your implementation.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | [`MovementType`](../enumerations/MovementType.md) | Which element should move, Lift or Tilt |
| `reversed` | `boolean` | If the motor is configured reversed |
| `direction` | [`MovementDirection`](../enumerations/MovementDirection.md) | The direction of the movement (Open, Close, DefinedByPosition) |
| `targetPercent100ths`? | `number` | Optionally the target position in percent 100ths. It depends on the used feature set of the cluster if this is provided or not. |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L351)

***

### handleStopMovement()

> `protected` **handleStopMovement**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Stop device movement.  Sets the target position to the current position and updates operational state. Override
to implement the actual stop movement logic.

If you update the current positions you can include the default logic via "super.handleStopMovement()".

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:476](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L476)

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

#### Overrides

`WindowCoveringServerBase.initialize`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L125)

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

`WindowCoveringServerBase.reactTo`

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

`WindowCoveringServerBase.requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### stopMotion()

> **stopMotion**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Stop any movement of the WindowCovering. The method calls the handleStopMovement method to actually stop the
movement of the device.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Overrides

`WindowCoveringServerBase.stopMotion`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:552](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L552)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`WindowCoveringServerBase.toString`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)

***

### upOrOpen()

> **upOrOpen**(): `void`

Move the WindowCovering up or open. For position aware devices the target position is set to 0%. The method calls
the handleMovement method to actually move the device.

#### Returns

`void`

#### Overrides

`WindowCoveringServerBase.upOrOpen`

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:504](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L504)

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

`WindowCoveringServerBase.alter`

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

`WindowCoveringServerBase.enable`

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

`WindowCoveringServerBase.for`

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

`WindowCoveringServerBase.set`

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

`WindowCoveringServerBase.with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
