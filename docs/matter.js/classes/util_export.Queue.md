[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / Queue

# Class: Queue<T\>

[util/export](../modules/util_export.md).Queue

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Stream`](../interfaces/util_export.Stream.md)<`T`\>

## Table of contents

### Constructors

- [constructor](util_export.Queue.md#constructor)

### Properties

- [closed](util_export.Queue.md#closed)
- [pendingRead](util_export.Queue.md#pendingread)
- [queue](util_export.Queue.md#queue)

### Methods

- [close](util_export.Queue.md#close)
- [read](util_export.Queue.md#read)
- [write](util_export.Queue.md#write)

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

[packages/matter.js/src/util/Queue.ts:15](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/Queue.ts#L15)

___

### pendingRead

• `Private` `Optional` **pendingRead**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rejecter` | (`reason`: `any`) => `void` |
| `resolver` | (`data`: `T`) => `void` |

#### Defined in

[packages/matter.js/src/util/Queue.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/Queue.ts#L14)

___

### queue

• `Private` `Readonly` **queue**: `T`[]

#### Defined in

[packages/matter.js/src/util/Queue.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/Queue.ts#L13)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Queue.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/Queue.ts#L38)

___

### read

▸ **read**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>

#### Implementation of

[Stream](../interfaces/util_export.Stream.md).[read](../interfaces/util_export.Stream.md#read)

#### Defined in

[packages/matter.js/src/util/Queue.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/Queue.ts#L17)

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

[Stream](../interfaces/util_export.Stream.md).[write](../interfaces/util_export.Stream.md#write)

#### Defined in

[packages/matter.js/src/util/Queue.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/Queue.ts#L28)
