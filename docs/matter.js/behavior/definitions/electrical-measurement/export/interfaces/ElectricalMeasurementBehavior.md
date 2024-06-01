[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/electrical-measurement/export](../README.md) / ElectricalMeasurementBehavior

# Interface: ElectricalMeasurementBehavior

## Extends

- [`ElectricalMeasurementBehaviorType`](../-internal-/README.md#electricalmeasurementbehaviortype)

## Extended by

- [`ElectricalMeasurementServer`](../classes/ElectricalMeasurementServer.md)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`ElectricalMeasurementBehaviorType.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`ElectricalMeasurementBehaviorType.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`ElectricalMeasurementBehaviorType.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`ElectricalMeasurementBehaviorType.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`ElectricalMeasurementBehaviorType.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`ElectricalMeasurementBehaviorType.endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### acCurrentDivisor$Changing

> **acCurrentDivisor$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acCurrentMultiplier$Changing

> **acCurrentMultiplier$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acCurrentOverload$Changing

> **acCurrentOverload$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acFrequency$Changing

> **acFrequency$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acFrequencyDivisor$Changing

> **acFrequencyDivisor$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acFrequencyMax$Changing

> **acFrequencyMax$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acFrequencyMin$Changing

> **acFrequencyMin$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acFrequencyMultiplier$Changing

> **acFrequencyMultiplier$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acOverloadAlarmsMask$Changing

> **acOverloadAlarmsMask$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acPowerDivisor$Changing

> **acPowerDivisor$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acPowerFactor$Changing

> **acPowerFactor$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acPowerMultiplier$Changing

> **acPowerMultiplier$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acPowerOverload$Changing

> **acPowerOverload$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acReactivePowerOverload$Changing

> **acReactivePowerOverload$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acVoltageDivisor$Changing

> **acVoltageDivisor$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acVoltageMultiplier$Changing

> **acVoltageMultiplier$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acVoltageOverload$Changing

> **acVoltageOverload$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activeCurrentPhaseB$Changing

> **activeCurrentPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activeCurrentPhaseC$Changing

> **activeCurrentPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePower$Changing

> **activePower$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMax$Changing

> **activePowerMax$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMaxPhaseB$Changing

> **activePowerMaxPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMaxPhaseC$Changing

> **activePowerMaxPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMin$Changing

> **activePowerMin$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMinPhaseB$Changing

> **activePowerMinPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMinPhaseC$Changing

> **activePowerMinPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerPhaseB$Changing

> **activePowerPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerPhaseC$Changing

> **activePowerPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### apparentPower$Changing

> **apparentPower$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### apparentPowerPhaseB$Changing

> **apparentPowerPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### apparentPowerPhaseC$Changing

> **apparentPowerPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsOverVoltage$Changing

> **averageRmsOverVoltage$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsOverVoltageCounterPhaseB$Changing

> **averageRmsOverVoltageCounterPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsOverVoltageCounterPhaseC$Changing

> **averageRmsOverVoltageCounterPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsUnderVoltage$Changing

> **averageRmsUnderVoltage$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsUnderVoltageCounter$Changing

> **averageRmsUnderVoltageCounter$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsUnderVoltageCounterPhaseB$Changing

> **averageRmsUnderVoltageCounterPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsUnderVoltageCounterPhaseC$Changing

> **averageRmsUnderVoltageCounterPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsVoltageMeasurementPeriod$Changing

> **averageRmsVoltageMeasurementPeriod$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsVoltageMeasurementPeriodPhaseB$Changing

> **averageRmsVoltageMeasurementPeriodPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsVoltageMeasurementPeriodPhaseC$Changing

> **averageRmsVoltageMeasurementPeriodPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrent$Changing

> **dcCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrentDivisor$Changing

> **dcCurrentDivisor$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrentMax$Changing

> **dcCurrentMax$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrentMin$Changing

> **dcCurrentMin$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrentMultiplier$Changing

> **dcCurrentMultiplier$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrentOverload$Changing

> **dcCurrentOverload$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcOverloadAlarmsMask$Changing

> **dcOverloadAlarmsMask$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcPower$Changing

> **dcPower$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcPowerDivisor$Changing

> **dcPowerDivisor$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcPowerMax$Changing

> **dcPowerMax$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcPowerMin$Changing

> **dcPowerMin$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcPowerMultiplier$Changing

> **dcPowerMultiplier$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltage$Changing

> **dcVoltage$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltageDivisor$Changing

> **dcVoltageDivisor$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltageMax$Changing

> **dcVoltageMax$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltageMin$Changing

> **dcVoltageMin$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltageMultiplier$Changing

> **dcVoltageMultiplier$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltageOverload$Changing

> **dcVoltageOverload$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### harmonicCurrentMultiplier$Changing

> **harmonicCurrentMultiplier$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### instantaneousActiveCurrent$Changing

> **instantaneousActiveCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### instantaneousLineCurrent$Changing

> **instantaneousLineCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### instantaneousPower$Changing

> **instantaneousPower$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### instantaneousReactiveCurrent$Changing

> **instantaneousReactiveCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### instantaneousVoltage$Changing

> **instantaneousVoltage$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### lineCurrentPhaseB$Changing

> **lineCurrentPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### lineCurrentPhaseC$Changing

> **lineCurrentPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured11ThHarmonicCurrent$Changing

> **measured11ThHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured1StHarmonicCurrent$Changing

> **measured1StHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured3RdHarmonicCurrent$Changing

> **measured3RdHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured5ThHarmonicCurrent$Changing

> **measured5ThHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured7ThHarmonicCurrent$Changing

> **measured7ThHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured9ThHarmonicCurrent$Changing

> **measured9ThHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase11ThHarmonicCurrent$Changing

> **measuredPhase11ThHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase1StHarmonicCurrent$Changing

> **measuredPhase1StHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase3RdHarmonicCurrent$Changing

> **measuredPhase3RdHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase5ThHarmonicCurrent$Changing

> **measuredPhase5ThHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase7ThHarmonicCurrent$Changing

> **measuredPhase7ThHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase9ThHarmonicCurrent$Changing

> **measuredPhase9ThHarmonicCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measurementType$Changing

> **measurementType$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### neutralCurrent$Changing

> **neutralCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### phaseHarmonicCurrentMultiplier$Changing

> **phaseHarmonicCurrentMultiplier$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### powerDivisor$Changing

> **powerDivisor$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### powerFactorPhaseB$Changing

> **powerFactorPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### powerFactorPhaseC$Changing

> **powerFactorPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### powerMultiplier$Changing

> **powerMultiplier$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### reactiveCurrentPhaseB$Changing

> **reactiveCurrentPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### reactiveCurrentPhaseC$Changing

> **reactiveCurrentPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### reactivePower$Changing

> **reactivePower$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### reactivePowerPhaseB$Changing

> **reactivePowerPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### reactivePowerPhaseC$Changing

> **reactivePowerPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrent$Changing

> **rmsCurrent$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMax$Changing

> **rmsCurrentMax$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMaxPhaseB$Changing

> **rmsCurrentMaxPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMaxPhaseC$Changing

> **rmsCurrentMaxPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMin$Changing

> **rmsCurrentMin$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMinPhaseB$Changing

> **rmsCurrentMinPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMinPhaseC$Changing

> **rmsCurrentMinPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentPhaseB$Changing

> **rmsCurrentPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentPhaseC$Changing

> **rmsCurrentPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeOverVoltage$Changing

> **rmsExtremeOverVoltage$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeOverVoltagePeriod$Changing

> **rmsExtremeOverVoltagePeriod$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeOverVoltagePeriodPhaseB$Changing

> **rmsExtremeOverVoltagePeriodPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeOverVoltagePeriodPhaseC$Changing

> **rmsExtremeOverVoltagePeriodPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeUnderVoltage$Changing

> **rmsExtremeUnderVoltage$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeUnderVoltagePeriod$Changing

> **rmsExtremeUnderVoltagePeriod$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeUnderVoltagePeriodPhaseB$Changing

> **rmsExtremeUnderVoltagePeriodPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeUnderVoltagePeriodPhaseC$Changing

> **rmsExtremeUnderVoltagePeriodPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltage$Changing

> **rmsVoltage$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMax$Changing

> **rmsVoltageMax$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMaxPhaseB$Changing

> **rmsVoltageMaxPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMaxPhaseC$Changing

> **rmsVoltageMaxPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMin$Changing

> **rmsVoltageMin$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMinPhaseB$Changing

> **rmsVoltageMinPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMinPhaseC$Changing

> **rmsVoltageMinPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltagePhaseB$Changing

> **rmsVoltagePhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltagePhaseC$Changing

> **rmsVoltagePhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSag$Changing

> **rmsVoltageSag$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSagPeriod$Changing

> **rmsVoltageSagPeriod$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSagPeriodPhaseB$Changing

> **rmsVoltageSagPeriodPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSagPeriodPhaseC$Changing

> **rmsVoltageSagPeriodPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSwell$Changing

> **rmsVoltageSwell$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSwellPeriod$Changing

> **rmsVoltageSwellPeriod$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSwellPeriodPhaseB$Changing

> **rmsVoltageSwellPeriodPhaseB$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSwellPeriodPhaseC$Changing

> **rmsVoltageSwellPeriodPhaseC$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### totalActivePower$Changing

> **totalActivePower$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### totalApparentPower$Changing

> **totalApparentPower$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### totalReactivePower$Changing

> **totalReactivePower$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

#### Type declaration

##### acCurrentDivisor$Changed

> **acCurrentDivisor$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acCurrentMultiplier$Changed

> **acCurrentMultiplier$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acCurrentOverload$Changed

> **acCurrentOverload$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acFrequency$Changed

> **acFrequency$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acFrequencyDivisor$Changed

> **acFrequencyDivisor$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acFrequencyMax$Changed

> **acFrequencyMax$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acFrequencyMin$Changed

> **acFrequencyMin$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acFrequencyMultiplier$Changed

> **acFrequencyMultiplier$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acOverloadAlarmsMask$Changed

> **acOverloadAlarmsMask$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acPowerDivisor$Changed

> **acPowerDivisor$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acPowerFactor$Changed

> **acPowerFactor$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acPowerMultiplier$Changed

> **acPowerMultiplier$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acPowerOverload$Changed

> **acPowerOverload$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acReactivePowerOverload$Changed

> **acReactivePowerOverload$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acVoltageDivisor$Changed

> **acVoltageDivisor$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acVoltageMultiplier$Changed

> **acVoltageMultiplier$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acVoltageOverload$Changed

> **acVoltageOverload$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activeCurrentPhaseB$Changed

> **activeCurrentPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activeCurrentPhaseC$Changed

> **activeCurrentPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePower$Changed

> **activePower$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMax$Changed

> **activePowerMax$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMaxPhaseB$Changed

> **activePowerMaxPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMaxPhaseC$Changed

> **activePowerMaxPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMin$Changed

> **activePowerMin$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMinPhaseB$Changed

> **activePowerMinPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerMinPhaseC$Changed

> **activePowerMinPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerPhaseB$Changed

> **activePowerPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### activePowerPhaseC$Changed

> **activePowerPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### apparentPower$Changed

> **apparentPower$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### apparentPowerPhaseB$Changed

> **apparentPowerPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### apparentPowerPhaseC$Changed

> **apparentPowerPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsOverVoltage$Changed

> **averageRmsOverVoltage$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsOverVoltageCounterPhaseB$Changed

> **averageRmsOverVoltageCounterPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsOverVoltageCounterPhaseC$Changed

> **averageRmsOverVoltageCounterPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsUnderVoltage$Changed

> **averageRmsUnderVoltage$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsUnderVoltageCounter$Changed

> **averageRmsUnderVoltageCounter$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsUnderVoltageCounterPhaseB$Changed

> **averageRmsUnderVoltageCounterPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsUnderVoltageCounterPhaseC$Changed

> **averageRmsUnderVoltageCounterPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsVoltageMeasurementPeriod$Changed

> **averageRmsVoltageMeasurementPeriod$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsVoltageMeasurementPeriodPhaseB$Changed

> **averageRmsVoltageMeasurementPeriodPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### averageRmsVoltageMeasurementPeriodPhaseC$Changed

> **averageRmsVoltageMeasurementPeriodPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrent$Changed

> **dcCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrentDivisor$Changed

> **dcCurrentDivisor$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrentMax$Changed

> **dcCurrentMax$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrentMin$Changed

> **dcCurrentMin$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrentMultiplier$Changed

> **dcCurrentMultiplier$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcCurrentOverload$Changed

> **dcCurrentOverload$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcOverloadAlarmsMask$Changed

> **dcOverloadAlarmsMask$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcPower$Changed

> **dcPower$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcPowerDivisor$Changed

> **dcPowerDivisor$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcPowerMax$Changed

> **dcPowerMax$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcPowerMin$Changed

> **dcPowerMin$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcPowerMultiplier$Changed

> **dcPowerMultiplier$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltage$Changed

> **dcVoltage$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltageDivisor$Changed

> **dcVoltageDivisor$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltageMax$Changed

> **dcVoltageMax$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltageMin$Changed

> **dcVoltageMin$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltageMultiplier$Changed

> **dcVoltageMultiplier$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### dcVoltageOverload$Changed

> **dcVoltageOverload$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### harmonicCurrentMultiplier$Changed

> **harmonicCurrentMultiplier$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### instantaneousActiveCurrent$Changed

> **instantaneousActiveCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### instantaneousLineCurrent$Changed

> **instantaneousLineCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### instantaneousPower$Changed

> **instantaneousPower$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### instantaneousReactiveCurrent$Changed

> **instantaneousReactiveCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### instantaneousVoltage$Changed

> **instantaneousVoltage$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### lineCurrentPhaseB$Changed

> **lineCurrentPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### lineCurrentPhaseC$Changed

> **lineCurrentPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured11ThHarmonicCurrent$Changed

> **measured11ThHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured1StHarmonicCurrent$Changed

> **measured1StHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured3RdHarmonicCurrent$Changed

> **measured3RdHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured5ThHarmonicCurrent$Changed

> **measured5ThHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured7ThHarmonicCurrent$Changed

> **measured7ThHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measured9ThHarmonicCurrent$Changed

> **measured9ThHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase11ThHarmonicCurrent$Changed

> **measuredPhase11ThHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase1StHarmonicCurrent$Changed

> **measuredPhase1StHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase3RdHarmonicCurrent$Changed

> **measuredPhase3RdHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase5ThHarmonicCurrent$Changed

> **measuredPhase5ThHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase7ThHarmonicCurrent$Changed

> **measuredPhase7ThHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measuredPhase9ThHarmonicCurrent$Changed

> **measuredPhase9ThHarmonicCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### measurementType$Changed

> **measurementType$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### neutralCurrent$Changed

> **neutralCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### phaseHarmonicCurrentMultiplier$Changed

> **phaseHarmonicCurrentMultiplier$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### powerDivisor$Changed

> **powerDivisor$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### powerFactorPhaseB$Changed

> **powerFactorPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### powerFactorPhaseC$Changed

> **powerFactorPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### powerMultiplier$Changed

> **powerMultiplier$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### reactiveCurrentPhaseB$Changed

> **reactiveCurrentPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### reactiveCurrentPhaseC$Changed

> **reactiveCurrentPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### reactivePower$Changed

> **reactivePower$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### reactivePowerPhaseB$Changed

> **reactivePowerPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### reactivePowerPhaseC$Changed

> **reactivePowerPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrent$Changed

> **rmsCurrent$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMax$Changed

> **rmsCurrentMax$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMaxPhaseB$Changed

> **rmsCurrentMaxPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMaxPhaseC$Changed

> **rmsCurrentMaxPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMin$Changed

> **rmsCurrentMin$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMinPhaseB$Changed

> **rmsCurrentMinPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentMinPhaseC$Changed

> **rmsCurrentMinPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentPhaseB$Changed

> **rmsCurrentPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsCurrentPhaseC$Changed

> **rmsCurrentPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeOverVoltage$Changed

> **rmsExtremeOverVoltage$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeOverVoltagePeriod$Changed

> **rmsExtremeOverVoltagePeriod$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeOverVoltagePeriodPhaseB$Changed

> **rmsExtremeOverVoltagePeriodPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeOverVoltagePeriodPhaseC$Changed

> **rmsExtremeOverVoltagePeriodPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeUnderVoltage$Changed

> **rmsExtremeUnderVoltage$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeUnderVoltagePeriod$Changed

> **rmsExtremeUnderVoltagePeriod$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeUnderVoltagePeriodPhaseB$Changed

> **rmsExtremeUnderVoltagePeriodPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsExtremeUnderVoltagePeriodPhaseC$Changed

> **rmsExtremeUnderVoltagePeriodPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltage$Changed

> **rmsVoltage$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMax$Changed

> **rmsVoltageMax$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMaxPhaseB$Changed

> **rmsVoltageMaxPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMaxPhaseC$Changed

> **rmsVoltageMaxPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMin$Changed

> **rmsVoltageMin$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMinPhaseB$Changed

> **rmsVoltageMinPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageMinPhaseC$Changed

> **rmsVoltageMinPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltagePhaseB$Changed

> **rmsVoltagePhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltagePhaseC$Changed

> **rmsVoltagePhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSag$Changed

> **rmsVoltageSag$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSagPeriod$Changed

> **rmsVoltageSagPeriod$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSagPeriodPhaseB$Changed

> **rmsVoltageSagPeriodPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSagPeriodPhaseC$Changed

> **rmsVoltageSagPeriodPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSwell$Changed

> **rmsVoltageSwell$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSwellPeriod$Changed

> **rmsVoltageSwellPeriod$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSwellPeriodPhaseB$Changed

> **rmsVoltageSwellPeriodPhaseB$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### rmsVoltageSwellPeriodPhaseC$Changed

> **rmsVoltageSwellPeriodPhaseC$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### totalActivePower$Changed

> **totalActivePower$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### totalApparentPower$Changed

> **totalApparentPower$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### totalReactivePower$Changed

> **totalReactivePower$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

`ElectricalMeasurementBehaviorType.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

`ElectricalMeasurementBehaviorType.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`ElectricalMeasurementBehaviorType.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### acCurrentDivisor?

> `optional` **acCurrentDivisor**: `number`

##### acCurrentMultiplier?

> `optional` **acCurrentMultiplier**: `number`

##### acCurrentOverload?

> `optional` **acCurrentOverload**: `number`

##### acFrequency?

> `optional` **acFrequency**: `number`

##### acFrequencyDivisor?

> `optional` **acFrequencyDivisor**: `number`

##### acFrequencyMax?

> `optional` **acFrequencyMax**: `number`

##### acFrequencyMin?

> `optional` **acFrequencyMin**: `number`

##### acFrequencyMultiplier?

> `optional` **acFrequencyMultiplier**: `number`

##### acOverloadAlarmsMask?

> `optional` **acOverloadAlarmsMask**: `number`

##### acPowerDivisor?

> `optional` **acPowerDivisor**: `number`

##### acPowerFactor?

> `optional` **acPowerFactor**: `number`

##### acPowerMultiplier?

> `optional` **acPowerMultiplier**: `number`

##### acPowerOverload?

> `optional` **acPowerOverload**: `number`

##### acReactivePowerOverload?

> `optional` **acReactivePowerOverload**: `number`

##### acVoltageDivisor?

> `optional` **acVoltageDivisor**: `number`

##### acVoltageMultiplier?

> `optional` **acVoltageMultiplier**: `number`

##### acVoltageOverload?

> `optional` **acVoltageOverload**: `number`

##### activeCurrentPhaseB?

> `optional` **activeCurrentPhaseB**: `number`

##### activeCurrentPhaseC?

> `optional` **activeCurrentPhaseC**: `number`

##### activePower?

> `optional` **activePower**: `number`

##### activePowerMax?

> `optional` **activePowerMax**: `number`

##### activePowerMaxPhaseB?

> `optional` **activePowerMaxPhaseB**: `number`

##### activePowerMaxPhaseC?

> `optional` **activePowerMaxPhaseC**: `number`

##### activePowerMin?

> `optional` **activePowerMin**: `number`

##### activePowerMinPhaseB?

> `optional` **activePowerMinPhaseB**: `number`

##### activePowerMinPhaseC?

> `optional` **activePowerMinPhaseC**: `number`

##### activePowerPhaseB?

> `optional` **activePowerPhaseB**: `number`

##### activePowerPhaseC?

> `optional` **activePowerPhaseC**: `number`

##### apparentPower?

> `optional` **apparentPower**: `number`

##### apparentPowerPhaseB?

> `optional` **apparentPowerPhaseB**: `number`

##### apparentPowerPhaseC?

> `optional` **apparentPowerPhaseC**: `number`

##### averageRmsOverVoltage?

> `optional` **averageRmsOverVoltage**: `number`

##### averageRmsOverVoltageCounterPhaseB?

> `optional` **averageRmsOverVoltageCounterPhaseB**: `number`

##### averageRmsOverVoltageCounterPhaseC?

> `optional` **averageRmsOverVoltageCounterPhaseC**: `number`

##### averageRmsUnderVoltage?

> `optional` **averageRmsUnderVoltage**: `number`

##### averageRmsUnderVoltageCounter?

> `optional` **averageRmsUnderVoltageCounter**: `number`

##### averageRmsUnderVoltageCounterPhaseB?

> `optional` **averageRmsUnderVoltageCounterPhaseB**: `number`

##### averageRmsUnderVoltageCounterPhaseC?

> `optional` **averageRmsUnderVoltageCounterPhaseC**: `number`

##### averageRmsVoltageMeasurementPeriod?

> `optional` **averageRmsVoltageMeasurementPeriod**: `number`

##### averageRmsVoltageMeasurementPeriodPhaseB?

> `optional` **averageRmsVoltageMeasurementPeriodPhaseB**: `number`

##### averageRmsVoltageMeasurementPeriodPhaseC?

> `optional` **averageRmsVoltageMeasurementPeriodPhaseC**: `number`

##### dcCurrent?

> `optional` **dcCurrent**: `number`

##### dcCurrentDivisor?

> `optional` **dcCurrentDivisor**: `number`

##### dcCurrentMax?

> `optional` **dcCurrentMax**: `number`

##### dcCurrentMin?

> `optional` **dcCurrentMin**: `number`

##### dcCurrentMultiplier?

> `optional` **dcCurrentMultiplier**: `number`

##### dcCurrentOverload?

> `optional` **dcCurrentOverload**: `number`

##### dcOverloadAlarmsMask?

> `optional` **dcOverloadAlarmsMask**: `number`

##### dcPower?

> `optional` **dcPower**: `number`

##### dcPowerDivisor?

> `optional` **dcPowerDivisor**: `number`

##### dcPowerMax?

> `optional` **dcPowerMax**: `number`

##### dcPowerMin?

> `optional` **dcPowerMin**: `number`

##### dcPowerMultiplier?

> `optional` **dcPowerMultiplier**: `number`

##### dcVoltage?

> `optional` **dcVoltage**: `number`

##### dcVoltageDivisor?

> `optional` **dcVoltageDivisor**: `number`

##### dcVoltageMax?

> `optional` **dcVoltageMax**: `number`

##### dcVoltageMin?

> `optional` **dcVoltageMin**: `number`

##### dcVoltageMultiplier?

> `optional` **dcVoltageMultiplier**: `number`

##### dcVoltageOverload?

> `optional` **dcVoltageOverload**: `number`

##### harmonicCurrentMultiplier?

> `optional` **harmonicCurrentMultiplier**: `number`

##### instantaneousActiveCurrent?

> `optional` **instantaneousActiveCurrent**: `number`

##### instantaneousLineCurrent?

> `optional` **instantaneousLineCurrent**: `number`

##### instantaneousPower?

> `optional` **instantaneousPower**: `number`

##### instantaneousReactiveCurrent?

> `optional` **instantaneousReactiveCurrent**: `number`

##### instantaneousVoltage?

> `optional` **instantaneousVoltage**: `number`

##### lineCurrentPhaseB?

> `optional` **lineCurrentPhaseB**: `number`

##### lineCurrentPhaseC?

> `optional` **lineCurrentPhaseC**: `number`

##### measured11ThHarmonicCurrent?

> `optional` **measured11ThHarmonicCurrent**: `number`

##### measured1StHarmonicCurrent?

> `optional` **measured1StHarmonicCurrent**: `number`

##### measured3RdHarmonicCurrent?

> `optional` **measured3RdHarmonicCurrent**: `number`

##### measured5ThHarmonicCurrent?

> `optional` **measured5ThHarmonicCurrent**: `number`

##### measured7ThHarmonicCurrent?

> `optional` **measured7ThHarmonicCurrent**: `number`

##### measured9ThHarmonicCurrent?

> `optional` **measured9ThHarmonicCurrent**: `number`

##### measuredPhase11ThHarmonicCurrent?

> `optional` **measuredPhase11ThHarmonicCurrent**: `number`

##### measuredPhase1StHarmonicCurrent?

> `optional` **measuredPhase1StHarmonicCurrent**: `number`

##### measuredPhase3RdHarmonicCurrent?

> `optional` **measuredPhase3RdHarmonicCurrent**: `number`

##### measuredPhase5ThHarmonicCurrent?

> `optional` **measuredPhase5ThHarmonicCurrent**: `number`

##### measuredPhase7ThHarmonicCurrent?

> `optional` **measuredPhase7ThHarmonicCurrent**: `number`

##### measuredPhase9ThHarmonicCurrent?

> `optional` **measuredPhase9ThHarmonicCurrent**: `number`

##### measurementType?

> `optional` **measurementType**: `number`

##### neutralCurrent?

> `optional` **neutralCurrent**: `number`

##### phaseHarmonicCurrentMultiplier?

> `optional` **phaseHarmonicCurrentMultiplier**: `number`

##### powerDivisor?

> `optional` **powerDivisor**: `number`

##### powerFactorPhaseB?

> `optional` **powerFactorPhaseB**: `number`

##### powerFactorPhaseC?

> `optional` **powerFactorPhaseC**: `number`

##### powerMultiplier?

> `optional` **powerMultiplier**: `number`

##### reactiveCurrentPhaseB?

> `optional` **reactiveCurrentPhaseB**: `number`

##### reactiveCurrentPhaseC?

> `optional` **reactiveCurrentPhaseC**: `number`

##### reactivePower?

> `optional` **reactivePower**: `number`

##### reactivePowerPhaseB?

> `optional` **reactivePowerPhaseB**: `number`

##### reactivePowerPhaseC?

> `optional` **reactivePowerPhaseC**: `number`

##### rmsCurrent?

> `optional` **rmsCurrent**: `number`

##### rmsCurrentMax?

> `optional` **rmsCurrentMax**: `number`

##### rmsCurrentMaxPhaseB?

> `optional` **rmsCurrentMaxPhaseB**: `number`

##### rmsCurrentMaxPhaseC?

> `optional` **rmsCurrentMaxPhaseC**: `number`

##### rmsCurrentMin?

> `optional` **rmsCurrentMin**: `number`

##### rmsCurrentMinPhaseB?

> `optional` **rmsCurrentMinPhaseB**: `number`

##### rmsCurrentMinPhaseC?

> `optional` **rmsCurrentMinPhaseC**: `number`

##### rmsCurrentPhaseB?

> `optional` **rmsCurrentPhaseB**: `number`

##### rmsCurrentPhaseC?

> `optional` **rmsCurrentPhaseC**: `number`

##### rmsExtremeOverVoltage?

> `optional` **rmsExtremeOverVoltage**: `number`

##### rmsExtremeOverVoltagePeriod?

> `optional` **rmsExtremeOverVoltagePeriod**: `number`

##### rmsExtremeOverVoltagePeriodPhaseB?

> `optional` **rmsExtremeOverVoltagePeriodPhaseB**: `number`

##### rmsExtremeOverVoltagePeriodPhaseC?

> `optional` **rmsExtremeOverVoltagePeriodPhaseC**: `number`

##### rmsExtremeUnderVoltage?

> `optional` **rmsExtremeUnderVoltage**: `number`

##### rmsExtremeUnderVoltagePeriod?

> `optional` **rmsExtremeUnderVoltagePeriod**: `number`

##### rmsExtremeUnderVoltagePeriodPhaseB?

> `optional` **rmsExtremeUnderVoltagePeriodPhaseB**: `number`

##### rmsExtremeUnderVoltagePeriodPhaseC?

> `optional` **rmsExtremeUnderVoltagePeriodPhaseC**: `number`

##### rmsVoltage?

> `optional` **rmsVoltage**: `number`

##### rmsVoltageMax?

> `optional` **rmsVoltageMax**: `number`

##### rmsVoltageMaxPhaseB?

> `optional` **rmsVoltageMaxPhaseB**: `number`

##### rmsVoltageMaxPhaseC?

> `optional` **rmsVoltageMaxPhaseC**: `number`

##### rmsVoltageMin?

> `optional` **rmsVoltageMin**: `number`

##### rmsVoltageMinPhaseB?

> `optional` **rmsVoltageMinPhaseB**: `number`

##### rmsVoltageMinPhaseC?

> `optional` **rmsVoltageMinPhaseC**: `number`

##### rmsVoltagePhaseB?

> `optional` **rmsVoltagePhaseB**: `number`

##### rmsVoltagePhaseC?

> `optional` **rmsVoltagePhaseC**: `number`

##### rmsVoltageSag?

> `optional` **rmsVoltageSag**: `number`

##### rmsVoltageSagPeriod?

> `optional` **rmsVoltageSagPeriod**: `number`

##### rmsVoltageSagPeriodPhaseB?

> `optional` **rmsVoltageSagPeriodPhaseB**: `number`

##### rmsVoltageSagPeriodPhaseC?

> `optional` **rmsVoltageSagPeriodPhaseC**: `number`

##### rmsVoltageSwell?

> `optional` **rmsVoltageSwell**: `number`

##### rmsVoltageSwellPeriod?

> `optional` **rmsVoltageSwellPeriod**: `number`

##### rmsVoltageSwellPeriodPhaseB?

> `optional` **rmsVoltageSwellPeriodPhaseB**: `number`

##### rmsVoltageSwellPeriodPhaseC?

> `optional` **rmsVoltageSwellPeriodPhaseC**: `number`

##### totalActivePower?

> `optional` **totalActivePower**: `number`

##### totalApparentPower?

> `optional` **totalApparentPower**: `number`

##### totalReactivePower?

> `optional` **totalReactivePower**: `number`

#### Inherited from

`ElectricalMeasurementBehaviorType.state`

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

`ElectricalMeasurementBehaviorType.[asyncDispose]`

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

`ElectricalMeasurementBehaviorType.asAdmin`

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

`ElectricalMeasurementBehaviorType.assertAttributeEnabled`

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

`ElectricalMeasurementBehaviorType.callback`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### getMeasurementProfileCommand()

> **getMeasurementProfileCommand**(`request`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ElectricalMeasurementBehaviorType.getMeasurementProfileCommand`

#### Source

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L18)

***

### getProfileInfoCommand()

> **getProfileInfoCommand**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ElectricalMeasurementBehaviorType.getProfileInfoCommand`

#### Source

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L17)

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

`ElectricalMeasurementBehaviorType.initialize`

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

`ElectricalMeasurementBehaviorType.reactTo`

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

`ElectricalMeasurementBehaviorType.requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`ElectricalMeasurementBehaviorType.toString`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)
