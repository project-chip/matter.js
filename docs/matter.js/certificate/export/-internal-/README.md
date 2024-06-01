[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [certificate/export](../README.md) / \<internal\>

# \<internal\>

## Index

### Interfaces

- [AttestationCertificateBase](interfaces/AttestationCertificateBase.md)

## Variables

### TlvBaseCertificate

> `const` **TlvBaseCertificate**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### Type declaration

##### ellipticCurveIdentifier

> **ellipticCurveIdentifier**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### ellipticCurvePublicKey

> **ellipticCurvePublicKey**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### extensions

> **extensions**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### issuer

> **issuer**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object` & `object`\>\>

##### notAfter

> **notAfter**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### notBefore

> **notBefore**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### publicKeyAlgorithm

> **publicKeyAlgorithm**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### serialNumber

> **serialNumber**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### signature

> **signature**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### signatureAlgorithm

> **signatureAlgorithm**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### subject

> **subject**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object` & `object`\>\>

#### Source

[packages/matter.js/src/certificate/CertificateManager.ts:280](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/CertificateManager.ts#L280)
