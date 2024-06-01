[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [crypto/export](../README.md) / Spake2p

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

[packages/matter.js/src/crypto/Spake2p.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L52)

## Properties

### context

> `private` `readonly` **context**: `Uint8Array`

#### Source

[packages/matter.js/src/crypto/Spake2p.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L53)

***

### random

> `private` `readonly` **random**: `bigint`

#### Source

[packages/matter.js/src/crypto/Spake2p.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L54)

***

### w0

> `private` `readonly` **w0**: `bigint`

#### Source

[packages/matter.js/src/crypto/Spake2p.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L55)

## Methods

### addToContext()

> `private` **addToContext**(`TTwriter`, `data`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `TTwriter` | [`DataWriter`](../../../util/export/classes/DataWriter.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |
| `data` | `Uint8Array` |

#### Returns

`void`

#### Source

[packages/matter.js/src/crypto/Spake2p.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L124)

***

### computeSecretAndVerifiers()

> `private` **computeSecretAndVerifiers**(`X`, `Y`, `Z`, `V`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |
| `Z` | `Uint8Array` |
| `V` | `Uint8Array` |

#### Returns

`Promise`\<`object`\>

##### Ke

> **Ke**: `Uint8Array`

##### hAY

> **hAY**: `Uint8Array`

##### hBX

> **hBX**: `Uint8Array`

#### Source

[packages/matter.js/src/crypto/Spake2p.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L94)

***

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

[packages/matter.js/src/crypto/Spake2p.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L81)

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

[packages/matter.js/src/crypto/Spake2p.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L68)

***

### computeTranscriptHash()

> `private` **computeTranscriptHash**(`X`, `Y`, `Z`, `V`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |
| `Z` | `Uint8Array` |
| `V` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Spake2p.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L109)

***

### computeX()

> **computeX**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Spake2p.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L58)

***

### computeY()

> **computeY**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Spake2p.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L63)

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

[packages/matter.js/src/crypto/Spake2p.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L41)

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

[packages/matter.js/src/crypto/Spake2p.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L32)

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

[packages/matter.js/src/crypto/Spake2p.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Spake2p.ts#L47)
