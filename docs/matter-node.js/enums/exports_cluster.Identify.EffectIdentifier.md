[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Identify](../modules/exports_cluster.Identify.md) / EffectIdentifier

# Enumeration: EffectIdentifier

[exports/cluster](../modules/exports_cluster.md).[Identify](../modules/exports_cluster.Identify.md).EffectIdentifier

The value of Identify.effectIdentifier

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.2.6.3.1

## Table of contents

### Enumeration Members

- [Blink](exports_cluster.Identify.EffectIdentifier.md#blink)
- [Breathe](exports_cluster.Identify.EffectIdentifier.md#breathe)
- [ChannelChange](exports_cluster.Identify.EffectIdentifier.md#channelchange)
- [FinishEffect](exports_cluster.Identify.EffectIdentifier.md#finisheffect)
- [Okay](exports_cluster.Identify.EffectIdentifier.md#okay)
- [StopEffect](exports_cluster.Identify.EffectIdentifier.md#stopeffect)

## Enumeration Members

### Blink

• **Blink** = ``0``

e.g., Light is turned on/off once.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:56

___

### Breathe

• **Breathe** = ``1``

e.g., Light is turned on/off over 1 second and repeated 15 times.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:60

___

### ChannelChange

• **ChannelChange** = ``11``

e.g., Colored light turns orange for 8 seconds; non-colored light switches to the maximum brightness for
0.5s and then minimum brightness for 7.5s.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:69

___

### FinishEffect

• **FinishEffect** = ``254``

Complete the current effect sequence before terminating. e.g., if in the middle of a breathe effect (as
above), first complete the current 1s breathe effect and then terminate the effect.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:74

___

### Okay

• **Okay** = ``2``

e.g., Colored light turns green for 1 second; non-colored light flashes twice.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:64

___

### StopEffect

• **StopEffect** = ``255``

Terminate the effect as soon as possible.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:78
