[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / BatChargeFault

# Enumeration: BatChargeFault

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).BatChargeFault

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.5.3

## Table of contents

### Enumeration Members

- [AmbientTooCold](cluster_export.PowerSource.BatChargeFault.md#ambienttoocold)
- [AmbientTooHot](cluster_export.PowerSource.BatChargeFault.md#ambienttoohot)
- [BatteryAbsent](cluster_export.PowerSource.BatChargeFault.md#batteryabsent)
- [BatteryOverVoltage](cluster_export.PowerSource.BatChargeFault.md#batteryovervoltage)
- [BatteryTooCold](cluster_export.PowerSource.BatChargeFault.md#batterytoocold)
- [BatteryTooHot](cluster_export.PowerSource.BatChargeFault.md#batterytoohot)
- [BatteryUnderVoltage](cluster_export.PowerSource.BatChargeFault.md#batteryundervoltage)
- [ChargerOverVoltage](cluster_export.PowerSource.BatChargeFault.md#chargerovervoltage)
- [ChargerUnderVoltage](cluster_export.PowerSource.BatChargeFault.md#chargerundervoltage)
- [SafetyTimeout](cluster_export.PowerSource.BatChargeFault.md#safetytimeout)
- [Unspecified](cluster_export.PowerSource.BatChargeFault.md#unspecified)

## Enumeration Members

### AmbientTooCold

• **AmbientTooCold** = ``2``

The Node detects the ambient temperature is below the nominal range for this battery source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:817](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L817)

___

### AmbientTooHot

• **AmbientTooHot** = ``1``

The Node detects the ambient temperature is above the nominal range for this battery source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:812](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L812)

___

### BatteryAbsent

• **BatteryAbsent** = ``5``

The Node detects this battery source is not present.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:832](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L832)

___

### BatteryOverVoltage

• **BatteryOverVoltage** = ``6``

The Node detects this battery source is over voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:837](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L837)

___

### BatteryTooCold

• **BatteryTooCold** = ``4``

The Node detects the temperature of this battery source is below the nominal range.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:827](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L827)

___

### BatteryTooHot

• **BatteryTooHot** = ``3``

The Node detects the temperature of this battery source is above the nominal range.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:822](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L822)

___

### BatteryUnderVoltage

• **BatteryUnderVoltage** = ``7``

The Node detects this battery source is under voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:842](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L842)

___

### ChargerOverVoltage

• **ChargerOverVoltage** = ``8``

The Node detects the charger for this battery source is over voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:847](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L847)

___

### ChargerUnderVoltage

• **ChargerUnderVoltage** = ``9``

The Node detects the charger for this battery source is under voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:852](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L852)

___

### SafetyTimeout

• **SafetyTimeout** = ``10``

The Node detects a charging safety timeout for this battery source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:857](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L857)

___

### Unspecified

• **Unspecified** = ``0``

The Node detects an unspecified fault on this battery source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:807](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L807)
