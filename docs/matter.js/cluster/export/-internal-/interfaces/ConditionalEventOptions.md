[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / [\<internal\>](../README.md) / ConditionalEventOptions

# Interface: ConditionalEventOptions\<F\>

## Extends

- [`EventOptions`](EventOptions.md)

## Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../../schema/export/README.md#bitschema) |

## Properties

### mandatoryIf?

> `optional` **mandatoryIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:738](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L738)

***

### optionalIf?

> `optional` **optionalIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:737](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L737)

***

### readAcl?

> `optional` **readAcl**: [`AccessLevel`](../../enumerations/AccessLevel.md)

#### Inherited from

[`EventOptions`](EventOptions.md).[`readAcl`](EventOptions.md#readacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:733](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L733)
