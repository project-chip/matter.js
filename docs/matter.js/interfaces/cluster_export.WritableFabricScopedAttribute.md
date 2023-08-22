[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / WritableFabricScopedAttribute

# Interface: WritableFabricScopedAttribute<T, F\>

[cluster/export](../modules/cluster_export.md).WritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`WritableAttribute`](../modules/cluster_export.md#writableattribute)<`T`, `F`\>

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
- [unknown](cluster_export.WritableFabricScopedAttribute.md#unknown)
- [writable](cluster_export.WritableFabricScopedAttribute.md#writable)
- [writeAcl](cluster_export.WritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

WritableAttribute.default

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L46)

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

WritableAttribute.fabricScoped

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:78](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L78)

___

### fixed

• **fixed**: `boolean`

#### Inherited from

WritableAttribute.fixed

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

WritableAttribute.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L35)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

WritableAttribute.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L47)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

WritableAttribute.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L49)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

WritableAttribute.omitChanges

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L44)

___

### optional

• **optional**: `boolean`

#### Inherited from

WritableAttribute.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L37)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

WritableAttribute.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L48)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

WritableAttribute.persistent

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L41)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

WritableAttribute.readAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L38)

___

### scene

• **scene**: `boolean`

#### Inherited from

WritableAttribute.scene

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L40)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

WritableAttribute.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L36)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

WritableAttribute.unknown

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L50)

___

### writable

• **writable**: ``true``

#### Inherited from

WritableAttribute.writable

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:62](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L62)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

WritableAttribute.writeAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L45)
