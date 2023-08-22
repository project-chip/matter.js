[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Storage

# Class: Storage

[<internal>](../modules/internal_.md).Storage

## Table of contents

### Constructors

- [constructor](internal_.Storage.md#constructor)

### Methods

- [close](internal_.Storage.md#close)
- [delete](internal_.Storage.md#delete)
- [get](internal_.Storage.md#get)
- [initialize](internal_.Storage.md#initialize)
- [set](internal_.Storage.md#set)

## Constructors

### constructor

• **new Storage**()

## Methods

### close

▸ `Abstract` **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/storage/Storage.d.ts:12

___

### delete

▸ `Abstract` **delete**(`contexts`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/storage/Storage.d.ts:15

___

### get

▸ `Abstract` **get**<`T`\>(`contexts`, `key`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

matter.js/dist/cjs/storage/Storage.d.ts:13

___

### initialize

▸ `Abstract` **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/storage/Storage.d.ts:11

___

### set

▸ `Abstract` **set**<`T`\>(`contexts`, `key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/storage/Storage.d.ts:14
