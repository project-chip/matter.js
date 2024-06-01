[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ElectricalMeasurement

# Namespace: ElectricalMeasurement

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [GetMeasurementProfileCommandRequest](interfaces/GetMeasurementProfileCommandRequest.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ElectricalMeasurementCluster.d.ts:178

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acCurrentDivisor

> `readonly` **acCurrentDivisor**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acCurrentMultiplier

> `readonly` **acCurrentMultiplier**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acCurrentOverload

> `readonly` **acCurrentOverload**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acFrequency

> `readonly` **acFrequency**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acFrequencyDivisor

> `readonly` **acFrequencyDivisor**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acFrequencyMax

> `readonly` **acFrequencyMax**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acFrequencyMin

> `readonly` **acFrequencyMin**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acFrequencyMultiplier

> `readonly` **acFrequencyMultiplier**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acOverloadAlarmsMask

> `readonly` **acOverloadAlarmsMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acPowerDivisor

> `readonly` **acPowerDivisor**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acPowerFactor

> `readonly` **acPowerFactor**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acPowerMultiplier

> `readonly` **acPowerMultiplier**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acPowerOverload

> `readonly` **acPowerOverload**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acReactivePowerOverload

> `readonly` **acReactivePowerOverload**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acVoltageDivisor

> `readonly` **acVoltageDivisor**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acVoltageMultiplier

> `readonly` **acVoltageMultiplier**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acVoltageOverload

> `readonly` **acVoltageOverload**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activeCurrentPhaseB

> `readonly` **activeCurrentPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activeCurrentPhaseC

> `readonly` **activeCurrentPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePower

> `readonly` **activePower**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMax

> `readonly` **activePowerMax**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMaxPhaseB

> `readonly` **activePowerMaxPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMaxPhaseC

> `readonly` **activePowerMaxPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMin

> `readonly` **activePowerMin**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMinPhaseB

> `readonly` **activePowerMinPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMinPhaseC

> `readonly` **activePowerMinPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerPhaseB

> `readonly` **activePowerPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerPhaseC

> `readonly` **activePowerPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.apparentPower

> `readonly` **apparentPower**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.apparentPowerPhaseB

> `readonly` **apparentPowerPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.apparentPowerPhaseC

> `readonly` **apparentPowerPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsOverVoltage

> `readonly` **averageRmsOverVoltage**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsOverVoltageCounterPhaseB

> `readonly` **averageRmsOverVoltageCounterPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsOverVoltageCounterPhaseC

> `readonly` **averageRmsOverVoltageCounterPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsUnderVoltage

> `readonly` **averageRmsUnderVoltage**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsUnderVoltageCounter

> `readonly` **averageRmsUnderVoltageCounter**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsUnderVoltageCounterPhaseB

> `readonly` **averageRmsUnderVoltageCounterPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsUnderVoltageCounterPhaseC

> `readonly` **averageRmsUnderVoltageCounterPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsVoltageMeasurementPeriod

> `readonly` **averageRmsVoltageMeasurementPeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsVoltageMeasurementPeriodPhaseB

> `readonly` **averageRmsVoltageMeasurementPeriodPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsVoltageMeasurementPeriodPhaseC

> `readonly` **averageRmsVoltageMeasurementPeriodPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrent

> `readonly` **dcCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrentDivisor

> `readonly` **dcCurrentDivisor**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrentMax

> `readonly` **dcCurrentMax**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrentMin

> `readonly` **dcCurrentMin**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrentMultiplier

> `readonly` **dcCurrentMultiplier**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrentOverload

> `readonly` **dcCurrentOverload**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcOverloadAlarmsMask

> `readonly` **dcOverloadAlarmsMask**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcPower

> `readonly` **dcPower**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcPowerDivisor

> `readonly` **dcPowerDivisor**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcPowerMax

> `readonly` **dcPowerMax**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcPowerMin

> `readonly` **dcPowerMin**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcPowerMultiplier

> `readonly` **dcPowerMultiplier**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltage

> `readonly` **dcVoltage**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltageDivisor

> `readonly` **dcVoltageDivisor**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltageMax

> `readonly` **dcVoltageMax**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltageMin

> `readonly` **dcVoltageMin**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltageMultiplier

> `readonly` **dcVoltageMultiplier**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltageOverload

> `readonly` **dcVoltageOverload**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.harmonicCurrentMultiplier

> `readonly` **harmonicCurrentMultiplier**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.instantaneousActiveCurrent

> `readonly` **instantaneousActiveCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.instantaneousLineCurrent

> `readonly` **instantaneousLineCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.instantaneousPower

> `readonly` **instantaneousPower**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.instantaneousReactiveCurrent

> `readonly` **instantaneousReactiveCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.instantaneousVoltage

> `readonly` **instantaneousVoltage**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.lineCurrentPhaseB

> `readonly` **lineCurrentPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.lineCurrentPhaseC

> `readonly` **lineCurrentPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured11ThHarmonicCurrent

> `readonly` **measured11ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured1StHarmonicCurrent

> `readonly` **measured1StHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured3RdHarmonicCurrent

> `readonly` **measured3RdHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured5ThHarmonicCurrent

> `readonly` **measured5ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured7ThHarmonicCurrent

> `readonly` **measured7ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured9ThHarmonicCurrent

> `readonly` **measured9ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase11ThHarmonicCurrent

> `readonly` **measuredPhase11ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase1StHarmonicCurrent

> `readonly` **measuredPhase1StHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase3RdHarmonicCurrent

> `readonly` **measuredPhase3RdHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase5ThHarmonicCurrent

> `readonly` **measuredPhase5ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase7ThHarmonicCurrent

> `readonly` **measuredPhase7ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase9ThHarmonicCurrent

> `readonly` **measuredPhase9ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measurementType

> `readonly` **measurementType**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.neutralCurrent

> `readonly` **neutralCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.phaseHarmonicCurrentMultiplier

> `readonly` **phaseHarmonicCurrentMultiplier**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.powerDivisor

> `readonly` **powerDivisor**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.powerFactorPhaseB

> `readonly` **powerFactorPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.powerFactorPhaseC

> `readonly` **powerFactorPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.powerMultiplier

> `readonly` **powerMultiplier**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.reactiveCurrentPhaseB

> `readonly` **reactiveCurrentPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.reactiveCurrentPhaseC

> `readonly` **reactiveCurrentPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.reactivePower

> `readonly` **reactivePower**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.reactivePowerPhaseB

> `readonly` **reactivePowerPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.reactivePowerPhaseC

> `readonly` **reactivePowerPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrent

> `readonly` **rmsCurrent**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMax

> `readonly` **rmsCurrentMax**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMaxPhaseB

> `readonly` **rmsCurrentMaxPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMaxPhaseC

> `readonly` **rmsCurrentMaxPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMin

> `readonly` **rmsCurrentMin**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMinPhaseB

> `readonly` **rmsCurrentMinPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMinPhaseC

> `readonly` **rmsCurrentMinPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentPhaseB

> `readonly` **rmsCurrentPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentPhaseC

> `readonly` **rmsCurrentPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeOverVoltage

> `readonly` **rmsExtremeOverVoltage**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeOverVoltagePeriod

> `readonly` **rmsExtremeOverVoltagePeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeOverVoltagePeriodPhaseB

> `readonly` **rmsExtremeOverVoltagePeriodPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeOverVoltagePeriodPhaseC

> `readonly` **rmsExtremeOverVoltagePeriodPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeUnderVoltage

> `readonly` **rmsExtremeUnderVoltage**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeUnderVoltagePeriod

> `readonly` **rmsExtremeUnderVoltagePeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeUnderVoltagePeriodPhaseB

> `readonly` **rmsExtremeUnderVoltagePeriodPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeUnderVoltagePeriodPhaseC

> `readonly` **rmsExtremeUnderVoltagePeriodPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltage

> `readonly` **rmsVoltage**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMax

> `readonly` **rmsVoltageMax**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMaxPhaseB

> `readonly` **rmsVoltageMaxPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMaxPhaseC

> `readonly` **rmsVoltageMaxPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMin

> `readonly` **rmsVoltageMin**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMinPhaseB

> `readonly` **rmsVoltageMinPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMinPhaseC

> `readonly` **rmsVoltageMinPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltagePhaseB

> `readonly` **rmsVoltagePhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltagePhaseC

> `readonly` **rmsVoltagePhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSag

> `readonly` **rmsVoltageSag**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSagPeriod

> `readonly` **rmsVoltageSagPeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSagPeriodPhaseB

> `readonly` **rmsVoltageSagPeriodPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSagPeriodPhaseC

> `readonly` **rmsVoltageSagPeriodPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSwell

> `readonly` **rmsVoltageSwell**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSwellPeriod

> `readonly` **rmsVoltageSwellPeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSwellPeriodPhaseB

> `readonly` **rmsVoltageSwellPeriodPhaseB**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSwellPeriodPhaseC

> `readonly` **rmsVoltageSwellPeriodPhaseC**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.totalActivePower

> `readonly` **totalActivePower**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.totalApparentPower

> `readonly` **totalApparentPower**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.totalReactivePower

> `readonly` **totalReactivePower**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.getMeasurementProfileCommand

> `readonly` **getMeasurementProfileCommand**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

##### commands.getProfileInfoCommand

> `readonly` **getProfileInfoCommand**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

##### id

> `readonly` **id**: `2820`

##### name

> `readonly` **name**: `"ElectricalMeasurement"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ElectricalMeasurementCluster.d.ts:28

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ElectricalMeasurementCluster.d.ts:181

***

### TlvGetMeasurementProfileCommandRequest

> `const` **TlvGetMeasurementProfileCommandRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ElectricalMeasurement getMeasurementProfileCommand command

#### Source

packages/matter.js/dist/esm/cluster/definitions/ElectricalMeasurementCluster.d.ts:15
