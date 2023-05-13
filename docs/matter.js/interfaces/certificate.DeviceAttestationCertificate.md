[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate](../modules/certificate.md) / DeviceAttestationCertificate

# Interface: DeviceAttestationCertificate

[certificate](../modules/certificate.md).DeviceAttestationCertificate

## Table of contents

### Properties

- [ellipticCurveIdentifier](certificate.DeviceAttestationCertificate.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](certificate.DeviceAttestationCertificate.md#ellipticcurvepublickey)
- [extensions](certificate.DeviceAttestationCertificate.md#extensions)
- [issuer](certificate.DeviceAttestationCertificate.md#issuer)
- [notAfter](certificate.DeviceAttestationCertificate.md#notafter)
- [notBefore](certificate.DeviceAttestationCertificate.md#notbefore)
- [publicKeyAlgorithm](certificate.DeviceAttestationCertificate.md#publickeyalgorithm)
- [serialNumber](certificate.DeviceAttestationCertificate.md#serialnumber)
- [signature](certificate.DeviceAttestationCertificate.md#signature)
- [signatureAlgorithm](certificate.DeviceAttestationCertificate.md#signaturealgorithm)
- [subject](certificate.DeviceAttestationCertificate.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:145](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L145)

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:146](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L146)

___

### extensions

• **extensions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorityKeyIdentifier` | `Uint8Array` |
| `basicConstraints` | { `isCa`: `boolean` ; `pathLen?`: `number`  } |
| `basicConstraints.isCa` | `boolean` |
| `basicConstraints.pathLen?` | `number` |
| `extendedKeyUsage?` | `number`[] |
| `futureExtension?` | `Uint8Array` |
| `keyUsage` | `number` |
| `subjectKeyIdentifier` | `Uint8Array` |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:147](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L147)

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId?` | `number` |
| `vendorId` | [`VendorId`](../classes/datatype.VendorId.md) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:132](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L132)

___

### notAfter

• **notAfter**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:138](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L138)

___

### notBefore

• **notBefore**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:137](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L137)

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:144](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L144)

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:130](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L130)

___

### signature

• **signature**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:158](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L158)

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:131](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L131)

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId` | `number` |
| `vendorId` | [`VendorId`](../classes/datatype.VendorId.md) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:139](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L139)
