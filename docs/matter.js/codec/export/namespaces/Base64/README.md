[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [codec/export](../../README.md) / Base64

# Namespace: Base64

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

[packages/matter.js/src/codec/Base64Codec.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/Base64Codec.ts#L91)

***

### encode()

> **encode**(`input`, `url`): `string`

Encodes base64.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `ArrayLike`\<`number`\> | `undefined` | an indexable sequence of bytes |
| `url` | `boolean` | `false` | set to true to encode as base46url |

#### Returns

`string`

an encoded string

#### Source

[packages/matter.js/src/codec/Base64Codec.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/Base64Codec.ts#L52)
