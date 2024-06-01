[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [net/export](../README.md) / SimulatedNetwork

# Class: SimulatedNetwork

## Constructors

### new SimulatedNetwork()

> **new SimulatedNetwork**(): [`SimulatedNetwork`](SimulatedNetwork.md)

#### Returns

[`SimulatedNetwork`](SimulatedNetwork.md)

## Properties

### listenersMap

> `private` `readonly` **listenersMap**: `any`

#### Source

packages/matter.js/dist/esm/net/fake/SimulatedNetwork.d.ts:12

***

### offUdpData

> `private` **offUdpData**: `any`

#### Source

packages/matter.js/dist/esm/net/fake/SimulatedNetwork.d.ts:14

***

### get()

> `static` **get**: () => [`SimulatedNetwork`](SimulatedNetwork.md)

#### Returns

[`SimulatedNetwork`](SimulatedNetwork.md)

#### Source

packages/matter.js/dist/esm/net/fake/SimulatedNetwork.d.ts:11

## Methods

### onUdpData()

> **onUdpData**(`host`, `port`, `listener`): [`Listener`](../../../exports/common/interfaces/Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `host` | `undefined` \| `string` |
| `port` | `number` |
| `listener` | [`ListenerFunc`](../README.md#listenerfunc) |

#### Returns

[`Listener`](../../../exports/common/interfaces/Listener.md)

#### Source

packages/matter.js/dist/esm/net/fake/SimulatedNetwork.d.ts:13

***

### sendUdp()

> **sendUdp**(`localAddress`, `localPort`, `remoteAddress`, `remotePort`, `data`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `localAddress` | `string` |
| `localPort` | `number` |
| `remoteAddress` | `string` |
| `remotePort` | `number` |
| `data` | `Uint8Array` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/net/fake/SimulatedNetwork.d.ts:15
