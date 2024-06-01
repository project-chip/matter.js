[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / AttestationCertificateManager

# Class: AttestationCertificateManager

[certificate/export](../modules/certificate_export.md).AttestationCertificateManager

## Table of contents

### Constructors

- [constructor](certificate_export.AttestationCertificateManager.md#constructor)

### Properties

- [nextCertificateId](certificate_export.AttestationCertificateManager.md#nextcertificateid)
- [paaCertId](certificate_export.AttestationCertificateManager.md#paacertid)
- [paaKeyIdentifier](certificate_export.AttestationCertificateManager.md#paakeyidentifier)
- [paaKeyPair](certificate_export.AttestationCertificateManager.md#paakeypair)
- [paiCertBytes](certificate_export.AttestationCertificateManager.md#paicertbytes)
- [paiCertId](certificate_export.AttestationCertificateManager.md#paicertid)
- [paiKeyIdentifier](certificate_export.AttestationCertificateManager.md#paikeyidentifier)
- [paiKeyPair](certificate_export.AttestationCertificateManager.md#paikeypair)
- [vendorId](certificate_export.AttestationCertificateManager.md#vendorid)

### Methods

- [generateDaCert](certificate_export.AttestationCertificateManager.md#generatedacert)
- [generatePAACert](certificate_export.AttestationCertificateManager.md#generatepaacert)
- [generatePAICert](certificate_export.AttestationCertificateManager.md#generatepaicert)
- [getDACert](certificate_export.AttestationCertificateManager.md#getdacert)
- [getPAICert](certificate_export.AttestationCertificateManager.md#getpaicert)

## Constructors

### constructor

• **new AttestationCertificateManager**(`vendorId`): [`AttestationCertificateManager`](certificate_export.AttestationCertificateManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Returns

[`AttestationCertificateManager`](certificate_export.AttestationCertificateManager.md)

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:51](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L51)

## Properties

### nextCertificateId

• `Private` **nextCertificateId**: `number` = `2`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:49](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L49)

___

### paaCertId

• `Private` **paaCertId**: `bigint`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:37](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L37)

___

### paaKeyIdentifier

• `Private` `Readonly` **paaKeyIdentifier**: `Uint8Array` = `TestCert_PAA_NoVID_SKID`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:44](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L44)

___

### paaKeyPair

• `Private` `Readonly` **paaKeyPair**: [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:41](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L41)

___

### paiCertBytes

• `Private` `Readonly` **paiCertBytes**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:48](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L48)

___

### paiCertId

• `Private` `Readonly` **paiCertId**: `bigint`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:45](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L45)

___

### paiKeyIdentifier

• `Private` `Readonly` **paiKeyIdentifier**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:47](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L47)

___

### paiKeyPair

• `Private` `Readonly` **paiKeyPair**: [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:46](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L46)

___

### vendorId

• `Private` `Readonly` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:51](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L51)

## Methods

### generateDaCert

▸ **generateDaCert**(`publicKey`, `vendorId`, `productId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `productId` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:138](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L138)

___

### generatePAACert

▸ **generatePAACert**(`vendorId?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId?` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:70](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L70)

___

### generatePAICert

▸ **generatePAICert**(`vendorId`, `productId?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `productId?` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:104](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L104)

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
| `keyPair` | [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md) |

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:59](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L59)

___

### getPAICert

▸ **getPAICert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:55](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L55)
