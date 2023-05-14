[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [crypto](../modules/crypto.md) / CryptoNode

# Class: CryptoNode

[crypto](../modules/crypto.md).CryptoNode

## Hierarchy

- [`Crypto`](crypto.Crypto.md)

  ↳ **`CryptoNode`**

## Table of contents

### Constructors

- [constructor](crypto.CryptoNode.md#constructor)

### Properties

- [createKeyPair](crypto.CryptoNode.md#createkeypair)
- [decrypt](crypto.CryptoNode.md#decrypt)
- [ecdhGeneratePublicKey](crypto.CryptoNode.md#ecdhgeneratepublickey)
- [ecdhGeneratePublicKeyAndSecret](crypto.CryptoNode.md#ecdhgeneratepublickeyandsecret)
- [ecdhGenerateSecret](crypto.CryptoNode.md#ecdhgeneratesecret)
- [encrypt](crypto.CryptoNode.md#encrypt)
- [get](crypto.CryptoNode.md#get)
- [getRandom](crypto.CryptoNode.md#getrandom)
- [getRandomBN](crypto.CryptoNode.md#getrandombn)
- [getRandomBigUInt64](crypto.CryptoNode.md#getrandombiguint64)
- [getRandomData](crypto.CryptoNode.md#getrandomdata)
- [getRandomUInt16](crypto.CryptoNode.md#getrandomuint16)
- [getRandomUInt32](crypto.CryptoNode.md#getrandomuint32)
- [hash](crypto.CryptoNode.md#hash)
- [hkdf](crypto.CryptoNode.md#hkdf)
- [hmac](crypto.CryptoNode.md#hmac)
- [pbkdf2](crypto.CryptoNode.md#pbkdf2)
- [signPkcs8](crypto.CryptoNode.md#signpkcs8)
- [signSec1](crypto.CryptoNode.md#signsec1)
- [verifySpki](crypto.CryptoNode.md#verifyspki)
- [verifySpkiEc](crypto.CryptoNode.md#verifyspkiec)

### Methods

- [createKeyPair](crypto.CryptoNode.md#createkeypair-1)
- [decrypt](crypto.CryptoNode.md#decrypt-1)
- [ecdhGeneratePublicKey](crypto.CryptoNode.md#ecdhgeneratepublickey-1)
- [ecdhGeneratePublicKeyAndSecret](crypto.CryptoNode.md#ecdhgeneratepublickeyandsecret-1)
- [ecdhGenerateSecret](crypto.CryptoNode.md#ecdhgeneratesecret-1)
- [encrypt](crypto.CryptoNode.md#encrypt-1)
- [getRandomData](crypto.CryptoNode.md#getrandomdata-1)
- [hash](crypto.CryptoNode.md#hash-1)
- [hkdf](crypto.CryptoNode.md#hkdf-1)
- [hmac](crypto.CryptoNode.md#hmac-1)
- [pbkdf2](crypto.CryptoNode.md#pbkdf2-1)
- [signPkcs8](crypto.CryptoNode.md#signpkcs8-1)
- [signSec1](crypto.CryptoNode.md#signsec1-1)
- [verifySpki](crypto.CryptoNode.md#verifyspki-1)
- [verifySpkiEc](crypto.CryptoNode.md#verifyspkiec-1)

## Constructors

### constructor

• **new CryptoNode**()

#### Inherited from

[Crypto](crypto.Crypto.md).[constructor](crypto.Crypto.md#constructor)

## Properties

### createKeyPair

▪ `Static` `Readonly` **createKeyPair**: () => [`KeyPair`](../modules/crypto.md#keypair)

#### Type declaration

▸ (): [`KeyPair`](../modules/crypto.md#keypair)

##### Returns

[`KeyPair`](../modules/crypto.md#keypair)

#### Inherited from

[Crypto](crypto.Crypto.md).[createKeyPair](crypto.Crypto.md#createkeypair)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[decrypt](crypto.Crypto.md#decrypt)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[ecdhGeneratePublicKey](crypto.Crypto.md#ecdhgeneratepublickey)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[ecdhGeneratePublicKeyAndSecret](crypto.Crypto.md#ecdhgeneratepublickeyandsecret)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[ecdhGenerateSecret](crypto.Crypto.md#ecdhgeneratesecret)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[encrypt](crypto.Crypto.md#encrypt)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:22

___

### get

▪ `Static` **get**: () => [`Crypto`](crypto.Crypto.md)

#### Type declaration

▸ (): [`Crypto`](crypto.Crypto.md)

##### Returns

[`Crypto`](crypto.Crypto.md)

#### Inherited from

[Crypto](crypto.Crypto.md).[get](crypto.Crypto.md#get)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:20

___

### getRandom

▪ `Static` `Readonly` **getRandom**: () => `Uint8Array`

#### Type declaration

▸ (): `Uint8Array`

##### Returns

`Uint8Array`

#### Inherited from

[Crypto](crypto.Crypto.md).[getRandom](crypto.Crypto.md#getrandom)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[getRandomBN](crypto.Crypto.md#getrandombn)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:31

___

### getRandomBigUInt64

▪ `Static` `Readonly` **getRandomBigUInt64**: () => `bigint`

#### Type declaration

▸ (): `bigint`

##### Returns

`bigint`

#### Inherited from

[Crypto](crypto.Crypto.md).[getRandomBigUInt64](crypto.Crypto.md#getrandombiguint64)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[getRandomData](crypto.Crypto.md#getrandomdata)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:26

___

### getRandomUInt16

▪ `Static` `Readonly` **getRandomUInt16**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Inherited from

[Crypto](crypto.Crypto.md).[getRandomUInt16](crypto.Crypto.md#getrandomuint16)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:28

___

### getRandomUInt32

▪ `Static` `Readonly` **getRandomUInt32**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Inherited from

[Crypto](crypto.Crypto.md).[getRandomUInt32](crypto.Crypto.md#getrandomuint32)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[hash](crypto.Crypto.md#hash)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[hkdf](crypto.Crypto.md#hkdf)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[hmac](crypto.Crypto.md#hmac)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[pbkdf2](crypto.Crypto.md#pbkdf2)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[signPkcs8](crypto.Crypto.md#signpkcs8)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[signSec1](crypto.Crypto.md#signsec1)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[verifySpki](crypto.Crypto.md#verifyspki)

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

#### Inherited from

[Crypto](crypto.Crypto.md).[verifySpkiEc](crypto.Crypto.md#verifyspkiec)

#### Defined in

packages/matter.js/dist/cjs/crypto/Crypto.d.ts:63

## Methods

### createKeyPair

▸ **createKeyPair**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `publicKey` | `Uint8Array` |

#### Overrides

[Crypto](crypto.Crypto.md).[createKeyPair](crypto.Crypto.md#createkeypair-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:148](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L148)

___

### decrypt

▸ **decrypt**(`key`, `data`, `nonce`, `aad?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad?` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Overrides

[Crypto](crypto.Crypto.md).[decrypt](crypto.Crypto.md#decrypt-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L28)

___

### ecdhGeneratePublicKey

▸ **ecdhGeneratePublicKey**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ecdh` | `any` |
| `publicKey` | `Uint8Array` |

#### Overrides

[Crypto](crypto.Crypto.md).[ecdhGeneratePublicKey](crypto.Crypto.md#ecdhgeneratepublickey-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L44)

___

### ecdhGeneratePublicKeyAndSecret

▸ **ecdhGeneratePublicKeyAndSecret**(`peerPublicKey`): `Object`

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

#### Overrides

[Crypto](crypto.Crypto.md).[ecdhGeneratePublicKeyAndSecret](crypto.Crypto.md#ecdhgeneratepublickeyandsecret-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L50)

___

### ecdhGenerateSecret

▸ **ecdhGenerateSecret**(`peerPublicKey`, `ecdh`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |
| `ecdh` | `ECDH` |

#### Returns

`Uint8Array`

#### Overrides

[Crypto](crypto.Crypto.md).[ecdhGenerateSecret](crypto.Crypto.md#ecdhgeneratesecret-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:56](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L56)

___

### encrypt

▸ **encrypt**(`key`, `data`, `nonce`, `aad?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad?` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Overrides

[Crypto](crypto.Crypto.md).[encrypt](crypto.Crypto.md#encrypt-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L18)

___

### getRandomData

▸ **getRandomData**(`length`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Overrides

[Crypto](crypto.Crypto.md).[getRandomData](crypto.Crypto.md#getrandomdata-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L40)

___

### hash

▸ **hash**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`Uint8Array`

#### Overrides

[Crypto](crypto.Crypto.md).[hash](crypto.Crypto.md#hash-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L60)

___

### hkdf

▸ **hkdf**(`secret`, `salt`, `info`, `length?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secret` | `Uint8Array` | `undefined` |
| `salt` | `Uint8Array` | `undefined` |
| `info` | `Uint8Array` | `undefined` |
| `length` | `number` | `CRYPTO_SYMMETRIC_KEY_LENGTH` |

#### Returns

`Promise`<`Uint8Array`\>

#### Overrides

[Crypto](crypto.Crypto.md).[hkdf](crypto.Crypto.md#hkdf-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:79](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L79)

___

### hmac

▸ **hmac**(`key`, `data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Overrides

[Crypto](crypto.Crypto.md).[hmac](crypto.Crypto.md#hmac-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:88](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L88)

___

### pbkdf2

▸ **pbkdf2**(`secret`, `salt`, `iteration`, `keyLength`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `iteration` | `number` |
| `keyLength` | `number` |

#### Returns

`Promise`<`Uint8Array`\>

#### Overrides

[Crypto](crypto.Crypto.md).[pbkdf2](crypto.Crypto.md#pbkdf2-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L70)

___

### signPkcs8

▸ **signPkcs8**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `privateKey` | `Uint8Array` | `undefined` |
| `data` | `Uint8Array` \| `Uint8Array`[] | `undefined` |
| `dsaEncoding` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) | `"ieee-p1363"` |

#### Returns

`Uint8Array`

#### Overrides

[Crypto](crypto.Crypto.md).[signPkcs8](crypto.Crypto.md#signpkcs8-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:94](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L94)

___

### signSec1

▸ **signSec1**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `privateKey` | `Uint8Array` | `undefined` |
| `data` | `Uint8Array` \| `Uint8Array`[] | `undefined` |
| `dsaEncoding` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) | `"ieee-p1363"` |

#### Returns

`Uint8Array`

#### Overrides

[Crypto](crypto.Crypto.md).[signSec1](crypto.Crypto.md#signsec1-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:109](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L109)

___

### verifySpki

▸ **verifySpki**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `publicKey` | `Uint8Array` | `undefined` |
| `data` | `Uint8Array` | `undefined` |
| `signature` | `Uint8Array` | `undefined` |
| `dsaEncoding` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) | `"ieee-p1363"` |

#### Returns

`void`

#### Overrides

[Crypto](crypto.Crypto.md).[verifySpki](crypto.Crypto.md#verifyspki-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:136](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L136)

___

### verifySpkiEc

▸ **verifySpkiEc**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `publicKey` | `Uint8Array` | `undefined` |
| `data` | `Uint8Array` | `undefined` |
| `signature` | `Uint8Array` | `undefined` |
| `dsaEncoding` | [`CryptoDsaEncoding`](../modules/crypto.md#cryptodsaencoding) | `"ieee-p1363"` |

#### Returns

`void`

#### Overrides

[Crypto](crypto.Crypto.md).[verifySpkiEc](crypto.Crypto.md#verifyspkiec-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:124](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/crypto/CryptoNode.ts#L124)
