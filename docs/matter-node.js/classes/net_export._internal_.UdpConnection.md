[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / [\<internal\>](../modules/net_export._internal_.md) / UdpConnection

# Class: UdpConnection

[net/export](../modules/net_export.md).[\<internal\>](../modules/net_export._internal_.md).UdpConnection

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Implements

- [`Channel`](../interfaces/exports_common.Channel.md)\<[`ByteArray`](../modules/util_export.md#bytearray)\>

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

packages/matter.js/dist/esm/net/UdpInterface.d.ts:24

## Properties

### peerAddress

• `Private` `Readonly` **peerAddress**: `any`

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:22

___

### peerPort

• `Private` `Readonly` **peerPort**: `any`

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:23

___

### server

• `Private` `Readonly` **server**: `any`

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:21

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/exports_common.Channel.md).[name](../interfaces/exports_common.Channel.md#name)

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:26

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/exports_common.Channel.md).[close](../interfaces/exports_common.Channel.md#close)

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:27

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

[Channel](../interfaces/exports_common.Channel.md).[send](../interfaces/exports_common.Channel.md#send)

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:25
