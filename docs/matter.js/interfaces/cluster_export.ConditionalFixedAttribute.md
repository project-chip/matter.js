[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalFixedAttribute

# Interface: ConditionalFixedAttribute\<T, F\>

[cluster/export](../modules/cluster_export.md).ConditionalFixedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalFixedAttribute`](../modules/cluster_export.md#optionalfixedattribute)\<`T`, `F`\>

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

OptionalFixedAttribute.default

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L48)

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

OptionalFixedAttribute.fabricScoped

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L45)

___

### fixed

• **fixed**: ``true``

#### Inherited from

OptionalFixedAttribute.fixed

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:101](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L101)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

OptionalFixedAttribute.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:36](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L36)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalFixedAttribute.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:105](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L105)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

OptionalFixedAttribute.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L51)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalFixedAttribute.omitChanges

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L46)

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalFixedAttribute.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:56](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L56)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

OptionalFixedAttribute.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L50)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalFixedAttribute.persistent

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalFixedAttribute.readAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:39](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L39)

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalFixedAttribute.scene

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L41)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

OptionalFixedAttribute.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L37)

___

### timed

• **timed**: `boolean`

#### Inherited from

OptionalFixedAttribute.timed

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L43)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalFixedAttribute.unknown

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L52)

___

### writable

• **writable**: `boolean`

#### Inherited from

OptionalFixedAttribute.writable

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L40)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalFixedAttribute.writeAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L47)
