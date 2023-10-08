[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / ConditionalCommandOptions

# Interface: ConditionalCommandOptions<F\>

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).ConditionalCommandOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`CommandOptions`](export._internal_.CommandOptions.md)

  ↳ **`ConditionalCommandOptions`**

## Table of contents

### Properties

- [invokeAcl](export._internal_.ConditionalCommandOptions.md#invokeacl)
- [mandatoryIf](export._internal_.ConditionalCommandOptions.md#mandatoryif)
- [optionalIf](export._internal_.ConditionalCommandOptions.md#optionalif)
- [timed](export._internal_.ConditionalCommandOptions.md#timed)

## Properties

### invokeAcl

• `Optional` **invokeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[CommandOptions](export._internal_.CommandOptions.md).[invokeAcl](export._internal_.CommandOptions.md#invokeacl)

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:632

___

### mandatoryIf

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:638

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:637

___

### timed

• `Optional` **timed**: `boolean`

#### Inherited from

[CommandOptions](export._internal_.CommandOptions.md).[timed](export._internal_.CommandOptions.md#timed)

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:633
