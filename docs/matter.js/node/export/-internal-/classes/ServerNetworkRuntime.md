[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / [\<internal\>](../README.md) / ServerNetworkRuntime

# Class: ServerNetworkRuntime

Handles network functionality for NodeServer.

## Extends

- [`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md)

## Constructors

### new ServerNetworkRuntime()

> **new ServerNetworkRuntime**(`owner`): [`ServerNetworkRuntime`](ServerNetworkRuntime.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`Node`](../../classes/Node.md)\<[`RootEndpoint`](../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md)\> |

#### Returns

[`ServerNetworkRuntime`](ServerNetworkRuntime.md)

#### Inherited from

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`constructor`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md#constructors)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L23)

## Properties

### #bleBroadcaster?

> `private` `optional` **#bleBroadcaster**: [`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L46)

***

### #bleTransport?

> `private` `optional` **#bleTransport**: [`TransportInterface`](../../../../common/export/interfaces/TransportInterface.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L47)

***

### #closed

> `private` **#closed**: `Promise`\<`void`\>

#### Inherited from

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`#closed`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md##closed)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L20)

***

### #closing

> `private` **#closing**: `Promise`\<`void`\>

#### Inherited from

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`#closing`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md##closing)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L18)

***

### #commissionedListener()?

> `private` `optional` **#commissionedListener**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L48)

***

### #interactionServer?

> `private` `optional` **#interactionServer**: [`TransactionalInteractionServer`](TransactionalInteractionServer.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L42)

***

### #matterDevice?

> `private` `optional` **#matterDevice**: [`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L43)

***

### #mdnsBroadcaster?

> `private` `optional` **#mdnsBroadcaster**: [`MdnsInstanceBroadcaster`](MdnsInstanceBroadcaster.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L44)

***

### #owner

> `private` **#owner**: [`Node`](../../classes/Node.md)\<[`RootEndpoint`](../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md)\>

#### Inherited from

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`#owner`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md##owner)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L17)

***

### #primaryNetInterface?

> `private` `optional` **#primaryNetInterface**: [`UdpInterface`](../../../../net/export/classes/UdpInterface.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L45)

***

### #resolveClosed()

> `private` **#resolveClosed**: () => `void`

#### Returns

`void`

#### Inherited from

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`#resolveClosed`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md##resolveclosed)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L21)

***

### #resolveClosing()

> `private` **#resolveClosing**: () => `void`

#### Returns

`void`

#### Inherited from

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`#resolveClosing`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md##resolveclosing)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L19)

***

### #rootServer?

> `private` `optional` **#rootServer**: [`EndpointServer`](../../../../endpoint/export/classes/EndpointServer.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L41)

## Accessors

### #commissionedFabrics

> `get` `private` **#commissionedFabrics**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:252](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L252)

***

### bleBroadcaster

> `get` `protected` **bleBroadcaster**(): [`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md)

A BLE broadcaster.

#### Returns

[`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L141)

***

### bleTransport

> `get` `protected` **bleTransport**(): [`TransportInterface`](../../../../common/export/interfaces/TransportInterface.md)

A BLE transport.

#### Returns

[`TransportInterface`](../../../../common/export/interfaces/TransportInterface.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L152)

***

### interactionServer

> `get` **interactionServer**(): [`TransactionalInteractionServer`](TransactionalInteractionServer.md)

Expose the internal InteractionServer for testing.

#### Returns

[`TransactionalInteractionServer`](TransactionalInteractionServer.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:245](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L245)

***

### mdnsBroadcaster

> `get` **mdnsBroadcaster**(): [`MdnsInstanceBroadcaster`](MdnsInstanceBroadcaster.md)

Access the MDNS broadcaster for the node.

#### Returns

[`MdnsInstanceBroadcaster`](MdnsInstanceBroadcaster.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L67)

***

### networkInterfaceConfiguration

> `get` **networkInterfaceConfiguration**(): [`NetworkInterface`](../../../../net/export/README.md#networkinterface)[]

#### Returns

[`NetworkInterface`](../../../../net/export/README.md#networkinterface)[]

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L76)

***

### networkInterfaces

> `get` **networkInterfaces**(): [`NetworkInterfaceDetailed`](../../../../net/export/README.md#networkinterfacedetailed)[]

#### Returns

[`NetworkInterfaceDetailed`](../../../../net/export/README.md#networkinterfacedetailed)[]

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L88)

***

### operationalPort

> `get` **operationalPort**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:256](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L256)

***

### owner

> `get` **owner**(): [`ServerNode`](../../classes/ServerNode.md)\<[`RootEndpoint`](../../namespaces/ServerNode/interfaces/RootEndpoint.md)\>

#### Returns

[`ServerNode`](../../classes/ServerNode.md)\<[`RootEndpoint`](../../namespaces/ServerNode/interfaces/RootEndpoint.md)\>

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L50)

***

### rootServer

> `get` **rootServer**(): [`EndpointServer`](../../../../endpoint/export/classes/EndpointServer.md)

Access the [EndpointServer](../../../../endpoint/export/classes/EndpointServer.md) for the root endpoint.

#### Returns

[`EndpointServer`](../../../../endpoint/export/classes/EndpointServer.md)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L57)

## Methods

### #removeBleBroadcaster()

> `private` **#removeBleBroadcaster**(`bleBroadcaster`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bleBroadcaster` | [`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:232](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L232)

***

### #removeBleTransport()

> `private` **#removeBleTransport**(`bleTransport`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bleTransport` | [`TransportInterface`](../../../../common/export/interfaces/TransportInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L237)

***

### #stop()

> `private` **#stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`#stop`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md##stop)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L73)

***

### addBroadcasters()

> `protected` **addBroadcasters**(`device`): `Promise`\<`void`\>

Add broadcasters to the [MatterDevice](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `device` | [`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:186](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L186)

***

### addTransports()

> `protected` **addTransports**(`device`): `Promise`\<`void`\>

Add transports to the [MatterDevice](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `device` | [`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L162)

***

### announceNow()

> **announceNow**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L110)

***

### blockNewActivity()

> `protected` **blockNewActivity**(): `void`

#### Returns

`void`

#### Overrides

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`blockNewActivity`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md#blocknewactivity)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:347](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L347)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`close`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md#close)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L68)

***

### enableMdnsBroadcasting()

> **enableMdnsBroadcasting**(): `void`

When the first Fabric gets added we need to enable MDNS broadcasting.

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L208)

***

### endCommissioning()

> **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:260](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L260)

***

### endUncommissionedMode()

> **endUncommissionedMode**(): `void`

On commission we turn off bluetooth and join the IP network if we haven't already.

On decommission we're destroyed so don't need to handle that case.

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L220)

***

### getPrimaryNetInterface()

> `protected` **getPrimaryNetInterface**(): `Promise`\<[`UdpInterface`](../../../../net/export/classes/UdpInterface.md)\>

The IPv6 [UdpInterface](../../../../net/export/classes/UdpInterface.md). We create this interface independently of the server so the OS can select a port
before we are fully online.

#### Returns

`Promise`\<[`UdpInterface`](../../../../net/export/classes/UdpInterface.md)\>

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L123)

***

### openAdvertisementWindow()

> **openAdvertisementWindow**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L102)

***

### run()

> **run**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`run`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md#run)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L41)

***

### start()

> `protected` **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`start`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md#start)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L266)

***

### stop()

> `protected` **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`NetworkRuntime`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md).[`stop`](../../../../behavior/cluster/export/-internal-/classes/NetworkRuntime.md#stop)

#### Source

[packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts:316](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/ServerNetworkRuntime.ts#L316)
