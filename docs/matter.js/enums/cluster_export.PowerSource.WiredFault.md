[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / WiredFault

# Enumeration: WiredFault

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).WiredFault

**`See`**

MatterSpecification.v11.Core § 11.7.5.1

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

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:57](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L57)

___

### UnderVoltage

• **UnderVoltage** = ``2``

The Node detects the supplied voltage is below maximum supported value for this wired power source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:62](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L62)

___

### Unspecified

• **Unspecified** = ``0``

The Node detects an unspecified fault on this wired power source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:52](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L52)
