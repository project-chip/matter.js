[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / ProductAttestationAuthorityCertificate

# Interface: ProductAttestationAuthorityCertificate

[certificate/export](../modules/certificate_export.md).ProductAttestationAuthorityCertificate

## Table of contents

### Properties

- [ellipticCurveIdentifier](certificate_export.ProductAttestationAuthorityCertificate.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](certificate_export.ProductAttestationAuthorityCertificate.md#ellipticcurvepublickey)
- [extensions](certificate_export.ProductAttestationAuthorityCertificate.md#extensions)
- [issuer](certificate_export.ProductAttestationAuthorityCertificate.md#issuer)
- [notAfter](certificate_export.ProductAttestationAuthorityCertificate.md#notafter)
- [notBefore](certificate_export.ProductAttestationAuthorityCertificate.md#notbefore)
- [publicKeyAlgorithm](certificate_export.ProductAttestationAuthorityCertificate.md#publickeyalgorithm)
- [serialNumber](certificate_export.ProductAttestationAuthorityCertificate.md#serialnumber)
- [signature](certificate_export.ProductAttestationAuthorityCertificate.md#signature)
- [signatureAlgorithm](certificate_export.ProductAttestationAuthorityCertificate.md#signaturealgorithm)
- [subject](certificate_export.ProductAttestationAuthorityCertificate.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:309](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L309)

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:310](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L310)

___

### extensions

• **extensions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorityKeyIdentifier?` | `Uint8Array` |
| `basicConstraints` | \{ `isCa`: `boolean` ; `pathLen?`: `number`  } |
| `basicConstraints.isCa` | `boolean` |
| `basicConstraints.pathLen?` | `number` |
| `extendedKeyUsage?` | `number`[] |
| `futureExtension?` | `Uint8Array` |
| `keyUsage` | `number` |
| `subjectKeyIdentifier` | `Uint8Array` |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:311](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L311)

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:298](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L298)

___

### notAfter

• **notAfter**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:303](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L303)

___

### notBefore

• **notBefore**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:302](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L302)

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:308](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L308)

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:296](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L296)

___

### signature

• **signature**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:322](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L322)

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:297](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L297)

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:304](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L304)
