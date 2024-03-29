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
- [#owner](behavior_cluster_export._internal_.NetworkRuntime.md##owner)
- [#resolveClosed](behavior_cluster_export._internal_.NetworkRuntime.md##resolveclosed)
- [operationalPort](behavior_cluster_export._internal_.NetworkRuntime.md#operationalport)

### Accessors

- [owner](behavior_cluster_export._internal_.NetworkRuntime.md#owner)

### Methods

- [#stop](behavior_cluster_export._internal_.NetworkRuntime.md##stop)
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

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:20](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L20)

## Properties

### #closed

• `Private` **#closed**: `Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:17](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L17)

___

### #owner

• `Private` **#owner**: [`Node`](node_export.Node-1.md)\<[`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:16](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L16)

___

### #resolveClosed

• `Private` **#resolveClosed**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:18](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L18)

___

### operationalPort

• `Abstract` **operationalPort**: `number`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:65](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L65)

## Accessors

### owner

• `get` **owner**(): [`Node`](node_export.Node-1.md)\<[`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)\>

#### Returns

[`Node`](node_export.Node-1.md)\<[`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:71](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L71)

## Methods

### #stop

▸ **#stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L57)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:53](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L53)

___

### run

▸ **run**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:34](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L34)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:67](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L67)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:69](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L69)
