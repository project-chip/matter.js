[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / crypto/export

# Module: crypto/export

## Table of contents

### Enumerations

- [CurveType](../enums/crypto_export.CurveType.md)
- [KeyType](../enums/crypto_export.KeyType.md)

### Classes

- [Crypto](../classes/crypto_export.Crypto.md)
- [CryptoError](../classes/crypto_export.CryptoError.md)
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

[packages/matter.js/src/crypto/Key.ts:60](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L60)

___

### CryptoDsaEncoding

Ƭ **CryptoDsaEncoding**: ``"ieee-p1363"`` \| ``"der"``

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L20)

## Variables

### CRYPTO\_AEAD\_MIC\_LENGTH\_BITS

• `Const` **CRYPTO\_AEAD\_MIC\_LENGTH\_BITS**: ``128``

#### Defined in

[packages/matter.js/src/crypto/CryptoConstants.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/CryptoConstants.ts#L19)

___

### CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES

• `Const` **CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES**: ``16``

#### Defined in

[packages/matter.js/src/crypto/CryptoConstants.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/CryptoConstants.ts#L20)

___

### CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES

• `Const` **CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES**: ``13``

#### Defined in

[packages/matter.js/src/crypto/CryptoConstants.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/CryptoConstants.ts#L21)

___

### CRYPTO\_AUTH\_TAG\_LENGTH

• `Const` **CRYPTO\_AUTH\_TAG\_LENGTH**: ``16``

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L18)

___

### CRYPTO\_EC\_CURVE

• `Const` **CRYPTO\_EC\_CURVE**: ``"prime256v1"``

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L16)

___

### CRYPTO\_EC\_KEY\_BYTES

• `Const` **CRYPTO\_EC\_KEY\_BYTES**: ``32``

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L17)

___

### CRYPTO\_ENCRYPT\_ALGORITHM

• `Const` **CRYPTO\_ENCRYPT\_ALGORITHM**: ``"aes-128-ccm"``

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L14)

___

### CRYPTO\_GROUP\_SIZE\_BITS

• `Const` **CRYPTO\_GROUP\_SIZE\_BITS**: ``256``

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 3.5.1

#### Defined in

[packages/matter.js/src/crypto/CryptoConstants.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/CryptoConstants.ts#L10)

___

### CRYPTO\_GROUP\_SIZE\_BYTES

• `Const` **CRYPTO\_GROUP\_SIZE\_BYTES**: ``32``

#### Defined in

[packages/matter.js/src/crypto/CryptoConstants.ts:11](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/CryptoConstants.ts#L11)

___

### CRYPTO\_HASH\_ALGORITHM

• `Const` **CRYPTO\_HASH\_ALGORITHM**: ``"sha256"``

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:15](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L15)

___

### CRYPTO\_HASH\_BLOCK\_LEN\_BYTES

• `Const` **CRYPTO\_HASH\_BLOCK\_LEN\_BYTES**: ``64``

#### Defined in

[packages/matter.js/src/crypto/CryptoConstants.ts:15](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/CryptoConstants.ts#L15)

___

### CRYPTO\_HASH\_LEN\_BYTES

• `Const` **CRYPTO\_HASH\_LEN\_BYTES**: ``32``

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 3.3

#### Defined in

[packages/matter.js/src/crypto/CryptoConstants.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/CryptoConstants.ts#L14)

___

### CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES

• `Const` **CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES**: `number`

#### Defined in

[packages/matter.js/src/crypto/CryptoConstants.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/CryptoConstants.ts#L12)

___

### CRYPTO\_RANDOM\_LENGTH

• `Const` **CRYPTO\_RANDOM\_LENGTH**: ``32``

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L13)

___

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH

• `Const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH**: ``16``

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L19)

___

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS

• `Const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS**: ``128``

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 3.6

#### Defined in

[packages/matter.js/src/crypto/CryptoConstants.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/CryptoConstants.ts#L17)

___

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES

• `Const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES**: ``16``

#### Defined in

[packages/matter.js/src/crypto/CryptoConstants.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/CryptoConstants.ts#L18)

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

[packages/matter.js/src/crypto/Key.ts:452](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L452)

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

[packages/matter.js/src/crypto/Key.ts:556](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L556)

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

[packages/matter.js/src/crypto/Key.ts:575](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L575)

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

[packages/matter.js/src/crypto/Key.ts:586](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L586)
