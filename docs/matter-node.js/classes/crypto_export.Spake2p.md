[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / Spake2p

# Class: Spake2p

[crypto/export](../modules/crypto_export.md).Spake2p

## Table of contents

### Constructors

- [constructor](crypto_export.Spake2p.md#constructor)

### Properties

- [addToContext](crypto_export.Spake2p.md#addtocontext)
- [computeSecretAndVerifiers](crypto_export.Spake2p.md#computesecretandverifiers)
- [computeTranscriptHash](crypto_export.Spake2p.md#computetranscripthash)
- [context](crypto_export.Spake2p.md#context)
- [random](crypto_export.Spake2p.md#random)
- [w0](crypto_export.Spake2p.md#w0)

### Methods

- [computeSecretAndVerifiersFromX](crypto_export.Spake2p.md#computesecretandverifiersfromx)
- [computeSecretAndVerifiersFromY](crypto_export.Spake2p.md#computesecretandverifiersfromy)
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

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:24

## Properties

### addToContext

• `Private` **addToContext**: `any`

#### Defined in

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:39

___

### computeSecretAndVerifiers

• `Private` **computeSecretAndVerifiers**: `any`

#### Defined in

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:37

___

### computeTranscriptHash

• `Private` **computeTranscriptHash**: `any`

#### Defined in

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:38

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:12

___

### random

• `Private` `Readonly` **random**: `any`

#### Defined in

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:13

___

### w0

• `Private` `Readonly` **w0**: `any`

#### Defined in

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:14

## Methods

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

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:32

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

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:27

___

### computeX

▸ **computeX**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:25

___

### computeY

▸ **computeY**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:26

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

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:19

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

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:15

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

packages/matter.js/dist/esm/crypto/Spake2p.d.ts:23
