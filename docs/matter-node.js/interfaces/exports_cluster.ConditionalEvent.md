[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalEvent

# Interface: ConditionalEvent<T, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalEvent`](../modules/exports_cluster.md#optionalevent)<`T`, `F`\>

  ↳ **`ConditionalEvent`**

## Table of contents

### Properties

- [id](exports_cluster.ConditionalEvent.md#id)
- [isConditional](exports_cluster.ConditionalEvent.md#isconditional)
- [mandatoryIf](exports_cluster.ConditionalEvent.md#mandatoryif)
- [optional](exports_cluster.ConditionalEvent.md#optional)
- [optionalIf](exports_cluster.ConditionalEvent.md#optionalif)
- [priority](exports_cluster.ConditionalEvent.md#priority)
- [schema](exports_cluster.ConditionalEvent.md#schema)
- [unknown](exports_cluster.ConditionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

OptionalEvent.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:152

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalEvent.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:172

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalEvent.mandatoryIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:158

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalEvent.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:169

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalEvent.optionalIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:157

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

OptionalEvent.priority

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:154

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

OptionalEvent.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:153

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalEvent.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:159
