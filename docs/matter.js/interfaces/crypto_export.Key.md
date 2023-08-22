[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / Key

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

[packages/matter.js/src/crypto/Key.ts:107](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L107)

___

### algorithm

• `Optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:79](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L79)

___

### crv

• `Optional` **crv**: [`CurveType`](../enums/crypto_export.CurveType.md)

#### Overrides

JsonWebKey.crv

#### Defined in

[packages/matter.js/src/crypto/Key.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L108)

___

### curve

• `Optional` **curve**: [`CurveType`](../enums/crypto_export.CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:84](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L84)

___

### d

• `Optional` **d**: `string`

#### Overrides

JsonWebKey.d

#### Defined in

[packages/matter.js/src/crypto/Key.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L109)

___

### dp

• `Optional` **dp**: `string`

#### Overrides

JsonWebKey.dp

#### Defined in

[packages/matter.js/src/crypto/Key.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L110)

___

### dq

• `Optional` **dq**: `string`

#### Overrides

JsonWebKey.dq

#### Defined in

[packages/matter.js/src/crypto/Key.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L111)

___

### e

• `Optional` **e**: `string`

#### Overrides

JsonWebKey.e

#### Defined in

[packages/matter.js/src/crypto/Key.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L112)

___

### ext

• `Optional` **ext**: `boolean`

#### Overrides

JsonWebKey.ext

#### Defined in

[packages/matter.js/src/crypto/Key.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L113)

___

### extractable

• `Optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L105)

___

### k

• `Optional` **k**: `string`

#### Overrides

JsonWebKey.k

#### Defined in

[packages/matter.js/src/crypto/Key.ts:114](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L114)

___

### keyPair

• **keyPair**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:184](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L184)

___

### keyPairBits

• `Optional` **keyPairBits**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:169](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L169)

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

#### Overrides

JsonWebKey.key\_ops

#### Defined in

[packages/matter.js/src/crypto/Key.ts:115](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L115)

___

### kty

• `Optional` **kty**: [`KeyType`](../enums/crypto_export.KeyType.md)

#### Overrides

JsonWebKey.kty

#### Defined in

[packages/matter.js/src/crypto/Key.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L116)

___

### n

• `Optional` **n**: `string`

#### Overrides

JsonWebKey.n

#### Defined in

[packages/matter.js/src/crypto/Key.ts:117](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L117)

___

### operations

• `Optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:94](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L94)

___

### oth

• `Optional` **oth**: `RsaOtherPrimesInfo`[]

#### Overrides

JsonWebKey.oth

#### Defined in

[packages/matter.js/src/crypto/Key.ts:118](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L118)

___

### p

• `Optional` **p**: `string`

#### Overrides

JsonWebKey.p

#### Defined in

[packages/matter.js/src/crypto/Key.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L119)

___

### pkcs8

• `Optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:152](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L152)

___

### private

• `Optional` **private**: `string`

The private key, alias for JWK "d" field.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L99)

___

### privateBits

• `Optional` **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:130](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L130)

___

### privateKey

• **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:179](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L179)

___

### publicBits

• `Optional` **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:163](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L163)

___

### publicKey

• **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:174](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L174)

___

### q

• `Optional` **q**: `string`

#### Overrides

JsonWebKey.q

#### Defined in

[packages/matter.js/src/crypto/Key.ts:120](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L120)

___

### qi

• `Optional` **qi**: `string`

#### Overrides

JsonWebKey.qi

#### Defined in

[packages/matter.js/src/crypto/Key.ts:121](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L121)

___

### sec1

• `Optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:147](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L147)

___

### spki

• `Optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:157](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L157)

___

### type

• `Optional` **type**: [`KeyType`](../enums/crypto_export.KeyType.md)

The key type, alias for JWK "kty" field.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L89)

___

### use

• `Optional` **use**: `string`

#### Overrides

JsonWebKey.use

#### Defined in

[packages/matter.js/src/crypto/Key.ts:122](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L122)

___

### x

• `Optional` **x**: `string`

#### Overrides

JsonWebKey.x

#### Defined in

[packages/matter.js/src/crypto/Key.ts:123](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L123)

___

### xBits

• `Optional` **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:136](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L136)

___

### y

• `Optional` **y**: `string`

#### Overrides

JsonWebKey.y

#### Defined in

[packages/matter.js/src/crypto/Key.ts:124](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L124)

___

### yBits

• `Optional` **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Defined in

[packages/matter.js/src/crypto/Key.ts:142](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L142)
