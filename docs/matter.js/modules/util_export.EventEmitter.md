[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](util_export.md) / EventEmitter

# Namespace: EventEmitter

[util/export](util_export.md).EventEmitter

## Table of contents

### Type Aliases

- [EventNames](util_export.EventEmitter.md#eventnames)
- [EventPayload](util_export.EventEmitter.md#eventpayload)
- [NamesOf](util_export.EventEmitter.md#namesof)
- [ObserverOf](util_export.EventEmitter.md#observerof)
- [PayloadOf](util_export.EventEmitter.md#payloadof)

## Type Aliases

### EventNames

Ƭ **EventNames**\<`This`\>: `string` & keyof \{ [K in keyof This as This[K] extends Observable ? K : never]: true }

#### Type parameters

| Name |
| :------ |
| `This` |

#### Defined in

[packages/matter.js/src/util/Observable.ts:344](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L344)

___

### EventPayload

Ƭ **EventPayload**\<`This`, `E`\>: `This` extends \{ [K in E]: Observable\<infer T extends any[]\> } ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `E` | extends `string` |

#### Defined in

[packages/matter.js/src/util/Observable.ts:357](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L357)

___

### NamesOf

Ƭ **NamesOf**\<`This`\>: [[`EventNames`](util_export.EventEmitter.md#eventnames)\<`This`\>] extends [`never`] ? `string` : [`EventNames`](util_export.EventEmitter.md#eventnames)\<`This`\>

Legal event names.  If there are no events defined, assume this is an
untyped instance and allow any argument.

#### Type parameters

| Name |
| :------ |
| `This` |

#### Defined in

[packages/matter.js/src/util/Observable.ts:342](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L342)

___

### ObserverOf

Ƭ **ObserverOf**\<`This`, `E`\>: [`Observable`](../interfaces/util_export.Observable.md)\<[`PayloadOf`](util_export.EventEmitter.md#payloadof)\<`This`, `E`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `E` | extends `string` |

#### Defined in

[packages/matter.js/src/util/Observable.ts:361](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L361)

___

### PayloadOf

Ƭ **PayloadOf**\<`This`, `E`\>: [[`EventPayload`](util_export.EventEmitter.md#eventpayload)\<`This`, `E`\>] extends [`never`] ? `any`[] : [`EventPayload`](util_export.EventEmitter.md#eventpayload)\<`This`, `E`\>

Arguments for an event.  If there are no events defined, assume this is
an untyped emitter and allow any argument.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `E` | extends `string` |

#### Defined in

[packages/matter.js/src/util/Observable.ts:353](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L353)
