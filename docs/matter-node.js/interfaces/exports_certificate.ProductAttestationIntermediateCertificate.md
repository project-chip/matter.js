[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](../modules/exports_certificate.md) / ProductAttestationIntermediateCertificate

# Interface: ProductAttestationIntermediateCertificate

[exports/certificate](../modules/exports_certificate.md).ProductAttestationIntermediateCertificate

## Table of contents

### Properties

- [ellipticCurveIdentifier](exports_certificate.ProductAttestationIntermediateCertificate.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](exports_certificate.ProductAttestationIntermediateCertificate.md#ellipticcurvepublickey)
- [extensions](exports_certificate.ProductAttestationIntermediateCertificate.md#extensions)
- [issuer](exports_certificate.ProductAttestationIntermediateCertificate.md#issuer)
- [notAfter](exports_certificate.ProductAttestationIntermediateCertificate.md#notafter)
- [notBefore](exports_certificate.ProductAttestationIntermediateCertificate.md#notbefore)
- [publicKeyAlgorithm](exports_certificate.ProductAttestationIntermediateCertificate.md#publickeyalgorithm)
- [serialNumber](exports_certificate.ProductAttestationIntermediateCertificate.md#serialnumber)
- [signature](exports_certificate.ProductAttestationIntermediateCertificate.md#signature)
- [signatureAlgorithm](exports_certificate.ProductAttestationIntermediateCertificate.md#signaturealgorithm)
- [subject](exports_certificate.ProductAttestationIntermediateCertificate.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:130

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:131

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

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:132

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:118

___

### notAfter

• **notAfter**: `number`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:123

___

### notBefore

• **notBefore**: `number`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:122

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:129

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:116

___

### signature

• **signature**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:143

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:117

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId?` | `number` |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:124
