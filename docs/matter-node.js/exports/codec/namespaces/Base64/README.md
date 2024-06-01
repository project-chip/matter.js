[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/codec](../../README.md) / Base64

# Namespace: Base64

## License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Functions

### decode()

> **decode**(`input`): `Uint8Array`

Decodes base64.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | binary data encoded as a base64 or base64url string |

#### Returns

`Uint8Array`

decoded bytes in a ByteArray

#### Source

packages/matter.js/dist/esm/codec/Base64Codec.d.ts:21

***

### encode()

> **encode**(`input`, `url`?): `string`

Encodes base64.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `input` | `ArrayLike`\<`number`\> | an indexable sequence of bytes |
| `url`? | `boolean` | set to true to encode as base46url |

#### Returns

`string`

an encoded string

#### Source

packages/matter.js/dist/esm/codec/Base64Codec.d.ts:14
