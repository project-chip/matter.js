[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/certificate](../README.md) / AttestationCertificateManager

# Class: AttestationCertificateManager

## Constructors

### new AttestationCertificateManager()

> **new AttestationCertificateManager**(`vendorId`): [`AttestationCertificateManager`](AttestationCertificateManager.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../../datatype/README.md#vendorid) |

#### Returns

[`AttestationCertificateManager`](AttestationCertificateManager.md)

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:19

## Properties

### generatePAACert

> `private` **generatePAACert**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:25

***

### generatePAICert

> `private` **generatePAICert**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:26

***

### nextCertificateId

> `private` **nextCertificateId**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:18

***

### paaCertId

> `private` **paaCertId**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:11

***

### paaKeyIdentifier

> `private` `readonly` **paaKeyIdentifier**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:13

***

### paaKeyPair

> `private` `readonly` **paaKeyPair**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:12

***

### paiCertBytes

> `private` `readonly` **paiCertBytes**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:17

***

### paiCertId

> `private` `readonly` **paiCertId**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:14

***

### paiKeyIdentifier

> `private` `readonly` **paiKeyIdentifier**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:16

***

### paiKeyPair

> `private` `readonly` **paiKeyPair**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:15

***

### vendorId

> `private` `readonly` **vendorId**: `any`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:10

## Methods

### generateDaCert()

> **generateDaCert**(`publicKey`, `vendorId`, `productId`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `vendorId` | [`VendorId`](../../datatype/README.md#vendorid) |
| `productId` | `number` |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:27

***

### getDACert()

> **getDACert**(`productId`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `productId` | `number` |

#### Returns

`object`

##### dac

> **dac**: `Uint8Array`

##### keyPair

> **keyPair**: [`PrivateKey`](../../../crypto/export/interfaces/PrivateKey.md)

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:21

***

### getPAICert()

> **getPAICert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/AttestationCertificateManager.d.ts:20
