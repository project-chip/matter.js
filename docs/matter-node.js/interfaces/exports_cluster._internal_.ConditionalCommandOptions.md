[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [\<internal\>](../modules/exports_cluster._internal_.md) / ConditionalCommandOptions

# Interface: ConditionalCommandOptions\<F\>

[exports/cluster](../modules/exports_cluster.md).[\<internal\>](../modules/exports_cluster._internal_.md).ConditionalCommandOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`CommandOptions`](exports_cluster._internal_.CommandOptions.md)

  ↳ **`ConditionalCommandOptions`**

## Table of contents

### Properties

- [invokeAcl](exports_cluster._internal_.ConditionalCommandOptions.md#invokeacl)
- [mandatoryIf](exports_cluster._internal_.ConditionalCommandOptions.md#mandatoryif)
- [optionalIf](exports_cluster._internal_.ConditionalCommandOptions.md#optionalif)
- [timed](exports_cluster._internal_.ConditionalCommandOptions.md#timed)

## Properties

### invokeAcl

• `Optional` **invokeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[CommandOptions](exports_cluster._internal_.CommandOptions.md).[invokeAcl](exports_cluster._internal_.CommandOptions.md#invokeacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:145

___

### mandatoryIf

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:150

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:149

___

### timed

• `Optional` **timed**: `boolean`

#### Inherited from

[CommandOptions](exports_cluster._internal_.CommandOptions.md).[timed](exports_cluster._internal_.CommandOptions.md#timed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:146
