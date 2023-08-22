[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / PublicKey

# Interface: PublicKey

[crypto/export](../modules/crypto_export.md).PublicKey

EC key without private fields.

## Hierarchy

- [`Key`](../modules/crypto_export.md#key)

  ↳ **`PublicKey`**

## Table of contents

### Constructors

- [constructor](crypto_export.PublicKey.md#constructor)

### Properties

- [alg](crypto_export.PublicKey.md#alg)
- [algorithm](crypto_export.PublicKey.md#algorithm)
- [crv](crypto_export.PublicKey.md#crv)
- [curve](crypto_export.PublicKey.md#curve)
- [d](crypto_export.PublicKey.md#d)
- [dp](crypto_export.PublicKey.md#dp)
- [dq](crypto_export.PublicKey.md#dq)
- [e](crypto_export.PublicKey.md#e)
- [ext](crypto_export.PublicKey.md#ext)
- [extractable](crypto_export.PublicKey.md#extractable)
- [k](crypto_export.PublicKey.md#k)
- [keyPair](crypto_export.PublicKey.md#keypair)
- [keyPairBits](crypto_export.PublicKey.md#keypairbits)
- [key\_ops](crypto_export.PublicKey.md#key_ops)
- [kty](crypto_export.PublicKey.md#kty)
- [n](crypto_export.PublicKey.md#n)
- [operations](crypto_export.PublicKey.md#operations)
- [oth](crypto_export.PublicKey.md#oth)
- [p](crypto_export.PublicKey.md#p)
- [pkcs8](crypto_export.PublicKey.md#pkcs8)
- [private](crypto_export.PublicKey.md#private)
- [privateBits](crypto_export.PublicKey.md#privatebits)
- [privateKey](crypto_export.PublicKey.md#privatekey)
- [publicBits](crypto_export.PublicKey.md#publicbits)
- [publicKey](crypto_export.PublicKey.md#publickey)
- [q](crypto_export.PublicKey.md#q)
- [qi](crypto_export.PublicKey.md#qi)
- [sec1](crypto_export.PublicKey.md#sec1)
- [spki](crypto_export.PublicKey.md#spki)
- [type](crypto_export.PublicKey.md#type)
- [use](crypto_export.PublicKey.md#use)
- [x](crypto_export.PublicKey.md#x)
- [xBits](crypto_export.PublicKey.md#xbits)
- [y](crypto_export.PublicKey.md#y)
- [yBits](crypto_export.PublicKey.md#ybits)

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

• **curve**: [`CurveType`](../enums/crypto_export.CurveType.md)

#### Overrides

Key.curve

#### Defined in

[packages/matter.js/src/crypto/Key.ts:192](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L192)

___

### d

• `Optional` **d**: `string`

#### Inherited from

Key.d

#### Defined in

[packages/matter.js/src/crypto/Key.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L109)

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

• `Optional` **private**: `string`

The private key, alias for JWK "d" field.

#### Inherited from

Key.private

#### Defined in

[packages/matter.js/src/crypto/Key.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L99)

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

• **publicBits**: `Uint8Array`

#### Overrides

Key.publicBits

#### Defined in

[packages/matter.js/src/crypto/Key.ts:197](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L197)

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

• **type**: [`EC`](../enums/crypto_export.KeyType.md#ec)

#### Overrides

Key.type

#### Defined in

[packages/matter.js/src/crypto/Key.ts:191](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L191)

___

### use

• `Optional` **use**: `string`

#### Inherited from

Key.use

#### Defined in

[packages/matter.js/src/crypto/Key.ts:122](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L122)

___

### x

• **x**: `string`

#### Overrides

Key.x

#### Defined in

[packages/matter.js/src/crypto/Key.ts:193](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L193)

___

### xBits

• **xBits**: `Uint8Array`

#### Overrides

Key.xBits

#### Defined in

[packages/matter.js/src/crypto/Key.ts:195](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L195)

___

### y

• **y**: `string`

#### Overrides

Key.y

#### Defined in

[packages/matter.js/src/crypto/Key.ts:194](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L194)

___

### yBits

• **yBits**: `Uint8Array`

#### Overrides

Key.yBits

#### Defined in

[packages/matter.js/src/crypto/Key.ts:196](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Key.ts#L196)
