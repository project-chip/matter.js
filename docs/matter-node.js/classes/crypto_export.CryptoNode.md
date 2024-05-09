[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [crypto/export](../modules/crypto_export.md) / CryptoNode

# Class: CryptoNode

[crypto/export](../modules/crypto_export.md).CryptoNode

## Hierarchy

- [`Crypto`](crypto_export.Crypto.md)

  ↳ **`CryptoNode`**

## Table of contents

### Constructors

- [constructor](crypto_export.CryptoNode.md#constructor)

### Properties

- [createKeyPair](crypto_export.CryptoNode.md#createkeypair)
- [decrypt](crypto_export.CryptoNode.md#decrypt)
- [ecdhGeneratePublicKey](crypto_export.CryptoNode.md#ecdhgeneratepublickey)
- [ecdhGeneratePublicKeyAndSecret](crypto_export.CryptoNode.md#ecdhgeneratepublickeyandsecret)
- [ecdhGenerateSecret](crypto_export.CryptoNode.md#ecdhgeneratesecret)
- [encrypt](crypto_export.CryptoNode.md#encrypt)
- [get](crypto_export.CryptoNode.md#get)
- [getRandom](crypto_export.CryptoNode.md#getrandom)
- [getRandomBigInt](crypto_export.CryptoNode.md#getrandombigint)
- [getRandomBigUInt64](crypto_export.CryptoNode.md#getrandombiguint64)
- [getRandomData](crypto_export.CryptoNode.md#getrandomdata)
- [getRandomUInt16](crypto_export.CryptoNode.md#getrandomuint16)
- [getRandomUInt32](crypto_export.CryptoNode.md#getrandomuint32)
- [hash](crypto_export.CryptoNode.md#hash)
- [hkdf](crypto_export.CryptoNode.md#hkdf)
- [hmac](crypto_export.CryptoNode.md#hmac)
- [pbkdf2](crypto_export.CryptoNode.md#pbkdf2)
- [sign](crypto_export.CryptoNode.md#sign)
- [verify](crypto_export.CryptoNode.md#verify)

### Methods

- [createKeyPair](crypto_export.CryptoNode.md#createkeypair-1)
- [decrypt](crypto_export.CryptoNode.md#decrypt-1)
- [ecdhGeneratePublicKey](crypto_export.CryptoNode.md#ecdhgeneratepublickey-1)
- [ecdhGeneratePublicKeyAndSecret](crypto_export.CryptoNode.md#ecdhgeneratepublickeyandsecret-1)
- [ecdhGenerateSecret](crypto_export.CryptoNode.md#ecdhgeneratesecret-1)
- [encrypt](crypto_export.CryptoNode.md#encrypt-1)
- [getRandomData](crypto_export.CryptoNode.md#getrandomdata-1)
- [hash](crypto_export.CryptoNode.md#hash-1)
- [hkdf](crypto_export.CryptoNode.md#hkdf-1)
- [hmac](crypto_export.CryptoNode.md#hmac-1)
- [pbkdf2](crypto_export.CryptoNode.md#pbkdf2-1)
- [sign](crypto_export.CryptoNode.md#sign-1)
- [verify](crypto_export.CryptoNode.md#verify-1)

## Constructors

### constructor

• **new CryptoNode**(): [`CryptoNode`](crypto_export.CryptoNode.md)

#### Returns

[`CryptoNode`](crypto_export.CryptoNode.md)

#### Inherited from

[Crypto](crypto_export.Crypto.md).[constructor](crypto_export.Crypto.md#constructor)

## Properties

### createKeyPair

▪ `Static` `Readonly` **createKeyPair**: () => [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Type declaration

▸ (): [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

##### Returns

[`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Inherited from

[Crypto](crypto_export.Crypto.md).[createKeyPair](crypto_export.Crypto.md#createkeypair)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:168

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

[Crypto](crypto_export.Crypto.md).[decrypt](crypto_export.Crypto.md#decrypt)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:129

___

### ecdhGeneratePublicKey

▪ `Static` `Readonly` **ecdhGeneratePublicKey**: () => \{ `ecdh`: `any` ; `publicKey`: `Uint8Array`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ecdh` | `any` |
| `publicKey` | `Uint8Array` |

#### Inherited from

[Crypto](crypto_export.Crypto.md).[ecdhGeneratePublicKey](crypto_export.Crypto.md#ecdhgeneratepublickey)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:141

___

### ecdhGeneratePublicKeyAndSecret

▪ `Static` `Readonly` **ecdhGeneratePublicKeyAndSecret**: (`peerPublicKey`: `Uint8Array`) => \{ `publicKey`: `Uint8Array` ; `sharedSecret`: `Uint8Array`  }

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

[Crypto](crypto_export.Crypto.md).[ecdhGeneratePublicKeyAndSecret](crypto_export.Crypto.md#ecdhgeneratepublickeyandsecret)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:149

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

[Crypto](crypto_export.Crypto.md).[ecdhGenerateSecret](crypto_export.Crypto.md#ecdhgeneratesecret)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:154

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

[Crypto](crypto_export.Crypto.md).[encrypt](crypto_export.Crypto.md#encrypt)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:127

___

### get

▪ `Static` **get**: () => [`Crypto`](crypto_export.Crypto.md)

#### Type declaration

▸ (): [`Crypto`](crypto_export.Crypto.md)

##### Returns

[`Crypto`](crypto_export.Crypto.md)

#### Inherited from

[Crypto](crypto_export.Crypto.md).[get](crypto_export.Crypto.md#get)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:125

___

### getRandom

▪ `Static` `Readonly` **getRandom**: () => `Uint8Array`

#### Type declaration

▸ (): `Uint8Array`

##### Returns

`Uint8Array`

#### Inherited from

[Crypto](crypto_export.Crypto.md).[getRandom](crypto_export.Crypto.md#getrandom)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:132

___

### getRandomBigInt

▪ `Static` `Readonly` **getRandomBigInt**: (`size`: `number`, `maxValue?`: `bigint`) => `bigint`

#### Type declaration

▸ (`size`, `maxValue?`): `bigint`

##### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `maxValue?` | `bigint` |

##### Returns

`bigint`

#### Inherited from

[Crypto](crypto_export.Crypto.md).[getRandomBigInt](crypto_export.Crypto.md#getrandombigint)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:136

___

### getRandomBigUInt64

▪ `Static` `Readonly` **getRandomBigUInt64**: () => `bigint`

#### Type declaration

▸ (): `bigint`

##### Returns

`bigint`

#### Inherited from

[Crypto](crypto_export.Crypto.md).[getRandomBigUInt64](crypto_export.Crypto.md#getrandombiguint64)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:135

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

[Crypto](crypto_export.Crypto.md).[getRandomData](crypto_export.Crypto.md#getrandomdata)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:131

___

### getRandomUInt16

▪ `Static` `Readonly` **getRandomUInt16**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Inherited from

[Crypto](crypto_export.Crypto.md).[getRandomUInt16](crypto_export.Crypto.md#getrandomuint16)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:133

___

### getRandomUInt32

▪ `Static` `Readonly` **getRandomUInt32**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Inherited from

[Crypto](crypto_export.Crypto.md).[getRandomUInt32](crypto_export.Crypto.md#getrandomuint32)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:134

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

[Crypto](crypto_export.Crypto.md).[hash](crypto_export.Crypto.md#hash)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:156

___

### hkdf

▪ `Static` `Readonly` **hkdf**: (`secret`: `Uint8Array`, `salt`: `Uint8Array`, `info`: `Uint8Array`, `length?`: `number`) => `Promise`\<`Uint8Array`\>

#### Type declaration

▸ (`secret`, `salt`, `info`, `length?`): `Promise`\<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `info` | `Uint8Array` |
| `length?` | `number` |

##### Returns

`Promise`\<`Uint8Array`\>

#### Inherited from

[Crypto](crypto_export.Crypto.md).[hkdf](crypto_export.Crypto.md#hkdf)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:160

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

[Crypto](crypto_export.Crypto.md).[hmac](crypto_export.Crypto.md#hmac)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:162

___

### pbkdf2

▪ `Static` `Readonly` **pbkdf2**: (`secret`: `Uint8Array`, `salt`: `Uint8Array`, `iteration`: `number`, `keyLength`: `number`) => `Promise`\<`Uint8Array`\>

#### Type declaration

▸ (`secret`, `salt`, `iteration`, `keyLength`): `Promise`\<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `iteration` | `number` |
| `keyLength` | `number` |

##### Returns

`Promise`\<`Uint8Array`\>

#### Inherited from

[Crypto](crypto_export.Crypto.md).[pbkdf2](crypto_export.Crypto.md#pbkdf2)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:158

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

#### Inherited from

[Crypto](crypto_export.Crypto.md).[sign](crypto_export.Crypto.md#sign)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:164

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

#### Inherited from

[Crypto](crypto_export.Crypto.md).[verify](crypto_export.Crypto.md#verify)

#### Defined in

packages/matter.js/dist/esm/crypto/Crypto.d.ts:166

## Methods

### createKeyPair

▸ **createKeyPair**(): [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Overrides

[Crypto](crypto_export.Crypto.md).[createKeyPair](crypto_export.Crypto.md#createkeypair-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L152)

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

[Crypto](crypto_export.Crypto.md).[decrypt](crypto_export.Crypto.md#decrypt-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L35)

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

[Crypto](crypto_export.Crypto.md).[ecdhGeneratePublicKey](crypto_export.Crypto.md#ecdhgeneratepublickey-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L53)

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

[Crypto](crypto_export.Crypto.md).[ecdhGeneratePublicKeyAndSecret](crypto_export.Crypto.md#ecdhgeneratepublickeyandsecret-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L59)

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

[Crypto](crypto_export.Crypto.md).[ecdhGenerateSecret](crypto_export.Crypto.md#ecdhgeneratesecret-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L68)

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

[Crypto](crypto_export.Crypto.md).[encrypt](crypto_export.Crypto.md#encrypt-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L23)

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

[Crypto](crypto_export.Crypto.md).[getRandomData](crypto_export.Crypto.md#getrandomdata-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L49)

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

[Crypto](crypto_export.Crypto.md).[hash](crypto_export.Crypto.md#hash-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L72)

___

### hkdf

▸ **hkdf**(`secret`, `salt`, `info`, `length?`): `Promise`\<`Uint8Array`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secret` | `Uint8Array` | `undefined` |
| `salt` | `Uint8Array` | `undefined` |
| `info` | `Uint8Array` | `undefined` |
| `length` | `number` | `CRYPTO_SYMMETRIC_KEY_LENGTH` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Overrides

[Crypto](crypto_export.Crypto.md).[hkdf](crypto_export.Crypto.md#hkdf-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L91)

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

[Crypto](crypto_export.Crypto.md).[hmac](crypto_export.Crypto.md#hmac-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L105)

___

### pbkdf2

▸ **pbkdf2**(`secret`, `salt`, `iteration`, `keyLength`): `Promise`\<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `iteration` | `number` |
| `keyLength` | `number` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Overrides

[Crypto](crypto_export.Crypto.md).[pbkdf2](crypto_export.Crypto.md#pbkdf2-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L82)

___

### sign

▸ **sign**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `privateKey` | `JsonWebKey` | `undefined` |
| `data` | `Uint8Array` \| `Uint8Array`[] | `undefined` |
| `dsaEncoding` | [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding) | `"ieee-p1363"` |

#### Returns

`Uint8Array`

#### Overrides

[Crypto](crypto_export.Crypto.md).[sign](crypto_export.Crypto.md#sign-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L111)

___

### verify

▸ **verify**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `publicKey` | `JsonWebKey` | `undefined` |
| `data` | `Uint8Array` | `undefined` |
| `signature` | `Uint8Array` | `undefined` |
| `dsaEncoding` | [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding) | `"ieee-p1363"` |

#### Returns

`void`

#### Overrides

[Crypto](crypto_export.Crypto.md).[verify](crypto_export.Crypto.md#verify-1)

#### Defined in

[packages/matter-node.js/src/crypto/CryptoNode.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/crypto/CryptoNode.ts#L132)
