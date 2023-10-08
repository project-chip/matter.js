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
- [timed](cluster_export.ConditionalWritableAttribute.md#timed)
- [unknown](cluster_export.ConditionalWritableAttribute.md#unknown)
- [writable](cluster_export.ConditionalWritableAttribute.md#writable)
- [writeAcl](cluster_export.ConditionalWritableAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalWritableAttribute.default

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:48

___

### fabricScoped

• **fabricScoped**: `boolean`

#### Inherited from

OptionalWritableAttribute.fabricScoped

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:45

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

• **isConditional**: ``true``

#### Overrides

OptionalWritableAttribute.isConditional

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:72

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
