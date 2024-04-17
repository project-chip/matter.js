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

[packages/matter.js/src/cluster/Cluster.ts:736](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L736)

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:735](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L735)

___

### readAcl

• `Optional` **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[EventOptions](cluster_export._internal_.EventOptions.md).[readAcl](cluster_export._internal_.EventOptions.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:731](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L731)
