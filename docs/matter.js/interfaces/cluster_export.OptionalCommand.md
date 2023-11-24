[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / OptionalCommand

# Interface: OptionalCommand<RequestT, ResponseT, F\>

[cluster/export](../modules/cluster_export.md).OptionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Command`](../modules/cluster_export.md#command)<`RequestT`, `ResponseT`, `F`\>

  ↳ **`OptionalCommand`**

## Table of contents

### Properties

- [invokeAcl](cluster_export.OptionalCommand.md#invokeacl)
- [isConditional](cluster_export.OptionalCommand.md#isconditional)
- [mandatoryIf](cluster_export.OptionalCommand.md#mandatoryif)
- [optional](cluster_export.OptionalCommand.md#optional)
- [optionalIf](cluster_export.OptionalCommand.md#optionalif)
- [requestId](cluster_export.OptionalCommand.md#requestid)
- [requestSchema](cluster_export.OptionalCommand.md#requestschema)
- [responseId](cluster_export.OptionalCommand.md#responseid)
- [responseSchema](cluster_export.OptionalCommand.md#responseschema)
- [timed](cluster_export.OptionalCommand.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

Command.invokeAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:604](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/Cluster.ts#L604)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Command.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:606](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/Cluster.ts#L606)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Command.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:607](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/Cluster.ts#L607)

___

### optional

• **optional**: ``true``

#### Overrides

Command.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:612](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/Cluster.ts#L612)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Command.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:608](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/Cluster.ts#L608)

___

### requestId

• **requestId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

Command.requestId

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:600](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/Cluster.ts#L600)

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`RequestT`\>

#### Inherited from

Command.requestSchema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:601](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/Cluster.ts#L601)

___

### responseId

• **responseId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

Command.responseId

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:602](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/Cluster.ts#L602)

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`ResponseT`\>

#### Inherited from

Command.responseSchema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:603](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/Cluster.ts#L603)

___

### timed

• **timed**: `boolean`

#### Inherited from

Command.timed

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:605](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/Cluster.ts#L605)
