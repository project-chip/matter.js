[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / DelayedAllOffEffectVariant

# Enumeration: DelayedAllOffEffectVariant

[exports/cluster](../modules/exports_cluster.md).DelayedAllOffEffectVariant

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.5.7.4.2

## Table of contents

### Enumeration Members

- [DimDownThenFade](exports_cluster.DelayedAllOffEffectVariant.md#dimdownthenfade)
- [Fade](exports_cluster.DelayedAllOffEffectVariant.md#fade)
- [NoFade](exports_cluster.DelayedAllOffEffectVariant.md#nofade)

## Enumeration Members

### DimDownThenFade

• **DimDownThenFade** = ``2``

50% dim down in 0.8 seconds then fade to off in 12 seconds.

#### Defined in

packages/matter.js/dist/cjs/cluster/OnOffCluster.d.ts:38

___

### Fade

• **Fade** = ``0``

Fade to off in 0.8 seconds.

#### Defined in

packages/matter.js/dist/cjs/cluster/OnOffCluster.d.ts:34

___

### NoFade

• **NoFade** = ``1``

Don't fade, turn off immediately.

#### Defined in

packages/matter.js/dist/cjs/cluster/OnOffCluster.d.ts:36
