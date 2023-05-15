[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / BatChargeFaultEnum

# Enumeration: BatChargeFaultEnum

[exports/cluster](../modules/exports_cluster.md).BatChargeFaultEnum

**`See`**

MatterCoreSpecificationV1_0 § 11.7.5.3

## Table of contents

### Enumeration Members

- [AmbientTooCold](exports_cluster.BatChargeFaultEnum.md#ambienttoocold)
- [AmbientTooHot](exports_cluster.BatChargeFaultEnum.md#ambienttoohot)
- [BatteryAbsent](exports_cluster.BatChargeFaultEnum.md#batteryabsent)
- [BatteryOverVoltage](exports_cluster.BatChargeFaultEnum.md#batteryovervoltage)
- [BatteryTooCold](exports_cluster.BatChargeFaultEnum.md#batterytoocold)
- [BatteryTooHot](exports_cluster.BatChargeFaultEnum.md#batterytoohot)
- [BatteryUnderVoltage](exports_cluster.BatChargeFaultEnum.md#batteryundervoltage)
- [ChargerOverVoltage](exports_cluster.BatChargeFaultEnum.md#chargerovervoltage)
- [ChargerUnderVoltage](exports_cluster.BatChargeFaultEnum.md#chargerundervoltage)
- [SafetyTimeout](exports_cluster.BatChargeFaultEnum.md#safetytimeout)
- [Unspecified](exports_cluster.BatChargeFaultEnum.md#unspecified)

## Enumeration Members

### AmbientTooCold

• **AmbientTooCold** = ``2``

Ambient temperature is below the nominal range .

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:33

___

### AmbientTooHot

• **AmbientTooHot** = ``1``

Ambient temperature is above the nominal range

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:31

___

### BatteryAbsent

• **BatteryAbsent** = ``5``

Battery source is not present.

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:39

___

### BatteryOverVoltage

• **BatteryOverVoltage** = ``6``

Battery source is over voltage.

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:41

___

### BatteryTooCold

• **BatteryTooCold** = ``4``

Temperature of this battery source is below the nominal range.

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:37

___

### BatteryTooHot

• **BatteryTooHot** = ``3``

Temperature of this battery source is above the nominal range.

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:35

___

### BatteryUnderVoltage

• **BatteryUnderVoltage** = ``7``

Battery source is under voltage.

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:43

___

### ChargerOverVoltage

• **ChargerOverVoltage** = ``8``

Charger for this battery source is over voltage.

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:45

___

### ChargerUnderVoltage

• **ChargerUnderVoltage** = ``9``

Charger for this battery source is under voltage.

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:47

___

### SafetyTimeout

• **SafetyTimeout** = ``10``

Charging safety timeout for this battery source.

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:49

___

### Unspecified

• **Unspecified** = ``0``

Unspecified fault on this battery source.

#### Defined in

packages/matter.js/dist/cjs/cluster/PowerSourceCluster.d.ts:29
