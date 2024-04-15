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

packages/matter.js/dist/esm/net/Network.d.ts:11

___

### netInterfaces

▪ `Static` `Private` `Readonly` **netInterfaces**: [`Cache`](util_export.Cache.md)\<`undefined` \| `string`\>

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L64)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Network](net_export.Network.md).[close](net_export.Network.md#close)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L70)

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

[packages/matter-node.js/src/net/NetworkNode.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L129)

___

### getIpMac

▸ **getIpMac**(`netInterface`): `undefined` \| \{ `ips`: `string`[] ; `mac`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| \{ `ips`: `string`[] ; `mac`: `string`  }

#### Overrides

[Network](net_export.Network.md).[getIpMac](net_export.Network.md#getipmac)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L123)

___

### getNetInterfaces

▸ **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Overrides

[Network](net_export.Network.md).[getNetInterfaces](net_export.Network.md#getnetinterfaces)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L111)

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

[packages/matter-node.js/src/net/NetworkNode.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L28)

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

[packages/matter-node.js/src/net/NetworkNode.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L17)

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

[packages/matter-node.js/src/net/NetworkNode.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L58)

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

[packages/matter-node.js/src/net/NetworkNode.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L74)

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

[packages/matter-node.js/src/net/NetworkNode.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L52)

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

[packages/matter-node.js/src/net/NetworkNode.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/NetworkNode.ts#L98)
