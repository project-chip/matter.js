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

[packages/matter.js/src/certificate/CertificateManager.ts:498](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L498)

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

[packages/matter.js/src/certificate/CertificateManager.ts:529](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L529)

___

### daCertToAsn1

▸ `Static` **daCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/export._internal_.md#unsigned)<[`DeviceAttestationCertificate`](../interfaces/certificate_export.DeviceAttestationCertificate.md)\> |
| `key` | [`Key`](../modules/crypto_export.md#key) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:357](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L357)

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

[packages/matter.js/src/certificate/CertificateManager.ts:544](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L544)

___

### nocCertToAsn1

▸ `Static` **nocCertToAsn1**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/export._internal_.md#unsigned)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricId`](../modules/datatype_export.md#fabricid)\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:322](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L322)

___

### paaCertToAsn1

▸ `Static` **paaCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/export._internal_.md#unsigned)<[`ProductAttestationAuthorityCertificate`](../interfaces/certificate_export.ProductAttestationAuthorityCertificate.md)\> |
| `key` | [`Key`](../modules/crypto_export.md#key) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:450](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L450)

___

### paiCertToAsn1

▸ `Static` **paiCertToAsn1**(`«destructured»`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/export._internal_.md#unsigned)<[`ProductAttestationIntermediateCertificate`](../interfaces/certificate_export.ProductAttestationIntermediateCertificate.md)\> |
| `key` | [`Key`](../modules/crypto_export.md#key) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:403](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L403)

___

### rootCertToAsn1

▸ `Static` **rootCertToAsn1**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/export._internal_.md#unsigned)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\>\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:289](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L289)

___

### validateNocCertificate

▸ `Static` **validateNocCertificate**(`rootCert`, `nocCert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\> |
| `nocCert` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricId`](../modules/datatype_export.md#fabricid)\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:525](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L525)

___

### validateRootCertificate

▸ `Static` **validateRootCertificate**(`rootCert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:521](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/CertificateManager.ts#L521)
