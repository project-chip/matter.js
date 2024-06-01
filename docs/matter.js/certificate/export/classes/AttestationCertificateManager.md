[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [certificate/export](../README.md) / AttestationCertificateManager

# Class: AttestationCertificateManager

## Constructors

### new AttestationCertificateManager()

> **new AttestationCertificateManager**(`vendorId`): [`AttestationCertificateManager`](AttestationCertificateManager.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../../../datatype/export/README.md#vendorid) |

#### Returns

[`AttestationCertificateManager`](AttestationCertificateManager.md)

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L51)

## Properties

### nextCertificateId

> `private` **nextCertificateId**: `number` = `2`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L49)

***

### paaCertId

> `private` **paaCertId**: `bigint`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L37)

***

### paaKeyIdentifier

> `private` `readonly` **paaKeyIdentifier**: `Uint8Array` = `TestCert_PAA_NoVID_SKID`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L44)

***

### paaKeyPair

> `private` `readonly` **paaKeyPair**: [`PrivateKey`](../../../crypto/export/interfaces/PrivateKey.md)

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L41)

***

### paiCertBytes

> `private` `readonly` **paiCertBytes**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L48)

***

### paiCertId

> `private` `readonly` **paiCertId**: `bigint`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L45)

***

### paiKeyIdentifier

> `private` `readonly` **paiKeyIdentifier**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L47)

***

### paiKeyPair

> `private` `readonly` **paiKeyPair**: [`PrivateKey`](../../../crypto/export/interfaces/PrivateKey.md)

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L46)

***

### vendorId

> `private` `readonly` **vendorId**: [`VendorId`](../../../datatype/export/README.md#vendorid)

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L51)

## Methods

### generateDaCert()

> **generateDaCert**(`publicKey`, `vendorId`, `productId`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `vendorId` | [`VendorId`](../../../datatype/export/README.md#vendorid) |
| `productId` | `number` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L138)

***

### generatePAACert()

> `private` **generatePAACert**(`vendorId`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vendorId`? | [`VendorId`](../../../datatype/export/README.md#vendorid) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L70)

***

### generatePAICert()

> `private` **generatePAICert**(`vendorId`, `productId`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../../../datatype/export/README.md#vendorid) |
| `productId`? | `number` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L104)

***

### getDACert()

> **getDACert**(`productId`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `productId` | `number` |

#### Returns

`object`

##### dac

> **dac**: `Uint8Array`

##### keyPair

> **keyPair**: [`PrivateKey`](../../../crypto/export/interfaces/PrivateKey.md) = `dacKeyPair`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L59)

***

### getPAICert()

> **getPAICert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/AttestationCertificateManager.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/AttestationCertificateManager.ts#L55)
