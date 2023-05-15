[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util](../modules/util.md) / Queue

# Class: Queue<T\>

[util](../modules/util.md).Queue

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Stream`](../interfaces/util.Stream.md)<`T`\>

## Table of contents

### Constructors

- [constructor](util.Queue.md#constructor)

### Properties

- [closed](util.Queue.md#closed)
- [pendingRead](util.Queue.md#pendingread)
- [queue](util.Queue.md#queue)

### Methods

- [close](util.Queue.md#close)
- [read](util.Queue.md#read)
- [write](util.Queue.md#write)

## Constructors

### constructor

• **new Queue**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

## Properties

### closed

• `Private` **closed**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Queue.d.ts:12

___

### pendingRead

• `Private` `Optional` **pendingRead**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Queue.d.ts:11

___

### queue

• `Private` `Readonly` **queue**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Queue.d.ts:10

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/Queue.d.ts:15

___

### read

▸ **read**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>

#### Implementation of

[Stream](../interfaces/util.Stream.md).[read](../interfaces/util.Stream.md#read)

#### Defined in

packages/matter.js/dist/cjs/util/Queue.d.ts:13

___

### write

▸ **write**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Stream](../interfaces/util.Stream.md).[write](../interfaces/util.Stream.md#write)

#### Defined in

packages/matter.js/dist/cjs/util/Queue.d.ts:14
