[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [net/export](../README.md) / NetworkNode

# Class: NetworkNode

## Extends

- [`Network`](Network.md)

## Constructors

### new NetworkNode()

> **new NetworkNode**(): [`NetworkNode`](NetworkNode.md)

#### Returns

[`NetworkNode`](NetworkNode.md)

#### Inherited from

[`Network`](Network.md).[`constructor`](Network.md#constructors)

## Properties

### get()

> `static` **get**: () => [`Network`](Network.md)

#### Returns

[`Network`](Network.md)

#### Inherited from

[`Network`](Network.md).[`get`](Network.md#get)

#### Source

packages/matter.js/dist/esm/net/Network.d.ts:47

***

### netInterfaces

> `static` `private` `readonly` **netInterfaces**: [`Cache`](../../../util/export/classes/Cache.md)\<`undefined` \| `string`\>

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L71)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Network`](Network.md).[`close`](Network.md#close)

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L77)

***

### createUdpChannel()

> **createUdpChannel**(`options`): `Promise`\<[`UdpChannel`](../interfaces/UdpChannel.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`UdpChannelOptions`](../interfaces/UdpChannelOptions.md) |

#### Returns

`Promise`\<[`UdpChannel`](../interfaces/UdpChannel.md)\>

#### Overrides

[`Network`](Network.md).[`createUdpChannel`](Network.md#createudpchannel)

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L152)

***

### getIpMac()

> **getIpMac**(`netInterface`): `undefined` \| [`NetworkInterfaceDetails`](../README.md#networkinterfacedetails)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| [`NetworkInterfaceDetails`](../README.md#networkinterfacedetails)

#### Overrides

[`Network`](Network.md).[`getIpMac`](Network.md#getipmac)

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L144)

***

### getNetInterfaces()

> **getNetInterfaces**(`configuration`): [`NetworkInterface`](../README.md#networkinterface)[]

Get all network interfaces.
The optional configuration parameter allows to map interface names to types if this mapping is known.
Each network interface which has no mapped type is returned as Ethernet for now.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `configuration` | [`NetworkInterface`](../README.md#networkinterface)[] | `[]` | An array of objects with the name and type properties. |

#### Returns

[`NetworkInterface`](../README.md#networkinterface)[]

#### Overrides

[`Network`](Network.md).[`getNetInterfaces`](Network.md#getnetinterfaces)

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L125)

***

### getMembershipMulticastInterfaces()

> `static` **getMembershipMulticastInterfaces**(`netInterface`, `ipv4`): (`undefined` \| `string`)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | `undefined` \| `string` |
| `ipv4` | `boolean` |

#### Returns

(`undefined` \| `string`)[]

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L35)

***

### getMulticastInterfaceIpv4()

> `static` **getMulticastInterfaceIpv4**(`netInterface`): `undefined` \| `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L24)

***

### getNetInterfaceForIp()

> `static` **getNetInterfaceForIp**(`ip`): `undefined` \| `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L65)

***

### getNetInterfaceForRemoveAddress()

> `static` `private` **getNetInterfaceForRemoveAddress**(`ip`): `undefined` \| `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L81)

***

### getNetInterfaceZoneIpv6()

> `static` **getNetInterfaceZoneIpv6**(`netInterface`): `undefined` \| `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L59)

***

### getNetInterfaceZoneIpv6Internal()

> `static` `private` **getNetInterfaceZoneIpv6Internal**(`netInterface`, `netInterfaceInfos`): `undefined` \| `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `netInterfaceInfos` | `undefined` \| `NetworkInterfaceInfo`[] |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter-node.js/src/net/NetworkNode.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/NetworkNode.ts#L105)
