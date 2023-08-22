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

[packages/matter.js/src/net/fake/NetworkFake.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/NetworkFake.ts#L13)

## Properties

### ips

• `Private` `Readonly` **ips**: `string`[]

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:15](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/NetworkFake.ts#L15)

___

### mac

• `Private` `Readonly` **mac**: `string`

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/NetworkFake.ts#L14)

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

[packages/matter.js/src/net/Network.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/Network.ts#L13)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Network](net_export.Network.md).[close](net_export.Network.md#close)

#### Defined in

[packages/matter.js/src/net/Network.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/Network.ts#L21)

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

[packages/matter.js/src/net/fake/NetworkFake.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/NetworkFake.ts#L28)

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

[packages/matter.js/src/net/fake/NetworkFake.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/NetworkFake.ts#L24)

___

### getNetInterfaces

▸ **getNetInterfaces**(): `string`[]

#### Returns

`string`[]

#### Overrides

[Network](net_export.Network.md).[getNetInterfaces](net_export.Network.md#getnetinterfaces)

#### Defined in

[packages/matter.js/src/net/fake/NetworkFake.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/NetworkFake.ts#L20)
