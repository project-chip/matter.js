[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](../modules/exports_certificate.md) / AttestationCertificateManager

# Class: AttestationCertificateManager

[exports/certificate](../modules/exports_certificate.md).AttestationCertificateManager

## Table of contents

### Constructors

- [constructor](exports_certificate.AttestationCertificateManager.md#constructor)

### Properties

- [generatePAACert](exports_certificate.AttestationCertificateManager.md#generatepaacert)
- [generatePAICert](exports_certificate.AttestationCertificateManager.md#generatepaicert)
- [nextCertificateId](exports_certificate.AttestationCertificateManager.md#nextcertificateid)
- [paaCertId](exports_certificate.AttestationCertificateManager.md#paacertid)
- [paaKeyIdentifier](exports_certificate.AttestationCertificateManager.md#paakeyidentifier)
- [paaKeyPair](exports_certificate.AttestationCertificateManager.md#paakeypair)
- [paiCertBytes](exports_certificate.AttestationCertificateManager.md#paicertbytes)
- [paiCertId](exports_certificate.AttestationCertificateManager.md#paicertid)
- [paiKeyIdentifier](exports_certificate.AttestationCertificateManager.md#paikeyidentifier)
- [paiKeyPair](exports_certificate.AttestationCertificateManager.md#paikeypair)
- [vendorId](exports_certificate.AttestationCertificateManager.md#vendorid)

### Methods

- [generateDaCert](exports_certificate.AttestationCertificateManager.md#generatedacert)
- [getDACert](exports_certificate.AttestationCertificateManager.md#getdacert)
- [getPAICert](exports_certificate.AttestationCertificateManager.md#getpaicert)

## Constructors

### constructor

• **new AttestationCertificateManager**(`vendorId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:19

## Properties

### generatePAACert

• `Private` **generatePAACert**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:25

___

### generatePAICert

• `Private` **generatePAICert**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:26

___

### nextCertificateId

• `Private` **nextCertificateId**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:18

___

### paaCertId

• `Private` **paaCertId**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:11

___

### paaKeyIdentifier

• `Private` `Readonly` **paaKeyIdentifier**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:13

___

### paaKeyPair

• `Private` `Readonly` **paaKeyPair**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:12

___

### paiCertBytes

• `Private` `Readonly` **paiCertBytes**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:17

___

### paiCertId

• `Private` `Readonly` **paiCertId**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:14

___

### paiKeyIdentifier

• `Private` `Readonly` **paiKeyIdentifier**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:16

___

### paiKeyPair

• `Private` `Readonly` **paiKeyPair**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:15

___

### vendorId

• `Private` `Readonly` **vendorId**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:10

## Methods

### generateDaCert

▸ **generateDaCert**(`publicKey`, `vendorId`, `productId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `productId` | `number` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:27

___

### getDACert

▸ **getDACert**(`productId`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `productId` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dac` | `Uint8Array` |
| `keyPair` | [`PrivateKey`](../modules/crypto_export.md#privatekey) |

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:21

___

### getPAICert

▸ **getPAICert**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/certificate/AttestationCertificateManager.d.ts:20
