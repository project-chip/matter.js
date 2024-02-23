[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [\<internal\>](../modules/exports_cluster._internal_.md) / ConditionalAttributeOptions

# Interface: ConditionalAttributeOptions\<T, F\>

[exports/cluster](../modules/exports_cluster.md).[\<internal\>](../modules/exports_cluster._internal_.md).ConditionalAttributeOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`AttributeOptions`](exports_cluster._internal_.AttributeOptions.md)\<`T`\>

  ↳ **`ConditionalAttributeOptions`**

## Table of contents

### Properties

- [default](exports_cluster._internal_.ConditionalAttributeOptions.md#default)
- [mandatoryIf](exports_cluster._internal_.ConditionalAttributeOptions.md#mandatoryif)
- [omitChanges](exports_cluster._internal_.ConditionalAttributeOptions.md#omitchanges)
- [optionalIf](exports_cluster._internal_.ConditionalAttributeOptions.md#optionalif)
- [persistent](exports_cluster._internal_.ConditionalAttributeOptions.md#persistent)
- [readAcl](exports_cluster._internal_.ConditionalAttributeOptions.md#readacl)
- [scene](exports_cluster._internal_.ConditionalAttributeOptions.md#scene)
- [timed](exports_cluster._internal_.ConditionalAttributeOptions.md#timed)
- [writeAcl](exports_cluster._internal_.ConditionalAttributeOptions.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[AttributeOptions](exports_cluster._internal_.AttributeOptions.md).[default](exports_cluster._internal_.AttributeOptions.md#default)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:89

___

### mandatoryIf

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:95

___

### omitChanges

• `Optional` **omitChanges**: `boolean`

#### Inherited from

[AttributeOptions](exports_cluster._internal_.AttributeOptions.md).[omitChanges](exports_cluster._internal_.AttributeOptions.md#omitchanges)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:87

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:94

___

### persistent

• `Optional` **persistent**: `boolean`

#### Inherited from

[AttributeOptions](exports_cluster._internal_.AttributeOptions.md).[persistent](exports_cluster._internal_.AttributeOptions.md#persistent)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:86

___

### readAcl

• `Optional` **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[AttributeOptions](exports_cluster._internal_.AttributeOptions.md).[readAcl](exports_cluster._internal_.AttributeOptions.md#readacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:90

___

### scene

• `Optional` **scene**: `boolean`

#### Inherited from

[AttributeOptions](exports_cluster._internal_.AttributeOptions.md).[scene](exports_cluster._internal_.AttributeOptions.md#scene)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:85

___

### timed

• `Optional` **timed**: `boolean`

#### Inherited from

[AttributeOptions](exports_cluster._internal_.AttributeOptions.md).[timed](exports_cluster._internal_.AttributeOptions.md#timed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:88

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[AttributeOptions](exports_cluster._internal_.AttributeOptions.md).[writeAcl](exports_cluster._internal_.AttributeOptions.md#writeacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:91
