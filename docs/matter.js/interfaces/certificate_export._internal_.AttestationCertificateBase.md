[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / [\<internal\>](../modules/certificate_export._internal_.md) / AttestationCertificateBase

# Interface: AttestationCertificateBase

[certificate/export](../modules/certificate_export.md).[\<internal\>](../modules/certificate_export._internal_.md).AttestationCertificateBase

## Hierarchy

- **`AttestationCertificateBase`**

  ↳ [`DeviceAttestationCertificate`](certificate_export.DeviceAttestationCertificate.md)

  ↳ [`ProductAttestationIntermediateCertificate`](certificate_export.ProductAttestationIntermediateCertificate.md)

  ↳ [`ProductAttestationAuthorityCertificate`](certificate_export.ProductAttestationAuthorityCertificate.md)

## Table of contents

### Properties

- [ellipticCurveIdentifier](certificate_export._internal_.AttestationCertificateBase.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](certificate_export._internal_.AttestationCertificateBase.md#ellipticcurvepublickey)
- [extensions](certificate_export._internal_.AttestationCertificateBase.md#extensions)
- [issuer](certificate_export._internal_.AttestationCertificateBase.md#issuer)
- [notAfter](certificate_export._internal_.AttestationCertificateBase.md#notafter)
- [notBefore](certificate_export._internal_.AttestationCertificateBase.md#notbefore)
- [publicKeyAlgorithm](certificate_export._internal_.AttestationCertificateBase.md#publickeyalgorithm)
- [serialNumber](certificate_export._internal_.AttestationCertificateBase.md#serialnumber)
- [signature](certificate_export._internal_.AttestationCertificateBase.md#signature)
- [signatureAlgorithm](certificate_export._internal_.AttestationCertificateBase.md#signaturealgorithm)
- [subject](certificate_export._internal_.AttestationCertificateBase.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:290](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L290)

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:291](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L291)

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
| `keyUsage` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cRLSign`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `dataEncipherment`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `decipherOnly`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `digitalSignature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `encipherOnly`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `keyAgreement`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `keyCertSign`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `keyEncipherment`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `nonRepudiation`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |
| `subjectKeyIdentifier` | `Uint8Array` |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:292](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L292)

___

### issuer

• **issuer**: `Object`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:285](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L285)

___

### notAfter

• **notAfter**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:287](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L287)

___

### notBefore

• **notBefore**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:286](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L286)

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:289](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L289)

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:283](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L283)

___

### signature

• **signature**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:303](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L303)

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:284](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L284)

___

### subject

• **subject**: `Object`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:288](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/certificate/CertificateManager.ts#L288)
