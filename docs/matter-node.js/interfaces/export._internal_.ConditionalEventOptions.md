[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / ConditionalEventOptions

# Interface: ConditionalEventOptions<F\>

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).ConditionalEventOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

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

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:182

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:181

___

### readAcl

• `Optional` **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[EventOptions](export._internal_.EventOptions.md).[readAcl](export._internal_.EventOptions.md#readacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:178
