[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / NetworkFake

# Class: NetworkFake

[net/export](../modules/net_export.md).NetworkFake

## Hierarchy

- [`Network`](net_export.Network.md)

  ↳ **`NetworkFake`**

## Table of contents

### Constructors

- [constructor](net_export.NetworkFake.md#constructor)

### Properties

- [ips](net_export.NetworkFake.md#ips)
- [mac](net_export.NetworkFake.md#mac)
- [get](net_export.NetworkFake.md#get)

### Methods

- [close](net_export.NetworkFake.md#close)
- [createUdpChannel](net_export.NetworkFake.md#createudpchannel)
- [getIpMac](net_export.NetworkFake.md#getipmac)
- [getNetInterfaces](net_export.NetworkFake.md#getnetinterfaces)

## Constructors

### constructor

• **new NetworkFake**(`mac`, `ips`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mac` | `string` |
| `ips` | `string`[] |

#### Overrides

[Network](net_export.Network.md).[constructor](net_export.Network.md#constructor)

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

▪ `Static` **get**: () => [`Network`](net_export.Network.md)

#### Type declaration

▸ (): [`Network`](net_export.Network.md)

##### Returns

[`Network`](net_export.Network.md)

#### Inherited from

[Network](net_export.Network.md).[get](net_export.Network.md#get)

#### Defined in

packages/matter.js/dist/cjs/net/Network.d.ts:11

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Network](net_export.Network.md).[close](net_export.Network.md#close)

#### Defined in

packages/matter.js/dist/cjs/net/Network.d.ts:18

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

[Network](net_export.Network.md).[getIpMac](net_export.Network.md#getipmac)

#### Defined in

packages/matter.js/dist/cjs/net/fake/NetworkFake.d.ts:13

___

### getNetInterfaces

▸ **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Overrides

[Network](net_export.Network.md).[getNetInterfaces](net_export.Network.md#getnetinterfaces)

#### Defined in

packages/matter.js/dist/cjs/net/fake/NetworkFake.d.ts:12
