[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [WindowCovering](../README.md) / Complete

# Interface: Complete

This cluster supports all WindowCovering features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`CompleteInstance`](../README.md#completeinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### configStatus

> `readonly` **configStatus**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The ConfigStatus attribute makes configuration and status information available. To change settings,
devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.

###### See

MatterSpecification.v11.Cluster § 5.3.5.8

##### currentPositionLift

> `readonly` **currentPositionLift**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### currentPositionLiftPercent100ths

> `readonly` **currentPositionLiftPercent100ths**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### currentPositionLiftPercentage

> `readonly` **currentPositionLiftPercentage**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### currentPositionTilt

> `readonly` **currentPositionTilt**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### currentPositionTiltPercent100ths

> `readonly` **currentPositionTiltPercent100ths**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### currentPositionTiltPercentage

> `readonly` **currentPositionTiltPercentage**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### endProductType

> `readonly` **endProductType**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`EndProductType`](../enumerations/EndProductType.md), `any`\>

The EndProductType attribute identifies the product type in complement of the main category indicated by
the Type attribute. The window covering shall set this value to one of the values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.16

##### installedClosedLimitLift

> `readonly` **installedClosedLimitLift**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### installedClosedLimitTilt

> `readonly` **installedClosedLimitTilt**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### installedOpenLimitLift

> `readonly` **installedOpenLimitLift**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### installedOpenLimitTilt

> `readonly` **installedOpenLimitTilt**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### mode

> `readonly` **mode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction,
placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling
the network, and disabling status LEDs. See below for details.

In the case a device does not support or implement a specific mode, e.g. the device has a specific
installation method and reversal is not relevant or the device does not include a maintenance mode, any
write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits set,
must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.

###### See

MatterSpecification.v11.Cluster § 5.3.5.21

##### numberOfActuationsLift

> `readonly` **numberOfActuationsLift**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### numberOfActuationsTilt

> `readonly` **numberOfActuationsTilt**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### operationalStatus

> `readonly` **operationalStatus**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
devices. See below for details about the meaning of individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.15

##### physicalClosedLimitLift

> `readonly` **physicalClosedLimitLift**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### physicalClosedLimitTilt

> `readonly` **physicalClosedLimitTilt**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### safetyStatus

> `readonly` **safetyStatus**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
movements. By default for nominal operation all flags are cleared (0). A device might support none, one
or several bit flags from this attribute (all optional). See below for details about the meaning of
individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.22

##### targetPositionLiftPercent100ths

> `readonly` **targetPositionLiftPercent100ths**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### targetPositionTiltPercent100ths

> `readonly` **targetPositionTiltPercent100ths**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### type

> `readonly` **type**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`WindowCoveringType`](../enumerations/WindowCoveringType.md), `any`\>

The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
set to one of the non-reserved values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.1

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### downOrClose

> `readonly` **downOrClose**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

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

##### See

MatterSpecification.v11.Cluster § 5.3.6.2

#### goToLiftPercentage

> `readonly` **goToLiftPercentage**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

#### goToLiftValue

> `readonly` **goToLiftValue**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

#### goToTiltPercentage

> `readonly` **goToTiltPercentage**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

#### goToTiltValue

> `readonly` **goToTiltValue**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

#### stopMotion

> `readonly` **stopMotion**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
lift/slide that is currently occurring. The server attributes supported shall be updated as follows:

  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
    value.

  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
    value.

##### See

MatterSpecification.v11.Cluster § 5.3.6.3

#### upOrOpen

> `readonly` **upOrOpen**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

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

##### See

MatterSpecification.v11.Cluster § 5.3.6.1

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### absolutePosition

> `readonly` **absolutePosition**: [`BitFlag`](../../../../schema/README.md#bitflag)

AbsolutePosition

Absolute positioning is supported.

#### lift

> `readonly` **lift**: [`BitFlag`](../../../../schema/README.md#bitflag)

Lift

Lift Control and behavior for lifting/sliding window coverings

#### positionAwareLift

> `readonly` **positionAwareLift**: [`BitFlag`](../../../../schema/README.md#bitflag)

PositionAwareLift

Position Aware lift control is supported.

#### positionAwareTilt

> `readonly` **positionAwareTilt**: [`BitFlag`](../../../../schema/README.md#bitflag)

PositionAwareTilt

Position Aware tilt control is supported.

#### tilt

> `readonly` **tilt**: [`BitFlag`](../../../../schema/README.md#bitflag)

Tilt

Tilt Control and behavior for tilting window coverings

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`258`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"WindowCovering"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `5`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object`

##### attributes.configStatus

> `readonly` **configStatus**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The ConfigStatus attribute makes configuration and status information available. To change settings,
devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.

###### See

MatterSpecification.v11.Cluster § 5.3.5.8

##### attributes.currentPositionLift

> `readonly` **currentPositionLift**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.currentPositionLiftPercent100ths

> `readonly` **currentPositionLiftPercent100ths**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.currentPositionLiftPercentage

> `readonly` **currentPositionLiftPercentage**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.currentPositionTilt

> `readonly` **currentPositionTilt**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.currentPositionTiltPercent100ths

> `readonly` **currentPositionTiltPercent100ths**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.currentPositionTiltPercentage

> `readonly` **currentPositionTiltPercentage**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.endProductType

> `readonly` **endProductType**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`EndProductType`](../enumerations/EndProductType.md), `any`\>

The EndProductType attribute identifies the product type in complement of the main category indicated by
the Type attribute. The window covering shall set this value to one of the values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.16

##### attributes.installedClosedLimitLift

> `readonly` **installedClosedLimitLift**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.installedClosedLimitTilt

> `readonly` **installedClosedLimitTilt**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.installedOpenLimitLift

> `readonly` **installedOpenLimitLift**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.installedOpenLimitTilt

> `readonly` **installedOpenLimitTilt**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.mode

> `readonly` **mode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

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

> `readonly` **numberOfActuationsLift**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.numberOfActuationsTilt

> `readonly` **numberOfActuationsTilt**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.operationalStatus

> `readonly` **operationalStatus**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
devices. See below for details about the meaning of individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.15

##### attributes.physicalClosedLimitLift

> `readonly` **physicalClosedLimitLift**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.physicalClosedLimitTilt

> `readonly` **physicalClosedLimitTilt**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.safetyStatus

> `readonly` **safetyStatus**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
movements. By default for nominal operation all flags are cleared (0). A device might support none, one
or several bit flags from this attribute (all optional). See below for details about the meaning of
individual bits.

###### See

MatterSpecification.v11.Cluster § 5.3.5.22

##### attributes.targetPositionLiftPercent100ths

> `readonly` **targetPositionLiftPercent100ths**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.targetPositionTiltPercent100ths

> `readonly` **targetPositionTiltPercent100ths**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.type

> `readonly` **type**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`WindowCoveringType`](../enumerations/WindowCoveringType.md), `any`\>

The Type attribute identifies the type of window covering being controlled by this endpoint and shall be
set to one of the non-reserved values in the table below.

###### See

MatterSpecification.v11.Cluster § 5.3.5.1

##### commands

> `readonly` **commands**: `object`

##### commands.downOrClose

> `readonly` **downOrClose**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

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

> `readonly` **goToLiftPercentage**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.goToLiftValue

> `readonly` **goToLiftValue**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.goToTiltPercentage

> `readonly` **goToTiltPercentage**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.goToTiltValue

> `readonly` **goToTiltValue**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### commands.stopMotion

> `readonly` **stopMotion**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
lift/slide that is currently occurring. The server attributes supported shall be updated as follows:

  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
    value.

  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
    value.

###### See

MatterSpecification.v11.Cluster § 5.3.6.3

##### commands.upOrOpen

> `readonly` **upOrOpen**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

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

> `readonly` **features**: `object`

##### features.absolutePosition

> `readonly` **absolutePosition**: [`BitFlag`](../../../../schema/README.md#bitflag)

AbsolutePosition

Absolute positioning is supported.

##### features.lift

> `readonly` **lift**: [`BitFlag`](../../../../schema/README.md#bitflag)

Lift

Lift Control and behavior for lifting/sliding window coverings

##### features.positionAwareLift

> `readonly` **positionAwareLift**: [`BitFlag`](../../../../schema/README.md#bitflag)

PositionAwareLift

Position Aware lift control is supported.

##### features.positionAwareTilt

> `readonly` **positionAwareTilt**: [`BitFlag`](../../../../schema/README.md#bitflag)

PositionAwareTilt

Position Aware tilt control is supported.

##### features.tilt

> `readonly` **tilt**: [`BitFlag`](../../../../schema/README.md#bitflag)

Tilt

Tilt Control and behavior for tilting window coverings

##### id

> `readonly` **id**: `258`

##### name

> `readonly` **name**: `"WindowCovering"`

##### revision

> `readonly` **revision**: `5`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
