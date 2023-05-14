[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate](../modules/certificate.md) / ProductAttestationAuthorityCertificate

# Interface: ProductAttestationAuthorityCertificate

[certificate](../modules/certificate.md).ProductAttestationAuthorityCertificate

## Table of contents

### Properties

- [ellipticCurveIdentifier](certificate.ProductAttestationAuthorityCertificate.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](certificate.ProductAttestationAuthorityCertificate.md#ellipticcurvepublickey)
- [extensions](certificate.ProductAttestationAuthorityCertificate.md#extensions)
- [issuer](certificate.ProductAttestationAuthorityCertificate.md#issuer)
- [notAfter](certificate.ProductAttestationAuthorityCertificate.md#notafter)
- [notBefore](certificate.ProductAttestationAuthorityCertificate.md#notbefore)
- [publicKeyAlgorithm](certificate.ProductAttestationAuthorityCertificate.md#publickeyalgorithm)
- [serialNumber](certificate.ProductAttestationAuthorityCertificate.md#serialnumber)
- [signature](certificate.ProductAttestationAuthorityCertificate.md#signature)
- [signatureAlgorithm](certificate.ProductAttestationAuthorityCertificate.md#signaturealgorithm)
- [subject](certificate.ProductAttestationAuthorityCertificate.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:206](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L206)

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:207](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L207)

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

[packages/matter.js/src/certificate/CertificateManager.ts:208](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L208)

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../classes/datatype.VendorId.md) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:195](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L195)

___

### notAfter

• **notAfter**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:200](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L200)

___

### notBefore

• **notBefore**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:199](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L199)

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:205](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L205)

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:193](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L193)

___

### signature

• **signature**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:219](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L219)

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:194](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L194)

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../classes/datatype.VendorId.md) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:201](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L201)
