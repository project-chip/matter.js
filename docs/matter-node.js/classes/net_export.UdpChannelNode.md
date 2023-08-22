[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / UdpChannelNode

# Class: UdpChannelNode

[net/export](../modules/net_export.md).UdpChannelNode

## Implements

- [`UdpChannel`](../interfaces/net_export.UdpChannel.md)

## Table of contents

### Constructors

- [constructor](net_export.UdpChannelNode.md#constructor)

### Properties

- [netInterface](net_export.UdpChannelNode.md#netinterface)
- [socket](net_export.UdpChannelNode.md#socket)

### Methods

- [close](net_export.UdpChannelNode.md#close)
- [onData](net_export.UdpChannelNode.md#ondata)
- [send](net_export.UdpChannelNode.md#send)
- [create](net_export.UdpChannelNode.md#create)

## Constructors

### constructor

• **new UdpChannelNode**(`socket`, `netInterface?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |
| `netInterface?` | `string` |

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:63](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/UdpChannelNode.ts#L63)

## Properties

### netInterface

• `Private` `Optional` `Readonly` **netInterface**: `string`

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/UdpChannelNode.ts#L65)

___

### socket

• `Private` `Readonly` **socket**: `Socket`

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:64](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/UdpChannelNode.ts#L64)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[close](../interfaces/net_export.UdpChannel.md#close)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:95](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/UdpChannelNode.ts#L95)

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
| `close` | () => `Promise`<`void`\> |

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[onData](../interfaces/net_export.UdpChannel.md#ondata)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:68](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/UdpChannelNode.ts#L68)

___

### send

▸ **send**(`host`, `port`, `data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[send](../interfaces/net_export.UdpChannel.md#send)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:83](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/UdpChannelNode.ts#L83)

___

### create

▸ `Static` **create**(`«destructured»`): `Promise`<[`UdpChannelNode`](net_export.UdpChannelNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UdpChannelOptions`](../interfaces/net_export.UdpChannelOptions.md) |

#### Returns

`Promise`<[`UdpChannelNode`](net_export.UdpChannelNode.md)\>

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/net/UdpChannelNode.ts#L41)
