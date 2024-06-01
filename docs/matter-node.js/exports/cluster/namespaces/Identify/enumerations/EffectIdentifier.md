[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Identify](../README.md) / EffectIdentifier

# Enumeration: EffectIdentifier

The value of Identify.effectIdentifier

## See

MatterSpecification.v11.Cluster § 1.2.6.3.1

## Enumeration Members

### Blink

> **Blink**: `0`

e.g., Light is turned on/off once.

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:89

***

### Breathe

> **Breathe**: `1`

e.g., Light is turned on/off over 1 second and repeated 15 times.

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:93

***

### ChannelChange

> **ChannelChange**: `11`

e.g., Colored light turns orange for 8 seconds; non-colored light switches to the maximum brightness for
0.5s and then minimum brightness for 7.5s.

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:102

***

### FinishEffect

> **FinishEffect**: `254`

Complete the current effect sequence before terminating. e.g., if in the middle of a breathe effect (as
above), first complete the current 1s breathe effect and then terminate the effect.

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:107

***

### Okay

> **Okay**: `2`

e.g., Colored light turns green for 1 second; non-colored light flashes twice.

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:97

***

### StopEffect

> **StopEffect**: `255`

Terminate the effect as soon as possible.

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:111
