[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / PersistedMessageCounter

# Class: PersistedMessageCounter

[exports/protocol](../modules/exports_protocol.md).PersistedMessageCounter

Enhanced Message counter that can be persisted and will be initialized from the persisted value (if existing).

## Hierarchy

- [`MessageCounter`](exports_protocol.MessageCounter.md)

  ↳ **`PersistedMessageCounter`**

## Table of contents

### Constructors

- [constructor](exports_protocol.PersistedMessageCounter.md#constructor)

### Properties

- [#private](exports_protocol.PersistedMessageCounter.md##private)
- [aboutToRolloverCallback](exports_protocol.PersistedMessageCounter.md#abouttorollovercallback)
- [messageCounter](exports_protocol.PersistedMessageCounter.md#messagecounter)
- [rolloverInfoDifference](exports_protocol.PersistedMessageCounter.md#rolloverinfodifference)
- [storageContext](exports_protocol.PersistedMessageCounter.md#storagecontext)
- [storageKey](exports_protocol.PersistedMessageCounter.md#storagekey)

### Accessors

- [construction](exports_protocol.PersistedMessageCounter.md#construction)

### Methods

- [getIncrementedCounter](exports_protocol.PersistedMessageCounter.md#getincrementedcounter)
- [create](exports_protocol.PersistedMessageCounter.md#create)

## Constructors

### constructor

• **new PersistedMessageCounter**(`storageContext`, `storageKey`, `aboutToRolloverCallback?`, `rolloverInfoDifference?`): [`PersistedMessageCounter`](exports_protocol.PersistedMessageCounter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `storageKey` | `string` |
| `aboutToRolloverCallback?` | () => `void` |
| `rolloverInfoDifference?` | `number` |

#### Returns

[`PersistedMessageCounter`](exports_protocol.PersistedMessageCounter.md)

#### Overrides

[MessageCounter](exports_protocol.MessageCounter.md).[constructor](exports_protocol.MessageCounter.md#constructor)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:55

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:50

___

### aboutToRolloverCallback

• `Protected` `Optional` `Readonly` **aboutToRolloverCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MessageCounter](exports_protocol.MessageCounter.md).[aboutToRolloverCallback](exports_protocol.MessageCounter.md#abouttorollovercallback)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:37

___

### messageCounter

• `Protected` **messageCounter**: `number`

#### Inherited from

[MessageCounter](exports_protocol.MessageCounter.md).[messageCounter](exports_protocol.MessageCounter.md#messagecounter)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:39

___

### rolloverInfoDifference

• `Protected` `Readonly` **rolloverInfoDifference**: `number`

#### Inherited from

[MessageCounter](exports_protocol.MessageCounter.md).[rolloverInfoDifference](exports_protocol.MessageCounter.md#rolloverinfodifference)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:38

___

### storageContext

• `Private` `Readonly` **storageContext**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:51

___

### storageKey

• `Private` `Readonly` **storageKey**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:52

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`PersistedMessageCounter`](exports_protocol.PersistedMessageCounter.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`PersistedMessageCounter`](exports_protocol.PersistedMessageCounter.md)\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:53

## Methods

### getIncrementedCounter

▸ **getIncrementedCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Overrides

[MessageCounter](exports_protocol.MessageCounter.md).[getIncrementedCounter](exports_protocol.MessageCounter.md#getincrementedcounter)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:56

___

### create

▸ **create**(`storageContext`, `storageKey`, `aboutToRolloverCallback?`, `rolloverInfoDifference?`): `Promise`\<[`PersistedMessageCounter`](exports_protocol.PersistedMessageCounter.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `storageKey` | `string` |
| `aboutToRolloverCallback?` | () => `void` |
| `rolloverInfoDifference?` | `number` |

#### Returns

`Promise`\<[`PersistedMessageCounter`](exports_protocol.PersistedMessageCounter.md)\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:54
