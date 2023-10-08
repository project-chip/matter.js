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
- [readAcl](exports_cluster.ConditionalEvent.md#readacl)
- [schema](exports_cluster.ConditionalEvent.md#schema)
- [unknown](exports_cluster.ConditionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

OptionalEvent.id

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:164

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalEvent.isConditional

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:188

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalEvent.mandatoryIf

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:171

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalEvent.optional

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:185

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalEvent.optionalIf

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:170

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

OptionalEvent.priority

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:166

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalEvent.readAcl

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:168

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

OptionalEvent.schema

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:165

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalEvent.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:172
