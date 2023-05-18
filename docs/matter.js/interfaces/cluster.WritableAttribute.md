[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / WritableAttribute

# Interface: WritableAttribute<T\>

[cluster](../modules/cluster.md).WritableAttribute

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Attribute`](../modules/cluster.md#attribute)<`T`\>

  ↳ **`WritableAttribute`**

## Table of contents

### Properties

- [default](cluster.WritableAttribute.md#default)
- [id](cluster.WritableAttribute.md#id)
- [omitChanges](cluster.WritableAttribute.md#omitchanges)
- [optional](cluster.WritableAttribute.md#optional)
- [persistent](cluster.WritableAttribute.md#persistent)
- [readAcl](cluster.WritableAttribute.md#readacl)
- [scene](cluster.WritableAttribute.md#scene)
- [schema](cluster.WritableAttribute.md#schema)
- [writable](cluster.WritableAttribute.md#writable)
- [writeAcl](cluster.WritableAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

Attribute.default

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### id

• **id**: `number`

#### Inherited from

Attribute.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

Attribute.omitChanges

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### optional

• **optional**: `boolean`

#### Inherited from

Attribute.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

Attribute.persistent

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster.AccessLevel.md)

#### Inherited from

Attribute.readAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### scene

• **scene**: `boolean`

#### Inherited from

Attribute.scene

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\>

#### Inherited from

Attribute.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### writable

• **writable**: ``true``

#### Overrides

Attribute.writable

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L28)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster.AccessLevel.md)

#### Inherited from

Attribute.writeAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)
