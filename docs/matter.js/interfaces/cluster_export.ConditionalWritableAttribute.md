[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalWritableAttribute

# Interface: ConditionalWritableAttribute\<T, F\>

[cluster/export](../modules/cluster_export.md).ConditionalWritableAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`T`, `F`\>

  ↳ **`ConditionalWritableAttribute`**

## Table of contents

### Properties

- [default](cluster_export.ConditionalWritableAttribute.md#default)
- [fabricScoped](cluster_export.ConditionalWritableAttribute.md#fabricscoped)
- [fixed](cluster_export.ConditionalWritableAttribute.md#fixed)
- [id](cluster_export.ConditionalWritableAttribute.md#id)
- [isConditional](cluster_export.ConditionalWritableAttribute.md#isconditional)
- [mandatoryIf](cluster_export.ConditionalWritableAttribute.md#mandatoryif)
- [omitChanges](cluster_export.ConditionalWritableAttribute.md#omitchanges)
- [optional](cluster_export.ConditionalWritableAttribute.md#optional)
- [optionalIf](cluster_export.ConditionalWritableAttribute.md#optionalif)
- [persistent](cluster_export.ConditionalWritableAttribute.md#persistent)
- [readAcl](cluster_export.ConditionalWritableAttribute.md#readacl)
- [scene](cluster_export.ConditionalWritableAttribute.md#scene)
- [schema](cluster_export.ConditionalWritableAttribute.md#schema)
- [timed](cluster_export.ConditionalWritableAttribute.md#timed)
- [unknown](cluster_export.ConditionalWritableAttribute.md#unknown)
- [writable](cluster_export.ConditionalWritableAttribute.md#writable)
- [writeAcl](cluster_export.ConditionalWritableAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[default](cluster_export.OptionalWritableAttribute.md#default)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L49)

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[fabricScoped](cluster_export.OptionalWritableAttribute.md#fabricscoped)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L46)

___

### fixed

• **fixed**: `boolean`

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[fixed](cluster_export.OptionalWritableAttribute.md#fixed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L45)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[id](cluster_export.OptionalWritableAttribute.md#id)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L37)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[isConditional](cluster_export.OptionalWritableAttribute.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:73](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L73)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[mandatoryIf](cluster_export.OptionalWritableAttribute.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L52)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[omitChanges](cluster_export.OptionalWritableAttribute.md#omitchanges)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L47)

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[optional](cluster_export.OptionalWritableAttribute.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:57](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L57)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[optionalIf](cluster_export.OptionalWritableAttribute.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L51)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[persistent](cluster_export.OptionalWritableAttribute.md#persistent)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L43)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[readAcl](cluster_export.OptionalWritableAttribute.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L40)

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[scene](cluster_export.OptionalWritableAttribute.md#scene)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[schema](cluster_export.OptionalWritableAttribute.md#schema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L38)

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[timed](cluster_export.OptionalWritableAttribute.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L44)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[unknown](cluster_export.OptionalWritableAttribute.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:53](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L53)

___

### writable

• **writable**: ``true``

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[writable](cluster_export.OptionalWritableAttribute.md#writable)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:69](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L69)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[OptionalWritableAttribute](cluster_export.OptionalWritableAttribute.md).[writeAcl](cluster_export.OptionalWritableAttribute.md#writeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/Cluster.ts#L48)
