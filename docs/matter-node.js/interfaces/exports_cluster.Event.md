[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / Event

# Interface: Event<T, F\>

[exports/cluster](../modules/exports_cluster.md).Event

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Table of contents

### Properties

- [id](exports_cluster.Event.md#id)
- [isConditional](exports_cluster.Event.md#isconditional)
- [mandatoryIf](exports_cluster.Event.md#mandatoryif)
- [optional](exports_cluster.Event.md#optional)
- [optionalIf](exports_cluster.Event.md#optionalif)
- [priority](exports_cluster.Event.md#priority)
- [schema](exports_cluster.Event.md#schema)
- [unknown](exports_cluster.Event.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:152

___

### isConditional

• **isConditional**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:156

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:158

___

### optional

• **optional**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:155

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:157

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:154

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:153

___

### unknown

• **unknown**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:159
