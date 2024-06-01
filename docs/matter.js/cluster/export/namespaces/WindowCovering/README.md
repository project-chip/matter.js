[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / WindowCovering

# Namespace: WindowCovering

## Index

### Enumerations

- [EndProductType](enumerations/EndProductType.md)
- [Feature](enumerations/Feature.md)
- [MovementStatus](enumerations/MovementStatus.md)
- [WindowCoveringType](enumerations/WindowCoveringType.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [GoToLiftPercentageRequest](interfaces/GoToLiftPercentageRequest.md)
- [GoToLiftValueRequest](interfaces/GoToLiftValueRequest.md)
- [GoToTiltPercentageRequest](interfaces/GoToTiltPercentageRequest.md)
- [GoToTiltValueRequest](interfaces/GoToTiltValueRequest.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all WindowCovering clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.configStatus

> `readonly` **configStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The ConfigStatus attribute makes configuration and status information available. To change settings,
devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.

###### See

MatterSpecification.v11.Cluster § 5.3.5.8

##### attributes.endProductType

> `readonly` **endProductType**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`EndProductType`](enumerations/EndProductType.md), `any`\>

The EndProductType attribute identifies the product type in complement of the main category indicated by
the Type attribute. The window covering shall set this value to one of the values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.16

##### attributes.mode

> `readonly` **mode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

> `readonly` **operationalStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
devices. See below for details about the meaning of individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.15

##### attributes.safetyStatus

> `readonly` **safetyStatus**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
movements. By default for nominal operation all flags are cleared (0). A device might support none, one
or several bit flags from this attribute (all optional). See below for details about the meaning of
individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.22

##### attributes.type

> `readonly` **type**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`WindowCoveringType`](enumerations/WindowCoveringType.md), `any`\>

The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
set to one of the non-reserved values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.1

##### commands

> `readonly` **commands**: `object`

##### commands.downOrClose

> `readonly` **downOrClose**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

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

> `readonly` **stopMotion**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
lift/slide that is currently occurring. The server attributes supported shall be updated as follows:

  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
    value.

  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
    value.

###### See

MatterSpecification.v11.Cluster § 5.3.6.3

##### commands.upOrOpen

> `readonly` **upOrOpen**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

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

> `readonly` **absolutePosition**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

AbsolutePosition

Absolute positioning is supported.

##### features.lift

> `readonly` **lift**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Lift

Lift Control and behavior for lifting/sliding window coverings

##### features.positionAwareLift

> `readonly` **positionAwareLift**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PositionAwareLift

Position Aware lift control is supported.

##### features.positionAwareTilt

> `readonly` **positionAwareTilt**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PositionAwareTilt

Position Aware tilt control is supported.

##### features.tilt

> `readonly` **tilt**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Tilt

Tilt Control and behavior for tilting window coverings

##### id

> `readonly` **id**: `258` = `0x102`

##### name

> `readonly` **name**: `"WindowCovering"` = `"WindowCovering"`

##### revision

> `readonly` **revision**: `5` = `5`

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:719](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L719)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:952](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L952)

***

### ClusterInstance

> `const` **ClusterInstance**: [`ExtensibleOnly`](../MutableCluster/interfaces/ExtensibleOnly.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.configStatus

> `readonly` **configStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The ConfigStatus attribute makes configuration and status information available. To change settings,
devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.

###### See

MatterSpecification.v11.Cluster § 5.3.5.8

##### attributes.endProductType

> `readonly` **endProductType**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`EndProductType`](enumerations/EndProductType.md), `any`\>

The EndProductType attribute identifies the product type in complement of the main category indicated by
the Type attribute. The window covering shall set this value to one of the values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.16

##### attributes.mode

> `readonly` **mode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

> `readonly` **operationalStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
devices. See below for details about the meaning of individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.15

##### attributes.safetyStatus

> `readonly` **safetyStatus**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
movements. By default for nominal operation all flags are cleared (0). A device might support none, one
or several bit flags from this attribute (all optional). See below for details about the meaning of
individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.22

##### attributes.type

> `readonly` **type**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`WindowCoveringType`](enumerations/WindowCoveringType.md), `any`\>

The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
set to one of the non-reserved values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.1

##### commands

> `readonly` **commands**: `object`

##### commands.downOrClose

> `readonly` **downOrClose**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

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

> `readonly` **stopMotion**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
lift/slide that is currently occurring. The server attributes supported shall be updated as follows:

  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
    value.

  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
    value.

###### See

MatterSpecification.v11.Cluster § 5.3.6.3

##### commands.upOrOpen

> `readonly` **upOrOpen**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

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

> `readonly` **absolutePosition**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

AbsolutePosition

Absolute positioning is supported.

##### features.lift

> `readonly` **lift**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Lift

Lift Control and behavior for lifting/sliding window coverings

##### features.positionAwareLift

> `readonly` **positionAwareLift**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PositionAwareLift

Position Aware lift control is supported.

##### features.positionAwareTilt

> `readonly` **positionAwareTilt**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PositionAwareTilt

Position Aware tilt control is supported.

##### features.tilt

> `readonly` **tilt**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Tilt

Tilt Control and behavior for tilting window coverings

##### id

> `readonly` **id**: `258` = `0x102`

##### name

> `readonly` **name**: `"WindowCovering"` = `"WindowCovering"`

##### revision

> `readonly` **revision**: `5` = `5`

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:939](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L939)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:1068](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L1068)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.configStatus

> `readonly` **configStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The ConfigStatus attribute makes configuration and status information available. To change settings,
devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.

###### See

MatterSpecification.v11.Cluster § 5.3.5.8

##### attributes.currentPositionLift

> `readonly` **currentPositionLift**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.currentPositionLiftPercent100ths

> `readonly` **currentPositionLiftPercent100ths**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.currentPositionLiftPercentage

> `readonly` **currentPositionLiftPercentage**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.currentPositionTilt

> `readonly` **currentPositionTilt**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.currentPositionTiltPercent100ths

> `readonly` **currentPositionTiltPercent100ths**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.currentPositionTiltPercentage

> `readonly` **currentPositionTiltPercentage**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.endProductType

> `readonly` **endProductType**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`EndProductType`](enumerations/EndProductType.md), `any`\>

The EndProductType attribute identifies the product type in complement of the main category indicated by
the Type attribute. The window covering shall set this value to one of the values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.16

##### attributes.installedClosedLimitLift

> `readonly` **installedClosedLimitLift**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.installedClosedLimitTilt

> `readonly` **installedClosedLimitTilt**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.installedOpenLimitLift

> `readonly` **installedOpenLimitLift**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.installedOpenLimitTilt

> `readonly` **installedOpenLimitTilt**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.mode

> `readonly` **mode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction,
placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling
the network, and disabling status LEDs. See below for details.

In the case a device does not support or implement a specific mode, e.g. the device has a specific
installation method and reversal is not relevant or the device does not include a maintenance mode, any
write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits set,
must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.

###### See

MatterSpecification.v11.Cluster § 5.3.5.21

##### attributes.numberOfActuationsLift

> `readonly` **numberOfActuationsLift**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.numberOfActuationsTilt

> `readonly` **numberOfActuationsTilt**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.operationalStatus

> `readonly` **operationalStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
devices. See below for details about the meaning of individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.15

##### attributes.physicalClosedLimitLift

> `readonly` **physicalClosedLimitLift**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.physicalClosedLimitTilt

> `readonly` **physicalClosedLimitTilt**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.safetyStatus

> `readonly` **safetyStatus**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
movements. By default for nominal operation all flags are cleared (0). A device might support none, one
or several bit flags from this attribute (all optional). See below for details about the meaning of
individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.22

##### attributes.targetPositionLiftPercent100ths

> `readonly` **targetPositionLiftPercent100ths**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.targetPositionTiltPercent100ths

> `readonly` **targetPositionTiltPercent100ths**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.type

> `readonly` **type**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`WindowCoveringType`](enumerations/WindowCoveringType.md), `any`\>

The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
set to one of the non-reserved values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.1

##### commands

> `readonly` **commands**: `object`

##### commands.downOrClose

> `readonly` **downOrClose**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

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

##### commands.goToLiftPercentage

> `readonly` **goToLiftPercentage**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.goToLiftValue

> `readonly` **goToLiftValue**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.goToTiltPercentage

> `readonly` **goToTiltPercentage**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.goToTiltValue

> `readonly` **goToTiltValue**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.stopMotion

> `readonly` **stopMotion**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
lift/slide that is currently occurring. The server attributes supported shall be updated as follows:

  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
    value.

  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
    value.

###### See

MatterSpecification.v11.Cluster § 5.3.6.3

##### commands.upOrOpen

> `readonly` **upOrOpen**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

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

##### features

> `readonly` **features**: `object` = `Base.features`

##### features.absolutePosition

> `readonly` **absolutePosition**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

AbsolutePosition

Absolute positioning is supported.

##### features.lift

> `readonly` **lift**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Lift

Lift Control and behavior for lifting/sliding window coverings

##### features.positionAwareLift

> `readonly` **positionAwareLift**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PositionAwareLift

Position Aware lift control is supported.

##### features.positionAwareTilt

> `readonly` **positionAwareTilt**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PositionAwareTilt

Position Aware tilt control is supported.

##### features.tilt

> `readonly` **tilt**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Tilt

Tilt Control and behavior for tilting window coverings

##### id

> `readonly` **id**: `258` = `Base.id`

##### name

> `readonly` **name**: `"WindowCovering"` = `Base.name`

##### revision

> `readonly` **revision**: `5` = `Base.revision`

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:967](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L967)

***

### ConfigStatus

> `const` **ConfigStatus**: `object`

The value of the WindowCovering configStatus attribute

#### See

MatterSpecification.v11.Cluster § 5.3.5.8

#### Type declaration

##### liftEncoderControlled

> **liftEncoderControlled**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an
encoder for positioning the height of the window covering.

##### liftMovementReversed

> **liftMovementReversed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Reversal: This status bit identifies if the directions of the lift/slide movements have been reversed in
order for commands (e.g: Open, Close, GoTos) to match the physical installation conditionsThis bit can be
adjusted by setting the appropriate reversal bit value in the Mode attribute

##### liftPositionAware

> **liftPositionAware**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Control - Lift: This status bit identifies if the window covering supports the Position Aware Lift Control

##### onlineReserved

> **onlineReserved**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

deprecated

##### operational

> **operational**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Operational: This status bit defines if the Window Covering is operational.The SafetyStatus & Mode
attributes might affect this bit

##### tiltEncoderControlled

> **tiltEncoderControlled**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an
encoder for tilting the window covering.

##### tiltPositionAware

> **tiltPositionAware**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Control - Tilt: This status bit identifies if the window covering supports the Position Aware Tilt Control

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L111)

***

### LiftAndAbsolutePositionComponent

> `const` **LiftAndAbsolutePositionComponent**: `object`

A WindowCoveringCluster supports these elements if it supports features Lift and AbsolutePosition.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.goToLiftValue

> `readonly` **goToLiftValue**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Upon receipt of this command, the Window Covering will adjust the window so the physical lift/slide is
at the value specified in the payload of this command as long as that value is not larger than
InstalledOpenLimitLift attribute and not smaller than InstalledClosedLimitLift attribute. Once the
command is received the TargetPositionLiftPercent100ths attribute will update its value accordingly. If
the value is out of bounds a response containing the status of CONSTRAINT_ERROR will be returned.

###### See

MatterSpecification.v11.Cluster § 5.3.6.4

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:641](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L641)

***

### LiftAndPositionAwareLiftAndAbsolutePositionComponent

> `const` **LiftAndPositionAwareLiftAndAbsolutePositionComponent**: `object`

A WindowCoveringCluster supports these elements if it supports features Lift, PositionAwareLift and
AbsolutePosition.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentPositionLift

> `readonly` **currentPositionLift**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

The CurrentPositionLift attribute identifies the actual Lift position (in centimeters) of the window
covering from the fully-open position.

###### See

MatterSpecification.v11.Cluster § 5.3.5.4

##### attributes.installedClosedLimitLift

> `readonly` **installedClosedLimitLift**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The InstalledClosedLimitLift attribute identifies the Closed Limit for Lifting the Window Covering
whether position (in centimeters) is encoded or timed.

###### See

MatterSpecification.v11.Cluster § 5.3.5.18

##### attributes.installedOpenLimitLift

> `readonly` **installedOpenLimitLift**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The InstalledOpenLimitLift attribute identifies the Open Limit for Lifting the Window Covering whether
position (in centimeters) is encoded or timed.

###### See

MatterSpecification.v11.Cluster § 5.3.5.17

##### attributes.physicalClosedLimitLift

> `readonly` **physicalClosedLimitLift**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The PhysicalClosedLimitLift attribute identifies the maximum possible encoder position possible (in
centimeters) to position the height of the window covering Lift.

###### See

MatterSpecification.v11.Cluster § 5.3.5.2

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:342](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L342)

***

### LiftAndPositionAwareLiftComponent

> `const` **LiftAndPositionAwareLiftComponent**: `object`

A WindowCoveringCluster supports these elements if it supports features Lift and PositionAwareLift.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentPositionLiftPercent100ths

> `readonly` **currentPositionLiftPercent100ths**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The CurrentPositionLiftPercent100ths attribute identifies the actual position as a percentage with a
minimal step of 0.01%. E.g Max 10000 equals 100.00%.

###### See

MatterSpecification.v11.Cluster § 5.3.5.9

##### attributes.currentPositionLiftPercentage

> `readonly` **currentPositionLiftPercentage**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

The CurrentPositionLiftPercentage attribute identifies the actual position as a percentage from 0% to
100% with 1% default step. This attribute is equal to CurrentPositionLiftPercent100ths attribute divided
by 100.

###### See

MatterSpecification.v11.Cluster § 5.3.5.11

##### attributes.targetPositionLiftPercent100ths

> `readonly` **targetPositionLiftPercent100ths**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The TargetPositionLiftPercent100ths attribute identifies the position where the Window Covering Lift
will go or is moving to as a percentage.

###### See

MatterSpecification.v11.Cluster § 5.3.5.13

##### commands

> `readonly` **commands**: `object`

##### commands.goToLiftPercentage

> `readonly` **goToLiftPercentage**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Upon receipt of this command, the server will adjust the window covering to the lift/slide percentage
specified in the payload of this command.

If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall be
set to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be set to
LiftPercentageValue * 100.

If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to to
LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not
LiftPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is
only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD
be returned.

###### See

MatterSpecification.v11.Cluster § 5.3.6.5

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:506](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L506)

***

### LiftComponent

> `const` **LiftComponent**: `object`

A WindowCoveringCluster supports these elements if it supports feature Lift.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.numberOfActuationsLift

> `readonly` **numberOfActuationsLift**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The NumberOfActuationsLift attribute identifies the total number of lift/slide actuations applied to the
Window Covering since the device was installed.

###### See

MatterSpecification.v11.Cluster § 5.3.5.6

##### commands

> `readonly` **commands**: `object`

##### commands.goToLiftPercentage

> `readonly` **goToLiftPercentage**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Upon receipt of this command, the server will adjust the window covering to the lift/slide percentage
specified in the payload of this command.

If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall be
set to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be set to
LiftPercentageValue * 100.

If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to to
LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not
LiftPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is
only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD
be returned.

###### See

MatterSpecification.v11.Cluster § 5.3.6.5

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:429](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L429)

***

### Mode

> `const` **Mode**: `object`

The value of the WindowCovering mode attribute

#### See

MatterSpecification.v11.Cluster § 5.3.5.21

#### Type declaration

##### calibrationMode

> **calibrationMode**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

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

> **ledFeedback**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Disables (0) or Enables (1) the display of any feedback LEDs resident especially on the packaging of an
endpoint where they may cause distraction to the occupant.

##### maintenanceMode

> **maintenanceMode**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Disables (0) or Enables (1) placing the Window Covering into Maintenance Mode where it cannot be moved over
the network or by a switch connected to a Local Switch Input.While in maintenance mode, all commands (e.g:
UpOrOpen, DownOrClose, GoTos) that can result in movement, must be ignored and respond with a BUSY status.
Additionally, the operational bit of the ConfigStatus attribute should be set to its not operational value.

##### motorDirectionReversed

> **motorDirectionReversed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Disables (0) or Enables (1) Lift reversal

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:233](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L233)

***

### OperationalStatus

> `const` **OperationalStatus**: `object`

The value of the WindowCovering operationalStatus attribute

#### See

MatterSpecification.v11.Cluster § 5.3.5.15

#### Type declaration

##### global

> **global**: [`BitFieldEnum`](../../../../schema/export/README.md#bitfieldenume)\<[`MovementStatus`](enumerations/MovementStatus.md)\>

Movement status of the cover

##### lift

> **lift**: [`BitFieldEnum`](../../../../schema/export/README.md#bitfieldenume)\<[`MovementStatus`](enumerations/MovementStatus.md)\>

Movement status of the cover's lift function

##### tilt

> **tilt**: [`BitFieldEnum`](../../../../schema/export/README.md#bitfieldenume)\<[`MovementStatus`](enumerations/MovementStatus.md)\>

Movement status of the cover's tilt function

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L158)

***

### SafetyStatus

> `const` **SafetyStatus**: `object`

The value of the WindowCovering safetyStatus attribute

#### See

MatterSpecification.v11.Cluster § 5.3.5.22

#### Type declaration

##### failedCommunication

> **failedCommunication**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Communication failure to sensors or other safety equipment.

##### hardwareFailure

> **hardwareFailure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PCB, fuse and other electrics problems.

##### manualOperation

> **manualOperation**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled).

##### motorJammed

> **motorJammed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Mechanical problem related to the motor(s) detected.

##### obstacleDetected

> **obstacleDetected**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

An obstacle is preventing actuator movement.

##### positionFailure

> **positionFailure**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Device has failed to reach the desired position. e.g. with Position Aware device, time expired before
TargetPosition is reached.

##### power

> **power**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power
might not be fully available at the moment.

##### protection

> **protection**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Protection is activated.

##### remoteLockout

> **remoteLockout**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range.

##### stopInput

> **stopInput**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335).

##### tamperDetection

> **tamperDetection**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without
its actuator(s).

##### thermalProtection

> **thermalProtection**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Motor(s) and/or electric circuit thermal protection activated.

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:273](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L273)

***

### TiltAndAbsolutePositionComponent

> `const` **TiltAndAbsolutePositionComponent**: `object`

A WindowCoveringCluster supports these elements if it supports features Tilt and AbsolutePosition.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.goToTiltValue

> `readonly` **goToTiltValue**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Upon receipt of this command, the Window Covering will adjust the window so the physical tilt is at the
tilt value specified in the payload of this command as long as that value is not larger than
InstalledOpenLimitTilt attribute and not smaller than InstalledClosedLimitTilt attribute. Once the
command is received the TargetPositionTiltPercent100ths attribute will update its value accordingly. If
the tilt value is out of bounds a response containing the status of CONSTRAINT_ERROR will be returned.

###### See

MatterSpecification.v11.Cluster § 5.3.6.6

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:659](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L659)

***

### TiltAndPositionAwareTiltAndAbsolutePositionComponent

> `const` **TiltAndPositionAwareTiltAndAbsolutePositionComponent**: `object`

A WindowCoveringCluster supports these elements if it supports features Tilt, PositionAwareTilt and
AbsolutePosition.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentPositionTilt

> `readonly` **currentPositionTilt**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

The CurrentPositionTilt attribute identifies the actual Tilt position (in tenth of an degree) of the
window covering from the fully-open position.

###### See

MatterSpecification.v11.Cluster § 5.3.5.5

##### attributes.installedClosedLimitTilt

> `readonly` **installedClosedLimitTilt**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The InstalledClosedLimitTilt attribute identifies the Closed Limit for Tilting the Window Covering
whether position (in tenth of a degree) is encoded or timed.

###### See

MatterSpecification.v11.Cluster § 5.3.5.20

##### attributes.installedOpenLimitTilt

> `readonly` **installedOpenLimitTilt**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The InstalledOpenLimitTilt attribute identifies the Open Limit for Tilting the Window Covering whether
position (in tenth of a degree) is encoded or timed.

###### See

MatterSpecification.v11.Cluster § 5.3.5.19

##### attributes.physicalClosedLimitTilt

> `readonly` **physicalClosedLimitTilt**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The PhysicalClosedLimitTilt attribute identifies the maximum possible encoder position possible (tenth
of a degrees) to position the angle of the window covering Tilt.

###### See

MatterSpecification.v11.Cluster § 5.3.5.3

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:386](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L386)

***

### TiltAndPositionAwareTiltComponent

> `const` **TiltAndPositionAwareTiltComponent**: `object`

A WindowCoveringCluster supports these elements if it supports features Tilt and PositionAwareTilt.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentPositionTiltPercent100ths

> `readonly` **currentPositionTiltPercent100ths**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The CurrentPositionTiltPercent100ths attribute identifies the actual position as a percentage with a
minimal step of 0.01%. E.g Max 10000 equals 100.00%.

###### See

MatterSpecification.v11.Cluster § 5.3.5.10

##### attributes.currentPositionTiltPercentage

> `readonly` **currentPositionTiltPercentage**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

The CurrentPositionTiltPercentage attribute identifies the actual position as a percentage from 0% to
100% with 1% default step. This attribute is equal to CurrentPositionTiltPercent100ths attribute divided
by 100.

###### See

MatterSpecification.v11.Cluster § 5.3.5.12

##### attributes.targetPositionTiltPercent100ths

> `readonly` **targetPositionTiltPercent100ths**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The TargetPositionTiltPercent100ths attribute identifies the position where the Window Covering Tilt
will go or is moving to as a percentage.

###### See

MatterSpecification.v11.Cluster § 5.3.5.14

##### commands

> `readonly` **commands**: `object`

##### commands.goToTiltPercentage

> `readonly` **goToTiltPercentage**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Upon receipt of this command, the server will adjust the window covering to the tilt percentage
specified in the payload of this command.

If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute

shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be
set to TiltPercentageValue * 100.

If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
TiltPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is
only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD
be returned.

###### See

MatterSpecification.v11.Cluster § 5.3.6.7

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:573](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L573)

***

### TiltComponent

> `const` **TiltComponent**: `object`

A WindowCoveringCluster supports these elements if it supports feature Tilt.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.numberOfActuationsTilt

> `readonly` **numberOfActuationsTilt**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The NumberOfActuationsTilt attribute identifies the total number of tilt actuations applied to the
Window Covering since the device was installed.

###### See

MatterSpecification.v11.Cluster § 5.3.5.7

##### commands

> `readonly` **commands**: `object`

##### commands.goToTiltPercentage

> `readonly` **goToTiltPercentage**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Upon receipt of this command, the server will adjust the window covering to the tilt percentage
specified in the payload of this command.

If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute

shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be
set to TiltPercentageValue * 100.

If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to to
TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not
TiltPercent100thsValue) has a value to set the target position.

If the server does not support the Position Aware feature, then a zero percentage shall be treated as a
UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the device is
only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND status SHOULD
be returned.

###### See

MatterSpecification.v11.Cluster § 5.3.6.7

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:467](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L467)

***

### TlvGoToLiftPercentageRequest

> `const` **TlvGoToLiftPercentageRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the WindowCovering goToLiftPercentage command

#### See

MatterSpecification.v11.Cluster § 5.3.6.5

#### Type declaration

##### liftPercent100thsValue

> **liftPercent100thsValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L36)

***

### TlvGoToLiftValueRequest

> `const` **TlvGoToLiftValueRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the WindowCovering goToLiftValue command

#### See

MatterSpecification.v11.Cluster § 5.3.6.4

#### Type declaration

##### liftValue

> **liftValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L64)

***

### TlvGoToTiltPercentageRequest

> `const` **TlvGoToTiltPercentageRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the WindowCovering goToTiltPercentage command

#### See

MatterSpecification.v11.Cluster § 5.3.6.7

#### Type declaration

##### tiltPercent100thsValue

> **tiltPercent100thsValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L50)

***

### TlvGoToTiltValueRequest

> `const` **TlvGoToTiltValueRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the WindowCovering goToTiltValue command

#### See

MatterSpecification.v11.Cluster § 5.3.6.6

#### Type declaration

##### tiltValue

> **tiltValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L78)
