[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate](../modules/certificate.md) / CertificateManager

# Class: CertificateManager

[certificate](../modules/certificate.md).CertificateManager

## Table of contents

### Constructors

- [constructor](certificate.CertificateManager.md#constructor)

### Methods

- [CertificationDeclarationToAsn1](certificate.CertificateManager.md#certificationdeclarationtoasn1)
- [createCertificateSigningRequest](certificate.CertificateManager.md#createcertificatesigningrequest)
- [daCertToAsn1](certificate.CertificateManager.md#dacerttoasn1)
- [getPublicKeyFromCsr](certificate.CertificateManager.md#getpublickeyfromcsr)
- [nocCertToAsn1](certificate.CertificateManager.md#noccerttoasn1)
- [paaCertToAsn1](certificate.CertificateManager.md#paacerttoasn1)
- [paiCertToAsn1](certificate.CertificateManager.md#paicerttoasn1)
- [rootCertToAsn1](certificate.CertificateManager.md#rootcerttoasn1)
- [validateNocCertificate](certificate.CertificateManager.md#validatenoccertificate)
- [validateRootCertificate](certificate.CertificateManager.md#validaterootcertificate)

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
| `privateKey` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:399](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L399)

___

### createCertificateSigningRequest

▸ `Static` **createCertificateSigningRequest**(`keys`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | [`KeyPair`](../modules/crypto.md#keypair) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:424](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L424)

___

### daCertToAsn1

▸ `Static` **daCertToAsn1**(`«destructured»`, `keys`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/index._internal_.md#unsigned)<[`DeviceAttestationCertificate`](../interfaces/certificate.DeviceAttestationCertificate.md)\> |
| `keys` | [`KeyPair`](../modules/crypto.md#keypair) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:294](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L294)

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

[packages/matter.js/src/certificate/CertificateManager.ts:439](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L439)

___

### nocCertToAsn1

▸ `Static` **nocCertToAsn1**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/index._internal_.md#unsigned)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:267](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L267)

___

### paaCertToAsn1

▸ `Static` **paaCertToAsn1**(`«destructured»`, `keys`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/index._internal_.md#unsigned)<[`ProductAttestationAuthorityCertificate`](../interfaces/certificate.ProductAttestationAuthorityCertificate.md)\> |
| `keys` | [`KeyPair`](../modules/crypto.md#keypair) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:365](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L365)

___

### paiCertToAsn1

▸ `Static` **paiCertToAsn1**(`«destructured»`, `keys`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/index._internal_.md#unsigned)<[`ProductAttestationIntermediateCertificate`](../interfaces/certificate.ProductAttestationIntermediateCertificate.md)\> |
| `keys` | [`KeyPair`](../modules/crypto.md#keypair) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:329](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L329)

___

### rootCertToAsn1

▸ `Static` **rootCertToAsn1**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Unsigned`](../modules/index._internal_.md#unsigned)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\>\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:242](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L242)

___

### validateNocCertificate

▸ `Static` **validateNocCertificate**(`rootCert`, `nocCert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\> |
| `nocCert` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:420](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L420)

___

### validateRootCertificate

▸ `Static` **validateRootCertificate**(`rootCert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:416](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L416)
