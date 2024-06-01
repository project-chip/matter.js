[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / OptionalCommand

# Interface: OptionalCommand\<RequestT, ResponseT, F\>

## Extends

- [`Command`](Command.md)\<`RequestT`, `ResponseT`, `F`\>

## Extended by

- [`ConditionalCommand`](ConditionalCommand.md)

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

[`Command`](Command.md).[`invokeAcl`](Command.md#invokeacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:605](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L605)

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`Command`](Command.md).[`isConditional`](Command.md#isconditional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:607](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L607)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Command`](Command.md).[`mandatoryIf`](Command.md#mandatoryif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:608](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L608)

***

### optional

> **optional**: `true`

#### Overrides

[`Command`](Command.md).[`optional`](Command.md#optional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:613](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L613)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Command`](Command.md).[`optionalIf`](Command.md#optionalif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:609](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L609)

***

### requestId

> **requestId**: [`CommandId`](../../../datatype/export/README.md#commandid)

#### Inherited from

[`Command`](Command.md).[`requestId`](Command.md#requestid)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:601](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L601)

***

### requestSchema

> **requestSchema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`RequestT`\>

#### Inherited from

[`Command`](Command.md).[`requestSchema`](Command.md#requestschema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:602](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L602)

***

### responseId

> **responseId**: [`CommandId`](../../../datatype/export/README.md#commandid)

#### Inherited from

[`Command`](Command.md).[`responseId`](Command.md#responseid)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:603](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L603)

***

### responseSchema

> **responseSchema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`ResponseT`\>

#### Inherited from

[`Command`](Command.md).[`responseSchema`](Command.md#responseschema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:604](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L604)

***

### timed

> **timed**: `boolean`

#### Inherited from

[`Command`](Command.md).[`timed`](Command.md#timed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:606](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L606)
