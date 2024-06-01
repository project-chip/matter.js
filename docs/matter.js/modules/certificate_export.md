[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / certificate/export

# Module: certificate/export

## Table of contents

### Modules

- [\<internal\>](certificate_export._internal_.md)

### Namespaces

- [Pkcs7](certificate_export.Pkcs7.md)
- [X509](certificate_export.X509.md)
- [X520](certificate_export.X520.md)
- [X962](certificate_export.X962.md)

### Classes

- [AttestationCertificateManager](../classes/certificate_export.AttestationCertificateManager.md)
- [CertificateError](../classes/certificate_export.CertificateError.md)
- [CertificateManager](../classes/certificate_export.CertificateManager.md)
- [CertificationDeclarationManager](../classes/certificate_export.CertificationDeclarationManager.md)
- [RootCertificateManager](../classes/certificate_export.RootCertificateManager.md)

### Interfaces

- [DeviceAttestationCertificate](../interfaces/certificate_export.DeviceAttestationCertificate.md)
- [ProductAttestationAuthorityCertificate](../interfaces/certificate_export.ProductAttestationAuthorityCertificate.md)
- [ProductAttestationIntermediateCertificate](../interfaces/certificate_export.ProductAttestationIntermediateCertificate.md)

### Type Aliases

- [BaseCertificate](certificate_export.md#basecertificate)
- [IntermediateCertificate](certificate_export.md#intermediatecertificate)
- [OperationalCertificate](certificate_export.md#operationalcertificate)
- [RootCertificate](certificate_export.md#rootcertificate)
- [Unsigned](certificate_export.md#unsigned)

### Variables

- [SHA256\_CMS](certificate_export.md#sha256_cms)
- [TestCert\_PAA\_FFF1\_Cert](certificate_export.md#testcert_paa_fff1_cert)
- [TestCert\_PAA\_FFF1\_PrivateKey](certificate_export.md#testcert_paa_fff1_privatekey)
- [TestCert\_PAA\_FFF1\_PublicKey](certificate_export.md#testcert_paa_fff1_publickey)
- [TestCert\_PAA\_FFF1\_SKID](certificate_export.md#testcert_paa_fff1_skid)
- [TestCert\_PAA\_NoVID\_Cert](certificate_export.md#testcert_paa_novid_cert)
- [TestCert\_PAA\_NoVID\_PrivateKey](certificate_export.md#testcert_paa_novid_privatekey)
- [TestCert\_PAA\_NoVID\_PublicKey](certificate_export.md#testcert_paa_novid_publickey)
- [TestCert\_PAA\_NoVID\_SKID](certificate_export.md#testcert_paa_novid_skid)
- [TlvCertificationDeclaration](certificate_export.md#tlvcertificationdeclaration)
- [TlvIntermediateCertificate](certificate_export.md#tlvintermediatecertificate)
- [TlvOperationalCertificate](certificate_export.md#tlvoperationalcertificate)
- [TlvRootCertificate](certificate_export.md#tlvrootcertificate)

### Functions

- [FabricId\_Matter](certificate_export.md#fabricid_matter)
- [FirmwareSigningId\_Matter](certificate_export.md#firmwaresigningid_matter)
- [IcacId\_Matter](certificate_export.md#icacid_matter)
- [NocCat\_Matter](certificate_export.md#noccat_matter)
- [NodeId\_Matter](certificate_export.md#nodeid_matter)
- [ProductId\_Matter](certificate_export.md#productid_matter)
- [RcacId\_Matter](certificate_export.md#rcacid_matter)
- [VendorId\_Matter](certificate_export.md#vendorid_matter)
- [jsToMatterDate](certificate_export.md#jstomatterdate)
- [matterToJsDate](certificate_export.md#mattertojsdate)

## Type Aliases

### BaseCertificate

Ƭ **BaseCertificate**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvBaseCertificate`](certificate_export._internal_.md#tlvbasecertificate)\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:360](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L360)

___

### IntermediateCertificate

Ƭ **IntermediateCertificate**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvIntermediateCertificate`](certificate_export.md#tlvintermediatecertificate)\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:362](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L362)

___

### OperationalCertificate

Ƭ **OperationalCertificate**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvOperationalCertificate`](certificate_export.md#tlvoperationalcertificate)\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:363](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L363)

___

### RootCertificate

Ƭ **RootCertificate**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRootCertificate`](certificate_export.md#tlvrootcertificate)\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:361](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L361)

___

### Unsigned

Ƭ **Unsigned**\<`Type`\>: \{ [Property in keyof Type as Exclude\<Property, "signature"\>]: Type[Property] }

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:364](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L364)

## Variables

### SHA256\_CMS

• `Const` **SHA256\_CMS**: `any`

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:31](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateDerTypes.ts#L31)

___

### TestCert\_PAA\_FFF1\_Cert

• `Const` **TestCert\_PAA\_FFF1\_Cert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:32](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L32)

___

### TestCert\_PAA\_FFF1\_PrivateKey

• `Const` **TestCert\_PAA\_FFF1\_PrivateKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:25](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L25)

___

### TestCert\_PAA\_FFF1\_PublicKey

• `Const` **TestCert\_PAA\_FFF1\_PublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:28](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L28)

___

### TestCert\_PAA\_FFF1\_SKID

• `Const` **TestCert\_PAA\_FFF1\_SKID**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:31](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L31)

___

### TestCert\_PAA\_NoVID\_Cert

• `Const` **TestCert\_PAA\_NoVID\_Cert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:19](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L19)

___

### TestCert\_PAA\_NoVID\_PrivateKey

• `Const` **TestCert\_PAA\_NoVID\_PrivateKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:15](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L15)

___

### TestCert\_PAA\_NoVID\_PublicKey

• `Const` **TestCert\_PAA\_NoVID\_PublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:12](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L12)

___

### TestCert\_PAA\_NoVID\_SKID

• `Const` **TestCert\_PAA\_NoVID\_SKID**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/ChipPAAuthorities.ts:18](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/ChipPAAuthorities.ts#L18)

___

### TlvCertificationDeclaration

• `Const` **TlvCertificationDeclaration**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `authorizedPaaList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`[]\> ; `certificateId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `certificationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `dacOriginProductId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `dacOriginVendorId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`VendorId`](datatype_export.md#vendorid)\> ; `deviceTypeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `formatVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `produceIdArray`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`[]\> ; `securityInformation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `securityLevel`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](datatype_export.md#vendorid)\> ; `versionNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:342](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L342)

___

### TlvIntermediateCertificate

• `Const` **TlvIntermediateCertificate**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<`Uint8Array`[]\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `cRLSign`: [`BitFlag`](schema_export.md#bitflag) ; `dataEncipherment`: [`BitFlag`](schema_export.md#bitflag) ; `decipherOnly`: [`BitFlag`](schema_export.md#bitflag) ; `digitalSignature`: [`BitFlag`](schema_export.md#bitflag) ; `encipherOnly`: [`BitFlag`](schema_export.md#bitflag) ; `keyAgreement`: [`BitFlag`](schema_export.md#bitflag) ; `keyCertSign`: [`BitFlag`](schema_export.md#bitflag) ; `keyEncipherment`: [`BitFlag`](schema_export.md#bitflag) ; `nonRepudiation`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commonName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `domainComponent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonym`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `title`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  } & \{ `caseAuthenticatedTags`: [`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<[`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)[]\> ; `fabricId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricId`](datatype_export.md#fabricid)\> ; `firmwareSigningId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `icacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `rcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  } & \{ `commonNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initialsPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `namePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonymPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNumPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `titlePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commonName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `domainComponent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonym`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `title`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  } & \{ `fabricId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricId`](datatype_export.md#fabricid)\> ; `icacId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  } & \{ `commonNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initialsPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `namePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonymPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNumPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `titlePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>\>  }\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:272](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L272)

___

### TlvOperationalCertificate

• `Const` **TlvOperationalCertificate**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<`Uint8Array`[]\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `cRLSign`: [`BitFlag`](schema_export.md#bitflag) ; `dataEncipherment`: [`BitFlag`](schema_export.md#bitflag) ; `decipherOnly`: [`BitFlag`](schema_export.md#bitflag) ; `digitalSignature`: [`BitFlag`](schema_export.md#bitflag) ; `encipherOnly`: [`BitFlag`](schema_export.md#bitflag) ; `keyAgreement`: [`BitFlag`](schema_export.md#bitflag) ; `keyCertSign`: [`BitFlag`](schema_export.md#bitflag) ; `keyEncipherment`: [`BitFlag`](schema_export.md#bitflag) ; `nonRepudiation`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commonName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `domainComponent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonym`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `title`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  } & \{ `caseAuthenticatedTags`: [`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<[`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)[]\> ; `fabricId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricId`](datatype_export.md#fabricid)\> ; `firmwareSigningId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `icacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `rcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  } & \{ `commonNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initialsPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `namePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonymPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNumPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `titlePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commonName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `domainComponent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonym`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `title`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  } & \{ `caseAuthenticatedTags`: [`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<[`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)[]\> ; `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricId`](datatype_export.md#fabricid)\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  } & \{ `commonNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initialsPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `namePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonymPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNumPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `titlePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>\>  }\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:263](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L263)

___

### TlvRootCertificate

• `Const` **TlvRootCertificate**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`[]\> ; `futureExtension`: [`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<`Uint8Array`[]\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `cRLSign`: [`BitFlag`](schema_export.md#bitflag) ; `dataEncipherment`: [`BitFlag`](schema_export.md#bitflag) ; `decipherOnly`: [`BitFlag`](schema_export.md#bitflag) ; `digitalSignature`: [`BitFlag`](schema_export.md#bitflag) ; `encipherOnly`: [`BitFlag`](schema_export.md#bitflag) ; `keyAgreement`: [`BitFlag`](schema_export.md#bitflag) ; `keyCertSign`: [`BitFlag`](schema_export.md#bitflag) ; `keyEncipherment`: [`BitFlag`](schema_export.md#bitflag) ; `nonRepudiation`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commonName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `domainComponent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonym`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `title`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  } & \{ `caseAuthenticatedTags`: [`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<[`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)[]\> ; `fabricId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricId`](datatype_export.md#fabricid)\> ; `firmwareSigningId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `icacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `rcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  } & \{ `commonNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initialsPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `namePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonymPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNumPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `titlePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commonName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `domainComponent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifier`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initials`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonym`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNum`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `title`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  } & \{ `fabricId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricId`](datatype_export.md#fabricid)\> ; `rcacId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  } & \{ `commonNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `countryNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `dnQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `genQualifierPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `givenNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `initialsPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `localityNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `namePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `orgUnitNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `pseudonymPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `serialNumPs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `stateOrProvinceNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `sureNamePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `titlePs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>\>  }\>

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:255](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L255)

## Functions

### FabricId\_Matter

▸ **FabricId_Matter**(`value`): `any`[]

matter-fabric-id = ASN.1 OID 1.3.6.1.4.1.37244.1.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FabricId`](datatype_export.md#fabricid) |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:121](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L121)

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

[packages/matter.js/src/certificate/CertificateManager.ts:112](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L112)

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

[packages/matter.js/src/certificate/CertificateManager.ts:115](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L115)

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

[packages/matter.js/src/certificate/CertificateManager.ts:124](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L124)

___

### NodeId\_Matter

▸ **NodeId_Matter**(`value`): `any`[]

matter-node-id = ASN.1 OID 1.3.6.1.4.1.37244.1.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NodeId`](datatype_export.md#nodeid) |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:109](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L109)

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

[packages/matter.js/src/certificate/CertificateManager.ts:130](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L130)

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

[packages/matter.js/src/certificate/CertificateManager.ts:118](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L118)

___

### VendorId\_Matter

▸ **VendorId_Matter**(`value`): `any`[]

matter-oid-vid = ASN.1 OID 1.3.6.1.4.1.37244.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`VendorId`](datatype_export.md#vendorid) |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:127](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L127)

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

[packages/matter.js/src/certificate/CertificateManager.ts:52](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L52)

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

[packages/matter.js/src/certificate/CertificateManager.ts:48](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/certificate/CertificateManager.ts#L48)
