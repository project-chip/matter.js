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
- [timed](export._internal_.ConditionalAttributeOptions.md#timed)
- [writeAcl](export._internal_.ConditionalAttributeOptions.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[default](export._internal_.AttributeOptions.md#default)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:115](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L115)

___

### mandatoryIf

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:122](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L122)

___

### omitChanges

• `Optional` **omitChanges**: `boolean`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[omitChanges](export._internal_.AttributeOptions.md#omitchanges)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:113](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L113)

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:121](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L121)

___

### persistent

• `Optional` **persistent**: `boolean`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[persistent](export._internal_.AttributeOptions.md#persistent)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:112](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L112)

___

### readAcl

• `Optional` **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[readAcl](export._internal_.AttributeOptions.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:116](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L116)

___

### scene

• `Optional` **scene**: `boolean`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[scene](export._internal_.AttributeOptions.md#scene)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:111](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L111)

___

### timed

• `Optional` **timed**: `boolean`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[timed](export._internal_.AttributeOptions.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:114](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L114)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[writeAcl](export._internal_.AttributeOptions.md#writeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:117](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L117)
