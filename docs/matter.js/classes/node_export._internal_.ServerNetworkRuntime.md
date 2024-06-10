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
- [networkInterfaceConfiguration](node_export._internal_.ServerNetworkRuntime.md#networkinterfaceconfiguration)
- [networkInterfaces](node_export._internal_.ServerNetworkRuntime.md#networkinterfaces)
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

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:23](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L23)

## Properties

### #bleBroadcaster

• `Private` `Optional` **#bleBroadcaster**: [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:46](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L46)

___

### #bleTransport

• `Private` `Optional` **#bleTransport**: [`TransportInterface`](../interfaces/common_export.TransportInterface.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:47](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L47)

___

### #closed

• `Private` **#closed**: `Promise`\<`void`\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[#closed](behavior_cluster_export._internal_.NetworkRuntime.md##closed)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:20](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L20)

___

### #closing

• `Private` **#closing**: `Promise`\<`void`\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[#closing](behavior_cluster_export._internal_.NetworkRuntime.md##closing)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:18](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L18)

___

### #commissionedListener

• `Private` `Optional` **#commissionedListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:48](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L48)

___

### #interactionServer

• `Private` `Optional` **#interactionServer**: [`TransactionalInteractionServer`](node_export._internal_.TransactionalInteractionServer.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:42](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L42)

___

### #matterDevice

• `Private` `Optional` **#matterDevice**: [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:43](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L43)

___

### #mdnsBroadcaster

• `Private` `Optional` **#mdnsBroadcaster**: [`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:44](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L44)

___

### #owner

• `Private` **#owner**: [`Node`](node_export.Node-1.md)\<[`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[#owner](behavior_cluster_export._internal_.NetworkRuntime.md##owner)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:17](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L17)

___

### #primaryNetInterface

• `Private` `Optional` **#primaryNetInterface**: [`UdpInterface`](net_export.UdpInterface.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:45](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L45)

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

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:21](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L21)

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

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:19](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L19)

___

### #rootServer

• `Private` `Optional` **#rootServer**: [`EndpointServer`](endpoint_export.EndpointServer.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:41](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L41)

## Accessors

### #commissionedFabrics

• `get` **#commissionedFabrics**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:252](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L252)

___

### bleBroadcaster

• `get` **bleBroadcaster**(): [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

A BLE broadcaster.

#### Returns

[`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:141](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L141)

___

### bleTransport

• `get` **bleTransport**(): [`TransportInterface`](../interfaces/common_export.TransportInterface.md)

A BLE transport.

#### Returns

[`TransportInterface`](../interfaces/common_export.TransportInterface.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:152](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L152)

___

### interactionServer

• `get` **interactionServer**(): [`TransactionalInteractionServer`](node_export._internal_.TransactionalInteractionServer.md)

Expose the internal InteractionServer for testing.

#### Returns

[`TransactionalInteractionServer`](node_export._internal_.TransactionalInteractionServer.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:245](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L245)

___

### mdnsBroadcaster

• `get` **mdnsBroadcaster**(): [`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

Access the MDNS broadcaster for the node.

#### Returns

[`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:67](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L67)

___

### networkInterfaceConfiguration

• `get` **networkInterfaceConfiguration**(): [`NetworkInterface`](../modules/net_export.md#networkinterface)[]

#### Returns

[`NetworkInterface`](../modules/net_export.md#networkinterface)[]

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:76](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L76)

___

### networkInterfaces

• `get` **networkInterfaces**(): [`NetworkInterfaceDetailed`](../modules/net_export.md#networkinterfacedetailed)[]

#### Returns

[`NetworkInterfaceDetailed`](../modules/net_export.md#networkinterfacedetailed)[]

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:88](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L88)

___

### operationalPort

• `get` **operationalPort**(): `number`

#### Returns

`number`

#### Overrides

NetworkRuntime.operationalPort

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:256](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L256)

___

### owner

• `get` **owner**(): [`ServerNode`](node_export.ServerNode-1.md)\<[`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md)\>

#### Returns

[`ServerNode`](node_export.ServerNode-1.md)\<[`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md)\>

#### Overrides

NetworkRuntime.owner

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:50](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L50)

___

### rootServer

• `get` **rootServer**(): [`EndpointServer`](endpoint_export.EndpointServer.md)

Access the [EndpointServer](endpoint_export.EndpointServer.md) for the root endpoint.

#### Returns

[`EndpointServer`](endpoint_export.EndpointServer.md)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:57](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L57)

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

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:232](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L232)

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

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:237](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L237)

___

### #stop

▸ **#stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[#stop](behavior_cluster_export._internal_.NetworkRuntime.md##stop)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:73](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L73)

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

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:186](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L186)

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

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:162](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L162)

___

### announceNow

▸ **announceNow**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:110](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L110)

___

### blockNewActivity

▸ **blockNewActivity**(): `void`

#### Returns

`void`

#### Overrides

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[blockNewActivity](behavior_cluster_export._internal_.NetworkRuntime.md#blocknewactivity)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:347](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L347)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[close](behavior_cluster_export._internal_.NetworkRuntime.md#close)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:68](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L68)

___

### enableMdnsBroadcasting

▸ **enableMdnsBroadcasting**(): `void`

When the first Fabric gets added we need to enable MDNS broadcasting.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:208](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L208)

___

### endCommissioning

▸ **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:260](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L260)

___

### endUncommissionedMode

▸ **endUncommissionedMode**(): `void`

On commission we turn off bluetooth and join the IP network if we haven't already.

On decommission we're destroyed so don't need to handle that case.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:220](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L220)

___

### getPrimaryNetInterface

▸ **getPrimaryNetInterface**(): `Promise`\<[`UdpInterface`](net_export.UdpInterface.md)\>

The IPv6 [UdpInterface](net_export.UdpInterface.md). We create this interface independently of the server so the OS can select a port
before we are fully online.

#### Returns

`Promise`\<[`UdpInterface`](net_export.UdpInterface.md)\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:123](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L123)

___

### openAdvertisementWindow

▸ **openAdvertisementWindow**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:102](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L102)

___

### run

▸ **run**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[run](behavior_cluster_export._internal_.NetworkRuntime.md#run)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:41](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L41)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[start](behavior_cluster_export._internal_.NetworkRuntime.md#start)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:266](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L266)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[NetworkRuntime](behavior_cluster_export._internal_.NetworkRuntime.md).[stop](behavior_cluster_export._internal_.NetworkRuntime.md#stop)

#### Defined in

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:316](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L316)
