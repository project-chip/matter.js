[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / crypto/export

# Module: crypto/export

## Table of contents

### Enumerations

- [CurveType](../enums/crypto_export.CurveType.md)
- [KeyType](../enums/crypto_export.KeyType.md)

### Classes

- [Crypto](../classes/crypto_export.Crypto.md)
- [CryptoError](../classes/crypto_export.CryptoError.md)
- [CryptoNode](../classes/crypto_export.CryptoNode.md)
- [Spake2p](../classes/crypto_export.Spake2p.md)

### Interfaces

- [Key](../interfaces/crypto_export.Key.md)
- [PbkdfParameters](../interfaces/crypto_export.PbkdfParameters.md)
- [PrivateKey](../interfaces/crypto_export.PrivateKey.md)
- [PublicKey](../interfaces/crypto_export.PublicKey.md)
- [SymmetricKey](../interfaces/crypto_export.SymmetricKey.md)

### Type Aliases

- [BinaryKeyPair](crypto_export.md#binarykeypair)
- [CryptoDsaEncoding](crypto_export.md#cryptodsaencoding)

### Variables

- [CRYPTO\_AEAD\_MIC\_LENGTH\_BITS](crypto_export.md#crypto_aead_mic_length_bits)
- [CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES](crypto_export.md#crypto_aead_mic_length_bytes)
- [CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES](crypto_export.md#crypto_aead_nonce_length_bytes)
- [CRYPTO\_AUTH\_TAG\_LENGTH](crypto_export.md#crypto_auth_tag_length)
- [CRYPTO\_EC\_CURVE](crypto_export.md#crypto_ec_curve)
- [CRYPTO\_EC\_KEY\_BYTES](crypto_export.md#crypto_ec_key_bytes)
- [CRYPTO\_ENCRYPT\_ALGORITHM](crypto_export.md#crypto_encrypt_algorithm)
- [CRYPTO\_GROUP\_SIZE\_BITS](crypto_export.md#crypto_group_size_bits)
- [CRYPTO\_GROUP\_SIZE\_BYTES](crypto_export.md#crypto_group_size_bytes)
- [CRYPTO\_HASH\_ALGORITHM](crypto_export.md#crypto_hash_algorithm)
- [CRYPTO\_HASH\_BLOCK\_LEN\_BYTES](crypto_export.md#crypto_hash_block_len_bytes)
- [CRYPTO\_HASH\_LEN\_BYTES](crypto_export.md#crypto_hash_len_bytes)
- [CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES](crypto_export.md#crypto_public_key_size_bytes)
- [CRYPTO\_RANDOM\_LENGTH](crypto_export.md#crypto_random_length)
- [CRYPTO\_SYMMETRIC\_KEY\_LENGTH](crypto_export.md#crypto_symmetric_key_length)
- [CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS](crypto_export.md#crypto_symmetric_key_length_bits)
- [CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES](crypto_export.md#crypto_symmetric_key_length_bytes)
- [ec](crypto_export.md#ec)

### Functions

- [Key](crypto_export.md#key)
- [PrivateKey](crypto_export.md#privatekey)
- [PublicKey](crypto_export.md#publickey)
- [SymmetricKey](crypto_export.md#symmetrickey)

## Type Aliases

### BinaryKeyPair

Ƭ **BinaryKeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `privateKey` | [`ByteArray`](util_export.md#bytearray) |
| `publicKey` | [`ByteArray`](util_export.md#bytearray) |

#### Defined in

packages/matter.js/dist/esm/crypto/Key.d.ts:17

___

### CryptoDsaEncoding

Ƭ **CryptoDsaEncoding**: ``"ieee-p1363"`` \| ``"der"``

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:121

## Variables

### CRYPTO\_AEAD\_MIC\_LENGTH\_BITS

• `Const` **CRYPTO\_AEAD\_MIC\_LENGTH\_BITS**: ``128``

#### Defined in

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:16

___

### CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES

• `Const` **CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES**: ``16``

#### Defined in

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:17

___

### CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES

• `Const` **CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES**: ``13``

#### Defined in

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:18

___

### CRYPTO\_AUTH\_TAG\_LENGTH

• `Const` **CRYPTO\_AUTH\_TAG\_LENGTH**: ``16``

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:119

___

### CRYPTO\_EC\_CURVE

• `Const` **CRYPTO\_EC\_CURVE**: ``"prime256v1"``

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:117

___

### CRYPTO\_EC\_KEY\_BYTES

• `Const` **CRYPTO\_EC\_KEY\_BYTES**: ``32``

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:118

___

### CRYPTO\_ENCRYPT\_ALGORITHM

• `Const` **CRYPTO\_ENCRYPT\_ALGORITHM**: ``"aes-128-ccm"``

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:115

___

### CRYPTO\_GROUP\_SIZE\_BITS

• `Const` **CRYPTO\_GROUP\_SIZE\_BITS**: ``256``

**`See`**

MatterSpecification.v10.Core § 3.5.1

#### Defined in

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:7

___

### CRYPTO\_GROUP\_SIZE\_BYTES

• `Const` **CRYPTO\_GROUP\_SIZE\_BYTES**: ``32``

#### Defined in

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:8

___

### CRYPTO\_HASH\_ALGORITHM

• `Const` **CRYPTO\_HASH\_ALGORITHM**: ``"sha256"``

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:116

___

### CRYPTO\_HASH\_BLOCK\_LEN\_BYTES

• `Const` **CRYPTO\_HASH\_BLOCK\_LEN\_BYTES**: ``64``

#### Defined in

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:12

___

### CRYPTO\_HASH\_LEN\_BYTES

• `Const` **CRYPTO\_HASH\_LEN\_BYTES**: ``32``

**`See`**

MatterSpecification.v10.Core § 3.3

#### Defined in

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:11

___

### CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES

• `Const` **CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES**: `number`

#### Defined in

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:9

___

### CRYPTO\_RANDOM\_LENGTH

• `Const` **CRYPTO\_RANDOM\_LENGTH**: ``32``

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:114

___

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH

• `Const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH**: ``16``

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:120

___

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS

• `Const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS**: ``128``

**`See`**

MatterSpecification.v10.Core § 3.6

#### Defined in

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:14

___

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES

• `Const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES**: ``16``

#### Defined in

packages/matter.js/dist/esm/crypto/CryptoConstants.d.ts:15

___

### ec

• `Const` **ec**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bitMask` | (`n`: `number`) => `bigint` |
| `default` | `__module` |
| `isNegativeLE` | (`num`: `bigint`, `modulo`: `bigint`) => `boolean` |
| `p256` | `Readonly`\<\{ `CURVE`: `Readonly`\<\{ `Fp`: `mod.IField`\<`bigint`\> ; `Gx`: `bigint` ; `Gy`: `bigint` ; `a`: `bigint` ; `allowInfinityPoint?`: `boolean` ; `allowedPrivateKeyLengths?`: readonly `number`[] ; `b`: `bigint` ; `bits2int?`: (`bytes`: `Uint8Array`) => `bigint` ; `bits2int_modN?`: (`bytes`: `Uint8Array`) => `bigint` ; `clearCofactor?`: (`c`: `ProjConstructor`, `point`: `ProjPointType`) => `ProjPointType` ; `endo?`: \{ `beta`: `bigint` ; `splitScalar`: (`k`: `bigint`) => \{ `k1`: `bigint` ; `k1neg`: `boolean` ; `k2`: `bigint` ; `k2neg`: `boolean`  }  } ; `h`: `bigint` ; `hEff?`: `bigint` ; `hash`: `utils.CHash` ; `hmac`: (`key`: `Uint8Array`, ...`messages`: `Uint8Array`[]) => `Uint8Array` ; `isTorsionFree?`: (`c`: `ProjConstructor`, `point`: `ProjPointType`) => `boolean` ; `lowS`: `boolean` ; `n`: `bigint` ; `nBitLength`: `number` ; `nByteLength`: `number` ; `p`: `bigint` ; `randomBytes`: (`bytesLength?`: `number`) => `Uint8Array` ; `wrapPrivateKey?`: `boolean`  }\> ; `ProjectivePoint`: `ProjConstructor` ; `Signature`: `SignatureConstructor` ; `create`: (`hash`: `utils.CHash`) => `CurveFn` ; `getPublicKey`: (`privateKey`: `utils.PrivKey`, `isCompressed?`: `boolean`) => `Uint8Array` ; `getSharedSecret`: (`privateA`: `utils.PrivKey`, `publicB`: `utils.Hex`, `isCompressed?`: `boolean`) => `Uint8Array` ; `sign`: (`msgHash`: `utils.Hex`, `privKey`: `utils.PrivKey`, `opts?`: `SignOpts`) => `RecoveredSignatureType` ; `utils`: \{ `normPrivateKeyToScalar`: (`key`: `utils.PrivKey`) => `bigint` ; `precompute`: (`windowSize?`: `number`, `point?`: `ProjPointType`) => `ProjPointType` ; `randomPrivateKey`: () => `Uint8Array` ; `isValidPrivateKey`: (`privateKey`: `PrivKey`) => `boolean`  } ; `verify`: (`signature`: `utils.Hex` \| \{ `r`: `bigint` ; `s`: `bigint`  }, `msgHash`: `utils.Hex`, `publicKey`: `utils.Hex`, `opts?`: `VerOpts`) => `boolean`  }\> |
| `Field` | (`ORDER`: `bigint`, `bitLen?`: `number`, `isLE?`: `boolean`, `redef?`: `Partial`\<`IField`\<`bigint`\>\>) => `Readonly`\<`IField`\<`bigint`\> & `Required`\<`Pick`\<`IField`\<`bigint`\>, ``"isOdd"``\>\>\> |
| `FpDiv` | \<T_5\>(`f`: `IField`\<`T_5`\>, `lhs`: `T_5`, `rhs`: `bigint` \| `T_5`) => `T_5` |
| `FpInvertBatch` | \<T_4\>(`f`: `IField`\<`T_4`\>, `nums`: `T_4`[]) => `T_4`[] |
| `FpIsSquare` | \<T_6\>(`f`: `IField`\<`T_6`\>) => (`x`: `T_6`) => `boolean` |
| `FpPow` | \<T_3\>(`f`: `IField`\<`T_3`\>, `num`: `T_3`, `power`: `bigint`) => `T_3` |
| `FpSqrt` | (`P`: `bigint`) => \<T_1\>(`Fp`: `IField`\<`T_1`\>, `n`: `T_1`) => `T_1` |
| `FpSqrtEven` | \<T_8\>(`Fp`: `IField`\<`T_8`\>, `elm`: `T_8`) => `T_8` |
| `FpSqrtOdd` | \<T_7\>(`Fp`: `IField`\<`T_7`\>, `elm`: `T_7`) => `T_7` |
| `abytes` | (`item`: `unknown`) => `void` |
| `bitGet` | (`n`: `bigint`, `pos`: `number`) => `bigint` |
| `bitLen` | (`n`: `bigint`) => `number` |
| `bitSet` | (`n`: `bigint`, `pos`: `number`, `value`: `boolean`) => `bigint` |
| `bytesToHex` | (`bytes`: `Uint8Array`) => `string` |
| `bytesToNumberBE` | (`bytes`: `Uint8Array`) => `bigint` |
| `bytesToNumberLE` | (`bytes`: `Uint8Array`) => `bigint` |
| `concatBytes` | (...`arrays`: `Uint8Array`[]) => `Uint8Array` |
| `createHmacDrbg` | \<T_9\>(`hashLen`: `number`, `qByteLen`: `number`, `hmacFn`: (`key`: `Uint8Array`, ...`messages`: `Uint8Array`[]) => `Uint8Array`) => (`seed`: `Uint8Array`, `predicate`: (`v`: `Uint8Array`) => `undefined` \| `T_9`) => `T_9` |
| `ensureBytes` | (`title`: `string`, `hex`: `Hex`, `expectedLength?`: `number`) => `Uint8Array` |
| `equalBytes` | (`a`: `Uint8Array`, `b`: `Uint8Array`) => `boolean` |
| `getFieldBytesLength` | (`fieldOrder`: `bigint`) => `number` |
| `getMinHashLength` | (`fieldOrder`: `bigint`) => `number` |
| `hashToPrivateScalar` | (`hash`: `string` \| `Uint8Array`, `groupOrder`: `bigint`, `isLE?`: `boolean`) => `bigint` |
| `hexToBytes` | (`hex`: `string`) => `Uint8Array` |
| `hexToNumber` | (`hex`: `string`) => `bigint` |
| `invert` | (`number`: `bigint`, `modulo`: `bigint`) => `bigint` |
| `isBytes` | (`a`: `unknown`) => a is Uint8Array |
| `mapHashToField` | (`key`: `Uint8Array`, `fieldOrder`: `bigint`, `isLE?`: `boolean`) => `Uint8Array` |
| `mod` | (`a`: `bigint`, `b`: `bigint`) => `bigint` |
| `nLength` | (`n`: `bigint`, `nBitLength?`: `number`) => \{ `nBitLength`: `number` ; `nByteLength`: `number`  } |
| `numberToBytesBE` | (`n`: `number` \| `bigint`, `len`: `number`) => `Uint8Array` |
| `numberToBytesLE` | (`n`: `number` \| `bigint`, `len`: `number`) => `Uint8Array` |
| `numberToHexUnpadded` | (`num`: `number` \| `bigint`) => `string` |
| `numberToVarBytesBE` | (`n`: `number` \| `bigint`) => `Uint8Array` |
| `pow` | (`num`: `bigint`, `power`: `bigint`, `modulo`: `bigint`) => `bigint` |
| `pow2` | (`x`: `bigint`, `power`: `bigint`, `modulo`: `bigint`) => `bigint` |
| `tonelliShanks` | (`P`: `bigint`) => \<T\>(`Fp`: `IField`\<`T`\>, `n`: `T`) => `T` |
| `utf8ToBytes` | (`str`: `string`) => `Uint8Array` |
| `validateField` | \<T_2\>(`field`: `IField`\<`T_2`\>) => `IField`\<`T_2`\> |
| `validateObject` | \<T_10\>(`object`: `T_10`, `validators`: \{ [K in string \| number \| symbol]?: "string" \| "bigint" \| "boolean" \| "function" \| "field" \| "stringOrUint8Array" \| "isSafeInteger" \| "array" \| "hash" }, `optValidators?`: \{ [K in string \| number \| symbol]?: "string" \| "bigint" \| "boolean" \| "function" \| "field" \| "stringOrUint8Array" \| "isSafeInteger" \| "array" \| "hash" }) => `T_10` |

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:11

## Functions

### Key

▸ **Key**(`properties`): [`Key`](../interfaces/crypto_export.Key.md)

Generic key factory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties` | `Partial`\<[`Key`](../interfaces/crypto_export.Key.md)\> |

#### Returns

[`Key`](../interfaces/crypto_export.Key.md)

#### Defined in

packages/matter.js/dist/esm/crypto/Key.d.ts:159

___

### PrivateKey

▸ **PrivateKey**(`privateKey`, `options?`): [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

Private key factory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` \| [`BinaryKeyPair`](crypto_export.md#binarykeypair) |
| `options?` | `Partial`\<[`Key`](../interfaces/crypto_export.Key.md)\> |

#### Returns

[`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

packages/matter.js/dist/esm/crypto/Key.d.ts:163

___

### PublicKey

▸ **PublicKey**(`publicKey`, `options?`): [`PublicKey`](../interfaces/crypto_export.PublicKey.md)

Public key factory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `options?` | `Partial`\<[`Key`](../interfaces/crypto_export.Key.md)\> |

#### Returns

[`PublicKey`](../interfaces/crypto_export.PublicKey.md)

#### Defined in

packages/matter.js/dist/esm/crypto/Key.d.ts:167

___

### SymmetricKey

▸ **SymmetricKey**(`privateKey`, `options?`): [`Key`](../interfaces/crypto_export.Key.md)

Symmetric key factory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `options?` | `Partial`\<[`Key`](../interfaces/crypto_export.Key.md)\> |

#### Returns

[`Key`](../interfaces/crypto_export.Key.md)

#### Defined in

packages/matter.js/dist/esm/crypto/Key.d.ts:171
