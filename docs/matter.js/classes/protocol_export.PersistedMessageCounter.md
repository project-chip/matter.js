[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / PersistedMessageCounter

# Class: PersistedMessageCounter

[protocol/export](../modules/protocol_export.md).PersistedMessageCounter

Enhanced Message counter that can be persisted and will be initialized from the persisted value (if existing).

## Hierarchy

- [`MessageCounter`](protocol_export.MessageCounter.md)

  ↳ **`PersistedMessageCounter`**

## Table of contents

### Constructors

- [constructor](protocol_export.PersistedMessageCounter.md#constructor)

### Properties

- [aboutToRolloverCallback](protocol_export.PersistedMessageCounter.md#abouttorollovercallback)
- [messageCounter](protocol_export.PersistedMessageCounter.md#messagecounter)
- [rolloverInfoDifference](protocol_export.PersistedMessageCounter.md#rolloverinfodifference)
- [storageContext](protocol_export.PersistedMessageCounter.md#storagecontext)
- [storageKey](protocol_export.PersistedMessageCounter.md#storagekey)

### Methods

- [getIncrementedCounter](protocol_export.PersistedMessageCounter.md#getincrementedcounter)

## Constructors

### constructor

• **new PersistedMessageCounter**(`storageContext`, `storageKey`, `aboutToRolloverCallback?`, `rolloverInfoDifference?`): [`PersistedMessageCounter`](protocol_export.PersistedMessageCounter.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `storageContext` | [`StorageContext`](storage_export.StorageContext.md) | `undefined` |
| `storageKey` | `string` | `undefined` |
| `aboutToRolloverCallback?` | () => `void` | `undefined` |
| `rolloverInfoDifference` | `number` | `ROLLOVER_INFO_DIFFERENCE` |

#### Returns

[`PersistedMessageCounter`](protocol_export.PersistedMessageCounter.md)

#### Overrides

[MessageCounter](protocol_export.MessageCounter.md).[constructor](protocol_export.MessageCounter.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:80](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/MessageCounter.ts#L80)

## Properties

### aboutToRolloverCallback

• `Protected` `Optional` `Readonly` **aboutToRolloverCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MessageCounter](protocol_export.MessageCounter.md).[aboutToRolloverCallback](protocol_export.MessageCounter.md#abouttorollovercallback)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:56](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/MessageCounter.ts#L56)

___

### messageCounter

• `Protected` **messageCounter**: `number`

#### Inherited from

[MessageCounter](protocol_export.MessageCounter.md).[messageCounter](protocol_export.MessageCounter.md#messagecounter)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:48](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/MessageCounter.ts#L48)

___

### rolloverInfoDifference

• `Protected` `Readonly` **rolloverInfoDifference**: `number` = `ROLLOVER_INFO_DIFFERENCE`

#### Inherited from

[MessageCounter](protocol_export.MessageCounter.md).[rolloverInfoDifference](protocol_export.MessageCounter.md#rolloverinfodifference)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:57](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/MessageCounter.ts#L57)

___

### storageContext

• `Private` `Readonly` **storageContext**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:81](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/MessageCounter.ts#L81)

___

### storageKey

• `Private` `Readonly` **storageKey**: `string`

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:82](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/MessageCounter.ts#L82)

## Methods

### getIncrementedCounter

▸ **getIncrementedCounter**(): `number`

#### Returns

`number`

#### Overrides

[MessageCounter](protocol_export.MessageCounter.md).[getIncrementedCounter](protocol_export.MessageCounter.md#getincrementedcounter)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:102](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/MessageCounter.ts#L102)
