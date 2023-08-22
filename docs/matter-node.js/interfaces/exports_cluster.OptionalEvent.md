[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalEvent

# Interface: OptionalEvent<T, F\>

[exports/cluster](../modules/exports_cluster.md).OptionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Event`](../modules/exports_cluster.md#event)<`T`, `F`\>

  ↳ **`OptionalEvent`**

## Table of contents

### Properties

- [id](exports_cluster.OptionalEvent.md#id)
- [isConditional](exports_cluster.OptionalEvent.md#isconditional)
- [mandatoryIf](exports_cluster.OptionalEvent.md#mandatoryif)
- [optional](exports_cluster.OptionalEvent.md#optional)
- [optionalIf](exports_cluster.OptionalEvent.md#optionalif)
- [priority](exports_cluster.OptionalEvent.md#priority)
- [schema](exports_cluster.OptionalEvent.md#schema)
- [unknown](exports_cluster.OptionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

Event.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:152

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Event.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:156

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Event.mandatoryIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:158

___

### optional

• **optional**: ``true``

#### Overrides

Event.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:169

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Event.optionalIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:157

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

Event.priority

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:154

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

Event.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:153

___

### unknown

• **unknown**: `boolean`

#### Inherited from

Event.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:159
