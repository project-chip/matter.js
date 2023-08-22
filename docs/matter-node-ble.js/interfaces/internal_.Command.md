[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Command

# Interface: Command<RequestT, ResponseT, F\>

[<internal>](../modules/internal_.md).Command

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Table of contents

### Properties

- [isConditional](internal_.Command.md#isconditional)
- [mandatoryIf](internal_.Command.md#mandatoryif)
- [optional](internal_.Command.md#optional)
- [optionalIf](internal_.Command.md#optionalif)
- [requestId](internal_.Command.md#requestid)
- [requestSchema](internal_.Command.md#requestschema)
- [responseId](internal_.Command.md#responseid)
- [responseSchema](internal_.Command.md#responseschema)

## Properties

### isConditional

• **isConditional**: `boolean`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:127

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:128

___

### optional

• **optional**: `boolean`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:122

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)<`F`\>

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:129

___

### requestId

• **requestId**: [`CommandId`](../modules/internal_.md#commandid)

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:123

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`RequestT`\>

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:124

___

### responseId

• **responseId**: [`CommandId`](../modules/internal_.md#commandid)

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:125

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`ResponseT`\>

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:126
