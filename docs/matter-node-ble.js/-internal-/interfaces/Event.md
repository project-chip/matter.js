[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Event

# Interface: Event\<T, F\>

## Extended by

- [`OptionalEvent`](OptionalEvent.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../README.md#bitschema) |

## Properties

### id

> **id**: [`EventId`](../README.md#eventid-1)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:165

***

### isConditional

> **isConditional**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:170

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:172

***

### optional

> **optional**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:168

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:171

***

### priority

> **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:167

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:169

***

### schema

> **schema**: [`TlvSchema`](../classes/TlvSchema.md)\<`T`\>

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:166

***

### unknown

> **unknown**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:173
