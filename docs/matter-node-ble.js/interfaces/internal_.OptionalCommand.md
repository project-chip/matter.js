[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / OptionalCommand

# Interface: OptionalCommand<RequestT, ResponseT, F\>

[<internal>](../modules/internal_.md).OptionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`Command`](../modules/internal_.md#command)<`RequestT`, `ResponseT`, `F`\>

  ↳ **`OptionalCommand`**

## Table of contents

### Properties

- [isConditional](internal_.OptionalCommand.md#isconditional)
- [mandatoryIf](internal_.OptionalCommand.md#mandatoryif)
- [optional](internal_.OptionalCommand.md#optional)
- [optionalIf](internal_.OptionalCommand.md#optionalif)
- [requestId](internal_.OptionalCommand.md#requestid)
- [requestSchema](internal_.OptionalCommand.md#requestschema)
- [responseId](internal_.OptionalCommand.md#responseid)
- [responseSchema](internal_.OptionalCommand.md#responseschema)

## Properties

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Command.isConditional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:127

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Command.mandatoryIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:128

___

### optional

• **optional**: ``true``

#### Overrides

Command.optional

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:132

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Command.optionalIf

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:129

___

### requestId

• **requestId**: [`CommandId`](../modules/internal_.md#commandid)

#### Inherited from

Command.requestId

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:123

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`RequestT`\>

#### Inherited from

Command.requestSchema

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:124

___

### responseId

• **responseId**: [`CommandId`](../modules/internal_.md#commandid)

#### Inherited from

Command.responseId

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:125

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`ResponseT`\>

#### Inherited from

Command.responseSchema

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:126
