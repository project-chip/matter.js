[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Storage

# Class: Storage

[\<internal\>](../modules/internal_.md).Storage

## Table of contents

### Constructors

- [constructor](internal_.Storage.md#constructor)

### Methods

- [clearAll](internal_.Storage.md#clearall)
- [close](internal_.Storage.md#close)
- [delete](internal_.Storage.md#delete)
- [get](internal_.Storage.md#get)
- [initialize](internal_.Storage.md#initialize)
- [keys](internal_.Storage.md#keys)
- [set](internal_.Storage.md#set)

## Constructors

### constructor

• **new Storage**(): [`Storage`](internal_.Storage.md)

#### Returns

[`Storage`](internal_.Storage.md)

## Methods

### clearAll

▸ **clearAll**(`contexts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:17

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:12

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

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:15

___

### get

▸ **get**\<`T`\>(`contexts`, `key`): `undefined` \| `T`

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

matter.js/dist/esm/storage/Storage.d.ts:13

___

### initialize

▸ **initialize**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:11

___

### keys

▸ **keys**(`contexts`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:16

___

### set

▸ **set**\<`T`\>(`contexts`, `key`, `value`): `void`

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

matter.js/dist/esm/storage/Storage.d.ts:14
