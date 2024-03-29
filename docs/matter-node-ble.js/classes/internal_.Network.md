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

matter.js/dist/esm/net/Network.d.ts:11

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/net/Network.d.ts:18

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

matter.js/dist/esm/net/Network.d.ts:17

___

### getIpMac

▸ **getIpMac**(`netInterface`): `undefined` \| \{ `ips`: `string`[] ; `mac`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| \{ `ips`: `string`[] ; `mac`: `string`  }

#### Defined in

matter.js/dist/esm/net/Network.d.ts:13

___

### getNetInterfaces

▸ **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Defined in

matter.js/dist/esm/net/Network.d.ts:12
