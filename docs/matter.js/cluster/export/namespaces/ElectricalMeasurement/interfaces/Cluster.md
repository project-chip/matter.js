[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ElectricalMeasurement](../README.md) / Cluster

# Interface: Cluster

Electrical Measurement

Attributes related to the electrical properties of a device. This cluster is used by power outlets and other
devices that need to provide instantaneous data as opposed to metrology data which should be retrieved from the
metering cluster..

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### acCurrentDivisor

> `readonly` **acCurrentDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acCurrentMultiplier

> `readonly` **acCurrentMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acCurrentOverload

> `readonly` **acCurrentOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acFrequency

> `readonly` **acFrequency**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acFrequencyDivisor

> `readonly` **acFrequencyDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acFrequencyMax

> `readonly` **acFrequencyMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acFrequencyMin

> `readonly` **acFrequencyMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acFrequencyMultiplier

> `readonly` **acFrequencyMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acOverloadAlarmsMask

> `readonly` **acOverloadAlarmsMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acPowerDivisor

> `readonly` **acPowerDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acPowerFactor

> `readonly` **acPowerFactor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acPowerMultiplier

> `readonly` **acPowerMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acPowerOverload

> `readonly` **acPowerOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acReactivePowerOverload

> `readonly` **acReactivePowerOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acVoltageDivisor

> `readonly` **acVoltageDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acVoltageMultiplier

> `readonly` **acVoltageMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### acVoltageOverload

> `readonly` **acVoltageOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activeCurrentPhaseB

> `readonly` **activeCurrentPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activeCurrentPhaseC

> `readonly` **activeCurrentPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activePower

> `readonly` **activePower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activePowerMax

> `readonly` **activePowerMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activePowerMaxPhaseB

> `readonly` **activePowerMaxPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activePowerMaxPhaseC

> `readonly` **activePowerMaxPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activePowerMin

> `readonly` **activePowerMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activePowerMinPhaseB

> `readonly` **activePowerMinPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activePowerMinPhaseC

> `readonly` **activePowerMinPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activePowerPhaseB

> `readonly` **activePowerPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### activePowerPhaseC

> `readonly` **activePowerPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### apparentPower

> `readonly` **apparentPower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### apparentPowerPhaseB

> `readonly` **apparentPowerPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### apparentPowerPhaseC

> `readonly` **apparentPowerPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### averageRmsOverVoltage

> `readonly` **averageRmsOverVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### averageRmsOverVoltageCounterPhaseB

> `readonly` **averageRmsOverVoltageCounterPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### averageRmsOverVoltageCounterPhaseC

> `readonly` **averageRmsOverVoltageCounterPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### averageRmsUnderVoltage

> `readonly` **averageRmsUnderVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### averageRmsUnderVoltageCounter

> `readonly` **averageRmsUnderVoltageCounter**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### averageRmsUnderVoltageCounterPhaseB

> `readonly` **averageRmsUnderVoltageCounterPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### averageRmsUnderVoltageCounterPhaseC

> `readonly` **averageRmsUnderVoltageCounterPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### averageRmsVoltageMeasurementPeriod

> `readonly` **averageRmsVoltageMeasurementPeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### averageRmsVoltageMeasurementPeriodPhaseB

> `readonly` **averageRmsVoltageMeasurementPeriodPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### averageRmsVoltageMeasurementPeriodPhaseC

> `readonly` **averageRmsVoltageMeasurementPeriodPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcCurrent

> `readonly` **dcCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcCurrentDivisor

> `readonly` **dcCurrentDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcCurrentMax

> `readonly` **dcCurrentMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcCurrentMin

> `readonly` **dcCurrentMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcCurrentMultiplier

> `readonly` **dcCurrentMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcCurrentOverload

> `readonly` **dcCurrentOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcOverloadAlarmsMask

> `readonly` **dcOverloadAlarmsMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcPower

> `readonly` **dcPower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcPowerDivisor

> `readonly` **dcPowerDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcPowerMax

> `readonly` **dcPowerMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcPowerMin

> `readonly` **dcPowerMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcPowerMultiplier

> `readonly` **dcPowerMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcVoltage

> `readonly` **dcVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcVoltageDivisor

> `readonly` **dcVoltageDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcVoltageMax

> `readonly` **dcVoltageMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcVoltageMin

> `readonly` **dcVoltageMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcVoltageMultiplier

> `readonly` **dcVoltageMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### dcVoltageOverload

> `readonly` **dcVoltageOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### harmonicCurrentMultiplier

> `readonly` **harmonicCurrentMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### instantaneousActiveCurrent

> `readonly` **instantaneousActiveCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### instantaneousLineCurrent

> `readonly` **instantaneousLineCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### instantaneousPower

> `readonly` **instantaneousPower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### instantaneousReactiveCurrent

> `readonly` **instantaneousReactiveCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### instantaneousVoltage

> `readonly` **instantaneousVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### lineCurrentPhaseB

> `readonly` **lineCurrentPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### lineCurrentPhaseC

> `readonly` **lineCurrentPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measured11ThHarmonicCurrent

> `readonly` **measured11ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measured1StHarmonicCurrent

> `readonly` **measured1StHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measured3RdHarmonicCurrent

> `readonly` **measured3RdHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measured5ThHarmonicCurrent

> `readonly` **measured5ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measured7ThHarmonicCurrent

> `readonly` **measured7ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measured9ThHarmonicCurrent

> `readonly` **measured9ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measuredPhase11ThHarmonicCurrent

> `readonly` **measuredPhase11ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measuredPhase1StHarmonicCurrent

> `readonly` **measuredPhase1StHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measuredPhase3RdHarmonicCurrent

> `readonly` **measuredPhase3RdHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measuredPhase5ThHarmonicCurrent

> `readonly` **measuredPhase5ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measuredPhase7ThHarmonicCurrent

> `readonly` **measuredPhase7ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measuredPhase9ThHarmonicCurrent

> `readonly` **measuredPhase9ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### measurementType

> `readonly` **measurementType**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### neutralCurrent

> `readonly` **neutralCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### phaseHarmonicCurrentMultiplier

> `readonly` **phaseHarmonicCurrentMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### powerDivisor

> `readonly` **powerDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### powerFactorPhaseB

> `readonly` **powerFactorPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### powerFactorPhaseC

> `readonly` **powerFactorPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### powerMultiplier

> `readonly` **powerMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### reactiveCurrentPhaseB

> `readonly` **reactiveCurrentPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### reactiveCurrentPhaseC

> `readonly` **reactiveCurrentPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### reactivePower

> `readonly` **reactivePower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### reactivePowerPhaseB

> `readonly` **reactivePowerPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### reactivePowerPhaseC

> `readonly` **reactivePowerPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsCurrent

> `readonly` **rmsCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsCurrentMax

> `readonly` **rmsCurrentMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsCurrentMaxPhaseB

> `readonly` **rmsCurrentMaxPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsCurrentMaxPhaseC

> `readonly` **rmsCurrentMaxPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsCurrentMin

> `readonly` **rmsCurrentMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsCurrentMinPhaseB

> `readonly` **rmsCurrentMinPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsCurrentMinPhaseC

> `readonly` **rmsCurrentMinPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsCurrentPhaseB

> `readonly` **rmsCurrentPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsCurrentPhaseC

> `readonly` **rmsCurrentPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsExtremeOverVoltage

> `readonly` **rmsExtremeOverVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsExtremeOverVoltagePeriod

> `readonly` **rmsExtremeOverVoltagePeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsExtremeOverVoltagePeriodPhaseB

> `readonly` **rmsExtremeOverVoltagePeriodPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsExtremeOverVoltagePeriodPhaseC

> `readonly` **rmsExtremeOverVoltagePeriodPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsExtremeUnderVoltage

> `readonly` **rmsExtremeUnderVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsExtremeUnderVoltagePeriod

> `readonly` **rmsExtremeUnderVoltagePeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsExtremeUnderVoltagePeriodPhaseB

> `readonly` **rmsExtremeUnderVoltagePeriodPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsExtremeUnderVoltagePeriodPhaseC

> `readonly` **rmsExtremeUnderVoltagePeriodPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltage

> `readonly` **rmsVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageMax

> `readonly` **rmsVoltageMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageMaxPhaseB

> `readonly` **rmsVoltageMaxPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageMaxPhaseC

> `readonly` **rmsVoltageMaxPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageMin

> `readonly` **rmsVoltageMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageMinPhaseB

> `readonly` **rmsVoltageMinPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageMinPhaseC

> `readonly` **rmsVoltageMinPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltagePhaseB

> `readonly` **rmsVoltagePhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltagePhaseC

> `readonly` **rmsVoltagePhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageSag

> `readonly` **rmsVoltageSag**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageSagPeriod

> `readonly` **rmsVoltageSagPeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageSagPeriodPhaseB

> `readonly` **rmsVoltageSagPeriodPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageSagPeriodPhaseC

> `readonly` **rmsVoltageSagPeriodPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageSwell

> `readonly` **rmsVoltageSwell**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageSwellPeriod

> `readonly` **rmsVoltageSwellPeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageSwellPeriodPhaseB

> `readonly` **rmsVoltageSwellPeriodPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### rmsVoltageSwellPeriodPhaseC

> `readonly` **rmsVoltageSwellPeriodPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### totalActivePower

> `readonly` **totalActivePower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### totalApparentPower

> `readonly` **totalApparentPower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### totalReactivePower

> `readonly` **totalReactivePower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

#### Inherited from

`Identity.attributes`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L86)

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L92)

***

### commands

> **commands**: `object`

#### getMeasurementProfileCommand

> `readonly` **getMeasurementProfileCommand**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

#### getProfileInfoCommand

> `readonly` **getProfileInfoCommand**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

#### Inherited from

`Identity.commands`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L89)

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L90)

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L93)

***

### features

> **features**: `object`

#### Inherited from

`Identity.features`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L84)

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`2820`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L81)

***

### name

> **name**: `"ElectricalMeasurement"`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L82)

***

### revision

> **revision**: `1`

#### Inherited from

`Identity.revision`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L83)

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L85)

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L91)

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

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

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

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

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

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

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

##### attributes.acCurrentDivisor

> `readonly` **acCurrentDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acCurrentMultiplier

> `readonly` **acCurrentMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acCurrentOverload

> `readonly` **acCurrentOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acFrequency

> `readonly` **acFrequency**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acFrequencyDivisor

> `readonly` **acFrequencyDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acFrequencyMax

> `readonly` **acFrequencyMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acFrequencyMin

> `readonly` **acFrequencyMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acFrequencyMultiplier

> `readonly` **acFrequencyMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acOverloadAlarmsMask

> `readonly` **acOverloadAlarmsMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acPowerDivisor

> `readonly` **acPowerDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acPowerFactor

> `readonly` **acPowerFactor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acPowerMultiplier

> `readonly` **acPowerMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acPowerOverload

> `readonly` **acPowerOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acReactivePowerOverload

> `readonly` **acReactivePowerOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acVoltageDivisor

> `readonly` **acVoltageDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acVoltageMultiplier

> `readonly` **acVoltageMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.acVoltageOverload

> `readonly` **acVoltageOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activeCurrentPhaseB

> `readonly` **activeCurrentPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activeCurrentPhaseC

> `readonly` **activeCurrentPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePower

> `readonly` **activePower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMax

> `readonly` **activePowerMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMaxPhaseB

> `readonly` **activePowerMaxPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMaxPhaseC

> `readonly` **activePowerMaxPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMin

> `readonly` **activePowerMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMinPhaseB

> `readonly` **activePowerMinPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerMinPhaseC

> `readonly` **activePowerMinPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerPhaseB

> `readonly` **activePowerPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.activePowerPhaseC

> `readonly` **activePowerPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.apparentPower

> `readonly` **apparentPower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.apparentPowerPhaseB

> `readonly` **apparentPowerPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.apparentPowerPhaseC

> `readonly` **apparentPowerPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsOverVoltage

> `readonly` **averageRmsOverVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsOverVoltageCounterPhaseB

> `readonly` **averageRmsOverVoltageCounterPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsOverVoltageCounterPhaseC

> `readonly` **averageRmsOverVoltageCounterPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsUnderVoltage

> `readonly` **averageRmsUnderVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsUnderVoltageCounter

> `readonly` **averageRmsUnderVoltageCounter**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsUnderVoltageCounterPhaseB

> `readonly` **averageRmsUnderVoltageCounterPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsUnderVoltageCounterPhaseC

> `readonly` **averageRmsUnderVoltageCounterPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsVoltageMeasurementPeriod

> `readonly` **averageRmsVoltageMeasurementPeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsVoltageMeasurementPeriodPhaseB

> `readonly` **averageRmsVoltageMeasurementPeriodPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.averageRmsVoltageMeasurementPeriodPhaseC

> `readonly` **averageRmsVoltageMeasurementPeriodPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrent

> `readonly` **dcCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrentDivisor

> `readonly` **dcCurrentDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrentMax

> `readonly` **dcCurrentMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrentMin

> `readonly` **dcCurrentMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrentMultiplier

> `readonly` **dcCurrentMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcCurrentOverload

> `readonly` **dcCurrentOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcOverloadAlarmsMask

> `readonly` **dcOverloadAlarmsMask**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcPower

> `readonly` **dcPower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcPowerDivisor

> `readonly` **dcPowerDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcPowerMax

> `readonly` **dcPowerMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcPowerMin

> `readonly` **dcPowerMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcPowerMultiplier

> `readonly` **dcPowerMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltage

> `readonly` **dcVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltageDivisor

> `readonly` **dcVoltageDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltageMax

> `readonly` **dcVoltageMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltageMin

> `readonly` **dcVoltageMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltageMultiplier

> `readonly` **dcVoltageMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.dcVoltageOverload

> `readonly` **dcVoltageOverload**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.harmonicCurrentMultiplier

> `readonly` **harmonicCurrentMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.instantaneousActiveCurrent

> `readonly` **instantaneousActiveCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.instantaneousLineCurrent

> `readonly` **instantaneousLineCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.instantaneousPower

> `readonly` **instantaneousPower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.instantaneousReactiveCurrent

> `readonly` **instantaneousReactiveCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.instantaneousVoltage

> `readonly` **instantaneousVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.lineCurrentPhaseB

> `readonly` **lineCurrentPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.lineCurrentPhaseC

> `readonly` **lineCurrentPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured11ThHarmonicCurrent

> `readonly` **measured11ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured1StHarmonicCurrent

> `readonly` **measured1StHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured3RdHarmonicCurrent

> `readonly` **measured3RdHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured5ThHarmonicCurrent

> `readonly` **measured5ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured7ThHarmonicCurrent

> `readonly` **measured7ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measured9ThHarmonicCurrent

> `readonly` **measured9ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase11ThHarmonicCurrent

> `readonly` **measuredPhase11ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase1StHarmonicCurrent

> `readonly` **measuredPhase1StHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase3RdHarmonicCurrent

> `readonly` **measuredPhase3RdHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase5ThHarmonicCurrent

> `readonly` **measuredPhase5ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase7ThHarmonicCurrent

> `readonly` **measuredPhase7ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measuredPhase9ThHarmonicCurrent

> `readonly` **measuredPhase9ThHarmonicCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.measurementType

> `readonly` **measurementType**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.neutralCurrent

> `readonly` **neutralCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.phaseHarmonicCurrentMultiplier

> `readonly` **phaseHarmonicCurrentMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.powerDivisor

> `readonly` **powerDivisor**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.powerFactorPhaseB

> `readonly` **powerFactorPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.powerFactorPhaseC

> `readonly` **powerFactorPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.powerMultiplier

> `readonly` **powerMultiplier**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.reactiveCurrentPhaseB

> `readonly` **reactiveCurrentPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.reactiveCurrentPhaseC

> `readonly` **reactiveCurrentPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.reactivePower

> `readonly` **reactivePower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.reactivePowerPhaseB

> `readonly` **reactivePowerPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.reactivePowerPhaseC

> `readonly` **reactivePowerPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrent

> `readonly` **rmsCurrent**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMax

> `readonly` **rmsCurrentMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMaxPhaseB

> `readonly` **rmsCurrentMaxPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMaxPhaseC

> `readonly` **rmsCurrentMaxPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMin

> `readonly` **rmsCurrentMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMinPhaseB

> `readonly` **rmsCurrentMinPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentMinPhaseC

> `readonly` **rmsCurrentMinPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentPhaseB

> `readonly` **rmsCurrentPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsCurrentPhaseC

> `readonly` **rmsCurrentPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeOverVoltage

> `readonly` **rmsExtremeOverVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeOverVoltagePeriod

> `readonly` **rmsExtremeOverVoltagePeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeOverVoltagePeriodPhaseB

> `readonly` **rmsExtremeOverVoltagePeriodPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeOverVoltagePeriodPhaseC

> `readonly` **rmsExtremeOverVoltagePeriodPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeUnderVoltage

> `readonly` **rmsExtremeUnderVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeUnderVoltagePeriod

> `readonly` **rmsExtremeUnderVoltagePeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeUnderVoltagePeriodPhaseB

> `readonly` **rmsExtremeUnderVoltagePeriodPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsExtremeUnderVoltagePeriodPhaseC

> `readonly` **rmsExtremeUnderVoltagePeriodPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltage

> `readonly` **rmsVoltage**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMax

> `readonly` **rmsVoltageMax**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMaxPhaseB

> `readonly` **rmsVoltageMaxPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMaxPhaseC

> `readonly` **rmsVoltageMaxPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMin

> `readonly` **rmsVoltageMin**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMinPhaseB

> `readonly` **rmsVoltageMinPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageMinPhaseC

> `readonly` **rmsVoltageMinPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltagePhaseB

> `readonly` **rmsVoltagePhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltagePhaseC

> `readonly` **rmsVoltagePhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSag

> `readonly` **rmsVoltageSag**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSagPeriod

> `readonly` **rmsVoltageSagPeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSagPeriodPhaseB

> `readonly` **rmsVoltageSagPeriodPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSagPeriodPhaseC

> `readonly` **rmsVoltageSagPeriodPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSwell

> `readonly` **rmsVoltageSwell**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSwellPeriod

> `readonly` **rmsVoltageSwellPeriod**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSwellPeriodPhaseB

> `readonly` **rmsVoltageSwellPeriodPhaseB**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.rmsVoltageSwellPeriodPhaseC

> `readonly` **rmsVoltageSwellPeriodPhaseC**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.totalActivePower

> `readonly` **totalActivePower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.totalApparentPower

> `readonly` **totalApparentPower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.totalReactivePower

> `readonly` **totalReactivePower**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.getMeasurementProfileCommand

> `readonly` **getMeasurementProfileCommand**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### commands.getProfileInfoCommand

> `readonly` **getProfileInfoCommand**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

##### id

> `readonly` **id**: `2820` = `0xb04`

##### name

> `readonly` **name**: `"ElectricalMeasurement"` = `"ElectricalMeasurement"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
