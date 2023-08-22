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

[packages/matter.js/src/certificate/CertificateManager.ts:250](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L250)

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:251](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L251)

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

[packages/matter.js/src/certificate/CertificateManager.ts:252](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L252)

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:239](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L239)

___

### notAfter

• **notAfter**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:244](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L244)

___

### notBefore

• **notBefore**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:243](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L243)

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:249](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L249)

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:237](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L237)

___

### signature

• **signature**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:263](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L263)

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:238](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L238)

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:245](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L245)
