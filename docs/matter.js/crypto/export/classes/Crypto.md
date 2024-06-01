[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [crypto/export](../README.md) / Crypto

# Class: `abstract` Crypto

## Constructors

### new Crypto()

> **new Crypto**(): [`Crypto`](Crypto.md)

#### Returns

[`Crypto`](Crypto.md)

## Properties

### get()

> `static` **get**: () => [`Crypto`](Crypto.md)

#### Returns

[`Crypto`](Crypto.md)

#### Source

[packages/matter.js/src/crypto/Crypto.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L33)

## Methods

### createKeyPair()

> `abstract` **createKeyPair**(): [`PrivateKey`](../interfaces/PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/PrivateKey.md)

#### Source

[packages/matter.js/src/crypto/Crypto.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L124)

***

### decrypt()

> `abstract` **decrypt**(`key`, `data`, `nonce`, `aad`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad`? | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L41)

***

### ecdhGeneratePublicKey()

> `abstract` **ecdhGeneratePublicKey**(): `object`

#### Returns

`object`

##### ecdh

> **ecdh**: `any`

##### publicKey

> **publicKey**: `Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L70)

***

### ecdhGeneratePublicKeyAndSecret()

> `abstract` **ecdhGeneratePublicKeyAndSecret**(`peerPublicKey`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |

#### Returns

`object`

##### publicKey

> **publicKey**: `Uint8Array`

##### sharedSecret

> **sharedSecret**: `Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L74)

***

### ecdhGenerateSecret()

> `abstract` **ecdhGenerateSecret**(`peerPublicKey`, `ecdh`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |
| `ecdh` | `any` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L82)

***

### encrypt()

> `abstract` **encrypt**(`key`, `data`, `nonce`, `aad`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad`? | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L37)

***

### getRandomData()

> `abstract` **getRandomData**(`length`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L45)

***

### hash()

> `abstract` **hash**(`data`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L86)

***

### hkdf()

> `abstract` **hkdf**(`secret`, `salt`, `info`, `length`?): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `info` | `Uint8Array` |
| `length`? | `number` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

[packages/matter.js/src/crypto/Crypto.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L97)

***

### hmac()

> `abstract` **hmac**(`key`, `data`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L101)

***

### pbkdf2()

> `abstract` **pbkdf2**(`secret`, `salt`, `iteration`, `keyLength`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `iteration` | `number` |
| `keyLength` | `number` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

[packages/matter.js/src/crypto/Crypto.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L89)

***

### sign()

> `abstract` **sign**(`privateKey`, `data`, `dsaEncoding`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `privateKey` | `JsonWebKey` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding`? | [`CryptoDsaEncoding`](../README.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L104)

***

### verify()

> `abstract` **verify**(`publicKey`, `data`, `signature`, `dsaEncoding`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `publicKey` | `JsonWebKey` |
| `data` | `Uint8Array` |
| `signature` | `Uint8Array` |
| `dsaEncoding`? | [`CryptoDsaEncoding`](../README.md#cryptodsaencoding) |

#### Returns

`void`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L111)

***

### createKeyPair()

> `static` `readonly` **createKeyPair**(): [`PrivateKey`](../interfaces/PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/PrivateKey.md)

#### Source

[packages/matter.js/src/crypto/Crypto.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L125)

***

### decrypt()

> `static` `readonly` **decrypt**(`key`, `data`, `nonce`, `aad`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad`? | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L42)

***

### ecdhGeneratePublicKey()

> `static` `readonly` **ecdhGeneratePublicKey**(): `object`

#### Returns

`object`

##### ecdh

> **ecdh**: `any`

##### publicKey

> **publicKey**: `Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L71)

***

### ecdhGeneratePublicKeyAndSecret()

> `static` `readonly` **ecdhGeneratePublicKeyAndSecret**(`peerPublicKey`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |

#### Returns

`object`

##### publicKey

> **publicKey**: `Uint8Array`

##### sharedSecret

> **sharedSecret**: `Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L78)

***

### ecdhGenerateSecret()

> `static` `readonly` **ecdhGenerateSecret**(`peerPublicKey`, `ecdh`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |
| `ecdh` | `any` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L83)

***

### encrypt()

> `static` `readonly` **encrypt**(`key`, `data`, `nonce`, `aad`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad`? | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L38)

***

### getRandom()

> `static` `readonly` **getRandom**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L48)

***

### getRandomBigInt()

> `static` `readonly` **getRandomBigInt**(`size`, `maxValue`?): `bigint`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `size` | `number` |
| `maxValue`? | `bigint` |

#### Returns

`bigint`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L59)

***

### getRandomBigUInt64()

> `static` `readonly` **getRandomBigUInt64**(): `bigint`

#### Returns

`bigint`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L56)

***

### getRandomData()

> `static` `readonly` **getRandomData**(`length`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L46)

***

### getRandomUInt16()

> `static` `readonly` **getRandomUInt16**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L50)

***

### getRandomUInt32()

> `static` `readonly` **getRandomUInt32**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L53)

***

### hash()

> `static` `readonly` **hash**(`data`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L87)

***

### hkdf()

> `static` `readonly` **hkdf**(`secret`, `salt`, `info`, `length`?): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `info` | `Uint8Array` |
| `length`? | `number` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

[packages/matter.js/src/crypto/Crypto.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L98)

***

### hmac()

> `static` `readonly` **hmac**(`key`, `data`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L102)

***

### pbkdf2()

> `static` `readonly` **pbkdf2**(`secret`, `salt`, `iteration`, `keyLength`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `iteration` | `number` |
| `keyLength` | `number` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

[packages/matter.js/src/crypto/Crypto.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L90)

***

### sign()

> `static` `readonly` **sign**(`privateKey`, `data`, `dsaEncoding`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `privateKey` | `JsonWebKey` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding`? | [`CryptoDsaEncoding`](../README.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L105)

***

### verify()

> `static` `readonly` **verify**(`publicKey`, `data`, `signature`, `dsaEncoding`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `publicKey` | `JsonWebKey` |
| `data` | `Uint8Array` |
| `signature` | `Uint8Array` |
| `dsaEncoding`? | [`CryptoDsaEncoding`](../README.md#cryptodsaencoding) |

#### Returns

`void`

#### Source

[packages/matter.js/src/crypto/Crypto.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/crypto/Crypto.ts#L117)
