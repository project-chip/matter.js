[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / DeviceAttestationCertificate

# Interface: DeviceAttestationCertificate

[certificate/export](../modules/certificate_export.md).DeviceAttestationCertificate

## Hierarchy

- [`AttestationCertificateBase`](certificate_export._internal_.AttestationCertificateBase.md)

  ↳ **`DeviceAttestationCertificate`**

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

#### Inherited from

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[ellipticCurveIdentifier](certificate_export._internal_.AttestationCertificateBase.md#ellipticcurveidentifier)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:290](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L290)

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Inherited from

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[ellipticCurvePublicKey](certificate_export._internal_.AttestationCertificateBase.md#ellipticcurvepublickey)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:291](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L291)

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

#### Inherited from

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[extensions](certificate_export._internal_.AttestationCertificateBase.md#extensions)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:292](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L292)

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId?` | `number` |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Overrides

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[issuer](certificate_export._internal_.AttestationCertificateBase.md#issuer)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:307](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L307)

___

### notAfter

• **notAfter**: `number`

#### Inherited from

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[notAfter](certificate_export._internal_.AttestationCertificateBase.md#notafter)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:287](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L287)

___

### notBefore

• **notBefore**: `number`

#### Inherited from

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[notBefore](certificate_export._internal_.AttestationCertificateBase.md#notbefore)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:286](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L286)

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Inherited from

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[publicKeyAlgorithm](certificate_export._internal_.AttestationCertificateBase.md#publickeyalgorithm)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:289](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L289)

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Inherited from

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[serialNumber](certificate_export._internal_.AttestationCertificateBase.md#serialnumber)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:283](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L283)

___

### signature

• **signature**: `Uint8Array`

#### Inherited from

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[signature](certificate_export._internal_.AttestationCertificateBase.md#signature)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:303](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L303)

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Inherited from

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[signatureAlgorithm](certificate_export._internal_.AttestationCertificateBase.md#signaturealgorithm)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:284](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L284)

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId` | `number` |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Overrides

[AttestationCertificateBase](certificate_export._internal_.AttestationCertificateBase.md).[subject](certificate_export._internal_.AttestationCertificateBase.md#subject)

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:312](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/certificate/CertificateManager.ts#L312)
