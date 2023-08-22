[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalWritableFabricScopedAttribute

# Interface: ConditionalWritableFabricScopedAttribute<T, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalWritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalWritableFabricScopedAttribute`](../modules/exports_cluster.md#optionalwritablefabricscopedattribute)<`T`, `F`\>

  ↳ **`ConditionalWritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.ConditionalWritableFabricScopedAttribute.md#default)
- [fabricScoped](exports_cluster.ConditionalWritableFabricScopedAttribute.md#fabricscoped)
- [fixed](exports_cluster.ConditionalWritableFabricScopedAttribute.md#fixed)
- [id](exports_cluster.ConditionalWritableFabricScopedAttribute.md#id)
- [isConditional](exports_cluster.ConditionalWritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](exports_cluster.ConditionalWritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](exports_cluster.ConditionalWritableFabricScopedAttribute.md#omitchanges)
- [optional](exports_cluster.ConditionalWritableFabricScopedAttribute.md#optional)
- [optionalIf](exports_cluster.ConditionalWritableFabricScopedAttribute.md#optionalif)
- [persistent](exports_cluster.ConditionalWritableFabricScopedAttribute.md#persistent)
- [readAcl](exports_cluster.ConditionalWritableFabricScopedAttribute.md#readacl)
- [scene](exports_cluster.ConditionalWritableFabricScopedAttribute.md#scene)
- [schema](exports_cluster.ConditionalWritableFabricScopedAttribute.md#schema)
- [unknown](exports_cluster.ConditionalWritableFabricScopedAttribute.md#unknown)
- [writable](exports_cluster.ConditionalWritableFabricScopedAttribute.md#writable)
- [writeAcl](exports_cluster.ConditionalWritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalWritableFabricScopedAttribute.default

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### fabricScoped

• **fabricScoped**: ``true``

#### Inherited from

OptionalWritableFabricScopedAttribute.fabricScoped

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:65

___

### fixed

• **fixed**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.fixed

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:33

___

### id

• **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

OptionalWritableFabricScopedAttribute.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalWritableFabricScopedAttribute.isConditional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:68

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableFabricScopedAttribute.mandatoryIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:40

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.omitChanges

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:35

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalWritableFabricScopedAttribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:44

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableFabricScopedAttribute.optionalIf

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:39

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.persistent

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:32

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalWritableFabricScopedAttribute.readAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:29

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.scene

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

OptionalWritableFabricScopedAttribute.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.unknown

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:41

___

### writable

• **writable**: ``true``

#### Inherited from

OptionalWritableFabricScopedAttribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:53

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalWritableFabricScopedAttribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:36
