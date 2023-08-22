[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / Crypto

# Class: Crypto

[crypto/export](../modules/crypto_export.md).Crypto

## Table of contents

### Constructors

- [constructor](crypto_export.Crypto.md#constructor)

### Properties

- [get](crypto_export.Crypto.md#get)

### Methods

- [createKeyPair](crypto_export.Crypto.md#createkeypair)
- [decrypt](crypto_export.Crypto.md#decrypt)
- [ecdhGeneratePublicKey](crypto_export.Crypto.md#ecdhgeneratepublickey)
- [ecdhGeneratePublicKeyAndSecret](crypto_export.Crypto.md#ecdhgeneratepublickeyandsecret)
- [ecdhGenerateSecret](crypto_export.Crypto.md#ecdhgeneratesecret)
- [encrypt](crypto_export.Crypto.md#encrypt)
- [getRandomData](crypto_export.Crypto.md#getrandomdata)
- [hash](crypto_export.Crypto.md#hash)
- [hkdf](crypto_export.Crypto.md#hkdf)
- [hmac](crypto_export.Crypto.md#hmac)
- [pbkdf2](crypto_export.Crypto.md#pbkdf2)
- [sign](crypto_export.Crypto.md#sign)
- [verify](crypto_export.Crypto.md#verify)
- [createKeyPair](crypto_export.Crypto.md#createkeypair-1)
- [decrypt](crypto_export.Crypto.md#decrypt-1)
- [ecdhGeneratePublicKey](crypto_export.Crypto.md#ecdhgeneratepublickey-1)
- [ecdhGeneratePublicKeyAndSecret](crypto_export.Crypto.md#ecdhgeneratepublickeyandsecret-1)
- [ecdhGenerateSecret](crypto_export.Crypto.md#ecdhgeneratesecret-1)
- [encrypt](crypto_export.Crypto.md#encrypt-1)
- [getRandom](crypto_export.Crypto.md#getrandom)
- [getRandomBN](crypto_export.Crypto.md#getrandombn)
- [getRandomBigUInt64](crypto_export.Crypto.md#getrandombiguint64)
- [getRandomData](crypto_export.Crypto.md#getrandomdata-1)
- [getRandomUInt16](crypto_export.Crypto.md#getrandomuint16)
- [getRandomUInt32](crypto_export.Crypto.md#getrandomuint32)
- [hash](crypto_export.Crypto.md#hash-1)
- [hkdf](crypto_export.Crypto.md#hkdf-1)
- [hmac](crypto_export.Crypto.md#hmac-1)
- [pbkdf2](crypto_export.Crypto.md#pbkdf2-1)
- [sign](crypto_export.Crypto.md#sign-1)
- [verify](crypto_export.Crypto.md#verify-1)

## Constructors

### constructor

• **new Crypto**()

## Properties

### get

▪ `Static` **get**: () => [`Crypto`](crypto_export.Crypto.md)

#### Type declaration

▸ (): [`Crypto`](crypto_export.Crypto.md)

##### Returns

[`Crypto`](crypto_export.Crypto.md)

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L25)

## Methods

### createKeyPair

▸ `Abstract` **createKeyPair**(): [`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Returns

[`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L112)

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

[packages/matter.js/src/crypto/Crypto.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L33)

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

[packages/matter.js/src/crypto/Crypto.ts:58](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L58)

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

[packages/matter.js/src/crypto/Crypto.ts:62](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L62)

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

[packages/matter.js/src/crypto/Crypto.ts:70](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L70)

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

[packages/matter.js/src/crypto/Crypto.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L29)

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

[packages/matter.js/src/crypto/Crypto.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L37)

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

[packages/matter.js/src/crypto/Crypto.ts:74](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L74)

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

[packages/matter.js/src/crypto/Crypto.ts:85](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L85)

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

[packages/matter.js/src/crypto/Crypto.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L89)

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

[packages/matter.js/src/crypto/Crypto.ts:77](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L77)

___

### sign

▸ `Abstract` **sign**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `JsonWebKey` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:92](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L92)

___

### verify

▸ `Abstract` **verify**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `JsonWebKey` |
| `data` | `Uint8Array` |
| `signature` | `Uint8Array` |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L99)

___

### createKeyPair

▸ `Static` `Readonly` **createKeyPair**(): [`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Returns

[`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L113)

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

[packages/matter.js/src/crypto/Crypto.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L34)

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

[packages/matter.js/src/crypto/Crypto.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L59)

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

[packages/matter.js/src/crypto/Crypto.ts:66](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L66)

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

[packages/matter.js/src/crypto/Crypto.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L71)

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

[packages/matter.js/src/crypto/Crypto.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L30)

___

### getRandom

▸ `Static` `Readonly` **getRandom**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L40)

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

[packages/matter.js/src/crypto/Crypto.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L51)

___

### getRandomBigUInt64

▸ `Static` `Readonly` **getRandomBigUInt64**(): `bigint`

#### Returns

`bigint`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L48)

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

[packages/matter.js/src/crypto/Crypto.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L38)

___

### getRandomUInt16

▸ `Static` `Readonly` **getRandomUInt16**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L42)

___

### getRandomUInt32

▸ `Static` `Readonly` **getRandomUInt32**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L45)

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

[packages/matter.js/src/crypto/Crypto.ts:75](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L75)

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

[packages/matter.js/src/crypto/Crypto.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L86)

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

[packages/matter.js/src/crypto/Crypto.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L90)

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

[packages/matter.js/src/crypto/Crypto.ts:78](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L78)

___

### sign

▸ `Static` `Readonly` **sign**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `JsonWebKey` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:93](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L93)

___

### verify

▸ `Static` `Readonly` **verify**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `JsonWebKey` |
| `data` | `Uint8Array` |
| `signature` | `Uint8Array` |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/crypto/Crypto.ts#L105)
