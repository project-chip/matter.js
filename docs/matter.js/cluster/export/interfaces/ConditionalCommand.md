[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / ConditionalCommand

# Interface: ConditionalCommand\<RequestT, ResponseT, F\>

## Extends

- [`OptionalCommand`](OptionalCommand.md)\<`RequestT`, `ResponseT`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `RequestT` |
| `ResponseT` |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

## Properties

### invokeAcl

> **invokeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`invokeAcl`](OptionalCommand.md#invokeacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:605](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L605)

***

### isConditional

> **isConditional**: `true`

#### Overrides

[`OptionalCommand`](OptionalCommand.md).[`isConditional`](OptionalCommand.md#isconditional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:618](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L618)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`mandatoryIf`](OptionalCommand.md#mandatoryif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:608](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L608)

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`optional`](OptionalCommand.md#optional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:613](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L613)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`optionalIf`](OptionalCommand.md#optionalif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:609](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L609)

***

### requestId

> **requestId**: [`CommandId`](../../../datatype/export/README.md#commandid)

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`requestId`](OptionalCommand.md#requestid)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:601](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L601)

***

### requestSchema

> **requestSchema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`RequestT`\>

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`requestSchema`](OptionalCommand.md#requestschema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:602](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L602)

***

### responseId

> **responseId**: [`CommandId`](../../../datatype/export/README.md#commandid)

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`responseId`](OptionalCommand.md#responseid)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:603](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L603)

***

### responseSchema

> **responseSchema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`ResponseT`\>

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`responseSchema`](OptionalCommand.md#responseschema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:604](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L604)

***

### timed

> **timed**: `boolean`

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`timed`](OptionalCommand.md#timed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:606](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L606)
