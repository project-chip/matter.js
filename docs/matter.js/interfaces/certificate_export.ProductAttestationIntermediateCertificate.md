[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / ProductAttestationIntermediateCertificate

# Interface: ProductAttestationIntermediateCertificate

[certificate/export](../modules/certificate_export.md).ProductAttestationIntermediateCertificate

## Table of contents

### Properties

- [ellipticCurveIdentifier](certificate_export.ProductAttestationIntermediateCertificate.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](certificate_export.ProductAttestationIntermediateCertificate.md#ellipticcurvepublickey)
- [extensions](certificate_export.ProductAttestationIntermediateCertificate.md#extensions)
- [issuer](certificate_export.ProductAttestationIntermediateCertificate.md#issuer)
- [notAfter](certificate_export.ProductAttestationIntermediateCertificate.md#notafter)
- [notBefore](certificate_export.ProductAttestationIntermediateCertificate.md#notbefore)
- [publicKeyAlgorithm](certificate_export.ProductAttestationIntermediateCertificate.md#publickeyalgorithm)
- [serialNumber](certificate_export.ProductAttestationIntermediateCertificate.md#serialnumber)
- [signature](certificate_export.ProductAttestationIntermediateCertificate.md#signature)
- [signatureAlgorithm](certificate_export.ProductAttestationIntermediateCertificate.md#signaturealgorithm)
- [subject](certificate_export.ProductAttestationIntermediateCertificate.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:220](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L220)

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:221](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L221)

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

[packages/matter.js/src/certificate/CertificateManager.ts:222](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L222)

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:208](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L208)

___

### notAfter

• **notAfter**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:213](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L213)

___

### notBefore

• **notBefore**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:212](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L212)

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:219](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L219)

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:206](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L206)

___

### signature

• **signature**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:233](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L233)

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:207](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L207)

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId?` | `number` |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:214](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L214)
