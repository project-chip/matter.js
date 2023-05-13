[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [crypto](../modules/crypto.md) / Crypto

# Class: Crypto

[crypto](../modules/crypto.md).Crypto

## Table of contents

### Constructors

- [constructor](crypto.Crypto.md#constructor)

### Properties

- [get](crypto.Crypto.md#get)

### Methods

- [createKeyPair](crypto.Crypto.md#createkeypair)
- [decrypt](crypto.Crypto.md#decrypt)
- [ecdhGeneratePublicKey](crypto.Crypto.md#ecdhgeneratepublickey)
- [ecdhGeneratePublicKeyAndSecret](crypto.Crypto.md#ecdhgeneratepublickeyandsecret)
- [ecdhGenerateSecret](crypto.Crypto.md#ecdhgeneratesecret)
- [encrypt](crypto.Crypto.md#encrypt)
- [getRandomData](crypto.Crypto.md#getrandomdata)
- [hash](crypto.Crypto.md#hash)
- [hkdf](crypto.Crypto.md#hkdf)
- [hmac](crypto.Crypto.md#hmac)
- [pbkdf2](crypto.Crypto.md#pbkdf2)
- [signPkcs8](crypto.Crypto.md#signpkcs8)
- [signSec1](crypto.Crypto.md#signsec1)
- [verifySpki](crypto.Crypto.md#verifyspki)
- [verifySpkiEc](crypto.Crypto.md#verifyspkiec)
- [createKeyPair](crypto.Crypto.md#createkeypair-1)
- [decrypt](crypto.Crypto.md#decrypt-1)
- [ecdhGeneratePublicKey](crypto.Crypto.md#ecdhgeneratepublickey-1)
- [ecdhGeneratePublicKeyAndSecret](crypto.Crypto.md#ecdhgeneratepublickeyandsecret-1)
- [ecdhGenerateSecret](crypto.Crypto.md#ecdhgeneratesecret-1)
- [encrypt](crypto.Crypto.md#encrypt-1)
- [getRandom](crypto.Crypto.md#getrandom)
- [getRandomBN](crypto.Crypto.md#getrandombn)
- [getRandomBigUInt64](crypto.Crypto.md#getrandombiguint64)
- [getRandomData](crypto.Crypto.md#getrandomdata-1)
- [getRandomUInt16](crypto.Crypto.md#getrandomuint16)
- [getRandomUInt32](crypto.Crypto.md#getrandomuint32)
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

### get

▪ `Static` **get**: () => [`Crypto`](crypto.Crypto.md)

#### Type declaration

▸ (): [`Crypto`](crypto.Crypto.md)

##### Returns

[`Crypto`](crypto.Crypto.md)

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L25)

## Methods

### createKeyPair

▸ `Abstract` **createKeyPair**(): [`KeyPair`](../modules/crypto.md#keypair)

#### Returns

[`KeyPair`](../modules/crypto.md#keypair)

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:84](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L84)

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

[packages/matter.js/src/crypto/Crypto.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L30)

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

[packages/matter.js/src/crypto/Crypto.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L51)

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

[packages/matter.js/src/crypto/Crypto.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L54)

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

[packages/matter.js/src/crypto/Crypto.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L57)

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

[packages/matter.js/src/crypto/Crypto.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L27)

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

[packages/matter.js/src/crypto/Crypto.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L33)

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

[packages/matter.js/src/crypto/Crypto.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L60)

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

[packages/matter.js/src/crypto/Crypto.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L66)

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

[packages/matter.js/src/crypto/Crypto.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L69)

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

[packages/matter.js/src/crypto/Crypto.ts:63](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L63)

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

[packages/matter.js/src/crypto/Crypto.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L72)

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

[packages/matter.js/src/crypto/Crypto.ts:75](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L75)

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

[packages/matter.js/src/crypto/Crypto.ts:81](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L81)

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

[packages/matter.js/src/crypto/Crypto.ts:78](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L78)

___

### createKeyPair

▸ `Static` `Readonly` **createKeyPair**(): [`KeyPair`](../modules/crypto.md#keypair)

#### Returns

[`KeyPair`](../modules/crypto.md#keypair)

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:85](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L85)

___

### decrypt

▸ `Static` `Readonly` **decrypt**(`key`, `data`, `nonce`, `aad?`): `Uint8Array`

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

[packages/matter.js/src/crypto/Crypto.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L31)

___

### ecdhGeneratePublicKey

▸ `Static` `Readonly` **ecdhGeneratePublicKey**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ecdh` | `any` |
| `publicKey` | `Uint8Array` |

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L52)

___

### ecdhGeneratePublicKeyAndSecret

▸ `Static` `Readonly` **ecdhGeneratePublicKeyAndSecret**(`peerPublicKey`): `Object`

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

[packages/matter.js/src/crypto/Crypto.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L55)

___

### ecdhGenerateSecret

▸ `Static` `Readonly` **ecdhGenerateSecret**(`peerPublicKey`, `ecdh`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |
| `ecdh` | `any` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L58)

___

### encrypt

▸ `Static` `Readonly` **encrypt**(`key`, `data`, `nonce`, `aad?`): `Uint8Array`

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

[packages/matter.js/src/crypto/Crypto.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L28)

___

### getRandom

▸ `Static` `Readonly` **getRandom**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L36)

___

### getRandomBN

▸ `Static` `Readonly` **getRandomBN**(`size`, `maxValue`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `maxValue` | `BN` |

#### Returns

`BN`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L44)

___

### getRandomBigUInt64

▸ `Static` `Readonly` **getRandomBigUInt64**(): `bigint`

#### Returns

`bigint`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L42)

___

### getRandomData

▸ `Static` `Readonly` **getRandomData**(`length`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L34)

___

### getRandomUInt16

▸ `Static` `Readonly` **getRandomUInt16**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L38)

___

### getRandomUInt32

▸ `Static` `Readonly` **getRandomUInt32**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L40)

___

### hash

▸ `Static` `Readonly` **hash**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:61](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L61)

___

### hkdf

▸ `Static` `Readonly` **hkdf**(`secret`, `salt`, `info`, `length?`): `Promise`<`Uint8Array`\>

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

[packages/matter.js/src/crypto/Crypto.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L67)

___

### hmac

▸ `Static` `Readonly` **hmac**(`key`, `data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L70)

___

### pbkdf2

▸ `Static` `Readonly` **pbkdf2**(`secret`, `salt`, `iteration`, `keyLength`): `Promise`<`Uint8Array`\>

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

[packages/matter.js/src/crypto/Crypto.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L64)

___

### signPkcs8

▸ `Static` `Readonly` **signPkcs8**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:73](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L73)

___

### signSec1

▸ `Static` `Readonly` **signSec1**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L76)

___

### verifySpki

▸ `Static` `Readonly` **verifySpki**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

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

[packages/matter.js/src/crypto/Crypto.ts:82](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L82)

___

### verifySpkiEc

▸ `Static` `Readonly` **verifySpkiEc**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

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

[packages/matter.js/src/crypto/Crypto.ts:79](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/crypto/Crypto.ts#L79)
