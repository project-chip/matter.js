[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / Network

# Class: Network

[net](../modules/net.md).Network

## Hierarchy

- **`Network`**

  ↳ [`NetworkNode`](net.NetworkNode.md)

  ↳ [`NetworkFake`](net.NetworkFake.md)

## Table of contents

### Constructors

- [constructor](net.Network.md#constructor)

### Properties

- [get](net.Network.md#get)

### Methods

- [createUdpChannel](net.Network.md#createudpchannel)
- [getIpMac](net.Network.md#getipmac)
- [getNetInterfaces](net.Network.md#getnetinterfaces)

## Constructors

### constructor

• **new Network**()

## Properties

### get

▪ `Static` **get**: () => [`Network`](net.Network.md)

#### Type declaration

▸ (): [`Network`](net.Network.md)

##### Returns

[`Network`](net.Network.md)

#### Defined in

packages/matter.js/dist/cjs/net/Network.d.ts:8

## Methods

### createUdpChannel

▸ `Abstract` **createUdpChannel**(`options`): `Promise`<[`UdpChannel`](../interfaces/net.UdpChannel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UdpChannelOptions`](../interfaces/net.UdpChannelOptions.md) |

#### Returns

`Promise`<[`UdpChannel`](../interfaces/net.UdpChannel.md)\>

#### Defined in

packages/matter.js/dist/cjs/net/Network.d.ts:14

___

### getIpMac

▸ `Abstract` **getIpMac**(`netInterface`): `undefined` \| { `ips`: `string`[] ; `mac`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| { `ips`: `string`[] ; `mac`: `string`  }

#### Defined in

packages/matter.js/dist/cjs/net/Network.d.ts:10

___

### getNetInterfaces

▸ `Abstract` **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Defined in

packages/matter.js/dist/cjs/net/Network.d.ts:9
