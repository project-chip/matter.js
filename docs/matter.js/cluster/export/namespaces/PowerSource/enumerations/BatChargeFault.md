[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [PowerSource](../README.md) / BatChargeFault

# Enumeration: BatChargeFault

## See

MatterSpecification.v11.Core § 11.7.5.3

## Enumeration Members

### AmbientTooCold

> **AmbientTooCold**: `2`

The Node detects the ambient temperature is below the nominal range for this battery source.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:812](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L812)

***

### AmbientTooHot

> **AmbientTooHot**: `1`

The Node detects the ambient temperature is above the nominal range for this battery source.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:807](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L807)

***

### BatteryAbsent

> **BatteryAbsent**: `5`

The Node detects this battery source is not present.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:827](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L827)

***

### BatteryOverVoltage

> **BatteryOverVoltage**: `6`

The Node detects this battery source is over voltage.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:832](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L832)

***

### BatteryTooCold

> **BatteryTooCold**: `4`

The Node detects the temperature of this battery source is below the nominal range.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:822](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L822)

***

### BatteryTooHot

> **BatteryTooHot**: `3`

The Node detects the temperature of this battery source is above the nominal range.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:817](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L817)

***

### BatteryUnderVoltage

> **BatteryUnderVoltage**: `7`

The Node detects this battery source is under voltage.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:837](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L837)

***

### ChargerOverVoltage

> **ChargerOverVoltage**: `8`

The Node detects the charger for this battery source is over voltage.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:842](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L842)

***

### ChargerUnderVoltage

> **ChargerUnderVoltage**: `9`

The Node detects the charger for this battery source is under voltage.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:847](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L847)

***

### SafetyTimeout

> **SafetyTimeout**: `10`

The Node detects a charging safety timeout for this battery source.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:852](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L852)

***

### Unspecified

> **Unspecified**: `0`

The Node detects an unspecified fault on this battery source.

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:802](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L802)
