[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / NetworkRuntime

# Class: NetworkRuntime

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).NetworkRuntime

Base class for networking implementation.

## Hierarchy

- **`NetworkRuntime`**

  ↳ [`ServerNetworkRuntime`](node_export._internal_.ServerNetworkRuntime.md)

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.NetworkRuntime.md#constructor)

### Properties

- [#closed](behavior_cluster_export._internal_.NetworkRuntime.md##closed)
- [#closing](behavior_cluster_export._internal_.NetworkRuntime.md##closing)
- [#owner](behavior_cluster_export._internal_.NetworkRuntime.md##owner)
- [#resolveClosed](behavior_cluster_export._internal_.NetworkRuntime.md##resolveclosed)
- [#resolveClosing](behavior_cluster_export._internal_.NetworkRuntime.md##resolveclosing)
- [operationalPort](behavior_cluster_export._internal_.NetworkRuntime.md#operationalport)

### Accessors

- [owner](behavior_cluster_export._internal_.NetworkRuntime.md#owner)

### Methods

- [#stop](behavior_cluster_export._internal_.NetworkRuntime.md##stop)
- [blockNewActivity](behavior_cluster_export._internal_.NetworkRuntime.md#blocknewactivity)
- [close](behavior_cluster_export._internal_.NetworkRuntime.md#close)
- [run](behavior_cluster_export._internal_.NetworkRuntime.md#run)
- [start](behavior_cluster_export._internal_.NetworkRuntime.md#start)
- [stop](behavior_cluster_export._internal_.NetworkRuntime.md#stop)

## Constructors

### constructor

• **new NetworkRuntime**(`owner`): [`NetworkRuntime`](behavior_cluster_export._internal_.NetworkRuntime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | [`Node`](node_export.Node-1.md)\<[`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)\> |

#### Returns

[`NetworkRuntime`](behavior_cluster_export._internal_.NetworkRuntime.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L23)

## Properties

### #closed

• `Private` **#closed**: `Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L20)

___

### #closing

• `Private` **#closing**: `Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L18)

___

### #owner

• `Private` **#owner**: [`Node`](node_export.Node-1.md)\<[`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L17)

___

### #resolveClosed

• `Private` **#resolveClosed**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L21)

___

### #resolveClosing

• `Private` **#resolveClosing**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L19)

___

### operationalPort

• `Abstract` **operationalPort**: `number`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L81)

## Accessors

### owner

• `get` **owner**(): [`Node`](node_export.Node-1.md)\<[`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)\>

#### Returns

[`Node`](node_export.Node-1.md)\<[`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L89)

## Methods

### #stop

▸ **#stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L73)

___

### blockNewActivity

▸ **blockNewActivity**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L87)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L68)

___

### run

▸ **run**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L41)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L83)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L85)
