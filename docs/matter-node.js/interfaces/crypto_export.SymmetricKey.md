[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / SymmetricKey

# Interface: SymmetricKey

[crypto/export](../modules/crypto_export.md).SymmetricKey

Symmetric key.

## Hierarchy

- [`Key`](../modules/crypto_export.md#key)

  ↳ **`SymmetricKey`**

## Table of contents

### Constructors

- [constructor](crypto_export.SymmetricKey.md#constructor)

### Properties

- [alg](crypto_export.SymmetricKey.md#alg)
- [algorithm](crypto_export.SymmetricKey.md#algorithm)
- [crv](crypto_export.SymmetricKey.md#crv)
- [curve](crypto_export.SymmetricKey.md#curve)
- [d](crypto_export.SymmetricKey.md#d)
- [dp](crypto_export.SymmetricKey.md#dp)
- [dq](crypto_export.SymmetricKey.md#dq)
- [e](crypto_export.SymmetricKey.md#e)
- [ext](crypto_export.SymmetricKey.md#ext)
- [extractable](crypto_export.SymmetricKey.md#extractable)
- [k](crypto_export.SymmetricKey.md#k)
- [keyPair](crypto_export.SymmetricKey.md#keypair)
- [keyPairBits](crypto_export.SymmetricKey.md#keypairbits)
- [key\_ops](crypto_export.SymmetricKey.md#key_ops)
- [kty](crypto_export.SymmetricKey.md#kty)
- [n](crypto_export.SymmetricKey.md#n)
- [operations](crypto_export.SymmetricKey.md#operations)
- [oth](crypto_export.SymmetricKey.md#oth)
- [p](crypto_export.SymmetricKey.md#p)
- [pkcs8](crypto_export.SymmetricKey.md#pkcs8)
- [private](crypto_export.SymmetricKey.md#private)
- [privateBits](crypto_export.SymmetricKey.md#privatebits)
- [privateKey](crypto_export.SymmetricKey.md#privatekey)
- [publicBits](crypto_export.SymmetricKey.md#publicbits)
- [publicKey](crypto_export.SymmetricKey.md#publickey)
- [q](crypto_export.SymmetricKey.md#q)
- [qi](crypto_export.SymmetricKey.md#qi)
- [sec1](crypto_export.SymmetricKey.md#sec1)
- [spki](crypto_export.SymmetricKey.md#spki)
- [type](crypto_export.SymmetricKey.md#type)
- [use](crypto_export.SymmetricKey.md#use)
- [x](crypto_export.SymmetricKey.md#x)
- [xBits](crypto_export.SymmetricKey.md#xbits)
- [y](crypto_export.SymmetricKey.md#y)
- [yBits](crypto_export.SymmetricKey.md#ybits)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

Key.constructor

## Properties

### alg

• `Optional` **alg**: `string`

#### Inherited from

Key.alg

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:57

___

### algorithm

• `Optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Inherited from

Key.algorithm

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:35

___

### crv

• `Optional` **crv**: [`CurveType`](../enums/crypto_export.CurveType.md)

#### Inherited from

Key.crv

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:58

___

### curve

• `Optional` **curve**: [`CurveType`](../enums/crypto_export.CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Inherited from

Key.curve

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:39

___

### d

• **d**: `string`

#### Overrides

Key.d

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:154

___

### dp

• `Optional` **dp**: `string`

#### Inherited from

Key.dp

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:60

___

### dq

• `Optional` **dq**: `string`

#### Inherited from

Key.dq

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:61

___

### e

• `Optional` **e**: `string`

#### Inherited from

Key.e

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:62

___

### ext

• `Optional` **ext**: `boolean`

#### Inherited from

Key.ext

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:63

___

### extractable

• `Optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Inherited from

Key.extractable

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:56

___

### k

• `Optional` **k**: `string`

#### Inherited from

Key.k

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:64

___

### keyPair

• **keyPair**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Inherited from

Key.keyPair

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:123

___

### keyPairBits

• `Optional` **keyPairBits**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Inherited from

Key.keyPairBits

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:111

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

#### Inherited from

Key.key\_ops

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:65

___

### kty

• `Optional` **kty**: [`KeyType`](../enums/crypto_export.KeyType.md)

#### Inherited from

Key.kty

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:66

___

### n

• `Optional` **n**: `string`

#### Inherited from

Key.n

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:67

___

### operations

• `Optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Inherited from

Key.operations

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:47

___

### oth

• `Optional` **oth**: `RsaOtherPrimesInfo`[]

#### Inherited from

Key.oth

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:68

___

### p

• `Optional` **p**: `string`

#### Inherited from

Key.p

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:69

___

### pkcs8

• `Optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Inherited from

Key.pkcs8

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:97

___

### private

• **private**: `string`

#### Overrides

Key.private

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:153

___

### privateBits

• `Optional` **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Inherited from

Key.privateBits

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:79

___

### privateKey

• **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Inherited from

Key.privateKey

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:119

___

### publicBits

• `Optional` **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Inherited from

Key.publicBits

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:106

___

### publicKey

• **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Inherited from

Key.publicKey

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:115

___

### q

• `Optional` **q**: `string`

#### Inherited from

Key.q

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:70

___

### qi

• `Optional` **qi**: `string`

#### Inherited from

Key.qi

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:71

___

### sec1

• `Optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Inherited from

Key.sec1

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:93

___

### spki

• `Optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Inherited from

Key.spki

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:101

___

### type

• **type**: [`oct`](../enums/crypto_export.KeyType.md#oct)

#### Overrides

Key.type

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:152

___

### use

• `Optional` **use**: `string`

#### Inherited from

Key.use

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:72

___

### x

• `Optional` **x**: `string`

#### Inherited from

Key.x

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:73

___

### xBits

• `Optional` **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Inherited from

Key.xBits

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:84

___

### y

• `Optional` **y**: `string`

#### Inherited from

Key.y

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:74

___

### yBits

• `Optional` **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Inherited from

Key.yBits

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:89
