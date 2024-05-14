[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / NetworkNode

# Class: NetworkNode

[net/export](../modules/net_export.md).NetworkNode

## Hierarchy

- [`Network`](net_export.Network.md)

  ↳ **`NetworkNode`**

## Table of contents

### Constructors

- [constructor](net_export.NetworkNode.md#constructor)

### Properties

- [get](net_export.NetworkNode.md#get)
- [netInterfaces](net_export.NetworkNode.md#netinterfaces)

### Methods

- [close](net_export.NetworkNode.md#close)
- [createUdpChannel](net_export.NetworkNode.md#createudpchannel)
- [getIpMac](net_export.NetworkNode.md#getipmac)
- [getNetInterfaces](net_export.NetworkNode.md#getnetinterfaces)
- [getMembershipMulticastInterfaces](net_export.NetworkNode.md#getmembershipmulticastinterfaces)
- [getMulticastInterfaceIpv4](net_export.NetworkNode.md#getmulticastinterfaceipv4)
- [getNetInterfaceForIp](net_export.NetworkNode.md#getnetinterfaceforip)
- [getNetInterfaceForRemoveAddress](net_export.NetworkNode.md#getnetinterfaceforremoveaddress)
- [getNetInterfaceZoneIpv6](net_export.NetworkNode.md#getnetinterfacezoneipv6)
- [getNetInterfaceZoneIpv6Internal](net_export.NetworkNode.md#getnetinterfacezoneipv6internal)

## Constructors

### constructor

• **new NetworkNode**(): [`NetworkNode`](net_export.NetworkNode.md)

#### Returns

[`NetworkNode`](net_export.NetworkNode.md)

#### Inherited from

[Network](net_export.Network.md).[constructor](net_export.Network.md#constructor)

## Properties

### get

▪ `Static` **get**: () => [`Network`](net_export.Network.md)

#### Type declaration

▸ (): [`Network`](net_export.Network.md)

##### Returns

[`Network`](net_export.Network.md)

#### Inherited from

[Network](net_export.Network.md).[get](net_export.Network.md#get)

#### Defined in

packages/matter.js/dist/esm/net/Network.d.ts:47

___

### netInterfaces

▪ `Static` `Private` `Readonly` **netInterfaces**: [`Cache`](util_export.Cache.md)\<`undefined` \| `string`\>

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:71](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L71)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Network](net_export.Network.md).[close](net_export.Network.md#close)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:77](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L77)

___

### createUdpChannel

▸ **createUdpChannel**(`options`): `Promise`\<[`UdpChannel`](../interfaces/net_export.UdpChannel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UdpChannelOptions`](../interfaces/net_export.UdpChannelOptions.md) |

#### Returns

`Promise`\<[`UdpChannel`](../interfaces/net_export.UdpChannel.md)\>

#### Overrides

[Network](net_export.Network.md).[createUdpChannel](net_export.Network.md#createudpchannel)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:152](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L152)

___

### getIpMac

▸ **getIpMac**(`netInterface`): `undefined` \| [`NetworkInterfaceDetails`](../modules/net_export.md#networkinterfacedetails)

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| [`NetworkInterfaceDetails`](../modules/net_export.md#networkinterfacedetails)

#### Overrides

[Network](net_export.Network.md).[getIpMac](net_export.Network.md#getipmac)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:144](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L144)

___

### getNetInterfaces

▸ **getNetInterfaces**(`configuration?`): [`NetworkInterface`](../modules/net_export.md#networkinterface)[]

Get all network interfaces.
The optional configuration parameter allows to map interface names to types if this mapping is known.
Each network interface which has no mapped type is returned as Ethernet for now.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `configuration` | [`NetworkInterface`](../modules/net_export.md#networkinterface)[] | `[]` | An array of objects with the name and type properties. |

#### Returns

[`NetworkInterface`](../modules/net_export.md#networkinterface)[]

#### Overrides

[Network](net_export.Network.md).[getNetInterfaces](net_export.Network.md#getnetinterfaces)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:125](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L125)

___

### getMembershipMulticastInterfaces

▸ **getMembershipMulticastInterfaces**(`netInterface`, `ipv4`): (`undefined` \| `string`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `undefined` \| `string` |
| `ipv4` | `boolean` |

#### Returns

(`undefined` \| `string`)[]

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:35](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L35)

___

### getMulticastInterfaceIpv4

▸ **getMulticastInterfaceIpv4**(`netInterface`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:24](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L24)

___

### getNetInterfaceForIp

▸ **getNetInterfaceForIp**(`ip`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:65](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L65)

___

### getNetInterfaceForRemoveAddress

▸ **getNetInterfaceForRemoveAddress**(`ip`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:81](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L81)

___

### getNetInterfaceZoneIpv6

▸ **getNetInterfaceZoneIpv6**(`netInterface`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:59](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L59)

___

### getNetInterfaceZoneIpv6Internal

▸ **getNetInterfaceZoneIpv6Internal**(`netInterface`, `netInterfaceInfos`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `netInterfaceInfos` | `undefined` \| `NetworkInterfaceInfo`[] |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:105](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter-node.js/src/net/NetworkNode.ts#L105)
