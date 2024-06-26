[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [\<internal\>](../modules/cluster_export._internal_.md) / ConditionalEventOptions

# Interface: ConditionalEventOptions\<F\>

[cluster/export](../modules/cluster_export.md).[\<internal\>](../modules/cluster_export._internal_.md).ConditionalEventOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`EventOptions`](cluster_export._internal_.EventOptions.md)

  ↳ **`ConditionalEventOptions`**

## Table of contents

### Properties

- [mandatoryIf](cluster_export._internal_.ConditionalEventOptions.md#mandatoryif)
- [optionalIf](cluster_export._internal_.ConditionalEventOptions.md#optionalif)
- [readAcl](cluster_export._internal_.ConditionalEventOptions.md#readacl)

## Properties

### mandatoryIf

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:738](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L738)

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:737](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L737)

___

### readAcl

• `Optional` **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[EventOptions](cluster_export._internal_.EventOptions.md).[readAcl](cluster_export._internal_.EventOptions.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:733](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L733)
