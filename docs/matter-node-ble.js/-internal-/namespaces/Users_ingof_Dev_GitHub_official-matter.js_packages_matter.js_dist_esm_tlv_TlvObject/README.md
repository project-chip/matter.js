[**@project-chip/matter-node-ble.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../../globals.md) / [\<internal\>](../../README.md) / "/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"

# Namespace: "/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"

## Index

### Classes

- [ObjectSchema](classes/ObjectSchema.md)

### Interfaces

- [OptionalRepeatedFieldType](interfaces/OptionalRepeatedFieldType.md)
- [RepeatedFieldType](interfaces/RepeatedFieldType.md)

## References

### FieldType

Re-exports [FieldType](../../interfaces/FieldType.md)

***

### OptionalFieldType

Re-exports [OptionalFieldType](../../interfaces/OptionalFieldType.md)

***

### TlvFields

Re-exports [TlvFields](../../README.md#tlvfields)

***

### TypeFromFields

Re-exports [TypeFromFields](../../README.md#typefromfieldsf)

## Functions

### TlvField()

> **TlvField**\<`T`\>(`id`, `schema`, `fallback`?): [`FieldType`](../../interfaces/FieldType.md)\<`T`\>

Object TLV mandatory field. Optionally provide a fallback value to initialize the field value when devices omit
providing a value against the specifications or in special use cases. Make sure to use a value that is an equivalent
to the value being empty.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../../classes/TlvSchema.md)\<`T`\> |
| `fallback`? | `T` |

#### Returns

[`FieldType`](../../interfaces/FieldType.md)\<`T`\>

#### Source

matter.js/dist/esm/tlv/TlvObject.d.ts:81

***

### TlvObject()

> **TlvObject**\<`F`\>(`fields`): [`ObjectSchema`](classes/ObjectSchema.md)\<`F`\>

Object TLV schema.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../../README.md#tlvfields) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](classes/ObjectSchema.md)\<`F`\>

#### Source

matter.js/dist/esm/tlv/TlvObject.d.ts:65

***

### TlvOptionalField()

> **TlvOptionalField**\<`T`\>(`id`, `schema`): [`OptionalFieldType`](../../interfaces/OptionalFieldType.md)\<`T`\>

Object TLV optional field.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../../classes/TlvSchema.md)\<`T`\> |

#### Returns

[`OptionalFieldType`](../../interfaces/OptionalFieldType.md)\<`T`\>

#### Source

matter.js/dist/esm/tlv/TlvObject.d.ts:83

***

### TlvOptionalRepeatedField()

> **TlvOptionalRepeatedField**\<`T`\>(`id`, `schema`, `lengthOptions`?): [`OptionalRepeatedFieldType`](interfaces/OptionalRepeatedFieldType.md)\<`T`[]\>

Object TLV optional field that can exist repeated in a TLV List structure. The order is preserved on encoding and
decoding.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../../classes/TlvSchema.md)\<`T`\> |
| `lengthOptions`? | `object` |
| `lengthOptions.maxLength`? | `number` |

#### Returns

[`OptionalRepeatedFieldType`](interfaces/OptionalRepeatedFieldType.md)\<`T`[]\>

#### Source

matter.js/dist/esm/tlv/TlvObject.d.ts:93

***

### TlvRepeatedField()

> **TlvRepeatedField**\<`T`\>(`id`, `schema`, `lengthOptions`?): [`RepeatedFieldType`](interfaces/RepeatedFieldType.md)\<`T`[]\>

Object TLV mandatory field that can exist repeated in a TLV List structure. The order is preserved on encoding and
decoding.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../../classes/TlvSchema.md)\<`T`\> |
| `lengthOptions`? | [`LengthConstraints`](../../README.md#lengthconstraints) |

#### Returns

[`RepeatedFieldType`](interfaces/RepeatedFieldType.md)\<`T`[]\>

#### Source

matter.js/dist/esm/tlv/TlvObject.d.ts:88

***

### TlvTaggedList()

> **TlvTaggedList**\<`F`\>(`fields`, `allowProtocolSpecificTags`?): [`ObjectSchema`](classes/ObjectSchema.md)\<`F`\>

List TLV schema with all tagged entries.
List entries that can appear multiple times can be defined using TlvRepeatedField/TlvOptionalRepeatedField and are
represented as Arrays.
TODO: We represent Tlv Lists right now as named object properties. This formally does not match the spec, which
     defines a list as a sequence of TLV elements with optional tag where the order matters. That's ok for now
     (also with the help of "Repeated Fields") because it not makes any real difference for now for the current
     existing data structures. We need to change once this changes.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../../README.md#tlvfields) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fields` | `F` |
| `allowProtocolSpecificTags`? | `boolean` |

#### Returns

[`ObjectSchema`](classes/ObjectSchema.md)\<`F`\>

#### Source

matter.js/dist/esm/tlv/TlvObject.d.ts:75
