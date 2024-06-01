[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [crypto/export](../README.md) / PublicKey

# Interface: PublicKey

EC key without private fields.

## Extends

- [`Key`](Key.md)

## Extended by

- [`PrivateKey`](PrivateKey.md)

## Constructors

## Properties

### alg?

> `optional` **alg**: `string`

#### Inherited from

[`Key`](Key.md).[`alg`](Key.md#alg)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:57

***

### algorithm?

> `optional` **algorithm**: `string`

The key algorithm, alias for JWK "alg" field.

#### Inherited from

[`Key`](Key.md).[`algorithm`](Key.md#algorithm)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:35

***

### crv?

> `optional` **crv**: [`CurveType`](../enumerations/CurveType.md)

#### Inherited from

[`Key`](Key.md).[`crv`](Key.md#crv)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:58

***

### curve

> **curve**: [`CurveType`](../enumerations/CurveType.md)

The elliptic curve type, alias for JWK "crv" field.

#### Overrides

[`Key`](Key.md).[`curve`](Key.md#curve)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:130

***

### d?

> `optional` **d**: `string`

#### Inherited from

[`Key`](Key.md).[`d`](Key.md#d)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:59

***

### dp?

> `optional` **dp**: `string`

#### Inherited from

[`Key`](Key.md).[`dp`](Key.md#dp)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:60

***

### dq?

> `optional` **dq**: `string`

#### Inherited from

[`Key`](Key.md).[`dq`](Key.md#dq)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:61

***

### e?

> `optional` **e**: `string`

#### Inherited from

[`Key`](Key.md).[`e`](Key.md#e)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:62

***

### ext?

> `optional` **ext**: `boolean`

#### Inherited from

[`Key`](Key.md).[`ext`](Key.md#ext)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:63

***

### extractable?

> `optional` **extractable**: `boolean`

Indicates whether the private key is extractable, alias for JSK "ext"
field.

#### Inherited from

[`Key`](Key.md).[`extractable`](Key.md#extractable)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:56

***

### k?

> `optional` **k**: `string`

#### Inherited from

[`Key`](Key.md).[`k`](Key.md#k)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:64

***

### keyPair

> **keyPair**: [`BinaryKeyPair`](../README.md#binarykeypair)

Alias for keyPairBits that throws if a complete key pair is not present.

#### Inherited from

[`Key`](Key.md).[`keyPair`](Key.md#keypair)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:123

***

### keyPairBits?

> `optional` **keyPairBits**: [`BinaryKeyPair`](../README.md#binarykeypair)

Import/export of BinaryKeyPair structure used as an alternate
serialization format for legacy reasons.

#### Inherited from

[`Key`](Key.md).[`keyPairBits`](Key.md#keypairbits)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:111

***

### key\_ops?

> `optional` **key\_ops**: `string`[]

#### Inherited from

[`Key`](Key.md).[`key_ops`](Key.md#key_ops)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:65

***

### kty?

> `optional` **kty**: [`KeyType`](../enumerations/KeyType.md)

#### Inherited from

[`Key`](Key.md).[`kty`](Key.md#kty)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:66

***

### n?

> `optional` **n**: `string`

#### Inherited from

[`Key`](Key.md).[`n`](Key.md#n)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:67

***

### operations?

> `optional` **operations**: `string`[]

Operations supported by the key, alias for JWK "key_ops" field.

#### Inherited from

[`Key`](Key.md).[`operations`](Key.md#operations)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:47

***

### oth?

> `optional` **oth**: `RsaOtherPrimesInfo`[]

#### Inherited from

[`Key`](Key.md).[`oth`](Key.md#oth)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:68

***

### p?

> `optional` **p**: `string`

#### Inherited from

[`Key`](Key.md).[`p`](Key.md#p)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:69

***

### pkcs8?

> `optional` **pkcs8**: `Uint8Array`

Import (write-only) of private keys encoded in PKCS #8 format.

#### Inherited from

[`Key`](Key.md).[`pkcs8`](Key.md#pkcs8)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:97

***

### private?

> `optional` **private**: `string`

The private key, alias for JWK "d" field.

#### Inherited from

[`Key`](Key.md).[`private`](Key.md#private)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:51

***

### privateBits?

> `optional` **privateBits**: `Uint8Array`

Binary alias to private key field.  Automatically encodes/decodes the
base-64 private key.

#### Inherited from

[`Key`](Key.md).[`privateBits`](Key.md#privatebits)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:79

***

### privateKey

> **privateKey**: `Uint8Array`

Alias for privateBits that throws if no private key is present.

#### Inherited from

[`Key`](Key.md).[`privateKey`](Key.md#privatekey)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:119

***

### publicBits

> **publicBits**: `Uint8Array`

Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
fields internally.

#### Overrides

[`Key`](Key.md).[`publicBits`](Key.md#publicbits)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:135

***

### publicKey

> **publicKey**: `Uint8Array`

Alias for publicBits that throws if no public key is present.

#### Inherited from

[`Key`](Key.md).[`publicKey`](Key.md#publickey)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:115

***

### q?

> `optional` **q**: `string`

#### Inherited from

[`Key`](Key.md).[`q`](Key.md#q)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:70

***

### qi?

> `optional` **qi**: `string`

#### Inherited from

[`Key`](Key.md).[`qi`](Key.md#qi)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:71

***

### sec1?

> `optional` **sec1**: `Uint8Array`

Import (write-only) of private keys encoded in SEC1 format.

#### Inherited from

[`Key`](Key.md).[`sec1`](Key.md#sec1)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:93

***

### spki?

> `optional` **spki**: `Uint8Array`

Import (write-only) of public keys encoded in SPKI format.

#### Inherited from

[`Key`](Key.md).[`spki`](Key.md#spki)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:101

***

### type

> **type**: [`EC`](../enumerations/KeyType.md#ec)

The key type, alias for JWK "kty" field.

#### Overrides

[`Key`](Key.md).[`type`](Key.md#type)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:129

***

### use?

> `optional` **use**: `string`

#### Inherited from

[`Key`](Key.md).[`use`](Key.md#use)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:72

***

### x

> **x**: `string`

#### Overrides

[`Key`](Key.md).[`x`](Key.md#x)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:131

***

### xBits

> **xBits**: `Uint8Array`

Binary alias to the x field.  Automatically encodes/decodes the base-64
x-point on EC public keys.

#### Overrides

[`Key`](Key.md).[`xBits`](Key.md#xbits)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:133

***

### y

> **y**: `string`

#### Overrides

[`Key`](Key.md).[`y`](Key.md#y)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:132

***

### yBits

> **yBits**: `Uint8Array`

Binary alias to the y field.  Automatically encodes/decodes the base-64
y-point on EC public keys.

#### Overrides

[`Key`](Key.md).[`yBits`](Key.md#ybits)

#### Source

packages/matter.js/dist/esm/crypto/Key.d.ts:134
