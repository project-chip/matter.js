[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / StorageContext

# Class: StorageContext

[<internal>](../modules/internal_.md).StorageContext

## Table of contents

### Constructors

- [constructor](internal_.StorageContext.md#constructor)

### Properties

- [contexts](internal_.StorageContext.md#contexts)
- [storage](internal_.StorageContext.md#storage)

### Methods

- [createContext](internal_.StorageContext.md#createcontext)
- [delete](internal_.StorageContext.md#delete)
- [get](internal_.StorageContext.md#get)
- [has](internal_.StorageContext.md#has)
- [set](internal_.StorageContext.md#set)

## Constructors

### constructor

• **new StorageContext**(`storage`, `contexts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`Storage`](internal_.Storage.md) |
| `contexts` | `string`[] |

#### Defined in

matter.js/dist/cjs/storage/StorageContext.d.ts:11

## Properties

### contexts

• `Private` `Readonly` **contexts**: `any`

#### Defined in

matter.js/dist/cjs/storage/StorageContext.d.ts:10

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

matter.js/dist/cjs/storage/StorageContext.d.ts:9

## Methods

### createContext

▸ **createContext**(`context`): [`StorageContext`](internal_.StorageContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |

#### Returns

[`StorageContext`](internal_.StorageContext.md)

#### Defined in

matter.js/dist/cjs/storage/StorageContext.d.ts:16

___

### delete

▸ **delete**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/storage/StorageContext.d.ts:15

___

### get

▸ **get**<`T`\>(`key`, `defaultValue?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue?` | `T` |

#### Returns

`T`

#### Defined in

matter.js/dist/cjs/storage/StorageContext.d.ts:12

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

matter.js/dist/cjs/storage/StorageContext.d.ts:13

___

### set

▸ **set**<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/storage/StorageContext.d.ts:14
