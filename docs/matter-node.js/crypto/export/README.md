[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / crypto/export

# crypto/export

## Index

### Enumerations

- [CurveType](enumerations/CurveType.md)
- [KeyType](enumerations/KeyType.md)

### Classes

- [Crypto](classes/Crypto.md)
- [CryptoError](classes/CryptoError.md)
- [CryptoNode](classes/CryptoNode.md)
- [Spake2p](classes/Spake2p.md)

### Interfaces

- [Key](interfaces/Key.md)
- [PbkdfParameters](interfaces/PbkdfParameters.md)
- [PrivateKey](interfaces/PrivateKey.md)
- [PublicKey](interfaces/PublicKey.md)
- [SymmetricKey](interfaces/SymmetricKey.md)

## Type Aliases

### BinaryKeyPair

> **BinaryKeyPair**: `object`

#### Type declaration

##### privateKey

> **privateKey**: [`ByteArray`](../../util/export/README.md#bytearray)

##### publicKey

> **publicKey**: [`ByteArray`](../../util/export/README.md#bytearray)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:17

***

### CryptoDsaEncoding

> **CryptoDsaEncoding**: `"ieee-p1363"` \| `"der"`

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:121

## Variables

### CRYPTO\_AEAD\_MIC\_LENGTH\_BITS

> `const` **CRYPTO\_AEAD\_MIC\_LENGTH\_BITS**: `128` = `128`

#### Source

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:16

***

### CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES

> `const` **CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES**: `16` = `16`

#### Source

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:17

***

### CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES

> `const` **CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES**: `13` = `13`

#### Source

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:18

***

### CRYPTO\_AUTH\_TAG\_LENGTH

> `const` **CRYPTO\_AUTH\_TAG\_LENGTH**: `16` = `16`

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:119

***

### CRYPTO\_EC\_CURVE

> `const` **CRYPTO\_EC\_CURVE**: `"prime256v1"` = `"prime256v1"`

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:117

***

### CRYPTO\_EC\_KEY\_BYTES

> `const` **CRYPTO\_EC\_KEY\_BYTES**: `32` = `32`

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:118

***

### CRYPTO\_ENCRYPT\_ALGORITHM

> `const` **CRYPTO\_ENCRYPT\_ALGORITHM**: `"aes-128-ccm"` = `"aes-128-ccm"`

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:115

***

### CRYPTO\_GROUP\_SIZE\_BITS

> `const` **CRYPTO\_GROUP\_SIZE\_BITS**: `256` = `256`

#### See

MatterSpecification.v10.Core § 3.5.1

#### Source

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:7

***

### CRYPTO\_GROUP\_SIZE\_BYTES

> `const` **CRYPTO\_GROUP\_SIZE\_BYTES**: `32` = `32`

#### Source

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:8

***

### CRYPTO\_HASH\_ALGORITHM

> `const` **CRYPTO\_HASH\_ALGORITHM**: `"sha256"` = `"sha256"`

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:116

***

### CRYPTO\_HASH\_BLOCK\_LEN\_BYTES

> `const` **CRYPTO\_HASH\_BLOCK\_LEN\_BYTES**: `64` = `64`

#### Source

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:12

***

### CRYPTO\_HASH\_LEN\_BYTES

> `const` **CRYPTO\_HASH\_LEN\_BYTES**: `32` = `32`

#### See

MatterSpecification.v10.Core § 3.3

#### Source

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:11

***

### CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES

> `const` **CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES**: `number`

#### Source

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:9

***

### CRYPTO\_RANDOM\_LENGTH

> `const` **CRYPTO\_RANDOM\_LENGTH**: `32` = `32`

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:114

***

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH

> `const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH**: `16` = `16`

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:120

***

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS

> `const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS**: `128` = `128`

#### See

MatterSpecification.v10.Core § 3.6

#### Source

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:14

***

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES

> `const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES**: `16` = `16`

#### Source

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:15

***

### ec

> `const` **ec**: `object`

#### Type declaration

##### bitMask()

> **bitMask**: (`n`) => `bigint`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `number` |

###### Returns

`bigint`

##### default

> **default**: `__module`

##### isNegativeLE()

> **isNegativeLE**: (`num`, `modulo`) => `boolean`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `num` | `bigint` |
| `modulo` | `bigint` |

###### Returns

`boolean`

##### p256

> **p256**: `Readonly`\<`object`\>

###### Type declaration

###### CURVE

> **CURVE**: `Readonly`\<`object`\>

###### Type declaration

###### Fp

> `readonly` **Fp**: `mod.IField`\<`bigint`\>

###### Gx

> `readonly` **Gx**: `bigint`

###### Gy

> `readonly` **Gy**: `bigint`

###### a

> `readonly` **a**: `bigint`

###### allowInfinityPoint?

> `optional` `readonly` **allowInfinityPoint**: `boolean`

###### allowedPrivateKeyLengths?

> `optional` `readonly` **allowedPrivateKeyLengths**: readonly `number`[]

###### b

> `readonly` **b**: `bigint`

###### bits2int()?

> `optional` `readonly` **bits2int**: (`bytes`) => `bigint`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

###### Returns

`bigint`

###### bits2int\_modN()?

> `optional` `readonly` **bits2int\_modN**: (`bytes`) => `bigint`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

###### Returns

`bigint`

###### clearCofactor()?

> `optional` `readonly` **clearCofactor**: (`c`, `point`) => `ProjPointType`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `c` | `ProjConstructor` |
| `point` | `ProjPointType` |

###### Returns

`ProjPointType`

###### endo?

> `optional` `readonly` **endo**: `object`

###### endo.beta

> **beta**: `bigint`

###### endo.splitScalar()

> **splitScalar**: (`k`) => `object`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `k` | `bigint` |

###### Returns

`object`

###### k1

> **k1**: `bigint`

###### k1neg

> **k1neg**: `boolean`

###### k2

> **k2**: `bigint`

###### k2neg

> **k2neg**: `boolean`

###### h

> `readonly` **h**: `bigint`

###### hEff?

> `optional` `readonly` **hEff**: `bigint`

###### hash

> `readonly` **hash**: `utils.CHash`

###### hmac()

> `readonly` **hmac**: (`key`, ...`messages`) => `Uint8Array`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| ...`messages` | `Uint8Array`[] |

###### Returns

`Uint8Array`

###### isTorsionFree()?

> `optional` `readonly` **isTorsionFree**: (`c`, `point`) => `boolean`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `c` | `ProjConstructor` |
| `point` | `ProjPointType` |

###### Returns

`boolean`

###### lowS

> **lowS**: `boolean`

###### n

> `readonly` **n**: `bigint`

###### nBitLength

> `readonly` **nBitLength**: `number`

###### nByteLength

> `readonly` **nByteLength**: `number`

###### p

> `readonly` **p**: `bigint`

###### randomBytes()

> `readonly` **randomBytes**: (`bytesLength`?) => `Uint8Array`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `bytesLength`? | `number` |

###### Returns

`Uint8Array`

###### wrapPrivateKey?

> `optional` `readonly` **wrapPrivateKey**: `boolean`

###### ProjectivePoint

> **ProjectivePoint**: `ProjConstructor`

###### Signature

> **Signature**: `SignatureConstructor`

###### create()

> **create**: (`hash`) => `CurveFn`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `hash` | `utils.CHash` |

###### Returns

`CurveFn`

###### getPublicKey()

> **getPublicKey**: (`privateKey`, `isCompressed`?) => `Uint8Array`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `privateKey` | `utils.PrivKey` |
| `isCompressed`? | `boolean` |

###### Returns

`Uint8Array`

###### getSharedSecret()

> **getSharedSecret**: (`privateA`, `publicB`, `isCompressed`?) => `Uint8Array`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `privateA` | `utils.PrivKey` |
| `publicB` | `utils.Hex` |
| `isCompressed`? | `boolean` |

###### Returns

`Uint8Array`

###### sign()

> **sign**: (`msgHash`, `privKey`, `opts`?) => `RecoveredSignatureType`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `msgHash` | `utils.Hex` |
| `privKey` | `utils.PrivKey` |
| `opts`? | `SignOpts` |

###### Returns

`RecoveredSignatureType`

###### utils

> **utils**: `object`

###### utils.normPrivateKeyToScalar()

> **normPrivateKeyToScalar**: (`key`) => `bigint`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `utils.PrivKey` |

###### Returns

`bigint`

###### utils.precompute()

> **precompute**: (`windowSize`?, `point`?) => `ProjPointType`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `windowSize`? | `number` |
| `point`? | `ProjPointType` |

###### Returns

`ProjPointType`

###### utils.randomPrivateKey()

> **randomPrivateKey**: () => `Uint8Array`

###### Returns

`Uint8Array`

###### utils.isValidPrivateKey()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `privateKey` | `PrivKey` |

###### Returns

`boolean`

###### verify()

> **verify**: (`signature`, `msgHash`, `publicKey`, `opts`?) => `boolean`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `signature` | `utils.Hex` \| `object` |
| `msgHash` | `utils.Hex` |
| `publicKey` | `utils.Hex` |
| `opts`? | `VerOpts` |

###### Returns

`boolean`

##### Field()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `ORDER` | `bigint` |
| `bitLen`? | `number` |
| `isLE`? | `boolean` |
| `redef`? | `Partial`\<`IField`\<`bigint`\>\> |

###### Returns

`Readonly`\<`IField`\<`bigint`\> & `Required`\<`Pick`\<`IField`\<`bigint`\>, `"isOdd"`\>\>\>

##### FpDiv()

###### Type parameters

| Type parameter |
| :------ |
| `T_5` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `f` | `IField`\<`T_5`\> |
| `lhs` | `T_5` |
| `rhs` | `bigint` \| `T_5` |

###### Returns

`T_5`

##### FpInvertBatch()

###### Type parameters

| Type parameter |
| :------ |
| `T_4` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `f` | `IField`\<`T_4`\> |
| `nums` | `T_4`[] |

###### Returns

`T_4`[]

##### FpIsSquare()

###### Type parameters

| Type parameter |
| :------ |
| `T_6` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `f` | `IField`\<`T_6`\> |

###### Returns

`Function`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `T_6` |

###### Returns

`boolean`

##### FpPow()

###### Type parameters

| Type parameter |
| :------ |
| `T_3` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `f` | `IField`\<`T_3`\> |
| `num` | `T_3` |
| `power` | `bigint` |

###### Returns

`T_3`

##### FpSqrt()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `P` | `bigint` |

###### Returns

`Function`

###### Type parameters

| Type parameter |
| :------ |
| `T_1` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `Fp` | `IField`\<`T_1`\> |
| `n` | `T_1` |

###### Returns

`T_1`

##### FpSqrtEven()

###### Type parameters

| Type parameter |
| :------ |
| `T_8` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `Fp` | `IField`\<`T_8`\> |
| `elm` | `T_8` |

###### Returns

`T_8`

##### FpSqrtOdd()

###### Type parameters

| Type parameter |
| :------ |
| `T_7` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `Fp` | `IField`\<`T_7`\> |
| `elm` | `T_7` |

###### Returns

`T_7`

##### abytes()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `item` | `unknown` |

###### Returns

`void`

##### bitGet()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `bigint` |
| `pos` | `number` |

###### Returns

`bigint`

##### bitLen()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `bigint` |

###### Returns

`number`

##### bitSet()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `bigint` |
| `pos` | `number` |
| `value` | `boolean` |

###### Returns

`bigint`

##### bytesToHex()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

###### Returns

`string`

##### bytesToNumberBE()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

###### Returns

`bigint`

##### bytesToNumberLE()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

###### Returns

`bigint`

##### concatBytes()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`arrays` | `Uint8Array`[] |

###### Returns

`Uint8Array`

##### createHmacDrbg()

###### Type parameters

| Type parameter |
| :------ |
| `T_9` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `hashLen` | `number` |
| `qByteLen` | `number` |
| `hmacFn` | (`key`, ...`messages`) => `Uint8Array` |

###### Returns

`Function`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `seed` | `Uint8Array` |
| `predicate` | (`v`) => `undefined` \| `T_9` |

###### Returns

`T_9`

##### ensureBytes()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `title` | `string` |
| `hex` | `Hex` |
| `expectedLength`? | `number` |

###### Returns

`Uint8Array`

##### equalBytes()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | `Uint8Array` |
| `b` | `Uint8Array` |

###### Returns

`boolean`

##### getFieldBytesLength()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `fieldOrder` | `bigint` |

###### Returns

`number`

##### getMinHashLength()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `fieldOrder` | `bigint` |

###### Returns

`number`

##### hashToPrivateScalar()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `hash` | `string` \| `Uint8Array` |
| `groupOrder` | `bigint` |
| `isLE`? | `boolean` |

###### Returns

`bigint`

##### hexToBytes()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `hex` | `string` |

###### Returns

`Uint8Array`

##### hexToNumber()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `hex` | `string` |

###### Returns

`bigint`

##### invert()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `number` | `bigint` |
| `modulo` | `bigint` |

###### Returns

`bigint`

##### isBytes()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | `unknown` |

###### Returns

`a is Uint8Array`

##### mapHashToField()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `fieldOrder` | `bigint` |
| `isLE`? | `boolean` |

###### Returns

`Uint8Array`

##### mod()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

###### Returns

`bigint`

###### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

##### nLength()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `bigint` |
| `nBitLength`? | `number` |

###### Returns

`object`

###### nBitLength

> **nBitLength**: `number`

###### nByteLength

> **nByteLength**: `number`

##### numberToBytesBE()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `number` \| `bigint` |
| `len` | `number` |

###### Returns

`Uint8Array`

##### numberToBytesLE()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `number` \| `bigint` |
| `len` | `number` |

###### Returns

`Uint8Array`

##### numberToHexUnpadded()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `num` | `number` \| `bigint` |

###### Returns

`string`

##### numberToVarBytesBE()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `number` \| `bigint` |

###### Returns

`Uint8Array`

##### pow()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `num` | `bigint` |
| `power` | `bigint` |
| `modulo` | `bigint` |

###### Returns

`bigint`

##### pow2()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `bigint` |
| `power` | `bigint` |
| `modulo` | `bigint` |

###### Returns

`bigint`

##### tonelliShanks()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `P` | `bigint` |

###### Returns

`Function`

###### Type parameters

| Type parameter |
| :------ |
| `T` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `Fp` | `IField`\<`T`\> |
| `n` | `T` |

###### Returns

`T`

##### utf8ToBytes()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `str` | `string` |

###### Returns

`Uint8Array`

##### validateField()

###### Type parameters

| Type parameter |
| :------ |
| `T_2` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `field` | `IField`\<`T_2`\> |

###### Returns

`IField`\<`T_2`\>

##### validateObject()

###### Type parameters

| Type parameter |
| :------ |
| `T_10` *extends* `Record`\<`string`, `any`\> |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `object` | `T_10` |
| `validators` | \{ \[K in string \| number \| symbol\]?: "string" \| "bigint" \| "boolean" \| "function" \| "field" \| "stringOrUint8Array" \| "isSafeInteger" \| "array" \| "hash" \} |
| `optValidators`? | \{ \[K in string \| number \| symbol\]?: "string" \| "bigint" \| "boolean" \| "function" \| "field" \| "stringOrUint8Array" \| "isSafeInteger" \| "array" \| "hash" \} |

###### Returns

`T_10`

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:11

## Functions

### Key()

> **Key**(`properties`): [`Key`](interfaces/Key.md)

Generic key factory.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `properties` | `Partial`\<[`Key`](interfaces/Key.md)\> |

#### Returns

[`Key`](interfaces/Key.md)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:159

***

### PrivateKey()

> **PrivateKey**(`privateKey`, `options`?): [`PrivateKey`](interfaces/PrivateKey.md)

Private key factory.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` \| [`BinaryKeyPair`](README.md#binarykeypair) |
| `options`? | `Partial`\<[`Key`](interfaces/Key.md)\> |

#### Returns

[`PrivateKey`](interfaces/PrivateKey.md)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:163

***

### PublicKey()

> **PublicKey**(`publicKey`, `options`?): [`PublicKey`](interfaces/PublicKey.md)

Public key factory.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `options`? | `Partial`\<[`Key`](interfaces/Key.md)\> |

#### Returns

[`PublicKey`](interfaces/PublicKey.md)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:167

***

### SymmetricKey()

> **SymmetricKey**(`privateKey`, `options`?): [`Key`](interfaces/Key.md)

Symmetric key factory.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `options`? | `Partial`\<[`Key`](interfaces/Key.md)\> |

#### Returns

[`Key`](interfaces/Key.md)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:171
