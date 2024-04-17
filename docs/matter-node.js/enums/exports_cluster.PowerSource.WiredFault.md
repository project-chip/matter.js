[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PowerSource](../modules/exports_cluster.PowerSource.md) / WiredFault

# Enumeration: WiredFault

[exports/cluster](../modules/exports_cluster.md).[PowerSource](../modules/exports_cluster.PowerSource.md).WiredFault

**`See`**

MatterSpecification.v11.Core § 11.7.5.1

## Table of contents

### Enumeration Members

- [OverVoltage](exports_cluster.PowerSource.WiredFault.md#overvoltage)
- [UnderVoltage](exports_cluster.PowerSource.WiredFault.md#undervoltage)
- [Unspecified](exports_cluster.PowerSource.WiredFault.md#unspecified)

## Enumeration Members

### OverVoltage

• **OverVoltage** = ``1``

The Node detects the supplied voltage is above maximum supported value for this wired power source.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:37

___

### UnderVoltage

• **UnderVoltage** = ``2``

The Node detects the supplied voltage is below maximum supported value for this wired power source.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:41

___

### Unspecified

• **Unspecified** = ``0``

The Node detects an unspecified fault on this wired power source.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:33
