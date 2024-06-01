[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [crypto/export](../README.md) / Crypto

# Class: `abstract` Crypto

## Extended by

- [`CryptoNode`](CryptoNode.md)

## Constructors

### new Crypto()

> **new Crypto**(): [`Crypto`](Crypto.md)

#### Returns

[`Crypto`](Crypto.md)

## Properties

### createKeyPair()

> `static` `readonly` **createKeyPair**: () => [`PrivateKey`](../interfaces/PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/PrivateKey.md)

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

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:127

***

### get()

> `static` **get**: () => [`Crypto`](Crypto.md)

#### Returns

[`Crypto`](Crypto.md)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:125

***

### getRandom()

> `static` `readonly` **getRandom**: () => `Uint8Array`

#### Returns

`Uint8Array`

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

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:136

***

### getRandomBigUInt64()

> `static` `readonly` **getRandomBigUInt64**: () => `bigint`

#### Returns

`bigint`

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

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:131

***

### getRandomUInt16()

> `static` `readonly` **getRandomUInt16**: () => `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:133

***

### getRandomUInt32()

> `static` `readonly` **getRandomUInt32**: () => `number`

#### Returns

`number`

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

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:166

## Methods

### createKeyPair()

> `abstract` **createKeyPair**(): [`PrivateKey`](../interfaces/PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/PrivateKey.md)

#### Source

packages/matter.js/dist/esm/crypto/Crypto.d.ts:167

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:128

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:137

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:145

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:153

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:126

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:130

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:155

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:159

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:161

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:157

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:163

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

packages/matter.js/dist/esm/crypto/Crypto.d.ts:165
