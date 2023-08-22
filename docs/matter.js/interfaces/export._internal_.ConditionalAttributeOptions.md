[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / ConditionalAttributeOptions

# Interface: ConditionalAttributeOptions<T, F\>

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).ConditionalAttributeOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`AttributeOptions`](export._internal_.AttributeOptions.md)<`T`\>

  ↳ **`ConditionalAttributeOptions`**

## Table of contents

### Properties

- [default](export._internal_.ConditionalAttributeOptions.md#default)
- [mandatoryIf](export._internal_.ConditionalAttributeOptions.md#mandatoryif)
- [omitChanges](export._internal_.ConditionalAttributeOptions.md#omitchanges)
- [optionalIf](export._internal_.ConditionalAttributeOptions.md#optionalif)
- [persistent](export._internal_.ConditionalAttributeOptions.md#persistent)
- [readAcl](export._internal_.ConditionalAttributeOptions.md#readacl)
- [scene](export._internal_.ConditionalAttributeOptions.md#scene)
- [writeAcl](export._internal_.ConditionalAttributeOptions.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[default](export._internal_.AttributeOptions.md#default)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L112)

___

### mandatoryIf

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L119)

___

### omitChanges

• `Optional` **omitChanges**: `boolean`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[omitChanges](export._internal_.AttributeOptions.md#omitchanges)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L111)

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:118](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L118)

___

### persistent

• `Optional` **persistent**: `boolean`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[persistent](export._internal_.AttributeOptions.md#persistent)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L110)

___

### readAcl

• `Optional` **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[readAcl](export._internal_.AttributeOptions.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L113)

___

### scene

• `Optional` **scene**: `boolean`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[scene](export._internal_.AttributeOptions.md#scene)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L109)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[writeAcl](export._internal_.AttributeOptions.md#writeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:114](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L114)
