[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](codec_export.md) / Base64

# Namespace: Base64

[codec/export](codec_export.md).Base64

## Table of contents

### Functions

- [decode](codec_export.Base64.md#decode)
- [encode](codec_export.Base64.md#encode)

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

[packages/matter.js/src/codec/Base64Codec.ts:91](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/Base64Codec.ts#L91)

___

### encode

▸ **encode**(`input`, `url?`): `string`

Encodes base64.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `ArrayLike`<`number`\> | `undefined` | an indexable sequence of bytes |
| `url` | `boolean` | `false` | set to true to encode as base46url |

#### Returns

`string`

an encoded string

#### Defined in

[packages/matter.js/src/codec/Base64Codec.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/Base64Codec.ts#L52)
