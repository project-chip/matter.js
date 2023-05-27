[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [crypto](../modules/crypto.md) / Crypto

# Class: Crypto

[crypto](../modules/crypto.md).Crypto

## Hierarchy

- **`Crypto`**

  ↳ [`CryptoNode`](crypto.CryptoNode.md)

## Table of contents

### Constructors

- [constructor](crypto.Crypto.md#constructor)

### Properties

- [createKeyPair](crypto.Crypto.md#createkeypair)
- [decrypt](crypto.Crypto.md#decrypt)
- [ecdhGeneratePublicKey](crypto.Crypto.md#ecdhgeneratepublickey)
- [ecdhGeneratePublicKeyAndSecret](crypto.Crypto.md#ecdhgeneratepublickeyandsecret)
- [ecdhGenerateSecret](crypto.Crypto.md#ecdhgeneratesecret)
- [encrypt](crypto.Crypto.md#encrypt)
- [get](crypto.Crypto.md#get)
- [getRandom](crypto.Crypto.md#getrandom)
- [getRandomBN](crypto.Crypto.md#getrandombn)
- [getRandomBigUInt64](crypto.Crypto.md#getrandombiguint64)
- [getRandomData](crypto.Crypto.md#getrandomdata)
- [getRandomUInt16](crypto.Crypto.md#getrandomuint16)
- [getRandomUInt32](crypto.Crypto.md#getrandomuint32)
- [hash](crypto.Crypto.md#hash)
- [hkdf](crypto.Crypto.md#hkdf)
- [hmac](crypto.Crypto.md#hmac)
- [pbkdf2](crypto.Crypto.md#pbkdf2)
- [signPkcs8](crypto.Crypto.md#signpkcs8)
- [signSec1](crypto.Crypto.md#signsec1)
- [verifySpki](crypto.Crypto.md#verifyspki)
- [verifySpkiEc](crypto.Crypto.md#verifyspkiec)

### Methods

- [createKeyPair](crypto.Crypto.md#createkeypair-1)
- [decrypt](crypto.Crypto.md#decrypt-1)
- [ecdhGeneratePublicKey](crypto.Crypto.md#ecdhgeneratepublickey-1)
- [ecdhGeneratePublicKeyAndSecret](crypto.Crypto.md#ecdhgeneratepublickeyandsecret-1)
- [ecdhGenerateSecret](crypto.Crypto.md#ecdhgeneratesecret-1)
- [encrypt](crypto.Crypto.md#encrypt-1)
- [getRandomData](crypto.Crypto.md#getrandomdata-1)
- [hash](crypto.Crypto.md#hash-1)
- [hkdf](crypto.Crypto.md#hkdf-1)
- [hmac](crypto.Crypto.md#hmac-1)
- [pbkdf2](crypto.Crypto.md#pbkdf2-1)
- [signPkcs8](crypto.Crypto.md#signpkcs8-1)
- [signSec1](crypto.Crypto.md#signsec1-1)
- [verifySpki](crypto.Crypto.md#verifyspki-1)
- [verifySpkiEc](crypto.Crypto.md#verifyspkiec-1)

## Constructors

### constructor

• **new Crypto**()

## Properties

### createKeyPair

▪ `Static` `Readonly` **createKeyPair**: () => [`KeyPair`](../modules/crypto.md#keypair)

#### Type declaration

▸ (): [`KeyPair`](../modules/crypto.md#keypair)

##### Returns

[`KeyPair`](../modules/crypto.md#keypair)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:67

___

### decrypt

▪ `Static` `Readonly` **decrypt**: (`key`: `Uint8Array`, `data`: `Uint8Array`, `nonce`: `Uint8Array`, `aad?`: `Uint8Array`) => `Uint8Array`

#### Type declaration

▸ (`key`, `data`, `nonce`, `aad?`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad?` | `Uint8Array` |

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:24

___

### ecdhGeneratePublicKey

▪ `Static` `Readonly` **ecdhGeneratePublicKey**: () => { `ecdh`: `any` ; `publicKey`: `Uint8Array`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ecdh` | `any` |
| `publicKey` | `Uint8Array` |

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:36

___

### ecdhGeneratePublicKeyAndSecret

▪ `Static` `Readonly` **ecdhGeneratePublicKeyAndSecret**: (`peerPublicKey`: `Uint8Array`) => { `publicKey`: `Uint8Array` ; `sharedSecret`: `Uint8Array`  }

#### Type declaration

▸ (`peerPublicKey`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `sharedSecret` | `Uint8Array` |

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:44

___

### ecdhGenerateSecret

▪ `Static` `Readonly` **ecdhGenerateSecret**: (`peerPublicKey`: `Uint8Array`, `ecdh`: `any`) => `Uint8Array`

#### Type declaration

▸ (`peerPublicKey`, `ecdh`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |
| `ecdh` | `any` |

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:49

___

### encrypt

▪ `Static` `Readonly` **encrypt**: (`key`: `Uint8Array`, `data`: `Uint8Array`, `nonce`: `Uint8Array`, `aad?`: `Uint8Array`) => `Uint8Array`

#### Type declaration

▸ (`key`, `data`, `nonce`, `aad?`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad?` | `Uint8Array` |

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:22

___

### get

▪ `Static` **get**: () => [`Crypto`](crypto.Crypto.md)

#### Type declaration

▸ (): [`Crypto`](crypto.Crypto.md)

##### Returns

[`Crypto`](crypto.Crypto.md)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:20

___

### getRandom

▪ `Static` `Readonly` **getRandom**: () => `Uint8Array`

#### Type declaration

▸ (): `Uint8Array`

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:27

___

### getRandomBN

▪ `Static` `Readonly` **getRandomBN**: (`size`: `number`, `maxValue`: `BN`) => `BN`

#### Type declaration

▸ (`size`, `maxValue`): `BN`

##### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `maxValue` | `BN` |

##### Returns

`BN`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:31

___

### getRandomBigUInt64

▪ `Static` `Readonly` **getRandomBigUInt64**: () => `bigint`

#### Type declaration

▸ (): `bigint`

##### Returns

`bigint`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:30

___

### getRandomData

▪ `Static` `Readonly` **getRandomData**: (`length`: `number`) => `Uint8Array`

#### Type declaration

▸ (`length`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:26

___

### getRandomUInt16

▪ `Static` `Readonly` **getRandomUInt16**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:28

___

### getRandomUInt32

▪ `Static` `Readonly` **getRandomUInt32**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:29

___

### hash

▪ `Static` `Readonly` **hash**: (`data`: `Uint8Array` \| `Uint8Array`[]) => `Uint8Array`

#### Type declaration

▸ (`data`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Uint8Array`[] |

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:51

___

### hkdf

▪ `Static` `Readonly` **hkdf**: (`secret`: `Uint8Array`, `salt`: `Uint8Array`, `info`: `Uint8Array`, `length?`: `number`) => `Promise`<`Uint8Array`\>

#### Type declaration

▸ (`secret`, `salt`, `info`, `length?`): `Promise`<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `info` | `Uint8Array` |
| `length?` | `number` |

##### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:55

___

### hmac

▪ `Static` `Readonly` **hmac**: (`key`: `Uint8Array`, `data`: `Uint8Array`) => `Uint8Array`

#### Type declaration

▸ (`key`, `data`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:57

___

### pbkdf2

▪ `Static` `Readonly` **pbkdf2**: (`secret`: `Uint8Array`, `salt`: `Uint8Array`, `iteration`: `number`, `keyLength`: `number`) => `Promise`<`Uint8Array`\>

#### Type declaration

▸ (`secret`, `salt`, `iteration`, `keyLength`): `Promise`<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `iteration` | `number` |
| `keyLength` | `number` |

##### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:53

___

### signPkcs8

▪ `Static` `Readonly` **signPkcs8**: (`privateKey`: `Uint8Array`, `data`: `Uint8Array` \| `Uint8Array`[], `dsaEncoding?`: [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding)) => `Uint8Array`

#### Type declaration

▸ (`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) |

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:59

___

### signSec1

▪ `Static` `Readonly` **signSec1**: (`privateKey`: `Uint8Array`, `data`: `Uint8Array` \| `Uint8Array`[], `dsaEncoding?`: [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding)) => `Uint8Array`

#### Type declaration

▸ (`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) |

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:61

___

### verifySpki

▪ `Static` `Readonly` **verifySpki**: (`publicKey`: `Uint8Array`, `data`: `Uint8Array`, `signature`: `Uint8Array`, `dsaEncoding?`: [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding)) => `void`

#### Type declaration

▸ (`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `data` | `Uint8Array` |
| `signature` | `Uint8Array` |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:65

___

### verifySpkiEc

▪ `Static` `Readonly` **verifySpkiEc**: (`publicKey`: `Uint8Array`, `data`: `Uint8Array`, `signature`: `Uint8Array`, `dsaEncoding?`: [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding)) => `void`

#### Type declaration

▸ (`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `data` | `Uint8Array` |
| `signature` | `Uint8Array` |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:63

## Methods

### createKeyPair

▸ `Abstract` **createKeyPair**(): [`KeyPair`](../modules/crypto.md#keypair)

#### Returns

[`KeyPair`](../modules/crypto.md#keypair)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:66

___

### decrypt

▸ `Abstract` **decrypt**(`key`, `data`, `nonce`, `aad?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad?` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:23

___

### ecdhGeneratePublicKey

▸ `Abstract` **ecdhGeneratePublicKey**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ecdh` | `any` |
| `publicKey` | `Uint8Array` |

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:32

___

### ecdhGeneratePublicKeyAndSecret

▸ `Abstract` **ecdhGeneratePublicKeyAndSecret**(`peerPublicKey`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `sharedSecret` | `Uint8Array` |

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:40

___

### ecdhGenerateSecret

▸ `Abstract` **ecdhGenerateSecret**(`peerPublicKey`, `ecdh`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |
| `ecdh` | `any` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:48

___

### encrypt

▸ `Abstract` **encrypt**(`key`, `data`, `nonce`, `aad?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad?` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:21

___

### getRandomData

▸ `Abstract` **getRandomData**(`length`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:25

___

### hash

▸ `Abstract` **hash**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:50

___

### hkdf

▸ `Abstract` **hkdf**(`secret`, `salt`, `info`, `length?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `info` | `Uint8Array` |
| `length?` | `number` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:54

___

### hmac

▸ `Abstract` **hmac**(`key`, `data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:56

___

### pbkdf2

▸ `Abstract` **pbkdf2**(`secret`, `salt`, `iteration`, `keyLength`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `iteration` | `number` |
| `keyLength` | `number` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:52

___

### signPkcs8

▸ `Abstract` **signPkcs8**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:58

___

### signSec1

▸ `Abstract` **signSec1**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:60

___

### verifySpki

▸ `Abstract` **verifySpki**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `data` | `Uint8Array` |
| `signature` | `Uint8Array` |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:64

___

### verifySpkiEc

▸ `Abstract` **verifySpkiEc**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `data` | `Uint8Array` |
| `signature` | `Uint8Array` |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:62
