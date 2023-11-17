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

• **new Spake2p**(`context`, `random`, `w0`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `Uint8Array` |
| `random` | `BN` |
| `w0` | `BN` |

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:45](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L45)

## Properties

### context

• `Private` `Readonly` **context**: `Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:46](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L46)

___

### random

• `Private` `Readonly` **random**: `BN`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:47](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L47)

___

### w0

• `Private` `Readonly` **w0**: `BN`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:48](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L48)

## Methods

### addToContext

▸ `Private` **addToContext**(`TTwriter`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `TTwriter` | [`DataWriter`](util_export.DataWriter.md)<[`Little`](../enums/util_export.Endian.md#little)\> |
| `data` | `Uint8Array` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:109](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L109)

___

### computeSecretAndVerifiers

▸ `Private` **computeSecretAndVerifiers**(`X`, `Y`, `Z`, `V`): `Promise`<{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |
| `Z` | `Uint8Array` |
| `V` | `Uint8Array` |

#### Returns

`Promise`<{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:79](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L79)

___

### computeSecretAndVerifiersFromX

▸ **computeSecretAndVerifiersFromX**(`L`, `X`, `Y`): `Promise`<{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `L` | `Uint8Array` |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |

#### Returns

`Promise`<{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:70](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L70)

___

### computeSecretAndVerifiersFromY

▸ **computeSecretAndVerifiersFromY**(`w1`, `X`, `Y`): `Promise`<{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `w1` | `BN` |
| `X` | `Uint8Array` |
| `Y` | `Uint8Array` |

#### Returns

`Promise`<{ `Ke`: `Uint8Array` ; `hAY`: `Uint8Array` ; `hBX`: `Uint8Array`  }\>

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:61](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L61)

___

### computeTranscriptHash

▸ `Private` **computeTranscriptHash**(`X`, `Y`, `Z`, `V`): `Uint8Array`

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

[packages/matter.js/src/crypto/Spake2p.ts:94](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L94)

___

### computeX

▸ **computeX**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:51](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L51)

___

### computeY

▸ **computeY**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:56](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L56)

___

### computeW0L

▸ `Static` **computeW0L**(`pbkdfParameters`, `pin`): `Promise`<{ `L`: `Uint8Array` ; `w0`: `BN`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pbkdfParameters` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |
| `pin` | `number` |

#### Returns

`Promise`<{ `L`: `Uint8Array` ; `w0`: `BN`  }\>

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:34](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L34)

___

### computeW0W1

▸ `Static` **computeW0W1**(`«destructured»`, `pin`): `Promise`<{ `w0`: `BN` ; `w1`: `BN`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PbkdfParameters`](../interfaces/crypto_export.PbkdfParameters.md) |
| `pin` | `number` |

#### Returns

`Promise`<{ `w0`: `BN` ; `w1`: `BN`  }\>

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:25](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L25)

___

### create

▸ `Static` **create**(`context`, `w0`): [`Spake2p`](crypto_export.Spake2p.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `Uint8Array` |
| `w0` | `BN` |

#### Returns

[`Spake2p`](crypto_export.Spake2p.md)

#### Defined in

[packages/matter.js/src/crypto/Spake2p.ts:40](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/crypto/Spake2p.ts#L40)
