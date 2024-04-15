[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / Spake2p

# Class: Spake2p

[crypto/export](../modules/crypto_export.md).Spake2p

## Table of contents

### Constructors

- [constructor](crypto_export.Spake2p.md#constructor)

### Properties

- [context](crypto_export.Spake2p.md#context)
- [random](crypto_export.Spake2p.md#random)
- [w0](crypto_export.Spake2p.md#w0)

### Methods

- [addToContext](crypto_export.Spake2p.md#addtocontext)
- [computeSecretAndVerifiers](crypto_export.Spake2p.md#computesecretandverifiers)
- [computeSecretAndVerifiersFromX](crypto_export.Spake2p.md#computesecretandverifiersfromx)
- [computeSecretAndVerifiersFromY](crypto_export.Spake2p.md#computesecretandverifiersfromy)
- [computeTranscriptHash](crypto_export.Spake2p.md#computetranscripthash)
- [computeX](crypto_export.Spake2p.md#computex)
- [computeY](crypto_export.Spake2p.md#computey)
- [computeW0L](crypto_export.Spake2p.md#computew0l)
- [computeW0W1](crypto_export.Spake2p.md#computew0w1)
- [create](crypto_export.Spake2p.md#create)

## Constructors

### constructor

• **new Spake2p**(`context`, `random`, `w0`): [`Spake2p`](crypto_export.Spake2p.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `Uint8Array` |
| `random` | `bigint` |
| `w0` | `bigint` |

#### Returns

[`Spake2p`](crypto_export.Spake2p.md)

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L52)

## Properties

### context

• `Private` `Readonly` **context**: `Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L53)

___

### random

• `Private` `Readonly` **random**: `bigint`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L54)

___

### w0

• `Private` `Readonly` **w0**: `bigint`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L55)

## Methods

### addToContext

▸ **addToContext**(`TTwriter`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `TTwriter` | [`DataWriter`](util_export.DataWriter.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |
| `data` | `Uint8Array` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L124)

___

### computeSecretAndVerifiers

▸ **computeSecretAndVerifiers**(`X`, `Y`, `Z`, `V`): `Promise`\<\{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |
| `Z` | `Uint8Array` |
| `V` | `Uint8Array` |

#### Returns

`Promise`\<\{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L94)

___

### computeSecretAndVerifiersFromX

▸ **computeSecretAndVerifiersFromX**(`L`, `X`, `Y`): `Promise`\<\{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `L` | `Uint8Array` |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |

#### Returns

`Promise`\<\{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L81)

___

### computeSecretAndVerifiersFromY

▸ **computeSecretAndVerifiersFromY**(`w1`, `X`, `Y`): `Promise`\<\{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `w1` | `bigint` |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |

#### Returns

`Promise`\<\{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L68)

___

### computeTranscriptHash

▸ **computeTranscriptHash**(`X`, `Y`, `Z`, `V`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |
| `Z` | `Uint8Array` |
| `V` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L109)

___

### computeX

▸ **computeX**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L58)

___

### computeY

▸ **computeY**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L63)

___

### computeW0L

▸ **computeW0L**(`pbkdfParameters`, `pin`): `Promise`\<\{ `L`: `Uint8Array` ; `w0`: `bigint`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pbkdfParameters` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |
| `pin` | `number` |

#### Returns

`Promise`\<\{ `L`: `Uint8Array` ; `w0`: `bigint`  }\>

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L41)

___

### computeW0W1

▸ **computeW0W1**(`«destructured»`, `pin`): `Promise`\<\{ `w0`: `bigint` ; `w1`: `bigint`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |
| `pin` | `number` |

#### Returns

`Promise`\<\{ `w0`: `bigint` ; `w1`: `bigint`  }\>

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L32)

___

### create

▸ **create**(`context`, `w0`): [`Spake2p`](crypto_export.Spake2p.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `Uint8Array` |
| `w0` | `bigint` |

#### Returns

[`Spake2p`](crypto_export.Spake2p.md)

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Spake2p.ts#L47)
