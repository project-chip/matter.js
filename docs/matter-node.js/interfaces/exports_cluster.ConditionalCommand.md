[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalCommand

# Interface: ConditionalCommand\<RequestT, ResponseT, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`RequestT`, `ResponseT`, `F`\>

  ↳ **`ConditionalCommand`**

## Table of contents

### Properties

- [invokeAcl](exports_cluster.ConditionalCommand.md#invokeacl)
- [isConditional](exports_cluster.ConditionalCommand.md#isconditional)
- [mandatoryIf](exports_cluster.ConditionalCommand.md#mandatoryif)
- [optional](exports_cluster.ConditionalCommand.md#optional)
- [optionalIf](exports_cluster.ConditionalCommand.md#optionalif)
- [requestId](exports_cluster.ConditionalCommand.md#requestid)
- [requestSchema](exports_cluster.ConditionalCommand.md#requestschema)
- [responseId](exports_cluster.ConditionalCommand.md#responseid)
- [responseSchema](exports_cluster.ConditionalCommand.md#responseschema)
- [timed](exports_cluster.ConditionalCommand.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[OptionalCommand](exports_cluster.OptionalCommand.md).[invokeAcl](exports_cluster.OptionalCommand.md#invokeacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:130

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalCommand](exports_cluster.OptionalCommand.md).[isConditional](exports_cluster.OptionalCommand.md#isconditional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:140

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalCommand](exports_cluster.OptionalCommand.md).[mandatoryIf](exports_cluster.OptionalCommand.md#mandatoryif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:133

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalCommand](exports_cluster.OptionalCommand.md).[optional](exports_cluster.OptionalCommand.md#optional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:137

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalCommand](exports_cluster.OptionalCommand.md).[optionalIf](exports_cluster.OptionalCommand.md#optionalif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:134

___

### requestId

• **requestId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Inherited from

[OptionalCommand](exports_cluster.OptionalCommand.md).[requestId](exports_cluster.OptionalCommand.md#requestid)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:126

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`RequestT`\>

#### Inherited from

[OptionalCommand](exports_cluster.OptionalCommand.md).[requestSchema](exports_cluster.OptionalCommand.md#requestschema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:127

___

### responseId

• **responseId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Inherited from

[OptionalCommand](exports_cluster.OptionalCommand.md).[responseId](exports_cluster.OptionalCommand.md#responseid)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:128

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`ResponseT`\>

#### Inherited from

[OptionalCommand](exports_cluster.OptionalCommand.md).[responseSchema](exports_cluster.OptionalCommand.md#responseschema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:129

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalCommand](exports_cluster.OptionalCommand.md).[timed](exports_cluster.OptionalCommand.md#timed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:131
