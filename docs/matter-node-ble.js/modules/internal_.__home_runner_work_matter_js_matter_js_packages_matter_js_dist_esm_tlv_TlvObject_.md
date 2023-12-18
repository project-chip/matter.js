[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](internal_.md) / "/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"

# Namespace: "/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"

[\<internal\>](internal_.md)."/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"

## Table of contents

### References

- [FieldType](internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md#fieldtype)
- [OptionalFieldType](internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md#optionalfieldtype)
- [TlvFields](internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md#tlvfields)
- [TypeFromFields](internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md#typefromfields)

### Classes

- [ObjectSchema](../classes/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.ObjectSchema.md)

### Interfaces

- [OptionalRepeatedFieldType](../interfaces/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.OptionalRepeatedFieldType.md)
- [RepeatedFieldType](../interfaces/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.RepeatedFieldType.md)

### Functions

- [TlvField](internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md#tlvfield)
- [TlvObject](internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md#tlvobject)
- [TlvOptionalField](internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md#tlvoptionalfield)
- [TlvOptionalRepeatedField](internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md#tlvoptionalrepeatedfield)
- [TlvRepeatedField](internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md#tlvrepeatedfield)
- [TlvTaggedList](internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md#tlvtaggedlist)

## References

### FieldType

Re-exports [FieldType](../interfaces/internal_.FieldType.md)

___

### OptionalFieldType

Re-exports [OptionalFieldType](../interfaces/internal_.OptionalFieldType.md)

___

### TlvFields

Re-exports [TlvFields](internal_.md#tlvfields)

___

### TypeFromFields

Re-exports [TypeFromFields](internal_.md#typefromfields)

## Functions

### TlvField

▸ **TlvField**\<`T`\>(`id`, `schema`, `fallback?`): [`FieldType`](../interfaces/internal_.FieldType.md)\<`T`\>

Object TLV mandatory field. Optionally provide a fallback value to initialize the field value when devices omit
providing a value against the specifications or in special use cases. Make sure to use a value that is an equivalent
to the value being empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`T`\> |
| `fallback?` | `T` |

#### Returns

[`FieldType`](../interfaces/internal_.FieldType.md)\<`T`\>

#### Defined in

matter.js/dist/esm/tlv/TlvObject.d.ts:79

___

### TlvObject

▸ **TlvObject**\<`F`\>(`fields`): [`ObjectSchema`](../classes/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.ObjectSchema.md)\<`F`\>

Object TLV schema.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](internal_.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](../classes/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.ObjectSchema.md)\<`F`\>

#### Defined in

matter.js/dist/esm/tlv/TlvObject.d.ts:63

___

### TlvOptionalField

▸ **TlvOptionalField**\<`T`\>(`id`, `schema`): [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`T`\>

Object TLV optional field.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`T`\> |

#### Returns

[`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`T`\>

#### Defined in

matter.js/dist/esm/tlv/TlvObject.d.ts:81

___

### TlvOptionalRepeatedField

▸ **TlvOptionalRepeatedField**\<`T`\>(`id`, `schema`, `lengthOptions?`): [`OptionalRepeatedFieldType`](../interfaces/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.OptionalRepeatedFieldType.md)\<`T`[]\>

Object TLV optional field that can exist repeated in a TLV List structure. The order is preserved on encoding and
decoding.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`T`\> |
| `lengthOptions?` | `Object` |
| `lengthOptions.maxLength` | `number` |

#### Returns

[`OptionalRepeatedFieldType`](../interfaces/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.OptionalRepeatedFieldType.md)\<`T`[]\>

#### Defined in

matter.js/dist/esm/tlv/TlvObject.d.ts:91

___

### TlvRepeatedField

▸ **TlvRepeatedField**\<`T`\>(`id`, `schema`, `lengthOptions?`): [`RepeatedFieldType`](../interfaces/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.RepeatedFieldType.md)\<`T`[]\>

Object TLV mandatory field that can exist repeated in a TLV List structure. The order is preserved on encoding and
decoding.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`T`\> |
| `lengthOptions?` | [`LengthConstraints`](internal_.md#lengthconstraints) |

#### Returns

[`RepeatedFieldType`](../interfaces/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.RepeatedFieldType.md)\<`T`[]\>

#### Defined in

matter.js/dist/esm/tlv/TlvObject.d.ts:86

___

### TlvTaggedList

▸ **TlvTaggedList**\<`F`\>(`fields`): [`ObjectSchema`](../classes/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.ObjectSchema.md)\<`F`\>

List TLV schema with all tagged entries.
List entries that can appear multiple times can be defined using TlvRepeatedField/TlvOptionalRepeatedField and are
represented as Arrays.
TODO: We represent Tlv Lists right now as named object properties. This formally does not match the spec, which
     defines a list as a sequence of TLV elements with optional tag where the order matters. That's ok for now
     (also with the help of "Repeated Fields") because it not makes any real difference for now for the current
     existing data structures. We need to change once this changes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](internal_.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](../classes/internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.ObjectSchema.md)\<`F`\>

#### Defined in

matter.js/dist/esm/tlv/TlvObject.d.ts:73
