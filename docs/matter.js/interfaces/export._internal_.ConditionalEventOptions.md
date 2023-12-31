[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [\<internal\>](../modules/export._internal_.md) / ConditionalEventOptions

# Interface: ConditionalEventOptions\<F\>

[export](../modules/export.md).[\<internal\>](../modules/export._internal_.md).ConditionalEventOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`EventOptions`](export._internal_.EventOptions.md)

  ↳ **`ConditionalEventOptions`**

## Table of contents

### Properties

- [mandatoryIf](export._internal_.ConditionalEventOptions.md#mandatoryif)
- [optionalIf](export._internal_.ConditionalEventOptions.md#optionalif)
- [readAcl](export._internal_.ConditionalEventOptions.md#readacl)

## Properties

### mandatoryIf

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:735](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L735)

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:734](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L734)

___

### readAcl

• `Optional` **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[EventOptions](export._internal_.EventOptions.md).[readAcl](export._internal_.EventOptions.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:730](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/Cluster.ts#L730)
