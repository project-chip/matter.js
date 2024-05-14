[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/certificate

# Module: exports/certificate

## Table of contents

### Modules

- [\<internal\>](exports_certificate._internal_.md)

### Namespaces

- [Pkcs7](exports_certificate.Pkcs7.md)
- [X509](exports_certificate.X509.md)
- [X520](exports_certificate.X520.md)
- [X962](exports_certificate.X962.md)

### Classes

- [AttestationCertificateManager](../classes/exports_certificate.AttestationCertificateManager.md)
- [CertificateError](../classes/exports_certificate.CertificateError.md)
- [CertificateManager](../classes/exports_certificate.CertificateManager.md)
- [CertificationDeclarationManager](../classes/exports_certificate.CertificationDeclarationManager.md)
- [RootCertificateManager](../classes/exports_certificate.RootCertificateManager.md)

### Interfaces

- [DeviceAttestationCertificate](../interfaces/exports_certificate.DeviceAttestationCertificate.md)
- [ProductAttestationAuthorityCertificate](../interfaces/exports_certificate.ProductAttestationAuthorityCertificate.md)
- [ProductAttestationIntermediateCertificate](../interfaces/exports_certificate.ProductAttestationIntermediateCertificate.md)

### Type Aliases

- [BaseCertificate](exports_certificate.md#basecertificate)
- [IntermediateCertificate](exports_certificate.md#intermediatecertificate)
- [OperationalCertificate](exports_certificate.md#operationalcertificate)
- [RootCertificate](exports_certificate.md#rootcertificate)
- [Unsigned](exports_certificate.md#unsigned)

### Variables

- [SHA256\_CMS](exports_certificate.md#sha256_cms)
- [TestCert\_PAA\_FFF1\_Cert](exports_certificate.md#testcert_paa_fff1_cert)
- [TestCert\_PAA\_FFF1\_PrivateKey](exports_certificate.md#testcert_paa_fff1_privatekey)
- [TestCert\_PAA\_FFF1\_PublicKey](exports_certificate.md#testcert_paa_fff1_publickey)
- [TestCert\_PAA\_FFF1\_SKID](exports_certificate.md#testcert_paa_fff1_skid)
- [TestCert\_PAA\_NoVID\_Cert](exports_certificate.md#testcert_paa_novid_cert)
- [TestCert\_PAA\_NoVID\_PrivateKey](exports_certificate.md#testcert_paa_novid_privatekey)
- [TestCert\_PAA\_NoVID\_PublicKey](exports_certificate.md#testcert_paa_novid_publickey)
- [TestCert\_PAA\_NoVID\_SKID](exports_certificate.md#testcert_paa_novid_skid)
- [TlvCertificationDeclaration](exports_certificate.md#tlvcertificationdeclaration)
- [TlvIntermediateCertificate](exports_certificate.md#tlvintermediatecertificate)
- [TlvOperationalCertificate](exports_certificate.md#tlvoperationalcertificate)
- [TlvRootCertificate](exports_certificate.md#tlvrootcertificate)

### Functions

- [FabricId\_Matter](exports_certificate.md#fabricid_matter)
- [FirmwareSigningId\_Matter](exports_certificate.md#firmwaresigningid_matter)
- [IcacId\_Matter](exports_certificate.md#icacid_matter)
- [NocCat\_Matter](exports_certificate.md#noccat_matter)
- [NodeId\_Matter](exports_certificate.md#nodeid_matter)
- [ProductId\_Matter](exports_certificate.md#productid_matter)
- [RcacId\_Matter](exports_certificate.md#rcacid_matter)
- [VendorId\_Matter](exports_certificate.md#vendorid_matter)
- [jsToMatterDate](exports_certificate.md#jstomatterdate)
- [matterToJsDate](exports_certificate.md#mattertojsdate)

## Type Aliases

### BaseCertificate

Ƭ **BaseCertificate**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvBaseCertificate`](exports_certificate._internal_.md#tlvbasecertificate)\>

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:543

___

### IntermediateCertificate

Ƭ **IntermediateCertificate**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvIntermediateCertificate`](exports_certificate.md#tlvintermediatecertificate)\>

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:545

___

### OperationalCertificate

Ƭ **OperationalCertificate**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvOperationalCertificate`](exports_certificate.md#tlvoperationalcertificate)\>

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:546

___

### RootCertificate

Ƭ **RootCertificate**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvRootCertificate`](exports_certificate.md#tlvrootcertificate)\>

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:544

___

### Unsigned

Ƭ **Unsigned**\<`Type`\>: \{ [Property in keyof Type as Exclude\<Property, "signature"\>]: Type[Property] }

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:547

## Variables

### SHA256\_CMS

• `Const` **SHA256\_CMS**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:27

___

### TestCert\_PAA\_FFF1\_Cert

• `Const` **TestCert\_PAA\_FFF1\_Cert**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:8

___

### TestCert\_PAA\_FFF1\_PrivateKey

• `Const` **TestCert\_PAA\_FFF1\_PrivateKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:5

___

### TestCert\_PAA\_FFF1\_PublicKey

• `Const` **TestCert\_PAA\_FFF1\_PublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:6

___

### TestCert\_PAA\_FFF1\_SKID

• `Const` **TestCert\_PAA\_FFF1\_SKID**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:7

___

### TestCert\_PAA\_NoVID\_Cert

• `Const` **TestCert\_PAA\_NoVID\_Cert**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:4

___

### TestCert\_PAA\_NoVID\_PrivateKey

• `Const` **TestCert\_PAA\_NoVID\_PrivateKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:2

___

### TestCert\_PAA\_NoVID\_PublicKey

• `Const` **TestCert\_PAA\_NoVID\_PublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:1

___

### TestCert\_PAA\_NoVID\_SKID

• `Const` **TestCert\_PAA\_NoVID\_SKID**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/ChipPAAuthorities.d.ts:3

___

### TlvCertificationDeclaration

• `Const` **TlvCertificationDeclaration**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:529

___

### TlvIntermediateCertificate

• `Const` **TlvIntermediateCertificate**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:265

___

### TlvOperationalCertificate

• `Const` **TlvOperationalCertificate**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:155

___

### TlvRootCertificate

• `Const` **TlvRootCertificate**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:46

## Functions

### FabricId\_Matter

▸ **FabricId_Matter**(`value`): `any`[]

matter-fabric-id = ASN.1 OID 1.3.6.1.4.1.37244.1.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FabricId`](exports_datatype.md#fabricid) |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:28

___

### FirmwareSigningId\_Matter

▸ **FirmwareSigningId_Matter**(`value`): `any`[]

matter-firmware-signing-id = ASN.1 OID 1.3.6.1.4.1.37244.1.2

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:22

___

### IcacId\_Matter

▸ **IcacId_Matter**(`value`): `any`[]

matter-icac-id = ASN.1 OID 1.3.6.1.4.1.37244.1.3

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:24

___

### NocCat\_Matter

▸ **NocCat_Matter**(`value`): `any`[]

matter-noc-cat = ASN.1 OID 1.3.6.1.4.1.37244.1.6

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:30

___

### NodeId\_Matter

▸ **NodeId_Matter**(`value`): `any`[]

matter-node-id = ASN.1 OID 1.3.6.1.4.1.37244.1.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NodeId`](exports_datatype.md#nodeid) |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:20

___

### ProductId\_Matter

▸ **ProductId_Matter**(`value`): `any`[]

matter-oid-pid = ASN.1 OID 1.3.6.1.4.1.37244.2.2

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:34

___

### RcacId\_Matter

▸ **RcacId_Matter**(`value`): `any`[]

matter-rcac-id = ASN.1 OID 1.3.6.1.4.1.37244.1.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:26

___

### VendorId\_Matter

▸ **VendorId_Matter**(`value`): `any`[]

matter-oid-vid = ASN.1 OID 1.3.6.1.4.1.37244.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`VendorId`](exports_datatype.md#vendorid) |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:32

___

### jsToMatterDate

▸ **jsToMatterDate**(`date`, `addYears?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `addYears?` | `number` |

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:18

___

### matterToJsDate

▸ **matterToJsDate**(`date`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`Date`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:17
