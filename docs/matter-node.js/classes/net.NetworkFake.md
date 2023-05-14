[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / NetworkFake

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

packages/matter.js/dist/cjs/net/fake/NetworkFake.d.ts:11

## Properties

### ips

• `Private` `Readonly` **ips**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/fake/NetworkFake.d.ts:10

___

### mac

• `Private` `Readonly` **mac**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/fake/NetworkFake.d.ts:9

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

packages/matter.js/dist/cjs/net/Network.d.ts:8

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

packages/matter.js/dist/cjs/net/fake/NetworkFake.d.ts:17

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

packages/matter.js/dist/cjs/net/fake/NetworkFake.d.ts:13

___

### getNetInterfaces

▸ **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Overrides

[Network](net.Network.md).[getNetInterfaces](net.Network.md#getnetinterfaces)

#### Defined in

packages/matter.js/dist/cjs/net/fake/NetworkFake.d.ts:12
