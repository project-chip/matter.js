[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / UdpConnection

# Class: UdpConnection

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).UdpConnection

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Implements

- [`Channel`](../interfaces/net.Channel.md)<[`ByteArray`](../modules/util.md#bytearray-1)\>

## Table of contents

### Constructors

- [constructor](index._internal_.UdpConnection.md#constructor)

### Properties

- [peerAddress](index._internal_.UdpConnection.md#peeraddress)
- [peerPort](index._internal_.UdpConnection.md#peerport)
- [server](index._internal_.UdpConnection.md#server)

### Methods

- [getName](index._internal_.UdpConnection.md#getname)
- [send](index._internal_.UdpConnection.md#send)

## Constructors

### constructor

• **new UdpConnection**(`server`, `peerAddress`, `peerPort`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`UdpChannel`](../interfaces/net.UdpChannel.md) |
| `peerAddress` | `string` |
| `peerPort` | `number` |

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L33)

## Properties

### peerAddress

• `Private` `Readonly` **peerAddress**: `string`

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L35)

___

### peerPort

• `Private` `Readonly` **peerPort**: `number`

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L36)

___

### server

• `Private` `Readonly` **server**: [`UdpChannel`](../interfaces/net.UdpChannel.md)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L34)

## Methods

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/net.Channel.md).[getName](../interfaces/net.Channel.md#getname)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L43)

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

[Channel](../interfaces/net.Channel.md).[send](../interfaces/net.Channel.md#send)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L39)
