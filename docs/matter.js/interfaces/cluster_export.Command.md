[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / Command

# Interface: Command\<RequestT, ResponseT, F\>

[cluster/export](../modules/cluster_export.md).Command

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- **`Command`**

  ↳ [`OptionalCommand`](cluster_export.OptionalCommand.md)

## Table of contents

### Properties

- [invokeAcl](cluster_export.Command.md#invokeacl)
- [isConditional](cluster_export.Command.md#isconditional)
- [mandatoryIf](cluster_export.Command.md#mandatoryif)
- [optional](cluster_export.Command.md#optional)
- [optionalIf](cluster_export.Command.md#optionalif)
- [requestId](cluster_export.Command.md#requestid)
- [requestSchema](cluster_export.Command.md#requestschema)
- [responseId](cluster_export.Command.md#responseid)
- [responseSchema](cluster_export.Command.md#responseschema)
- [timed](cluster_export.Command.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:603](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L603)

___

### isConditional

• **isConditional**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:605](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L605)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:606](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L606)

___

### optional

• **optional**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:598](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L598)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:607](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L607)

___

### requestId

• **requestId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:599](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L599)

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`RequestT`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:600](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L600)

___

### responseId

• **responseId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:601](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L601)

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`ResponseT`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:602](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L602)

___

### timed

• **timed**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:604](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L604)
