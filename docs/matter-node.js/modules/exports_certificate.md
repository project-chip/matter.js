[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/certificate

# Module: exports/certificate

## Table of contents

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

- [OperationalCertificate](exports_certificate.md#operationalcertificate)
- [RootCertificate](exports_certificate.md#rootcertificate)

### Variables

- [TestCert\_PAA\_FFF1\_Cert](exports_certificate.md#testcert_paa_fff1_cert)
- [TestCert\_PAA\_FFF1\_PrivateKey](exports_certificate.md#testcert_paa_fff1_privatekey)
- [TestCert\_PAA\_FFF1\_PublicKey](exports_certificate.md#testcert_paa_fff1_publickey)
- [TestCert\_PAA\_FFF1\_SKID](exports_certificate.md#testcert_paa_fff1_skid)
- [TestCert\_PAA\_NoVID\_Cert](exports_certificate.md#testcert_paa_novid_cert)
- [TestCert\_PAA\_NoVID\_PrivateKey](exports_certificate.md#testcert_paa_novid_privatekey)
- [TestCert\_PAA\_NoVID\_PublicKey](exports_certificate.md#testcert_paa_novid_publickey)
- [TestCert\_PAA\_NoVID\_SKID](exports_certificate.md#testcert_paa_novid_skid)
- [TlvCertificationDeclaration](exports_certificate.md#tlvcertificationdeclaration)
- [TlvOperationalCertificate](exports_certificate.md#tlvoperationalcertificate)
- [TlvRootCertificate](exports_certificate.md#tlvrootcertificate)

### Functions

- [CommonName\_X520](exports_certificate.md#commonname_x520)
- [FabricId\_Matter](exports_certificate.md#fabricid_matter)
- [NodeId\_Matter](exports_certificate.md#nodeid_matter)
- [ProductId\_Matter](exports_certificate.md#productid_matter)
- [RcacId\_Matter](exports_certificate.md#rcacid_matter)
- [VendorId\_Matter](exports_certificate.md#vendorid_matter)
- [jsToMatterDate](exports_certificate.md#jstomatterdate)
- [matterToJsDate](exports_certificate.md#mattertojsdate)

## Type Aliases

### OperationalCertificate

Ƭ **OperationalCertificate**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvOperationalCertificate`](exports_certificate.md#tlvoperationalcertificate)\>

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:189

___

### RootCertificate

Ƭ **RootCertificate**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvRootCertificate`](exports_certificate.md#tlvrootcertificate)\>

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:188

## Variables

### TestCert\_PAA\_FFF1\_Cert

• `Const` **TestCert\_PAA\_FFF1\_Cert**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/ChipPAAuthorities.d.ts:8

___

### TestCert\_PAA\_FFF1\_PrivateKey

• `Const` **TestCert\_PAA\_FFF1\_PrivateKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/ChipPAAuthorities.d.ts:5

___

### TestCert\_PAA\_FFF1\_PublicKey

• `Const` **TestCert\_PAA\_FFF1\_PublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/ChipPAAuthorities.d.ts:6

___

### TestCert\_PAA\_FFF1\_SKID

• `Const` **TestCert\_PAA\_FFF1\_SKID**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/ChipPAAuthorities.d.ts:7

___

### TestCert\_PAA\_NoVID\_Cert

• `Const` **TestCert\_PAA\_NoVID\_Cert**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/ChipPAAuthorities.d.ts:4

___

### TestCert\_PAA\_NoVID\_PrivateKey

• `Const` **TestCert\_PAA\_NoVID\_PrivateKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/ChipPAAuthorities.d.ts:2

___

### TestCert\_PAA\_NoVID\_PublicKey

• `Const` **TestCert\_PAA\_NoVID\_PublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/ChipPAAuthorities.d.ts:1

___

### TestCert\_PAA\_NoVID\_SKID

• `Const` **TestCert\_PAA\_NoVID\_SKID**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/ChipPAAuthorities.d.ts:3

___

### TlvCertificationDeclaration

• `Const` **TlvCertificationDeclaration**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:174

___

### TlvOperationalCertificate

• `Const` **TlvOperationalCertificate**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:56

___

### TlvRootCertificate

• `Const` **TlvRootCertificate**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:29

## Functions

### CommonName\_X520

▸ **CommonName_X520**(`name`): `any`[]

commonName = ASN.1 OID 2.5.4.3

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:18

___

### FabricId\_Matter

▸ **FabricId_Matter**(`id`): `any`[]

matter-fabric-id = ASN.1 OID 1.3.6.1.4.1.37244.1.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`FabricId`](exports_datatype.md#fabricid) |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:24

___

### NodeId\_Matter

▸ **NodeId_Matter**(`nodeId`): `any`[]

matter-node-id = ASN.1 OID 1.3.6.1.4.1.37244.1.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](exports_datatype.md#nodeid) |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:20

___

### ProductId\_Matter

▸ **ProductId_Matter**(`id`): `any`[]

matter-oid-pid = ASN.1 OID 1.3.6.1.4.1.3724 4.2.2

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:28

___

### RcacId\_Matter

▸ **RcacId_Matter**(`id`): `any`[]

matter-rcac-id = ASN.1 OID 1.3.6.1.4.1.37244.1.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` \| `bigint` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:22

___

### VendorId\_Matter

▸ **VendorId_Matter**(`vendorId`): `any`[]

matter-oid-vid = ASN.1 OID 1.3.6.1.4.1.37244.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](exports_datatype.md#vendorid) |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:26

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

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:16

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

packages/matter.js/dist/cjs/certificate/CertificateManager.d.ts:15
