[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / Command

# Interface: Command\<RequestT, ResponseT, F\>

## Extended by

- [`OptionalCommand`](OptionalCommand.md)

## Type parameters

| Type parameter |
| :------ |
| `RequestT` |
| `ResponseT` |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

## Properties

### invokeAcl

> **invokeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:605](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L605)

***

### isConditional

> **isConditional**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:607](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L607)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:608](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L608)

***

### optional

> **optional**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:600](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L600)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:609](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L609)

***

### requestId

> **requestId**: [`CommandId`](../../../datatype/export/README.md#commandid)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:601](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L601)

***

### requestSchema

> **requestSchema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`RequestT`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:602](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L602)

***

### responseId

> **responseId**: [`CommandId`](../../../datatype/export/README.md#commandid)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:603](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L603)

***

### responseSchema

> **responseSchema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`ResponseT`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:604](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L604)

***

### timed

> **timed**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:606](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L606)
