[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / Channel

# Interface: Channel<T\>

[common/export](../modules/common_export.md).Channel

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`MessageChannel`](../classes/protocol_export.MessageChannel.md)
- [`UdpConnection`](../classes/export._internal_.UdpConnection.md)

## Table of contents

### Properties

- [name](common_export.Channel.md#name)

### Methods

- [close](common_export.Channel.md#close)
- [send](common_export.Channel.md#send)

## Properties

### name

• **name**: `string`

#### Defined in

[packages/matter.js/src/common/Channel.ts:8](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/Channel.ts#L8)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/common/Channel.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/Channel.ts#L10)

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

[packages/matter.js/src/common/Channel.ts:9](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/Channel.ts#L9)
