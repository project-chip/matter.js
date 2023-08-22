[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / BatFault

# Enumeration: BatFault

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).BatFault

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.5.2

## Table of contents

### Enumeration Members

- [OverTemp](cluster_export.PowerSource.BatFault.md#overtemp)
- [UnderTemp](cluster_export.PowerSource.BatFault.md#undertemp)
- [Unspecified](cluster_export.PowerSource.BatFault.md#unspecified)

## Enumeration Members

### OverTemp

• **OverTemp** = ``1``

The Node detects the temperature of this battery power source is above ideal operating conditions.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:177](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L177)

___

### UnderTemp

• **UnderTemp** = ``2``

The Node detects the temperature of this battery power source is below ideal operating conditions.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:182](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L182)

___

### Unspecified

• **Unspecified** = ``0``

The Node detects an unspecified fault on this battery power source.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:172](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L172)
