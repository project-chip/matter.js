[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / NamedHandler

# Class: NamedHandler\<H\>

## Type parameters

| Type parameter |
| :------ |
| `H` *extends* `Record`\<keyof `H`, [`HandlerFunction`](../README.md#handlerfunction)\> |

## Constructors

### new NamedHandler()

> **new NamedHandler**\<`H`\>(): [`NamedHandler`](NamedHandler.md)\<`H`\>

#### Returns

[`NamedHandler`](NamedHandler.md)\<`H`\>

## Properties

### handler

> `private` **handler**: `any`

#### Source

packages/matter.js/dist/esm/util/NamedHandler.d.ts:8

## Methods

### addHandler()

> **addHandler**\<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | `H`\[`K`\] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/NamedHandler.d.ts:10

***

### executeHandler()

> **executeHandler**\<`K`\>(`action`, ...`args`): `Promise`\<`any`\>

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K` |
| ...`args` | `Parameters`\<`H`\[`K`\]\> |

#### Returns

`Promise`\<`any`\>

#### Source

packages/matter.js/dist/esm/util/NamedHandler.d.ts:11

***

### hasHandler()

> **hasHandler**\<`K`\>(`action`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K` |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/util/NamedHandler.d.ts:9

***

### removeHandler()

> **removeHandler**\<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | `H`\[`K`\] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/NamedHandler.d.ts:12
