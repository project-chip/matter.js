[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / Channel

# Interface: Channel<T\>

[net](../modules/net.md).Channel

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`MessageChannel`](../classes/exports_protocol.MessageChannel.md)
- [`UdpConnection`](../classes/index._internal_.UdpConnection.md)

## Table of contents

### Methods

- [getName](net.Channel.md#getname)
- [send](net.Channel.md#send)

## Methods

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/net/Channel.d.ts:8

___

### send

▸ **send**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/net/Channel.d.ts:7
