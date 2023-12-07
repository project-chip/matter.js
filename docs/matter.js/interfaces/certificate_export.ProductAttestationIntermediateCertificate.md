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

[packages/matter.js/src/certificate/CertificateManager.ts:262](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L262)

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:263](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L263)

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

[packages/matter.js/src/certificate/CertificateManager.ts:264](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L264)

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:250](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L250)

___

### notAfter

• **notAfter**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:255](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L255)

___

### notBefore

• **notBefore**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:254](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L254)

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:261](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L261)

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:248](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L248)

___

### signature

• **signature**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:275](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L275)

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:249](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L249)

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

[packages/matter.js/src/certificate/CertificateManager.ts:256](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/certificate/CertificateManager.ts#L256)
