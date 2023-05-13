[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalWritableAttribute

# Interface: OptionalWritableAttribute<T\>

[exports/cluster](../modules/exports_cluster.md).OptionalWritableAttribute

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`T`\>

  ↳ **`OptionalWritableAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.OptionalWritableAttribute.md#default)
- [id](exports_cluster.OptionalWritableAttribute.md#id)
- [omitChanges](exports_cluster.OptionalWritableAttribute.md#omitchanges)
- [optional](exports_cluster.OptionalWritableAttribute.md#optional)
- [persistent](exports_cluster.OptionalWritableAttribute.md#persistent)
- [readAcl](exports_cluster.OptionalWritableAttribute.md#readacl)
- [scene](exports_cluster.OptionalWritableAttribute.md#scene)
- [schema](exports_cluster.OptionalWritableAttribute.md#schema)
- [writable](exports_cluster.OptionalWritableAttribute.md#writable)
- [writeAcl](exports_cluster.OptionalWritableAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalAttribute.default

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:28

___

### id

• **id**: `number`

#### Inherited from

OptionalAttribute.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:19

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalAttribute.omitChanges

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalAttribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalAttribute.persistent

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:25

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalAttribute.readAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:22

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalAttribute.scene

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:24

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

OptionalAttribute.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:20

___

### writable

• **writable**: ``true``

#### Overrides

OptionalAttribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:37

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalAttribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27
