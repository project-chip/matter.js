[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](../modules/exports_certificate.md) / ProductAttestationAuthorityCertificate

# Interface: ProductAttestationAuthorityCertificate

[exports/certificate](../modules/exports_certificate.md).ProductAttestationAuthorityCertificate

## Table of contents

### Properties

- [ellipticCurveIdentifier](exports_certificate.ProductAttestationAuthorityCertificate.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](exports_certificate.ProductAttestationAuthorityCertificate.md#ellipticcurvepublickey)
- [extensions](exports_certificate.ProductAttestationAuthorityCertificate.md#extensions)
- [issuer](exports_certificate.ProductAttestationAuthorityCertificate.md#issuer)
- [notAfter](exports_certificate.ProductAttestationAuthorityCertificate.md#notafter)
- [notBefore](exports_certificate.ProductAttestationAuthorityCertificate.md#notbefore)
- [publicKeyAlgorithm](exports_certificate.ProductAttestationAuthorityCertificate.md#publickeyalgorithm)
- [serialNumber](exports_certificate.ProductAttestationAuthorityCertificate.md#serialnumber)
- [signature](exports_certificate.ProductAttestationAuthorityCertificate.md#signature)
- [signatureAlgorithm](exports_certificate.ProductAttestationAuthorityCertificate.md#signaturealgorithm)
- [subject](exports_certificate.ProductAttestationAuthorityCertificate.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:186

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:187

___

### extensions

• **extensions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorityKeyIdentifier?` | `Uint8Array` |
| `basicConstraints` | { `isCa`: `boolean` ; `pathLen?`: `number`  } |
| `basicConstraints.isCa` | `boolean` |
| `basicConstraints.pathLen?` | `number` |
| `extendedKeyUsage?` | `number`[] |
| `futureExtension?` | `Uint8Array` |
| `keyUsage` | `number` |
| `subjectKeyIdentifier` | `Uint8Array` |

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:188

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:175

___

### notAfter

• **notAfter**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:180

___

### notBefore

• **notBefore**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:179

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:185

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:173

___

### signature

• **signature**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:199

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:174

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:181
