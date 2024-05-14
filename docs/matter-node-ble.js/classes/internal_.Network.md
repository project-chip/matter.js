[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Network

# Class: Network

[\<internal\>](../modules/internal_.md).Network

## Table of contents

### Constructors

- [constructor](internal_.Network.md#constructor)

### Properties

- [get](internal_.Network.md#get)

### Methods

- [close](internal_.Network.md#close)
- [createUdpChannel](internal_.Network.md#createudpchannel)
- [getIpMac](internal_.Network.md#getipmac)
- [getNetInterfaces](internal_.Network.md#getnetinterfaces)

## Constructors

### constructor

• **new Network**(): [`Network`](internal_.Network.md)

#### Returns

[`Network`](internal_.Network.md)

## Properties

### get

▪ `Static` **get**: () => [`Network`](internal_.Network.md)

#### Type declaration

▸ (): [`Network`](internal_.Network.md)

##### Returns

[`Network`](internal_.Network.md)

#### Defined in

matter.js/dist/esm/net/Network.d.ts:47

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/net/Network.d.ts:51

___

### createUdpChannel

▸ **createUdpChannel**(`options`): `Promise`\<[`UdpChannel`](../interfaces/internal_.UdpChannel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UdpChannelOptions`](../interfaces/internal_.UdpChannelOptions.md) |

#### Returns

`Promise`\<[`UdpChannel`](../interfaces/internal_.UdpChannel.md)\>

#### Defined in

matter.js/dist/esm/net/Network.d.ts:50

___

### getIpMac

▸ **getIpMac**(`netInterface`): `undefined` \| [`NetworkInterfaceDetails`](../modules/internal_.md#networkinterfacedetails)

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| [`NetworkInterfaceDetails`](../modules/internal_.md#networkinterfacedetails)

#### Defined in

matter.js/dist/esm/net/Network.d.ts:49

___

### getNetInterfaces

▸ **getNetInterfaces**(`configuration?`): [`NetworkInterface`](../modules/internal_.md#networkinterface)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`NetworkInterface`](../modules/internal_.md#networkinterface)[] |

#### Returns

[`NetworkInterface`](../modules/internal_.md#networkinterface)[]

#### Defined in

matter.js/dist/esm/net/Network.d.ts:48
