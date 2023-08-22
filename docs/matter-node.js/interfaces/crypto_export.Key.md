[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / Key

# Interface: Key

[crypto/export](../modules/crypto_export.md).Key

Represents a cryptographic key.

Models keys as JWK.  Advantages of this format:

  - Standard
  - Widely supported
  - Fully models relevant key types
  - Where not supported, extracting constituent parts for translation is trivial

## Hierarchy

- `JsonWebKey`

  ↳ **`Key`**

## Table of contents

### Constructors

- [constructor](crypto_export.Key.md#constructor)

### Properties

- [alg](crypto_export.Key.md#alg)
- [algorithm](crypto_export.Key.md#algorithm)
- [crv](crypto_export.Key.md#crv)
- [curve](crypto_export.Key.md#curve)
- [d](crypto_export.Key.md#d)
- [dp](crypto_export.Key.md#dp)
- [dq](crypto_export.Key.md#dq)
- [e](crypto_export.Key.md#e)
- [ext](crypto_export.Key.md#ext)
- [extractable](crypto_export.Key.md#extractable)
- [k](crypto_export.Key.md#k)
- [keyPair](crypto_export.Key.md#keypair)
- [keyPairBits](crypto_export.Key.md#keypairbits)
- [key\_ops](crypto_export.Key.md#key_ops)
- [kty](crypto_export.Key.md#kty)
- [n](crypto_export.Key.md#n)
- [operations](crypto_export.Key.md#operations)
- [oth](crypto_export.Key.md#oth)
- [p](crypto_export.Key.md#p)
- [pkcs8](crypto_export.Key.md#pkcs8)
- [private](crypto_export.Key.md#private)
- [privateBits](crypto_export.Key.md#privatebits)
- [privateKey](crypto_export.Key.md#privatekey)
- [publicBits](crypto_export.Key.md#publicbits)
- [publicKey](crypto_export.Key.md#publickey)
- [q](crypto_export.Key.md#q)
- [qi](crypto_export.Key.md#qi)
- [sec1](crypto_export.Key.md#sec1)
- [spki](crypto_export.Key.md#spki)
- [type](crypto_export.Key.md#type)
- [use](crypto_export.Key.md#use)
- [x](crypto_export.Key.md#x)
- [xBits](crypto_export.Key.md#xbits)
- [y](crypto_export.Key.md#y)
- [yBits](crypto_export.Key.md#ybits)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

JsonWebKey.constructor

## Properties

### alg

• `Optional` **alg**: `string`

#### Overrides

JsonWebKey.alg

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:57

___

### algorithm

• `Optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:35

___

### crv

• `Optional` **crv**: [`CurveType`](../enums/crypto_export.CurveType.md)

#### Overrides

JsonWebKey.crv

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:58

___

### curve

• `Optional` **curve**: [`CurveType`](../enums/crypto_export.CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:39

___

### d

• `Optional` **d**: `string`

#### Overrides

JsonWebKey.d

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:59

___

### dp

• `Optional` **dp**: `string`

#### Overrides

JsonWebKey.dp

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:60

___

### dq

• `Optional` **dq**: `string`

#### Overrides

JsonWebKey.dq

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:61

___

### e

• `Optional` **e**: `string`

#### Overrides

JsonWebKey.e

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:62

___

### ext

• `Optional` **ext**: `boolean`

#### Overrides

JsonWebKey.ext

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:63

___

### extractable

• `Optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:56

___

### k

• `Optional` **k**: `string`

#### Overrides

JsonWebKey.k

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:64

___

### keyPair

• **keyPair**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:123

___

### keyPairBits

• `Optional` **keyPairBits**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:111

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

#### Overrides

JsonWebKey.key\_ops

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:65

___

### kty

• `Optional` **kty**: [`KeyType`](../enums/crypto_export.KeyType.md)

#### Overrides

JsonWebKey.kty

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:66

___

### n

• `Optional` **n**: `string`

#### Overrides

JsonWebKey.n

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:67

___

### operations

• `Optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:47

___

### oth

• `Optional` **oth**: `RsaOtherPrimesInfo`[]

#### Overrides

JsonWebKey.oth

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:68

___

### p

• `Optional` **p**: `string`

#### Overrides

JsonWebKey.p

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:69

___

### pkcs8

• `Optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:97

___

### private

• `Optional` **private**: `string`

The private key, alias for JWK "d" field.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:51

___

### privateBits

• `Optional` **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:79

___

### privateKey

• **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:119

___

### publicBits

• `Optional` **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:106

___

### publicKey

• **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:115

___

### q

• `Optional` **q**: `string`

#### Overrides

JsonWebKey.q

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:70

___

### qi

• `Optional` **qi**: `string`

#### Overrides

JsonWebKey.qi

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:71

___

### sec1

• `Optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:93

___

### spki

• `Optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:101

___

### type

• `Optional` **type**: [`KeyType`](../enums/crypto_export.KeyType.md)

The key type, alias for JWK "kty" field.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:43

___

### use

• `Optional` **use**: `string`

#### Overrides

JsonWebKey.use

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:72

___

### x

• `Optional` **x**: `string`

#### Overrides

JsonWebKey.x

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:73

___

### xBits

• `Optional` **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:84

___

### y

• `Optional` **y**: `string`

#### Overrides

JsonWebKey.y

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:74

___

### yBits

• `Optional` **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:89
