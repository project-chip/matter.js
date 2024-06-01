[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / Metatype

# Namespace: Metatype

## Type Aliases

### NativeType

> **NativeType**: *typeof* `Boolean` \| *typeof* `BigInt` \| *typeof* `Number` \| *typeof* [`ByteArray`](../../../util/export/README.md#bytearray-1) \| *typeof* `Array` \| *typeof* `Object` \| *typeof* `String` \| *typeof* `Date`

These are the native types used by this module.

#### Source

[packages/matter.js/src/model/definitions/Metatype.ts:235](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/Metatype.ts#L235)

## Functions

### cast()

> **cast**(`type`, `value`): [`FieldValue`](../../README.md#fieldvalue) \| [`Invalid`](../FieldValue/README.md#invalid) \| `undefined`

Cast a value to a specific type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Metatype`](../../enumerations/Metatype.md) | casts to a native equivalent of this type |
| `value` | [`FieldValue`](../../README.md#fieldvalue) | value to cast |

#### Returns

[`FieldValue`](../../README.md#fieldvalue) \| [`Invalid`](../FieldValue/README.md#invalid) \| `undefined`

the cast value or FieldValue.Invalid if cast is not possible

#### Source

[packages/matter.js/src/model/definitions/Metatype.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/Metatype.ts#L83)

***

### hasChildren()

> **hasChildren**(`type`): `boolean`

Does the specific type have children?

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `undefined` \| [`Metatype`](../../enumerations/Metatype.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/definitions/Metatype.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/Metatype.ts#L31)

***

### native()

> **native**(`type`): `undefined` \| `ObjectConstructor` \| `StringConstructor` \| `BooleanConstructor` \| `NumberConstructor` \| `DateConstructor` \| `ArrayConstructor` \| `Uint8ArrayConstructor` \| `BigIntConstructor`

Determine the JS type for a metatype.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `undefined` \| [`Metatype`](../../enumerations/Metatype.md) |

#### Returns

`undefined` \| `ObjectConstructor` \| `StringConstructor` \| `BooleanConstructor` \| `NumberConstructor` \| `DateConstructor` \| `ArrayConstructor` \| `Uint8ArrayConstructor` \| `BigIntConstructor`

#### Source

[packages/matter.js/src/model/definitions/Metatype.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/Metatype.ts#L46)
