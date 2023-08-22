[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / SimulatedNetwork

# Class: SimulatedNetwork

[net/export](../modules/net_export.md).SimulatedNetwork

## Table of contents

### Constructors

- [constructor](net_export.SimulatedNetwork.md#constructor)

### Properties

- [listenersMap](net_export.SimulatedNetwork.md#listenersmap)
- [get](net_export.SimulatedNetwork.md#get)

### Methods

- [offUdpData](net_export.SimulatedNetwork.md#offudpdata)
- [onUdpData](net_export.SimulatedNetwork.md#onudpdata)
- [sendUdp](net_export.SimulatedNetwork.md#sendudp)

## Constructors

### constructor

• **new SimulatedNetwork**()

## Properties

### listenersMap

• `Private` `Readonly` **listenersMap**: `Map`<`string`, [`ListenerFunc`](../modules/net_export.md#listenerfunc)[]\>

#### Defined in

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L21)

___

### get

▪ `Static` **get**: () => [`SimulatedNetwork`](net_export.SimulatedNetwork.md)

#### Type declaration

▸ (): [`SimulatedNetwork`](net_export.SimulatedNetwork.md)

##### Returns

[`SimulatedNetwork`](net_export.SimulatedNetwork.md)

#### Defined in

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L19)

## Methods

### offUdpData

▸ `Private` **offUdpData**(`host`, `port`, `listenerToRemove`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `undefined` \| `string` |
| `port` | `number` |
| `listenerToRemove` | [`ListenerFunc`](../modules/net_export.md#listenerfunc) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L36)

___

### onUdpData

▸ **onUdpData**(`host`, `port`, `listener`): [`Listener`](../interfaces/common_export.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `undefined` \| `string` |
| `port` | `number` |
| `listener` | [`ListenerFunc`](../modules/net_export.md#listenerfunc) |

#### Returns

[`Listener`](../interfaces/common_export.Listener.md)

#### Defined in

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L23)

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

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L48)
