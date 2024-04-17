[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/electrical-measurement/export](../modules/behavior_definitions_electrical_measurement_export.md) / ElectricalMeasurementBehavior

# Interface: ElectricalMeasurementBehavior

[behavior/definitions/electrical-measurement/export](../modules/behavior_definitions_electrical_measurement_export.md).ElectricalMeasurementBehavior

## Hierarchy

- [`ElectricalMeasurementBehaviorType`](../modules/behavior_definitions_electrical_measurement_export._internal_.md#electricalmeasurementbehaviortype)

  ↳ **`ElectricalMeasurementBehavior`**

  ↳↳ [`ElectricalMeasurementServer`](../classes/behavior_definitions_electrical_measurement_export.ElectricalMeasurementServer.md)

## Table of contents

### Properties

- [#agent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md##agent)
- [[reference]](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#[reference])
- [agent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#agent)
- [cluster](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#cluster)
- [context](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#context)
- [endpoint](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#endpoint)
- [events](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#events)
- [features](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#features)
- [session](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#session)
- [state](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#asadmin)
- [callback](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#callback)
- [getMeasurementProfileCommand](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#getmeasurementprofilecommand)
- [getProfileInfoCommand](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#getprofileinfocommand)
- [initialize](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#initialize)
- [reactTo](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#reactto)
- [toString](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md#tostring)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ElectricalMeasurementBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

ElectricalMeasurementBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ElectricalMeasurementBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

ElectricalMeasurementBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

ElectricalMeasurementBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

ElectricalMeasurementBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & {} & \{ `acCurrentDivisor$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acCurrentMultiplier$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acCurrentOverload$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acFrequency$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acFrequencyDivisor$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acFrequencyMax$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acFrequencyMin$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acFrequencyMultiplier$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acOverloadAlarmsMask$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acPowerDivisor$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acPowerFactor$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acPowerMultiplier$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acPowerOverload$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acReactivePowerOverload$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acVoltageDivisor$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acVoltageMultiplier$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acVoltageOverload$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activeCurrentPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activeCurrentPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activePower$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activePowerMax$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activePowerMaxPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activePowerMaxPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activePowerMin$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activePowerMinPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activePowerMinPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activePowerPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `activePowerPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `apparentPower$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `apparentPowerPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `apparentPowerPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `averageRmsOverVoltage$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `averageRmsOverVoltageCounterPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `averageRmsOverVoltageCounterPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `averageRmsUnderVoltage$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `averageRmsUnderVoltageCounter$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `averageRmsUnderVoltageCounterPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `averageRmsUnderVoltageCounterPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `averageRmsVoltageMeasurementPeriod$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `averageRmsVoltageMeasurementPeriodPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `averageRmsVoltageMeasurementPeriodPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcCurrentDivisor$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcCurrentMax$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcCurrentMin$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcCurrentMultiplier$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcCurrentOverload$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcOverloadAlarmsMask$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcPower$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcPowerDivisor$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcPowerMax$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcPowerMin$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcPowerMultiplier$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcVoltage$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcVoltageDivisor$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcVoltageMax$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcVoltageMin$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcVoltageMultiplier$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `dcVoltageOverload$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `harmonicCurrentMultiplier$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `instantaneousActiveCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `instantaneousLineCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `instantaneousPower$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `instantaneousReactiveCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `instantaneousVoltage$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `lineCurrentPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `lineCurrentPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measured11ThHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measured1StHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measured3RdHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measured5ThHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measured7ThHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measured9ThHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measuredPhase11ThHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measuredPhase1StHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measuredPhase3RdHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measuredPhase5ThHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measuredPhase7ThHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measuredPhase9ThHarmonicCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `measurementType$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `neutralCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `phaseHarmonicCurrentMultiplier$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `powerDivisor$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `powerFactorPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `powerFactorPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `powerMultiplier$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `reactiveCurrentPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `reactiveCurrentPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `reactivePower$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `reactivePowerPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `reactivePowerPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsCurrent$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsCurrentMax$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsCurrentMaxPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsCurrentMaxPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsCurrentMin$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsCurrentMinPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsCurrentMinPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsCurrentPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsCurrentPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsExtremeOverVoltage$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsExtremeOverVoltagePeriod$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsExtremeOverVoltagePeriodPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsExtremeOverVoltagePeriodPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsExtremeUnderVoltage$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsExtremeUnderVoltagePeriod$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsExtremeUnderVoltagePeriodPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsExtremeUnderVoltagePeriodPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltage$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageMax$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageMaxPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageMaxPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageMin$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageMinPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageMinPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltagePhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltagePhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageSag$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageSagPeriod$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageSagPeriodPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageSagPeriodPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageSwell$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageSwellPeriod$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageSwellPeriodPhaseB$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `rmsVoltageSwellPeriodPhaseC$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `totalActivePower$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `totalApparentPower$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `totalReactivePower$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

ElectricalMeasurementBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

ElectricalMeasurementBehaviorType.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### session

• **session**: [`SecureSession`](../classes/session_export.SecureSession.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

ElectricalMeasurementBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & {} & \{ `acCurrentDivisor?`: `number` ; `acCurrentMultiplier?`: `number` ; `acCurrentOverload?`: `number` ; `acFrequency?`: `number` ; `acFrequencyDivisor?`: `number` ; `acFrequencyMax?`: `number` ; `acFrequencyMin?`: `number` ; `acFrequencyMultiplier?`: `number` ; `acOverloadAlarmsMask?`: `number` ; `acPowerDivisor?`: `number` ; `acPowerFactor?`: `number` ; `acPowerMultiplier?`: `number` ; `acPowerOverload?`: `number` ; `acReactivePowerOverload?`: `number` ; `acVoltageDivisor?`: `number` ; `acVoltageMultiplier?`: `number` ; `acVoltageOverload?`: `number` ; `activeCurrentPhaseB?`: `number` ; `activeCurrentPhaseC?`: `number` ; `activePower?`: `number` ; `activePowerMax?`: `number` ; `activePowerMaxPhaseB?`: `number` ; `activePowerMaxPhaseC?`: `number` ; `activePowerMin?`: `number` ; `activePowerMinPhaseB?`: `number` ; `activePowerMinPhaseC?`: `number` ; `activePowerPhaseB?`: `number` ; `activePowerPhaseC?`: `number` ; `apparentPower?`: `number` ; `apparentPowerPhaseB?`: `number` ; `apparentPowerPhaseC?`: `number` ; `averageRmsOverVoltage?`: `number` ; `averageRmsOverVoltageCounterPhaseB?`: `number` ; `averageRmsOverVoltageCounterPhaseC?`: `number` ; `averageRmsUnderVoltage?`: `number` ; `averageRmsUnderVoltageCounter?`: `number` ; `averageRmsUnderVoltageCounterPhaseB?`: `number` ; `averageRmsUnderVoltageCounterPhaseC?`: `number` ; `averageRmsVoltageMeasurementPeriod?`: `number` ; `averageRmsVoltageMeasurementPeriodPhaseB?`: `number` ; `averageRmsVoltageMeasurementPeriodPhaseC?`: `number` ; `dcCurrent?`: `number` ; `dcCurrentDivisor?`: `number` ; `dcCurrentMax?`: `number` ; `dcCurrentMin?`: `number` ; `dcCurrentMultiplier?`: `number` ; `dcCurrentOverload?`: `number` ; `dcOverloadAlarmsMask?`: `number` ; `dcPower?`: `number` ; `dcPowerDivisor?`: `number` ; `dcPowerMax?`: `number` ; `dcPowerMin?`: `number` ; `dcPowerMultiplier?`: `number` ; `dcVoltage?`: `number` ; `dcVoltageDivisor?`: `number` ; `dcVoltageMax?`: `number` ; `dcVoltageMin?`: `number` ; `dcVoltageMultiplier?`: `number` ; `dcVoltageOverload?`: `number` ; `harmonicCurrentMultiplier?`: `number` ; `instantaneousActiveCurrent?`: `number` ; `instantaneousLineCurrent?`: `number` ; `instantaneousPower?`: `number` ; `instantaneousReactiveCurrent?`: `number` ; `instantaneousVoltage?`: `number` ; `lineCurrentPhaseB?`: `number` ; `lineCurrentPhaseC?`: `number` ; `measured11ThHarmonicCurrent?`: `number` ; `measured1StHarmonicCurrent?`: `number` ; `measured3RdHarmonicCurrent?`: `number` ; `measured5ThHarmonicCurrent?`: `number` ; `measured7ThHarmonicCurrent?`: `number` ; `measured9ThHarmonicCurrent?`: `number` ; `measuredPhase11ThHarmonicCurrent?`: `number` ; `measuredPhase1StHarmonicCurrent?`: `number` ; `measuredPhase3RdHarmonicCurrent?`: `number` ; `measuredPhase5ThHarmonicCurrent?`: `number` ; `measuredPhase7ThHarmonicCurrent?`: `number` ; `measuredPhase9ThHarmonicCurrent?`: `number` ; `measurementType?`: `number` ; `neutralCurrent?`: `number` ; `phaseHarmonicCurrentMultiplier?`: `number` ; `powerDivisor?`: `number` ; `powerFactorPhaseB?`: `number` ; `powerFactorPhaseC?`: `number` ; `powerMultiplier?`: `number` ; `reactiveCurrentPhaseB?`: `number` ; `reactiveCurrentPhaseC?`: `number` ; `reactivePower?`: `number` ; `reactivePowerPhaseB?`: `number` ; `reactivePowerPhaseC?`: `number` ; `rmsCurrent?`: `number` ; `rmsCurrentMax?`: `number` ; `rmsCurrentMaxPhaseB?`: `number` ; `rmsCurrentMaxPhaseC?`: `number` ; `rmsCurrentMin?`: `number` ; `rmsCurrentMinPhaseB?`: `number` ; `rmsCurrentMinPhaseC?`: `number` ; `rmsCurrentPhaseB?`: `number` ; `rmsCurrentPhaseC?`: `number` ; `rmsExtremeOverVoltage?`: `number` ; `rmsExtremeOverVoltagePeriod?`: `number` ; `rmsExtremeOverVoltagePeriodPhaseB?`: `number` ; `rmsExtremeOverVoltagePeriodPhaseC?`: `number` ; `rmsExtremeUnderVoltage?`: `number` ; `rmsExtremeUnderVoltagePeriod?`: `number` ; `rmsExtremeUnderVoltagePeriodPhaseB?`: `number` ; `rmsExtremeUnderVoltagePeriodPhaseC?`: `number` ; `rmsVoltage?`: `number` ; `rmsVoltageMax?`: `number` ; `rmsVoltageMaxPhaseB?`: `number` ; `rmsVoltageMaxPhaseC?`: `number` ; `rmsVoltageMin?`: `number` ; `rmsVoltageMinPhaseB?`: `number` ; `rmsVoltageMinPhaseC?`: `number` ; `rmsVoltagePhaseB?`: `number` ; `rmsVoltagePhaseC?`: `number` ; `rmsVoltageSag?`: `number` ; `rmsVoltageSagPeriod?`: `number` ; `rmsVoltageSagPeriodPhaseB?`: `number` ; `rmsVoltageSagPeriodPhaseC?`: `number` ; `rmsVoltageSwell?`: `number` ; `rmsVoltageSwellPeriod?`: `number` ; `rmsVoltageSwellPeriodPhaseB?`: `number` ; `rmsVoltageSwellPeriodPhaseC?`: `number` ; `totalActivePower?`: `number` ; `totalApparentPower?`: `number` ; `totalReactivePower?`: `number`  } & {} & {}

Access the behavior's state.

#### Inherited from

ElectricalMeasurementBehaviorType.state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ElectricalMeasurementBehaviorType.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### asAdmin

▸ **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

ElectricalMeasurementBehaviorType.asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### callback

▸ **callback**\<`A`, `R`\>(`reactor`, `options?`): (...`args`: `A`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../modules/behavior_export.md#reactor).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`A`, `R`\> |
| `options?` | [`Options`](behavior_export.Reactor.Options.md) |

#### Returns

`fn`

▸ (`...args`): `undefined` \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

ElectricalMeasurementBehaviorType.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### getMeasurementProfileCommand

▸ **getMeasurementProfileCommand**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `numberOfIntervals`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `startTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ElectricalMeasurementBehaviorType.getMeasurementProfileCommand

#### Defined in

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L18)

___

### getProfileInfoCommand

▸ **getProfileInfoCommand**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ElectricalMeasurementBehaviorType.getProfileInfoCommand

#### Defined in

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L17)

___

### initialize

▸ **initialize**(`_options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ElectricalMeasurementBehaviorType.initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

ElectricalMeasurementBehaviorType.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

ElectricalMeasurementBehaviorType.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)
