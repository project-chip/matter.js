[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / OptionalEvent

# Interface: OptionalEvent<T, F\>

[<internal>](../modules/internal_.md).OptionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`Event`](../modules/internal_.md#event)<`T`, `F`\>

  ↳ **`OptionalEvent`**

## Table of contents

### Properties

- [id](internal_.OptionalEvent.md#id)
- [isConditional](internal_.OptionalEvent.md#isconditional)
- [mandatoryIf](internal_.OptionalEvent.md#mandatoryif)
- [optional](internal_.OptionalEvent.md#optional)
- [optionalIf](internal_.OptionalEvent.md#optionalif)
- [priority](internal_.OptionalEvent.md#priority)
- [schema](internal_.OptionalEvent.md#schema)
- [unknown](internal_.OptionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/internal_.md#eventid)

#### Inherited from

Event.id

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:152

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Event.isConditional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:156

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Event.mandatoryIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:158

___

### optional

• **optional**: ``true``

#### Overrides

Event.optional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:169

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Event.optionalIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:157

___

### priority

• **priority**: [`EventPriority`](../enums/internal_.EventPriority.md)

#### Inherited from

Event.priority

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:154

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`T`\>

#### Inherited from

Event.schema

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:153

___

### unknown

• **unknown**: `boolean`

#### Inherited from

Event.unknown

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:159
