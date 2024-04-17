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

- [[value]](behavior_cluster_export._internal_.NodeActivity-1.md#[value])
- [active](behavior_cluster_export._internal_.NodeActivity-1.md#active)
- [actors](behavior_cluster_export._internal_.NodeActivity-1.md#actors)
- [inactive](behavior_cluster_export._internal_.NodeActivity-1.md#inactive)
- [isActive](behavior_cluster_export._internal_.NodeActivity-1.md#isactive)

### Methods

- [begin](behavior_cluster_export._internal_.NodeActivity-1.md#begin)

## Constructors

### constructor

• **new NodeActivity**(): [`NodeActivity`](behavior_cluster_export._internal_.NodeActivity-1.md)

#### Returns

[`NodeActivity`](behavior_cluster_export._internal_.NodeActivity-1.md)

## Properties

### #active

• `Private` **#active**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L15)

___

### #actors

• `Private` **#actors**: `Set`\<[`Activity`](../interfaces/behavior_cluster_export._internal_.Activity.md)\>

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L14)

___

### #inactive

• `Private` **#inactive**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L16)

## Accessors

### [value]

• `get` **[value]**(): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L89)

___

### active

• `get` **active**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L22)

___

### actors

• `get` **actors**(): [`Activity`](../interfaces/behavior_cluster_export._internal_.Activity.md)[]

#### Returns

[`Activity`](../interfaces/behavior_cluster_export._internal_.Activity.md)[]

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L30)

___

### inactive

• `get` **inactive**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L26)

___

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L18)

## Methods

### begin

▸ **begin**(`description`, `onClose?`): [`Activity`](../interfaces/behavior_cluster_export._internal_.Activity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `unknown` |
| `onClose?` | () => `void` |

#### Returns

[`Activity`](../interfaces/behavior_cluster_export._internal_.Activity.md)

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L34)
