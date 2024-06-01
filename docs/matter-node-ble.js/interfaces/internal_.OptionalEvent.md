[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / OptionalEvent

# Interface: OptionalEvent\<T, F\>

[\<internal\>](../modules/internal_.md).OptionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`Event`](internal_.Event.md)\<`T`, `F`\>

  ↳ **`OptionalEvent`**

## Table of contents

### Properties

- [id](internal_.OptionalEvent.md#id)
- [isConditional](internal_.OptionalEvent.md#isconditional)
- [mandatoryIf](internal_.OptionalEvent.md#mandatoryif)
- [optional](internal_.OptionalEvent.md#optional)
- [optionalIf](internal_.OptionalEvent.md#optionalif)
- [priority](internal_.OptionalEvent.md#priority)
- [readAcl](internal_.OptionalEvent.md#readacl)
- [schema](internal_.OptionalEvent.md#schema)
- [unknown](internal_.OptionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/internal_.md#eventid)

#### Inherited from

[Event](internal_.Event.md).[id](internal_.Event.md#id)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:165

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[Event](internal_.Event.md).[isConditional](internal_.Event.md#isconditional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:170

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Event](internal_.Event.md).[mandatoryIf](internal_.Event.md#mandatoryif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:172

___

### optional

• **optional**: ``true``

#### Overrides

[Event](internal_.Event.md).[optional](internal_.Event.md#optional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:186

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Event](internal_.Event.md).[optionalIf](internal_.Event.md#optionalif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:171

___

### priority

• **priority**: [`EventPriority`](../enums/internal_.EventPriority.md)

#### Inherited from

[Event](internal_.Event.md).[priority](internal_.Event.md#priority)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:167

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

[Event](internal_.Event.md).[readAcl](internal_.Event.md#readacl)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:169

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`T`\>

#### Inherited from

[Event](internal_.Event.md).[schema](internal_.Event.md#schema)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:166

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[Event](internal_.Event.md).[unknown](internal_.Event.md#unknown)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:173
