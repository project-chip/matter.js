[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util](../modules/util.md) / Queue

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

• `Private` **closed**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/util/Queue.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Queue.ts#L15)

___

### pendingRead

• `Private` `Optional` **pendingRead**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rejecter` | (`reason`: `any`) => `void` |
| `resolver` | (`data`: `T`) => `void` |

#### Defined in

[packages/matter.js/src/util/Queue.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Queue.ts#L14)

___

### queue

• `Private` `Readonly` **queue**: `T`[]

#### Defined in

[packages/matter.js/src/util/Queue.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Queue.ts#L13)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Queue.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Queue.ts#L38)

___

### read

▸ **read**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>

#### Implementation of

[Stream](../interfaces/util.Stream.md).[read](../interfaces/util.Stream.md#read)

#### Defined in

[packages/matter.js/src/util/Queue.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Queue.ts#L17)

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

[packages/matter.js/src/util/Queue.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Queue.ts#L28)
