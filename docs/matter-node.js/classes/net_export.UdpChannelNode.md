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

### Accessors

- [port](net_export.UdpChannelNode.md#port)

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

[packages/matter-node.js/src/net/UdpChannelNode.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/UdpChannelNode.ts#L101)

## Properties

### netInterface

• `Private` `Optional` `Readonly` **netInterface**: `string`

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/UdpChannelNode.ts#L103)

___

### socket

• `Private` `Readonly` **socket**: `Socket`

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/UdpChannelNode.ts#L102)

## Accessors

### port

• `get` **port**(): `number`

#### Returns

`number`

#### Implementation of

UdpChannel.port

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/UdpChannelNode.ts#L143)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[close](../interfaces/net_export.UdpChannel.md#close)

#### Defined in

[packages/matter-node.js/src/net/UdpChannelNode.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/UdpChannelNode.ts#L135)

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

[packages/matter-node.js/src/net/UdpChannelNode.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/UdpChannelNode.ts#L106)

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

[packages/matter-node.js/src/net/UdpChannelNode.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/UdpChannelNode.ts#L121)

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

[packages/matter-node.js/src/net/UdpChannelNode.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/net/UdpChannelNode.ts#L44)
