[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / certificate/export

# certificate/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [Pkcs7](namespaces/Pkcs7/README.md)
- [X509](namespaces/X509/README.md)
- [X520](namespaces/X520/README.md)
- [X962](namespaces/X962/README.md)

### Classes

- [AttestationCertificateManager](classes/AttestationCertificateManager.md)
- [CertificateError](classes/CertificateError.md)
- [CertificateManager](classes/CertificateManager.md)
- [CertificationDeclarationManager](classes/CertificationDeclarationManager.md)
- [RootCertificateManager](classes/RootCertificateManager.md)

### Interfaces

- [DeviceAttestationCertificate](interfaces/DeviceAttestationCertificate.md)
- [ProductAttestationAuthorityCertificate](interfaces/ProductAttestationAuthorityCertificate.md)
- [ProductAttestationIntermediateCertificate](interfaces/ProductAttestationIntermediateCertificate.md)

## Type Aliases

### BaseCertificate

> **BaseCertificate**: [`TypeFromSchema`](../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvBaseCertificate`](-internal-/README.md#tlvbasecertificate)\>

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L360)

***

### IntermediateCertificate

> **IntermediateCertificate**: [`TypeFromSchema`](../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvIntermediateCertificate`](README.md#tlvintermediatecertificate)\>

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L362)

***

### OperationalCertificate

> **OperationalCertificate**: [`TypeFromSchema`](../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvOperationalCertificate`](README.md#tlvoperationalcertificate)\>

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:363](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L363)

***

### RootCertificate

> **RootCertificate**: [`TypeFromSchema`](../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRootCertificate`](README.md#tlvrootcertificate)\>

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:361](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L361)

***

### Unsigned\<Type\>

> **Unsigned**\<`Type`\>: `{ [Property in keyof Type as Exclude<Property, "signature">]: Type[Property] }`

#### Type parameters

| Type parameter |
| :------ |
| `Type` |

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:364](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L364)

## Variables

### SHA256\_CMS

> `const` **SHA256\_CMS**: `any`

#### Source

[packages/matter.js/src/certificate/CertificateDerTypes.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateDerTypes.ts#L31)

***

### TestCert\_PAA\_FFF1\_Cert

> `const` **TestCert\_PAA\_FFF1\_Cert**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L32)

***

### TestCert\_PAA\_FFF1\_PrivateKey

> `const` **TestCert\_PAA\_FFF1\_PrivateKey**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L25)

***

### TestCert\_PAA\_FFF1\_PublicKey

> `const` **TestCert\_PAA\_FFF1\_PublicKey**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L28)

***

### TestCert\_PAA\_FFF1\_SKID

> `const` **TestCert\_PAA\_FFF1\_SKID**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L31)

***

### TestCert\_PAA\_NoVID\_Cert

> `const` **TestCert\_PAA\_NoVID\_Cert**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L19)

***

### TestCert\_PAA\_NoVID\_PrivateKey

> `const` **TestCert\_PAA\_NoVID\_PrivateKey**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L15)

***

### TestCert\_PAA\_NoVID\_PublicKey

> `const` **TestCert\_PAA\_NoVID\_PublicKey**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L12)

***

### TestCert\_PAA\_NoVID\_SKID

> `const` **TestCert\_PAA\_NoVID\_SKID**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L18)

***

### TlvCertificationDeclaration

> `const` **TlvCertificationDeclaration**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### Type declaration

##### authorizedPaaList

> **authorizedPaaList**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`[]\>

##### certificateId

> **certificateId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`string`\>

##### certificationType

> **certificationType**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### dacOriginProductId

> **dacOriginProductId**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### dacOriginVendorId

> **dacOriginVendorId**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<[`VendorId`](../../datatype/export/README.md#vendorid)\>

##### deviceTypeId

> **deviceTypeId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### formatVersion

> **formatVersion**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### produceIdArray

> **produceIdArray**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`[]\>

##### securityInformation

> **securityInformation**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### securityLevel

> **securityLevel**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### vendorId

> **vendorId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<[`VendorId`](../../datatype/export/README.md#vendorid)\>

##### versionNumber

> **versionNumber**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:342](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L342)

***

### TlvIntermediateCertificate

> `const` **TlvIntermediateCertificate**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### Type declaration

##### ellipticCurveIdentifier

> **ellipticCurveIdentifier**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### ellipticCurvePublicKey

> **ellipticCurvePublicKey**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### extensions

> **extensions**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### issuer

> **issuer**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object` & `object` & `object`\>\>

##### notAfter

> **notAfter**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### notBefore

> **notBefore**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### publicKeyAlgorithm

> **publicKeyAlgorithm**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### serialNumber

> **serialNumber**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### signature

> **signature**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### signatureAlgorithm

> **signatureAlgorithm**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### subject

> **subject**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object` & `object` & `object`\>\>

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:272](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L272)

***

### TlvOperationalCertificate

> `const` **TlvOperationalCertificate**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### Type declaration

##### ellipticCurveIdentifier

> **ellipticCurveIdentifier**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### ellipticCurvePublicKey

> **ellipticCurvePublicKey**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### extensions

> **extensions**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### issuer

> **issuer**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object` & `object` & `object`\>\>

##### notAfter

> **notAfter**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### notBefore

> **notBefore**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### publicKeyAlgorithm

> **publicKeyAlgorithm**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### serialNumber

> **serialNumber**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### signature

> **signature**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### signatureAlgorithm

> **signatureAlgorithm**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### subject

> **subject**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object` & `object` & `object`\>\>

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:263](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L263)

***

### TlvRootCertificate

> `const` **TlvRootCertificate**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### Type declaration

##### ellipticCurveIdentifier

> **ellipticCurveIdentifier**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### ellipticCurvePublicKey

> **ellipticCurvePublicKey**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### extensions

> **extensions**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### issuer

> **issuer**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object` & `object` & `object`\>\>

##### notAfter

> **notAfter**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### notBefore

> **notBefore**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### publicKeyAlgorithm

> **publicKeyAlgorithm**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### serialNumber

> **serialNumber**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### signature

> **signature**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### signatureAlgorithm

> **signatureAlgorithm**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### subject

> **subject**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object` & `object` & `object`\>\>

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L255)

## Functions

### FabricId\_Matter()

> **FabricId\_Matter**(`value`): `any`[]

matter-fabric-id = ASN.1 OID 1.3.6.1.4.1.37244.1.5

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`FabricId`](../../datatype/export/README.md#fabricid) |

#### Returns

`any`[]

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L121)

***

### FirmwareSigningId\_Matter()

> **FirmwareSigningId\_Matter**(`value`): `any`[]

matter-firmware-signing-id = ASN.1 OID 1.3.6.1.4.1.37244.1.2

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`any`[]

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L112)

***

### IcacId\_Matter()

> **IcacId\_Matter**(`value`): `any`[]

matter-icac-id = ASN.1 OID 1.3.6.1.4.1.37244.1.3

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`any`[]

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L115)

***

### NocCat\_Matter()

> **NocCat\_Matter**(`value`): `any`[]

matter-noc-cat = ASN.1 OID 1.3.6.1.4.1.37244.1.6

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`any`[]

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L124)

***

### NodeId\_Matter()

> **NodeId\_Matter**(`value`): `any`[]

matter-node-id = ASN.1 OID 1.3.6.1.4.1.37244.1.1

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`NodeId`](../../datatype/export/README.md#nodeid) |

#### Returns

`any`[]

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L109)

***

### ProductId\_Matter()

> **ProductId\_Matter**(`value`): `any`[]

matter-oid-pid = ASN.1 OID 1.3.6.1.4.1.37244.2.2

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`any`[]

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L130)

***

### RcacId\_Matter()

> **RcacId\_Matter**(`value`): `any`[]

matter-rcac-id = ASN.1 OID 1.3.6.1.4.1.37244.1.4

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`any`[]

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L118)

***

### VendorId\_Matter()

> **VendorId\_Matter**(`value`): `any`[]

matter-oid-vid = ASN.1 OID 1.3.6.1.4.1.37244.2.1

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`VendorId`](../../datatype/export/README.md#vendorid) |

#### Returns

`any`[]

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L127)

***

### jsToMatterDate()

> **jsToMatterDate**(`date`, `addYears`): `number`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `date` | `Date` | `undefined` |
| `addYears` | `number` | `0` |

#### Returns

`number`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L52)

***

### matterToJsDate()

> **matterToJsDate**(`date`): `Date`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`Date`

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L48)
