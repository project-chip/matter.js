[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Channel

# Interface: Channel<T\>

[<internal>](../modules/internal_.md).Channel

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`BlenoBleServer`](../classes/internal_.BlenoBleServer.md)
- [`MessageChannel`](../classes/internal_.MessageChannel.md)

## Table of contents

### Properties

- [name](internal_.Channel.md#name)

### Methods

- [close](internal_.Channel.md#close)
- [send](internal_.Channel.md#send)

## Properties

### name

• **name**: `string`

#### Defined in

matter.js/dist/cjs/common/Channel.d.ts:7

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/common/Channel.d.ts:9

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

matter.js/dist/cjs/common/Channel.d.ts:8
