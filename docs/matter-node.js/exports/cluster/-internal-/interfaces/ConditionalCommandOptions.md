[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / [\<internal\>](../README.md) / ConditionalCommandOptions

# Interface: ConditionalCommandOptions\<F\>

## Extends

- [`CommandOptions`](CommandOptions.md)

## Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |

## Properties

### invokeAcl?

> `optional` **invokeAcl**: [`AccessLevel`](../../enumerations/AccessLevel.md)

#### Inherited from

[`CommandOptions`](CommandOptions.md).[`invokeAcl`](CommandOptions.md#invokeacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:145

***

### mandatoryIf?

> `optional` **mandatoryIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:150

***

### optionalIf?

> `optional` **optionalIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:149

***

### timed?

> `optional` **timed**: `boolean`

#### Inherited from

[`CommandOptions`](CommandOptions.md).[`timed`](CommandOptions.md#timed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:146
