[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / UdpChannelNode

# Class: UdpChannelNode

[net](../modules/net.md).UdpChannelNode

## Implements

- [`UdpChannel`](../interfaces/net.UdpChannel.md)

## Table of contents

### Constructors

- [constructor](net.UdpChannelNode.md#constructor)

### Properties

- [netInterface](net.UdpChannelNode.md#netinterface)
- [socket](net.UdpChannelNode.md#socket)

### Methods

- [close](net.UdpChannelNode.md#close)
- [onData](net.UdpChannelNode.md#ondata)
- [send](net.UdpChannelNode.md#send)
- [create](net.UdpChannelNode.md#create)

## Constructors

### constructor

• **new UdpChannelNode**(`socket`, `netInterface?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |
| `netInterface?` | `string` |

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/UdpChannelNode.ts#L49)

## Properties

### netInterface

• `Private` `Optional` `Readonly` **netInterface**: `string`

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/UdpChannelNode.ts#L51)

___

### socket

• `Private` `Readonly` **socket**: `Socket`

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/UdpChannelNode.ts#L50)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[UdpChannel](../interfaces/net.UdpChannel.md).[close](../interfaces/net.UdpChannel.md#close)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:81](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/UdpChannelNode.ts#L81)

___

### onData

▸ **onData**(`listener`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: `Uint8Array`) => `void` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `close` | () => `void` |

#### Implementation of

[UdpChannel](../interfaces/net.UdpChannel.md).[onData](../interfaces/net.UdpChannel.md#ondata)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/UdpChannelNode.ts#L54)

___

### send

▸ **send**(`address`, `port`, `data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net.UdpChannel.md).[send](../interfaces/net.UdpChannel.md#send)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/UdpChannelNode.ts#L69)

___

### create

▸ `Static` **create**(`«destructured»`): `Promise`<[`UdpChannelNode`](net.UdpChannelNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UdpChannelOptions`](../interfaces/net.UdpChannelOptions.md) |

#### Returns

`Promise`<[`UdpChannelNode`](net.UdpChannelNode.md)\>

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/net/UdpChannelNode.ts#L33)
