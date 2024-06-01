[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [net/export](../README.md) / NetworkFake

# Class: NetworkFake

## Extends

- [`Network`](Network.md)

## Constructors

### new NetworkFake()

> **new NetworkFake**(`mac`, `ips`): [`NetworkFake`](NetworkFake.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mac` | `string` |
| `ips` | `string`[] |

#### Returns

[`NetworkFake`](NetworkFake.md)

#### Overrides

[`Network`](Network.md).[`constructor`](Network.md#constructors)

#### Source

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:12

## Properties

### ipV4

> `private` `readonly` **ipV4**: `any`

#### Source

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:10

***

### ipV6

> `private` `readonly` **ipV6**: `any`

#### Source

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:11

***

### mac

> `private` `readonly` **mac**: `any`

#### Source

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:9

***

### get()

> `static` **get**: () => [`Network`](Network.md)

#### Returns

[`Network`](Network.md)

#### Inherited from

[`Network`](Network.md).[`get`](Network.md#get)

#### Source

packages/matter.js/dist/esm/net/Network.d.ts:47

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Network`](Network.md).[`close`](Network.md#close)

#### Source

packages/matter.js/dist/esm/net/Network.d.ts:51

***

### createUdpChannel()

> **createUdpChannel**(`options`): `Promise`\<[`UdpChannel`](../interfaces/UdpChannel.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`UdpChannelOptions`](../interfaces/UdpChannelOptions.md) |

#### Returns

`Promise`\<[`UdpChannel`](../interfaces/UdpChannel.md)\>

#### Overrides

[`Network`](Network.md).[`createUdpChannel`](Network.md#createudpchannel)

#### Source

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:15

***

### getIpMac()

> **getIpMac**(`_netInterface`): [`NetworkInterfaceDetails`](../README.md#networkinterfacedetails)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_netInterface` | `string` |

#### Returns

[`NetworkInterfaceDetails`](../README.md#networkinterfacedetails)

#### Overrides

[`Network`](Network.md).[`getIpMac`](Network.md#getipmac)

#### Source

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:14

***

### getNetInterfaces()

> **getNetInterfaces**(): [`NetworkInterface`](../README.md#networkinterface)[]

#### Returns

[`NetworkInterface`](../README.md#networkinterface)[]

#### Overrides

[`Network`](Network.md).[`getNetInterfaces`](Network.md#getnetinterfaces)

#### Source

packages/matter.js/dist/esm/net/fake/NetworkFake.d.ts:13
