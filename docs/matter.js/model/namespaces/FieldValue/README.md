[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / FieldValue

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

[packages/matter.js/src/model/definitions/FieldValue.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L84)

***

### Invalid

> **Invalid**: *typeof* [`Invalid`](README.md#invalid-1)

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L61)

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

[packages/matter.js/src/model/definitions/FieldValue.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L96)

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

[packages/matter.js/src/model/definitions/FieldValue.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L103)

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

[packages/matter.js/src/model/definitions/FieldValue.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L72)

***

### Type

> **Type**: [`percent`](README.md#percent-1) \| [`celsius`](README.md#celsius-1) \| [`reference`](README.md#reference-1) \| [`properties`](README.md#properties-2)

If a field value isn't a primitive type, it's an object with a type
field indicating one of these types.

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L48)

***

### celsius

> **celsius**: *typeof* [`celsius`](README.md#celsius-2)

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L35)

***

### percent

> **percent**: *typeof* [`percent`](README.md#percent-2)

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L32)

***

### properties

> **properties**: *typeof* [`properties`](README.md#properties-3)

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L41)

***

### reference

> **reference**: *typeof* [`reference`](README.md#reference-2)

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L38)

## Variables

### Invalid

> `const` **Invalid**: unique `symbol`

Flag for an invalid value.  Not part of the FieldValue union but
returned when casting to a field value if the cast is impossible

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L61)

***

### celsius

> `const` **celsius**: `"celsius"` = `"celsius"`

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L35)

***

### percent

> `const` **percent**: `"percent"` = `"percent"`

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L32)

***

### properties

> `const` **properties**: `"properties"` = `"properties"`

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L41)

***

### reference

> `const` **reference**: `"reference"` = `"reference"`

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L38)

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

[packages/matter.js/src/model/definitions/FieldValue.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L84)

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

[packages/matter.js/src/model/definitions/FieldValue.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L96)

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

[packages/matter.js/src/model/definitions/FieldValue.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L72)

***

### is()

> **is**(`value`, `type`): `undefined` \| `null` \| `boolean` \| `""` \| `0` \| `0n`

Test for one of the special placeholder types.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](../../README.md#fieldvalue) |
| `type` | [`Type`](README.md#type-4) |

#### Returns

`undefined` \| `null` \| `boolean` \| `""` \| `0` \| `0n`

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L53)

***

### numericValue()

> **numericValue**(`value`, `typeName`?): `undefined` \| `number`

Given a type name as a hint, do our best to convert a field value to a
number.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](../../README.md#fieldvalue) |
| `typeName`? | `string` |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L134)

***

### objectValue()

> **objectValue**(`value`): `undefined` \| `object`

Extract object properties from the value.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](../../README.md#fieldvalue) |

#### Returns

`undefined` \| `object`

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L172)

***

### referenced()

> **referenced**(`value`): `undefined` \| `string`

Get the referenced name if the FieldValue is a reference.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](../../README.md#fieldvalue) |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:210](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L210)

***

### serialize()

> **serialize**(`value`): `undefined` \| `string`

Convert the field value to a "defacto-standard" form.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`FieldValue`](../../README.md#fieldvalue) |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L111)

***

### unwrap()

> **unwrap**(`value`, `typeName`?): `undefined` \| `null` \| `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| `object`

Unwrap wrapped values, leave others as-is.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`FieldValue`](../../README.md#fieldvalue) |
| `typeName`? | `string` |

#### Returns

`undefined` \| `null` \| `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| `object`

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:181](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L181)
