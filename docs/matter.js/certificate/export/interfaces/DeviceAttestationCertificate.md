[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [certificate/export](../README.md) / DeviceAttestationCertificate

# Interface: DeviceAttestationCertificate

## Extends

- [`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md)

## Properties

### ellipticCurveIdentifier

> **ellipticCurveIdentifier**: `number`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`ellipticCurveIdentifier`](../-internal-/interfaces/AttestationCertificateBase.md#ellipticcurveidentifier)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:290](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L290)

***

### ellipticCurvePublicKey

> **ellipticCurvePublicKey**: `Uint8Array`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`ellipticCurvePublicKey`](../-internal-/interfaces/AttestationCertificateBase.md#ellipticcurvepublickey)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:291](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L291)

***

### extensions

> **extensions**: `object`

#### authorityKeyIdentifier

> **authorityKeyIdentifier**: `Uint8Array`

#### basicConstraints

> **basicConstraints**: `object`

#### basicConstraints.isCa

> **isCa**: `boolean`

#### basicConstraints.pathLen?

> `optional` **pathLen**: `number`

#### extendedKeyUsage?

> `optional` **extendedKeyUsage**: `number`[]

#### futureExtension?

> `optional` **futureExtension**: `Uint8Array`[]

#### keyUsage

> **keyUsage**: [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

##### Type declaration

###### cRLSign

> **cRLSign**: [`BitFlag`](../../../schema/export/README.md#bitflag)

###### dataEncipherment

> **dataEncipherment**: [`BitFlag`](../../../schema/export/README.md#bitflag)

###### decipherOnly

> **decipherOnly**: [`BitFlag`](../../../schema/export/README.md#bitflag)

###### digitalSignature

> **digitalSignature**: [`BitFlag`](../../../schema/export/README.md#bitflag)

###### encipherOnly

> **encipherOnly**: [`BitFlag`](../../../schema/export/README.md#bitflag)

###### keyAgreement

> **keyAgreement**: [`BitFlag`](../../../schema/export/README.md#bitflag)

###### keyCertSign

> **keyCertSign**: [`BitFlag`](../../../schema/export/README.md#bitflag)

###### keyEncipherment

> **keyEncipherment**: [`BitFlag`](../../../schema/export/README.md#bitflag)

###### nonRepudiation

> **nonRepudiation**: [`BitFlag`](../../../schema/export/README.md#bitflag)

#### subjectKeyIdentifier

> **subjectKeyIdentifier**: `Uint8Array`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`extensions`](../-internal-/interfaces/AttestationCertificateBase.md#extensions)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:292](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L292)

***

### issuer

> **issuer**: `object`

#### commonName

> **commonName**: `string`

#### productId?

> `optional` **productId**: `number`

#### vendorId

> **vendorId**: [`VendorId`](../../../datatype/export/README.md#vendorid)

#### Overrides

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`issuer`](../-internal-/interfaces/AttestationCertificateBase.md#issuer)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:307](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L307)

***

### notAfter

> **notAfter**: `number`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`notAfter`](../-internal-/interfaces/AttestationCertificateBase.md#notafter)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:287](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L287)

***

### notBefore

> **notBefore**: `number`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`notBefore`](../-internal-/interfaces/AttestationCertificateBase.md#notbefore)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L286)

***

### publicKeyAlgorithm

> **publicKeyAlgorithm**: `number`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`publicKeyAlgorithm`](../-internal-/interfaces/AttestationCertificateBase.md#publickeyalgorithm)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:289](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L289)

***

### serialNumber

> **serialNumber**: `Uint8Array`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`serialNumber`](../-internal-/interfaces/AttestationCertificateBase.md#serialnumber)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:283](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L283)

***

### signature

> **signature**: `Uint8Array`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`signature`](../-internal-/interfaces/AttestationCertificateBase.md#signature)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:303](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L303)

***

### signatureAlgorithm

> **signatureAlgorithm**: `number`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`signatureAlgorithm`](../-internal-/interfaces/AttestationCertificateBase.md#signaturealgorithm)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:284](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L284)

***

### subject

> **subject**: `object`

#### commonName

> **commonName**: `string`

#### productId

> **productId**: `number`

#### vendorId

> **vendorId**: [`VendorId`](../../../datatype/export/README.md#vendorid)

#### Overrides

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`subject`](../-internal-/interfaces/AttestationCertificateBase.md#subject)

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:312](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L312)
