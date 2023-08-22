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

• **new Network**()

## Properties

### get

▪ `Static` **get**: () => [`Network`](net_export.Network.md)

#### Type declaration

▸ (): [`Network`](net_export.Network.md)

##### Returns

[`Network`](net_export.Network.md)

#### Defined in

[packages/matter.js/src/net/Network.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/Network.ts#L13)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/net/Network.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/Network.ts#L21)

___

### createUdpChannel

▸ `Abstract` **createUdpChannel**(`options`): `Promise`<[`UdpChannel`](../interfaces/net_export.UdpChannel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UdpChannelOptions`](../interfaces/net_export.UdpChannelOptions.md) |

#### Returns

`Promise`<[`UdpChannel`](../interfaces/net_export.UdpChannel.md)\>

#### Defined in

[packages/matter.js/src/net/Network.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/Network.ts#L19)

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

[packages/matter.js/src/net/Network.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/Network.ts#L18)

___

### getNetInterfaces

▸ `Abstract` **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/net/Network.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/Network.ts#L17)
