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

- [#construction](protocol_export.PersistedMessageCounter.md##construction)
- [aboutToRolloverCallback](protocol_export.PersistedMessageCounter.md#abouttorollovercallback)
- [messageCounter](protocol_export.PersistedMessageCounter.md#messagecounter)
- [rolloverInfoDifference](protocol_export.PersistedMessageCounter.md#rolloverinfodifference)
- [storageContext](protocol_export.PersistedMessageCounter.md#storagecontext)
- [storageKey](protocol_export.PersistedMessageCounter.md#storagekey)

### Accessors

- [construction](protocol_export.PersistedMessageCounter.md#construction)

### Methods

- [getIncrementedCounter](protocol_export.PersistedMessageCounter.md#getincrementedcounter)
- [create](protocol_export.PersistedMessageCounter.md#create)

## Constructors

### constructor

• **new PersistedMessageCounter**(`storageContext`, `storageKey`, `aboutToRolloverCallback?`, `rolloverInfoDifference?`): [`PersistedMessageCounter`](protocol_export.PersistedMessageCounter.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `storageContext` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> | `undefined` |
| `storageKey` | `string` | `undefined` |
| `aboutToRolloverCallback?` | () => `void` | `undefined` |
| `rolloverInfoDifference` | `number` | `ROLLOVER_INFO_DIFFERENCE` |

#### Returns

[`PersistedMessageCounter`](protocol_export.PersistedMessageCounter.md)

#### Overrides

[MessageCounter](protocol_export.MessageCounter.md).[constructor](protocol_export.MessageCounter.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L102)

## Properties

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`PersistedMessageCounter`](protocol_export.PersistedMessageCounter.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L81)

___

### aboutToRolloverCallback

• `Protected` `Optional` `Readonly` **aboutToRolloverCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MessageCounter](protocol_export.MessageCounter.md).[aboutToRolloverCallback](protocol_export.MessageCounter.md#abouttorollovercallback)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L57)

___

### messageCounter

• `Protected` **messageCounter**: `number`

#### Inherited from

[MessageCounter](protocol_export.MessageCounter.md).[messageCounter](protocol_export.MessageCounter.md#messagecounter)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L49)

___

### rolloverInfoDifference

• `Protected` `Readonly` **rolloverInfoDifference**: `number` = `ROLLOVER_INFO_DIFFERENCE`

#### Inherited from

[MessageCounter](protocol_export.MessageCounter.md).[rolloverInfoDifference](protocol_export.MessageCounter.md#rolloverinfodifference)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L58)

___

### storageContext

• `Private` `Readonly` **storageContext**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L103)

___

### storageKey

• `Private` `Readonly` **storageKey**: `string`

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L104)

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`PersistedMessageCounter`](protocol_export.PersistedMessageCounter.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`PersistedMessageCounter`](protocol_export.PersistedMessageCounter.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L83)

## Methods

### getIncrementedCounter

▸ **getIncrementedCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Overrides

[MessageCounter](protocol_export.MessageCounter.md).[getIncrementedCounter](protocol_export.MessageCounter.md#getincrementedcounter)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L126)

___

### create

▸ **create**(`storageContext`, `storageKey`, `aboutToRolloverCallback?`, `rolloverInfoDifference?`): `Promise`\<[`PersistedMessageCounter`](protocol_export.PersistedMessageCounter.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `storageContext` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> | `undefined` |
| `storageKey` | `string` | `undefined` |
| `aboutToRolloverCallback?` | () => `void` | `undefined` |
| `rolloverInfoDifference` | `number` | `ROLLOVER_INFO_DIFFERENCE` |

#### Returns

`Promise`\<[`PersistedMessageCounter`](protocol_export.PersistedMessageCounter.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L87)
