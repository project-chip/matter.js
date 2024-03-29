[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [\<internal\>](../modules/exports_cluster._internal_.md) / DeviceCertification

# Class: DeviceCertification

[exports/cluster](../modules/exports_cluster.md).[\<internal\>](../modules/exports_cluster._internal_.md).DeviceCertification

Device certification used by the OperationalCredentials cluster.

## Table of contents

### Constructors

- [constructor](exports_cluster._internal_.DeviceCertification-1.md#constructor)

### Properties

- [#private](exports_cluster._internal_.DeviceCertification-1.md##private)

### Accessors

- [certificate](exports_cluster._internal_.DeviceCertification-1.md#certificate)
- [declaration](exports_cluster._internal_.DeviceCertification-1.md#declaration)
- [intermediateCertificate](exports_cluster._internal_.DeviceCertification-1.md#intermediatecertificate)

### Methods

- [sign](exports_cluster._internal_.DeviceCertification-1.md#sign)

## Constructors

### constructor

• **new DeviceCertification**(`config?`, `product?`): [`DeviceCertification`](exports_cluster._internal_.DeviceCertification-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`Configuration`](../interfaces/exports_cluster._internal_.DeviceCertification.Configuration.md) |
| `product?` | [`ProductDescription`](../interfaces/exports_cluster._internal_.ProductDescription.md) |

#### Returns

[`DeviceCertification`](exports_cluster._internal_.DeviceCertification-1.md)

#### Defined in

packages/matter.js/dist/esm/behavior/definitions/operational-credentials/DeviceCertification.d.ts:19

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/behavior/definitions/operational-credentials/DeviceCertification.d.ts:15

## Accessors

### certificate

• `get` **certificate**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/behavior/definitions/operational-credentials/DeviceCertification.d.ts:16

___

### declaration

• `get` **declaration**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/behavior/definitions/operational-credentials/DeviceCertification.d.ts:18

___

### intermediateCertificate

• `get` **intermediateCertificate**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/behavior/definitions/operational-credentials/DeviceCertification.d.ts:17

## Methods

### sign

▸ **sign**(`session`, `data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](exports_session.SecureSession.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/behavior/definitions/operational-credentials/DeviceCertification.d.ts:20
