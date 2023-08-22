[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/codec](exports_codec.md) / Base64

# Namespace: Base64

[exports/codec](exports_codec.md).Base64

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Table of contents

### Functions

- [decode](exports_codec.Base64.md#decode)
- [encode](exports_codec.Base64.md#encode)

## Functions

### decode

▸ **decode**(`input`): `Uint8Array`

Decodes base64.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | binary data encoded as a base64 or base64url string |

#### Returns

`Uint8Array`

decoded bytes in a ByteArray

#### Defined in

packages/matter.js/dist/cjs/codec/Base64Codec.d.ts:21

___

### encode

▸ **encode**(`input`, `url?`): `string`

Encodes base64.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `ArrayLike`<`number`\> | an indexable sequence of bytes |
| `url?` | `boolean` | set to true to encode as base46url |

#### Returns

`string`

an encoded string

#### Defined in

packages/matter.js/dist/cjs/codec/Base64Codec.d.ts:14
