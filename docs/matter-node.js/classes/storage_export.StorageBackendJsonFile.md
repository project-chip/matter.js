[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageBackendJsonFile

# Class: StorageBackendJsonFile

[storage/export](../modules/storage_export.md).StorageBackendJsonFile

Matter.js uses this key/value API to manage persistent state.

## Hierarchy

- [`StorageBackendMemory`](storage_export.StorageBackendMemory.md)

  ↳ **`StorageBackendJsonFile`**

## Table of contents

### Constructors

- [constructor](storage_export.StorageBackendJsonFile.md#constructor)

### Properties

- [#private](storage_export.StorageBackendJsonFile.md##private)
- [closed](storage_export.StorageBackendJsonFile.md#closed)
- [commitTimer](storage_export.StorageBackendJsonFile.md#committimer)
- [committed](storage_export.StorageBackendJsonFile.md#committed)
- [initialized](storage_export.StorageBackendJsonFile.md#initialized)
- [path](storage_export.StorageBackendJsonFile.md#path)
- [resolveCommitted](storage_export.StorageBackendJsonFile.md#resolvecommitted)
- [store](storage_export.StorageBackendJsonFile.md#store)
- [commitDelay](storage_export.StorageBackendJsonFile.md#commitdelay)

### Methods

- [clear](storage_export.StorageBackendJsonFile.md#clear)
- [clearAll](storage_export.StorageBackendJsonFile.md#clearall)
- [close](storage_export.StorageBackendJsonFile.md#close)
- [commit](storage_export.StorageBackendJsonFile.md#commit)
- [contexts](storage_export.StorageBackendJsonFile.md#contexts)
- [delete](storage_export.StorageBackendJsonFile.md#delete)
- [fromJson](storage_export.StorageBackendJsonFile.md#fromjson)
- [get](storage_export.StorageBackendJsonFile.md#get)
- [initialize](storage_export.StorageBackendJsonFile.md#initialize)
- [keys](storage_export.StorageBackendJsonFile.md#keys)
- [set](storage_export.StorageBackendJsonFile.md#set)
- [toJson](storage_export.StorageBackendJsonFile.md#tojson)
- [triggerCommit](storage_export.StorageBackendJsonFile.md#triggercommit)
- [values](storage_export.StorageBackendJsonFile.md#values)
- [create](storage_export.StorageBackendJsonFile.md#create)

## Constructors

### constructor

• **new StorageBackendJsonFile**(`path`): [`StorageBackendJsonFile`](storage_export.StorageBackendJsonFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`StorageBackendJsonFile`](storage_export.StorageBackendJsonFile.md)

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[constructor](storage_export.StorageBackendMemory.md#constructor)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L28)

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[#private](storage_export.StorageBackendMemory.md##private)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:9

___

### closed

• `Private` **closed**: `boolean` = `false`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L25)

___

### commitTimer

• `Private` `Readonly` **commitTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L22)

___

### committed

• **committed**: `Promise`\<`void`\>

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L20)

___

### initialized

• `Protected` **initialized**: `boolean`

#### Inherited from

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[initialized](storage_export.StorageBackendMemory.md#initialized)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:11

___

### path

• `Private` `Readonly` **path**: `string`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L28)

___

### resolveCommitted

• `Private` `Optional` **resolveCommitted**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L26)

___

### store

• `Protected` **store**: `any`

#### Inherited from

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[store](storage_export.StorageBackendMemory.md#store)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:10

___

### commitDelay

▪ `Static` **commitDelay**: `number` = `1000`

We store changes after a value was set to the storage, but not more often than this setting (in ms).

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L19)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[clear](storage_export.StorageBackendMemory.md#clear)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L75)

___

### clearAll

▸ **clearAll**(`contexts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Inherited from

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[clearAll](storage_export.StorageBackendMemory.md#clearall)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:24

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[close](storage_export.StorageBackendMemory.md#close)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L94)

___

### commit

▸ **commit**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L80)

___

### contexts

▸ **contexts**(`contexts`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Inherited from

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[contexts](storage_export.StorageBackendMemory.md#contexts)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:23

___

### delete

▸ **delete**(`contexts`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`void`

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[delete](storage_export.StorageBackendMemory.md#delete)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L70)

___

### fromJson

▸ **fromJson**(`json`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`any`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L106)

___

### get

▸ **get**\<`T`\>(`contexts`, `key`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Inherited from

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[get](storage_export.StorageBackendMemory.md#get)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:18

___

### initialize

▸ **initialize**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[initialize](storage_export.StorageBackendMemory.md#initialize)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L38)

___

### keys

▸ **keys**(`contexts`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Inherited from

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[keys](storage_export.StorageBackendMemory.md#keys)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:21

___

### set

▸ **set**(`contexts`, `keyOrValues`, `value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `keyOrValues` | `string` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |
| `value?` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

`void`

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[set](storage_export.StorageBackendMemory.md#set)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L61)

___

### toJson

▸ **toJson**(`object`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`string`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L102)

___

### triggerCommit

▸ **triggerCommit**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L52)

___

### values

▸ **values**(`contexts`): `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Inherited from

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[values](storage_export.StorageBackendMemory.md#values)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:22

___

### create

▸ **create**(`path`): `Promise`\<[`StorageBackendJsonFile`](storage_export.StorageBackendJsonFile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<[`StorageBackendJsonFile`](storage_export.StorageBackendJsonFile.md)\>

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[create](storage_export.StorageBackendMemory.md#create)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L32)
