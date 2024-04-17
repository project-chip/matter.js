[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / SymmetricKey

# Interface: SymmetricKey

[crypto/export](../modules/crypto_export.md).SymmetricKey

Symmetric key.

## Hierarchy

- [`Key`](crypto_export.Key.md)

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

[Key](crypto_export.Key.md).[constructor](crypto_export.Key.md#constructor)

## Properties

### alg

• `Optional` **alg**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[alg](crypto_export.Key.md#alg)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L112)

___

### algorithm

• `Optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Inherited from

[Key](crypto_export.Key.md).[algorithm](crypto_export.Key.md#algorithm)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L84)

___

### crv

• `Optional` **crv**: [`CurveType`](../enums/crypto_export.CurveType.md)

#### Inherited from

[Key](crypto_export.Key.md).[crv](crypto_export.Key.md#crv)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L113)

___

### curve

• `Optional` **curve**: [`CurveType`](../enums/crypto_export.CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Inherited from

[Key](crypto_export.Key.md).[curve](crypto_export.Key.md#curve)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L89)

___

### d

• **d**: `string`

#### Overrides

[Key](crypto_export.Key.md).[d](crypto_export.Key.md#d)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:223](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L223)

___

### dp

• `Optional` **dp**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[dp](crypto_export.Key.md#dp)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L115)

___

### dq

• `Optional` **dq**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[dq](crypto_export.Key.md#dq)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L116)

___

### e

• `Optional` **e**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[e](crypto_export.Key.md#e)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L117)

___

### ext

• `Optional` **ext**: `boolean`

#### Inherited from

[Key](crypto_export.Key.md).[ext](crypto_export.Key.md#ext)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L118)

___

### extractable

• `Optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Inherited from

[Key](crypto_export.Key.md).[extractable](crypto_export.Key.md#extractable)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L110)

___

### k

• `Optional` **k**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[k](crypto_export.Key.md#k)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L119)

___

### keyPair

• **keyPair**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Inherited from

[Key](crypto_export.Key.md).[keyPair](crypto_export.Key.md#keypair)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:189](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L189)

___

### keyPairBits

• `Optional` **keyPairBits**: [`BinaryKeyPair`](../modules/crypto_export.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Inherited from

[Key](crypto_export.Key.md).[keyPairBits](crypto_export.Key.md#keypairbits)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L174)

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

#### Inherited from

[Key](crypto_export.Key.md).[key_ops](crypto_export.Key.md#key_ops)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L120)

___

### kty

• `Optional` **kty**: [`KeyType`](../enums/crypto_export.KeyType.md)

#### Inherited from

[Key](crypto_export.Key.md).[kty](crypto_export.Key.md#kty)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L121)

___

### n

• `Optional` **n**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[n](crypto_export.Key.md#n)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L122)

___

### operations

• `Optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Inherited from

[Key](crypto_export.Key.md).[operations](crypto_export.Key.md#operations)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L99)

___

### oth

• `Optional` **oth**: `RsaOtherPrimesInfo`[]

#### Inherited from

[Key](crypto_export.Key.md).[oth](crypto_export.Key.md#oth)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L123)

___

### p

• `Optional` **p**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[p](crypto_export.Key.md#p)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L124)

___

### pkcs8

• `Optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Inherited from

[Key](crypto_export.Key.md).[pkcs8](crypto_export.Key.md#pkcs8)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:157](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L157)

___

### private

• **private**: `string`

The private key, alias for JWK "d" field.

#### Overrides

[Key](crypto_export.Key.md).[private](crypto_export.Key.md#private)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:222](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L222)

___

### privateBits

• `Optional` **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Inherited from

[Key](crypto_export.Key.md).[privateBits](crypto_export.Key.md#privatebits)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L135)

___

### privateKey

• **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Inherited from

[Key](crypto_export.Key.md).[privateKey](crypto_export.Key.md#privatekey)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:184](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L184)

___

### publicBits

• `Optional` **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Inherited from

[Key](crypto_export.Key.md).[publicBits](crypto_export.Key.md#publicbits)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L168)

___

### publicKey

• **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Inherited from

[Key](crypto_export.Key.md).[publicKey](crypto_export.Key.md#publickey)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L179)

___

### q

• `Optional` **q**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[q](crypto_export.Key.md#q)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L125)

___

### qi

• `Optional` **qi**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[qi](crypto_export.Key.md#qi)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L126)

___

### sec1

• `Optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Inherited from

[Key](crypto_export.Key.md).[sec1](crypto_export.Key.md#sec1)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L152)

___

### spki

• `Optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Inherited from

[Key](crypto_export.Key.md).[spki](crypto_export.Key.md#spki)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:162](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L162)

___

### type

• **type**: [`oct`](../enums/crypto_export.KeyType.md#oct)

The key type, alias for JWK "kty" field.

#### Overrides

[Key](crypto_export.Key.md).[type](crypto_export.Key.md#type)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:221](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L221)

___

### use

• `Optional` **use**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[use](crypto_export.Key.md#use)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L127)

___

### x

• `Optional` **x**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[x](crypto_export.Key.md#x)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L128)

___

### xBits

• `Optional` **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Inherited from

[Key](crypto_export.Key.md).[xBits](crypto_export.Key.md#xbits)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L141)

___

### y

• `Optional` **y**: `string`

#### Inherited from

[Key](crypto_export.Key.md).[y](crypto_export.Key.md#y)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L129)

___

### yBits

• `Optional` **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Inherited from

[Key](crypto_export.Key.md).[yBits](crypto_export.Key.md#ybits)

#### Defined in

[packages/matter.js/src/crypto/Key.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Key.ts#L147)
