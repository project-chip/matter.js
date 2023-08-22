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
- [initialized](storage_export.StorageBackendJsonFile.md#initialized)
- [path](storage_export.StorageBackendJsonFile.md#path)
- [store](storage_export.StorageBackendJsonFile.md#store)
- [waitForCommit](storage_export.StorageBackendJsonFile.md#waitforcommit)

### Methods

- [close](storage_export.StorageBackendJsonFile.md#close)
- [commit](storage_export.StorageBackendJsonFile.md#commit)
- [delete](storage_export.StorageBackendJsonFile.md#delete)
- [fromJson](storage_export.StorageBackendJsonFile.md#fromjson)
- [get](storage_export.StorageBackendJsonFile.md#get)
- [initialize](storage_export.StorageBackendJsonFile.md#initialize)
- [set](storage_export.StorageBackendJsonFile.md#set)
- [toJson](storage_export.StorageBackendJsonFile.md#tojson)

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

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L26)

## Properties

### closed

• `Private` **closed**: `boolean` = `false`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L23)

___

### commitTimer

• `Private` `Readonly` **commitTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L21)

___

### initialized

• `Private` **initialized**: `boolean` = `false`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L24)

___

### path

• `Private` `Readonly` **path**: `string`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L26)

___

### store

• `Protected` **store**: `any`

#### Inherited from

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[store](storage_export.StorageBackendMemory.md#store)

#### Defined in

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:9

___

### waitForCommit

• `Private` **waitForCommit**: `boolean` = `false`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L22)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[close](storage_export.StorageBackendMemory.md#close)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L65)

___

### commit

▸ `Private` **commit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L59)

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

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L51)

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

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:75](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L75)

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

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:14

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[StorageBackendMemory](storage_export.StorageBackendMemory.md).[initialize](storage_export.StorageBackendMemory.md#initialize)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L30)

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

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L43)

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

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L71)
