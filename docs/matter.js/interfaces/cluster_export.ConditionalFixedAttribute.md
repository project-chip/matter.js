[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalFixedAttribute

# Interface: ConditionalFixedAttribute\<T, F\>

[cluster/export](../modules/cluster_export.md).ConditionalFixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`T`, `F`\>

  ↳ **`ConditionalFixedAttribute`**

## Table of contents

### Properties

- [default](cluster_export.ConditionalFixedAttribute.md#default)
- [fabricScoped](cluster_export.ConditionalFixedAttribute.md#fabricscoped)
- [fixed](cluster_export.ConditionalFixedAttribute.md#fixed)
- [id](cluster_export.ConditionalFixedAttribute.md#id)
- [isConditional](cluster_export.ConditionalFixedAttribute.md#isconditional)
- [mandatoryIf](cluster_export.ConditionalFixedAttribute.md#mandatoryif)
- [omitChanges](cluster_export.ConditionalFixedAttribute.md#omitchanges)
- [optional](cluster_export.ConditionalFixedAttribute.md#optional)
- [optionalIf](cluster_export.ConditionalFixedAttribute.md#optionalif)
- [persistent](cluster_export.ConditionalFixedAttribute.md#persistent)
- [readAcl](cluster_export.ConditionalFixedAttribute.md#readacl)
- [scene](cluster_export.ConditionalFixedAttribute.md#scene)
- [schema](cluster_export.ConditionalFixedAttribute.md#schema)
- [timed](cluster_export.ConditionalFixedAttribute.md#timed)
- [unknown](cluster_export.ConditionalFixedAttribute.md#unknown)
- [writable](cluster_export.ConditionalFixedAttribute.md#writable)
- [writeAcl](cluster_export.ConditionalFixedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[default](cluster_export.OptionalFixedAttribute.md#default)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L49)

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[fabricScoped](cluster_export.OptionalFixedAttribute.md#fabricscoped)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L46)

___

### fixed

• **fixed**: ``true``

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[fixed](cluster_export.OptionalFixedAttribute.md#fixed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:102](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L102)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[id](cluster_export.OptionalFixedAttribute.md#id)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L37)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[isConditional](cluster_export.OptionalFixedAttribute.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:106](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L106)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[mandatoryIf](cluster_export.OptionalFixedAttribute.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L52)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[omitChanges](cluster_export.OptionalFixedAttribute.md#omitchanges)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L47)

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[optional](cluster_export.OptionalFixedAttribute.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:57](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L57)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[optionalIf](cluster_export.OptionalFixedAttribute.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L51)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[persistent](cluster_export.OptionalFixedAttribute.md#persistent)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L43)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[readAcl](cluster_export.OptionalFixedAttribute.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L40)

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[scene](cluster_export.OptionalFixedAttribute.md#scene)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[schema](cluster_export.OptionalFixedAttribute.md#schema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L38)

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[timed](cluster_export.OptionalFixedAttribute.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L44)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[unknown](cluster_export.OptionalFixedAttribute.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:53](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L53)

___

### writable

• **writable**: `boolean`

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[writable](cluster_export.OptionalFixedAttribute.md#writable)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L41)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[OptionalFixedAttribute](cluster_export.OptionalFixedAttribute.md).[writeAcl](cluster_export.OptionalFixedAttribute.md#writeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L48)
