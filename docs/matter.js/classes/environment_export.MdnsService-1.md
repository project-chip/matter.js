[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / MdnsService

# Class: MdnsService

[environment/export](../modules/environment_export.md).MdnsService

## Table of contents

### Constructors

- [constructor](environment_export.MdnsService-1.md#constructor)

### Properties

- [#broadcaster](environment_export.MdnsService-1.md##broadcaster)
- [#construction](environment_export.MdnsService-1.md##construction)
- [#enableIpv4](environment_export.MdnsService-1.md##enableipv4)
- [#scanner](environment_export.MdnsService-1.md##scanner)

### Accessors

- [[value]](environment_export.MdnsService-1.md#[value])
- [broadcaster](environment_export.MdnsService-1.md#broadcaster)
- [construction](environment_export.MdnsService-1.md#construction)
- [enableIpv4](environment_export.MdnsService-1.md#enableipv4)
- [scanner](environment_export.MdnsService-1.md#scanner)

### Methods

- [[asyncDispose]](environment_export.MdnsService-1.md#[asyncdispose])
- [createInstanceBroadcaster](environment_export.MdnsService-1.md#createinstancebroadcaster)
- [[create]](environment_export.MdnsService-1.md#[create])

## Constructors

### constructor

• **new MdnsService**(`environment`, `options?`): [`MdnsService`](environment_export.MdnsService-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export.Environment.md) |
| `options?` | [`Options`](../interfaces/environment_export.MdnsService.Options.md) |

#### Returns

[`MdnsService`](environment_export.MdnsService-1.md)

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L30)

## Properties

### #broadcaster

• `Private` `Optional` **#broadcaster**: [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L21)

___

### #construction

• `Private` `Readonly` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`MdnsService`](environment_export.MdnsService-1.md)\>

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L23)

___

### #enableIpv4

• `Private` `Readonly` **#enableIpv4**: `boolean`

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L24)

___

### #scanner

• `Private` `Optional` **#scanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L22)

## Accessors

### [value]

• `get` **[value]**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L70)

___

### broadcaster

• `get` **broadcaster**(): [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Returns

[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L62)

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`MdnsService`](environment_export.MdnsService-1.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`MdnsService`](environment_export.MdnsService-1.md)\>

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L74)

___

### enableIpv4

• `get` **enableIpv4**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L26)

___

### scanner

• `get` **scanner**(): [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Returns

[`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L66)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L78)

___

### createInstanceBroadcaster

▸ **createInstanceBroadcaster**(`port`): [`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

[`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L58)

___

### [create]

▸ **[create]**(`environment`): [`MdnsService`](environment_export.MdnsService-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export.Environment.md) |

#### Returns

[`MdnsService`](environment_export.MdnsService-1.md)

#### Defined in

[packages/matter.js/src/environment/MdnsService.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/MdnsService.ts#L54)
