[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / StorageService

# Class: StorageService

[environment/export](../modules/environment_export.md).StorageService

Service adapter for the Matter.js storage API.

## Table of contents

### Constructors

- [constructor](environment_export.StorageService.md#constructor)

### Properties

- [#factory](environment_export.StorageService.md##factory)
- [#location](environment_export.StorageService.md##location)

### Accessors

- [factory](environment_export.StorageService.md#factory)
- [location](environment_export.StorageService.md#location)

### Methods

- [[value]](environment_export.StorageService.md#[value])
- [open](environment_export.StorageService.md#open)
- [[create]](environment_export.StorageService.md#[create])

## Constructors

### constructor

• **new StorageService**(`environment`, `factory?`): [`StorageService`](environment_export.StorageService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export.Environment.md) |
| `factory?` | (`namespace`: `string`) => [`Storage`](../interfaces/storage_export.Storage.md) |

#### Returns

[`StorageService`](environment_export.StorageService.md)

#### Defined in

[packages/matter.js/src/environment/StorageService.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/StorageService.ts#L21)

## Properties

### #factory

• `Private` `Optional` **#factory**: (`namespace`: `string`) => [`Storage`](../interfaces/storage_export.Storage.md)

#### Type declaration

▸ (`namespace`): [`Storage`](../interfaces/storage_export.Storage.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

##### Returns

[`Storage`](../interfaces/storage_export.Storage.md)

#### Defined in

[packages/matter.js/src/environment/StorageService.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/StorageService.ts#L18)

___

### #location

• `Private` `Optional` **#location**: `string`

#### Defined in

[packages/matter.js/src/environment/StorageService.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/StorageService.ts#L19)

## Accessors

### factory

• `set` **factory**(`factory`): `void`

Install a factory for opening storage.  Without such a factory storage is unavailable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | (`namespace`: `string`) => [`Storage`](../interfaces/storage_export.Storage.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/StorageService.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/StorageService.ts#L49)

___

### location

• `get` **location**(): `undefined` \| `string`

The storage location.  Only used for diagnostic purposes.

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/environment/StorageService.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/StorageService.ts#L56)

• `set` **location**(`location`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/StorageService.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/StorageService.ts#L60)

## Methods

### [value]

▸ **[value]**(): (`string` \| `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md))[]

#### Returns

(`string` \| `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md))[]

#### Defined in

[packages/matter.js/src/environment/StorageService.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/StorageService.ts#L64)

___

### open

▸ **open**(`namespace`): `Promise`\<[`StorageManager`](storage_export.StorageManager.md)\<[`Storage`](../interfaces/storage_export.Storage.md)\>\>

Open storage.  The storage is initialized but the caller must take ownership.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | a unique namespace identifier such as a root node ID |

#### Returns

`Promise`\<[`StorageManager`](storage_export.StorageManager.md)\<[`Storage`](../interfaces/storage_export.Storage.md)\>\>

#### Defined in

[packages/matter.js/src/environment/StorageService.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/StorageService.ts#L35)

___

### [create]

▸ **[create]**(`environment`): [`StorageService`](environment_export.StorageService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export.Environment.md) |

#### Returns

[`StorageService`](environment_export.StorageService.md)

#### Defined in

[packages/matter.js/src/environment/StorageService.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/StorageService.ts#L26)
