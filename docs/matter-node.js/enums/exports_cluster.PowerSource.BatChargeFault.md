[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PowerSource](../modules/exports_cluster.PowerSource.md) / BatChargeFault

# Enumeration: BatChargeFault

[exports/cluster](../modules/exports_cluster.md).[PowerSource](../modules/exports_cluster.PowerSource.md).BatChargeFault

**`See`**

MatterCoreSpecificationV1_1 § 11.7.5.3

## Table of contents

### Enumeration Members

- [AmbientTooCold](exports_cluster.PowerSource.BatChargeFault.md#ambienttoocold)
- [AmbientTooHot](exports_cluster.PowerSource.BatChargeFault.md#ambienttoohot)
- [BatteryAbsent](exports_cluster.PowerSource.BatChargeFault.md#batteryabsent)
- [BatteryOverVoltage](exports_cluster.PowerSource.BatChargeFault.md#batteryovervoltage)
- [BatteryTooCold](exports_cluster.PowerSource.BatChargeFault.md#batterytoocold)
- [BatteryTooHot](exports_cluster.PowerSource.BatChargeFault.md#batterytoohot)
- [BatteryUnderVoltage](exports_cluster.PowerSource.BatChargeFault.md#batteryundervoltage)
- [ChargerOverVoltage](exports_cluster.PowerSource.BatChargeFault.md#chargerovervoltage)
- [ChargerUnderVoltage](exports_cluster.PowerSource.BatChargeFault.md#chargerundervoltage)
- [SafetyTimeout](exports_cluster.PowerSource.BatChargeFault.md#safetytimeout)
- [Unspecified](exports_cluster.PowerSource.BatChargeFault.md#unspecified)

## Enumeration Members

### AmbientTooCold

• **AmbientTooCold** = ``2``

The Node detects the ambient temperature is below the nominal range for this battery source.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:649

___

### AmbientTooHot

• **AmbientTooHot** = ``1``

The Node detects the ambient temperature is above the nominal range for this battery source.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:645

___

### BatteryAbsent

• **BatteryAbsent** = ``5``

The Node detects this battery source is not present.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:661

___

### BatteryOverVoltage

• **BatteryOverVoltage** = ``6``

The Node detects this battery source is over voltage.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:665

___

### BatteryTooCold

• **BatteryTooCold** = ``4``

The Node detects the temperature of this battery source is below the nominal range.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:657

___

### BatteryTooHot

• **BatteryTooHot** = ``3``

The Node detects the temperature of this battery source is above the nominal range.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:653

___

### BatteryUnderVoltage

• **BatteryUnderVoltage** = ``7``

The Node detects this battery source is under voltage.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:669

___

### ChargerOverVoltage

• **ChargerOverVoltage** = ``8``

The Node detects the charger for this battery source is over voltage.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:673

___

### ChargerUnderVoltage

• **ChargerUnderVoltage** = ``9``

The Node detects the charger for this battery source is under voltage.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:677

___

### SafetyTimeout

• **SafetyTimeout** = ``10``

The Node detects a charging safety timeout for this battery source.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:681

___

### Unspecified

• **Unspecified** = ``0``

The Node detects an unspecified fault on this battery source.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:641
