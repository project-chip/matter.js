[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalCommand

# Interface: ConditionalCommand<RequestT, ResponseT, F\>

[cluster/export](../modules/cluster_export.md).ConditionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalCommand`](../modules/cluster_export.md#optionalcommand)<`RequestT`, `ResponseT`, `F`\>

  ↳ **`ConditionalCommand`**

## Table of contents

### Properties

- [invokeAcl](cluster_export.ConditionalCommand.md#invokeacl)
- [isConditional](cluster_export.ConditionalCommand.md#isconditional)
- [mandatoryIf](cluster_export.ConditionalCommand.md#mandatoryif)
- [optional](cluster_export.ConditionalCommand.md#optional)
- [optionalIf](cluster_export.ConditionalCommand.md#optionalif)
- [requestId](cluster_export.ConditionalCommand.md#requestid)
- [requestSchema](cluster_export.ConditionalCommand.md#requestschema)
- [responseId](cluster_export.ConditionalCommand.md#responseid)
- [responseSchema](cluster_export.ConditionalCommand.md#responseschema)
- [timed](cluster_export.ConditionalCommand.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalCommand.invokeAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:604](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L604)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalCommand.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:617](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L617)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalCommand.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:607](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L607)

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalCommand.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:612](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L612)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalCommand.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:608](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L608)

___

### requestId

• **requestId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

OptionalCommand.requestId

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:600](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L600)

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`RequestT`\>

#### Inherited from

OptionalCommand.requestSchema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:601](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L601)

___

### responseId

• **responseId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

OptionalCommand.responseId

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:602](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L602)

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`ResponseT`\>

#### Inherited from

OptionalCommand.responseSchema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:603](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L603)

___

### timed

• **timed**: `boolean`

#### Inherited from

OptionalCommand.timed

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:605](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L605)
