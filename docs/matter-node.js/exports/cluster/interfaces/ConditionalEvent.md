[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / ConditionalEvent

# Interface: ConditionalEvent\<T, F\>

## Extends

- [`OptionalEvent`](OptionalEvent.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### id

> **id**: [`EventId`](../../datatype/README.md#eventid)

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`id`](OptionalEvent.md#id)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:165

***

### isConditional

> **isConditional**: `true`

#### Overrides

[`OptionalEvent`](OptionalEvent.md).[`isConditional`](OptionalEvent.md#isconditional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:189

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`mandatoryIf`](OptionalEvent.md#mandatoryif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:172

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`optional`](OptionalEvent.md#optional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:186

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`optionalIf`](OptionalEvent.md#optionalif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:171

***

### priority

> **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`priority`](OptionalEvent.md#priority)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:167

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`readAcl`](OptionalEvent.md#readacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:169

***

### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`schema`](OptionalEvent.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:166

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`unknown`](OptionalEvent.md#unknown)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:173
