[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [node/export](../../../../README.md) / [\<internal\>](../../../README.md) / [IndexBehavior](../README.md) / Internal

# Class: Internal

## Constructors

### new Internal()

> **new Internal**(): [`Internal`](Internal.md)

#### Returns

[`Internal`](Internal.md)

## Properties

### changeBroadcaster?

> `optional` **changeBroadcaster**: [`Timer`](../../../../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/behavior/system/index/IndexBehavior.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/index/IndexBehavior.ts#L118)

***

### partsById

> **partsById**: `Record`\<`string`, `undefined` \| [`Endpoint`](../../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>\>

Map of ID to [Endpoint](../../../../../../endpoint/export/classes/Endpoint.md).

#### Source

[packages/matter.js/src/behavior/system/index/IndexBehavior.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/index/IndexBehavior.ts#L123)

***

### partsByNumber

> **partsByNumber**: `Record`\<`number`, `undefined` \| [`Endpoint`](../../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>\>

Map of number to [Endpoint](../../../../../../endpoint/export/classes/Endpoint.md).

#### Source

[packages/matter.js/src/behavior/system/index/IndexBehavior.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/index/IndexBehavior.ts#L128)
