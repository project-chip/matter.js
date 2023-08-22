[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](internal_.md) / "/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"

# Namespace: "/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"

[<internal>](internal_.md)."/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"

## Table of contents

### References

- [FieldType](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md#fieldtype)
- [OptionalFieldType](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md#optionalfieldtype)
- [TlvFields](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md#tlvfields)
- [TypeFromFields](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md#typefromfields)

### Classes

- [ObjectSchema](../classes/internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md)

### Functions

- [TlvField](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md#tlvfield)
- [TlvList](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md#tlvlist)
- [TlvObject](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md#tlvobject)
- [TlvOptionalField](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md#tlvoptionalfield)

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

▸ **TlvField**<`T`\>(`id`, `schema`, `fallback?`): [`FieldType`](../interfaces/internal_.FieldType.md)<`T`\>

Object TLV mandatory field. Optionally provide a fallback value to initialize the field value when devices omit
providing a value against the specifications or in special usecases. Make sure to use a value that is an equivalent
to the value being empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/internal_.TlvSchema.md)<`T`\> |
| `fallback?` | `T` |

#### Returns

[`FieldType`](../interfaces/internal_.FieldType.md)<`T`\>

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:60

___

### TlvList

▸ **TlvList**<`F`\>(`fields`): [`ObjectSchema`](../classes/internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md)<`F`\>

List TLV schema.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](internal_.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](../classes/internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md)<`F`\>

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:54

___

### TlvObject

▸ **TlvObject**<`F`\>(`fields`): [`ObjectSchema`](../classes/internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md)<`F`\>

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

[`ObjectSchema`](../classes/internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md)<`F`\>

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:52

___

### TlvOptionalField

▸ **TlvOptionalField**<`T`\>(`id`, `schema`): [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`T`\>

Object TLV optional field.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/internal_.TlvSchema.md)<`T`\> |

#### Returns

[`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`T`\>

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:62
