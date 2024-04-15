[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / [\<internal\>](../modules/net_export._internal_.md) / UdpConnection

# Class: UdpConnection

[net/export](../modules/net_export.md).[\<internal\>](../modules/net_export._internal_.md).UdpConnection

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Implements

- [`Channel`](../interfaces/common_export.Channel.md)\<[`ByteArray`](../modules/util_export.md#bytearray)\>

## Table of contents

### Constructors

- [constructor](net_export._internal_.UdpConnection.md#constructor)

### Properties

- [peerAddress](net_export._internal_.UdpConnection.md#peeraddress)
- [peerPort](net_export._internal_.UdpConnection.md#peerport)
- [server](net_export._internal_.UdpConnection.md#server)

### Accessors

- [name](net_export._internal_.UdpConnection.md#name)

### Methods

- [close](net_export._internal_.UdpConnection.md#close)
- [send](net_export._internal_.UdpConnection.md#send)

## Constructors

### constructor

• **new UdpConnection**(`server`, `peerAddress`, `peerPort`): [`UdpConnection`](net_export._internal_.UdpConnection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`UdpChannel`](../interfaces/net_export.UdpChannel.md) |
| `peerAddress` | `string` |
| `peerPort` | `number` |

#### Returns

[`UdpConnection`](net_export._internal_.UdpConnection.md)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpInterface.ts#L48)

## Properties

### peerAddress

• `Private` `Readonly` **peerAddress**: `string`

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpInterface.ts#L50)

___

### peerPort

• `Private` `Readonly` **peerPort**: `number`

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpInterface.ts#L51)

___

### server

• `Private` `Readonly` **server**: [`UdpChannel`](../interfaces/net_export.UdpChannel.md)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpInterface.ts#L49)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[name](../interfaces/common_export.Channel.md#name)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpInterface.ts#L58)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[close](../interfaces/common_export.Channel.md#close)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpInterface.ts#L62)

___

### send

▸ **send**(`data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[send](../interfaces/common_export.Channel.md#send)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpInterface.ts#L54)
