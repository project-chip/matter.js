[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/electrical-measurement/export](../modules/behavior_definitions_electrical_measurement_export.md) / [ElectricalMeasurementBehavior](../modules/behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.md) / State

# Interface: State

[behavior/definitions/electrical-measurement/export](../modules/behavior_definitions_electrical_measurement_export.md).[ElectricalMeasurementBehavior](../modules/behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_electrical_measurement_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [acCurrentDivisor](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#accurrentdivisor)
- [acCurrentMultiplier](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#accurrentmultiplier)
- [acCurrentOverload](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#accurrentoverload)
- [acFrequency](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acfrequency)
- [acFrequencyDivisor](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acfrequencydivisor)
- [acFrequencyMax](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acfrequencymax)
- [acFrequencyMin](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acfrequencymin)
- [acFrequencyMultiplier](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acfrequencymultiplier)
- [acOverloadAlarmsMask](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acoverloadalarmsmask)
- [acPowerDivisor](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acpowerdivisor)
- [acPowerFactor](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acpowerfactor)
- [acPowerMultiplier](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acpowermultiplier)
- [acPowerOverload](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acpoweroverload)
- [acReactivePowerOverload](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acreactivepoweroverload)
- [acVoltageDivisor](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acvoltagedivisor)
- [acVoltageMultiplier](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acvoltagemultiplier)
- [acVoltageOverload](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#acvoltageoverload)
- [activeCurrentPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activecurrentphaseb)
- [activeCurrentPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activecurrentphasec)
- [activePower](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activepower)
- [activePowerMax](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activepowermax)
- [activePowerMaxPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activepowermaxphaseb)
- [activePowerMaxPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activepowermaxphasec)
- [activePowerMin](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activepowermin)
- [activePowerMinPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activepowerminphaseb)
- [activePowerMinPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activepowerminphasec)
- [activePowerPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activepowerphaseb)
- [activePowerPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#activepowerphasec)
- [apparentPower](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#apparentpower)
- [apparentPowerPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#apparentpowerphaseb)
- [apparentPowerPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#apparentpowerphasec)
- [averageRmsOverVoltage](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#averagermsovervoltage)
- [averageRmsOverVoltageCounterPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#averagermsovervoltagecounterphaseb)
- [averageRmsOverVoltageCounterPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#averagermsovervoltagecounterphasec)
- [averageRmsUnderVoltage](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#averagermsundervoltage)
- [averageRmsUnderVoltageCounter](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#averagermsundervoltagecounter)
- [averageRmsUnderVoltageCounterPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#averagermsundervoltagecounterphaseb)
- [averageRmsUnderVoltageCounterPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#averagermsundervoltagecounterphasec)
- [averageRmsVoltageMeasurementPeriod](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#averagermsvoltagemeasurementperiod)
- [averageRmsVoltageMeasurementPeriodPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#averagermsvoltagemeasurementperiodphaseb)
- [averageRmsVoltageMeasurementPeriodPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#averagermsvoltagemeasurementperiodphasec)
- [dcCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dccurrent)
- [dcCurrentDivisor](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dccurrentdivisor)
- [dcCurrentMax](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dccurrentmax)
- [dcCurrentMin](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dccurrentmin)
- [dcCurrentMultiplier](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dccurrentmultiplier)
- [dcCurrentOverload](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dccurrentoverload)
- [dcOverloadAlarmsMask](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcoverloadalarmsmask)
- [dcPower](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcpower)
- [dcPowerDivisor](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcpowerdivisor)
- [dcPowerMax](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcpowermax)
- [dcPowerMin](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcpowermin)
- [dcPowerMultiplier](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcpowermultiplier)
- [dcVoltage](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcvoltage)
- [dcVoltageDivisor](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcvoltagedivisor)
- [dcVoltageMax](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcvoltagemax)
- [dcVoltageMin](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcvoltagemin)
- [dcVoltageMultiplier](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcvoltagemultiplier)
- [dcVoltageOverload](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#dcvoltageoverload)
- [harmonicCurrentMultiplier](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#harmoniccurrentmultiplier)
- [instantaneousActiveCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#instantaneousactivecurrent)
- [instantaneousLineCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#instantaneouslinecurrent)
- [instantaneousPower](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#instantaneouspower)
- [instantaneousReactiveCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#instantaneousreactivecurrent)
- [instantaneousVoltage](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#instantaneousvoltage)
- [lineCurrentPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#linecurrentphaseb)
- [lineCurrentPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#linecurrentphasec)
- [measured11ThHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measured11thharmoniccurrent)
- [measured1StHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measured1stharmoniccurrent)
- [measured3RdHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measured3rdharmoniccurrent)
- [measured5ThHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measured5thharmoniccurrent)
- [measured7ThHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measured7thharmoniccurrent)
- [measured9ThHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measured9thharmoniccurrent)
- [measuredPhase11ThHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measuredphase11thharmoniccurrent)
- [measuredPhase1StHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measuredphase1stharmoniccurrent)
- [measuredPhase3RdHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measuredphase3rdharmoniccurrent)
- [measuredPhase5ThHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measuredphase5thharmoniccurrent)
- [measuredPhase7ThHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measuredphase7thharmoniccurrent)
- [measuredPhase9ThHarmonicCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measuredphase9thharmoniccurrent)
- [measurementType](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#measurementtype)
- [neutralCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#neutralcurrent)
- [phaseHarmonicCurrentMultiplier](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#phaseharmoniccurrentmultiplier)
- [powerDivisor](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#powerdivisor)
- [powerFactorPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#powerfactorphaseb)
- [powerFactorPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#powerfactorphasec)
- [powerMultiplier](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#powermultiplier)
- [reactiveCurrentPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#reactivecurrentphaseb)
- [reactiveCurrentPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#reactivecurrentphasec)
- [reactivePower](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#reactivepower)
- [reactivePowerPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#reactivepowerphaseb)
- [reactivePowerPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#reactivepowerphasec)
- [rmsCurrent](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmscurrent)
- [rmsCurrentMax](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmscurrentmax)
- [rmsCurrentMaxPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmscurrentmaxphaseb)
- [rmsCurrentMaxPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmscurrentmaxphasec)
- [rmsCurrentMin](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmscurrentmin)
- [rmsCurrentMinPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmscurrentminphaseb)
- [rmsCurrentMinPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmscurrentminphasec)
- [rmsCurrentPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmscurrentphaseb)
- [rmsCurrentPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmscurrentphasec)
- [rmsExtremeOverVoltage](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsextremeovervoltage)
- [rmsExtremeOverVoltagePeriod](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsextremeovervoltageperiod)
- [rmsExtremeOverVoltagePeriodPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsextremeovervoltageperiodphaseb)
- [rmsExtremeOverVoltagePeriodPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsextremeovervoltageperiodphasec)
- [rmsExtremeUnderVoltage](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsextremeundervoltage)
- [rmsExtremeUnderVoltagePeriod](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsextremeundervoltageperiod)
- [rmsExtremeUnderVoltagePeriodPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsextremeundervoltageperiodphaseb)
- [rmsExtremeUnderVoltagePeriodPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsextremeundervoltageperiodphasec)
- [rmsVoltage](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltage)
- [rmsVoltageMax](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltagemax)
- [rmsVoltageMaxPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltagemaxphaseb)
- [rmsVoltageMaxPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltagemaxphasec)
- [rmsVoltageMin](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltagemin)
- [rmsVoltageMinPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltageminphaseb)
- [rmsVoltageMinPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltageminphasec)
- [rmsVoltagePhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltagephaseb)
- [rmsVoltagePhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltagephasec)
- [rmsVoltageSag](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltagesag)
- [rmsVoltageSagPeriod](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltagesagperiod)
- [rmsVoltageSagPeriodPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltagesagperiodphaseb)
- [rmsVoltageSagPeriodPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltagesagperiodphasec)
- [rmsVoltageSwell](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltageswell)
- [rmsVoltageSwellPeriod](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltageswellperiod)
- [rmsVoltageSwellPeriodPhaseB](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltageswellperiodphaseb)
- [rmsVoltageSwellPeriodPhaseC](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#rmsvoltageswellperiodphasec)
- [totalActivePower](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#totalactivepower)
- [totalApparentPower](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#totalapparentpower)
- [totalReactivePower](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.State.md#totalreactivepower)

## Properties

### acCurrentDivisor

• `Optional` **acCurrentDivisor**: `number`

#### Inherited from

StateType.acCurrentDivisor

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:161](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L161)

___

### acCurrentMultiplier

• `Optional` **acCurrentMultiplier**: `number`

#### Inherited from

StateType.acCurrentMultiplier

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:160](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L160)

___

### acCurrentOverload

• `Optional` **acCurrentOverload**: `number`

#### Inherited from

StateType.acCurrentOverload

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:169](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L169)

___

### acFrequency

• `Optional` **acFrequency**: `number`

#### Inherited from

StateType.acFrequency

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L58)

___

### acFrequencyDivisor

• `Optional` **acFrequencyDivisor**: `number`

#### Inherited from

StateType.acFrequencyDivisor

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L126)

___

### acFrequencyMax

• `Optional` **acFrequencyMax**: `number`

#### Inherited from

StateType.acFrequencyMax

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L60)

___

### acFrequencyMin

• `Optional` **acFrequencyMin**: `number`

#### Inherited from

StateType.acFrequencyMin

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L59)

___

### acFrequencyMultiplier

• `Optional` **acFrequencyMultiplier**: `number`

#### Inherited from

StateType.acFrequencyMultiplier

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L125)

___

### acOverloadAlarmsMask

• `Optional` **acOverloadAlarmsMask**: `number`

#### Inherited from

StateType.acOverloadAlarmsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L167)

___

### acPowerDivisor

• `Optional` **acPowerDivisor**: `number`

#### Inherited from

StateType.acPowerDivisor

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L163)

___

### acPowerFactor

• `Optional` **acPowerFactor**: `number`

#### Inherited from

StateType.acPowerFactor

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:151](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L151)

___

### acPowerMultiplier

• `Optional` **acPowerMultiplier**: `number`

#### Inherited from

StateType.acPowerMultiplier

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:162](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L162)

___

### acPowerOverload

• `Optional` **acPowerOverload**: `number`

#### Inherited from

StateType.acPowerOverload

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L170)

___

### acReactivePowerOverload

• `Optional` **acReactivePowerOverload**: `number`

#### Inherited from

StateType.acReactivePowerOverload

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:171](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L171)

___

### acVoltageDivisor

• `Optional` **acVoltageDivisor**: `number`

#### Inherited from

StateType.acVoltageDivisor

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L159)

___

### acVoltageMultiplier

• `Optional` **acVoltageMultiplier**: `number`

#### Inherited from

StateType.acVoltageMultiplier

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L158)

___

### acVoltageOverload

• `Optional` **acVoltageOverload**: `number`

#### Inherited from

StateType.acVoltageOverload

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L168)

___

### activeCurrentPhaseB

• `Optional` **activeCurrentPhaseB**: `number`

#### Inherited from

StateType.activeCurrentPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L179)

___

### activeCurrentPhaseC

• `Optional` **activeCurrentPhaseC**: `number`

#### Inherited from

StateType.activeCurrentPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L201)

___

### activePower

• `Optional` **activePower**: `number`

#### Inherited from

StateType.activePower

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L146)

___

### activePowerMax

• `Optional` **activePowerMax**: `number`

#### Inherited from

StateType.activePowerMax

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L148)

___

### activePowerMaxPhaseB

• `Optional` **activePowerMaxPhaseB**: `number`

#### Inherited from

StateType.activePowerMaxPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:189](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L189)

___

### activePowerMaxPhaseC

• `Optional` **activePowerMaxPhaseC**: `number`

#### Inherited from

StateType.activePowerMaxPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:211](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L211)

___

### activePowerMin

• `Optional` **activePowerMin**: `number`

#### Inherited from

StateType.activePowerMin

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L147)

___

### activePowerMinPhaseB

• `Optional` **activePowerMinPhaseB**: `number`

#### Inherited from

StateType.activePowerMinPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L188)

___

### activePowerMinPhaseC

• `Optional` **activePowerMinPhaseC**: `number`

#### Inherited from

StateType.activePowerMinPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:210](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L210)

___

### activePowerPhaseB

• `Optional` **activePowerPhaseB**: `number`

#### Inherited from

StateType.activePowerPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:187](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L187)

___

### activePowerPhaseC

• `Optional` **activePowerPhaseC**: `number`

#### Inherited from

StateType.activePowerPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L209)

___

### apparentPower

• `Optional` **apparentPower**: `number`

#### Inherited from

StateType.apparentPower

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:150](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L150)

___

### apparentPowerPhaseB

• `Optional` **apparentPowerPhaseB**: `number`

#### Inherited from

StateType.apparentPowerPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:191](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L191)

___

### apparentPowerPhaseC

• `Optional` **apparentPowerPhaseC**: `number`

#### Inherited from

StateType.apparentPowerPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:213](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L213)

___

### averageRmsOverVoltage

• `Optional` **averageRmsOverVoltage**: `number`

#### Inherited from

StateType.averageRmsOverVoltage

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L172)

___

### averageRmsOverVoltageCounterPhaseB

• `Optional` **averageRmsOverVoltageCounterPhaseB**: `number`

#### Inherited from

StateType.averageRmsOverVoltageCounterPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:194](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L194)

___

### averageRmsOverVoltageCounterPhaseC

• `Optional` **averageRmsOverVoltageCounterPhaseC**: `number`

#### Inherited from

StateType.averageRmsOverVoltageCounterPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:216](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L216)

___

### averageRmsUnderVoltage

• `Optional` **averageRmsUnderVoltage**: `number`

#### Inherited from

StateType.averageRmsUnderVoltage

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:173](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L173)

___

### averageRmsUnderVoltageCounter

• `Optional` **averageRmsUnderVoltageCounter**: `number`

#### Inherited from

StateType.averageRmsUnderVoltageCounter

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L153)

___

### averageRmsUnderVoltageCounterPhaseB

• `Optional` **averageRmsUnderVoltageCounterPhaseB**: `number`

#### Inherited from

StateType.averageRmsUnderVoltageCounterPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L195)

___

### averageRmsUnderVoltageCounterPhaseC

• `Optional` **averageRmsUnderVoltageCounterPhaseC**: `number`

#### Inherited from

StateType.averageRmsUnderVoltageCounterPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L217)

___

### averageRmsVoltageMeasurementPeriod

• `Optional` **averageRmsVoltageMeasurementPeriod**: `number`

#### Inherited from

StateType.averageRmsVoltageMeasurementPeriod

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L152)

___

### averageRmsVoltageMeasurementPeriodPhaseB

• `Optional` **averageRmsVoltageMeasurementPeriodPhaseB**: `number`

#### Inherited from

StateType.averageRmsVoltageMeasurementPeriodPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L193)

___

### averageRmsVoltageMeasurementPeriodPhaseC

• `Optional` **averageRmsVoltageMeasurementPeriodPhaseC**: `number`

#### Inherited from

StateType.averageRmsVoltageMeasurementPeriodPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:215](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L215)

___

### dcCurrent

• `Optional` **dcCurrent**: `number`

#### Inherited from

StateType.dcCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L46)

___

### dcCurrentDivisor

• `Optional` **dcCurrentDivisor**: `number`

#### Inherited from

StateType.dcCurrentDivisor

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L55)

___

### dcCurrentMax

• `Optional` **dcCurrentMax**: `number`

#### Inherited from

StateType.dcCurrentMax

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L48)

___

### dcCurrentMin

• `Optional` **dcCurrentMin**: `number`

#### Inherited from

StateType.dcCurrentMin

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L47)

___

### dcCurrentMultiplier

• `Optional` **dcCurrentMultiplier**: `number`

#### Inherited from

StateType.dcCurrentMultiplier

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L54)

___

### dcCurrentOverload

• `Optional` **dcCurrentOverload**: `number`

#### Inherited from

StateType.dcCurrentOverload

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L166)

___

### dcOverloadAlarmsMask

• `Optional` **dcOverloadAlarmsMask**: `number`

#### Inherited from

StateType.dcOverloadAlarmsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:164](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L164)

___

### dcPower

• `Optional` **dcPower**: `number`

#### Inherited from

StateType.dcPower

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L49)

___

### dcPowerDivisor

• `Optional` **dcPowerDivisor**: `number`

#### Inherited from

StateType.dcPowerDivisor

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L57)

___

### dcPowerMax

• `Optional` **dcPowerMax**: `number`

#### Inherited from

StateType.dcPowerMax

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L51)

___

### dcPowerMin

• `Optional` **dcPowerMin**: `number`

#### Inherited from

StateType.dcPowerMin

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L50)

___

### dcPowerMultiplier

• `Optional` **dcPowerMultiplier**: `number`

#### Inherited from

StateType.dcPowerMultiplier

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L56)

___

### dcVoltage

• `Optional` **dcVoltage**: `number`

#### Inherited from

StateType.dcVoltage

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L43)

___

### dcVoltageDivisor

• `Optional` **dcVoltageDivisor**: `number`

#### Inherited from

StateType.dcVoltageDivisor

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L53)

___

### dcVoltageMax

• `Optional` **dcVoltageMax**: `number`

#### Inherited from

StateType.dcVoltageMax

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L45)

___

### dcVoltageMin

• `Optional` **dcVoltageMin**: `number`

#### Inherited from

StateType.dcVoltageMin

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L44)

___

### dcVoltageMultiplier

• `Optional` **dcVoltageMultiplier**: `number`

#### Inherited from

StateType.dcVoltageMultiplier

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L52)

___

### dcVoltageOverload

• `Optional` **dcVoltageOverload**: `number`

#### Inherited from

StateType.dcVoltageOverload

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L165)

___

### harmonicCurrentMultiplier

• `Optional` **harmonicCurrentMultiplier**: `number`

#### Inherited from

StateType.harmonicCurrentMultiplier

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L129)

___

### instantaneousActiveCurrent

• `Optional` **instantaneousActiveCurrent**: `number`

#### Inherited from

StateType.instantaneousActiveCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L137)

___

### instantaneousLineCurrent

• `Optional` **instantaneousLineCurrent**: `number`

#### Inherited from

StateType.instantaneousLineCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L136)

___

### instantaneousPower

• `Optional` **instantaneousPower**: `number`

#### Inherited from

StateType.instantaneousPower

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:139](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L139)

___

### instantaneousReactiveCurrent

• `Optional` **instantaneousReactiveCurrent**: `number`

#### Inherited from

StateType.instantaneousReactiveCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L138)

___

### instantaneousVoltage

• `Optional` **instantaneousVoltage**: `number`

#### Inherited from

StateType.instantaneousVoltage

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L135)

___

### lineCurrentPhaseB

• `Optional` **lineCurrentPhaseB**: `number`

#### Inherited from

StateType.lineCurrentPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L178)

___

### lineCurrentPhaseC

• `Optional` **lineCurrentPhaseC**: `number`

#### Inherited from

StateType.lineCurrentPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L200)

___

### measured11ThHarmonicCurrent

• `Optional` **measured11ThHarmonicCurrent**: `number`

#### Inherited from

StateType.measured11ThHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L90)

___

### measured1StHarmonicCurrent

• `Optional` **measured1StHarmonicCurrent**: `number`

#### Inherited from

StateType.measured1StHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L65)

___

### measured3RdHarmonicCurrent

• `Optional` **measured3RdHarmonicCurrent**: `number`

#### Inherited from

StateType.measured3RdHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L70)

___

### measured5ThHarmonicCurrent

• `Optional` **measured5ThHarmonicCurrent**: `number`

#### Inherited from

StateType.measured5ThHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L75)

___

### measured7ThHarmonicCurrent

• `Optional` **measured7ThHarmonicCurrent**: `number`

#### Inherited from

StateType.measured7ThHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L80)

___

### measured9ThHarmonicCurrent

• `Optional` **measured9ThHarmonicCurrent**: `number`

#### Inherited from

StateType.measured9ThHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L85)

___

### measuredPhase11ThHarmonicCurrent

• `Optional` **measuredPhase11ThHarmonicCurrent**: `number`

#### Inherited from

StateType.measuredPhase11ThHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L120)

___

### measuredPhase1StHarmonicCurrent

• `Optional` **measuredPhase1StHarmonicCurrent**: `number`

#### Inherited from

StateType.measuredPhase1StHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L95)

___

### measuredPhase3RdHarmonicCurrent

• `Optional` **measuredPhase3RdHarmonicCurrent**: `number`

#### Inherited from

StateType.measuredPhase3RdHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L100)

___

### measuredPhase5ThHarmonicCurrent

• `Optional` **measuredPhase5ThHarmonicCurrent**: `number`

#### Inherited from

StateType.measuredPhase5ThHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L105)

___

### measuredPhase7ThHarmonicCurrent

• `Optional` **measuredPhase7ThHarmonicCurrent**: `number`

#### Inherited from

StateType.measuredPhase7ThHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L110)

___

### measuredPhase9ThHarmonicCurrent

• `Optional` **measuredPhase9ThHarmonicCurrent**: `number`

#### Inherited from

StateType.measuredPhase9ThHarmonicCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L115)

___

### measurementType

• `Optional` **measurementType**: `number`

#### Inherited from

StateType.measurementType

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L42)

___

### neutralCurrent

• `Optional` **neutralCurrent**: `number`

#### Inherited from

StateType.neutralCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L61)

___

### phaseHarmonicCurrentMultiplier

• `Optional` **phaseHarmonicCurrentMultiplier**: `number`

#### Inherited from

StateType.phaseHarmonicCurrentMultiplier

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L130)

___

### powerDivisor

• `Optional` **powerDivisor**: `number`

#### Inherited from

StateType.powerDivisor

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L128)

___

### powerFactorPhaseB

• `Optional` **powerFactorPhaseB**: `number`

#### Inherited from

StateType.powerFactorPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L192)

___

### powerFactorPhaseC

• `Optional` **powerFactorPhaseC**: `number`

#### Inherited from

StateType.powerFactorPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:214](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L214)

___

### powerMultiplier

• `Optional` **powerMultiplier**: `number`

#### Inherited from

StateType.powerMultiplier

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L127)

___

### reactiveCurrentPhaseB

• `Optional` **reactiveCurrentPhaseB**: `number`

#### Inherited from

StateType.reactiveCurrentPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:180](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L180)

___

### reactiveCurrentPhaseC

• `Optional` **reactiveCurrentPhaseC**: `number`

#### Inherited from

StateType.reactiveCurrentPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L202)

___

### reactivePower

• `Optional` **reactivePower**: `number`

#### Inherited from

StateType.reactivePower

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:149](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L149)

___

### reactivePowerPhaseB

• `Optional` **reactivePowerPhaseB**: `number`

#### Inherited from

StateType.reactivePowerPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:190](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L190)

___

### reactivePowerPhaseC

• `Optional` **reactivePowerPhaseC**: `number`

#### Inherited from

StateType.reactivePowerPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L212)

___

### rmsCurrent

• `Optional` **rmsCurrent**: `number`

#### Inherited from

StateType.rmsCurrent

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L143)

___

### rmsCurrentMax

• `Optional` **rmsCurrentMax**: `number`

#### Inherited from

StateType.rmsCurrentMax

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L145)

___

### rmsCurrentMaxPhaseB

• `Optional` **rmsCurrentMaxPhaseB**: `number`

#### Inherited from

StateType.rmsCurrentMaxPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:186](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L186)

___

### rmsCurrentMaxPhaseC

• `Optional` **rmsCurrentMaxPhaseC**: `number`

#### Inherited from

StateType.rmsCurrentMaxPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:208](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L208)

___

### rmsCurrentMin

• `Optional` **rmsCurrentMin**: `number`

#### Inherited from

StateType.rmsCurrentMin

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L144)

___

### rmsCurrentMinPhaseB

• `Optional` **rmsCurrentMinPhaseB**: `number`

#### Inherited from

StateType.rmsCurrentMinPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:185](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L185)

___

### rmsCurrentMinPhaseC

• `Optional` **rmsCurrentMinPhaseC**: `number`

#### Inherited from

StateType.rmsCurrentMinPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L207)

___

### rmsCurrentPhaseB

• `Optional` **rmsCurrentPhaseB**: `number`

#### Inherited from

StateType.rmsCurrentPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:184](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L184)

___

### rmsCurrentPhaseC

• `Optional` **rmsCurrentPhaseC**: `number`

#### Inherited from

StateType.rmsCurrentPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:206](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L206)

___

### rmsExtremeOverVoltage

• `Optional` **rmsExtremeOverVoltage**: `number`

#### Inherited from

StateType.rmsExtremeOverVoltage

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L174)

___

### rmsExtremeOverVoltagePeriod

• `Optional` **rmsExtremeOverVoltagePeriod**: `number`

#### Inherited from

StateType.rmsExtremeOverVoltagePeriod

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L154)

___

### rmsExtremeOverVoltagePeriodPhaseB

• `Optional` **rmsExtremeOverVoltagePeriodPhaseB**: `number`

#### Inherited from

StateType.rmsExtremeOverVoltagePeriodPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L196)

___

### rmsExtremeOverVoltagePeriodPhaseC

• `Optional` **rmsExtremeOverVoltagePeriodPhaseC**: `number`

#### Inherited from

StateType.rmsExtremeOverVoltagePeriodPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:218](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L218)

___

### rmsExtremeUnderVoltage

• `Optional` **rmsExtremeUnderVoltage**: `number`

#### Inherited from

StateType.rmsExtremeUnderVoltage

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:175](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L175)

___

### rmsExtremeUnderVoltagePeriod

• `Optional` **rmsExtremeUnderVoltagePeriod**: `number`

#### Inherited from

StateType.rmsExtremeUnderVoltagePeriod

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L155)

___

### rmsExtremeUnderVoltagePeriodPhaseB

• `Optional` **rmsExtremeUnderVoltagePeriodPhaseB**: `number`

#### Inherited from

StateType.rmsExtremeUnderVoltagePeriodPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L197)

___

### rmsExtremeUnderVoltagePeriodPhaseC

• `Optional` **rmsExtremeUnderVoltagePeriodPhaseC**: `number`

#### Inherited from

StateType.rmsExtremeUnderVoltagePeriodPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L219)

___

### rmsVoltage

• `Optional` **rmsVoltage**: `number`

#### Inherited from

StateType.rmsVoltage

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L140)

___

### rmsVoltageMax

• `Optional` **rmsVoltageMax**: `number`

#### Inherited from

StateType.rmsVoltageMax

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L142)

___

### rmsVoltageMaxPhaseB

• `Optional` **rmsVoltageMaxPhaseB**: `number`

#### Inherited from

StateType.rmsVoltageMaxPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L183)

___

### rmsVoltageMaxPhaseC

• `Optional` **rmsVoltageMaxPhaseC**: `number`

#### Inherited from

StateType.rmsVoltageMaxPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L205)

___

### rmsVoltageMin

• `Optional` **rmsVoltageMin**: `number`

#### Inherited from

StateType.rmsVoltageMin

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L141)

___

### rmsVoltageMinPhaseB

• `Optional` **rmsVoltageMinPhaseB**: `number`

#### Inherited from

StateType.rmsVoltageMinPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:182](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L182)

___

### rmsVoltageMinPhaseC

• `Optional` **rmsVoltageMinPhaseC**: `number`

#### Inherited from

StateType.rmsVoltageMinPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L204)

___

### rmsVoltagePhaseB

• `Optional` **rmsVoltagePhaseB**: `number`

#### Inherited from

StateType.rmsVoltagePhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L181)

___

### rmsVoltagePhaseC

• `Optional` **rmsVoltagePhaseC**: `number`

#### Inherited from

StateType.rmsVoltagePhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L203)

___

### rmsVoltageSag

• `Optional` **rmsVoltageSag**: `number`

#### Inherited from

StateType.rmsVoltageSag

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:176](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L176)

___

### rmsVoltageSagPeriod

• `Optional` **rmsVoltageSagPeriod**: `number`

#### Inherited from

StateType.rmsVoltageSagPeriod

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:156](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L156)

___

### rmsVoltageSagPeriodPhaseB

• `Optional` **rmsVoltageSagPeriodPhaseB**: `number`

#### Inherited from

StateType.rmsVoltageSagPeriodPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L198)

___

### rmsVoltageSagPeriodPhaseC

• `Optional` **rmsVoltageSagPeriodPhaseC**: `number`

#### Inherited from

StateType.rmsVoltageSagPeriodPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L220)

___

### rmsVoltageSwell

• `Optional` **rmsVoltageSwell**: `number`

#### Inherited from

StateType.rmsVoltageSwell

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:177](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L177)

___

### rmsVoltageSwellPeriod

• `Optional` **rmsVoltageSwellPeriod**: `number`

#### Inherited from

StateType.rmsVoltageSwellPeriod

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:157](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L157)

___

### rmsVoltageSwellPeriodPhaseB

• `Optional` **rmsVoltageSwellPeriodPhaseB**: `number`

#### Inherited from

StateType.rmsVoltageSwellPeriodPhaseB

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L199)

___

### rmsVoltageSwellPeriodPhaseC

• `Optional` **rmsVoltageSwellPeriodPhaseC**: `number`

#### Inherited from

StateType.rmsVoltageSwellPeriodPhaseC

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:221](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L221)

___

### totalActivePower

• `Optional` **totalActivePower**: `number`

#### Inherited from

StateType.totalActivePower

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L62)

___

### totalApparentPower

• `Optional` **totalApparentPower**: `number`

#### Inherited from

StateType.totalApparentPower

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L64)

___

### totalReactivePower

• `Optional` **totalReactivePower**: `number`

#### Inherited from

StateType.totalReactivePower

#### Defined in

[packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ElectricalMeasurementCluster.ts#L63)
