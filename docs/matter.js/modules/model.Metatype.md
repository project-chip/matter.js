[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / Metatype

# Namespace: Metatype

[model](model.md).Metatype

## Table of contents

### Type Aliases

- [NativeType](model.Metatype.md#nativetype)

### Functions

- [cast](model.Metatype.md#cast)
- [hasChildren](model.Metatype.md#haschildren)
- [native](model.Metatype.md#native)

## Type Aliases

### NativeType

Ƭ **NativeType**: typeof `Boolean` \| typeof `BigInt` \| typeof `Number` \| typeof [`ByteArray`](util_export.md#bytearray-1) \| typeof `Array` \| typeof `Object` \| typeof `String` \| typeof `Date`

These are the native types used by this module.

#### Defined in

[packages/matter.js/src/model/definitions/Metatype.ts:235](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/Metatype.ts#L235)

## Functions

### cast

▸ **cast**(`type`, `value`): [`FieldValue`](model.md#fieldvalue) \| [`Invalid`](model.FieldValue.md#invalid) \| `undefined`

Cast a value to a specific type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Metatype`](../enums/model.Metatype-1.md) | casts to a native equivalent of this type |
| `value` | [`FieldValue`](model.md#fieldvalue) | value to cast |

#### Returns

[`FieldValue`](model.md#fieldvalue) \| [`Invalid`](model.FieldValue.md#invalid) \| `undefined`

the cast value or FieldValue.Invalid if cast is not possible

#### Defined in

[packages/matter.js/src/model/definitions/Metatype.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/Metatype.ts#L83)

___

### hasChildren

▸ **hasChildren**(`type`): `boolean`

Does the specific type have children?

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| [`Metatype`](../enums/model.Metatype-1.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/definitions/Metatype.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/Metatype.ts#L31)

___

### native

▸ **native**(`type`): `undefined` \| `ObjectConstructor` \| `StringConstructor` \| `BooleanConstructor` \| `NumberConstructor` \| `DateConstructor` \| `ArrayConstructor` \| `Uint8ArrayConstructor` \| `BigIntConstructor`

Determine the JS type for a metatype.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| [`Metatype`](../enums/model.Metatype-1.md) |

#### Returns

`undefined` \| `ObjectConstructor` \| `StringConstructor` \| `BooleanConstructor` \| `NumberConstructor` \| `DateConstructor` \| `ArrayConstructor` \| `Uint8ArrayConstructor` \| `BigIntConstructor`

#### Defined in

[packages/matter.js/src/model/definitions/Metatype.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/Metatype.ts#L46)
