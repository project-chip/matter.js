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

- [ipV4](net_export.NetworkFake.md#ipv4)
- [ipV6](net_export.NetworkFake.md#ipv6)
- [mac](net_export.NetworkFake.md#mac)
- [get](net_export.NetworkFake.md#get)

### Methods

- [close](net_export.NetworkFake.md#close)
- [createUdpChannel](net_export.NetworkFake.md#createudpchannel)
- [getIpMac](net_export.NetworkFake.md#getipmac)
- [getNetInterfaces](net_export.NetworkFake.md#getnetinterfaces)

## Constructors

### constructor

• **new NetworkFake**(`mac`, `ips`): [`NetworkFake`](net_export.NetworkFake.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mac` | `string` |
| `ips` | `string`[] |

#### Returns

[`NetworkFake`](net_export.NetworkFake.md)

#### Overrides

[Network](net_export.Network.md).[constructor](net_export.Network.md#constructor)

#### Defined in

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:12

## Properties

### ipV4

• `Private` `Readonly` **ipV4**: `any`

#### Defined in

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:10

___

### ipV6

• `Private` `Readonly` **ipV6**: `any`

#### Defined in

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:11

___

### mac

• `Private` `Readonly` **mac**: `any`

#### Defined in

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:9

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

packages/matter.js/dist/esm/net/Network.d.ts:47

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Network](net_export.Network.md).[close](net_export.Network.md#close)

#### Defined in

packages/matter.js/dist/esm/net/Network.d.ts:51

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

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:15

___

### getIpMac

▸ **getIpMac**(`_netInterface`): [`NetworkInterfaceDetails`](../modules/net_export.md#networkinterfacedetails)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_netInterface` | `string` |

#### Returns

[`NetworkInterfaceDetails`](../modules/net_export.md#networkinterfacedetails)

#### Overrides

[Network](net_export.Network.md).[getIpMac](net_export.Network.md#getipmac)

#### Defined in

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:14

___

### getNetInterfaces

▸ **getNetInterfaces**(): [`NetworkInterface`](../modules/net_export.md#networkinterface)[]

#### Returns

[`NetworkInterface`](../modules/net_export.md#networkinterface)[]

#### Overrides

[Network](net_export.Network.md).[getNetInterfaces](net_export.Network.md#getnetinterfaces)

#### Defined in

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:13
