[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Identify](../modules/cluster_export.Identify.md) / EffectIdentifier

# Enumeration: EffectIdentifier

[cluster/export](../modules/cluster_export.md).[Identify](../modules/cluster_export.Identify.md).EffectIdentifier

The value of Identify.effectIdentifier

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.2.6.3.1

## Table of contents

### Enumeration Members

- [Blink](cluster_export.Identify.EffectIdentifier.md#blink)
- [Breathe](cluster_export.Identify.EffectIdentifier.md#breathe)
- [ChannelChange](cluster_export.Identify.EffectIdentifier.md#channelchange)
- [FinishEffect](cluster_export.Identify.EffectIdentifier.md#finisheffect)
- [Okay](cluster_export.Identify.EffectIdentifier.md#okay)
- [StopEffect](cluster_export.Identify.EffectIdentifier.md#stopeffect)

## Enumeration Members

### Blink

• **Blink** = ``0``

e.g., Light is turned on/off once.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:84](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L84)

___

### Breathe

• **Breathe** = ``1``

e.g., Light is turned on/off over 1 second and repeated 15 times.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L89)

___

### ChannelChange

• **ChannelChange** = ``11``

e.g., Colored light turns orange for 8 seconds; non-colored light switches to the maximum brightness for
0.5s and then minimum brightness for 7.5s.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:100](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L100)

___

### FinishEffect

• **FinishEffect** = ``254``

Complete the current effect sequence before terminating. e.g., if in the middle of a breathe effect (as
above), first complete the current 1s breathe effect and then terminate the effect.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:106](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L106)

___

### Okay

• **Okay** = ``2``

e.g., Colored light turns green for 1 second; non-colored light flashes twice.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:94](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L94)

___

### StopEffect

• **StopEffect** = ``255``

Terminate the effect as soon as possible.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L111)
