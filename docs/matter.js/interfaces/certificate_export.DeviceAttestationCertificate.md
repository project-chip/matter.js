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

[packages/matter.js/src/certificate/CertificateManager.ts:189](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L189)

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:190](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L190)

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

[packages/matter.js/src/certificate/CertificateManager.ts:191](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L191)

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

[packages/matter.js/src/certificate/CertificateManager.ts:176](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L176)

___

### notAfter

• **notAfter**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:182](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L182)

___

### notBefore

• **notBefore**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:181](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L181)

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:188](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L188)

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:174](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L174)

___

### signature

• **signature**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:202](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L202)

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:175](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L175)

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

[packages/matter.js/src/certificate/CertificateManager.ts:183](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L183)
