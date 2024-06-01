[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / OptionalEvent

# Interface: OptionalEvent\<T, F\>

## Extends

- [`Event`](Event.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../README.md#bitschema) |

## Properties

### id

> **id**: [`EventId`](../README.md#eventid-1)

#### Inherited from

[`Event`](Event.md).[`id`](Event.md#id)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:165

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`Event`](Event.md).[`isConditional`](Event.md#isconditional)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:170

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Event`](Event.md).[`mandatoryIf`](Event.md#mandatoryif)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:172

***

### optional

> **optional**: `true`

#### Overrides

[`Event`](Event.md).[`optional`](Event.md#optional)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:186

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Event`](Event.md).[`optionalIf`](Event.md#optionalif)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:171

***

### priority

> **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Inherited from

[`Event`](Event.md).[`priority`](Event.md#priority)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:167

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`Event`](Event.md).[`readAcl`](Event.md#readacl)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:169

***

### schema

> **schema**: [`TlvSchema`](../classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`Event`](Event.md).[`schema`](Event.md#schema)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:166

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`Event`](Event.md).[`unknown`](Event.md#unknown)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:173
