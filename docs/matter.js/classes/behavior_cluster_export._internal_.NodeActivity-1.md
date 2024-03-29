[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / NodeActivity

# Class: NodeActivity

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).NodeActivity

Tracks activity associated with a node.

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.NodeActivity-1.md#constructor)

### Properties

- [#active](behavior_cluster_export._internal_.NodeActivity-1.md##active)
- [#actors](behavior_cluster_export._internal_.NodeActivity-1.md##actors)
- [#inactive](behavior_cluster_export._internal_.NodeActivity-1.md##inactive)

### Accessors

- [active](behavior_cluster_export._internal_.NodeActivity-1.md#active)
- [actors](behavior_cluster_export._internal_.NodeActivity-1.md#actors)
- [inactive](behavior_cluster_export._internal_.NodeActivity-1.md#inactive)
- [isActive](behavior_cluster_export._internal_.NodeActivity-1.md#isactive)

### Methods

- [add](behavior_cluster_export._internal_.NodeActivity-1.md#add)
- [delete](behavior_cluster_export._internal_.NodeActivity-1.md#delete)

## Constructors

### constructor

• **new NodeActivity**(): [`NodeActivity`](behavior_cluster_export._internal_.NodeActivity-1.md)

#### Returns

[`NodeActivity`](behavior_cluster_export._internal_.NodeActivity-1.md)

## Properties

### #active

• `Private` **#active**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/context/server/NodeActivity.ts:15](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/context/server/NodeActivity.ts#L15)

___

### #actors

• `Private` **#actors**: `Map`\<{}, [`Actor`](../interfaces/behavior_cluster_export._internal_.NodeActivity.Actor.md)\>

#### Defined in

[packages/matter.js/src/behavior/context/server/NodeActivity.ts:14](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/context/server/NodeActivity.ts#L14)

___

### #inactive

• `Private` **#inactive**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/context/server/NodeActivity.ts:16](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/context/server/NodeActivity.ts#L16)

## Accessors

### active

• `get` **active**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/context/server/NodeActivity.ts:22](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/context/server/NodeActivity.ts#L22)

___

### actors

• `get` **actors**(): [`Actor`](../interfaces/behavior_cluster_export._internal_.NodeActivity.Actor.md)[]

#### Returns

[`Actor`](../interfaces/behavior_cluster_export._internal_.NodeActivity.Actor.md)[]

#### Defined in

[packages/matter.js/src/behavior/context/server/NodeActivity.ts:30](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/context/server/NodeActivity.ts#L30)

___

### inactive

• `get` **inactive**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/context/server/NodeActivity.ts:26](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/context/server/NodeActivity.ts#L26)

___

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/behavior/context/server/NodeActivity.ts:18](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/context/server/NodeActivity.ts#L18)

## Methods

### add

▸ **add**(`host`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `Object` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/context/server/NodeActivity.ts:34](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/context/server/NodeActivity.ts#L34)

___

### delete

▸ **delete**(`host`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `Object` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/context/server/NodeActivity.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/context/server/NodeActivity.ts#L50)
