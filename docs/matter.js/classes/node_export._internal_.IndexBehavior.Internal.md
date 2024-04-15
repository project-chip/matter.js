[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / [IndexBehavior](../modules/node_export._internal_.IndexBehavior.md) / Internal

# Class: Internal

[\<internal\>](../modules/node_export._internal_.md).[IndexBehavior](../modules/node_export._internal_.IndexBehavior.md).Internal

## Table of contents

### Constructors

- [constructor](node_export._internal_.IndexBehavior.Internal.md#constructor)

### Properties

- [changeBroadcaster](node_export._internal_.IndexBehavior.Internal.md#changebroadcaster)
- [partsById](node_export._internal_.IndexBehavior.Internal.md#partsbyid)
- [partsByNumber](node_export._internal_.IndexBehavior.Internal.md#partsbynumber)

## Constructors

### constructor

• **new Internal**(): [`Internal`](node_export._internal_.IndexBehavior.Internal.md)

#### Returns

[`Internal`](node_export._internal_.IndexBehavior.Internal.md)

## Properties

### changeBroadcaster

• `Optional` **changeBroadcaster**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/behavior/system/index/IndexBehavior.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/index/IndexBehavior.ts#L118)

___

### partsById

• **partsById**: `Record`\<`string`, `undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>\>

Map of ID to [Endpoint](endpoint_export.Endpoint-1.md).

#### Defined in

[packages/matter.js/src/behavior/system/index/IndexBehavior.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/index/IndexBehavior.ts#L123)

___

### partsByNumber

• **partsByNumber**: `Record`\<`number`, `undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>\>

Map of number to [Endpoint](endpoint_export.Endpoint-1.md).

#### Defined in

[packages/matter.js/src/behavior/system/index/IndexBehavior.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/index/IndexBehavior.ts#L128)
