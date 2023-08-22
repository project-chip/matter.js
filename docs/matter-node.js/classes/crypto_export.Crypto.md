[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / Crypto

# Class: Crypto

[crypto/export](../modules/crypto_export.md).Crypto

## Hierarchy

- **`Crypto`**

  ↳ [`CryptoNode`](crypto_export.CryptoNode.md)

## Table of contents

### Constructors

- [constructor](crypto_export.Crypto.md#constructor)

### Properties

- [createKeyPair](crypto_export.Crypto.md#createkeypair)
- [decrypt](crypto_export.Crypto.md#decrypt)
- [ecdhGeneratePublicKey](crypto_export.Crypto.md#ecdhgeneratepublickey)
- [ecdhGeneratePublicKeyAndSecret](crypto_export.Crypto.md#ecdhgeneratepublickeyandsecret)
- [ecdhGenerateSecret](crypto_export.Crypto.md#ecdhgeneratesecret)
- [encrypt](crypto_export.Crypto.md#encrypt)
- [get](crypto_export.Crypto.md#get)
- [getRandom](crypto_export.Crypto.md#getrandom)
- [getRandomBN](crypto_export.Crypto.md#getrandombn)
- [getRandomBigUInt64](crypto_export.Crypto.md#getrandombiguint64)
- [getRandomData](crypto_export.Crypto.md#getrandomdata)
- [getRandomUInt16](crypto_export.Crypto.md#getrandomuint16)
- [getRandomUInt32](crypto_export.Crypto.md#getrandomuint32)
- [hash](crypto_export.Crypto.md#hash)
- [hkdf](crypto_export.Crypto.md#hkdf)
- [hmac](crypto_export.Crypto.md#hmac)
- [pbkdf2](crypto_export.Crypto.md#pbkdf2)
- [sign](crypto_export.Crypto.md#sign)
- [verify](crypto_export.Crypto.md#verify)

### Methods

- [createKeyPair](crypto_export.Crypto.md#createkeypair-1)
- [decrypt](crypto_export.Crypto.md#decrypt-1)
- [ecdhGeneratePublicKey](crypto_export.Crypto.md#ecdhgeneratepublickey-1)
- [ecdhGeneratePublicKeyAndSecret](crypto_export.Crypto.md#ecdhgeneratepublickeyandsecret-1)
- [ecdhGenerateSecret](crypto_export.Crypto.md#ecdhgeneratesecret-1)
- [encrypt](crypto_export.Crypto.md#encrypt-1)
- [getRandomData](crypto_export.Crypto.md#getrandomdata-1)
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

### createKeyPair

▪ `Static` `Readonly` **createKeyPair**: () => [`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Type declaration

▸ (): [`PrivateKey`](../modules/crypto_export.md#privatekey)

##### Returns

[`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:64

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:25

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:37

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:45

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:50

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:23

___

### get

▪ `Static` **get**: () => [`Crypto`](crypto_export.Crypto.md)

#### Type declaration

▸ (): [`Crypto`](crypto_export.Crypto.md)

##### Returns

[`Crypto`](crypto_export.Crypto.md)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:21

___

### getRandom

▪ `Static` `Readonly` **getRandom**: () => `Uint8Array`

#### Type declaration

▸ (): `Uint8Array`

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:28

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:32

___

### getRandomBigUInt64

▪ `Static` `Readonly` **getRandomBigUInt64**: () => `bigint`

#### Type declaration

▸ (): `bigint`

##### Returns

`bigint`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:31

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:27

___

### getRandomUInt16

▪ `Static` `Readonly` **getRandomUInt16**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:29

___

### getRandomUInt32

▪ `Static` `Readonly` **getRandomUInt32**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:30

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:52

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:56

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:58

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:54

___

### sign

▪ `Static` `Readonly` **sign**: (`privateKey`: `JsonWebKey`, `data`: `Uint8Array` \| `Uint8Array`[], `dsaEncoding?`: [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding)) => `Uint8Array`

#### Type declaration

▸ (`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `JsonWebKey` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding) |

##### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:60

___

### verify

▪ `Static` `Readonly` **verify**: (`publicKey`: `JsonWebKey`, `data`: `Uint8Array`, `signature`: `Uint8Array`, `dsaEncoding?`: [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding)) => `void`

#### Type declaration

▸ (`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `JsonWebKey` |
| `data` | `Uint8Array` |
| `signature` | `Uint8Array` |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding) |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:62

## Methods

### createKeyPair

▸ `Abstract` **createKeyPair**(): [`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Returns

[`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:63

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:24

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:33

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:41

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:49

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:22

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:26

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:51

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:55

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:57

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:53

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:59

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

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:61
