[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / PrivateKey

# Interface: PrivateKey

[crypto/export](../modules/crypto_export.md).PrivateKey

EC key with extractable private fields.

## Hierarchy

- [`PublicKey`](../modules/crypto_export.md#publickey)

  ↳ **`PrivateKey`**

## Table of contents

### Constructors

- [constructor](crypto_export.PrivateKey.md#constructor)

### Properties

- [alg](crypto_export.PrivateKey.md#alg)
- [algorithm](crypto_export.PrivateKey.md#algorithm)
- [crv](crypto_export.PrivateKey.md#crv)
- [curve](crypto_export.PrivateKey.md#curve)
- [d](crypto_export.PrivateKey.md#d)
- [dp](crypto_export.PrivateKey.md#dp)
- [dq](crypto_export.PrivateKey.md#dq)
- [e](crypto_export.PrivateKey.md#e)
- [ext](crypto_export.PrivateKey.md#ext)
- [extractable](crypto_export.PrivateKey.md#extractable)
- [k](crypto_export.PrivateKey.md#k)
- [keyPair](crypto_export.PrivateKey.md#keypair)
- [keyPairBits](crypto_export.PrivateKey.md#keypairbits)
- [key\_ops](crypto_export.PrivateKey.md#key_ops)
- [kty](crypto_export.PrivateKey.md#kty)
- [n](crypto_export.PrivateKey.md#n)
- [operations](crypto_export.PrivateKey.md#operations)
- [oth](crypto_export.PrivateKey.md#oth)
- [p](crypto_export.PrivateKey.md#p)
- [pkcs8](crypto_export.PrivateKey.md#pkcs8)
- [private](crypto_export.PrivateKey.md#private)
- [privateBits](crypto_export.PrivateKey.md#privatebits)
- [privateKey](crypto_export.PrivateKey.md#privatekey)
- [publicBits](crypto_export.PrivateKey.md#publicbits)
- [publicKey](crypto_export.PrivateKey.md#publickey)
- [q](crypto_export.PrivateKey.md#q)
- [qi](crypto_export.PrivateKey.md#qi)
- [sec1](crypto_export.PrivateKey.md#sec1)
- [spki](crypto_export.PrivateKey.md#spki)
- [type](crypto_export.PrivateKey.md#type)
- [use](crypto_export.PrivateKey.md#use)
- [x](crypto_export.PrivateKey.md#x)
- [xBits](crypto_export.PrivateKey.md#xbits)
- [y](crypto_export.PrivateKey.md#y)
- [yBits](crypto_export.PrivateKey.md#ybits)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

PublicKey.constructor

## Properties

### alg

• `Optional` **alg**: `string`

#### Inherited from

PublicKey.alg

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:57

___

### algorithm

• `Optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Inherited from

PublicKey.algorithm

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:35

___

### crv

• `Optional` **crv**: [`CurveType`](../enums/crypto_export.CurveType.md)

#### Inherited from

PublicKey.crv

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:58

___

### curve

• **curve**: [`CurveType`](../enums/crypto_export.CurveType.md)

#### Inherited from

PublicKey.curve

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:130

___

### d

• **d**: `string`

#### Overrides

PublicKey.d

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:142

___

### dp

• `Optional` **dp**: `string`

#### Inherited from

PublicKey.dp

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:60

___

### dq

• `Optional` **dq**: `string`

#### Inherited from

PublicKey.dq

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:61

___

### e

• `Optional` **e**: `string`

#### Inherited from

PublicKey.e

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:62

___

### ext

• `Optional` **ext**: `boolean`

#### Inherited from

PublicKey.ext

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:63

___

### extractable

• `Optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Inherited from

PublicKey.extractable

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:56

___

### k

• `Optional` **k**: `string`

#### Inherited from

PublicKey.k

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:64

___

### keyPair

• **keyPair**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

#### Overrides

PublicKey.keyPair

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:145

___

### keyPairBits

• **keyPairBits**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

#### Overrides

PublicKey.keyPairBits

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:146

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

#### Inherited from

PublicKey.key\_ops

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:65

___

### kty

• `Optional` **kty**: [`KeyType`](../enums/crypto_export.KeyType.md)

#### Inherited from

PublicKey.kty

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:66

___

### n

• `Optional` **n**: `string`

#### Inherited from

PublicKey.n

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:67

___

### operations

• `Optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Inherited from

PublicKey.operations

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:47

___

### oth

• `Optional` **oth**: `RsaOtherPrimesInfo`[]

#### Inherited from

PublicKey.oth

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:68

___

### p

• `Optional` **p**: `string`

#### Inherited from

PublicKey.p

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:69

___

### pkcs8

• `Optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Inherited from

PublicKey.pkcs8

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:97

___

### private

• **private**: `string`

#### Overrides

PublicKey.private

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:141

___

### privateBits

• **privateBits**: `Uint8Array`

#### Overrides

PublicKey.privateBits

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:143

___

### privateKey

• **privateKey**: `Uint8Array`

#### Overrides

PublicKey.privateKey

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:144

___

### publicBits

• **publicBits**: `Uint8Array`

#### Inherited from

PublicKey.publicBits

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:135

___

### publicKey

• **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Inherited from

PublicKey.publicKey

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:115

___

### q

• `Optional` **q**: `string`

#### Inherited from

PublicKey.q

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:70

___

### qi

• `Optional` **qi**: `string`

#### Inherited from

PublicKey.qi

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:71

___

### sec1

• `Optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Inherited from

PublicKey.sec1

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:93

___

### spki

• `Optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Inherited from

PublicKey.spki

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:101

___

### type

• **type**: [`EC`](../enums/crypto_export.KeyType.md#ec)

#### Inherited from

PublicKey.type

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:129

___

### use

• `Optional` **use**: `string`

#### Inherited from

PublicKey.use

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:72

___

### x

• **x**: `string`

#### Inherited from

PublicKey.x

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:131

___

### xBits

• **xBits**: `Uint8Array`

#### Inherited from

PublicKey.xBits

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:133

___

### y

• **y**: `string`

#### Inherited from

PublicKey.y

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:132

___

### yBits

• **yBits**: `Uint8Array`

#### Inherited from

PublicKey.yBits

#### Defined in

packages/matter.js/dist/cjs/crypto/Key.d.ts:134
