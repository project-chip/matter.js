[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / [\<internal\>](../README.md) / ConditionalAttributeOptions

# Interface: ConditionalAttributeOptions\<T, F\>

## Extends

- [`AttributeOptions`](AttributeOptions.md)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`default`](AttributeOptions.md#default)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:90

***

### mandatoryIf?

> `optional` **mandatoryIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:96

***

### omitChanges?

> `optional` **omitChanges**: `boolean`

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`omitChanges`](AttributeOptions.md#omitchanges)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:88

***

### optionalIf?

> `optional` **optionalIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:95

***

### persistent?

> `optional` **persistent**: `boolean`

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`persistent`](AttributeOptions.md#persistent)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:87

***

### readAcl?

> `optional` **readAcl**: [`AccessLevel`](../../enumerations/AccessLevel.md)

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`readAcl`](AttributeOptions.md#readacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:91

***

### scene?

> `optional` **scene**: `boolean`

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`scene`](AttributeOptions.md#scene)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:86

***

### timed?

> `optional` **timed**: `boolean`

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`timed`](AttributeOptions.md#timed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:89

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../../enumerations/AccessLevel.md)

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`writeAcl`](AttributeOptions.md#writeacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:92
