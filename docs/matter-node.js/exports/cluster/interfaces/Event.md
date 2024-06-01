[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / Event

# Interface: Event\<T, F\>

## Extended by

- [`UnknownEvent`](UnknownEvent.md)
- [`OptionalEvent`](OptionalEvent.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### id

> **id**: [`EventId`](../../datatype/README.md#eventid)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:165

***

### isConditional

> **isConditional**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:170

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:172

***

### optional

> **optional**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:168

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:171

***

### priority

> **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:167

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:169

***

### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:166

***

### unknown

> **unknown**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:173
