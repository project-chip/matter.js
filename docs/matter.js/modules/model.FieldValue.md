[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / FieldValue

# Namespace: FieldValue

[model](model.md).FieldValue

## Table of contents

### Type Aliases

- [Celsius](model.FieldValue.md#celsius)
- [Invalid](model.FieldValue.md#invalid)
- [Percent](model.FieldValue.md#percent)
- [Properties](model.FieldValue.md#properties)
- [Reference](model.FieldValue.md#reference)
- [Type](model.FieldValue.md#type)
- [celsius](model.FieldValue.md#celsius-1)
- [percent](model.FieldValue.md#percent-1)
- [properties](model.FieldValue.md#properties-1)
- [reference](model.FieldValue.md#reference-1)

### Variables

- [Invalid](model.FieldValue.md#invalid-1)
- [celsius](model.FieldValue.md#celsius-2)
- [percent](model.FieldValue.md#percent-2)
- [properties](model.FieldValue.md#properties-2)
- [reference](model.FieldValue.md#reference-2)

### Functions

- [Celsius](model.FieldValue.md#celsius-3)
- [Percent](model.FieldValue.md#percent-3)
- [Reference](model.FieldValue.md#reference-3)
- [is](model.FieldValue.md#is)
- [numericValue](model.FieldValue.md#numericvalue)
- [objectValue](model.FieldValue.md#objectvalue)
- [referenced](model.FieldValue.md#referenced)
- [serialize](model.FieldValue.md#serialize)
- [unwrap](model.FieldValue.md#unwrap)

## Type Aliases

### Celsius

Ƭ **Celsius**: `Object`

Celsius value, typically .1°C or .01°C

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | [`celsius`](model.FieldValue.md#celsius-1) |
| `value` | `number` |

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L84)

[packages/matter.js/src/model/definitions/FieldValue.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L79)

___

### Invalid

Ƭ **Invalid**: typeof [`Invalid`](model.FieldValue.md#invalid-1)

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L61)

[packages/matter.js/src/model/definitions/FieldValue.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L62)

___

### Percent

Ƭ **Percent**: `Object`

Percent value, units of either 1% (.01) or .01% (.0001)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | [`percent`](model.FieldValue.md#percent-1) |
| `value` | `number` |

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L96)

[packages/matter.js/src/model/definitions/FieldValue.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L91)

___

### Properties

Ƭ **Properties**: `Object`

A set of struct property values keyed by name.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties` | \{ `[name: string]`: [`FieldValue`](model.md#fieldvalue);  } |
| `type` | [`properties`](model.FieldValue.md#properties-1) |

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L103)

___

### Reference

Ƭ **Reference**: `Object`

Reference to a named field

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | [`reference`](model.FieldValue.md#reference-1) |

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L72)

[packages/matter.js/src/model/definitions/FieldValue.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L67)

___

### Type

Ƭ **Type**: [`percent`](model.FieldValue.md#percent-1) \| [`celsius`](model.FieldValue.md#celsius-1) \| [`reference`](model.FieldValue.md#reference-1) \| [`properties`](model.FieldValue.md#properties-1)

If a field value isn't a primitive type, it's an object with a type
field indicating one of these types.

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L48)

___

### celsius

Ƭ **celsius**: typeof [`celsius`](model.FieldValue.md#celsius-2)

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L35)

[packages/matter.js/src/model/definitions/FieldValue.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L36)

___

### percent

Ƭ **percent**: typeof [`percent`](model.FieldValue.md#percent-2)

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L32)

[packages/matter.js/src/model/definitions/FieldValue.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L33)

___

### properties

Ƭ **properties**: typeof [`properties`](model.FieldValue.md#properties-2)

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L41)

[packages/matter.js/src/model/definitions/FieldValue.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L42)

___

### reference

Ƭ **reference**: typeof [`reference`](model.FieldValue.md#reference-2)

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L38)

[packages/matter.js/src/model/definitions/FieldValue.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L39)

## Variables

### Invalid

• `Const` **Invalid**: unique `symbol`

Flag for an invalid value.  Not part of the FieldValue union but
returned when casting to a field value if the cast is impossible

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L61)

[packages/matter.js/src/model/definitions/FieldValue.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L62)

___

### celsius

• `Const` **celsius**: ``"celsius"``

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L35)

[packages/matter.js/src/model/definitions/FieldValue.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L36)

___

### percent

• `Const` **percent**: ``"percent"``

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L32)

[packages/matter.js/src/model/definitions/FieldValue.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L33)

___

### properties

• `Const` **properties**: ``"properties"``

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L41)

[packages/matter.js/src/model/definitions/FieldValue.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L42)

___

### reference

• `Const` **reference**: ``"reference"``

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L38)

[packages/matter.js/src/model/definitions/FieldValue.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L39)

## Functions

### Celsius

▸ **Celsius**(`value`): [`Celsius`](model.FieldValue.md#celsius)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Celsius`](model.FieldValue.md#celsius)

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L84)

___

### Percent

▸ **Percent**(`value`): [`Percent`](model.FieldValue.md#percent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Percent`](model.FieldValue.md#percent)

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L96)

___

### Reference

▸ **Reference**(`name`): [`Reference`](model.FieldValue.md#reference)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Reference`](model.FieldValue.md#reference)

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L72)

___

### is

▸ **is**(`value`, `type`): `undefined` \| ``null`` \| `boolean` \| ``""`` \| ``0`` \| `0n`

Test for one of the special placeholder types.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](model.md#fieldvalue) |
| `type` | [`Type`](model.FieldValue.md#type) |

#### Returns

`undefined` \| ``null`` \| `boolean` \| ``""`` \| ``0`` \| `0n`

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L53)

___

### numericValue

▸ **numericValue**(`value`, `typeName?`): `undefined` \| `number`

Given a type name as a hint, do our best to convert a field value to a
number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](model.md#fieldvalue) |
| `typeName?` | `string` |

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L134)

___

### objectValue

▸ **objectValue**(`value`): `undefined` \| \{ `[name: string]`: [`FieldValue`](model.md#fieldvalue);  }

Extract object properties from the value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](model.md#fieldvalue) |

#### Returns

`undefined` \| \{ `[name: string]`: [`FieldValue`](model.md#fieldvalue);  }

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L172)

___

### referenced

▸ **referenced**(`value`): `undefined` \| `string`

Get the referenced name if the FieldValue is a reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](model.md#fieldvalue) |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:210](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L210)

___

### serialize

▸ **serialize**(`value`): `undefined` \| `string`

Convert the field value to a "defacto-standard" form.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FieldValue`](model.md#fieldvalue) |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L111)

___

### unwrap

▸ **unwrap**(`value`, `typeName?`): `undefined` \| ``null`` \| `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| \{ `[name: string]`: [`FieldValue`](model.md#fieldvalue);  }

Unwrap wrapped values, leave others as-is.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](model.md#fieldvalue) |
| `typeName?` | `string` |

#### Returns

`undefined` \| ``null`` \| `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| \{ `[name: string]`: [`FieldValue`](model.md#fieldvalue);  }

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L181)
