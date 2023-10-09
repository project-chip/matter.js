[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / DeviceAttestationCertificate

# Interface: DeviceAttestationCertificate

[certificate/export](../modules/certificate_export.md).DeviceAttestationCertificate

## Table of contents

### Properties

- [ellipticCurveIdentifier](certificate_export.DeviceAttestationCertificate.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](certificate_export.DeviceAttestationCertificate.md#ellipticcurvepublickey)
- [extensions](certificate_export.DeviceAttestationCertificate.md#extensions)
- [issuer](certificate_export.DeviceAttestationCertificate.md#issuer)
- [notAfter](certificate_export.DeviceAttestationCertificate.md#notafter)
- [notBefore](certificate_export.DeviceAttestationCertificate.md#notbefore)
- [publicKeyAlgorithm](certificate_export.DeviceAttestationCertificate.md#publickeyalgorithm)
- [serialNumber](certificate_export.DeviceAttestationCertificate.md#serialnumber)
- [signature](certificate_export.DeviceAttestationCertificate.md#signature)
- [signatureAlgorithm](certificate_export.DeviceAttestationCertificate.md#signaturealgorithm)
- [subject](certificate_export.DeviceAttestationCertificate.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:231

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:232

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

packages/matter.js/src/certificate/CertificateManager.ts:233

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId?` | `number` |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:218

___

### notAfter

• **notAfter**: `number`

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:224

___

### notBefore

• **notBefore**: `number`

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:223

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:230

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:216

___

### signature

• **signature**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:244

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:217

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId` | `number` |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:225
