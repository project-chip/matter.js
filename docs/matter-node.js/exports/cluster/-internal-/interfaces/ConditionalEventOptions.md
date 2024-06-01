[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / [\<internal\>](../README.md) / ConditionalEventOptions

# Interface: ConditionalEventOptions\<F\>

## Extends

- [`EventOptions`](EventOptions.md)

## Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |

## Properties

### mandatoryIf?

> `optional` **mandatoryIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:183

***

### optionalIf?

> `optional` **optionalIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:182

***

### readAcl?

> `optional` **readAcl**: [`AccessLevel`](../../enumerations/AccessLevel.md)

#### Inherited from

[`EventOptions`](EventOptions.md).[`readAcl`](EventOptions.md#readacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:179
