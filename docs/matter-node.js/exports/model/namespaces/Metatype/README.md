[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / Metatype

# Namespace: Metatype

## Type Aliases

### NativeType

> **NativeType**: *typeof* `Boolean` \| *typeof* `BigInt` \| *typeof* `Number` \| *typeof* [`ByteArray`](../../../../util/export/README.md#bytearray-1) \| *typeof* `Array` \| *typeof* `Object` \| *typeof* `String` \| *typeof* `Date`

These are the native types used by this module.

#### Source

packages/matter.js/dist/esm/model/definitions/Metatype.d.ts:44

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

packages/matter.js/dist/esm/model/definitions/Metatype.d.ts:40

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

packages/matter.js/dist/esm/model/definitions/Metatype.d.ts:28

***

### native()

> **native**(`type`): `Uint8ArrayConstructor` \| `ArrayConstructor` \| `BigIntConstructor` \| `NumberConstructor` \| `ObjectConstructor` \| `StringConstructor` \| `DateConstructor` \| `BooleanConstructor` \| `undefined`

Determine the JS type for a metatype.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `undefined` \| [`Metatype`](../../enumerations/Metatype.md) |

#### Returns

`Uint8ArrayConstructor` \| `ArrayConstructor` \| `BigIntConstructor` \| `NumberConstructor` \| `ObjectConstructor` \| `StringConstructor` \| `DateConstructor` \| `BooleanConstructor` \| `undefined`

#### Source

packages/matter.js/dist/esm/model/definitions/Metatype.d.ts:32
