[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / FieldValue

# Namespace: FieldValue

## Type Aliases

### Celsius

> **Celsius**: `object`

Celsius value, typically .1°C or .01°C

#### Type declaration

##### type

> **type**: [`celsius`](README.md#celsius-1)

##### value

> **value**: `number`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:51

***

### Invalid

> **Invalid**: *typeof* [`Invalid`](README.md#invalid-1)

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:34

***

### Percent

> **Percent**: `object`

Percent value, units of either 1% (.01) or .01% (.0001)

#### Type declaration

##### type

> **type**: [`percent`](README.md#percent-1)

##### value

> **value**: `number`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:59

***

### Properties

> **Properties**: `object`

A set of struct property values keyed by name.

#### Type declaration

##### properties

> **properties**: `object`

###### Index signature

 \[`name`: `string`\]: [`FieldValue`](../../README.md#fieldvalue)

##### type

> **type**: [`properties`](README.md#properties-2)

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:63

***

### Reference

> **Reference**: `object`

Reference to a named field

#### Type declaration

##### name

> **name**: `string`

##### type

> **type**: [`reference`](README.md#reference-1)

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:43

***

### Type

> **Type**: [`percent`](README.md#percent-1) \| [`celsius`](README.md#celsius-1) \| [`reference`](README.md#reference-1) \| [`properties`](README.md#properties-2)

If a field value isn't a primitive type, it's an object with a type
field indicating one of these types.

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:25

***

### celsius

> **celsius**: *typeof* [`celsius`](README.md#celsius-2)

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:15

***

### percent

> **percent**: *typeof* [`percent`](README.md#percent-2)

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:13

***

### properties

> **properties**: *typeof* [`properties`](README.md#properties-3)

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:19

***

### reference

> **reference**: *typeof* [`reference`](README.md#reference-2)

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:17

## Variables

### Invalid

> `const` **Invalid**: unique `symbol`

Flag for an invalid value.  Not part of the FieldValue union but
returned when casting to a field value if the cast is impossible

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:34

***

### celsius

> `const` **celsius**: `"celsius"` = `"celsius"`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:15

***

### percent

> `const` **percent**: `"percent"` = `"percent"`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:13

***

### properties

> `const` **properties**: `"properties"` = `"properties"`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:19

***

### reference

> `const` **reference**: `"reference"` = `"reference"`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:17

## Functions

### Celsius()

> **Celsius**(`value`): [`Celsius`](README.md#celsius)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Celsius`](README.md#celsius)

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:51

***

### Percent()

> **Percent**(`value`): [`Percent`](README.md#percent)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Percent`](README.md#percent)

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:59

***

### Reference()

> **Reference**(`name`): [`Reference`](README.md#reference)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Reference`](README.md#reference)

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:43

***

### is()

> **is**(`value`, `type`): `boolean` \| `""` \| `0` \| `0n` \| `null` \| `undefined`

Test for one of the special placeholder types.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](../../README.md#fieldvalue) |
| `type` | [`Type`](README.md#type-4) |

#### Returns

`boolean` \| `""` \| `0` \| `0n` \| `null` \| `undefined`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:29

***

### numericValue()

> **numericValue**(`value`, `typeName`?): `number` \| `undefined`

Given a type name as a hint, do our best to convert a field value to a
number.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](../../README.md#fieldvalue) |
| `typeName`? | `string` |

#### Returns

`number` \| `undefined`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:77

***

### objectValue()

> **objectValue**(`value`): `object` \| `undefined`

Extract object properties from the value.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](../../README.md#fieldvalue) |

#### Returns

`object` \| `undefined`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:81

***

### referenced()

> **referenced**(`value`): `string` \| `undefined`

Get the referenced name if the FieldValue is a reference.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](../../README.md#fieldvalue) |

#### Returns

`string` \| `undefined`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:93

***

### serialize()

> **serialize**(`value`): `string` \| `undefined`

Convert the field value to a "defacto-standard" form.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`FieldValue`](../../README.md#fieldvalue) |

#### Returns

`string` \| `undefined`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:72

***

### unwrap()

> **unwrap**(`value`, `typeName`?): `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| `object` \| `null` \| `undefined`

Unwrap wrapped values, leave others as-is.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](../../README.md#fieldvalue) |
| `typeName`? | `string` |

#### Returns

`string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| `object` \| `null` \| `undefined`

#### Source

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:87
