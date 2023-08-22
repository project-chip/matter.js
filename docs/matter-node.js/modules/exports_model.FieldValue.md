[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / FieldValue

# Namespace: FieldValue

[exports/model](exports_model.md).FieldValue

## Table of contents

### Type Aliases

- [Celsius](exports_model.FieldValue.md#celsius)
- [Invalid](exports_model.FieldValue.md#invalid)
- [Percent](exports_model.FieldValue.md#percent)
- [Properties](exports_model.FieldValue.md#properties)
- [Reference](exports_model.FieldValue.md#reference)
- [Type](exports_model.FieldValue.md#type)
- [celsius](exports_model.FieldValue.md#celsius-1)
- [percent](exports_model.FieldValue.md#percent-1)
- [properties](exports_model.FieldValue.md#properties-1)
- [reference](exports_model.FieldValue.md#reference-1)

### Variables

- [Invalid](exports_model.FieldValue.md#invalid-1)
- [celsius](exports_model.FieldValue.md#celsius-2)
- [percent](exports_model.FieldValue.md#percent-2)
- [properties](exports_model.FieldValue.md#properties-2)
- [reference](exports_model.FieldValue.md#reference-2)

### Functions

- [Celsius](exports_model.FieldValue.md#celsius-3)
- [Percent](exports_model.FieldValue.md#percent-3)
- [Reference](exports_model.FieldValue.md#reference-3)
- [is](exports_model.FieldValue.md#is)
- [numericValue](exports_model.FieldValue.md#numericvalue)
- [objectValue](exports_model.FieldValue.md#objectvalue)
- [referenced](exports_model.FieldValue.md#referenced)
- [serialize](exports_model.FieldValue.md#serialize)
- [unwrap](exports_model.FieldValue.md#unwrap)

## Type Aliases

### Celsius

Ƭ **Celsius**: `Object`

Celsius value, typically .1°C or .01°C

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | [`celsius`](exports_model.FieldValue.md#celsius-2) |
| `value` | `number` |

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:51

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:47

___

### Invalid

Ƭ **Invalid**: typeof [`Invalid`](exports_model.FieldValue.md#invalid-1)

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:34

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:35

___

### Percent

Ƭ **Percent**: `Object`

Percent value, units of either 1% (.01) or .01% (.0001)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | [`percent`](exports_model.FieldValue.md#percent-2) |
| `value` | `number` |

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:59

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:55

___

### Properties

Ƭ **Properties**: `Object`

A set of struct property values keyed by name.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties` | { `[name: string]`: [`FieldValue`](exports_model.md#fieldvalue);  } |
| `type` | [`properties`](exports_model.FieldValue.md#properties-2) |

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:63

___

### Reference

Ƭ **Reference**: `Object`

Reference to a named field

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | [`reference`](exports_model.FieldValue.md#reference-2) |

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:43

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:39

___

### Type

Ƭ **Type**: [`percent`](exports_model.FieldValue.md#percent-2) \| [`celsius`](exports_model.FieldValue.md#celsius-2) \| [`reference`](exports_model.FieldValue.md#reference-2) \| [`properties`](exports_model.FieldValue.md#properties-2)

If a field value isn't a primitive type, it's an object with a type
field indicating one of these types.

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:25

___

### celsius

Ƭ **celsius**: typeof [`celsius`](exports_model.FieldValue.md#celsius-2)

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:15

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:16

___

### percent

Ƭ **percent**: typeof [`percent`](exports_model.FieldValue.md#percent-2)

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:13

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:14

___

### properties

Ƭ **properties**: typeof [`properties`](exports_model.FieldValue.md#properties-2)

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:19

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:20

___

### reference

Ƭ **reference**: typeof [`reference`](exports_model.FieldValue.md#reference-2)

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:17

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:18

## Variables

### Invalid

• `Const` **Invalid**: unique `symbol`

Flag for an invalid value.  Not part of the FieldValue union but
returned when casting to a field value if the cast is impossible

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:34

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:35

___

### celsius

• `Const` **celsius**: ``"celsius"``

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:15

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:16

___

### percent

• `Const` **percent**: ``"percent"``

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:13

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:14

___

### properties

• `Const` **properties**: ``"properties"``

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:19

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:20

___

### reference

• `Const` **reference**: ``"reference"``

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:17

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:18

## Functions

### Celsius

▸ **Celsius**(`value`): [`Celsius`](exports_model.FieldValue.md#celsius)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Celsius`](exports_model.FieldValue.md#celsius)

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:51

___

### Percent

▸ **Percent**(`value`): [`Percent`](exports_model.FieldValue.md#percent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Percent`](exports_model.FieldValue.md#percent)

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:59

___

### Reference

▸ **Reference**(`name`): [`Reference`](exports_model.FieldValue.md#reference)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Reference`](exports_model.FieldValue.md#reference)

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:43

___

### is

▸ **is**(`value`, `type`): `boolean` \| ``""`` \| ``0`` \| `0n` \| ``null`` \| `undefined`

Test for one of the special placeholder types.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](exports_model.md#fieldvalue) |
| `type` | [`Type`](exports_model.FieldValue.md#type) |

#### Returns

`boolean` \| ``""`` \| ``0`` \| `0n` \| ``null`` \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:29

___

### numericValue

▸ **numericValue**(`value`, `typeName?`): `number` \| `undefined`

Given a type name as a hint, do our best to convert a field value to a
number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](exports_model.md#fieldvalue) |
| `typeName?` | `string` |

#### Returns

`number` \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:77

___

### objectValue

▸ **objectValue**(`value`): { `[name: string]`: [`FieldValue`](exports_model.md#fieldvalue);  } \| `undefined`

Extract object properties from the value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](exports_model.md#fieldvalue) |

#### Returns

{ `[name: string]`: [`FieldValue`](exports_model.md#fieldvalue);  } \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:81

___

### referenced

▸ **referenced**(`value`): `string` \| `undefined`

Get the referenced name if the FieldValue is a reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](exports_model.md#fieldvalue) |

#### Returns

`string` \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:93

___

### serialize

▸ **serialize**(`value`): `string` \| `undefined`

Convert the field value to a "defacto-standard" form.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FieldValue`](exports_model.md#fieldvalue) |

#### Returns

`string` \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:72

___

### unwrap

▸ **unwrap**(`value`, `typeName?`): `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| { `[name: string]`: [`FieldValue`](exports_model.md#fieldvalue);  } \| ``null`` \| `undefined`

Unwrap wrapped values, leave others as-is.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](exports_model.md#fieldvalue) |
| `typeName?` | `string` |

#### Returns

`string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| { `[name: string]`: [`FieldValue`](exports_model.md#fieldvalue);  } \| ``null`` \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:87
