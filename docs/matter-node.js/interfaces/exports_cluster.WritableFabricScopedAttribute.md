[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / WritableFabricScopedAttribute

# Interface: WritableFabricScopedAttribute<T, F\>

[exports/cluster](../modules/exports_cluster.md).WritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`WritableAttribute`](../modules/exports_cluster.md#writableattribute)<`T`, `F`\>

  ↳ **`WritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.WritableFabricScopedAttribute.md#default)
- [fabricScoped](exports_cluster.WritableFabricScopedAttribute.md#fabricscoped)
- [fixed](exports_cluster.WritableFabricScopedAttribute.md#fixed)
- [id](exports_cluster.WritableFabricScopedAttribute.md#id)
- [isConditional](exports_cluster.WritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.WritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.WritableFabricScopedAttribute.md#omitchanges)
- [optional](exports_cluster.WritableFabricScopedAttribute.md#optional)
- [optionalIf](exports_cluster.WritableFabricScopedAttribute.md#optionalif)
- [persistent](exports_cluster.WritableFabricScopedAttribute.md#persistent)
- [readAcl](exports_cluster.WritableFabricScopedAttribute.md#readacl)
- [scene](exports_cluster.WritableFabricScopedAttribute.md#scene)
- [schema](exports_cluster.WritableFabricScopedAttribute.md#schema)
- [unknown](exports_cluster.WritableFabricScopedAttribute.md#unknown)
- [writable](exports_cluster.WritableFabricScopedAttribute.md#writable)
- [writeAcl](exports_cluster.WritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

WritableAttribute.default

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

WritableAttribute.fabricScoped

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:62

___

### fixed

• **fixed**: `boolean`

#### Inherited from

WritableAttribute.fixed

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:33

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

WritableAttribute.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

WritableAttribute.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:38

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

WritableAttribute.mandatoryIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

WritableAttribute.omitChanges

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: `boolean`

#### Inherited from

WritableAttribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:28

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

WritableAttribute.optionalIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

WritableAttribute.persistent

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

WritableAttribute.readAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

WritableAttribute.scene

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

WritableAttribute.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

WritableAttribute.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: ``true``

#### Inherited from

WritableAttribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:50

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

WritableAttribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:36
