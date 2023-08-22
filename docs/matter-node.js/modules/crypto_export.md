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
| `privateKey` | [`ByteArray`](util_export.md#bytearray-1) |
| `publicKey` | [`ByteArray`](util_export.md#bytearray-1) |

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:17

___

### CryptoDsaEncoding

Ƭ **CryptoDsaEncoding**: ``"ieee-p1363"`` \| ``"der"``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:17

## Variables

### CRYPTO\_AEAD\_MIC\_LENGTH\_BITS

• `Const` **CRYPTO\_AEAD\_MIC\_LENGTH\_BITS**: ``128``

#### Defined in

packages/matter.js/dist/cjs/crypto/CryptoConstants.d.ts:16

___

### CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES

• `Const` **CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES**: ``16``

#### Defined in

packages/matter.js/dist/cjs/crypto/CryptoConstants.d.ts:17

___

### CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES

• `Const` **CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES**: ``13``

#### Defined in

packages/matter.js/dist/cjs/crypto/CryptoConstants.d.ts:18

___

### CRYPTO\_AUTH\_TAG\_LENGTH

• `Const` **CRYPTO\_AUTH\_TAG\_LENGTH**: ``16``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:15

___

### CRYPTO\_EC\_CURVE

• `Const` **CRYPTO\_EC\_CURVE**: ``"prime256v1"``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:13

___

### CRYPTO\_EC\_KEY\_BYTES

• `Const` **CRYPTO\_EC\_KEY\_BYTES**: ``32``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:14

___

### CRYPTO\_ENCRYPT\_ALGORITHM

• `Const` **CRYPTO\_ENCRYPT\_ALGORITHM**: ``"aes-128-ccm"``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:11

___

### CRYPTO\_GROUP\_SIZE\_BITS

• `Const` **CRYPTO\_GROUP\_SIZE\_BITS**: ``256``

**`See`**

MatterCoreSpecificationV1_0 § 3.5.1

#### Defined in

packages/matter.js/dist/cjs/crypto/CryptoConstants.d.ts:7

___

### CRYPTO\_GROUP\_SIZE\_BYTES

• `Const` **CRYPTO\_GROUP\_SIZE\_BYTES**: ``32``

#### Defined in

packages/matter.js/dist/cjs/crypto/CryptoConstants.d.ts:8

___

### CRYPTO\_HASH\_ALGORITHM

• `Const` **CRYPTO\_HASH\_ALGORITHM**: ``"sha256"``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:12

___

### CRYPTO\_HASH\_BLOCK\_LEN\_BYTES

• `Const` **CRYPTO\_HASH\_BLOCK\_LEN\_BYTES**: ``64``

#### Defined in

packages/matter.js/dist/cjs/crypto/CryptoConstants.d.ts:12

___

### CRYPTO\_HASH\_LEN\_BYTES

• `Const` **CRYPTO\_HASH\_LEN\_BYTES**: ``32``

**`See`**

MatterCoreSpecificationV1_0 § 3.3

#### Defined in

packages/matter.js/dist/cjs/crypto/CryptoConstants.d.ts:11

___

### CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES

• `Const` **CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES**: `number`

#### Defined in

packages/matter.js/dist/cjs/crypto/CryptoConstants.d.ts:9

___

### CRYPTO\_RANDOM\_LENGTH

• `Const` **CRYPTO\_RANDOM\_LENGTH**: ``32``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:10

___

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH

• `Const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH**: ``16``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:16

___

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS

• `Const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS**: ``128``

**`See`**

MatterCoreSpecificationV1_0 § 3.6

#### Defined in

packages/matter.js/dist/cjs/crypto/CryptoConstants.d.ts:14

___

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES

• `Const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES**: ``16``

#### Defined in

packages/matter.js/dist/cjs/crypto/CryptoConstants.d.ts:15

## Functions

### Key

▸ **Key**(`properties`): [`Key`](crypto_export.md#key)

Generic key factory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties` | `Partial`<[`Key`](crypto_export.md#key)\> |

#### Returns

[`Key`](crypto_export.md#key)

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:159

___

### PrivateKey

▸ **PrivateKey**(`privateKey`, `options?`): [`PrivateKey`](crypto_export.md#privatekey)

Private key factory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` \| [`BinaryKeyPair`](crypto_export.md#binarykeypair) |
| `options?` | `Partial`<[`Key`](crypto_export.md#key)\> |

#### Returns

[`PrivateKey`](crypto_export.md#privatekey)

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:163

___

### PublicKey

▸ **PublicKey**(`publicKey`, `options?`): [`PublicKey`](crypto_export.md#publickey)

Public key factory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `options?` | `Partial`<[`Key`](crypto_export.md#key)\> |

#### Returns

[`PublicKey`](crypto_export.md#publickey)

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:167

___

### SymmetricKey

▸ **SymmetricKey**(`privateKey`, `options?`): [`Key`](crypto_export.md#key)

Symmetric key factory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `options?` | `Partial`<[`Key`](crypto_export.md#key)\> |

#### Returns

[`Key`](crypto_export.md#key)

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:171
