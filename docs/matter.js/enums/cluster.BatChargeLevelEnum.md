[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / BatChargeLevelEnum

# Enumeration: BatChargeLevelEnum

[cluster](../modules/cluster.md).BatChargeLevelEnum

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.7.6.1. Table 94

## Table of contents

### Enumeration Members

- [Critical](cluster.BatChargeLevelEnum.md#critical)
- [OK](cluster.BatChargeLevelEnum.md#ok)
- [Warning](cluster.BatChargeLevelEnum.md#warning)

## Enumeration Members

### Critical

• **Critical** = ``2``

Charge level is critical, immediate intervention is required

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:110](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L110)

___

### OK

• **OK** = ``0``

Charge level is nominal

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:104](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L104)

___

### Warning

• **Warning** = ``1``

Charge level is low, intervention may soon be required.

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L107)
