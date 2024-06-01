[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/certificate](../../README.md) / [\<internal\>](../README.md) / AttestationCertificateBase

# Interface: AttestationCertificateBase

## Extended by

- [`DeviceAttestationCertificate`](../../interfaces/DeviceAttestationCertificate.md)
- [`ProductAttestationIntermediateCertificate`](../../interfaces/ProductAttestationIntermediateCertificate.md)
- [`ProductAttestationAuthorityCertificate`](../../interfaces/ProductAttestationAuthorityCertificate.md)

## Properties

### ellipticCurveIdentifier

> **ellipticCurveIdentifier**: `number`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:481

***

### ellipticCurvePublicKey

> **ellipticCurvePublicKey**: `Uint8Array`

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

> **keyUsage**: [`TypeFromPartialBitSchema`](../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

##### Type declaration

###### cRLSign

> **cRLSign**: [`BitFlag`](../../../schema/README.md#bitflag)

###### dataEncipherment

> **dataEncipherment**: [`BitFlag`](../../../schema/README.md#bitflag)

###### decipherOnly

> **decipherOnly**: [`BitFlag`](../../../schema/README.md#bitflag)

###### digitalSignature

> **digitalSignature**: [`BitFlag`](../../../schema/README.md#bitflag)

###### encipherOnly

> **encipherOnly**: [`BitFlag`](../../../schema/README.md#bitflag)

###### keyAgreement

> **keyAgreement**: [`BitFlag`](../../../schema/README.md#bitflag)

###### keyCertSign

> **keyCertSign**: [`BitFlag`](../../../schema/README.md#bitflag)

###### keyEncipherment

> **keyEncipherment**: [`BitFlag`](../../../schema/README.md#bitflag)

###### nonRepudiation

> **nonRepudiation**: [`BitFlag`](../../../schema/README.md#bitflag)

#### subjectKeyIdentifier

> **subjectKeyIdentifier**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:483

***

### issuer

> **issuer**: `object`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:476

***

### notAfter

> **notAfter**: `number`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:478

***

### notBefore

> **notBefore**: `number`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:477

***

### publicKeyAlgorithm

> **publicKeyAlgorithm**: `number`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:480

***

### serialNumber

> **serialNumber**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:474

***

### signature

> **signature**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:494

***

### signatureAlgorithm

> **signatureAlgorithm**: `number`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:475

***

### subject

> **subject**: `object`

#### Source

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:479
