[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate](../modules/certificate.md) / ProductAttestationIntermediateCertificate

# Interface: ProductAttestationIntermediateCertificate

[certificate](../modules/certificate.md).ProductAttestationIntermediateCertificate

## Table of contents

### Properties

- [ellipticCurveIdentifier](certificate.ProductAttestationIntermediateCertificate.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](certificate.ProductAttestationIntermediateCertificate.md#ellipticcurvepublickey)
- [extensions](certificate.ProductAttestationIntermediateCertificate.md#extensions)
- [issuer](certificate.ProductAttestationIntermediateCertificate.md#issuer)
- [notAfter](certificate.ProductAttestationIntermediateCertificate.md#notafter)
- [notBefore](certificate.ProductAttestationIntermediateCertificate.md#notbefore)
- [publicKeyAlgorithm](certificate.ProductAttestationIntermediateCertificate.md#publickeyalgorithm)
- [serialNumber](certificate.ProductAttestationIntermediateCertificate.md#serialnumber)
- [signature](certificate.ProductAttestationIntermediateCertificate.md#signature)
- [signatureAlgorithm](certificate.ProductAttestationIntermediateCertificate.md#signaturealgorithm)
- [subject](certificate.ProductAttestationIntermediateCertificate.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:176](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L176)

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:177](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L177)

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

[packages/matter.js/src/certificate/CertificateManager.ts:178](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L178)

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `vendorId?` | [`VendorId`](../classes/datatype.VendorId.md) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:164](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L164)

___

### notAfter

• **notAfter**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:169](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L169)

___

### notBefore

• **notBefore**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:168](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L168)

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:175](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L175)

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:162](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L162)

___

### signature

• **signature**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:189](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L189)

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:163](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L163)

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId?` | `number` |
| `vendorId` | [`VendorId`](../classes/datatype.VendorId.md) |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:170](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L170)
