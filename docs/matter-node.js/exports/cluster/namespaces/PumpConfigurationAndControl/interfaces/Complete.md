[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [PumpConfigurationAndControl](../README.md) / Complete

# Interface: Complete

This cluster supports all PumpConfigurationAndControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`CompleteInstance`](../README.md#completeinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### capacity

> `readonly` **capacity**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual capacity of the pump as a percentage of the effective maximum
setpoint value. It is updated dynamically as the speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values
of capacity less than zero have no physical meaning.

###### See

MatterSpecification.v11.Cluster § 4.2.7.17

##### controlMode

> `readonly` **controlMode**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`ControlMode`](../enumerations/ControlMode.md), `any`\>

This attribute specifies the control mode of the pump as defined in ControlModeEnum.

See the OperationMode attribute for a detailed description of the operation and control of the

pump.

ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing is vendor-specific.

In the case a device does not support a specific control mode, the write interaction to this attribute
with an unsupported control mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.23

##### effectiveControlMode

> `readonly` **effectiveControlMode**: [`Attribute`](../../../interfaces/Attribute.md)\<[`ControlMode`](../enumerations/ControlMode.md), `any`\>

This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.

This attribute contains the control mode that currently applies to the pump. It will have the value of
the ControlMode attribute, unless one of the following points are true:

  • The ControlMode attribute is set to Automatic. In this case, the value of the EffectiveControlMode
    shall match the behavior of the pump.

  • A remote sensor is used as the sensor for regulation of the pump. In this case, EffectiveControlMode
    will display ConstantPressure, ConstantFlow or ConstantTemperature if the remote sensor is a
    pressure sensor, a flow sensor or a temperature sensor respectively, regardless of the value of the
    ControlMode attribute.

In case the ControlMode attribute is not included on the device and no remote sensors are connected, the
value of the EffectiveControlMode shall match the vendor-specific behavior of the pump.

See OperationMode and ControlMode attributes for detailed a description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.16

##### effectiveOperationMode

> `readonly` **effectiveOperationMode**: [`Attribute`](../../../interfaces/Attribute.md)\<[`OperationMode`](../enumerations/OperationMode.md), `any`\>

This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.

The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one
of the following points are true:

  • The pump is physically set to run with the local settings

  • The LocalOverride bit in the PumpStatus attribute is set,

See OperationMode and ControlMode attributes for a detailed description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.15

##### lifetimeEnergyConsumed

> `readonly` **lifetimeEnergyConsumed**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of
the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy
consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over”
and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance.

Valid range is 0 kWh to 4,294,967,294 kWh.

This attribute shall be null if the value is unknown.

###### See

MatterSpecification.v11.Cluster § 4.2.7.21

##### lifetimeRunningHours

> `readonly` **lifetimeRunningHours**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated number of hours that the pump has been powered and the motor
has been running. It is updated dynamically as it increases. It is preserved over power cycles of the
pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If

the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214
hrs.

###### See

MatterSpecification.v11.Cluster § 4.2.7.19

##### maxCompPressure

> `readonly` **maxCompPressure**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### maxConstFlow

> `readonly` **maxConstFlow**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### maxConstPressure

> `readonly` **maxConstPressure**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### maxConstSpeed

> `readonly` **maxConstSpeed**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### maxConstTemp

> `readonly` **maxConstTemp**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### maxFlow

> `readonly` **maxFlow**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.3

##### maxPressure

> `readonly` **maxPressure**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.1

##### maxSpeed

> `readonly` **maxSpeed**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.2

##### minCompPressure

> `readonly` **minCompPressure**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### minConstFlow

> `readonly` **minConstFlow**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### minConstPressure

> `readonly` **minConstPressure**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### minConstSpeed

> `readonly` **minConstSpeed**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### minConstTemp

> `readonly` **minConstTemp**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### operationMode

> `readonly` **operationMode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`OperationMode`](../enumerations/OperationMode.md), `any`\>

This attribute specifies the operation mode of the pump as defined in OperationModeEnum.

The actual operating mode of the pump is a result of the setting of the attributes OperationMode,
ControlMode and the optional connection of a remote sensor. The operation and control is prioritized as
shown in the scheme below:

Priority Scheme of Pump Operation and Control

If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is
operated.

If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote sensor
decides the control mode of the pump. A connected remote pressure sensor will make the pump run in
control mode Constant pressure and vice versa for flow and temperature type sensors. This is regardless
of the setting of the ControlMode attribute.

If this attribute is Normal and no remote sensor is connected, the control mode of the pump is decided
by the ControlMode attribute.

OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing the value of this attribute is vendor-specific.

In the case a device does not support a specific operation mode, the write interaction to this attribute
with an unsupported operation mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.22

##### power

> `readonly` **power**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute
is updated dynamically as the power consumption of the pump changes.

This attribute is read only. If the value is not available (the measurement of power consumption is not
done in the pump), this attribute will indicate the null value.

Valid range is 0 to 16,777,214 Watts.

###### See

MatterSpecification.v11.Cluster § 4.2.7.20

##### pumpStatus

> `readonly` **pumpStatus**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where
a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller
function is not active, the corresponding bit shall be set to 0.

###### See

MatterSpecification.v11.Cluster § 4.2.7.14

##### speed

> `readonly` **speed**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the
speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 to 65.534 RPM.

###### See

MatterSpecification.v11.Cluster § 4.2.7.18

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

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### airDetection

> `readonly` **airDetection**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### dryRunning

> `readonly` **dryRunning**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### electronicFatalFailure

> `readonly` **electronicFatalFailure**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### electronicNonFatalFailure

> `readonly` **electronicNonFatalFailure**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### electronicTemperatureHigh

> `readonly` **electronicTemperatureHigh**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### generalFault

> `readonly` **generalFault**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### leakage

> `readonly` **leakage**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### motorTemperatureHigh

> `readonly` **motorTemperatureHigh**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### powerMissingPhase

> `readonly` **powerMissingPhase**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### pumpBlocked

> `readonly` **pumpBlocked**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### pumpMotorFatalFailure

> `readonly` **pumpMotorFatalFailure**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### sensorFailure

> `readonly` **sensorFailure**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### supplyVoltageHigh

> `readonly` **supplyVoltageHigh**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### supplyVoltageLow

> `readonly` **supplyVoltageLow**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### systemPressureHigh

> `readonly` **systemPressureHigh**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### systemPressureLow

> `readonly` **systemPressureLow**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

#### turbineOperation

> `readonly` **turbineOperation**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 4.2.8

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

#### automatic

> `readonly` **automatic**: [`BitFlag`](../../../../schema/README.md#bitflag)

Automatic

Supports operating in automatic mode

#### compensatedPressure

> `readonly` **compensatedPressure**: [`BitFlag`](../../../../schema/README.md#bitflag)

CompensatedPressure

Supports operating in compensated pressure mode

#### constantFlow

> `readonly` **constantFlow**: [`BitFlag`](../../../../schema/README.md#bitflag)

ConstantFlow

Supports operating in constant flow mode

#### constantPressure

> `readonly` **constantPressure**: [`BitFlag`](../../../../schema/README.md#bitflag)

ConstantPressure

Supports operating in constant pressure mode

#### constantSpeed

> `readonly` **constantSpeed**: [`BitFlag`](../../../../schema/README.md#bitflag)

ConstantSpeed

Supports operating in constant speed mode

#### constantTemperature

> `readonly` **constantTemperature**: [`BitFlag`](../../../../schema/README.md#bitflag)

ConstantTemperature

Supports operating in constant temperature mode

#### localOperation

> `readonly` **localOperation**: [`BitFlag`](../../../../schema/README.md#bitflag)

LocalOperation

Supports operating using local settings

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`512`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"PumpConfigurationAndControl"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `4`

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

##### attributes.capacity

> `readonly` **capacity**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual capacity of the pump as a percentage of the effective maximum
setpoint value. It is updated dynamically as the speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values
of capacity less than zero have no physical meaning.

###### See

MatterSpecification.v11.Cluster § 4.2.7.17

##### attributes.controlMode

> `readonly` **controlMode**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<[`ControlMode`](../enumerations/ControlMode.md), `any`\>

This attribute specifies the control mode of the pump as defined in ControlModeEnum.

See the OperationMode attribute for a detailed description of the operation and control of the

pump.

ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing is vendor-specific.

In the case a device does not support a specific control mode, the write interaction to this attribute
with an unsupported control mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.23

##### attributes.effectiveControlMode

> `readonly` **effectiveControlMode**: [`Attribute`](../../../interfaces/Attribute.md)\<[`ControlMode`](../enumerations/ControlMode.md), `any`\>

This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.

This attribute contains the control mode that currently applies to the pump. It will have the value of
the ControlMode attribute, unless one of the following points are true:

  • The ControlMode attribute is set to Automatic. In this case, the value of the EffectiveControlMode
    shall match the behavior of the pump.

  • A remote sensor is used as the sensor for regulation of the pump. In this case, EffectiveControlMode
    will display ConstantPressure, ConstantFlow or ConstantTemperature if the remote sensor is a
    pressure sensor, a flow sensor or a temperature sensor respectively, regardless of the value of the
    ControlMode attribute.

In case the ControlMode attribute is not included on the device and no remote sensors are connected, the
value of the EffectiveControlMode shall match the vendor-specific behavior of the pump.

See OperationMode and ControlMode attributes for detailed a description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.16

##### attributes.effectiveOperationMode

> `readonly` **effectiveOperationMode**: [`Attribute`](../../../interfaces/Attribute.md)\<[`OperationMode`](../enumerations/OperationMode.md), `any`\>

This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.

The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one
of the following points are true:

  • The pump is physically set to run with the local settings

  • The LocalOverride bit in the PumpStatus attribute is set,

See OperationMode and ControlMode attributes for a detailed description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.15

##### attributes.lifetimeEnergyConsumed

> `readonly` **lifetimeEnergyConsumed**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of
the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy
consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over”
and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance.

Valid range is 0 kWh to 4,294,967,294 kWh.

This attribute shall be null if the value is unknown.

###### See

MatterSpecification.v11.Cluster § 4.2.7.21

##### attributes.lifetimeRunningHours

> `readonly` **lifetimeRunningHours**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated number of hours that the pump has been powered and the motor
has been running. It is updated dynamically as it increases. It is preserved over power cycles of the
pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If

the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214
hrs.

###### See

MatterSpecification.v11.Cluster § 4.2.7.19

##### attributes.maxCompPressure

> `readonly` **maxCompPressure**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxConstFlow

> `readonly` **maxConstFlow**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxConstPressure

> `readonly` **maxConstPressure**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxConstSpeed

> `readonly` **maxConstSpeed**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxConstTemp

> `readonly` **maxConstTemp**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.maxFlow

> `readonly` **maxFlow**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.3

##### attributes.maxPressure

> `readonly` **maxPressure**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.1

##### attributes.maxSpeed

> `readonly` **maxSpeed**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.2

##### attributes.minCompPressure

> `readonly` **minCompPressure**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minConstFlow

> `readonly` **minConstFlow**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minConstPressure

> `readonly` **minConstPressure**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minConstSpeed

> `readonly` **minConstSpeed**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.minConstTemp

> `readonly` **minConstTemp**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.operationMode

> `readonly` **operationMode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`OperationMode`](../enumerations/OperationMode.md), `any`\>

This attribute specifies the operation mode of the pump as defined in OperationModeEnum.

The actual operating mode of the pump is a result of the setting of the attributes OperationMode,
ControlMode and the optional connection of a remote sensor. The operation and control is prioritized as
shown in the scheme below:

Priority Scheme of Pump Operation and Control

If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is
operated.

If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote sensor
decides the control mode of the pump. A connected remote pressure sensor will make the pump run in
control mode Constant pressure and vice versa for flow and temperature type sensors. This is regardless
of the setting of the ControlMode attribute.

If this attribute is Normal and no remote sensor is connected, the control mode of the pump is decided
by the ControlMode attribute.

OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing the value of this attribute is vendor-specific.

In the case a device does not support a specific operation mode, the write interaction to this attribute
with an unsupported operation mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.22

##### attributes.power

> `readonly` **power**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute
is updated dynamically as the power consumption of the pump changes.

This attribute is read only. If the value is not available (the measurement of power consumption is not
done in the pump), this attribute will indicate the null value.

Valid range is 0 to 16,777,214 Watts.

###### See

MatterSpecification.v11.Cluster § 4.2.7.20

##### attributes.pumpStatus

> `readonly` **pumpStatus**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where
a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller
function is not active, the corresponding bit shall be set to 0.

###### See

MatterSpecification.v11.Cluster § 4.2.7.14

##### attributes.speed

> `readonly` **speed**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the
speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 to 65.534 RPM.

###### See

MatterSpecification.v11.Cluster § 4.2.7.18

##### events

> `readonly` **events**: `object`

##### events.airDetection

> `readonly` **airDetection**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.dryRunning

> `readonly` **dryRunning**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicFatalFailure

> `readonly` **electronicFatalFailure**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicNonFatalFailure

> `readonly` **electronicNonFatalFailure**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicTemperatureHigh

> `readonly` **electronicTemperatureHigh**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.generalFault

> `readonly` **generalFault**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.leakage

> `readonly` **leakage**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.motorTemperatureHigh

> `readonly` **motorTemperatureHigh**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.powerMissingPhase

> `readonly` **powerMissingPhase**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.pumpBlocked

> `readonly` **pumpBlocked**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.pumpMotorFatalFailure

> `readonly` **pumpMotorFatalFailure**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.sensorFailure

> `readonly` **sensorFailure**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.supplyVoltageHigh

> `readonly` **supplyVoltageHigh**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.supplyVoltageLow

> `readonly` **supplyVoltageLow**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.systemPressureHigh

> `readonly` **systemPressureHigh**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.systemPressureLow

> `readonly` **systemPressureLow**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.turbineOperation

> `readonly` **turbineOperation**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### features

> `readonly` **features**: `object`

##### features.automatic

> `readonly` **automatic**: [`BitFlag`](../../../../schema/README.md#bitflag)

Automatic

Supports operating in automatic mode

##### features.compensatedPressure

> `readonly` **compensatedPressure**: [`BitFlag`](../../../../schema/README.md#bitflag)

CompensatedPressure

Supports operating in compensated pressure mode

##### features.constantFlow

> `readonly` **constantFlow**: [`BitFlag`](../../../../schema/README.md#bitflag)

ConstantFlow

Supports operating in constant flow mode

##### features.constantPressure

> `readonly` **constantPressure**: [`BitFlag`](../../../../schema/README.md#bitflag)

ConstantPressure

Supports operating in constant pressure mode

##### features.constantSpeed

> `readonly` **constantSpeed**: [`BitFlag`](../../../../schema/README.md#bitflag)

ConstantSpeed

Supports operating in constant speed mode

##### features.constantTemperature

> `readonly` **constantTemperature**: [`BitFlag`](../../../../schema/README.md#bitflag)

ConstantTemperature

Supports operating in constant temperature mode

##### features.localOperation

> `readonly` **localOperation**: [`BitFlag`](../../../../schema/README.md#bitflag)

LocalOperation

Supports operating using local settings

##### id

> `readonly` **id**: `512`

##### name

> `readonly` **name**: `"PumpConfigurationAndControl"`

##### revision

> `readonly` **revision**: `4`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
