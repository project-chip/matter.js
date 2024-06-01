[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / PersistedMessageCounter

# Class: PersistedMessageCounter

Enhanced Message counter that can be persisted and will be initialized from the persisted value (if existing).

## Extends

- [`MessageCounter`](MessageCounter.md)

## Constructors

### new PersistedMessageCounter()

> **new PersistedMessageCounter**(`storageContext`, `storageKey`, `aboutToRolloverCallback`?, `rolloverInfoDifference`?): [`PersistedMessageCounter`](PersistedMessageCounter.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `storageContext` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `storageKey` | `string` |
| `aboutToRolloverCallback`? | () => `void` |
| `rolloverInfoDifference`? | `number` |

#### Returns

[`PersistedMessageCounter`](PersistedMessageCounter.md)

#### Overrides

[`MessageCounter`](MessageCounter.md).[`constructor`](MessageCounter.md#constructors)

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:55

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:50

***

### aboutToRolloverCallback()?

> `protected` `optional` `readonly` **aboutToRolloverCallback**: () => `void`

#### Returns

`void`

#### Inherited from

[`MessageCounter`](MessageCounter.md).[`aboutToRolloverCallback`](MessageCounter.md#abouttorollovercallback)

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:37

***

### messageCounter

> `protected` **messageCounter**: `number`

#### Inherited from

[`MessageCounter`](MessageCounter.md).[`messageCounter`](MessageCounter.md#messagecounter)

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:39

***

### rolloverInfoDifference

> `protected` `readonly` **rolloverInfoDifference**: `number`

#### Inherited from

[`MessageCounter`](MessageCounter.md).[`rolloverInfoDifference`](MessageCounter.md#rolloverinfodifference)

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:38

***

### storageContext

> `private` `readonly` **storageContext**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:51

***

### storageKey

> `private` `readonly` **storageKey**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:52

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../../cluster/-internal-/interfaces/AsyncConstruction.md)\<[`PersistedMessageCounter`](PersistedMessageCounter.md)\>

#### Returns

[`AsyncConstruction`](../../cluster/-internal-/interfaces/AsyncConstruction.md)\<[`PersistedMessageCounter`](PersistedMessageCounter.md)\>

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:53

## Methods

### getIncrementedCounter()

> **getIncrementedCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Overrides

[`MessageCounter`](MessageCounter.md).[`getIncrementedCounter`](MessageCounter.md#getincrementedcounter)

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:56

***

### create()

> `static` **create**(`storageContext`, `storageKey`, `aboutToRolloverCallback`?, `rolloverInfoDifference`?): `Promise`\<[`PersistedMessageCounter`](PersistedMessageCounter.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `storageContext` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `storageKey` | `string` |
| `aboutToRolloverCallback`? | () => `void` |
| `rolloverInfoDifference`? | `number` |

#### Returns

`Promise`\<[`PersistedMessageCounter`](PersistedMessageCounter.md)\>

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:54
