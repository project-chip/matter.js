[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalEvent

# Interface: ConditionalEvent\<T, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`T`, `F`\>

  ↳ **`ConditionalEvent`**

## Table of contents

### Properties

- [id](exports_cluster.ConditionalEvent.md#id)
- [isConditional](exports_cluster.ConditionalEvent.md#isconditional)
- [mandatoryIf](exports_cluster.ConditionalEvent.md#mandatoryif)
- [optional](exports_cluster.ConditionalEvent.md#optional)
- [optionalIf](exports_cluster.ConditionalEvent.md#optionalif)
- [priority](exports_cluster.ConditionalEvent.md#priority)
- [readAcl](exports_cluster.ConditionalEvent.md#readacl)
- [schema](exports_cluster.ConditionalEvent.md#schema)
- [unknown](exports_cluster.ConditionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

[OptionalEvent](exports_cluster.OptionalEvent.md).[id](exports_cluster.OptionalEvent.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:165

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalEvent](exports_cluster.OptionalEvent.md).[isConditional](exports_cluster.OptionalEvent.md#isconditional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:189

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalEvent](exports_cluster.OptionalEvent.md).[mandatoryIf](exports_cluster.OptionalEvent.md#mandatoryif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:172

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalEvent](exports_cluster.OptionalEvent.md).[optional](exports_cluster.OptionalEvent.md#optional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:186

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalEvent](exports_cluster.OptionalEvent.md).[optionalIf](exports_cluster.OptionalEvent.md#optionalif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:171

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

[OptionalEvent](exports_cluster.OptionalEvent.md).[priority](exports_cluster.OptionalEvent.md#priority)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:167

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalEvent](exports_cluster.OptionalEvent.md).[readAcl](exports_cluster.OptionalEvent.md#readacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:169

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalEvent](exports_cluster.OptionalEvent.md).[schema](exports_cluster.OptionalEvent.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:166

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalEvent](exports_cluster.OptionalEvent.md).[unknown](exports_cluster.OptionalEvent.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:173
