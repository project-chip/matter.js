[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / Network

# Class: Network

[net/export](../modules/net_export.md).Network

## Hierarchy

- **`Network`**

  ↳ [`NetworkFake`](net_export.NetworkFake.md)

  ↳ [`NetworkNode`](net_export.NetworkNode.md)

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

packages/matter.js/dist/esm/net/Network.d.ts:47

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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

#### Defined in

packages/matter.js/dist/esm/net/Network.d.ts:50

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

packages/matter.js/dist/esm/net/Network.d.ts:49

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

packages/matter.js/dist/esm/net/Network.d.ts:48
