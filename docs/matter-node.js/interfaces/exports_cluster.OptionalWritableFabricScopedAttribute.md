[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalWritableFabricScopedAttribute

# Interface: OptionalWritableFabricScopedAttribute<T, F\>

[exports/cluster](../modules/exports_cluster.md).OptionalWritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<`T`, `F`\>

  ↳ **`OptionalWritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.OptionalWritableFabricScopedAttribute.md#default)
- [fabricScoped](exports_cluster.OptionalWritableFabricScopedAttribute.md#fabricscoped)
- [fixed](exports_cluster.OptionalWritableFabricScopedAttribute.md#fixed)
- [id](exports_cluster.OptionalWritableFabricScopedAttribute.md#id)
- [isConditional](exports_cluster.OptionalWritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.OptionalWritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.OptionalWritableFabricScopedAttribute.md#omitchanges)
- [optional](exports_cluster.OptionalWritableFabricScopedAttribute.md#optional)
- [optionalIf](exports_cluster.OptionalWritableFabricScopedAttribute.md#optionalif)
- [persistent](exports_cluster.OptionalWritableFabricScopedAttribute.md#persistent)
- [readAcl](exports_cluster.OptionalWritableFabricScopedAttribute.md#readacl)
- [scene](exports_cluster.OptionalWritableFabricScopedAttribute.md#scene)
- [schema](exports_cluster.OptionalWritableFabricScopedAttribute.md#schema)
- [unknown](exports_cluster.OptionalWritableFabricScopedAttribute.md#unknown)
- [writable](exports_cluster.OptionalWritableFabricScopedAttribute.md#writable)
- [writeAcl](exports_cluster.OptionalWritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalWritableAttribute.default

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

OptionalWritableAttribute.fabricScoped

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:65

___

### fixed

• **fixed**: `boolean`

#### Inherited from

OptionalWritableAttribute.fixed

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:33

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

OptionalWritableAttribute.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

OptionalWritableAttribute.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:38

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableAttribute.mandatoryIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalWritableAttribute.omitChanges

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalWritableAttribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:44

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableAttribute.optionalIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalWritableAttribute.persistent

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalWritableAttribute.readAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalWritableAttribute.scene

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

OptionalWritableAttribute.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalWritableAttribute.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: ``true``

#### Inherited from

OptionalWritableAttribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:53

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalWritableAttribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:36
