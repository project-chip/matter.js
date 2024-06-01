[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/securechannel/export](../README.md) / SecureChannelStatusMessageSchema

# Class: SecureChannelStatusMessageSchema

Define a schema to encode / decode convert type T to type E.

## Extends

- [`Schema`](../../../../schema/export/classes/Schema.md)\<[`StatusMessage`](../README.md#statusmessage), [`ByteArray`](../../../../util/export/README.md#bytearray)\>

## Constructors

### new SecureChannelStatusMessageSchema()

> **new SecureChannelStatusMessageSchema**(): [`SecureChannelStatusMessageSchema`](SecureChannelStatusMessageSchema.md)

#### Returns

[`SecureChannelStatusMessageSchema`](SecureChannelStatusMessageSchema.md)

#### Inherited from

[`Schema`](../../../../schema/export/classes/Schema.md).[`constructor`](../../../../schema/export/classes/Schema.md#constructors)

## Methods

### decode()

> **decode**(`encoded`, `validate`): [`StatusMessage`](../README.md#statusmessage)

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`StatusMessage`](../README.md#statusmessage)

#### Inherited from

[`Schema`](../../../../schema/export/classes/Schema.md).[`decode`](../../../../schema/export/classes/Schema.md#decode)

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

***

### decodeInternal()

> **decodeInternal**(`bytes`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`object`

##### generalStatus

> **generalStatus**: `number`

##### protocolId

> **protocolId**: `number`

##### protocolStatus

> **protocolStatus**: `number`

#### Overrides

[`Schema`](../../../../schema/export/classes/Schema.md).[`decodeInternal`](../../../../schema/export/classes/Schema.md#decodeinternal)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts#L28)

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`StatusMessage`](../README.md#statusmessage) |

#### Returns

`Uint8Array`

#### Inherited from

[`Schema`](../../../../schema/export/classes/Schema.md).[`encode`](../../../../schema/export/classes/Schema.md#encode)

#### Source

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

***

### encodeInternal()

> **encodeInternal**(`__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`StatusMessage`](../README.md#statusmessage) |

#### Returns

`Uint8Array`

#### Overrides

[`Schema`](../../../../schema/export/classes/Schema.md).[`encodeInternal`](../../../../schema/export/classes/Schema.md#encodeinternal)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts#L20)

***

### validate()

> **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | [`StatusMessage`](../README.md#statusmessage) |

#### Returns

`void`

#### Inherited from

[`Schema`](../../../../schema/export/classes/Schema.md).[`validate`](../../../../schema/export/classes/Schema.md#validate)

#### Source

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L28)
