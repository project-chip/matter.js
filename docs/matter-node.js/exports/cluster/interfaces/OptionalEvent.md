[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / OptionalEvent

# Interface: OptionalEvent\<T, F\>

## Extends

- [`Event`](Event.md)\<`T`, `F`\>

## Extended by

- [`ConditionalEvent`](ConditionalEvent.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### id

> **id**: [`EventId`](../../datatype/README.md#eventid)

#### Inherited from

[`Event`](Event.md).[`id`](Event.md#id)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:165

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`Event`](Event.md).[`isConditional`](Event.md#isconditional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:170

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Event`](Event.md).[`mandatoryIf`](Event.md#mandatoryif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:172

***

### optional

> **optional**: `true`

#### Overrides

[`Event`](Event.md).[`optional`](Event.md#optional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:186

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Event`](Event.md).[`optionalIf`](Event.md#optionalif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:171

***

### priority

> **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Inherited from

[`Event`](Event.md).[`priority`](Event.md#priority)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:167

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`Event`](Event.md).[`readAcl`](Event.md#readacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:169

***

### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`Event`](Event.md).[`schema`](Event.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:166

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`Event`](Event.md).[`unknown`](Event.md#unknown)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:173
