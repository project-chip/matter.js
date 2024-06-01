[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/window-covering/export

# behavior/definitions/window-covering/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [WindowCoveringBehavior](namespaces/WindowCoveringBehavior/README.md)
- [WindowCoveringInterface](namespaces/WindowCoveringInterface/README.md)
- [WindowCoveringServerLogic](namespaces/WindowCoveringServerLogic/README.md)

### Enumerations

- [CalibrationMode](enumerations/CalibrationMode.md)
- [MovementDirection](enumerations/MovementDirection.md)
- [MovementType](enumerations/MovementType.md)

### Classes

- [WindowCoveringServer](classes/WindowCoveringServer.md)
- [WindowCoveringServerLogic](classes/WindowCoveringServerLogic.md)

### Interfaces

- [WindowCoveringBehavior](interfaces/WindowCoveringBehavior.md)

## Type Aliases

### GoToLiftPercentageRequest

> **GoToLiftPercentageRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGoToLiftPercentageRequest`](../../../../cluster/export/namespaces/WindowCovering/README.md#tlvgotoliftpercentagerequest)\>

Upon receipt of this command, the server will adjust the window covering to the lift/slide percentage specified in
the payload of this command.

If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall be set to
LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be set to LiftPercentageValue
* 100.

If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to to
LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not
LiftPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a UpOrOpen
command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only a tilt control
device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be returned.

#### See

MatterSpecification.v11.Cluster § 5.3.6.5

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L31)

***

### GoToLiftValueRequest

> **GoToLiftValueRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGoToLiftValueRequest`](../../../../cluster/export/namespaces/WindowCovering/README.md#tlvgotoliftvaluerequest)\>

Upon receipt of this command, the Window Covering will adjust the window so the physical lift/slide is at the value
specified in the payload of this command as long as that value is not larger than InstalledOpenLimitLift attribute
and not smaller than InstalledClosedLimitLift attribute. Once the command is received the
TargetPositionLiftPercent100ths attribute will update its value accordingly. If the value is out of bounds a
response containing the status of CONSTRAINT_ERROR will be returned.

#### See

MatterSpecification.v11.Cluster § 5.3.6.4

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L63)

***

### GoToTiltPercentageRequest

> **GoToTiltPercentageRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGoToTiltPercentageRequest`](../../../../cluster/export/namespaces/WindowCovering/README.md#tlvgototiltpercentagerequest)\>

Upon receipt of this command, the server will adjust the window covering to the tilt percentage specified in the
payload of this command.

If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute

shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be set to
TiltPercentageValue * 100.

If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
TiltPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a UpOrOpen
command and a non-zero percentage shall be treated as an DownOrClose command. If the device is only a tilt control
device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD be returned.

#### See

MatterSpecification.v11.Cluster § 5.3.6.7

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L52)

***

### GoToTiltValueRequest

> **GoToTiltValueRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGoToTiltValueRequest`](../../../../cluster/export/namespaces/WindowCovering/README.md#tlvgototiltvaluerequest)\>

Upon receipt of this command, the Window Covering will adjust the window so the physical tilt is at the tilt value
specified in the payload of this command as long as that value is not larger than InstalledOpenLimitTilt attribute
and not smaller than InstalledClosedLimitTilt attribute. Once the command is received the
TargetPositionTiltPercent100ths attribute will update its value accordingly. If the tilt value is out of bounds a
response containing the status of CONSTRAINT_ERROR will be returned.

#### See

MatterSpecification.v11.Cluster § 5.3.6.6

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L74)

***

### WindowCoveringInterface

> **WindowCoveringInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`, `object`, `object`, `object`, `object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L76)

## Variables

### WindowCoveringBehavior

> `const` **WindowCoveringBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`WindowCoveringInterface`](README.md#windowcoveringinterface)\>, [`WindowCoveringInterface`](README.md#windowcoveringinterface)\>

WindowCoveringBehavior is the base class for objects that support interaction with [WindowCovering.Cluster](../../../../cluster/export/namespaces/WindowCovering/README.md#cluster).

WindowCovering.Cluster requires you to enable one or more optional features. You can do so using WindowCoveringBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringBehavior.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringBehavior.ts#L20)
