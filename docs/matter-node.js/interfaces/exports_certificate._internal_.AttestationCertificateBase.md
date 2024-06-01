[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](../modules/exports_certificate.md) / [\<internal\>](../modules/exports_certificate._internal_.md) / AttestationCertificateBase

# Interface: AttestationCertificateBase

[exports/certificate](../modules/exports_certificate.md).[\<internal\>](../modules/exports_certificate._internal_.md).AttestationCertificateBase

## Hierarchy

- **`AttestationCertificateBase`**

  ↳ [`DeviceAttestationCertificate`](exports_certificate.DeviceAttestationCertificate.md)

  ↳ [`ProductAttestationIntermediateCertificate`](exports_certificate.ProductAttestationIntermediateCertificate.md)

  ↳ [`ProductAttestationAuthorityCertificate`](exports_certificate.ProductAttestationAuthorityCertificate.md)

## Table of contents

### Properties

- [ellipticCurveIdentifier](exports_certificate._internal_.AttestationCertificateBase.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](exports_certificate._internal_.AttestationCertificateBase.md#ellipticcurvepublickey)
- [extensions](exports_certificate._internal_.AttestationCertificateBase.md#extensions)
- [issuer](exports_certificate._internal_.AttestationCertificateBase.md#issuer)
- [notAfter](exports_certificate._internal_.AttestationCertificateBase.md#notafter)
- [notBefore](exports_certificate._internal_.AttestationCertificateBase.md#notbefore)
- [publicKeyAlgorithm](exports_certificate._internal_.AttestationCertificateBase.md#publickeyalgorithm)
- [serialNumber](exports_certificate._internal_.AttestationCertificateBase.md#serialnumber)
- [signature](exports_certificate._internal_.AttestationCertificateBase.md#signature)
- [signatureAlgorithm](exports_certificate._internal_.AttestationCertificateBase.md#signaturealgorithm)
- [subject](exports_certificate._internal_.AttestationCertificateBase.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:481

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

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

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:483

___

### issuer

• **issuer**: `Object`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:476

___

### notAfter

• **notAfter**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:478

___

### notBefore

• **notBefore**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:477

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:480

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:474

___

### signature

• **signature**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:494

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:475

___

### subject

• **subject**: `Object`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:479
