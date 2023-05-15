[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / BatChargeFaultEnum

# Enumeration: BatChargeFaultEnum

[cluster](../modules/cluster.md).BatChargeFaultEnum

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.7.5.3

## Table of contents

### Enumeration Members

- [AmbientTooCold](cluster.BatChargeFaultEnum.md#ambienttoocold)
- [AmbientTooHot](cluster.BatChargeFaultEnum.md#ambienttoohot)
- [BatteryAbsent](cluster.BatChargeFaultEnum.md#batteryabsent)
- [BatteryOverVoltage](cluster.BatChargeFaultEnum.md#batteryovervoltage)
- [BatteryTooCold](cluster.BatChargeFaultEnum.md#batterytoocold)
- [BatteryTooHot](cluster.BatChargeFaultEnum.md#batterytoohot)
- [BatteryUnderVoltage](cluster.BatChargeFaultEnum.md#batteryundervoltage)
- [ChargerOverVoltage](cluster.BatChargeFaultEnum.md#chargerovervoltage)
- [ChargerUnderVoltage](cluster.BatChargeFaultEnum.md#chargerundervoltage)
- [SafetyTimeout](cluster.BatChargeFaultEnum.md#safetytimeout)
- [Unspecified](cluster.BatChargeFaultEnum.md#unspecified)

## Enumeration Members

### AmbientTooCold

• **AmbientTooCold** = ``2``

Ambient temperature is below the nominal range .

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L50)

___

### AmbientTooHot

• **AmbientTooHot** = ``1``

Ambient temperature is above the nominal range

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L47)

___

### BatteryAbsent

• **BatteryAbsent** = ``5``

Battery source is not present.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:59](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L59)

___

### BatteryOverVoltage

• **BatteryOverVoltage** = ``6``

Battery source is over voltage.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:62](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L62)

___

### BatteryTooCold

• **BatteryTooCold** = ``4``

Temperature of this battery source is below the nominal range.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:56](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L56)

___

### BatteryTooHot

• **BatteryTooHot** = ``3``

Temperature of this battery source is above the nominal range.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L53)

___

### BatteryUnderVoltage

• **BatteryUnderVoltage** = ``7``

Battery source is under voltage.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:65](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L65)

___

### ChargerOverVoltage

• **ChargerOverVoltage** = ``8``

Charger for this battery source is over voltage.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:68](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L68)

___

### ChargerUnderVoltage

• **ChargerUnderVoltage** = ``9``

Charger for this battery source is under voltage.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:71](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L71)

___

### SafetyTimeout

• **SafetyTimeout** = ``10``

Charging safety timeout for this battery source.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L74)

___

### Unspecified

• **Unspecified** = ``0``

Unspecified fault on this battery source.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L44)
