[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / NodeActivity

# Class: NodeActivity

Tracks activity associated with a node.

## Constructors

### new NodeActivity()

> **new NodeActivity**(): [`NodeActivity`](NodeActivity.md)

#### Returns

[`NodeActivity`](NodeActivity.md)

## Properties

### #active

> `private` **#active**: [`Observable`](../../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/behavior/context/NodeActivity.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/NodeActivity.ts#L15)

***

### #actors

> `private` **#actors**: `Set`\<[`Activity`](../interfaces/Activity.md)\>

#### Source

[packages/matter.js/src/behavior/context/NodeActivity.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/NodeActivity.ts#L14)

***

### #inactive

> `private` **#inactive**: [`Observable`](../../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/behavior/context/NodeActivity.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/NodeActivity.ts#L16)

## Accessors

### \[value\]

> `get` **\[value\]**(): [`Diagnostic`](../../../../../log/export/interfaces/Diagnostic.md)

#### Returns

[`Diagnostic`](../../../../../log/export/interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/behavior/context/NodeActivity.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/NodeActivity.ts#L89)

***

### active

> `get` **active**(): [`Observable`](../../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Returns

[`Observable`](../../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/behavior/context/NodeActivity.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/NodeActivity.ts#L22)

***

### actors

> `get` **actors**(): [`Activity`](../interfaces/Activity.md)[]

#### Returns

[`Activity`](../interfaces/Activity.md)[]

#### Source

[packages/matter.js/src/behavior/context/NodeActivity.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/NodeActivity.ts#L30)

***

### inactive

> `get` **inactive**(): [`Observable`](../../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Returns

[`Observable`](../../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/behavior/context/NodeActivity.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/NodeActivity.ts#L26)

***

### isActive

> `get` **isActive**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/behavior/context/NodeActivity.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/NodeActivity.ts#L18)

## Methods

### begin()

> **begin**(`description`, `onClose`?): [`Activity`](../interfaces/Activity.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `description` | `unknown` |
| `onClose`? | () => `void` |

#### Returns

[`Activity`](../interfaces/Activity.md)

#### Source

[packages/matter.js/src/behavior/context/NodeActivity.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/NodeActivity.ts#L34)
