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

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:808

___

### AmbientTooHot

• **AmbientTooHot** = ``1``

The Node detects the ambient temperature is above the nominal range for this battery source.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:803

___

### BatteryAbsent

• **BatteryAbsent** = ``5``

The Node detects this battery source is not present.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:823

___

### BatteryOverVoltage

• **BatteryOverVoltage** = ``6``

The Node detects this battery source is over voltage.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:828

___

### BatteryTooCold

• **BatteryTooCold** = ``4``

The Node detects the temperature of this battery source is below the nominal range.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:818

___

### BatteryTooHot

• **BatteryTooHot** = ``3``

The Node detects the temperature of this battery source is above the nominal range.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:813

___

### BatteryUnderVoltage

• **BatteryUnderVoltage** = ``7``

The Node detects this battery source is under voltage.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:833

___

### ChargerOverVoltage

• **ChargerOverVoltage** = ``8``

The Node detects the charger for this battery source is over voltage.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:838

___

### ChargerUnderVoltage

• **ChargerUnderVoltage** = ``9``

The Node detects the charger for this battery source is under voltage.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:843

___

### SafetyTimeout

• **SafetyTimeout** = ``10``

The Node detects a charging safety timeout for this battery source.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:848

___

### Unspecified

• **Unspecified** = ``0``

The Node detects an unspecified fault on this battery source.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:798
