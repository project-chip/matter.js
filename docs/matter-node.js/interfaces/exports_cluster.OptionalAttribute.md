[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalAttribute

# Interface: OptionalAttribute<T\>

[exports/cluster](../modules/exports_cluster.md).OptionalAttribute

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Attribute`](../modules/exports_cluster.md#attribute)<`T`\>

  ↳ **`OptionalAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.OptionalAttribute.md#default)
- [id](exports_cluster.OptionalAttribute.md#id)
- [omitChanges](exports_cluster.OptionalAttribute.md#omitchanges)
- [optional](exports_cluster.OptionalAttribute.md#optional)
- [persistent](exports_cluster.OptionalAttribute.md#persistent)
- [readAcl](exports_cluster.OptionalAttribute.md#readacl)
- [scene](exports_cluster.OptionalAttribute.md#scene)
- [schema](exports_cluster.OptionalAttribute.md#schema)
- [writable](exports_cluster.OptionalAttribute.md#writable)
- [writeAcl](exports_cluster.OptionalAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

Attribute.default

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:28

___

### id

• **id**: `number`

#### Inherited from

Attribute.id

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:19

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

Attribute.omitChanges

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:26

___

### optional

• **optional**: ``true``

#### Overrides

Attribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:31

___

### persistent

• **persistent**: `boolean`

#### Inherited from

Attribute.persistent

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:25

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

Attribute.readAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:22

___

### scene

• **scene**: `boolean`

#### Inherited from

Attribute.scene

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:24

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

Attribute.schema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:20

___

### writable

• **writable**: `boolean`

#### Inherited from

Attribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:23

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

Attribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27
