[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / Network

# Class: Network

[net](../modules/net.md).Network

## Hierarchy

- **`Network`**

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

[packages/matter.js/src/net/Network.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/Network.ts#L10)

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

[packages/matter.js/src/net/Network.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/Network.ts#L14)

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

[packages/matter.js/src/net/Network.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/Network.ts#L13)

___

### getNetInterfaces

▸ `Abstract` **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/net/Network.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/Network.ts#L12)
