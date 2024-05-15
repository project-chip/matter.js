[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](exports_certificate.md) / X520

# Namespace: X520

[exports/certificate](exports_certificate.md).X520

## Table of contents

### Variables

- [NON\_WELL\_DEFINED\_DATE](exports_certificate.X520.md#non_well_defined_date)

### Functions

- [CommonName](exports_certificate.X520.md#commonname)
- [CountryName](exports_certificate.X520.md#countryname)
- [DnQualifier](exports_certificate.X520.md#dnqualifier)
- [DomainComponent](exports_certificate.X520.md#domaincomponent)
- [GenerationQualifier](exports_certificate.X520.md#generationqualifier)
- [GivenName](exports_certificate.X520.md#givenname)
- [Initials](exports_certificate.X520.md#initials)
- [LocalityName](exports_certificate.X520.md#localityname)
- [Name](exports_certificate.X520.md#name)
- [OrganisationName](exports_certificate.X520.md#organisationname)
- [OrganizationalUnitName](exports_certificate.X520.md#organizationalunitname)
- [Pseudonym](exports_certificate.X520.md#pseudonym)
- [SerialNumber](exports_certificate.X520.md#serialnumber)
- [StateOrProvinceName](exports_certificate.X520.md#stateorprovincename)
- [SurName](exports_certificate.X520.md#surname)
- [Title](exports_certificate.X520.md#title)

## Variables

### NON\_WELL\_DEFINED\_DATE

• `Const` **NON\_WELL\_DEFINED\_DATE**: `Date`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:40

## Functions

### CommonName

▸ **CommonName**(`data`, `asPrintedString?`): `any`[]

commonName = ASN.1 OID 2.5.4.3

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:42

___

### CountryName

▸ **CountryName**(`data`, `asPrintedString?`): `any`[]

countryName = ASN.1 OID 2.5.4.6

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:48

___

### DnQualifier

▸ **DnQualifier**(`data`, `asPrintedString?`): `any`[]

dnQualifier = ASN.1 OID 2.5.4.46

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:68

___

### DomainComponent

▸ **DomainComponent**(`value`): `any`[]

domain-component = ASN.1 OID 0.9.2342.19200300.100.1.25, IA5String

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:72

___

### GenerationQualifier

▸ **GenerationQualifier**(`data`, `asPrintedString?`): `any`[]

generationQualifier = ASN.1 OID 2.5.4.44

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:66

___

### GivenName

▸ **GivenName**(`data`, `asPrintedString?`): `any`[]

givenName = ASN.1 OID 2.5.4.42

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:62

___

### Initials

▸ **Initials**(`data`, `asPrintedString?`): `any`[]

initials = ASN.1 OID 2.5.4.43

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:64

___

### LocalityName

▸ **LocalityName**(`data`, `asPrintedString?`): `any`[]

localityName = ASN.1 OID 2.5.4.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:50

___

### Name

▸ **Name**(`data`, `asPrintedString?`): `any`[]

name = ASN.1 OID 2.5.4.41

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:60

___

### OrganisationName

▸ **OrganisationName**(`data`, `asPrintedString?`): `any`[]

organizationName = ASN.1 OID 2.5.4.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:54

___

### OrganizationalUnitName

▸ **OrganizationalUnitName**(`data`, `asPrintedString?`): `any`[]

organizationalUnitName = ASN.1 OID 2.5.4.11

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:56

___

### Pseudonym

▸ **Pseudonym**(`data`, `asPrintedString?`): `any`[]

pseudonym = ASN.1 OID 2.5.4.65

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:70

___

### SerialNumber

▸ **SerialNumber**(`data`, `asPrintedString?`): `any`[]

serialNumber = ASN.1 OID 2.5.4.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:46

___

### StateOrProvinceName

▸ **StateOrProvinceName**(`data`, `asPrintedString?`): `any`[]

stateOrProvinceName = ASN.1 OID 2.5.4.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:52

___

### SurName

▸ **SurName**(`data`, `asPrintedString?`): `any`[]

surName = ASN.1 OID 2.5.4.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:44

___

### Title

▸ **Title**(`data`, `asPrintedString?`): `any`[]

title = ASN.1 OID 2.5.4.12

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `asPrintedString?` | `boolean` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:58
