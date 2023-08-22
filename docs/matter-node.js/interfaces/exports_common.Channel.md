[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / Channel

# Interface: Channel<T\>

[exports/common](../modules/exports_common.md).Channel

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`MessageChannel`](../classes/exports_protocol.MessageChannel.md)
- [`UdpConnection`](../classes/export._internal_.UdpConnection.md)

## Table of contents

### Properties

- [name](exports_common.Channel.md#name)

### Methods

- [close](exports_common.Channel.md#close)
- [send](exports_common.Channel.md#send)

## Properties

### name

• **name**: `string`

#### Defined in

packages/matter.js/dist/cjs/common/Channel.d.ts:7

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/common/Channel.d.ts:9

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

packages/matter.js/dist/cjs/common/Channel.d.ts:8
