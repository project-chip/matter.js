[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [crypto](../modules/crypto.md) / Spake2p

# Class: Spake2p

[crypto](../modules/crypto.md).Spake2p

## Table of contents

### Constructors

- [constructor](crypto.Spake2p.md#constructor)

### Properties

- [addToContext](crypto.Spake2p.md#addtocontext)
- [computeSecretAndVerifiers](crypto.Spake2p.md#computesecretandverifiers)
- [computeTranscriptHash](crypto.Spake2p.md#computetranscripthash)
- [context](crypto.Spake2p.md#context)
- [random](crypto.Spake2p.md#random)
- [w0](crypto.Spake2p.md#w0)

### Methods

- [computeSecretAndVerifiersFromX](crypto.Spake2p.md#computesecretandverifiersfromx)
- [computeSecretAndVerifiersFromY](crypto.Spake2p.md#computesecretandverifiersfromy)
- [computeX](crypto.Spake2p.md#computex)
- [computeY](crypto.Spake2p.md#computey)
- [computeW0L](crypto.Spake2p.md#computew0l)
- [computeW0W1](crypto.Spake2p.md#computew0w1)
- [create](crypto.Spake2p.md#create)

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

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:25

## Properties

### addToContext

• `Private` **addToContext**: `any`

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:40

___

### computeSecretAndVerifiers

• `Private` **computeSecretAndVerifiers**: `any`

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:38

___

### computeTranscriptHash

• `Private` **computeTranscriptHash**: `any`

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:39

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:13

___

### random

• `Private` `Readonly` **random**: `any`

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:14

___

### w0

• `Private` `Readonly` **w0**: `any`

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:15

## Methods

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

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:33

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

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:28

___

### computeX

▸ **computeX**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:26

___

### computeY

▸ **computeY**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:27

___

### computeW0L

▸ `Static` **computeW0L**(`pbkdfParameters`, `pin`): `Promise`<{ `L`: `any` ; `w0`: `BN`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pbkdfParameters` | [`PbkdfParameters`](../interfaces/crypto.PbkdfParameters.md) |
| `pin` | `number` |

#### Returns

`Promise`<{ `L`: `any` ; `w0`: `BN`  }\>

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:20

___

### computeW0W1

▸ `Static` **computeW0W1**(`«destructured»`, `pin`): `Promise`<{ `w0`: `BN` ; `w1`: `BN`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PbkdfParameters`](../interfaces/crypto.PbkdfParameters.md) |
| `pin` | `number` |

#### Returns

`Promise`<{ `w0`: `BN` ; `w1`: `BN`  }\>

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:16

___

### create

▸ `Static` **create**(`context`, `w0`): [`Spake2p`](crypto.Spake2p.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `Uint8Array` |
| `w0` | `BN` |

#### Returns

[`Spake2p`](crypto.Spake2p.md)

#### Defined in

packages/matter.js/dist/cjs/crypto/Spake2p.d.ts:24
