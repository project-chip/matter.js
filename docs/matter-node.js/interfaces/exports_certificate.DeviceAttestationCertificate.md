[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](../modules/exports_certificate.md) / DeviceAttestationCertificate

# Interface: DeviceAttestationCertificate

[exports/certificate](../modules/exports_certificate.md).DeviceAttestationCertificate

## Hierarchy

- [`AttestationCertificateBase`](exports_certificate._internal_.AttestationCertificateBase.md)

  ↳ **`DeviceAttestationCertificate`**

## Table of contents

### Properties

- [ellipticCurveIdentifier](exports_certificate.DeviceAttestationCertificate.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](exports_certificate.DeviceAttestationCertificate.md#ellipticcurvepublickey)
- [extensions](exports_certificate.DeviceAttestationCertificate.md#extensions)
- [issuer](exports_certificate.DeviceAttestationCertificate.md#issuer)
- [notAfter](exports_certificate.DeviceAttestationCertificate.md#notafter)
- [notBefore](exports_certificate.DeviceAttestationCertificate.md#notbefore)
- [publicKeyAlgorithm](exports_certificate.DeviceAttestationCertificate.md#publickeyalgorithm)
- [serialNumber](exports_certificate.DeviceAttestationCertificate.md#serialnumber)
- [signature](exports_certificate.DeviceAttestationCertificate.md#signature)
- [signatureAlgorithm](exports_certificate.DeviceAttestationCertificate.md#signaturealgorithm)
- [subject](exports_certificate.DeviceAttestationCertificate.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Inherited from

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[ellipticCurveIdentifier](exports_certificate._internal_.AttestationCertificateBase.md#ellipticcurveidentifier)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:481

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Inherited from

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[ellipticCurvePublicKey](exports_certificate._internal_.AttestationCertificateBase.md#ellipticcurvepublickey)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:482

___

### extensions

• **extensions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorityKeyIdentifier` | `Uint8Array` |
| `basicConstraints` | \{ `isCa`: `boolean` ; `pathLen?`: `number`  } |
| `basicConstraints.isCa` | `boolean` |
| `basicConstraints.pathLen?` | `number` |
| `extendedKeyUsage?` | `number`[] |
| `futureExtension?` | `Uint8Array`[] |
| `keyUsage` | [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `cRLSign`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `dataEncipherment`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `decipherOnly`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `digitalSignature`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `encipherOnly`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `keyAgreement`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `keyCertSign`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `keyEncipherment`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `nonRepudiation`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\> |
| `subjectKeyIdentifier` | `Uint8Array` |

#### Inherited from

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[extensions](exports_certificate._internal_.AttestationCertificateBase.md#extensions)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:483

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId?` | `number` |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Overrides

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[issuer](exports_certificate._internal_.AttestationCertificateBase.md#issuer)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:497

___

### notAfter

• **notAfter**: `number`

#### Inherited from

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[notAfter](exports_certificate._internal_.AttestationCertificateBase.md#notafter)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:478

___

### notBefore

• **notBefore**: `number`

#### Inherited from

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[notBefore](exports_certificate._internal_.AttestationCertificateBase.md#notbefore)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:477

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Inherited from

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[publicKeyAlgorithm](exports_certificate._internal_.AttestationCertificateBase.md#publickeyalgorithm)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:480

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Inherited from

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[serialNumber](exports_certificate._internal_.AttestationCertificateBase.md#serialnumber)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:474

___

### signature

• **signature**: `Uint8Array`

#### Inherited from

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[signature](exports_certificate._internal_.AttestationCertificateBase.md#signature)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:494

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Inherited from

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[signatureAlgorithm](exports_certificate._internal_.AttestationCertificateBase.md#signaturealgorithm)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:475

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId` | `number` |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Overrides

[AttestationCertificateBase](exports_certificate._internal_.AttestationCertificateBase.md).[subject](exports_certificate._internal_.AttestationCertificateBase.md#subject)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:502
