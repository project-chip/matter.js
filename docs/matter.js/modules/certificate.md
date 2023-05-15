[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / certificate

# Module: certificate

## Table of contents

### Classes

- [AttestationCertificateManager](../classes/certificate.AttestationCertificateManager.md)
- [CertificateManager](../classes/certificate.CertificateManager.md)
- [CertificationDeclarationManager](../classes/certificate.CertificationDeclarationManager.md)
- [RootCertificateManager](../classes/certificate.RootCertificateManager.md)

### Interfaces

- [DeviceAttestationCertificate](../interfaces/certificate.DeviceAttestationCertificate.md)
- [ProductAttestationAuthorityCertificate](../interfaces/certificate.ProductAttestationAuthorityCertificate.md)
- [ProductAttestationIntermediateCertificate](../interfaces/certificate.ProductAttestationIntermediateCertificate.md)

### Type Aliases

- [OperationalCertificate](certificate.md#operationalcertificate)
- [RootCertificate](certificate.md#rootcertificate)

### Variables

- [TestCert\_PAA\_FFF1\_Cert](certificate.md#testcert_paa_fff1_cert)
- [TestCert\_PAA\_FFF1\_PrivateKey](certificate.md#testcert_paa_fff1_privatekey)
- [TestCert\_PAA\_FFF1\_PublicKey](certificate.md#testcert_paa_fff1_publickey)
- [TestCert\_PAA\_FFF1\_SKID](certificate.md#testcert_paa_fff1_skid)
- [TestCert\_PAA\_NoVID\_Cert](certificate.md#testcert_paa_novid_cert)
- [TestCert\_PAA\_NoVID\_PrivateKey](certificate.md#testcert_paa_novid_privatekey)
- [TestCert\_PAA\_NoVID\_PublicKey](certificate.md#testcert_paa_novid_publickey)
- [TestCert\_PAA\_NoVID\_SKID](certificate.md#testcert_paa_novid_skid)
- [TlvCertificationDeclaration](certificate.md#tlvcertificationdeclaration)
- [TlvOperationalCertificate](certificate.md#tlvoperationalcertificate)
- [TlvRootCertificate](certificate.md#tlvrootcertificate)

### Functions

- [CommonName\_X520](certificate.md#commonname_x520)
- [FabricId\_Matter](certificate.md#fabricid_matter)
- [NodeId\_Matter](certificate.md#nodeid_matter)
- [ProductId\_Matter](certificate.md#productid_matter)
- [RcacId\_Matter](certificate.md#rcacid_matter)
- [VendorId\_Matter](certificate.md#vendorid_matter)
- [jsToMatterDate](certificate.md#jstomatterdate)
- [matterToJsDate](certificate.md#mattertojsdate)

## Type Aliases

### OperationalCertificate

Ƭ **OperationalCertificate**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvOperationalCertificate`](certificate.md#tlvoperationalcertificate)\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:238](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L238)

___

### RootCertificate

Ƭ **RootCertificate**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvRootCertificate`](certificate.md#tlvrootcertificate)\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:237](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L237)

## Variables

### TestCert\_PAA\_FFF1\_Cert

• `Const` **TestCert\_PAA\_FFF1\_Cert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L22)

___

### TestCert\_PAA\_FFF1\_PrivateKey

• `Const` **TestCert\_PAA\_FFF1\_PrivateKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L19)

___

### TestCert\_PAA\_FFF1\_PublicKey

• `Const` **TestCert\_PAA\_FFF1\_PublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L20)

___

### TestCert\_PAA\_FFF1\_SKID

• `Const` **TestCert\_PAA\_FFF1\_SKID**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L21)

___

### TestCert\_PAA\_NoVID\_Cert

• `Const` **TestCert\_PAA\_NoVID\_Cert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L15)

___

### TestCert\_PAA\_NoVID\_PrivateKey

• `Const` **TestCert\_PAA\_NoVID\_PrivateKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L13)

___

### TestCert\_PAA\_NoVID\_PublicKey

• `Const` **TestCert\_PAA\_NoVID\_PublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L12)

___

### TestCert\_PAA\_NoVID\_SKID

• `Const` **TestCert\_PAA\_NoVID\_SKID**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L14)

___

### TlvCertificationDeclaration

• `Const` **TlvCertificationDeclaration**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `authorizedPaaList`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`[]\> ; `certificateId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `certificationType`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `dacOriginProductId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `dacOriginVendorId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`VendorId`](../classes/datatype.VendorId.md)\> ; `deviceTypeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `formatVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `produceIdArray`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`[]\> ; `securityInformation`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `securityLevel`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `vendorId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`VendorId`](../classes/datatype.VendorId.md)\> ; `versionNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:222](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L222)

___

### TlvOperationalCertificate

• `Const` **TlvOperationalCertificate**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:100](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L100)

___

### TlvRootCertificate

• `Const` **TlvRootCertificate**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L72)

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

[packages/matter.js/src/certificate/CertificateManager.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L55)

___

### FabricId\_Matter

▸ **FabricId_Matter**(`id`): `any`[]

matter-fabric-id = ASN.1 OID 1.3.6.1.4.1.37244.1.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` \| `bigint` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L64)

___

### NodeId\_Matter

▸ **NodeId_Matter**(`nodeId`): `any`[]

matter-node-id = ASN.1 OID 1.3.6.1.4.1.37244.1.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../classes/datatype.NodeId.md) |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L58)

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

[packages/matter.js/src/certificate/CertificateManager.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L70)

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

[packages/matter.js/src/certificate/CertificateManager.ts:61](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L61)

___

### VendorId\_Matter

▸ **VendorId_Matter**(`vendorId`): `any`[]

matter-oid-vid = ASN.1 OID 1.3.6.1.4.1.37244.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../classes/datatype.VendorId.md) |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L67)

___

### jsToMatterDate

▸ **jsToMatterDate**(`date`, `addYears?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `Date` | `undefined` |
| `addYears` | `number` | `0` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L36)

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

[packages/matter.js/src/certificate/CertificateManager.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L32)
