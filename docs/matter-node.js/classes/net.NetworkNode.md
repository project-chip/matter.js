[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / NetworkNode

# Class: NetworkNode

[net](../modules/net.md).NetworkNode

## Hierarchy

- [`Network`](net.Network.md)

  ↳ **`NetworkNode`**

## Table of contents

### Constructors

- [constructor](net.NetworkNode.md#constructor)

### Properties

- [get](net.NetworkNode.md#get)
- [netInterfaces](net.NetworkNode.md#netinterfaces)

### Methods

- [createUdpChannel](net.NetworkNode.md#createudpchannel)
- [getIpMac](net.NetworkNode.md#getipmac)
- [getNetInterfaces](net.NetworkNode.md#getnetinterfaces)
- [getMulticastInterface](net.NetworkNode.md#getmulticastinterface)
- [getNetInterfaceForIp](net.NetworkNode.md#getnetinterfaceforip)
- [getNetInterfaceForIpInternal](net.NetworkNode.md#getnetinterfaceforipinternal)

## Constructors

### constructor

• **new NetworkNode**()

#### Inherited from

[Network](net.Network.md).[constructor](net.Network.md#constructor)

## Properties

### get

▪ `Static` **get**: () => [`Network`](net.Network.md)

#### Type declaration

▸ (): [`Network`](net.Network.md)

##### Returns

[`Network`](net.Network.md)

#### Inherited from

[Network](net.Network.md).[get](net.Network.md#get)

#### Defined in

packages/matter.js/dist/cjs/net/Network.d.ts:8

___

### netInterfaces

▪ `Static` `Private` `Readonly` **netInterfaces**: [`Cache`](util.Cache.md)<`undefined` \| `string`\>

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/NetworkNode.ts#L36)

## Methods

### createUdpChannel

▸ **createUdpChannel**(`options`): `Promise`<[`UdpChannel`](../interfaces/net.UdpChannel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UdpChannelOptions`](../interfaces/net.UdpChannelOptions.md) |

#### Returns

`Promise`<[`UdpChannel`](../interfaces/net.UdpChannel.md)\>

#### Overrides

[Network](net.Network.md).[createUdpChannel](net.Network.md#createudpchannel)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/NetworkNode.ts#L77)

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

[Network](net.Network.md).[getIpMac](net.Network.md#getipmac)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:71](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/NetworkNode.ts#L71)

___

### getNetInterfaces

▸ **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Overrides

[Network](net.Network.md).[getNetInterfaces](net.Network.md#getnetinterfaces)

#### Defined in

[packages/matter-node.js/src/net/NetworkNode.ts:59](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/NetworkNode.ts#L59)

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

[packages/matter-node.js/src/net/NetworkNode.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/NetworkNode.ts#L15)

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

[packages/matter-node.js/src/net/NetworkNode.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/NetworkNode.ts#L30)

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

[packages/matter-node.js/src/net/NetworkNode.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/NetworkNode.ts#L41)
