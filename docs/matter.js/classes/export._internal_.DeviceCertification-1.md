[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [\<internal\>](../modules/export._internal_.md) / DeviceCertification

# Class: DeviceCertification

[export](../modules/export.md).[\<internal\>](../modules/export._internal_.md).DeviceCertification

Device certification used by the OperationalCredentials cluster.

## Table of contents

### Constructors

- [constructor](export._internal_.DeviceCertification-1.md#constructor)

### Properties

- [#certificate](export._internal_.DeviceCertification-1.md##certificate)
- [#declaration](export._internal_.DeviceCertification-1.md##declaration)
- [#intermediateCertificate](export._internal_.DeviceCertification-1.md##intermediatecertificate)
- [#privateKey](export._internal_.DeviceCertification-1.md##privatekey)

### Accessors

- [certificate](export._internal_.DeviceCertification-1.md#certificate)
- [declaration](export._internal_.DeviceCertification-1.md#declaration)
- [intermediateCertificate](export._internal_.DeviceCertification-1.md#intermediatecertificate)

### Methods

- [sign](export._internal_.DeviceCertification-1.md#sign)

## Constructors

### constructor

• **new DeviceCertification**(`config?`, `product?`): [`DeviceCertification`](export._internal_.DeviceCertification-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`Configuration`](../interfaces/behavior_definitions_operational_credentials_export._internal_.Configuration.md) |
| `product?` | [`ProductDescription`](../interfaces/behavior_cluster_export._internal_.ProductDescription.md) |

#### Returns

[`DeviceCertification`](export._internal_.DeviceCertification-1.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L38)

## Properties

### #certificate

• `Private` **#certificate**: `Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L22)

___

### #declaration

• `Private` **#declaration**: `Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L24)

___

### #intermediateCertificate

• `Private` **#intermediateCertificate**: `Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L23)

___

### #privateKey

• `Private` **#privateKey**: [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L21)

## Accessors

### certificate

• `get` **certificate**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L26)

___

### declaration

• `get` **declaration**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L34)

___

### intermediateCertificate

• `get` **intermediateCertificate**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L30)

## Methods

### sign

▸ **sign**(`session`, `data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L60)
