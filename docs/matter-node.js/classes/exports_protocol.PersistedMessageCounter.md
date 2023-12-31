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

- [aboutToRolloverCallback](exports_protocol.PersistedMessageCounter.md#abouttorollovercallback)
- [messageCounter](exports_protocol.PersistedMessageCounter.md#messagecounter)
- [rolloverInfoDifference](exports_protocol.PersistedMessageCounter.md#rolloverinfodifference)
- [storageContext](exports_protocol.PersistedMessageCounter.md#storagecontext)
- [storageKey](exports_protocol.PersistedMessageCounter.md#storagekey)

### Methods

- [getIncrementedCounter](exports_protocol.PersistedMessageCounter.md#getincrementedcounter)

## Constructors

### constructor

• **new PersistedMessageCounter**(`storageContext`, `storageKey`, `aboutToRolloverCallback?`, `rolloverInfoDifference?`): [`PersistedMessageCounter`](exports_protocol.PersistedMessageCounter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | [`StorageContext`](storage_export.StorageContext.md) |
| `storageKey` | `string` |
| `aboutToRolloverCallback?` | () => `void` |
| `rolloverInfoDifference?` | `number` |

#### Returns

[`PersistedMessageCounter`](exports_protocol.PersistedMessageCounter.md)

#### Overrides

[MessageCounter](exports_protocol.MessageCounter.md).[constructor](exports_protocol.MessageCounter.md#constructor)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:51

## Properties

### aboutToRolloverCallback

• `Protected` `Optional` `Readonly` **aboutToRolloverCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MessageCounter](exports_protocol.MessageCounter.md).[aboutToRolloverCallback](exports_protocol.MessageCounter.md#abouttorollovercallback)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:36

___

### messageCounter

• `Protected` **messageCounter**: `number`

#### Inherited from

[MessageCounter](exports_protocol.MessageCounter.md).[messageCounter](exports_protocol.MessageCounter.md#messagecounter)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:38

___

### rolloverInfoDifference

• `Protected` `Readonly` **rolloverInfoDifference**: `number`

#### Inherited from

[MessageCounter](exports_protocol.MessageCounter.md).[rolloverInfoDifference](exports_protocol.MessageCounter.md#rolloverinfodifference)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:37

___

### storageContext

• `Private` `Readonly` **storageContext**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:49

___

### storageKey

• `Private` `Readonly` **storageKey**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:50

## Methods

### getIncrementedCounter

▸ **getIncrementedCounter**(): `number`

#### Returns

`number`

#### Overrides

[MessageCounter](exports_protocol.MessageCounter.md).[getIncrementedCounter](exports_protocol.MessageCounter.md#getincrementedcounter)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:52
