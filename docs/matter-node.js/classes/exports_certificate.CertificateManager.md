[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](../modules/exports_certificate.md) / CertificateManager

# Class: CertificateManager

[exports/certificate](../modules/exports_certificate.md).CertificateManager

## Table of contents

### Constructors

- [constructor](exports_certificate.CertificateManager.md#constructor)

### Methods

- [CertificationDeclarationToAsn1](exports_certificate.CertificateManager.md#certificationdeclarationtoasn1)
- [createCertificateSigningRequest](exports_certificate.CertificateManager.md#createcertificatesigningrequest)
- [daCertToAsn1](exports_certificate.CertificateManager.md#dacerttoasn1)
- [getPublicKeyFromCsr](exports_certificate.CertificateManager.md#getpublickeyfromcsr)
- [nocCertToAsn1](exports_certificate.CertificateManager.md#noccerttoasn1)
- [paaCertToAsn1](exports_certificate.CertificateManager.md#paacerttoasn1)
- [paiCertToAsn1](exports_certificate.CertificateManager.md#paicerttoasn1)
- [rootCertToAsn1](exports_certificate.CertificateManager.md#rootcerttoasn1)
- [validateNocCertificate](exports_certificate.CertificateManager.md#validatenoccertificate)
- [validateRootCertificate](exports_certificate.CertificateManager.md#validaterootcertificate)

## Constructors

### constructor

• **new CertificateManager**(): [`CertificateManager`](exports_certificate.CertificateManager.md)

#### Returns

[`CertificateManager`](exports_certificate.CertificateManager.md)

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:233

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:236

___

### daCertToAsn1

▸ **daCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/exports_certificate._internal_.md#unsigned)\<[`DeviceAttestationCertificate`](../interfaces/exports_certificate.DeviceAttestationCertificate.md)\> |
| `key` | [`Key`](../interfaces/crypto_export.Key.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:230

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:237

___

### nocCertToAsn1

▸ **nocCertToAsn1**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/exports_certificate._internal_.md#unsigned)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseAuthenticatedTags`: [`OptionalRepeatedFieldType`](../interfaces/exports_tlv.OptionalRepeatedFieldType.md)\<[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[]\> ; `fabricId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`FabricId`](../modules/exports_datatype.md#fabricid)\> ; `nodeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>\> |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:229

___

### paaCertToAsn1

▸ **paaCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/exports_certificate._internal_.md#unsigned)\<[`ProductAttestationAuthorityCertificate`](../interfaces/exports_certificate.ProductAttestationAuthorityCertificate.md)\> |
| `key` | [`Key`](../interfaces/crypto_export.Key.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:232

___

### paiCertToAsn1

▸ **paiCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/exports_certificate._internal_.md#unsigned)\<[`ProductAttestationIntermediateCertificate`](../interfaces/exports_certificate.ProductAttestationIntermediateCertificate.md)\> |
| `key` | [`Key`](../interfaces/crypto_export.Key.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:231

___

### rootCertToAsn1

▸ **rootCertToAsn1**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/exports_certificate._internal_.md#unsigned)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `rcacId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>\>  }\>\> |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:228

___

### validateNocCertificate

▸ **validateNocCertificate**(`rootCert`, `nocCert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `rcacId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>\>  }\> |
| `nocCert` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseAuthenticatedTags`: [`OptionalRepeatedFieldType`](../interfaces/exports_tlv.OptionalRepeatedFieldType.md)\<[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[]\> ; `fabricId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`FabricId`](../modules/exports_datatype.md#fabricid)\> ; `nodeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:235

___

### validateRootCertificate

▸ **validateRootCertificate**(`rootCert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `rcacId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>\>  }\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:234
