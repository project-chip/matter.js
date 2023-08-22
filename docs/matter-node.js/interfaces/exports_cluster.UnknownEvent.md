[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / UnknownEvent

# Interface: UnknownEvent<F\>

[exports/cluster](../modules/exports_cluster.md).UnknownEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Event`](../modules/exports_cluster.md#event)<`any`, `F`\>

  ↳ **`UnknownEvent`**

## Table of contents

### Properties

- [id](exports_cluster.UnknownEvent.md#id)
- [isConditional](exports_cluster.UnknownEvent.md#isconditional)
- [mandatoryIf](exports_cluster.UnknownEvent.md#mandatoryif)
- [optional](exports_cluster.UnknownEvent.md#optional)
- [optionalIf](exports_cluster.UnknownEvent.md#optionalif)
- [priority](exports_cluster.UnknownEvent.md#priority)
- [schema](exports_cluster.UnknownEvent.md#schema)
- [unknown](exports_cluster.UnknownEvent.md#unknown)

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

• **optional**: `boolean`

#### Inherited from

Event.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:155

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

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`any`\>

#### Inherited from

Event.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:153

___

### unknown

• **unknown**: ``true``

#### Overrides

Event.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:162
