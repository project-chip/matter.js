[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Network

# Class: `abstract` Network

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

matter.js/dist/esm/net/Network.d.ts:47

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/net/Network.d.ts:51

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

matter.js/dist/esm/net/Network.d.ts:50

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

matter.js/dist/esm/net/Network.d.ts:49

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

matter.js/dist/esm/net/Network.d.ts:48
