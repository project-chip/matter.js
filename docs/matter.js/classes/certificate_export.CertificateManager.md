[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / CertificateManager

# Class: CertificateManager

[certificate/export](../modules/certificate_export.md).CertificateManager

## Table of contents

### Constructors

- [constructor](certificate_export.CertificateManager.md#constructor)

### Methods

- [CertificationDeclarationToAsn1](certificate_export.CertificateManager.md#certificationdeclarationtoasn1)
- [createCertificateSigningRequest](certificate_export.CertificateManager.md#createcertificatesigningrequest)
- [daCertToAsn1](certificate_export.CertificateManager.md#dacerttoasn1)
- [getPublicKeyFromCsr](certificate_export.CertificateManager.md#getpublickeyfromcsr)
- [nocCertToAsn1](certificate_export.CertificateManager.md#noccerttoasn1)
- [paaCertToAsn1](certificate_export.CertificateManager.md#paacerttoasn1)
- [paiCertToAsn1](certificate_export.CertificateManager.md#paicerttoasn1)
- [rootCertToAsn1](certificate_export.CertificateManager.md#rootcerttoasn1)
- [validateNocCertificate](certificate_export.CertificateManager.md#validatenoccertificate)
- [validateRootCertificate](certificate_export.CertificateManager.md#validaterootcertificate)

## Constructors

### constructor

• **new CertificateManager**(): [`CertificateManager`](certificate_export.CertificateManager.md)

#### Returns

[`CertificateManager`](certificate_export.CertificateManager.md)

## Methods

### CertificationDeclarationToAsn1

▸ **CertificationDeclarationToAsn1**(`eContent`, `subjectKeyIdentifier`, `privateKey`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eContent` | `Uint8Array` |
| `subjectKeyIdentifier` | `Uint8Array` |
| `privateKey` | `JsonWebKey` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:570](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L570)

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(`key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Key`](../interfaces/crypto_export.Key.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:601](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L601)

___

### daCertToAsn1

▸ **daCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/certificate_export._internal_.md#unsigned)\<[`DeviceAttestationCertificate`](../interfaces/certificate_export.DeviceAttestationCertificate.md)\> |
| `key` | [`Key`](../interfaces/crypto_export.Key.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:429](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L429)

___

### getPublicKeyFromCsr

▸ **getPublicKeyFromCsr**(`csr`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `csr` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:616](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L616)

___

### nocCertToAsn1

▸ **nocCertToAsn1**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/certificate_export._internal_.md#unsigned)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `caseAuthenticatedTags`: [`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]\> ; `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricId`](../modules/datatype_export.md#fabricid)\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:382](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L382)

___

### paaCertToAsn1

▸ **paaCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/certificate_export._internal_.md#unsigned)\<[`ProductAttestationAuthorityCertificate`](../interfaces/certificate_export.ProductAttestationAuthorityCertificate.md)\> |
| `key` | [`Key`](../interfaces/crypto_export.Key.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:522](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L522)

___

### paiCertToAsn1

▸ **paiCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/certificate_export._internal_.md#unsigned)\<[`ProductAttestationIntermediateCertificate`](../interfaces/certificate_export.ProductAttestationIntermediateCertificate.md)\> |
| `key` | [`Key`](../interfaces/crypto_export.Key.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:475](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L475)

___

### rootCertToAsn1

▸ **rootCertToAsn1**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/certificate_export._internal_.md#unsigned)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `rcacId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>\>  }\>\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:349](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L349)

___

### validateNocCertificate

▸ **validateNocCertificate**(`rootCert`, `nocCert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `rcacId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>\>  }\> |
| `nocCert` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `caseAuthenticatedTags`: [`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]\> ; `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricId`](../modules/datatype_export.md#fabricid)\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:597](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L597)

___

### validateRootCertificate

▸ **validateRootCertificate**(`rootCert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `rcacId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>\>  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:593](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/CertificateManager.ts#L593)
