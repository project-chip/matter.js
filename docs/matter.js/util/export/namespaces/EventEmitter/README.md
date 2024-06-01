[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [util/export](../../README.md) / EventEmitter

# Namespace: EventEmitter

## Type Aliases

### EventNames\<This\>

> **EventNames**\<`This`\>: `string` & keyof `{ [K in keyof This as This[K] extends Observable ? K : never]: true }`

#### Type parameters

| Type parameter |
| :------ |
| `This` |

#### Source

[packages/matter.js/src/util/Observable.ts:388](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L388)

***

### EventPayload\<This, E\>

> **EventPayload**\<`This`, `E`\>: `This` *extends* `{ [K in E]: Observable<infer T extends any[]> }` ? `T` : `never`

#### Type parameters

| Type parameter |
| :------ |
| `This` |
| `E` *extends* `string` |

#### Source

[packages/matter.js/src/util/Observable.ts:401](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L401)

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

[packages/matter.js/src/util/Observable.ts:386](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L386)

***

### ObserverOf\<This, E\>

> **ObserverOf**\<`This`, `E`\>: [`Observable`](../../interfaces/Observable.md)\<[`PayloadOf`](README.md#payloadofthise)\<`This`, `E`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` |
| `E` *extends* `string` |

#### Source

[packages/matter.js/src/util/Observable.ts:405](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L405)

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

[packages/matter.js/src/util/Observable.ts:397](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L397)
