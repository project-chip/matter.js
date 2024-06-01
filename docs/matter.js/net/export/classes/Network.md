[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [net/export](../README.md) / Network

# Class: `abstract` Network

## Extended by

- [`NetworkFake`](NetworkFake.md)

## Constructors

### new Network()

> **new Network**(): [`Network`](Network.md)

#### Returns

[`Network`](Network.md)

## Properties

### get()

> `static` **get**: () => [`Network`](Network.md)

#### Returns

[`Network`](Network.md)

#### Source

[packages/matter.js/src/net/Network.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/Network.ts#L58)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/net/Network.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/Network.ts#L66)

***

### createUdpChannel()

> `abstract` **createUdpChannel**(`options`): `Promise`\<[`UdpChannel`](../interfaces/UdpChannel.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`UdpChannelOptions`](../interfaces/UdpChannelOptions.md) |

#### Returns

`Promise`\<[`UdpChannel`](../interfaces/UdpChannel.md)\>

#### Source

[packages/matter.js/src/net/Network.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/Network.ts#L64)

***

### getIpMac()

> `abstract` **getIpMac**(`netInterface`): `undefined` \| [`NetworkInterfaceDetails`](../README.md#networkinterfacedetails)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | `string` |

#### Returns

`undefined` \| [`NetworkInterfaceDetails`](../README.md#networkinterfacedetails)

#### Source

[packages/matter.js/src/net/Network.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/Network.ts#L63)

***

### getNetInterfaces()

> `abstract` **getNetInterfaces**(`configuration`?): [`NetworkInterface`](../README.md#networkinterface)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `configuration`? | [`NetworkInterface`](../README.md#networkinterface)[] |

#### Returns

[`NetworkInterface`](../README.md#networkinterface)[]

#### Source

[packages/matter.js/src/net/Network.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/Network.ts#L62)
