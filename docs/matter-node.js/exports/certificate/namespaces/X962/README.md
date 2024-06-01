[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/certificate](../../README.md) / X962

# Namespace: X962

## Variables

### EcdsaWithSHA256

> `const` **EcdsaWithSHA256**: `any`

#### Source

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:25

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

> **\_bytes**: `Uint8Array`

##### bytes.\_padding

> **\_padding**: `number`

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

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:8
