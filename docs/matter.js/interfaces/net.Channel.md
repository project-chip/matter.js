[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / Channel

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

- [`MessageChannel`](../classes/protocol.MessageChannel.md)
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

[packages/matter.js/src/net/Channel.ts:9](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/Channel.ts#L9)

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

[packages/matter.js/src/net/Channel.ts:8](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/Channel.ts#L8)
