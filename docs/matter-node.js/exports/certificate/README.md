[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / exports/certificate

# exports/certificate

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

> **BaseCertificate**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvBaseCertificate`](-internal-/README.md#tlvbasecertificate)\>

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:543

***

### IntermediateCertificate

> **IntermediateCertificate**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvIntermediateCertificate`](README.md#tlvintermediatecertificate)\>

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:545

***

### OperationalCertificate

> **OperationalCertificate**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvOperationalCertificate`](README.md#tlvoperationalcertificate)\>

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:546

***

### RootCertificate

> **RootCertificate**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvRootCertificate`](README.md#tlvrootcertificate)\>

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:544

***

### Unsigned\<Type\>

> **Unsigned**\<`Type`\>: `{ [Property in keyof Type as Exclude<Property, "signature">]: Type[Property] }`

#### Type parameters

| Type parameter |
| :------ |
| `Type` |

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:547

## Variables

### SHA256\_CMS

> `const` **SHA256\_CMS**: `any`

#### Source

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:27

***

### TestCert\_PAA\_FFF1\_Cert

> `const` **TestCert\_PAA\_FFF1\_Cert**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:8

***

### TestCert\_PAA\_FFF1\_PrivateKey

> `const` **TestCert\_PAA\_FFF1\_PrivateKey**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:5

***

### TestCert\_PAA\_FFF1\_PublicKey

> `const` **TestCert\_PAA\_FFF1\_PublicKey**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:6

***

### TestCert\_PAA\_FFF1\_SKID

> `const` **TestCert\_PAA\_FFF1\_SKID**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:7

***

### TestCert\_PAA\_NoVID\_Cert

> `const` **TestCert\_PAA\_NoVID\_Cert**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:4

***

### TestCert\_PAA\_NoVID\_PrivateKey

> `const` **TestCert\_PAA\_NoVID\_PrivateKey**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:2

***

### TestCert\_PAA\_NoVID\_PublicKey

> `const` **TestCert\_PAA\_NoVID\_PublicKey**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:1

***

### TestCert\_PAA\_NoVID\_SKID

> `const` **TestCert\_PAA\_NoVID\_SKID**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:3

***

### TlvCertificationDeclaration

> `const` **TlvCertificationDeclaration**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:529

***

### TlvIntermediateCertificate

> `const` **TlvIntermediateCertificate**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:265

***

### TlvOperationalCertificate

> `const` **TlvOperationalCertificate**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:155

***

### TlvRootCertificate

> `const` **TlvRootCertificate**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:46

## Functions

### FabricId\_Matter()

> **FabricId\_Matter**(`value`): `any`[]

matter-fabric-id = ASN.1 OID 1.3.6.1.4.1.37244.1.5

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`FabricId`](../datatype/README.md#fabricid) |

#### Returns

`any`[]

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:28

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:22

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:24

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:30

***

### NodeId\_Matter()

> **NodeId\_Matter**(`value`): `any`[]

matter-node-id = ASN.1 OID 1.3.6.1.4.1.37244.1.1

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`NodeId`](../datatype/README.md#nodeid) |

#### Returns

`any`[]

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:20

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:34

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:26

***

### VendorId\_Matter()

> **VendorId\_Matter**(`value`): `any`[]

matter-oid-vid = ASN.1 OID 1.3.6.1.4.1.37244.2.1

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`VendorId`](../datatype/README.md#vendorid) |

#### Returns

`any`[]

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:32

***

### jsToMatterDate()

> **jsToMatterDate**(`date`, `addYears`?): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `date` | `Date` |
| `addYears`? | `number` |

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:18

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

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:17
