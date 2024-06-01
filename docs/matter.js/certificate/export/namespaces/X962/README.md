[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [certificate/export](../../README.md) / X962

# Namespace: X962

## Variables

### EcdsaWithSHA256

> `const` **EcdsaWithSHA256**: `any`

#### Source

[packages/matter.js/src/certificate/CertificateDerTypes.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateDerTypes.ts#L28)

## Functions

### PublicKeyEcPrime256v1()

> **PublicKeyEcPrime256v1**(`key`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |

#### Returns

`object`

##### bytes

> **bytes**: `object`

##### bytes.\_bytes

> **\_bytes**: `Uint8Array` = `data`

##### bytes.\_padding

> **\_padding**: `number` = `padding`

##### bytes.\_tag

> **\_tag**: `number`

##### type

> **type**: `object`

##### type.algorithm

> **algorithm**: `object`

##### type.algorithm.\_bytes

> **\_bytes**: `Uint8Array`

##### type.algorithm.\_tag

> **\_tag**: `number`

##### type.curve

> **curve**: `object`

##### type.curve.\_bytes

> **\_bytes**: `Uint8Array`

##### type.curve.\_tag

> **\_tag**: `number`

#### Source

[packages/matter.js/src/certificate/CertificateDerTypes.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateDerTypes.ts#L21)
