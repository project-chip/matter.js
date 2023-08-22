[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalWritableAttribute

# Interface: ConditionalWritableAttribute<T, F\>

[cluster/export](../modules/cluster_export.md).ConditionalWritableAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalWritableAttribute`](../modules/cluster_export.md#optionalwritableattribute)<`T`, `F`\>

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
- [unknown](cluster_export.ConditionalWritableAttribute.md#unknown)
- [writable](cluster_export.ConditionalWritableAttribute.md#writable)
- [writeAcl](cluster_export.ConditionalWritableAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalWritableAttribute.default

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L46)

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

OptionalWritableAttribute.fabricScoped

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L43)

___

### fixed

• **fixed**: `boolean`

#### Inherited from

OptionalWritableAttribute.fixed

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

OptionalWritableAttribute.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L35)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalWritableAttribute.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:70](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L70)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableAttribute.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L49)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalWritableAttribute.omitChanges

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L44)

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalWritableAttribute.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:54](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L54)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableAttribute.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L48)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalWritableAttribute.persistent

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L41)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalWritableAttribute.readAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L38)

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalWritableAttribute.scene

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L40)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

OptionalWritableAttribute.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L36)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalWritableAttribute.unknown

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L50)

___

### writable

• **writable**: ``true``

#### Inherited from

OptionalWritableAttribute.writable

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:66](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L66)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalWritableAttribute.writeAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L45)
