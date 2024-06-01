[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/certificate](../README.md) / CertificateManager

# Class: CertificateManager

## Constructors

### new CertificateManager()

> **new CertificateManager**(): [`CertificateManager`](CertificateManager.md)

#### Returns

[`CertificateManager`](CertificateManager.md)

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:551

## Methods

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:558

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:579

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:555

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:580

***

### intermediateCaCertToAsn1()

> `static` **intermediateCaCertToAsn1**(`cert`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`Unsigned`](../README.md#unsignedtype)\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\> |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:553

***

### nodeOperationalCertToAsn1()

> `static` **nodeOperationalCertToAsn1**(`cert`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`Unsigned`](../README.md#unsignedtype)\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\> |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:554

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:557

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:556

***

### rootCertToAsn1()

> `static` **rootCertToAsn1**(`cert`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`Unsigned`](../README.md#unsignedtype)\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\> |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:552

***

### validateGeneralCertificateFields()

> `static` **validateGeneralCertificateFields**(`cert`): `void`

Validate general requirements a Matter certificate fields must fulfill.
Rules for this are listed in

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cert` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### See

MatterSpecification.v12.Core §6.5.x

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:563

***

### verifyIntermediateCaCertificate()

> `static` **verifyIntermediateCaCertificate**(`rootCert`, `icaCert`): `void`

Verify requirements a Matter Intermediate CA certificate must fulfill.
Rules for this are listed in

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `icaCert` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### See

MatterSpecification.v12.Core §6.5.x

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:578

***

### verifyNodeOperationalCertificate()

> `static` **verifyNodeOperationalCertificate**(`rootOrIcaCert`, `nocCert`): `void`

Verify requirements a Matter Node Operational certificate must fulfill.
Rules for this are listed in

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootOrIcaCert` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `nocCert` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### See

MatterSpecification.v12.Core §6.5.x

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:573

***

### verifyRootCertificate()

> `static` **verifyRootCertificate**(`rootCert`): `void`

Verify requirements a Matter Root certificate must fulfill.
Rules for this are listed in

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootCert` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### See

MatterSpecification.v12.Core §6.5.x

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:568
