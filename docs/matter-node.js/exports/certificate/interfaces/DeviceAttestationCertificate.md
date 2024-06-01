[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/certificate](../README.md) / DeviceAttestationCertificate

# Interface: DeviceAttestationCertificate

## Extends

- [`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md)

## Properties

### ellipticCurveIdentifier

> **ellipticCurveIdentifier**: `number`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`ellipticCurveIdentifier`](../-internal-/interfaces/AttestationCertificateBase.md#ellipticcurveidentifier)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:481

***

### ellipticCurvePublicKey

> **ellipticCurvePublicKey**: `Uint8Array`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`ellipticCurvePublicKey`](../-internal-/interfaces/AttestationCertificateBase.md#ellipticcurvepublickey)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:482

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

> **keyUsage**: [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`object`\>

##### Type declaration

###### cRLSign

> **cRLSign**: [`BitFlag`](../../schema/README.md#bitflag)

###### dataEncipherment

> **dataEncipherment**: [`BitFlag`](../../schema/README.md#bitflag)

###### decipherOnly

> **decipherOnly**: [`BitFlag`](../../schema/README.md#bitflag)

###### digitalSignature

> **digitalSignature**: [`BitFlag`](../../schema/README.md#bitflag)

###### encipherOnly

> **encipherOnly**: [`BitFlag`](../../schema/README.md#bitflag)

###### keyAgreement

> **keyAgreement**: [`BitFlag`](../../schema/README.md#bitflag)

###### keyCertSign

> **keyCertSign**: [`BitFlag`](../../schema/README.md#bitflag)

###### keyEncipherment

> **keyEncipherment**: [`BitFlag`](../../schema/README.md#bitflag)

###### nonRepudiation

> **nonRepudiation**: [`BitFlag`](../../schema/README.md#bitflag)

#### subjectKeyIdentifier

> **subjectKeyIdentifier**: `Uint8Array`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`extensions`](../-internal-/interfaces/AttestationCertificateBase.md#extensions)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:483

***

### issuer

> **issuer**: `object`

#### commonName

> **commonName**: `string`

#### productId?

> `optional` **productId**: `number`

#### vendorId

> **vendorId**: [`VendorId`](../../datatype/README.md#vendorid)

#### Overrides

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`issuer`](../-internal-/interfaces/AttestationCertificateBase.md#issuer)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:497

***

### notAfter

> **notAfter**: `number`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`notAfter`](../-internal-/interfaces/AttestationCertificateBase.md#notafter)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:478

***

### notBefore

> **notBefore**: `number`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`notBefore`](../-internal-/interfaces/AttestationCertificateBase.md#notbefore)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:477

***

### publicKeyAlgorithm

> **publicKeyAlgorithm**: `number`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`publicKeyAlgorithm`](../-internal-/interfaces/AttestationCertificateBase.md#publickeyalgorithm)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:480

***

### serialNumber

> **serialNumber**: `Uint8Array`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`serialNumber`](../-internal-/interfaces/AttestationCertificateBase.md#serialnumber)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:474

***

### signature

> **signature**: `Uint8Array`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`signature`](../-internal-/interfaces/AttestationCertificateBase.md#signature)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:494

***

### signatureAlgorithm

> **signatureAlgorithm**: `number`

#### Inherited from

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`signatureAlgorithm`](../-internal-/interfaces/AttestationCertificateBase.md#signaturealgorithm)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:475

***

### subject

> **subject**: `object`

#### commonName

> **commonName**: `string`

#### productId

> **productId**: `number`

#### vendorId

> **vendorId**: [`VendorId`](../../datatype/README.md#vendorid)

#### Overrides

[`AttestationCertificateBase`](../-internal-/interfaces/AttestationCertificateBase.md).[`subject`](../-internal-/interfaces/AttestationCertificateBase.md#subject)

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:502
