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

[packages/matter.js/src/util/Observable.ts:388](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L388)

___

### EventPayload

Ƭ **EventPayload**\<`This`, `E`\>: `This` extends \{ [K in E]: Observable\<infer T extends any[]\> } ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `E` | extends `string` |

#### Defined in

[packages/matter.js/src/util/Observable.ts:401](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L401)

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

[packages/matter.js/src/util/Observable.ts:386](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L386)

___

### ObserverOf

Ƭ **ObserverOf**\<`This`, `E`\>: [`Observable`](../interfaces/util_export.Observable.md)\<[`PayloadOf`](util_export.EventEmitter.md#payloadof)\<`This`, `E`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `E` | extends `string` |

#### Defined in

[packages/matter.js/src/util/Observable.ts:405](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L405)

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

[packages/matter.js/src/util/Observable.ts:397](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L397)
