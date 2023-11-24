[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageBackendJsonFile

# Class: StorageBackendJsonFile

[storage/export](../modules/storage_export.md).StorageBackendJsonFile

## Hierarchy

- [`StorageBackendMemory`](storage_export.StorageBackendMemory.md)

  ↳ **`StorageBackendJsonFile`**

## Table of contents

### Constructors

- [constructor](storage_export.StorageBackendJsonFile.md#constructor)

### Properties

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
- [delete](storage_export.StorageBackendJsonFile.md#delete)
- [fromJson](storage_export.StorageBackendJsonFile.md#fromjson)
- [get](storage_export.StorageBackendJsonFile.md#get)
- [initialize](storage_export.StorageBackendJsonFile.md#initialize)
- [keys](storage_export.StorageBackendJsonFile.md#keys)
- [set](storage_export.StorageBackendJsonFile.md#set)
- [toJson](storage_export.StorageBackendJsonFile.md#tojson)
- [triggerCommit](storage_export.StorageBackendJsonFile.md#triggercommit)

## Constructors

### constructor

• **new StorageBackendJsonFile**(`path`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[constructor](storage_export.StorageBackendMemory.md#constructor)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:27](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L27)

## Properties

### closed

• `Private` **closed**: `boolean` = `false`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:23](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L23)

___

### commitTimer

• `Private` `Readonly` **commitTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:22](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L22)

___

### committed

• **committed**: `Promise`<`void`\>

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:20](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L20)

___

### initialized

• `Private` **initialized**: `boolean` = `false`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:24](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L24)

___

### path

• `Private` `Readonly` **path**: `string`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:27](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L27)

___

### resolveCommitted

• `Private` `Optional` **resolveCommitted**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:25](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L25)

___

### store

• `Protected` **store**: `any`

#### Inherited from

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[store](storage_export.StorageBackendMemory.md#store)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:9

___

### commitDelay

▪ `Static` **commitDelay**: `number` = `1000`

We store changes after a value was set to the storage, but not more often than this setting (in ms).

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:19](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L19)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[clear](storage_export.StorageBackendMemory.md#clear)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:63](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L63)

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

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:19

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[close](storage_export.StorageBackendMemory.md#close)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:82](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L82)

___

### commit

▸ `Private` **commit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:68](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L68)

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

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:58](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L58)

___

### fromJson

▸ `Private` **fromJson**(`json`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`any`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:92](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L92)

___

### get

▸ **get**<`T`\>(`contexts`, `key`): `undefined` \| `T`

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

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:15

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[initialize](storage_export.StorageBackendMemory.md#initialize)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:31](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L31)

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

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:18

___

### set

▸ **set**<`T`\>(`contexts`, `key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[set](storage_export.StorageBackendMemory.md#set)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:53](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L53)

___

### toJson

▸ `Private` **toJson**(`object`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`string`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:88](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L88)

___

### triggerCommit

▸ `Private` **triggerCommit**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:44](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L44)
