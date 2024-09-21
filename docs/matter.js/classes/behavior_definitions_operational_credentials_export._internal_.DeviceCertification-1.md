[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/operational-credentials/export](../modules/behavior_definitions_operational_credentials_export.md) / [\<internal\>](../modules/behavior_definitions_operational_credentials_export._internal_.md) / DeviceCertification

# Class: DeviceCertification

[behavior/definitions/operational-credentials/export](../modules/behavior_definitions_operational_credentials_export.md).[\<internal\>](../modules/behavior_definitions_operational_credentials_export._internal_.md).DeviceCertification

Device certification used by the OperationalCredentials cluster.

## Table of contents

### Constructors

- [constructor](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md#constructor)

### Properties

- [#certificate](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md##certificate)
- [#construction](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md##construction)
- [#declaration](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md##declaration)
- [#intermediateCertificate](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md##intermediatecertificate)
- [#privateKey](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md##privatekey)

### Accessors

- [certificate](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md#certificate)
- [construction](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md#construction)
- [declaration](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md#declaration)
- [intermediateCertificate](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md#intermediatecertificate)

### Methods

- [#assertInitialized](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md##assertinitialized)
- [#initializeFromConfig](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md##initializefromconfig)
- [sign](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md#sign)

## Constructors

### constructor

• **new DeviceCertification**(`config?`, `product?`): [`DeviceCertification`](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`Definition`](../modules/behavior_definitions_operational_credentials_export._internal_.DeviceCertification.md#definition) |
| `product?` | [`ProductDescription`](../interfaces/behavior_cluster_export._internal_.ProductDescription.md) |

#### Returns

[`DeviceCertification`](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:44](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L44)

## Properties

### #certificate

• `Private` `Optional` **#certificate**: `Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:23](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L23)

___

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`DeviceCertification`](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:26](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L26)

___

### #declaration

• `Private` `Optional` **#declaration**: `Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:25](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L25)

___

### #intermediateCertificate

• `Private` `Optional` **#intermediateCertificate**: `Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:24](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L24)

___

### #privateKey

• `Private` `Optional` **#privateKey**: [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:22](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L22)

## Accessors

### certificate

• `get` **certificate**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:32](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L32)

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`DeviceCertification`](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`DeviceCertification`](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:28](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L28)

___

### declaration

• `get` **declaration**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:40](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L40)

___

### intermediateCertificate

• `get` **intermediateCertificate**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:36](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L36)

## Methods

### #assertInitialized

▸ **#assertInitialized**(): `Object`

Makes sure that the device certification is initialized and construction is completed and returns "Non undefined"
values

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `certificate` | `Uint8Array` |
| `declaration` | `Uint8Array` |
| `intermediateCertificate` | `Uint8Array` |
| `privateKey` | [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md) |

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:91](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L91)

___

### #initializeFromConfig

▸ **#initializeFromConfig**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Configuration`](../interfaces/behavior_definitions_operational_credentials_export._internal_.DeviceCertification.Configuration.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:76](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L76)

___

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

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:83](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L83)
