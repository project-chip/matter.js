[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [\<internal\>](../modules/cluster_export._internal_.md) / ConditionalAttributeOptions

# Interface: ConditionalAttributeOptions\<T, F\>

[cluster/export](../modules/cluster_export.md).[\<internal\>](../modules/cluster_export._internal_.md).ConditionalAttributeOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`AttributeOptions`](cluster_export._internal_.AttributeOptions.md)\<`T`\>

  ↳ **`ConditionalAttributeOptions`**

## Table of contents

### Properties

- [default](cluster_export._internal_.ConditionalAttributeOptions.md#default)
- [mandatoryIf](cluster_export._internal_.ConditionalAttributeOptions.md#mandatoryif)
- [omitChanges](cluster_export._internal_.ConditionalAttributeOptions.md#omitchanges)
- [optionalIf](cluster_export._internal_.ConditionalAttributeOptions.md#optionalif)
- [persistent](cluster_export._internal_.ConditionalAttributeOptions.md#persistent)
- [readAcl](cluster_export._internal_.ConditionalAttributeOptions.md#readacl)
- [scene](cluster_export._internal_.ConditionalAttributeOptions.md#scene)
- [timed](cluster_export._internal_.ConditionalAttributeOptions.md#timed)
- [writeAcl](cluster_export._internal_.ConditionalAttributeOptions.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[AttributeOptions](cluster_export._internal_.AttributeOptions.md).[default](cluster_export._internal_.AttributeOptions.md#default)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L114)

___

### mandatoryIf

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L121)

___

### omitChanges

• `Optional` **omitChanges**: `boolean`

#### Inherited from

[AttributeOptions](cluster_export._internal_.AttributeOptions.md).[omitChanges](cluster_export._internal_.AttributeOptions.md#omitchanges)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L112)

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L120)

___

### persistent

• `Optional` **persistent**: `boolean`

#### Inherited from

[AttributeOptions](cluster_export._internal_.AttributeOptions.md).[persistent](cluster_export._internal_.AttributeOptions.md#persistent)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L111)

___

### readAcl

• `Optional` **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[AttributeOptions](cluster_export._internal_.AttributeOptions.md).[readAcl](cluster_export._internal_.AttributeOptions.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L115)

___

### scene

• `Optional` **scene**: `boolean`

#### Inherited from

[AttributeOptions](cluster_export._internal_.AttributeOptions.md).[scene](cluster_export._internal_.AttributeOptions.md#scene)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L110)

___

### timed

• `Optional` **timed**: `boolean`

#### Inherited from

[AttributeOptions](cluster_export._internal_.AttributeOptions.md).[timed](cluster_export._internal_.AttributeOptions.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L113)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[AttributeOptions](cluster_export._internal_.AttributeOptions.md).[writeAcl](cluster_export._internal_.AttributeOptions.md#writeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L116)
