[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / RootCertificateManager

# Class: RootCertificateManager

## Constructors

### new RootCertificateManager()

> **new RootCertificateManager**(`storage`): [`RootCertificateManager`](RootCertificateManager.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](StorageContext.md)\<`any`\> |

#### Returns

[`RootCertificateManager`](RootCertificateManager.md)

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:21

## Properties

### #private

> `private` **#private**: `any`

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:13

***

### generateRootCert

> `private` **generateRootCert**: `any`

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:23

***

### nextCertificateId

> `private` **nextCertificateId**: `any`

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:18

***

### rootCertBytes

> `private` **rootCertBytes**: `any`

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:17

***

### rootCertId

> `private` **rootCertId**: `any`

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:14

***

### rootKeyIdentifier

> `private` **rootKeyIdentifier**: `any`

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:16

***

### rootKeyPair

> `private` **rootKeyPair**: `any`

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:15

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`RootCertificateManager`](RootCertificateManager.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`RootCertificateManager`](RootCertificateManager.md)\>

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:19

## Methods

### generateNoc()

> **generateNoc**(`publicKey`, `fabricId`, `nodeId`, `caseAuthenticatedTags`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `fabricId` | [`FabricId`](../README.md#fabricid-1) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |
| `caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../README.md#caseauthenticatedtag)[] |

#### Returns

`Uint8Array`

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:24

***

### getRootCert()

> **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:22

***

### create()

> `static` **create**(`storage`): `Promise`\<[`RootCertificateManager`](RootCertificateManager.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`RootCertificateManager`](RootCertificateManager.md)\>

#### Source

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:20
