[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [crypto/export](../README.md) / Key

# Interface: Key

Represents a cryptographic key.

Models keys as JWK.  Advantages of this format:

  - Standard
  - Widely supported
  - Fully models relevant key types
  - Where not supported, extracting constituent parts for translation is trivial

## Extends

- `JsonWebKey`

## Extended by

- [`PublicKey`](PublicKey.md)
- [`SymmetricKey`](SymmetricKey.md)

## Constructors

## Properties

### alg?

> `optional` **alg**: `string`

#### Overrides

`JsonWebKey.alg`

#### Source

[packages/matter.js/src/crypto/Key.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L112)

***

### algorithm?

> `optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Source

[packages/matter.js/src/crypto/Key.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L84)

***

### crv?

> `optional` **crv**: [`CurveType`](../enumerations/CurveType.md)

#### Overrides

`JsonWebKey.crv`

#### Source

[packages/matter.js/src/crypto/Key.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L113)

***

### curve?

> `optional` **curve**: [`CurveType`](../enumerations/CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Source

[packages/matter.js/src/crypto/Key.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L89)

***

### d?

> `optional` **d**: `string`

#### Overrides

`JsonWebKey.d`

#### Source

[packages/matter.js/src/crypto/Key.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L114)

***

### dp?

> `optional` **dp**: `string`

#### Overrides

`JsonWebKey.dp`

#### Source

[packages/matter.js/src/crypto/Key.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L115)

***

### dq?

> `optional` **dq**: `string`

#### Overrides

`JsonWebKey.dq`

#### Source

[packages/matter.js/src/crypto/Key.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L116)

***

### e?

> `optional` **e**: `string`

#### Overrides

`JsonWebKey.e`

#### Source

[packages/matter.js/src/crypto/Key.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L117)

***

### ext?

> `optional` **ext**: `boolean`

#### Overrides

`JsonWebKey.ext`

#### Source

[packages/matter.js/src/crypto/Key.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L118)

***

### extractable?

> `optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Source

[packages/matter.js/src/crypto/Key.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L110)

***

### k?

> `optional` **k**: `string`

#### Overrides

`JsonWebKey.k`

#### Source

[packages/matter.js/src/crypto/Key.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L119)

***

### keyPair

> **keyPair**: [`BinaryKeyPair`](../README.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Source

[packages/matter.js/src/crypto/Key.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L189)

***

### keyPairBits?

> `optional` **keyPairBits**: [`BinaryKeyPair`](../README.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Source

[packages/matter.js/src/crypto/Key.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L174)

***

### key\_ops?

> `optional` **key\_ops**: `string`[]

#### Overrides

`JsonWebKey.key_ops`

#### Source

[packages/matter.js/src/crypto/Key.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L120)

***

### kty?

> `optional` **kty**: [`KeyType`](../enumerations/KeyType.md)

#### Overrides

`JsonWebKey.kty`

#### Source

[packages/matter.js/src/crypto/Key.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L121)

***

### n?

> `optional` **n**: `string`

#### Overrides

`JsonWebKey.n`

#### Source

[packages/matter.js/src/crypto/Key.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L122)

***

### operations?

> `optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Source

[packages/matter.js/src/crypto/Key.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L99)

***

### oth?

> `optional` **oth**: `RsaOtherPrimesInfo`[]

#### Overrides

`JsonWebKey.oth`

#### Source

[packages/matter.js/src/crypto/Key.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L123)

***

### p?

> `optional` **p**: `string`

#### Overrides

`JsonWebKey.p`

#### Source

[packages/matter.js/src/crypto/Key.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L124)

***

### pkcs8?

> `optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Source

[packages/matter.js/src/crypto/Key.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L157)

***

### private?

> `optional` **private**: `string`

The private key, alias for JWK "d" field.

#### Source

[packages/matter.js/src/crypto/Key.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L104)

***

### privateBits?

> `optional` **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Source

[packages/matter.js/src/crypto/Key.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L135)

***

### privateKey

> **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Source

[packages/matter.js/src/crypto/Key.ts:184](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L184)

***

### publicBits?

> `optional` **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Source

[packages/matter.js/src/crypto/Key.ts:168](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L168)

***

### publicKey

> **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Source

[packages/matter.js/src/crypto/Key.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L179)

***

### q?

> `optional` **q**: `string`

#### Overrides

`JsonWebKey.q`

#### Source

[packages/matter.js/src/crypto/Key.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L125)

***

### qi?

> `optional` **qi**: `string`

#### Overrides

`JsonWebKey.qi`

#### Source

[packages/matter.js/src/crypto/Key.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L126)

***

### sec1?

> `optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Source

[packages/matter.js/src/crypto/Key.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L152)

***

### spki?

> `optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Source

[packages/matter.js/src/crypto/Key.ts:162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L162)

***

### type?

> `optional` **type**: [`KeyType`](../enumerations/KeyType.md)

The key type, alias for JWK "kty" field.

#### Source

[packages/matter.js/src/crypto/Key.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L94)

***

### use?

> `optional` **use**: `string`

#### Overrides

`JsonWebKey.use`

#### Source

[packages/matter.js/src/crypto/Key.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L127)

***

### x?

> `optional` **x**: `string`

#### Overrides

`JsonWebKey.x`

#### Source

[packages/matter.js/src/crypto/Key.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L128)

***

### xBits?

> `optional` **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Source

[packages/matter.js/src/crypto/Key.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L141)

***

### y?

> `optional` **y**: `string`

#### Overrides

`JsonWebKey.y`

#### Source

[packages/matter.js/src/crypto/Key.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L129)

***

### yBits?

> `optional` **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Source

[packages/matter.js/src/crypto/Key.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Key.ts#L147)
