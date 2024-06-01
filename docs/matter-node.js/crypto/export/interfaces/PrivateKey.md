[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [crypto/export](../README.md) / PrivateKey

# Interface: PrivateKey

EC key with extractable private fields.

## Extends

- [`PublicKey`](PublicKey.md)

## Constructors

## Properties

### alg?

> `optional` **alg**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`alg`](PublicKey.md#alg)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:57

***

### algorithm?

> `optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Inherited from

[`PublicKey`](PublicKey.md).[`algorithm`](PublicKey.md#algorithm)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:35

***

### crv?

> `optional` **crv**: [`CurveType`](../enumerations/CurveType.md)

#### Inherited from

[`PublicKey`](PublicKey.md).[`crv`](PublicKey.md#crv)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:58

***

### curve

> **curve**: [`CurveType`](../enumerations/CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Inherited from

[`PublicKey`](PublicKey.md).[`curve`](PublicKey.md#curve)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:130

***

### d

> **d**: `string`

#### Overrides

[`PublicKey`](PublicKey.md).[`d`](PublicKey.md#d)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:142

***

### dp?

> `optional` **dp**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`dp`](PublicKey.md#dp)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:60

***

### dq?

> `optional` **dq**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`dq`](PublicKey.md#dq)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:61

***

### e?

> `optional` **e**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`e`](PublicKey.md#e)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:62

***

### ext?

> `optional` **ext**: `boolean`

#### Inherited from

[`PublicKey`](PublicKey.md).[`ext`](PublicKey.md#ext)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:63

***

### extractable?

> `optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Inherited from

[`PublicKey`](PublicKey.md).[`extractable`](PublicKey.md#extractable)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:56

***

### k?

> `optional` **k**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`k`](PublicKey.md#k)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:64

***

### keyPair

> **keyPair**: [`BinaryKeyPair`](../README.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Overrides

[`PublicKey`](PublicKey.md).[`keyPair`](PublicKey.md#keypair)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:145

***

### keyPairBits

> **keyPairBits**: [`BinaryKeyPair`](../README.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Overrides

[`PublicKey`](PublicKey.md).[`keyPairBits`](PublicKey.md#keypairbits)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:146

***

### key\_ops?

> `optional` **key\_ops**: `string`[]

#### Inherited from

[`PublicKey`](PublicKey.md).[`key_ops`](PublicKey.md#key_ops)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:65

***

### kty?

> `optional` **kty**: [`KeyType`](../enumerations/KeyType.md)

#### Inherited from

[`PublicKey`](PublicKey.md).[`kty`](PublicKey.md#kty)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:66

***

### n?

> `optional` **n**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`n`](PublicKey.md#n)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:67

***

### operations?

> `optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Inherited from

[`PublicKey`](PublicKey.md).[`operations`](PublicKey.md#operations)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:47

***

### oth?

> `optional` **oth**: `RsaOtherPrimesInfo`[]

#### Inherited from

[`PublicKey`](PublicKey.md).[`oth`](PublicKey.md#oth)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:68

***

### p?

> `optional` **p**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`p`](PublicKey.md#p)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:69

***

### pkcs8?

> `optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Inherited from

[`PublicKey`](PublicKey.md).[`pkcs8`](PublicKey.md#pkcs8)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:97

***

### private

> **private**: `string`

The private key, alias for JWK "d" field.

#### Overrides

[`PublicKey`](PublicKey.md).[`private`](PublicKey.md#private)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:141

***

### privateBits

> **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Overrides

[`PublicKey`](PublicKey.md).[`privateBits`](PublicKey.md#privatebits)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:143

***

### privateKey

> **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Overrides

[`PublicKey`](PublicKey.md).[`privateKey`](PublicKey.md#privatekey)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:144

***

### publicBits

> **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Inherited from

[`PublicKey`](PublicKey.md).[`publicBits`](PublicKey.md#publicbits)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:135

***

### publicKey

> **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Inherited from

[`PublicKey`](PublicKey.md).[`publicKey`](PublicKey.md#publickey)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:115

***

### q?

> `optional` **q**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`q`](PublicKey.md#q)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:70

***

### qi?

> `optional` **qi**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`qi`](PublicKey.md#qi)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:71

***

### sec1?

> `optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Inherited from

[`PublicKey`](PublicKey.md).[`sec1`](PublicKey.md#sec1)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:93

***

### spki?

> `optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Inherited from

[`PublicKey`](PublicKey.md).[`spki`](PublicKey.md#spki)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:101

***

### type

> **type**: [`EC`](../enumerations/KeyType.md#ec)

The key type, alias for JWK "kty" field.

#### Inherited from

[`PublicKey`](PublicKey.md).[`type`](PublicKey.md#type)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:129

***

### use?

> `optional` **use**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`use`](PublicKey.md#use)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:72

***

### x

> **x**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`x`](PublicKey.md#x)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:131

***

### xBits

> **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Inherited from

[`PublicKey`](PublicKey.md).[`xBits`](PublicKey.md#xbits)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:133

***

### y

> **y**: `string`

#### Inherited from

[`PublicKey`](PublicKey.md).[`y`](PublicKey.md#y)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:132

***

### yBits

> **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Inherited from

[`PublicKey`](PublicKey.md).[`yBits`](PublicKey.md#ybits)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:134
