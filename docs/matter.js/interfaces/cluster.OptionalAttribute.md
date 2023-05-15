[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / OptionalAttribute

# Interface: OptionalAttribute<T\>

[cluster](../modules/cluster.md).OptionalAttribute

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Attribute`](../modules/cluster.md#attribute)<`T`\>

  ↳ **`OptionalAttribute`**

## Table of contents

### Properties

- [default](cluster.OptionalAttribute.md#default)
- [id](cluster.OptionalAttribute.md#id)
- [omitChanges](cluster.OptionalAttribute.md#omitchanges)
- [optional](cluster.OptionalAttribute.md#optional)
- [persistent](cluster.OptionalAttribute.md#persistent)
- [readAcl](cluster.OptionalAttribute.md#readacl)
- [scene](cluster.OptionalAttribute.md#scene)
- [schema](cluster.OptionalAttribute.md#schema)
- [writable](cluster.OptionalAttribute.md#writable)
- [writeAcl](cluster.OptionalAttribute.md#writeacl)

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

• **optional**: ``true``

#### Overrides

Attribute.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L27)

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

• **writable**: `boolean`

#### Inherited from

Attribute.writable

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster.AccessLevel.md)

#### Inherited from

Attribute.writeAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)
