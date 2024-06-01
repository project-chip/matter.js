[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [crypto/export](../README.md) / Key

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

packages/matter.js/dist/esm/crypto/Key.d.ts:57

***

### algorithm?

> `optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:35

***

### crv?

> `optional` **crv**: [`CurveType`](../enumerations/CurveType.md)

#### Overrides

`JsonWebKey.crv`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:58

***

### curve?

> `optional` **curve**: [`CurveType`](../enumerations/CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:39

***

### d?

> `optional` **d**: `string`

#### Overrides

`JsonWebKey.d`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:59

***

### dp?

> `optional` **dp**: `string`

#### Overrides

`JsonWebKey.dp`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:60

***

### dq?

> `optional` **dq**: `string`

#### Overrides

`JsonWebKey.dq`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:61

***

### e?

> `optional` **e**: `string`

#### Overrides

`JsonWebKey.e`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:62

***

### ext?

> `optional` **ext**: `boolean`

#### Overrides

`JsonWebKey.ext`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:63

***

### extractable?

> `optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:56

***

### k?

> `optional` **k**: `string`

#### Overrides

`JsonWebKey.k`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:64

***

### keyPair

> **keyPair**: [`BinaryKeyPair`](../README.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:123

***

### keyPairBits?

> `optional` **keyPairBits**: [`BinaryKeyPair`](../README.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:111

***

### key\_ops?

> `optional` **key\_ops**: `string`[]

#### Overrides

`JsonWebKey.key_ops`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:65

***

### kty?

> `optional` **kty**: [`KeyType`](../enumerations/KeyType.md)

#### Overrides

`JsonWebKey.kty`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:66

***

### n?

> `optional` **n**: `string`

#### Overrides

`JsonWebKey.n`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:67

***

### operations?

> `optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:47

***

### oth?

> `optional` **oth**: `RsaOtherPrimesInfo`[]

#### Overrides

`JsonWebKey.oth`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:68

***

### p?

> `optional` **p**: `string`

#### Overrides

`JsonWebKey.p`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:69

***

### pkcs8?

> `optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:97

***

### private?

> `optional` **private**: `string`

The private key, alias for JWK "d" field.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:51

***

### privateBits?

> `optional` **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:79

***

### privateKey

> **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:119

***

### publicBits?

> `optional` **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:106

***

### publicKey

> **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:115

***

### q?

> `optional` **q**: `string`

#### Overrides

`JsonWebKey.q`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:70

***

### qi?

> `optional` **qi**: `string`

#### Overrides

`JsonWebKey.qi`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:71

***

### sec1?

> `optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:93

***

### spki?

> `optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:101

***

### type?

> `optional` **type**: [`KeyType`](../enumerations/KeyType.md)

The key type, alias for JWK "kty" field.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:43

***

### use?

> `optional` **use**: `string`

#### Overrides

`JsonWebKey.use`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:72

***

### x?

> `optional` **x**: `string`

#### Overrides

`JsonWebKey.x`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:73

***

### xBits?

> `optional` **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:84

***

### y?

> `optional` **y**: `string`

#### Overrides

`JsonWebKey.y`

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:74

***

### yBits?

> `optional` **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:89
