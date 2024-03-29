[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](util_export.md) / EventEmitter

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

packages/matter.js/dist/esm/util/Observable.d.ts:102

___

### EventPayload

Ƭ **EventPayload**\<`This`, `E`\>: `This` extends \{ [K in E]: Observable\<infer T extends any[]\> } ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `E` | extends `string` |

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:110

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

packages/matter.js/dist/esm/util/Observable.d.ts:101

___

### ObserverOf

Ƭ **ObserverOf**\<`This`, `E`\>: [`Observable`](../interfaces/util_export.Observable.md)\<[`PayloadOf`](util_export.EventEmitter.md#payloadof)\<`This`, `E`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `E` | extends `string` |

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:113

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

packages/matter.js/dist/esm/util/Observable.d.ts:109
