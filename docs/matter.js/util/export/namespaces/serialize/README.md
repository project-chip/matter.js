[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [util/export](../../README.md) / serialize

# Namespace: serialize

## Variables

### SERIALIZE

> `const` **SERIALIZE**: *typeof* [`SERIALIZE`](README.md#serialize)

Custom serialization function key.

#### Source

[packages/matter.js/src/util/String.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/String.ts#L187)

## Functions

### asIs()

> **asIs**(`value`): `any`

Mark a value as serialized so the serializer just uses its string
representation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Source

[packages/matter.js/src/util/String.ts:193](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/String.ts#L193)

***

### isPrimitive()

> **isPrimitive**(`value`): `boolean`

Test whether a value serializes as a structure or a primitive.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/util/String.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/String.ts#L208)
