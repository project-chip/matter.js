[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / Metatype

# Namespace: Metatype

[exports/model](exports_model.md).Metatype

## Table of contents

### Type Aliases

- [NativeType](exports_model.Metatype.md#nativetype)

### Functions

- [cast](exports_model.Metatype.md#cast)
- [hasChildren](exports_model.Metatype.md#haschildren)
- [native](exports_model.Metatype.md#native)

## Type Aliases

### NativeType

Ƭ **NativeType**: typeof `Boolean` \| typeof `BigInt` \| typeof `Number` \| typeof [`ByteArray`](util_export.md#bytearray-1) \| typeof `Array` \| typeof `Object` \| typeof `String` \| typeof `Date`

These are the native types used by this module.

#### Defined in

packages/matter.js/dist/cjs/model/definitions/Metatype.d.ts:44

## Functions

### cast

▸ **cast**(`type`, `value`): [`FieldValue`](exports_model.md#fieldvalue) \| [`Invalid`](exports_model.FieldValue.md#invalid-1) \| `undefined`

Cast a value to a specific type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Metatype`](../enums/exports_model.Metatype-1.md) | casts to a native equivalent of this type |
| `value` | [`FieldValue`](exports_model.md#fieldvalue) | value to cast |

#### Returns

[`FieldValue`](exports_model.md#fieldvalue) \| [`Invalid`](exports_model.FieldValue.md#invalid-1) \| `undefined`

the cast value or FieldValue.Invalid if cast is not possible

#### Defined in

packages/matter.js/dist/cjs/model/definitions/Metatype.d.ts:40

___

### hasChildren

▸ **hasChildren**(`type`): `boolean`

Does the specific type have children?

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/definitions/Metatype.d.ts:28

___

### native

▸ **native**(`type`): `Uint8ArrayConstructor` \| `ArrayConstructor` \| `BigIntConstructor` \| `NumberConstructor` \| `ObjectConstructor` \| `StringConstructor` \| `DateConstructor` \| `BooleanConstructor` \| `undefined`

Determine the JS type for a metatype.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md) |

#### Returns

`Uint8ArrayConstructor` \| `ArrayConstructor` \| `BigIntConstructor` \| `NumberConstructor` \| `ObjectConstructor` \| `StringConstructor` \| `DateConstructor` \| `BooleanConstructor` \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/model/definitions/Metatype.d.ts:32
