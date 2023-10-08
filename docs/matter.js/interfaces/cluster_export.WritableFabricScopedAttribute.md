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
- [timed](cluster_export.WritableFabricScopedAttribute.md#timed)
- [unknown](cluster_export.WritableFabricScopedAttribute.md#unknown)
- [writable](cluster_export.WritableFabricScopedAttribute.md#writable)
- [writeAcl](cluster_export.WritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

WritableAttribute.default

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:48

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

WritableAttribute.fabricScoped

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:80

___

### fixed

• **fixed**: `boolean`

#### Inherited from

WritableAttribute.fixed

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:44

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

WritableAttribute.id

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:36

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

WritableAttribute.isConditional

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:49

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

WritableAttribute.mandatoryIf

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:51

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

WritableAttribute.omitChanges

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:46

___

### optional

• **optional**: `boolean`

#### Inherited from

WritableAttribute.optional

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:38

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

WritableAttribute.optionalIf

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:50

___

### persistent

• **persistent**: `boolean`

#### Inherited from

WritableAttribute.persistent

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:42

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

WritableAttribute.readAcl

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:39

___

### scene

• **scene**: `boolean`

#### Inherited from

WritableAttribute.scene

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:41

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

WritableAttribute.schema

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:37

___

### timed

• **timed**: `boolean`

#### Inherited from

WritableAttribute.timed

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:43

___

### unknown

• **unknown**: `boolean`

#### Inherited from

WritableAttribute.unknown

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:52

___

### writable

• **writable**: ``true``

#### Inherited from

WritableAttribute.writable

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:64

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

WritableAttribute.writeAcl

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:47
