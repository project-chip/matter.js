[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [net/export](../README.md) / SimulatedNetwork

# Class: SimulatedNetwork

## Constructors

### new SimulatedNetwork()

> **new SimulatedNetwork**(): [`SimulatedNetwork`](SimulatedNetwork.md)

#### Returns

[`SimulatedNetwork`](SimulatedNetwork.md)

## Properties

### listenersMap

> `private` `readonly` **listenersMap**: `Map`\<`string`, [`ListenerFunc`](../README.md#listenerfunc)[]\>

#### Source

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L21)

***

### get()

> `static` **get**: () => [`SimulatedNetwork`](SimulatedNetwork.md)

#### Returns

[`SimulatedNetwork`](SimulatedNetwork.md)

#### Source

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L19)

## Methods

### offUdpData()

> `private` **offUdpData**(`host`, `port`, `listenerToRemove`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `host` | `undefined` \| `string` |
| `port` | `number` |
| `listenerToRemove` | [`ListenerFunc`](../README.md#listenerfunc) |

#### Returns

`void`

#### Source

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L36)

***

### onUdpData()

> **onUdpData**(`host`, `port`, `listener`): [`Listener`](../../../common/export/interfaces/Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `host` | `undefined` \| `string` |
| `port` | `number` |
| `listener` | [`ListenerFunc`](../README.md#listenerfunc) |

#### Returns

[`Listener`](../../../common/export/interfaces/Listener.md)

#### Source

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L23)

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

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L48)
