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

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:800](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L800)

___

### AmbientTooHot

• **AmbientTooHot** = ``1``

The Node detects the ambient temperature is above the nominal range for this battery source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:795](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L795)

___

### BatteryAbsent

• **BatteryAbsent** = ``5``

The Node detects this battery source is not present.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:815](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L815)

___

### BatteryOverVoltage

• **BatteryOverVoltage** = ``6``

The Node detects this battery source is over voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:820](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L820)

___

### BatteryTooCold

• **BatteryTooCold** = ``4``

The Node detects the temperature of this battery source is below the nominal range.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:810](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L810)

___

### BatteryTooHot

• **BatteryTooHot** = ``3``

The Node detects the temperature of this battery source is above the nominal range.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:805](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L805)

___

### BatteryUnderVoltage

• **BatteryUnderVoltage** = ``7``

The Node detects this battery source is under voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:825](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L825)

___

### ChargerOverVoltage

• **ChargerOverVoltage** = ``8``

The Node detects the charger for this battery source is over voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:830](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L830)

___

### ChargerUnderVoltage

• **ChargerUnderVoltage** = ``9``

The Node detects the charger for this battery source is under voltage.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:835](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L835)

___

### SafetyTimeout

• **SafetyTimeout** = ``10``

The Node detects a charging safety timeout for this battery source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:840](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L840)

___

### Unspecified

• **Unspecified** = ``0``

The Node detects an unspecified fault on this battery source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:790](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L790)
