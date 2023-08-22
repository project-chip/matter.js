[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Key

# Interface: Key

[<internal>](../modules/internal_.md).Key

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

- [constructor](internal_.Key.md#constructor)

### Properties

- [alg](internal_.Key.md#alg)
- [algorithm](internal_.Key.md#algorithm)
- [crv](internal_.Key.md#crv)
- [curve](internal_.Key.md#curve)
- [d](internal_.Key.md#d)
- [dp](internal_.Key.md#dp)
- [dq](internal_.Key.md#dq)
- [e](internal_.Key.md#e)
- [ext](internal_.Key.md#ext)
- [extractable](internal_.Key.md#extractable)
- [k](internal_.Key.md#k)
- [keyPair](internal_.Key.md#keypair)
- [keyPairBits](internal_.Key.md#keypairbits)
- [key\_ops](internal_.Key.md#key_ops)
- [kty](internal_.Key.md#kty)
- [n](internal_.Key.md#n)
- [operations](internal_.Key.md#operations)
- [oth](internal_.Key.md#oth)
- [p](internal_.Key.md#p)
- [pkcs8](internal_.Key.md#pkcs8)
- [private](internal_.Key.md#private)
- [privateBits](internal_.Key.md#privatebits)
- [privateKey](internal_.Key.md#privatekey)
- [publicBits](internal_.Key.md#publicbits)
- [publicKey](internal_.Key.md#publickey)
- [q](internal_.Key.md#q)
- [qi](internal_.Key.md#qi)
- [sec1](internal_.Key.md#sec1)
- [spki](internal_.Key.md#spki)
- [type](internal_.Key.md#type)
- [use](internal_.Key.md#use)
- [x](internal_.Key.md#x)
- [xBits](internal_.Key.md#xbits)
- [y](internal_.Key.md#y)
- [yBits](internal_.Key.md#ybits)

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

matter.js/dist/cjs/crypto/Key.d.ts:57

___

### algorithm

• `Optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:35

___

### crv

• `Optional` **crv**: [`CurveType`](../enums/internal_.CurveType.md)

#### Overrides

JsonWebKey.crv

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:58

___

### curve

• `Optional` **curve**: [`CurveType`](../enums/internal_.CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:39

___

### d

• `Optional` **d**: `string`

#### Overrides

JsonWebKey.d

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:59

___

### dp

• `Optional` **dp**: `string`

#### Overrides

JsonWebKey.dp

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:60

___

### dq

• `Optional` **dq**: `string`

#### Overrides

JsonWebKey.dq

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:61

___

### e

• `Optional` **e**: `string`

#### Overrides

JsonWebKey.e

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:62

___

### ext

• `Optional` **ext**: `boolean`

#### Overrides

JsonWebKey.ext

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:63

___

### extractable

• `Optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:56

___

### k

• `Optional` **k**: `string`

#### Overrides

JsonWebKey.k

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:64

___

### keyPair

• **keyPair**: [`BinaryKeyPair`](../modules/internal_.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:123

___

### keyPairBits

• `Optional` **keyPairBits**: [`BinaryKeyPair`](../modules/internal_.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:111

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

#### Overrides

JsonWebKey.key\_ops

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:65

___

### kty

• `Optional` **kty**: [`KeyType`](../enums/internal_.KeyType.md)

#### Overrides

JsonWebKey.kty

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:66

___

### n

• `Optional` **n**: `string`

#### Overrides

JsonWebKey.n

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:67

___

### operations

• `Optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:47

___

### oth

• `Optional` **oth**: `RsaOtherPrimesInfo`[]

#### Overrides

JsonWebKey.oth

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:68

___

### p

• `Optional` **p**: `string`

#### Overrides

JsonWebKey.p

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:69

___

### pkcs8

• `Optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:97

___

### private

• `Optional` **private**: `string`

The private key, alias for JWK "d" field.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:51

___

### privateBits

• `Optional` **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:79

___

### privateKey

• **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:119

___

### publicBits

• `Optional` **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:106

___

### publicKey

• **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:115

___

### q

• `Optional` **q**: `string`

#### Overrides

JsonWebKey.q

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:70

___

### qi

• `Optional` **qi**: `string`

#### Overrides

JsonWebKey.qi

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:71

___

### sec1

• `Optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:93

___

### spki

• `Optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:101

___

### type

• `Optional` **type**: [`KeyType`](../enums/internal_.KeyType.md)

The key type, alias for JWK "kty" field.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:43

___

### use

• `Optional` **use**: `string`

#### Overrides

JsonWebKey.use

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:72

___

### x

• `Optional` **x**: `string`

#### Overrides

JsonWebKey.x

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:73

___

### xBits

• `Optional` **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:84

___

### y

• `Optional` **y**: `string`

#### Overrides

JsonWebKey.y

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:74

___

### yBits

• `Optional` **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Defined in

matter.js/dist/cjs/crypto/Key.d.ts:89
