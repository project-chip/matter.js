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
- [getMulticastInterface](net_export.NetworkNode.md#getmulticastinterface)
- [getNetInterfaceForIp](net_export.NetworkNode.md#getnetinterfaceforip)
- [getNetInterfaceForIpInternal](net_export.NetworkNode.md#getnetinterfaceforipinternal)

## Constructors

### constructor

• **new NetworkNode**()

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

packages/matter.js/dist/cjs/net/Network.d.ts:11

___

### netInterfaces

▪ `Static` `Private` `Readonly` **netInterfaces**: [`Cache`](util_export.Cache.md)<`undefined` \| `string`\>

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/NetworkNode.ts#L35)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[Network](net_export.Network.md).[close](net_export.Network.md#close)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/NetworkNode.ts#L40)

___

### createUdpChannel

▸ **createUdpChannel**(`options`): `Promise`<[`UdpChannel`](../interfaces/net_export.UdpChannel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UdpChannelOptions`](../interfaces/net_export.UdpChannelOptions.md) |

#### Returns

`Promise`<[`UdpChannel`](../interfaces/net_export.UdpChannel.md)\>

#### Overrides

[Network](net_export.Network.md).[createUdpChannel](net_export.Network.md#createudpchannel)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/NetworkNode.ts#L86)

___

### getIpMac

▸ **getIpMac**(`netInterface`): `undefined` \| { `ips`: `string`[] ; `mac`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| { `ips`: `string`[] ; `mac`: `string`  }

#### Overrides

[Network](net_export.Network.md).[getIpMac](net_export.Network.md#getipmac)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:80](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/NetworkNode.ts#L80)

___

### getNetInterfaces

▸ **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Overrides

[Network](net_export.Network.md).[getNetInterfaces](net_export.Network.md#getnetinterfaces)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:68](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/NetworkNode.ts#L68)

___

### getMulticastInterface

▸ `Static` **getMulticastInterface**(`netInterface`, `ipv4`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `ipv4` | `boolean` |

#### Returns

`string`

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/NetworkNode.ts#L14)

___

### getNetInterfaceForIp

▸ `Static` **getNetInterfaceForIp**(`ip`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/NetworkNode.ts#L29)

___

### getNetInterfaceForIpInternal

▸ `Static` `Private` **getNetInterfaceForIpInternal**(`ip`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/NetworkNode.ts#L44)
