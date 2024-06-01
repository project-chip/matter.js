[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [crypto/export](../README.md) / CryptoNode

# Class: CryptoNode

## Extends

- [`Crypto`](Crypto.md)

## Constructors

### new CryptoNode()

> **new CryptoNode**(): [`CryptoNode`](CryptoNode.md)

#### Returns

[`CryptoNode`](CryptoNode.md)

#### Inherited from

[`Crypto`](Crypto.md).[`constructor`](Crypto.md#constructors)

## Properties

### createKeyPair()

> `static` `readonly` **createKeyPair**: () => [`PrivateKey`](../interfaces/PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/PrivateKey.md)

#### Inherited from

[`Crypto`](Crypto.md).[`createKeyPair`](Crypto.md#createkeypair)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:168

***

### decrypt()

> `static` `readonly` **decrypt**: (`key`, `data`, `nonce`, `aad`?) => `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad`? | `Uint8Array` |

#### Returns

`Uint8Array`

#### Inherited from

[`Crypto`](Crypto.md).[`decrypt`](Crypto.md#decrypt)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:129

***

### ecdhGeneratePublicKey()

> `static` `readonly` **ecdhGeneratePublicKey**: () => `object`

#### Returns

`object`

##### ecdh

> **ecdh**: `any`

##### publicKey

> **publicKey**: `Uint8Array`

#### Inherited from

[`Crypto`](Crypto.md).[`ecdhGeneratePublicKey`](Crypto.md#ecdhgeneratepublickey)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:141

***

### ecdhGeneratePublicKeyAndSecret()

> `static` `readonly` **ecdhGeneratePublicKeyAndSecret**: (`peerPublicKey`) => `object`

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

#### Inherited from

[`Crypto`](Crypto.md).[`ecdhGeneratePublicKeyAndSecret`](Crypto.md#ecdhgeneratepublickeyandsecret)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:149

***

### ecdhGenerateSecret()

> `static` `readonly` **ecdhGenerateSecret**: (`peerPublicKey`, `ecdh`) => `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |
| `ecdh` | `any` |

#### Returns

`Uint8Array`

#### Inherited from

[`Crypto`](Crypto.md).[`ecdhGenerateSecret`](Crypto.md#ecdhgeneratesecret)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:154

***

### encrypt()

> `static` `readonly` **encrypt**: (`key`, `data`, `nonce`, `aad`?) => `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad`? | `Uint8Array` |

#### Returns

`Uint8Array`

#### Inherited from

[`Crypto`](Crypto.md).[`encrypt`](Crypto.md#encrypt)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:127

***

### get()

> `static` **get**: () => [`Crypto`](Crypto.md)

#### Returns

[`Crypto`](Crypto.md)

#### Inherited from

[`Crypto`](Crypto.md).[`get`](Crypto.md#get)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:125

***

### getRandom()

> `static` `readonly` **getRandom**: () => `Uint8Array`

#### Returns

`Uint8Array`

#### Inherited from

[`Crypto`](Crypto.md).[`getRandom`](Crypto.md#getrandom)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:132

***

### getRandomBigInt()

> `static` `readonly` **getRandomBigInt**: (`size`, `maxValue`?) => `bigint`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `size` | `number` |
| `maxValue`? | `bigint` |

#### Returns

`bigint`

#### Inherited from

[`Crypto`](Crypto.md).[`getRandomBigInt`](Crypto.md#getrandombigint)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:136

***

### getRandomBigUInt64()

> `static` `readonly` **getRandomBigUInt64**: () => `bigint`

#### Returns

`bigint`

#### Inherited from

[`Crypto`](Crypto.md).[`getRandomBigUInt64`](Crypto.md#getrandombiguint64)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:135

***

### getRandomData()

> `static` `readonly` **getRandomData**: (`length`) => `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Inherited from

[`Crypto`](Crypto.md).[`getRandomData`](Crypto.md#getrandomdata)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:131

***

### getRandomUInt16()

> `static` `readonly` **getRandomUInt16**: () => `number`

#### Returns

`number`

#### Inherited from

[`Crypto`](Crypto.md).[`getRandomUInt16`](Crypto.md#getrandomuint16)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:133

***

### getRandomUInt32()

> `static` `readonly` **getRandomUInt32**: () => `number`

#### Returns

`number`

#### Inherited from

[`Crypto`](Crypto.md).[`getRandomUInt32`](Crypto.md#getrandomuint32)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:134

***

### hash()

> `static` `readonly` **hash**: (`data`) => `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`Uint8Array`

#### Inherited from

[`Crypto`](Crypto.md).[`hash`](Crypto.md#hash)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:156

***

### hkdf()

> `static` `readonly` **hkdf**: (`secret`, `salt`, `info`, `length`?) => `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `info` | `Uint8Array` |
| `length`? | `number` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Inherited from

[`Crypto`](Crypto.md).[`hkdf`](Crypto.md#hkdf)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:160

***

### hmac()

> `static` `readonly` **hmac**: (`key`, `data`) => `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Inherited from

[`Crypto`](Crypto.md).[`hmac`](Crypto.md#hmac)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:162

***

### pbkdf2()

> `static` `readonly` **pbkdf2**: (`secret`, `salt`, `iteration`, `keyLength`) => `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `iteration` | `number` |
| `keyLength` | `number` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Inherited from

[`Crypto`](Crypto.md).[`pbkdf2`](Crypto.md#pbkdf2)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:158

***

### sign()

> `static` `readonly` **sign**: (`privateKey`, `data`, `dsaEncoding`?) => `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `privateKey` | `JsonWebKey` |
| `data` | `Uint8Array` \| `Uint8Array`[] |
| `dsaEncoding`? | [`CryptoDsaEncoding`](../README.md#cryptodsaencoding) |

#### Returns

`Uint8Array`

#### Inherited from

[`Crypto`](Crypto.md).[`sign`](Crypto.md#sign)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:164

***

### verify()

> `static` `readonly` **verify**: (`publicKey`, `data`, `signature`, `dsaEncoding`?) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `publicKey` | `JsonWebKey` |
| `data` | `Uint8Array` |
| `signature` | `Uint8Array` |
| `dsaEncoding`? | [`CryptoDsaEncoding`](../README.md#cryptodsaencoding) |

#### Returns

`void`

#### Inherited from

[`Crypto`](Crypto.md).[`verify`](Crypto.md#verify)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:166

## Methods

### createKeyPair()

> **createKeyPair**(): [`PrivateKey`](../interfaces/PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/PrivateKey.md)

#### Overrides

[`Crypto`](Crypto.md).[`createKeyPair`](Crypto.md#createkeypair-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L152)

***

### decrypt()

> **decrypt**(`key`, `data`, `nonce`, `aad`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad`? | `Uint8Array` |

#### Returns

`Uint8Array`

#### Overrides

[`Crypto`](Crypto.md).[`decrypt`](Crypto.md#decrypt-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L35)

***

### ecdhGeneratePublicKey()

> **ecdhGeneratePublicKey**(): `object`

#### Returns

`object`

##### ecdh

> **ecdh**: `any`

##### publicKey

> **publicKey**: `Uint8Array`

#### Overrides

[`Crypto`](Crypto.md).[`ecdhGeneratePublicKey`](Crypto.md#ecdhgeneratepublickey-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L53)

***

### ecdhGeneratePublicKeyAndSecret()

> **ecdhGeneratePublicKeyAndSecret**(`peerPublicKey`): `object`

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

#### Overrides

[`Crypto`](Crypto.md).[`ecdhGeneratePublicKeyAndSecret`](Crypto.md#ecdhgeneratepublickeyandsecret-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L59)

***

### ecdhGenerateSecret()

> **ecdhGenerateSecret**(`peerPublicKey`, `ecdh`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerPublicKey` | `Uint8Array` |
| `ecdh` | `ECDH` |

#### Returns

`Uint8Array`

#### Overrides

[`Crypto`](Crypto.md).[`ecdhGenerateSecret`](Crypto.md#ecdhgeneratesecret-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L68)

***

### encrypt()

> **encrypt**(`key`, `data`, `nonce`, `aad`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |
| `nonce` | `Uint8Array` |
| `aad`? | `Uint8Array` |

#### Returns

`Uint8Array`

#### Overrides

[`Crypto`](Crypto.md).[`encrypt`](Crypto.md#encrypt-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L23)

***

### getRandomData()

> **getRandomData**(`length`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Overrides

[`Crypto`](Crypto.md).[`getRandomData`](Crypto.md#getrandomdata-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L49)

***

### hash()

> **hash**(`data`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`Uint8Array`

#### Overrides

[`Crypto`](Crypto.md).[`hash`](Crypto.md#hash-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L72)

***

### hkdf()

> **hkdf**(`secret`, `salt`, `info`, `length`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `secret` | `Uint8Array` | `undefined` |
| `salt` | `Uint8Array` | `undefined` |
| `info` | `Uint8Array` | `undefined` |
| `length` | `number` | `CRYPTO_SYMMETRIC_KEY_LENGTH` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Overrides

[`Crypto`](Crypto.md).[`hkdf`](Crypto.md#hkdf-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L91)

***

### hmac()

> **hmac**(`key`, `data`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Overrides

[`Crypto`](Crypto.md).[`hmac`](Crypto.md#hmac-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L105)

***

### pbkdf2()

> **pbkdf2**(`secret`, `salt`, `iteration`, `keyLength`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `secret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `iteration` | `number` |
| `keyLength` | `number` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Overrides

[`Crypto`](Crypto.md).[`pbkdf2`](Crypto.md#pbkdf2-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L82)

***

### sign()

> **sign**(`privateKey`, `data`, `dsaEncoding`): `Uint8Array`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `privateKey` | `JsonWebKey` | `undefined` |
| `data` | `Uint8Array` \| `Uint8Array`[] | `undefined` |
| `dsaEncoding` | [`CryptoDsaEncoding`](../README.md#cryptodsaencoding) | `"ieee-p1363"` |

#### Returns

`Uint8Array`

#### Overrides

[`Crypto`](Crypto.md).[`sign`](Crypto.md#sign-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L111)

***

### verify()

> **verify**(`publicKey`, `data`, `signature`, `dsaEncoding`): `void`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `publicKey` | `JsonWebKey` | `undefined` |
| `data` | `Uint8Array` | `undefined` |
| `signature` | `Uint8Array` | `undefined` |
| `dsaEncoding` | [`CryptoDsaEncoding`](../README.md#cryptodsaencoding) | `"ieee-p1363"` |

#### Returns

`void`

#### Overrides

[`Crypto`](Crypto.md).[`verify`](Crypto.md#verify-1)

#### Source

[packages/matter-node.js/src/crypto/CryptoNode.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/crypto/CryptoNode.ts#L132)
