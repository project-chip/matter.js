[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / OptionalWritableAttribute

# Interface: OptionalWritableAttribute<T\>

[cluster](../modules/cluster.md).OptionalWritableAttribute

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`T`\>

  ↳ **`OptionalWritableAttribute`**

## Table of contents

### Properties

- [default](cluster.OptionalWritableAttribute.md#default)
- [id](cluster.OptionalWritableAttribute.md#id)
- [omitChanges](cluster.OptionalWritableAttribute.md#omitchanges)
- [optional](cluster.OptionalWritableAttribute.md#optional)
- [persistent](cluster.OptionalWritableAttribute.md#persistent)
- [readAcl](cluster.OptionalWritableAttribute.md#readacl)
- [scene](cluster.OptionalWritableAttribute.md#scene)
- [schema](cluster.OptionalWritableAttribute.md#schema)
- [writable](cluster.OptionalWritableAttribute.md#writable)
- [writeAcl](cluster.OptionalWritableAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalAttribute.default

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### id

• **id**: `number`

#### Inherited from

OptionalAttribute.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalAttribute.omitChanges

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalAttribute.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L27)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalAttribute.persistent

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster.AccessLevel.md)

#### Inherited from

OptionalAttribute.readAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalAttribute.scene

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\>

#### Inherited from

OptionalAttribute.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)

___

### writable

• **writable**: ``true``

#### Overrides

OptionalAttribute.writable

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L29)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster.AccessLevel.md)

#### Inherited from

OptionalAttribute.writeAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L26)
