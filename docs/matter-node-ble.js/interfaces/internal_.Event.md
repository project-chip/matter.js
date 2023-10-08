[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Event

# Interface: Event<T, F\>

[<internal>](../modules/internal_.md).Event

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Table of contents

### Properties

- [id](internal_.Event.md#id)
- [isConditional](internal_.Event.md#isconditional)
- [mandatoryIf](internal_.Event.md#mandatoryif)
- [optional](internal_.Event.md#optional)
- [optionalIf](internal_.Event.md#optionalif)
- [priority](internal_.Event.md#priority)
- [readAcl](internal_.Event.md#readacl)
- [schema](internal_.Event.md#schema)
- [unknown](internal_.Event.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/internal_.md#eventid)

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:164

___

### isConditional

• **isConditional**: `boolean`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:169

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:171

___

### optional

• **optional**: `boolean`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:167

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:170

___

### priority

• **priority**: [`EventPriority`](../enums/internal_.EventPriority.md)

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:166

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:168

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`T`\>

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:165

___

### unknown

• **unknown**: `boolean`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:172
