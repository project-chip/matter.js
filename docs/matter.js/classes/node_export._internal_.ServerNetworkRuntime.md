[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / ServerNetworkRuntime

# Class: ServerNetworkRuntime

[node/export](../modules/node_export.md).[\<internal\>](../modules/node_export._internal_.md).ServerNetworkRuntime

Handles network functionality for NodeServer.

## Hierarchy

- [`NetworkRuntime`](behavior_cluster_export._internal_.NetworkRuntime.md)

  ↳ **`ServerNetworkRuntime`**

## Table of contents

### Constructors

- [constructor](node_export._internal_.ServerNetworkRuntime.md#constructor)

### Properties

- [#bleBroadcaster](node_export._internal_.ServerNetworkRuntime.md##blebroadcaster)
- [#bleTransport](node_export._internal_.ServerNetworkRuntime.md##bletransport)
- [#closed](node_export._internal_.ServerNetworkRuntime.md##closed)
- [#closing](node_export._internal_.ServerNetworkRuntime.md##closing)
- [#commissionedListener](node_export._internal_.ServerNetworkRuntime.md##commissionedlistener)
- [#interactionServer](node_export._internal_.ServerNetworkRuntime.md##interactionserver)
- [#matterDevice](node_export._internal_.ServerNetworkRuntime.md##matterdevice)
- [#mdnsBroadcaster](node_export._internal_.ServerNetworkRuntime.md##mdnsbroadcaster)
- [#owner](node_export._internal_.ServerNetworkRuntime.md##owner)
- [#primaryNetInterface](node_export._internal_.ServerNetworkRuntime.md##primarynetinterface)
- [#resolveClosed](node_export._internal_.ServerNetworkRuntime.md##resolveclosed)
- [#resolveClosing](node_export._internal_.ServerNetworkRuntime.md##resolveclosing)
- [#rootServer](node_export._internal_.ServerNetworkRuntime.md##rootserver)

### Accessors

- [#commissionedFabrics](node_export._internal_.ServerNetworkRuntime.md##commissionedfabrics)
- [bleBroadcaster](node_export._internal_.ServerNetworkRuntime.md#blebroadcaster)
- [bleTransport](node_export._internal_.ServerNetworkRuntime.md#bletransport)
- [interactionServer](node_export._internal_.ServerNetworkRuntime.md#interactionserver)
- [mdnsBroadcaster](node_export._internal_.ServerNetworkRuntime.md#mdnsbroadcaster)
- [operationalPort](node_export._internal_.ServerNetworkRuntime.md#operationalport)
- [owner](node_export._internal_.ServerNetworkRuntime.md#owner)
- [rootServer](node_export._internal_.ServerNetworkRuntime.md#rootserver)

### Methods

- [#removeBleBroadcaster](node_export._internal_.ServerNetworkRuntime.md##removeblebroadcaster)
- [#removeBleTransport](node_export._internal_.ServerNetworkRuntime.md##removebletransport)
- [#stop](node_export._internal_.ServerNetworkRuntime.md##stop)
- [addBroadcasters](node_export._internal_.ServerNetworkRuntime.md#addbroadcasters)
- [addTransports](node_export._internal_.ServerNetworkRuntime.md#addtransports)
- [announceNow](node_export._internal_.ServerNetworkRuntime.md#announcenow)
- [blockNewActivity](node_export._internal_.ServerNetworkRuntime.md#blocknewactivity)
- [close](node_export._internal_.ServerNetworkRuntime.md#close)
- [enableMdnsBroadcasting](node_export._internal_.ServerNetworkRuntime.md#enablemdnsbroadcasting)
- [endCommissioning](node_export._internal_.ServerNetworkRuntime.md#endcommissioning)
- [endUncommissionedMode](node_export._internal_.ServerNetworkRuntime.md#enduncommissionedmode)
- [getPrimaryNetInterface](node_export._internal_.ServerNetworkRuntime.md#getprimarynetinterface)
- [openAdvertisementWindow](node_export._internal_.ServerNetworkRuntime.md#openadvertisementwindow)
- [run](node_export._internal_.ServerNetworkRuntime.md#run)
- [start](node_export._internal_.ServerNetworkRuntime.md#start)
- [stop](node_export._internal_.ServerNetworkRuntime.md#stop)

## Constructors

### constructor

• **new ServerNetworkRuntime**(`owner`): [`ServerNetworkRuntime`](node_export._internal_.ServerNetworkRuntime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | [`Node`](node_export.Node-1.md)\<[`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)\> |

#### Returns

[`ServerNetworkRuntime`](node_export._internal_.ServerNetworkRuntime.md)

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[constructor](behavior_cluster_export._internal_.NetworkRuntime.md#constructor)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L23)

## Properties

### #bleBroadcaster

• `Private` `Optional` **#bleBroadcaster**: [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L37)

___

### #bleTransport

• `Private` `Optional` **#bleTransport**: [`TransportInterface`](../interfaces/common_export.TransportInterface.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L38)

___

### #closed

• `Private` **#closed**: `Promise`\<`void`\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[#closed](behavior_cluster_export._internal_.NetworkRuntime.md##closed)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L20)

___

### #closing

• `Private` **#closing**: `Promise`\<`void`\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[#closing](behavior_cluster_export._internal_.NetworkRuntime.md##closing)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L18)

___

### #commissionedListener

• `Private` `Optional` **#commissionedListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L39)

___

### #interactionServer

• `Private` `Optional` **#interactionServer**: [`TransactionalInteractionServer`](node_export._internal_.TransactionalInteractionServer.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L33)

___

### #matterDevice

• `Private` `Optional` **#matterDevice**: [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L34)

___

### #mdnsBroadcaster

• `Private` `Optional` **#mdnsBroadcaster**: [`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L35)

___

### #owner

• `Private` **#owner**: [`Node`](node_export.Node-1.md)\<[`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[#owner](behavior_cluster_export._internal_.NetworkRuntime.md##owner)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L17)

___

### #primaryNetInterface

• `Private` `Optional` **#primaryNetInterface**: [`UdpInterface`](net_export.UdpInterface.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L36)

___

### #resolveClosed

• `Private` **#resolveClosed**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[#resolveClosed](behavior_cluster_export._internal_.NetworkRuntime.md##resolveclosed)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L21)

___

### #resolveClosing

• `Private` **#resolveClosing**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[#resolveClosing](behavior_cluster_export._internal_.NetworkRuntime.md##resolveclosing)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L19)

___

### #rootServer

• `Private` `Optional` **#rootServer**: [`EndpointServer`](endpoint_export.EndpointServer.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L32)

## Accessors

### #commissionedFabrics

• `get` **#commissionedFabrics**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L217)

___

### bleBroadcaster

• `get` **bleBroadcaster**(): [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

A BLE broadcaster.

#### Returns

[`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L106)

___

### bleTransport

• `get` **bleTransport**(): [`TransportInterface`](../interfaces/common_export.TransportInterface.md)

A BLE transport.

#### Returns

[`TransportInterface`](../interfaces/common_export.TransportInterface.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L117)

___

### interactionServer

• `get` **interactionServer**(): [`TransactionalInteractionServer`](node_export._internal_.TransactionalInteractionServer.md)

Expose the internal InteractionServer for testing.

#### Returns

[`TransactionalInteractionServer`](node_export._internal_.TransactionalInteractionServer.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:210](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L210)

___

### mdnsBroadcaster

• `get` **mdnsBroadcaster**(): [`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

Access the MDNS broadcaster for the node.

#### Returns

[`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L58)

___

### operationalPort

• `get` **operationalPort**(): `number`

#### Returns

`number`

#### Overrides

NetworkRuntime.operationalPort

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:221](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L221)

___

### owner

• `get` **owner**(): [`ServerNode`](node_export.ServerNode-1.md)\<[`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md)\>

#### Returns

[`ServerNode`](node_export.ServerNode-1.md)\<[`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md)\>

#### Overrides

NetworkRuntime.owner

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L41)

___

### rootServer

• `get` **rootServer**(): [`EndpointServer`](endpoint_export.EndpointServer.md)

Access the [EndpointServer](endpoint_export.EndpointServer.md) for the root endpoint.

#### Returns

[`EndpointServer`](endpoint_export.EndpointServer.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L48)

## Methods

### #removeBleBroadcaster

▸ **#removeBleBroadcaster**(`bleBroadcaster`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bleBroadcaster` | [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L197)

___

### #removeBleTransport

▸ **#removeBleTransport**(`bleTransport`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bleTransport` | [`TransportInterface`](../interfaces/common_export.TransportInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L202)

___

### #stop

▸ **#stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[#stop](behavior_cluster_export._internal_.NetworkRuntime.md##stop)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L73)

___

### addBroadcasters

▸ **addBroadcasters**(`device`): `Promise`\<`void`\>

Add broadcasters to the [MatterDevice](behavior_cluster_export._internal_.MatterDevice.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:151](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L151)

___

### addTransports

▸ **addTransports**(`device`): `Promise`\<`void`\>

Add transports to the [MatterDevice](behavior_cluster_export._internal_.MatterDevice.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L127)

___

### announceNow

▸ **announceNow**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L75)

___

### blockNewActivity

▸ **blockNewActivity**(): `void`

#### Returns

`void`

#### Overrides

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[blockNewActivity](behavior_cluster_export._internal_.NetworkRuntime.md#blocknewactivity)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:311](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L311)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[close](behavior_cluster_export._internal_.NetworkRuntime.md#close)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L68)

___

### enableMdnsBroadcasting

▸ **enableMdnsBroadcasting**(): `void`

When the first Faric gets added we need to enable MDNS broadcasting.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:173](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L173)

___

### endCommissioning

▸ **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L225)

___

### endUncommissionedMode

▸ **endUncommissionedMode**(): `void`

On commission we turn off bluetooth and join the IP network if we haven't already.

On decommission we're destroyed so don't need to handle that case.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:185](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L185)

___

### getPrimaryNetInterface

▸ **getPrimaryNetInterface**(): `Promise`\<[`UdpInterface`](net_export.UdpInterface.md)\>

The IPv6 [UdpInterface](net_export.UdpInterface.md).  We create this interface independently of the server so the OS can select a port
before we are fully online.

#### Returns

`Promise`\<[`UdpInterface`](net_export.UdpInterface.md)\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L88)

___

### openAdvertisementWindow

▸ **openAdvertisementWindow**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L67)

___

### run

▸ **run**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[run](behavior_cluster_export._internal_.NetworkRuntime.md#run)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L41)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[start](behavior_cluster_export._internal_.NetworkRuntime.md#start)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L231)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[stop](behavior_cluster_export._internal_.NetworkRuntime.md#stop)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L280)
