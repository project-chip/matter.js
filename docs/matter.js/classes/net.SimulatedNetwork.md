[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / SimulatedNetwork

# Class: SimulatedNetwork

[net](../modules/net.md).SimulatedNetwork

## Table of contents

### Constructors

- [constructor](net.SimulatedNetwork.md#constructor)

### Properties

- [listenersMap](net.SimulatedNetwork.md#listenersmap)
- [get](net.SimulatedNetwork.md#get)

### Methods

- [offUdpData](net.SimulatedNetwork.md#offudpdata)
- [onUdpData](net.SimulatedNetwork.md#onudpdata)
- [sendUdp](net.SimulatedNetwork.md#sendudp)

## Constructors

### constructor

• **new SimulatedNetwork**()

## Properties

### listenersMap

• `Private` `Readonly` **listenersMap**: `Map`<`string`, [`Listener`](../modules/net.md#listener)[]\>

#### Defined in

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L21)

___

### get

▪ `Static` **get**: () => [`SimulatedNetwork`](net.SimulatedNetwork.md)

#### Type declaration

▸ (): [`SimulatedNetwork`](net.SimulatedNetwork.md)

##### Returns

[`SimulatedNetwork`](net.SimulatedNetwork.md)

#### Defined in

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L19)

## Methods

### offUdpData

▸ `Private` **offUdpData**(`address`, `port`, `listenerToRemove`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `undefined` \| `string` |
| `port` | `number` |
| `listenerToRemove` | [`Listener`](../modules/net.md#listener) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L36)

___

### onUdpData

▸ **onUdpData**(`address`, `port`, `listener`): [`NetListener`](../interfaces/net.NetListener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `undefined` \| `string` |
| `port` | `number` |
| `listener` | [`Listener`](../modules/net.md#listener) |

#### Returns

[`NetListener`](../interfaces/net.NetListener.md)

#### Defined in

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L23)

___

### sendUdp

▸ **sendUdp**(`localAddress`, `localPort`, `remoteAddress`, `remotePort`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `localAddress` | `string` |
| `localPort` | `number` |
| `remoteAddress` | `string` |
| `remotePort` | `number` |
| `data` | `Uint8Array` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L48)
