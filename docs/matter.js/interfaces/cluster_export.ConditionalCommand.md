[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalCommand

# Interface: ConditionalCommand\<RequestT, ResponseT, F\>

[cluster/export](../modules/cluster_export.md).ConditionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalCommand`](cluster_export.OptionalCommand.md)\<`RequestT`, `ResponseT`, `F`\>

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

[OptionalCommand](cluster_export.OptionalCommand.md).[invokeAcl](cluster_export.OptionalCommand.md#invokeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:605](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L605)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalCommand](cluster_export.OptionalCommand.md).[isConditional](cluster_export.OptionalCommand.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:618](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L618)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalCommand](cluster_export.OptionalCommand.md).[mandatoryIf](cluster_export.OptionalCommand.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:608](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L608)

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalCommand](cluster_export.OptionalCommand.md).[optional](cluster_export.OptionalCommand.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:613](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L613)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalCommand](cluster_export.OptionalCommand.md).[optionalIf](cluster_export.OptionalCommand.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:609](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L609)

___

### requestId

• **requestId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

[OptionalCommand](cluster_export.OptionalCommand.md).[requestId](cluster_export.OptionalCommand.md#requestid)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:601](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L601)

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`RequestT`\>

#### Inherited from

[OptionalCommand](cluster_export.OptionalCommand.md).[requestSchema](cluster_export.OptionalCommand.md#requestschema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:602](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L602)

___

### responseId

• **responseId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

[OptionalCommand](cluster_export.OptionalCommand.md).[responseId](cluster_export.OptionalCommand.md#responseid)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:603](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L603)

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`ResponseT`\>

#### Inherited from

[OptionalCommand](cluster_export.OptionalCommand.md).[responseSchema](cluster_export.OptionalCommand.md#responseschema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:604](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L604)

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalCommand](cluster_export.OptionalCommand.md).[timed](cluster_export.OptionalCommand.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:606](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L606)
