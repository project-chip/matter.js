[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalEvent

# Interface: OptionalEvent\<T, F\>

[exports/cluster](../modules/exports_cluster.md).OptionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Event`](exports_cluster.Event.md)\<`T`, `F`\>

  ↳ **`OptionalEvent`**

  ↳↳ [`ConditionalEvent`](exports_cluster.ConditionalEvent.md)

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

[Event](exports_cluster.Event.md).[id](exports_cluster.Event.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:165

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[Event](exports_cluster.Event.md).[isConditional](exports_cluster.Event.md#isconditional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:170

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Event](exports_cluster.Event.md).[mandatoryIf](exports_cluster.Event.md#mandatoryif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:172

___

### optional

• **optional**: ``true``

#### Overrides

[Event](exports_cluster.Event.md).[optional](exports_cluster.Event.md#optional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:186

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Event](exports_cluster.Event.md).[optionalIf](exports_cluster.Event.md#optionalif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:171

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

[Event](exports_cluster.Event.md).[priority](exports_cluster.Event.md#priority)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:167

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[Event](exports_cluster.Event.md).[readAcl](exports_cluster.Event.md#readacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:169

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[Event](exports_cluster.Event.md).[schema](exports_cluster.Event.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:166

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[Event](exports_cluster.Event.md).[unknown](exports_cluster.Event.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:173
