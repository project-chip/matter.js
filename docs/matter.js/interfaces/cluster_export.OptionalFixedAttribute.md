[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / OptionalFixedAttribute

# Interface: OptionalFixedAttribute\<T, F\>

[cluster/export](../modules/cluster_export.md).OptionalFixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`T`, `F`\>

  ↳ **`OptionalFixedAttribute`**

  ↳↳ [`ConditionalFixedAttribute`](cluster_export.ConditionalFixedAttribute.md)

## Table of contents

### Properties

- [default](cluster_export.OptionalFixedAttribute.md#default)
- [fabricScoped](cluster_export.OptionalFixedAttribute.md#fabricscoped)
- [fixed](cluster_export.OptionalFixedAttribute.md#fixed)
- [id](cluster_export.OptionalFixedAttribute.md#id)
- [isConditional](cluster_export.OptionalFixedAttribute.md#isconditional)
- [mandatoryIf](cluster_export.OptionalFixedAttribute.md#mandatoryif)
- [omitChanges](cluster_export.OptionalFixedAttribute.md#omitchanges)
- [optional](cluster_export.OptionalFixedAttribute.md#optional)
- [optionalIf](cluster_export.OptionalFixedAttribute.md#optionalif)
- [persistent](cluster_export.OptionalFixedAttribute.md#persistent)
- [readAcl](cluster_export.OptionalFixedAttribute.md#readacl)
- [scene](cluster_export.OptionalFixedAttribute.md#scene)
- [schema](cluster_export.OptionalFixedAttribute.md#schema)
- [timed](cluster_export.OptionalFixedAttribute.md#timed)
- [unknown](cluster_export.OptionalFixedAttribute.md#unknown)
- [writable](cluster_export.OptionalFixedAttribute.md#writable)
- [writeAcl](cluster_export.OptionalFixedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[default](cluster_export.OptionalAttribute.md#default)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L47)

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[fabricScoped](cluster_export.OptionalAttribute.md#fabricscoped)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L44)

___

### fixed

• **fixed**: ``true``

#### Overrides

[OptionalAttribute](cluster_export.OptionalAttribute.md).[fixed](cluster_export.OptionalAttribute.md#fixed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L100)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[id](cluster_export.OptionalAttribute.md#id)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L35)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[isConditional](cluster_export.OptionalAttribute.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L48)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[mandatoryIf](cluster_export.OptionalAttribute.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L50)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[omitChanges](cluster_export.OptionalAttribute.md#omitchanges)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L45)

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[optional](cluster_export.OptionalAttribute.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L55)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[optionalIf](cluster_export.OptionalAttribute.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L49)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[persistent](cluster_export.OptionalAttribute.md#persistent)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L41)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[readAcl](cluster_export.OptionalAttribute.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L38)

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[scene](cluster_export.OptionalAttribute.md#scene)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L40)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[schema](cluster_export.OptionalAttribute.md#schema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L36)

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[timed](cluster_export.OptionalAttribute.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[unknown](cluster_export.OptionalAttribute.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L51)

___

### writable

• **writable**: `boolean`

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[writable](cluster_export.OptionalAttribute.md#writable)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L39)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[OptionalAttribute](cluster_export.OptionalAttribute.md).[writeAcl](cluster_export.OptionalAttribute.md#writeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L46)
