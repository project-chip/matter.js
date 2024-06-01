[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [net/export](../README.md) / NetworkFake

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

[packages/matter.js/src/net/fake/NetworkFake.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/NetworkFake.ts#L17)

## Properties

### ipV4

> `private` `readonly` **ipV4**: `string`[]

#### Source

[packages/matter.js/src/net/fake/NetworkFake.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/NetworkFake.ts#L14)

***

### ipV6

> `private` `readonly` **ipV6**: `string`[]

#### Source

[packages/matter.js/src/net/fake/NetworkFake.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/NetworkFake.ts#L15)

***

### mac

> `private` `readonly` **mac**: `string`

#### Source

[packages/matter.js/src/net/fake/NetworkFake.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/NetworkFake.ts#L18)

***

### get()

> `static` **get**: () => [`Network`](Network.md)

#### Returns

[`Network`](Network.md)

#### Inherited from

[`Network`](Network.md).[`get`](Network.md#get)

#### Source

[packages/matter.js/src/net/Network.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/Network.ts#L58)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Network`](Network.md).[`close`](Network.md#close)

#### Source

[packages/matter.js/src/net/Network.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/Network.ts#L66)

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

[packages/matter.js/src/net/fake/NetworkFake.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/NetworkFake.ts#L34)

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

[packages/matter.js/src/net/fake/NetworkFake.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/NetworkFake.ts#L30)

***

### getNetInterfaces()

> **getNetInterfaces**(): [`NetworkInterface`](../README.md#networkinterface)[]

#### Returns

[`NetworkInterface`](../README.md#networkinterface)[]

#### Overrides

[`Network`](Network.md).[`getNetInterfaces`](Network.md#getnetinterfaces)

#### Source

[packages/matter.js/src/net/fake/NetworkFake.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/NetworkFake.ts#L26)
