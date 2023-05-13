[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / NetworkFake

# Class: NetworkFake

[net](../modules/net.md).NetworkFake

## Hierarchy

- [`Network`](net.Network.md)

  ↳ **`NetworkFake`**

## Table of contents

### Constructors

- [constructor](net.NetworkFake.md#constructor)

### Properties

- [ips](net.NetworkFake.md#ips)
- [mac](net.NetworkFake.md#mac)
- [get](net.NetworkFake.md#get)

### Methods

- [createUdpChannel](net.NetworkFake.md#createudpchannel)
- [getIpMac](net.NetworkFake.md#getipmac)
- [getNetInterfaces](net.NetworkFake.md#getnetinterfaces)

## Constructors

### constructor

• **new NetworkFake**(`mac`, `ips`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mac` | `string` |
| `ips` | `string`[] |

#### Overrides

[Network](net.Network.md).[constructor](net.Network.md#constructor)

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/NetworkFake.ts#L13)

## Properties

### ips

• `Private` `Readonly` **ips**: `string`[]

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/NetworkFake.ts#L15)

___

### mac

• `Private` `Readonly` **mac**: `string`

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/NetworkFake.ts#L14)

___

### get

▪ `Static` **get**: () => [`Network`](net.Network.md)

#### Type declaration

▸ (): [`Network`](net.Network.md)

##### Returns

[`Network`](net.Network.md)

#### Inherited from

[Network](net.Network.md).[get](net.Network.md#get)

#### Defined in

[packages/matter.js/src/net/Network.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/Network.ts#L10)

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

[packages/matter.js/src/net/fake/NetworkFake.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/NetworkFake.ts#L28)

___

### getIpMac

▸ **getIpMac**(`_netInterface`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_netInterface` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ips` | `string`[] |
| `mac` | `string` |

#### Overrides

[Network](net.Network.md).[getIpMac](net.Network.md#getipmac)

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/NetworkFake.ts#L24)

___

### getNetInterfaces

▸ **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Overrides

[Network](net.Network.md).[getNetInterfaces](net.Network.md#getnetinterfaces)

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/NetworkFake.ts#L20)
