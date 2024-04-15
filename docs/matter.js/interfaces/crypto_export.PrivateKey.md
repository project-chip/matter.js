[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / PrivateKey

# Interface: PrivateKey

[crypto/export](../modules/crypto_export.md).PrivateKey

EC key with extractable private fields.

## Hierarchy

- [`PublicKey`](crypto_export.PublicKey.md)

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

[PublicKey](crypto_export.PublicKey.md).[constructor](crypto_export.PublicKey.md#constructor)

## Properties

### alg

• `Optional` **alg**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[alg](crypto_export.PublicKey.md#alg)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L112)

___

### algorithm

• `Optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[algorithm](crypto_export.PublicKey.md#algorithm)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L84)

___

### crv

• `Optional` **crv**: [`CurveType`](../enums/crypto_export.CurveType.md)

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[crv](crypto_export.PublicKey.md#crv)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L113)

___

### curve

• **curve**: [`CurveType`](../enums/crypto_export.CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[curve](crypto_export.PublicKey.md#curve)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L197)

___

### d

• **d**: `string`

#### Overrides

[PublicKey](crypto_export.PublicKey.md).[d](crypto_export.PublicKey.md#d)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:210](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L210)

___

### dp

• `Optional` **dp**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[dp](crypto_export.PublicKey.md#dp)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L115)

___

### dq

• `Optional` **dq**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[dq](crypto_export.PublicKey.md#dq)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L116)

___

### e

• `Optional` **e**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[e](crypto_export.PublicKey.md#e)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L117)

___

### ext

• `Optional` **ext**: `boolean`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[ext](crypto_export.PublicKey.md#ext)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L118)

___

### extractable

• `Optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[extractable](crypto_export.PublicKey.md#extractable)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L110)

___

### k

• `Optional` **k**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[k](crypto_export.PublicKey.md#k)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L119)

___

### keyPair

• **keyPair**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Overrides

[PublicKey](crypto_export.PublicKey.md).[keyPair](crypto_export.PublicKey.md#keypair)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:213](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L213)

___

### keyPairBits

• **keyPairBits**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Overrides

[PublicKey](crypto_export.PublicKey.md).[keyPairBits](crypto_export.PublicKey.md#keypairbits)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:214](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L214)

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[key_ops](crypto_export.PublicKey.md#key_ops)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L120)

___

### kty

• `Optional` **kty**: [`KeyType`](../enums/crypto_export.KeyType.md)

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[kty](crypto_export.PublicKey.md#kty)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L121)

___

### n

• `Optional` **n**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[n](crypto_export.PublicKey.md#n)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L122)

___

### operations

• `Optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[operations](crypto_export.PublicKey.md#operations)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L99)

___

### oth

• `Optional` **oth**: `RsaOtherPrimesInfo`[]

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[oth](crypto_export.PublicKey.md#oth)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L123)

___

### p

• `Optional` **p**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[p](crypto_export.PublicKey.md#p)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L124)

___

### pkcs8

• `Optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[pkcs8](crypto_export.PublicKey.md#pkcs8)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:157](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L157)

___

### private

• **private**: `string`

The private key, alias for JWK "d" field.

#### Overrides

[PublicKey](crypto_export.PublicKey.md).[private](crypto_export.PublicKey.md#private)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L209)

___

### privateBits

• **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Overrides

[PublicKey](crypto_export.PublicKey.md).[privateBits](crypto_export.PublicKey.md#privatebits)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:211](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L211)

___

### privateKey

• **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Overrides

[PublicKey](crypto_export.PublicKey.md).[privateKey](crypto_export.PublicKey.md#privatekey)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L212)

___

### publicBits

• **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[publicBits](crypto_export.PublicKey.md#publicbits)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L202)

___

### publicKey

• **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[publicKey](crypto_export.PublicKey.md#publickey)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L179)

___

### q

• `Optional` **q**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[q](crypto_export.PublicKey.md#q)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L125)

___

### qi

• `Optional` **qi**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[qi](crypto_export.PublicKey.md#qi)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L126)

___

### sec1

• `Optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[sec1](crypto_export.PublicKey.md#sec1)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L152)

___

### spki

• `Optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[spki](crypto_export.PublicKey.md#spki)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:162](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L162)

___

### type

• **type**: [`EC`](../enums/crypto_export.KeyType.md#ec)

The key type, alias for JWK "kty" field.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[type](crypto_export.PublicKey.md#type)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L196)

___

### use

• `Optional` **use**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[use](crypto_export.PublicKey.md#use)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L127)

___

### x

• **x**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[x](crypto_export.PublicKey.md#x)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L198)

___

### xBits

• **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[xBits](crypto_export.PublicKey.md#xbits)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L200)

___

### y

• **y**: `string`

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[y](crypto_export.PublicKey.md#y)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L199)

___

### yBits

• **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Inherited from

[PublicKey](crypto_export.PublicKey.md).[yBits](crypto_export.PublicKey.md#ybits)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L201)
