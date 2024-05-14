[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](certificate_export.md) / X520

# Namespace: X520

[certificate/export](certificate_export.md).X520

## Table of contents

### Variables

- [NON\_WELL\_DEFINED\_DATE](certificate_export.X520.md#non_well_defined_date)

### Functions

- [CommonName](certificate_export.X520.md#commonname)
- [CountryName](certificate_export.X520.md#countryname)
- [DnQualifier](certificate_export.X520.md#dnqualifier)
- [DomainComponent](certificate_export.X520.md#domaincomponent)
- [GenerationQualifier](certificate_export.X520.md#generationqualifier)
- [GivenName](certificate_export.X520.md#givenname)
- [Initials](certificate_export.X520.md#initials)
- [LocalityName](certificate_export.X520.md#localityname)
- [Name](certificate_export.X520.md#name)
- [OrganisationName](certificate_export.X520.md#organisationname)
- [OrganizationalUnitName](certificate_export.X520.md#organizationalunitname)
- [Pseudonym](certificate_export.X520.md#pseudonym)
- [SerialNumber](certificate_export.X520.md#serialnumber)
- [StateOrProvinceName](certificate_export.X520.md#stateorprovincename)
- [SurName](certificate_export.X520.md#surname)
- [Title](certificate_export.X520.md#title)

## Variables

### NON\_WELL\_DEFINED\_DATE

• `Const` **NON\_WELL\_DEFINED\_DATE**: `Date`

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:95](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L95)

## Functions

### CommonName

▸ **CommonName**(`data`, `asPrintedString?`): `any`[]

commonName = ASN.1 OID 2.5.4.3

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:113](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L113)

___

### CountryName

▸ **CountryName**(`data`, `asPrintedString?`): `any`[]

countryName = ASN.1 OID 2.5.4.6

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:119](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L119)

___

### DnQualifier

▸ **DnQualifier**(`data`, `asPrintedString?`): `any`[]

dnQualifier = ASN.1 OID 2.5.4.46

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:139](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L139)

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

[packages/matter.js/src/certificate/CertificateDerTypes.ts:143](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L143)

___

### GenerationQualifier

▸ **GenerationQualifier**(`data`, `asPrintedString?`): `any`[]

generationQualifier = ASN.1 OID 2.5.4.44

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:137](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L137)

___

### GivenName

▸ **GivenName**(`data`, `asPrintedString?`): `any`[]

givenName = ASN.1 OID 2.5.4.42

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:133](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L133)

___

### Initials

▸ **Initials**(`data`, `asPrintedString?`): `any`[]

initials = ASN.1 OID 2.5.4.43

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:135](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L135)

___

### LocalityName

▸ **LocalityName**(`data`, `asPrintedString?`): `any`[]

localityName = ASN.1 OID 2.5.4.7

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:121](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L121)

___

### Name

▸ **Name**(`data`, `asPrintedString?`): `any`[]

name = ASN.1 OID 2.5.4.41

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:131](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L131)

___

### OrganisationName

▸ **OrganisationName**(`data`, `asPrintedString?`): `any`[]

organizationName = ASN.1 OID 2.5.4.10

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:125](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L125)

___

### OrganizationalUnitName

▸ **OrganizationalUnitName**(`data`, `asPrintedString?`): `any`[]

organizationalUnitName = ASN.1 OID 2.5.4.11

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:127](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L127)

___

### Pseudonym

▸ **Pseudonym**(`data`, `asPrintedString?`): `any`[]

pseudonym = ASN.1 OID 2.5.4.65

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:141](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L141)

___

### SerialNumber

▸ **SerialNumber**(`data`, `asPrintedString?`): `any`[]

serialNumber = ASN.1 OID 2.5.4.5

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:117](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L117)

___

### StateOrProvinceName

▸ **StateOrProvinceName**(`data`, `asPrintedString?`): `any`[]

stateOrProvinceName = ASN.1 OID 2.5.4.8

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:123](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L123)

___

### SurName

▸ **SurName**(`data`, `asPrintedString?`): `any`[]

surName = ASN.1 OID 2.5.4.4

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:115](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L115)

___

### Title

▸ **Title**(`data`, `asPrintedString?`): `any`[]

title = ASN.1 OID 2.5.4.12

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `asPrintedString` | `boolean` | `false` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:129](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L129)
