[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / OptionalWritableFabricScopedAttribute

# Interface: OptionalWritableFabricScopedAttribute<T, F\>

[cluster/export](../modules/cluster_export.md).OptionalWritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalWritableAttribute`](../modules/cluster_export.md#optionalwritableattribute)<`T`, `F`\>

  ↳ **`OptionalWritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](cluster_export.OptionalWritableFabricScopedAttribute.md#default)
- [fabricScoped](cluster_export.OptionalWritableFabricScopedAttribute.md#fabricscoped)
- [fixed](cluster_export.OptionalWritableFabricScopedAttribute.md#fixed)
- [id](cluster_export.OptionalWritableFabricScopedAttribute.md#id)
- [isConditional](cluster_export.OptionalWritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](cluster_export.OptionalWritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](cluster_export.OptionalWritableFabricScopedAttribute.md#omitchanges)
- [optional](cluster_export.OptionalWritableFabricScopedAttribute.md#optional)
- [optionalIf](cluster_export.OptionalWritableFabricScopedAttribute.md#optionalif)
- [persistent](cluster_export.OptionalWritableFabricScopedAttribute.md#persistent)
- [readAcl](cluster_export.OptionalWritableFabricScopedAttribute.md#readacl)
- [scene](cluster_export.OptionalWritableFabricScopedAttribute.md#scene)
- [schema](cluster_export.OptionalWritableFabricScopedAttribute.md#schema)
- [timed](cluster_export.OptionalWritableFabricScopedAttribute.md#timed)
- [unknown](cluster_export.OptionalWritableFabricScopedAttribute.md#unknown)
- [writable](cluster_export.OptionalWritableFabricScopedAttribute.md#writable)
- [writeAcl](cluster_export.OptionalWritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalWritableAttribute.default

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:48

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

OptionalWritableAttribute.fabricScoped

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:84

___

### fixed

• **fixed**: `boolean`

#### Inherited from

OptionalWritableAttribute.fixed

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:44

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

OptionalWritableAttribute.id

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:36

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

OptionalWritableAttribute.isConditional

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:49

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableAttribute.mandatoryIf

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:51

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalWritableAttribute.omitChanges

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:46

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalWritableAttribute.optional

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:56

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableAttribute.optionalIf

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:50

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalWritableAttribute.persistent

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:42

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalWritableAttribute.readAcl

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:39

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalWritableAttribute.scene

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:41

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

OptionalWritableAttribute.schema

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:37

___

### timed

• **timed**: `boolean`

#### Inherited from

OptionalWritableAttribute.timed

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:43

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalWritableAttribute.unknown

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:52

___

### writable

• **writable**: ``true``

#### Inherited from

OptionalWritableAttribute.writable

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:68

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalWritableAttribute.writeAcl

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:47
