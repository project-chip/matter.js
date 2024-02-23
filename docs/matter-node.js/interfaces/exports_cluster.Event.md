[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / Event

# Interface: Event\<T, F\>

[exports/cluster](../modules/exports_cluster.md).Event

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- **`Event`**

  ↳ [`UnknownEvent`](exports_cluster.UnknownEvent.md)

  ↳ [`OptionalEvent`](exports_cluster.OptionalEvent.md)

## Table of contents

### Properties

- [id](exports_cluster.Event.md#id)
- [isConditional](exports_cluster.Event.md#isconditional)
- [mandatoryIf](exports_cluster.Event.md#mandatoryif)
- [optional](exports_cluster.Event.md#optional)
- [optionalIf](exports_cluster.Event.md#optionalif)
- [priority](exports_cluster.Event.md#priority)
- [readAcl](exports_cluster.Event.md#readacl)
- [schema](exports_cluster.Event.md#schema)
- [unknown](exports_cluster.Event.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:164

___

### isConditional

• **isConditional**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:169

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:171

___

### optional

• **optional**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:167

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:170

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:166

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:168

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:165

___

### unknown

• **unknown**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:172
