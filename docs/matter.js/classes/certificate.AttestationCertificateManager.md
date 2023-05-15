[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate](../modules/certificate.md) / AttestationCertificateManager

# Class: AttestationCertificateManager

[certificate](../modules/certificate.md).AttestationCertificateManager

## Table of contents

### Constructors

- [constructor](certificate.AttestationCertificateManager.md#constructor)

### Properties

- [nextCertificateId](certificate.AttestationCertificateManager.md#nextcertificateid)
- [paaCertId](certificate.AttestationCertificateManager.md#paacertid)
- [paaKeyIdentifier](certificate.AttestationCertificateManager.md#paakeyidentifier)
- [paaKeyPair](certificate.AttestationCertificateManager.md#paakeypair)
- [paiCertBytes](certificate.AttestationCertificateManager.md#paicertbytes)
- [paiCertId](certificate.AttestationCertificateManager.md#paicertid)
- [paiKeyIdentifier](certificate.AttestationCertificateManager.md#paikeyidentifier)
- [paiKeyPair](certificate.AttestationCertificateManager.md#paikeypair)
- [vendorId](certificate.AttestationCertificateManager.md#vendorid)

### Methods

- [generateDaCert](certificate.AttestationCertificateManager.md#generatedacert)
- [generatePAACert](certificate.AttestationCertificateManager.md#generatepaacert)
- [generatePAICert](certificate.AttestationCertificateManager.md#generatepaicert)
- [getDACert](certificate.AttestationCertificateManager.md#getdacert)
- [getPAICert](certificate.AttestationCertificateManager.md#getpaicert)

## Constructors

### constructor

• **new AttestationCertificateManager**(`vendorId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](datatype.VendorId.md) |

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L43)

## Properties

### nextCertificateId

• `Private` **nextCertificateId**: `number` = `2`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L41)

___

### paaCertId

• `Private` **paaCertId**: `bigint`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L28)

___

### paaKeyIdentifier

• `Private` `Readonly` **paaKeyIdentifier**: `Uint8Array` = `TestCert_PAA_NoVID_SKID`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L36)

___

### paaKeyPair

• `Private` `Readonly` **paaKeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `publicKey` | `Uint8Array` |

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L32)

___

### paiCertBytes

• `Private` `Readonly` **paiCertBytes**: `any`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L40)

___

### paiCertId

• `Private` `Readonly` **paiCertId**: `bigint`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L37)

___

### paiKeyIdentifier

• `Private` `Readonly` **paiKeyIdentifier**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L39)

___

### paiKeyPair

• `Private` `Readonly` **paiKeyPair**: [`KeyPair`](../modules/crypto.md#keypair)

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L38)

___

### vendorId

• `Private` `Readonly` **vendorId**: [`VendorId`](datatype.VendorId.md)

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L44)

## Methods

### generateDaCert

▸ **generateDaCert**(`publicKey`, `vendorId`, `productId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `vendorId` | [`VendorId`](datatype.VendorId.md) |
| `productId` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:126](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L126)

___

### generatePAACert

▸ `Private` **generatePAACert**(`vendorId?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId?` | [`VendorId`](datatype.VendorId.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L64)

___

### generatePAICert

▸ `Private` **generatePAICert**(`vendorId`, `productId?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](datatype.VendorId.md) |
| `productId?` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:95](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L95)

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
| `keyPair` | [`KeyPair`](../modules/crypto.md#keypair) |

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L53)

___

### getPAICert

▸ **getPAICert**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L49)
