[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / SimulatedNetwork

# Class: SimulatedNetwork

[net/export](../modules/net_export.md).SimulatedNetwork

## Table of contents

### Constructors

- [constructor](net_export.SimulatedNetwork.md#constructor)

### Properties

- [listenersMap](net_export.SimulatedNetwork.md#listenersmap)
- [offUdpData](net_export.SimulatedNetwork.md#offudpdata)
- [get](net_export.SimulatedNetwork.md#get)

### Methods

- [onUdpData](net_export.SimulatedNetwork.md#onudpdata)
- [sendUdp](net_export.SimulatedNetwork.md#sendudp)

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

▪ `Static` **get**: () => [`SimulatedNetwork`](net_export.SimulatedNetwork.md)

#### Type declaration

▸ (): [`SimulatedNetwork`](net_export.SimulatedNetwork.md)

##### Returns

[`SimulatedNetwork`](net_export.SimulatedNetwork.md)

#### Defined in

packages/matter.js/dist/cjs/net/fake/SimulatedNetwork.d.ts:11

## Methods

### onUdpData

▸ **onUdpData**(`host`, `port`, `listener`): [`Listener`](../interfaces/exports_common.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `undefined` \| `string` |
| `port` | `number` |
| `listener` | [`ListenerFunc`](../modules/net_export.md#listenerfunc) |

#### Returns

[`Listener`](../interfaces/exports_common.Listener.md)

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
