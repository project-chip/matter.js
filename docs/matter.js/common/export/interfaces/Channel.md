[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / Channel

# Interface: Channel\<T\>

## License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Properties

### name

> **name**: `string`

#### Source

[packages/matter.js/src/common/Channel.ts:8](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Channel.ts#L8)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/Channel.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Channel.ts#L10)

***

### send()

> **send**(`data`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/Channel.ts:9](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Channel.ts#L9)
