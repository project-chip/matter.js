[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](util_export.md) / serialize

# Namespace: serialize

[util/export](util_export.md).serialize

## Table of contents

### Variables

- [SERIALIZE](util_export.serialize.md#serialize)

### Functions

- [asIs](util_export.serialize.md#asis)
- [isPrimitive](util_export.serialize.md#isprimitive)

## Variables

### SERIALIZE

• `Const` **SERIALIZE**: typeof [`SERIALIZE`](util_export.serialize.md#serialize)

Custom serialization function key.

#### Defined in

[packages/matter.js/src/util/String.ts:166](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/String.ts#L166)

## Functions

### asIs

▸ **asIs**(`value`): `any`

Mark a value as serialized so the serializer just uses its string
representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/util/String.ts:172](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/String.ts#L172)

___

### isPrimitive

▸ **isPrimitive**(`value`): `boolean`

Test whether a value serializes as a structure or a primitive.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/util/String.ts:187](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/String.ts#L187)
