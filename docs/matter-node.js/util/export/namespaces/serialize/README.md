[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [util/export](../../README.md) / serialize

# Namespace: serialize

## Variables

### SERIALIZE

> `const` **SERIALIZE**: unique `symbol`

Custom serialization function key.

#### Source

packages/matter.js/dist/esm/util/String.d.ts:24

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

packages/matter.js/dist/esm/util/String.d.ts:29

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

packages/matter.js/dist/esm/util/String.d.ts:33
