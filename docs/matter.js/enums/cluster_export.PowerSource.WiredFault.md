[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / WiredFault

# Enumeration: WiredFault

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).WiredFault

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.5.1

## Table of contents

### Enumeration Members

- [OverVoltage](cluster_export.PowerSource.WiredFault.md#overvoltage)
- [UnderVoltage](cluster_export.PowerSource.WiredFault.md#undervoltage)
- [Unspecified](cluster_export.PowerSource.WiredFault.md#unspecified)

## Enumeration Members

### OverVoltage

• **OverVoltage** = ``1``

The Node detects the supplied voltage is above maximum supported value for this wired power source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L89)

___

### UnderVoltage

• **UnderVoltage** = ``2``

The Node detects the supplied voltage is below maximum supported value for this wired power source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:94](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L94)

___

### Unspecified

• **Unspecified** = ``0``

The Node detects an unspecified fault on this wired power source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:84](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L84)
