[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / Network

# Class: Network

[net/export](../modules/net_export.md).Network

## Hierarchy

- **`Network`**

  ↳ [`NetworkFake`](net_export.NetworkFake.md)

## Table of contents

### Constructors

- [constructor](net_export.Network.md#constructor)

### Properties

- [get](net_export.Network.md#get)

### Methods

- [close](net_export.Network.md#close)
- [createUdpChannel](net_export.Network.md#createudpchannel)
- [getIpMac](net_export.Network.md#getipmac)
- [getNetInterfaces](net_export.Network.md#getnetinterfaces)

## Constructors

### constructor

• **new Network**(): [`Network`](net_export.Network.md)

#### Returns

[`Network`](net_export.Network.md)

## Properties

### get

▪ `Static` **get**: () => [`Network`](net_export.Network.md)

#### Type declaration

▸ (): [`Network`](net_export.Network.md)

##### Returns

[`Network`](net_export.Network.md)

#### Defined in

[packages/matter.js/src/net/Network.ts:58](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/Network.ts#L58)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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

#### Defined in

[packages/matter.js/src/net/Network.ts:64](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/Network.ts#L64)

___

### getIpMac

▸ **getIpMac**(`netInterface`): `undefined` \| [`NetworkInterfaceDetails`](../modules/net_export.md#networkinterfacedetails)

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| [`NetworkInterfaceDetails`](../modules/net_export.md#networkinterfacedetails)

#### Defined in

[packages/matter.js/src/net/Network.ts:63](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/Network.ts#L63)

___

### getNetInterfaces

▸ **getNetInterfaces**(`configuration?`): [`NetworkInterface`](../modules/net_export.md#networkinterface)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`NetworkInterface`](../modules/net_export.md#networkinterface)[] |

#### Returns

[`NetworkInterface`](../modules/net_export.md#networkinterface)[]

#### Defined in

[packages/matter.js/src/net/Network.ts:62](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/net/Network.ts#L62)
