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

• **new UdpChannelNode**(`socket`, `netInterface?`): [`UdpChannelNode`](net_export.UdpChannelNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |
| `netInterface?` | `string` |

#### Returns

[`UdpChannelNode`](net_export.UdpChannelNode.md)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:97](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter-node.js/src/net/UdpChannelNode.ts#L97)

## Properties

### netInterface

• `Private` `Optional` `Readonly` **netInterface**: `string`

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:99](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter-node.js/src/net/UdpChannelNode.ts#L99)

___

### socket

• `Private` `Readonly` **socket**: `Socket`

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:98](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter-node.js/src/net/UdpChannelNode.ts#L98)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[close](../interfaces/net_export.UdpChannel.md#close)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:129](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter-node.js/src/net/UdpChannelNode.ts#L129)

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
| `close` | () => `Promise`\<`void`\> |

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[onData](../interfaces/net_export.UdpChannel.md#ondata)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:102](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter-node.js/src/net/UdpChannelNode.ts#L102)

___

### send

▸ **send**(`host`, `port`, `data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[send](../interfaces/net_export.UdpChannel.md#send)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:117](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter-node.js/src/net/UdpChannelNode.ts#L117)

___

### create

▸ **create**(`«destructured»`): `Promise`\<[`UdpChannelNode`](net_export.UdpChannelNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UdpChannelOptions`](../interfaces/net_export.UdpChannelOptions.md) |

#### Returns

`Promise`\<[`UdpChannelNode`](net_export.UdpChannelNode.md)\>

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:40](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter-node.js/src/net/UdpChannelNode.ts#L40)
