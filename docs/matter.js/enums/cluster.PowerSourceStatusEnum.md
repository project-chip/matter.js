[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / PowerSourceStatusEnum

# Enumeration: PowerSourceStatusEnum

[cluster](../modules/cluster.md).PowerSourceStatusEnum

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.7.6.1. Table 92

## Table of contents

### Enumeration Members

- [Active](cluster.PowerSourceStatusEnum.md#active)
- [Standby](cluster.PowerSourceStatusEnum.md#standby)
- [Unavailable](cluster.PowerSourceStatusEnum.md#unavailable)
- [Unspecified](cluster.PowerSourceStatusEnum.md#unspecified)

## Enumeration Members

### Active

• **Active** = ``1``

SHALL indicate the source is available and currently supplying power

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:83](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L83)

___

### Standby

• **Standby** = ``2``

SHALL indicate the source is available, but is not currently supplying power

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:86](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L86)

___

### Unavailable

• **Unavailable** = ``3``

SHALL indicate the source is not currently available to supply power

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:89](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L89)

___

### Unspecified

• **Unspecified** = ``0``

SHALL indicate the source status is not specified

#### Defined in

[packages/matter.js/src/cluster/PowerSourceCluster.ts:80](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/PowerSourceCluster.ts#L80)
