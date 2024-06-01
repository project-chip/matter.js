[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/securechannel](../README.md) / SecureChannelStatusMessageSchema

# Class: SecureChannelStatusMessageSchema

Define a schema to encode / decode convert type T to type E.

## Extends

- [`Schema`](../../schema/classes/Schema.md)\<[`StatusMessage`](../README.md#statusmessage), [`ByteArray`](../../../util/export/README.md#bytearray)\>

## Constructors

### new SecureChannelStatusMessageSchema()

> **new SecureChannelStatusMessageSchema**(): [`SecureChannelStatusMessageSchema`](SecureChannelStatusMessageSchema.md)

#### Returns

[`SecureChannelStatusMessageSchema`](SecureChannelStatusMessageSchema.md)

#### Inherited from

[`Schema`](../../schema/classes/Schema.md).[`constructor`](../../schema/classes/Schema.md#constructors)

## Methods

### decode()

> **decode**(`encoded`, `validate`?): [`StatusMessage`](../README.md#statusmessage)

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate`? | `boolean` |

#### Returns

[`StatusMessage`](../README.md#statusmessage)

#### Inherited from

[`Schema`](../../schema/classes/Schema.md).[`decode`](../../schema/classes/Schema.md#decode)

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

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

[`Schema`](../../schema/classes/Schema.md).[`decodeInternal`](../../schema/classes/Schema.md#decodeinternal)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelStatusMessageSchema.d.ts:16

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

[`Schema`](../../schema/classes/Schema.md).[`encode`](../../schema/classes/Schema.md#encode)

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:9

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

[`Schema`](../../schema/classes/Schema.md).[`encodeInternal`](../../schema/classes/Schema.md#encodeinternal)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelStatusMessageSchema.d.ts:15

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

[`Schema`](../../schema/classes/Schema.md).[`validate`](../../schema/classes/Schema.md#validate)

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:15
