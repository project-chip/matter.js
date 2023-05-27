[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / crypto

# Module: crypto

## Table of contents

### Classes

- [Crypto](../classes/crypto.Crypto.md)
- [CryptoNode](../classes/crypto.CryptoNode.md)
- [Spake2p](../classes/crypto.Spake2p.md)

### Interfaces

- [PbkdfParameters](../interfaces/crypto.PbkdfParameters.md)

### Type Aliases

- [CryptoDsaEncoding](crypto.md#cryptodsaencoding)
- [KeyPair](crypto.md#keypair)

### Variables

- [CRYPTO\_AEAD\_MIC\_LENGTH\_BITS](crypto.md#crypto_aead_mic_length_bits)
- [CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES](crypto.md#crypto_aead_mic_length_bytes)
- [CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES](crypto.md#crypto_aead_nonce_length_bytes)
- [CRYPTO\_AUTH\_TAG\_LENGTH](crypto.md#crypto_auth_tag_length)
- [CRYPTO\_EC\_CURVE](crypto.md#crypto_ec_curve)
- [CRYPTO\_ENCRYPT\_ALGORITHM](crypto.md#crypto_encrypt_algorithm)
- [CRYPTO\_GROUP\_SIZE\_BITS](crypto.md#crypto_group_size_bits)
- [CRYPTO\_GROUP\_SIZE\_BYTES](crypto.md#crypto_group_size_bytes)
- [CRYPTO\_HASH\_ALGORITHM](crypto.md#crypto_hash_algorithm)
- [CRYPTO\_HASH\_BLOCK\_LEN\_BYTES](crypto.md#crypto_hash_block_len_bytes)
- [CRYPTO\_HASH\_LEN\_BYTES](crypto.md#crypto_hash_len_bytes)
- [CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES](crypto.md#crypto_public_key_size_bytes)
- [CRYPTO\_RANDOM\_LENGTH](crypto.md#crypto_random_length)
- [CRYPTO\_SYMMETRIC\_KEY\_LENGTH](crypto.md#crypto_symmetric_key_length)
- [CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS](crypto.md#crypto_symmetric_key_length_bits)
- [CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES](crypto.md#crypto_symmetric_key_length_bytes)

## Type Aliases

### CryptoDsaEncoding

Ƭ **CryptoDsaEncoding**: ``"ieee-p1363"`` \| ``"der"``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:14

___

### KeyPair

Ƭ **KeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `privateKey` | [`ByteArray`](util.md#bytearray-1) |
| `publicKey` | [`ByteArray`](util.md#bytearray-1) |

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:15

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:12

___

### CRYPTO\_EC\_CURVE

• `Const` **CRYPTO\_EC\_CURVE**: ``"prime256v1"``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:11

___

### CRYPTO\_ENCRYPT\_ALGORITHM

• `Const` **CRYPTO\_ENCRYPT\_ALGORITHM**: ``"aes-128-ccm"``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:9

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:10

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:8

___

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH

• `Const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH**: ``16``

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:13

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
