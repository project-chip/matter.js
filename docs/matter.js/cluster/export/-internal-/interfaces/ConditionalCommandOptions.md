[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / [\<internal\>](../README.md) / ConditionalCommandOptions

# Interface: ConditionalCommandOptions\<F\>

## Extends

- [`CommandOptions`](CommandOptions.md)

## Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../../schema/export/README.md#bitschema) |

## Properties

### invokeAcl?

> `optional` **invokeAcl**: [`AccessLevel`](../../enumerations/AccessLevel.md)

#### Inherited from

[`CommandOptions`](CommandOptions.md).[`invokeAcl`](CommandOptions.md#invokeacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:635](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L635)

***

### mandatoryIf?

> `optional` **mandatoryIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:641](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L641)

***

### optionalIf?

> `optional` **optionalIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:640](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L640)

***

### timed?

> `optional` **timed**: `boolean`

#### Inherited from

[`CommandOptions`](CommandOptions.md).[`timed`](CommandOptions.md#timed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:636](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L636)
