[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / SimulatedNetwork

# Class: SimulatedNetwork

[net](../modules/net.md).SimulatedNetwork

## Table of contents

### Constructors

- [constructor](net.SimulatedNetwork.md#constructor)

### Properties

- [listenersMap](net.SimulatedNetwork.md#listenersmap)
- [offUdpData](net.SimulatedNetwork.md#offudpdata)
- [get](net.SimulatedNetwork.md#get)

### Methods

- [onUdpData](net.SimulatedNetwork.md#onudpdata)
- [sendUdp](net.SimulatedNetwork.md#sendudp)

## Constructors

### constructor

• **new SimulatedNetwork**()

## Properties

### listenersMap

• `Private` `Readonly` **listenersMap**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/fake/SimulatedNetwork.d.ts:12

___

### offUdpData

• `Private` **offUdpData**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/fake/SimulatedNetwork.d.ts:14

___

### get

▪ `Static` **get**: () => [`SimulatedNetwork`](net.SimulatedNetwork.md)

#### Type declaration

▸ (): [`SimulatedNetwork`](net.SimulatedNetwork.md)

##### Returns

[`SimulatedNetwork`](net.SimulatedNetwork.md)

#### Defined in

packages/matter.js/dist/cjs/net/fake/SimulatedNetwork.d.ts:11

## Methods

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

packages/matter.js/dist/cjs/net/fake/SimulatedNetwork.d.ts:13

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

packages/matter.js/dist/cjs/net/fake/SimulatedNetwork.d.ts:15
