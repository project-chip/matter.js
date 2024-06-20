[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / NetworkFake

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

[packages/matter.js/src/net/fake/NetworkFake.ts:17](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/fake/NetworkFake.ts#L17)

## Properties

### ipV4

• `Private` `Readonly` **ipV4**: `string`[]

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:14](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/fake/NetworkFake.ts#L14)

___

### ipV6

• `Private` `Readonly` **ipV6**: `string`[]

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:15](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/fake/NetworkFake.ts#L15)

___

### mac

• `Private` `Readonly` **mac**: `string`

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:18](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/fake/NetworkFake.ts#L18)

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

[packages/matter.js/src/net/Network.ts:58](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/Network.ts#L58)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Network](net_export.Network.md).[close](net_export.Network.md#close)

#### Defined in

[packages/matter.js/src/net/Network.ts:66](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/Network.ts#L66)

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

[packages/matter.js/src/net/fake/NetworkFake.ts:34](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/fake/NetworkFake.ts#L34)

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

[packages/matter.js/src/net/fake/NetworkFake.ts:30](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/fake/NetworkFake.ts#L30)

___

### getNetInterfaces

▸ **getNetInterfaces**(): [`NetworkInterface`](../modules/net_export.md#networkinterface)[]

#### Returns

[`NetworkInterface`](../modules/net_export.md#networkinterface)[]

#### Overrides

[Network](net_export.Network.md).[getNetInterfaces](net_export.Network.md#getnetinterfaces)

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:26](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/fake/NetworkFake.ts#L26)
