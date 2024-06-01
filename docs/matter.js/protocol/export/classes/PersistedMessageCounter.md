[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / PersistedMessageCounter

# Class: PersistedMessageCounter

Enhanced Message counter that can be persisted and will be initialized from the persisted value (if existing).

## Extends

- [`MessageCounter`](MessageCounter.md)

## Constructors

### new PersistedMessageCounter()

> **new PersistedMessageCounter**(`storageContext`, `storageKey`, `aboutToRolloverCallback`?, `rolloverInfoDifference`?): [`PersistedMessageCounter`](PersistedMessageCounter.md)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `storageContext` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> | `undefined` |
| `storageKey` | `string` | `undefined` |
| `aboutToRolloverCallback`? | () => `void` | `undefined` |
| `rolloverInfoDifference`? | `number` | `ROLLOVER_INFO_DIFFERENCE` |

#### Returns

[`PersistedMessageCounter`](PersistedMessageCounter.md)

#### Overrides

[`MessageCounter`](MessageCounter.md).[`constructor`](MessageCounter.md#constructors)

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L102)

## Properties

### #construction

> `private` **#construction**: [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`PersistedMessageCounter`](PersistedMessageCounter.md)\>

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L81)

***

### aboutToRolloverCallback()?

> `protected` `optional` `readonly` **aboutToRolloverCallback**: () => `void`

#### Returns

`void`

#### Inherited from

[`MessageCounter`](MessageCounter.md).[`aboutToRolloverCallback`](MessageCounter.md#abouttorollovercallback)

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L57)

***

### messageCounter

> `protected` **messageCounter**: `number`

#### Inherited from

[`MessageCounter`](MessageCounter.md).[`messageCounter`](MessageCounter.md#messagecounter)

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L49)

***

### rolloverInfoDifference

> `protected` `readonly` **rolloverInfoDifference**: `number` = `ROLLOVER_INFO_DIFFERENCE`

#### Inherited from

[`MessageCounter`](MessageCounter.md).[`rolloverInfoDifference`](MessageCounter.md#rolloverinfodifference)

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L58)

***

### storageContext

> `private` `readonly` **storageContext**: [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L103)

***

### storageKey

> `private` `readonly` **storageKey**: `string`

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L104)

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`PersistedMessageCounter`](PersistedMessageCounter.md)\>

#### Returns

[`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`PersistedMessageCounter`](PersistedMessageCounter.md)\>

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L83)

## Methods

### getIncrementedCounter()

> **getIncrementedCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Overrides

[`MessageCounter`](MessageCounter.md).[`getIncrementedCounter`](MessageCounter.md#getincrementedcounter)

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L126)

***

### create()

> `static` **create**(`storageContext`, `storageKey`, `aboutToRolloverCallback`?, `rolloverInfoDifference`?): `Promise`\<[`PersistedMessageCounter`](PersistedMessageCounter.md)\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `storageContext` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> | `undefined` |
| `storageKey` | `string` | `undefined` |
| `aboutToRolloverCallback`? | () => `void` | `undefined` |
| `rolloverInfoDifference`? | `number` | `ROLLOVER_INFO_DIFFERENCE` |

#### Returns

`Promise`\<[`PersistedMessageCounter`](PersistedMessageCounter.md)\>

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L87)
