[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [crypto/export](../README.md) / Spake2p

# Class: Spake2p

## Constructors

### new Spake2p()

> **new Spake2p**(`context`, `random`, `w0`): [`Spake2p`](Spake2p.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | `Uint8Array` |
| `random` | `bigint` |
| `w0` | `bigint` |

#### Returns

[`Spake2p`](Spake2p.md)

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:24

## Properties

### addToContext

> `private` **addToContext**: `any`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:39

***

### computeSecretAndVerifiers

> `private` **computeSecretAndVerifiers**: `any`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:37

***

### computeTranscriptHash

> `private` **computeTranscriptHash**: `any`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:38

***

### context

> `private` `readonly` **context**: `any`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:12

***

### random

> `private` `readonly` **random**: `any`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:13

***

### w0

> `private` `readonly` **w0**: `any`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:14

## Methods

### computeSecretAndVerifiersFromX()

> **computeSecretAndVerifiersFromX**(`L`, `X`, `Y`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `L` | `Uint8Array` |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |

#### Returns

`Promise`\<`object`\>

##### Ke

> **Ke**: `Uint8Array`

##### hAY

> **hAY**: `Uint8Array`

##### hBX

> **hBX**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:32

***

### computeSecretAndVerifiersFromY()

> **computeSecretAndVerifiersFromY**(`w1`, `X`, `Y`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `w1` | `bigint` |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |

#### Returns

`Promise`\<`object`\>

##### Ke

> **Ke**: `Uint8Array`

##### hAY

> **hAY**: `Uint8Array`

##### hBX

> **hBX**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:27

***

### computeX()

> **computeX**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:25

***

### computeY()

> **computeY**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:26

***

### computeW0L()

> `static` **computeW0L**(`pbkdfParameters`, `pin`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `pbkdfParameters` | [`PbkdfParameters`](../interfaces/PbkdfParameters.md) |
| `pin` | `number` |

#### Returns

`Promise`\<`object`\>

##### L

> **L**: `Uint8Array`

##### w0

> **w0**: `bigint`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:19

***

### computeW0W1()

> `static` **computeW0W1**(`__namedParameters`, `pin`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`PbkdfParameters`](../interfaces/PbkdfParameters.md) |
| `pin` | `number` |

#### Returns

`Promise`\<`object`\>

##### w0

> **w0**: `bigint`

##### w1

> **w1**: `bigint`

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:15

***

### create()

> `static` **create**(`context`, `w0`): [`Spake2p`](Spake2p.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | `Uint8Array` |
| `w0` | `bigint` |

#### Returns

[`Spake2p`](Spake2p.md)

#### Source

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:23
