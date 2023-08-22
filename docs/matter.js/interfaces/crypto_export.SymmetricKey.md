[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / SymmetricKey

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

[packages/matter.js/src/crypto/Key.ts:107](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L107)

___

### algorithm

• `Optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Inherited from

Key.algorithm

#### Defined in

[packages/matter.js/src/crypto/Key.ts:79](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L79)

___

### crv

• `Optional` **crv**: [`CurveType`](../enums/crypto_export.CurveType.md)

#### Inherited from

Key.crv

#### Defined in

[packages/matter.js/src/crypto/Key.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L108)

___

### curve

• `Optional` **curve**: [`CurveType`](../enums/crypto_export.CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Inherited from

Key.curve

#### Defined in

[packages/matter.js/src/crypto/Key.ts:84](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L84)

___

### d

• **d**: `string`

#### Overrides

Key.d

#### Defined in

[packages/matter.js/src/crypto/Key.ts:218](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L218)

___

### dp

• `Optional` **dp**: `string`

#### Inherited from

Key.dp

#### Defined in

[packages/matter.js/src/crypto/Key.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L110)

___

### dq

• `Optional` **dq**: `string`

#### Inherited from

Key.dq

#### Defined in

[packages/matter.js/src/crypto/Key.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L111)

___

### e

• `Optional` **e**: `string`

#### Inherited from

Key.e

#### Defined in

[packages/matter.js/src/crypto/Key.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L112)

___

### ext

• `Optional` **ext**: `boolean`

#### Inherited from

Key.ext

#### Defined in

[packages/matter.js/src/crypto/Key.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L113)

___

### extractable

• `Optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Inherited from

Key.extractable

#### Defined in

[packages/matter.js/src/crypto/Key.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L105)

___

### k

• `Optional` **k**: `string`

#### Inherited from

Key.k

#### Defined in

[packages/matter.js/src/crypto/Key.ts:114](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L114)

___

### keyPair

• **keyPair**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Inherited from

Key.keyPair

#### Defined in

[packages/matter.js/src/crypto/Key.ts:184](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L184)

___

### keyPairBits

• `Optional` **keyPairBits**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Inherited from

Key.keyPairBits

#### Defined in

[packages/matter.js/src/crypto/Key.ts:169](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L169)

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

#### Inherited from

Key.key\_ops

#### Defined in

[packages/matter.js/src/crypto/Key.ts:115](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L115)

___

### kty

• `Optional` **kty**: [`KeyType`](../enums/crypto_export.KeyType.md)

#### Inherited from

Key.kty

#### Defined in

[packages/matter.js/src/crypto/Key.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L116)

___

### n

• `Optional` **n**: `string`

#### Inherited from

Key.n

#### Defined in

[packages/matter.js/src/crypto/Key.ts:117](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L117)

___

### operations

• `Optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Inherited from

Key.operations

#### Defined in

[packages/matter.js/src/crypto/Key.ts:94](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L94)

___

### oth

• `Optional` **oth**: `RsaOtherPrimesInfo`[]

#### Inherited from

Key.oth

#### Defined in

[packages/matter.js/src/crypto/Key.ts:118](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L118)

___

### p

• `Optional` **p**: `string`

#### Inherited from

Key.p

#### Defined in

[packages/matter.js/src/crypto/Key.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L119)

___

### pkcs8

• `Optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Inherited from

Key.pkcs8

#### Defined in

[packages/matter.js/src/crypto/Key.ts:152](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L152)

___

### private

• **private**: `string`

#### Overrides

Key.private

#### Defined in

[packages/matter.js/src/crypto/Key.ts:217](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L217)

___

### privateBits

• `Optional` **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Inherited from

Key.privateBits

#### Defined in

[packages/matter.js/src/crypto/Key.ts:130](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L130)

___

### privateKey

• **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Inherited from

Key.privateKey

#### Defined in

[packages/matter.js/src/crypto/Key.ts:179](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L179)

___

### publicBits

• `Optional` **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Inherited from

Key.publicBits

#### Defined in

[packages/matter.js/src/crypto/Key.ts:163](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L163)

___

### publicKey

• **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Inherited from

Key.publicKey

#### Defined in

[packages/matter.js/src/crypto/Key.ts:174](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L174)

___

### q

• `Optional` **q**: `string`

#### Inherited from

Key.q

#### Defined in

[packages/matter.js/src/crypto/Key.ts:120](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L120)

___

### qi

• `Optional` **qi**: `string`

#### Inherited from

Key.qi

#### Defined in

[packages/matter.js/src/crypto/Key.ts:121](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L121)

___

### sec1

• `Optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Inherited from

Key.sec1

#### Defined in

[packages/matter.js/src/crypto/Key.ts:147](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L147)

___

### spki

• `Optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Inherited from

Key.spki

#### Defined in

[packages/matter.js/src/crypto/Key.ts:157](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L157)

___

### type

• **type**: [`oct`](../enums/crypto_export.KeyType.md#oct)

#### Overrides

Key.type

#### Defined in

[packages/matter.js/src/crypto/Key.ts:216](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L216)

___

### use

• `Optional` **use**: `string`

#### Inherited from

Key.use

#### Defined in

[packages/matter.js/src/crypto/Key.ts:122](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L122)

___

### x

• `Optional` **x**: `string`

#### Inherited from

Key.x

#### Defined in

[packages/matter.js/src/crypto/Key.ts:123](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L123)

___

### xBits

• `Optional` **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Inherited from

Key.xBits

#### Defined in

[packages/matter.js/src/crypto/Key.ts:136](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L136)

___

### y

• `Optional` **y**: `string`

#### Inherited from

Key.y

#### Defined in

[packages/matter.js/src/crypto/Key.ts:124](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L124)

___

### yBits

• `Optional` **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Inherited from

Key.yBits

#### Defined in

[packages/matter.js/src/crypto/Key.ts:142](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L142)
