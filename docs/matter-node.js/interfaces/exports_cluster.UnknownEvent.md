[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / UnknownEvent

# Interface: UnknownEvent\<F\>

[exports/cluster](../modules/exports_cluster.md).UnknownEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Event`](exports_cluster.Event.md)\<`any`, `F`\>

  ↳ **`UnknownEvent`**

## Table of contents

### Properties

- [id](exports_cluster.UnknownEvent.md#id)
- [isConditional](exports_cluster.UnknownEvent.md#isconditional)
- [mandatoryIf](exports_cluster.UnknownEvent.md#mandatoryif)
- [optional](exports_cluster.UnknownEvent.md#optional)
- [optionalIf](exports_cluster.UnknownEvent.md#optionalif)
- [priority](exports_cluster.UnknownEvent.md#priority)
- [readAcl](exports_cluster.UnknownEvent.md#readacl)
- [schema](exports_cluster.UnknownEvent.md#schema)
- [unknown](exports_cluster.UnknownEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

[Event](exports_cluster.Event.md).[id](exports_cluster.Event.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:164

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[Event](exports_cluster.Event.md).[isConditional](exports_cluster.Event.md#isconditional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:169

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Event](exports_cluster.Event.md).[mandatoryIf](exports_cluster.Event.md#mandatoryif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:171

___

### optional

• **optional**: `boolean`

#### Inherited from

[Event](exports_cluster.Event.md).[optional](exports_cluster.Event.md#optional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:167

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Event](exports_cluster.Event.md).[optionalIf](exports_cluster.Event.md#optionalif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:170

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

[Event](exports_cluster.Event.md).[priority](exports_cluster.Event.md#priority)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:166

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[Event](exports_cluster.Event.md).[readAcl](exports_cluster.Event.md#readacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:168

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`any`\>

#### Inherited from

[Event](exports_cluster.Event.md).[schema](exports_cluster.Event.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:165

___

### unknown

• **unknown**: ``true``

#### Overrides

[Event](exports_cluster.Event.md).[unknown](exports_cluster.Event.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:175
