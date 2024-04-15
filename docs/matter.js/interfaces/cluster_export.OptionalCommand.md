[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / OptionalCommand

# Interface: OptionalCommand\<RequestT, ResponseT, F\>

[cluster/export](../modules/cluster_export.md).OptionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Command`](cluster_export.Command.md)\<`RequestT`, `ResponseT`, `F`\>

  ↳ **`OptionalCommand`**

  ↳↳ [`ConditionalCommand`](cluster_export.ConditionalCommand.md)

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

[Command](cluster_export.Command.md).[invokeAcl](cluster_export.Command.md#invokeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:603](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L603)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[Command](cluster_export.Command.md).[isConditional](cluster_export.Command.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:605](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L605)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Command](cluster_export.Command.md).[mandatoryIf](cluster_export.Command.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:606](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L606)

___

### optional

• **optional**: ``true``

#### Overrides

[Command](cluster_export.Command.md).[optional](cluster_export.Command.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:611](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L611)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Command](cluster_export.Command.md).[optionalIf](cluster_export.Command.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:607](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L607)

___

### requestId

• **requestId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

[Command](cluster_export.Command.md).[requestId](cluster_export.Command.md#requestid)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:599](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L599)

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`RequestT`\>

#### Inherited from

[Command](cluster_export.Command.md).[requestSchema](cluster_export.Command.md#requestschema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:600](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L600)

___

### responseId

• **responseId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

[Command](cluster_export.Command.md).[responseId](cluster_export.Command.md#responseid)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:601](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L601)

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`ResponseT`\>

#### Inherited from

[Command](cluster_export.Command.md).[responseSchema](cluster_export.Command.md#responseschema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:602](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L602)

___

### timed

• **timed**: `boolean`

#### Inherited from

[Command](cluster_export.Command.md).[timed](cluster_export.Command.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:604](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L604)
