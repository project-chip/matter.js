[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [certificate/export](../README.md) / CertificateManager

# Class: CertificateManager

## Constructors

### new CertificateManager()

> **new CertificateManager**(): [`CertificateManager`](CertificateManager.md)

#### Returns

[`CertificateManager`](CertificateManager.md)

## Methods

### #genericBuildAsn1Structure()

> `static` `private` **#genericBuildAsn1Structure**(`__namedParameters`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Unsigned`](../README.md#unsignedtype)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\> |

#### Returns

`object`

##### extensions

> **extensions**: `object`

##### extensions.\_bytes

> **\_bytes**: `Uint8Array`

##### extensions.\_tag

> **\_tag**: `number`

##### issuer

> **issuer**: `object`

###### Index signature

 \[`field`: `string`\]: `any`[]

##### publicKey

> **publicKey**: `object`

##### publicKey.bytes

> **bytes**: `object`

##### publicKey.bytes.\_bytes

> **\_bytes**: `Uint8Array` = `data`

##### publicKey.bytes.\_padding

> **\_padding**: `number` = `padding`

##### publicKey.bytes.\_tag

> **\_tag**: `number`

##### publicKey.type

> **type**: `object`

##### publicKey.type.algorithm

> **algorithm**: `object`

##### publicKey.type.algorithm.\_bytes

> **\_bytes**: `Uint8Array`

##### publicKey.type.algorithm.\_tag

> **\_tag**: `number`

##### publicKey.type.curve

> **curve**: `object`

##### publicKey.type.curve.\_bytes

> **\_bytes**: `Uint8Array`

##### publicKey.type.curve.\_tag

> **\_tag**: `number`

##### serialNumber

> **serialNumber**: `object`

##### serialNumber.\_raw

> **\_raw**: `any` = `value`

##### serialNumber.\_type

> **\_type**: [`DerType`](../../../codec/export/enumerations/DerType.md) = `type`

##### signatureAlgorithm

> **signatureAlgorithm**: `any` = `X962.EcdsaWithSHA256`

##### subject

> **subject**: `object`

###### Index signature

 \[`field`: `string`\]: `any`[]

##### validity

> **validity**: `object`

##### validity.notAfter

> **notAfter**: `Date`

##### validity.notBefore

> **notBefore**: `Date`

##### version

> **version**: `object`

##### version.\_bytes

> **\_bytes**: `Uint8Array`

##### version.\_tag

> **\_tag**: `number`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:549](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L549)

***

### #genericCertToAsn1()

> `static` `private` **#genericCertToAsn1**(`cert`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`Unsigned`](../README.md#unsignedtype)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\> |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:579](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L579)

***

### CertificationDeclarationToAsn1()

> `static` **CertificationDeclarationToAsn1**(`eContent`, `subjectKeyIdentifier`, `privateKey`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eContent` | `Uint8Array` |
| `subjectKeyIdentifier` | `Uint8Array` |
| `privateKey` | `JsonWebKey` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:654](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L654)

***

### createCertificateSigningRequest()

> `static` **createCertificateSigningRequest**(`key`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | [`Key`](../../../crypto/export/interfaces/Key.md) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:1039](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L1039)

***

### deviceAttestationCertToAsn1()

> `static` **deviceAttestationCertToAsn1**(`cert`, `key`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`Unsigned`](../README.md#unsignedtype)\<[`DeviceAttestationCertificate`](../interfaces/DeviceAttestationCertificate.md)\> |
| `key` | [`Key`](../../../crypto/export/interfaces/Key.md) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:624](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L624)

***

### getPublicKeyFromCsr()

> `static` **getPublicKeyFromCsr**(`csr`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `csr` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:1054](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L1054)

***

### intermediateCaCertToAsn1()

> `static` **intermediateCaCertToAsn1**(`cert`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`Unsigned`](../README.md#unsignedtype)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\> |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:595](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L595)

***

### nodeOperationalCertToAsn1()

> `static` **nodeOperationalCertToAsn1**(`cert`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`Unsigned`](../README.md#unsignedtype)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\> |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:607](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L607)

***

### productAttestationAuthorityCertToAsn1()

> `static` **productAttestationAuthorityCertToAsn1**(`cert`, `key`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`Unsigned`](../README.md#unsignedtype)\<[`ProductAttestationAuthorityCertificate`](../interfaces/ProductAttestationAuthorityCertificate.md)\> |
| `key` | [`Key`](../../../crypto/export/interfaces/Key.md) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:645](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L645)

***

### productAttestationIntermediateCertToAsn1()

> `static` **productAttestationIntermediateCertToAsn1**(`cert`, `key`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`Unsigned`](../README.md#unsignedtype)\<[`ProductAttestationIntermediateCertificate`](../interfaces/ProductAttestationIntermediateCertificate.md)\> |
| `key` | [`Key`](../../../crypto/export/interfaces/Key.md) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:633](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L633)

***

### rootCertToAsn1()

> `static` **rootCertToAsn1**(`cert`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`Unsigned`](../README.md#unsignedtype)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\> |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:583](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L583)

***

### validateGeneralCertificateFields()

> `static` **validateGeneralCertificateFields**(`cert`): `void`

Validate general requirements a Matter certificate fields must fulfill.
Rules for this are listed in

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> \| [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> \| [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### See

MatterSpecification.v12.Core §6.5.x

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:681](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L681)

***

### verifyIntermediateCaCertificate()

> `static` **verifyIntermediateCaCertificate**(`rootCert`, `icaCert`): `void`

Verify requirements a Matter Intermediate CA certificate must fulfill.
Rules for this are listed in

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `icaCert` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### See

MatterSpecification.v12.Core §6.5.x

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:925](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L925)

***

### verifyNodeOperationalCertificate()

> `static` **verifyNodeOperationalCertificate**(`rootOrIcaCert`, `nocCert`): `void`

Verify requirements a Matter Node Operational certificate must fulfill.
Rules for this are listed in

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootOrIcaCert` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> \| [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `nocCert` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### See

MatterSpecification.v12.Core §6.5.x

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:811](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L811)

***

### verifyRootCertificate()

> `static` **verifyRootCertificate**(`rootCert`): `void`

Verify requirements a Matter Root certificate must fulfill.
Rules for this are listed in

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### See

MatterSpecification.v12.Core §6.5.x

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:724](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L724)
