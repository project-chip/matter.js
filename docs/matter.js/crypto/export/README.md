[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / crypto/export

# crypto/export

## Index

### Enumerations

- [CurveType](enumerations/CurveType.md)
- [KeyType](enumerations/KeyType.md)

### Classes

- [Crypto](classes/Crypto.md)
- [CryptoError](classes/CryptoError.md)
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

[packages/matter.js/src/crypto/Key.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L65)

***

### CryptoDsaEncoding

> **CryptoDsaEncoding**: `"ieee-p1363"` \| `"der"`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L28)

## Variables

### CRYPTO\_AEAD\_MIC\_LENGTH\_BITS

> `const` **CRYPTO\_AEAD\_MIC\_LENGTH\_BITS**: `128` = `128`

#### Source

[packages/matter.js/src/crypto/CryptoConstants.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/CryptoConstants.ts#L17)

***

### CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES

> `const` **CRYPTO\_AEAD\_MIC\_LENGTH\_BYTES**: `16` = `16`

#### Source

[packages/matter.js/src/crypto/CryptoConstants.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/CryptoConstants.ts#L18)

***

### CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES

> `const` **CRYPTO\_AEAD\_NONCE\_LENGTH\_BYTES**: `13` = `13`

#### Source

[packages/matter.js/src/crypto/CryptoConstants.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/CryptoConstants.ts#L19)

***

### CRYPTO\_AUTH\_TAG\_LENGTH

> `const` **CRYPTO\_AUTH\_TAG\_LENGTH**: `16` = `16`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L26)

***

### CRYPTO\_EC\_CURVE

> `const` **CRYPTO\_EC\_CURVE**: `"prime256v1"` = `"prime256v1"`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L24)

***

### CRYPTO\_EC\_KEY\_BYTES

> `const` **CRYPTO\_EC\_KEY\_BYTES**: `32` = `32`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L25)

***

### CRYPTO\_ENCRYPT\_ALGORITHM

> `const` **CRYPTO\_ENCRYPT\_ALGORITHM**: `"aes-128-ccm"` = `"aes-128-ccm"`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L22)

***

### CRYPTO\_GROUP\_SIZE\_BITS

> `const` **CRYPTO\_GROUP\_SIZE\_BITS**: `256` = `256`

#### See

MatterSpecification.v10.Core § 3.5.1

#### Source

[packages/matter.js/src/crypto/CryptoConstants.ts:8](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/CryptoConstants.ts#L8)

***

### CRYPTO\_GROUP\_SIZE\_BYTES

> `const` **CRYPTO\_GROUP\_SIZE\_BYTES**: `32` = `32`

#### Source

[packages/matter.js/src/crypto/CryptoConstants.ts:9](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/CryptoConstants.ts#L9)

***

### CRYPTO\_HASH\_ALGORITHM

> `const` **CRYPTO\_HASH\_ALGORITHM**: `"sha256"` = `"sha256"`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L23)

***

### CRYPTO\_HASH\_BLOCK\_LEN\_BYTES

> `const` **CRYPTO\_HASH\_BLOCK\_LEN\_BYTES**: `64` = `64`

#### Source

[packages/matter.js/src/crypto/CryptoConstants.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/CryptoConstants.ts#L13)

***

### CRYPTO\_HASH\_LEN\_BYTES

> `const` **CRYPTO\_HASH\_LEN\_BYTES**: `32` = `32`

#### See

MatterSpecification.v10.Core § 3.3

#### Source

[packages/matter.js/src/crypto/CryptoConstants.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/CryptoConstants.ts#L12)

***

### CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES

> `const` **CRYPTO\_PUBLIC\_KEY\_SIZE\_BYTES**: `number`

#### Source

[packages/matter.js/src/crypto/CryptoConstants.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/CryptoConstants.ts#L10)

***

### CRYPTO\_RANDOM\_LENGTH

> `const` **CRYPTO\_RANDOM\_LENGTH**: `32` = `32`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L21)

***

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH

> `const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH**: `16` = `16`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L27)

***

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS

> `const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BITS**: `128` = `128`

#### See

MatterSpecification.v10.Core § 3.6

#### Source

[packages/matter.js/src/crypto/CryptoConstants.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/CryptoConstants.ts#L15)

***

### CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES

> `const` **CRYPTO\_SYMMETRIC\_KEY\_LENGTH\_BYTES**: `16` = `16`

#### Source

[packages/matter.js/src/crypto/CryptoConstants.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/CryptoConstants.ts#L16)

***

### ec

> `const` **ec**: `object`

#### Type declaration

##### p256

> **p256**: `Readonly`\<`object`\>

#### Source

[packages/matter.js/src/crypto/Crypto.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L15)

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

[packages/matter.js/src/crypto/Key.ts:457](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L457)

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

[packages/matter.js/src/crypto/Key.ts:564](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L564)

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

[packages/matter.js/src/crypto/Key.ts:583](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L583)

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

[packages/matter.js/src/crypto/Key.ts:594](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L594)
