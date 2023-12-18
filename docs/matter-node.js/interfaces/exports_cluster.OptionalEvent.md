[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalEvent

# Interface: OptionalEvent\<T, F\>

[exports/cluster](../modules/exports_cluster.md).OptionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Event`](../modules/exports_cluster.md#event)\<`T`, `F`\>

  ↳ **`OptionalEvent`**

## Table of contents

### Properties

- [id](exports_cluster.OptionalEvent.md#id)
- [isConditional](exports_cluster.OptionalEvent.md#isconditional)
- [mandatoryIf](exports_cluster.OptionalEvent.md#mandatoryif)
- [optional](exports_cluster.OptionalEvent.md#optional)
- [optionalIf](exports_cluster.OptionalEvent.md#optionalif)
- [priority](exports_cluster.OptionalEvent.md#priority)
- [readAcl](exports_cluster.OptionalEvent.md#readacl)
- [schema](exports_cluster.OptionalEvent.md#schema)
- [unknown](exports_cluster.OptionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

Event.id

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:164

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Event.isConditional

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:169

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

Event.mandatoryIf

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:171

___

### optional

• **optional**: ``true``

#### Overrides

Event.optional

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:185

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

Event.optionalIf

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:170

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

Event.priority

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:166

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

Event.readAcl

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:168

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

Event.schema

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:165

___

### unknown

• **unknown**: `boolean`

#### Inherited from

Event.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:172
