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
- [getRandomBigInt](crypto_export.Crypto.md#getrandombigint)
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

• **new Crypto**(): [`Crypto`](crypto_export.Crypto.md)

#### Returns

[`Crypto`](crypto_export.Crypto.md)

## Properties

### get

▪ `Static` **get**: () => [`Crypto`](crypto_export.Crypto.md)

#### Type declaration

▸ (): [`Crypto`](crypto_export.Crypto.md)

##### Returns

[`Crypto`](crypto_export.Crypto.md)

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L33)

## Methods

### createKeyPair

▸ **createKeyPair**(): [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L124)

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

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L41)

___

### ecdhGeneratePublicKey

▸ **ecdhGeneratePublicKey**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ecdh` | `any` |
| `publicKey` | `Uint8Array` |

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L70)

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

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L74)

___

### ecdhGenerateSecret

▸ **ecdhGenerateSecret**(`peerPublicKey`, `ecdh`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |
| `ecdh` | `any` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L82)

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

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L37)

___

### getRandomData

▸ **getRandomData**(`length`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L45)

___

### hash

▸ **hash**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L86)

___

### hkdf

▸ **hkdf**(`secret`, `salt`, `info`, `length?`): `Promise`\<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `info` | `Uint8Array` |
| `length?` | `number` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L97)

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

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L101)

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

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L89)

___

### sign

▸ **sign**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `JsonWebKey` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L104)

___

### verify

▸ **verify**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

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

[packages/matter.js/src/crypto/Crypto.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L111)

___

### createKeyPair

▸ **createKeyPair**(): [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L125)

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

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L42)

___

### ecdhGeneratePublicKey

▸ **ecdhGeneratePublicKey**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ecdh` | `any` |
| `publicKey` | `Uint8Array` |

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L71)

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

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L78)

___

### ecdhGenerateSecret

▸ **ecdhGenerateSecret**(`peerPublicKey`, `ecdh`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |
| `ecdh` | `any` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L83)

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

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L38)

___

### getRandom

▸ **getRandom**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L48)

___

### getRandomBigInt

▸ **getRandomBigInt**(`size`, `maxValue?`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `maxValue?` | `bigint` |

#### Returns

`bigint`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L59)

___

### getRandomBigUInt64

▸ **getRandomBigUInt64**(): `bigint`

#### Returns

`bigint`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L56)

___

### getRandomData

▸ **getRandomData**(`length`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L46)

___

### getRandomUInt16

▸ **getRandomUInt16**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L50)

___

### getRandomUInt32

▸ **getRandomUInt32**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L53)

___

### hash

▸ **hash**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L87)

___

### hkdf

▸ **hkdf**(`secret`, `salt`, `info`, `length?`): `Promise`\<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `info` | `Uint8Array` |
| `length?` | `number` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L98)

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

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L102)

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

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L90)

___

### sign

▸ **sign**(`privateKey`, `data`, `dsaEncoding?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `JsonWebKey` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding?` | [`CryptoDsaEncoding`](../modules/crypto_export.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/crypto/Crypto.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L105)

___

### verify

▸ **verify**(`publicKey`, `data`, `signature`, `dsaEncoding?`): `void`

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

[packages/matter.js/src/crypto/Crypto.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/crypto/Crypto.ts#L117)
