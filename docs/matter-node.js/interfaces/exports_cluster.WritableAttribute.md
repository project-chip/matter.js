[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / WritableAttribute

# Interface: WritableAttribute<T\>

[exports/cluster](../modules/exports_cluster.md).WritableAttribute

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Attribute`](../modules/exports_cluster.md#attribute)<`T`\>

  ↳ **`WritableAttribute`**

## Table of contents

### Properties

- [default](exports_cluster.WritableAttribute.md#default)
- [id](exports_cluster.WritableAttribute.md#id)
- [omitChanges](exports_cluster.WritableAttribute.md#omitchanges)
- [optional](exports_cluster.WritableAttribute.md#optional)
- [persistent](exports_cluster.WritableAttribute.md#persistent)
- [readAcl](exports_cluster.WritableAttribute.md#readacl)
- [scene](exports_cluster.WritableAttribute.md#scene)
- [schema](exports_cluster.WritableAttribute.md#schema)
- [writable](exports_cluster.WritableAttribute.md#writable)
- [writeAcl](exports_cluster.WritableAttribute.md#writeacl)

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

• **optional**: `boolean`

#### Inherited from

Attribute.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:21

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

• **writable**: ``true``

#### Overrides

Attribute.writable

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:34

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

Attribute.writeAcl

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:27
