[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / BatChargeFault

# Enumeration: BatChargeFault

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).BatChargeFault

**`See`**

MatterSpecification.v11.Core § 11.7.5.3

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

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:799](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L799)

___

### AmbientTooHot

• **AmbientTooHot** = ``1``

The Node detects the ambient temperature is above the nominal range for this battery source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:794](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L794)

___

### BatteryAbsent

• **BatteryAbsent** = ``5``

The Node detects this battery source is not present.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:814](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L814)

___

### BatteryOverVoltage

• **BatteryOverVoltage** = ``6``

The Node detects this battery source is over voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:819](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L819)

___

### BatteryTooCold

• **BatteryTooCold** = ``4``

The Node detects the temperature of this battery source is below the nominal range.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:809](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L809)

___

### BatteryTooHot

• **BatteryTooHot** = ``3``

The Node detects the temperature of this battery source is above the nominal range.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:804](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L804)

___

### BatteryUnderVoltage

• **BatteryUnderVoltage** = ``7``

The Node detects this battery source is under voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:824](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L824)

___

### ChargerOverVoltage

• **ChargerOverVoltage** = ``8``

The Node detects the charger for this battery source is over voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:829](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L829)

___

### ChargerUnderVoltage

• **ChargerUnderVoltage** = ``9``

The Node detects the charger for this battery source is under voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:834](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L834)

___

### SafetyTimeout

• **SafetyTimeout** = ``10``

The Node detects a charging safety timeout for this battery source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:839](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L839)

___

### Unspecified

• **Unspecified** = ``0``

The Node detects an unspecified fault on this battery source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:789](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L789)
