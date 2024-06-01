[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [util/export](../../README.md) / EventEmitter

# Namespace: EventEmitter

## Type Aliases

### EventNames\<This\>

> **EventNames**\<`This`\>: `string` & keyof `{ [K in keyof This as This[K] extends Observable ? K : never]: true }`

#### Type parameters

| Type parameter |
| :------ |
| `This` |

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:133

***

### EventPayload\<This, E\>

> **EventPayload**\<`This`, `E`\>: `This` *extends* `{ [K in E]: Observable<infer T extends any[]> }` ? `T` : `never`

#### Type parameters

| Type parameter |
| :------ |
| `This` |
| `E` *extends* `string` |

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:141

***

### NamesOf\<This\>

> **NamesOf**\<`This`\>: [[`EventNames`](README.md#eventnamesthis)\<`This`\>] *extends* [`never`] ? `string` : [`EventNames`](README.md#eventnamesthis)\<`This`\>

Legal event names.  If there are no events defined, assume this is an
untyped instance and allow any argument.

#### Type parameters

| Type parameter |
| :------ |
| `This` |

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:132

***

### ObserverOf\<This, E\>

> **ObserverOf**\<`This`, `E`\>: [`Observable`](../../interfaces/Observable.md)\<[`PayloadOf`](README.md#payloadofthise)\<`This`, `E`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` |
| `E` *extends* `string` |

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:144

***

### PayloadOf\<This, E\>

> **PayloadOf**\<`This`, `E`\>: [[`EventPayload`](README.md#eventpayloadthise)\<`This`, `E`\>] *extends* [`never`] ? `any`[] : [`EventPayload`](README.md#eventpayloadthise)\<`This`, `E`\>

Arguments for an event.  If there are no events defined, assume this is
an untyped emitter and allow any argument.

#### Type parameters

| Type parameter |
| :------ |
| `This` |
| `E` *extends* `string` |

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:140
