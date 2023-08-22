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

• **new CertificateManager**()

## Methods

### CertificationDeclarationToAsn1

▸ `Static` **CertificationDeclarationToAsn1**(`eContent`, `subjectKeyIdentifier`, `privateKey`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eContent` | `Uint8Array` |
| `subjectKeyIdentifier` | `Uint8Array` |
| `privateKey` | `JsonWebKey` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:199

___

### createCertificateSigningRequest

▸ `Static` **createCertificateSigningRequest**(`key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Key`](../modules/crypto_export.md#key) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:202

___

### daCertToAsn1

▸ `Static` **daCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/export._internal_.md#unsigned)<[`DeviceAttestationCertificate`](../interfaces/exports_certificate.DeviceAttestationCertificate.md)\> |
| `key` | [`Key`](../modules/crypto_export.md#key) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:196

___

### getPublicKeyFromCsr

▸ `Static` **getPublicKeyFromCsr**(`csr`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `csr` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:203

___

### nocCertToAsn1

▸ `Static` **nocCertToAsn1**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/export._internal_.md#unsigned)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`FabricId`](../modules/exports_datatype.md#fabricid)\> ; `nodeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>\> |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:195

___

### paaCertToAsn1

▸ `Static` **paaCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/export._internal_.md#unsigned)<[`ProductAttestationAuthorityCertificate`](../interfaces/exports_certificate.ProductAttestationAuthorityCertificate.md)\> |
| `key` | [`Key`](../modules/crypto_export.md#key) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:198

___

### paiCertToAsn1

▸ `Static` **paiCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/export._internal_.md#unsigned)<[`ProductAttestationIntermediateCertificate`](../interfaces/exports_certificate.ProductAttestationIntermediateCertificate.md)\> |
| `key` | [`Key`](../modules/crypto_export.md#key) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:197

___

### rootCertToAsn1

▸ `Static` **rootCertToAsn1**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/export._internal_.md#unsigned)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\>\> |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:194

___

### validateNocCertificate

▸ `Static` **validateNocCertificate**(`rootCert`, `nocCert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\> |
| `nocCert` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`FabricId`](../modules/exports_datatype.md#fabricid)\> ; `nodeId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:201

___

### validateRootCertificate

▸ `Static` **validateRootCertificate**(`rootCert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:200
