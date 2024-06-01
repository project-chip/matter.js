[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / WritableFabricScopedAttribute

# Interface: WritableFabricScopedAttribute\<T, F\>

[cluster/export](../modules/cluster_export.md).WritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`T`, `F`\>

  ↳ **`WritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](cluster_export.WritableFabricScopedAttribute.md#default)
- [fabricScoped](cluster_export.WritableFabricScopedAttribute.md#fabricscoped)
- [fixed](cluster_export.WritableFabricScopedAttribute.md#fixed)
- [id](cluster_export.WritableFabricScopedAttribute.md#id)
- [isConditional](cluster_export.WritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](cluster_export.WritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](cluster_export.WritableFabricScopedAttribute.md#omitchanges)
- [optional](cluster_export.WritableFabricScopedAttribute.md#optional)
- [optionalIf](cluster_export.WritableFabricScopedAttribute.md#optionalif)
- [persistent](cluster_export.WritableFabricScopedAttribute.md#persistent)
- [readAcl](cluster_export.WritableFabricScopedAttribute.md#readacl)
- [scene](cluster_export.WritableFabricScopedAttribute.md#scene)
- [schema](cluster_export.WritableFabricScopedAttribute.md#schema)
- [timed](cluster_export.WritableFabricScopedAttribute.md#timed)
- [unknown](cluster_export.WritableFabricScopedAttribute.md#unknown)
- [writable](cluster_export.WritableFabricScopedAttribute.md#writable)
- [writeAcl](cluster_export.WritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[default](cluster_export.WritableAttribute.md#default)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L49)

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

[WritableAttribute](cluster_export.WritableAttribute.md).[fabricScoped](cluster_export.WritableAttribute.md#fabricscoped)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:81](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L81)

___

### fixed

• **fixed**: `boolean`

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[fixed](cluster_export.WritableAttribute.md#fixed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L45)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[id](cluster_export.WritableAttribute.md#id)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L37)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[isConditional](cluster_export.WritableAttribute.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L50)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[mandatoryIf](cluster_export.WritableAttribute.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L52)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[omitChanges](cluster_export.WritableAttribute.md#omitchanges)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L47)

___

### optional

• **optional**: `boolean`

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[optional](cluster_export.WritableAttribute.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:39](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L39)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[optionalIf](cluster_export.WritableAttribute.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L51)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[persistent](cluster_export.WritableAttribute.md#persistent)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L43)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[readAcl](cluster_export.WritableAttribute.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L40)

___

### scene

• **scene**: `boolean`

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[scene](cluster_export.WritableAttribute.md#scene)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[schema](cluster_export.WritableAttribute.md#schema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L38)

___

### timed

• **timed**: `boolean`

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[timed](cluster_export.WritableAttribute.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L44)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[unknown](cluster_export.WritableAttribute.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:53](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L53)

___

### writable

• **writable**: ``true``

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[writable](cluster_export.WritableAttribute.md#writable)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:65](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L65)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[WritableAttribute](cluster_export.WritableAttribute.md).[writeAcl](cluster_export.WritableAttribute.md#writeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/Cluster.ts#L48)
