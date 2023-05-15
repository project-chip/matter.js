[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / DelayedAllOffEffectVariant

# Enumeration: DelayedAllOffEffectVariant

[cluster](../modules/cluster.md).DelayedAllOffEffectVariant

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.5.7.4.2

## Table of contents

### Enumeration Members

- [DimDownThenFade](cluster.DelayedAllOffEffectVariant.md#dimdownthenfade)
- [Fade](cluster.DelayedAllOffEffectVariant.md#fade)
- [NoFade](cluster.DelayedAllOffEffectVariant.md#nofade)

## Enumeration Members

### DimDownThenFade

• **DimDownThenFade** = ``2``

50% dim down in 0.8 seconds then fade to off in 12 seconds.

#### Defined in

[packages/matter.js/src/cluster/OnOffCluster.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OnOffCluster.ts#L53)

___

### Fade

• **Fade** = ``0``

Fade to off in 0.8 seconds.

#### Defined in

[packages/matter.js/src/cluster/OnOffCluster.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OnOffCluster.ts#L47)

___

### NoFade

• **NoFade** = ``1``

Don't fade, turn off immediately.

#### Defined in

[packages/matter.js/src/cluster/OnOffCluster.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OnOffCluster.ts#L50)
