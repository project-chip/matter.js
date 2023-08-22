[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / ConditionalAttributeOptions

# Interface: ConditionalAttributeOptions<T, F\>

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).ConditionalAttributeOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

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

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:87

___

### mandatoryIf

• `Optional` **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:93

___

### omitChanges

• `Optional` **omitChanges**: `boolean`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[omitChanges](export._internal_.AttributeOptions.md#omitchanges)

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:86

___

### optionalIf

• `Optional` **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:92

___

### persistent

• `Optional` **persistent**: `boolean`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[persistent](export._internal_.AttributeOptions.md#persistent)

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:85

___

### readAcl

• `Optional` **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[readAcl](export._internal_.AttributeOptions.md#readacl)

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:88

___

### scene

• `Optional` **scene**: `boolean`

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[scene](export._internal_.AttributeOptions.md#scene)

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:84

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[AttributeOptions](export._internal_.AttributeOptions.md).[writeAcl](export._internal_.AttributeOptions.md#writeacl)

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:89
