[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / UdpConnection

# Class: UdpConnection

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).UdpConnection

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Implements

- [`Channel`](../interfaces/common_export.Channel.md)<[`ByteArray`](../modules/util_export.md#bytearray-1)\>

## Table of contents

### Constructors

- [constructor](export._internal_.UdpConnection.md#constructor)

### Properties

- [peerAddress](export._internal_.UdpConnection.md#peeraddress)
- [peerPort](export._internal_.UdpConnection.md#peerport)
- [server](export._internal_.UdpConnection.md#server)

### Accessors

- [name](export._internal_.UdpConnection.md#name)

### Methods

- [close](export._internal_.UdpConnection.md#close)
- [send](export._internal_.UdpConnection.md#send)

## Constructors

### constructor

• **new UdpConnection**(`server`, `peerAddress`, `peerPort`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`UdpChannel`](../interfaces/net_export.UdpChannel.md) |
| `peerAddress` | `string` |
| `peerPort` | `number` |

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L43)

## Properties

### peerAddress

• `Private` `Readonly` **peerAddress**: `string`

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L45)

___

### peerPort

• `Private` `Readonly` **peerPort**: `number`

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L46)

___

### server

• `Private` `Readonly` **server**: [`UdpChannel`](../interfaces/net_export.UdpChannel.md)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L44)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[name](../interfaces/common_export.Channel.md#name)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L53)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[close](../interfaces/common_export.Channel.md#close)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:57](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L57)

___

### send

▸ **send**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[send](../interfaces/common_export.Channel.md#send)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L49)
