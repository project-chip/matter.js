[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalWritableFabricScopedAttribute

# Interface: ConditionalWritableFabricScopedAttribute<T, F\>

[cluster/export](../modules/cluster_export.md).ConditionalWritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalWritableFabricScopedAttribute`](../modules/cluster_export.md#optionalwritablefabricscopedattribute)<`T`, `F`\>

  ↳ **`ConditionalWritableFabricScopedAttribute`**

## Table of contents

### Properties

- [default](cluster_export.ConditionalWritableFabricScopedAttribute.md#default)
- [fabricScoped](cluster_export.ConditionalWritableFabricScopedAttribute.md#fabricscoped)
- [fixed](cluster_export.ConditionalWritableFabricScopedAttribute.md#fixed)
- [id](cluster_export.ConditionalWritableFabricScopedAttribute.md#id)
- [isConditional](cluster_export.ConditionalWritableFabricScopedAttribute.md#isconditional)
- [mandatoryIf](cluster_export.ConditionalWritableFabricScopedAttribute.md#mandatoryif)
- [omitChanges](cluster_export.ConditionalWritableFabricScopedAttribute.md#omitchanges)
- [optional](cluster_export.ConditionalWritableFabricScopedAttribute.md#optional)
- [optionalIf](cluster_export.ConditionalWritableFabricScopedAttribute.md#optionalif)
- [persistent](cluster_export.ConditionalWritableFabricScopedAttribute.md#persistent)
- [readAcl](cluster_export.ConditionalWritableFabricScopedAttribute.md#readacl)
- [scene](cluster_export.ConditionalWritableFabricScopedAttribute.md#scene)
- [schema](cluster_export.ConditionalWritableFabricScopedAttribute.md#schema)
- [timed](cluster_export.ConditionalWritableFabricScopedAttribute.md#timed)
- [unknown](cluster_export.ConditionalWritableFabricScopedAttribute.md#unknown)
- [writable](cluster_export.ConditionalWritableFabricScopedAttribute.md#writable)
- [writeAcl](cluster_export.ConditionalWritableFabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

OptionalWritableFabricScopedAttribute.default

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L48)

___

### fabricScoped

• **fabricScoped**: ``true``

#### Inherited from

OptionalWritableFabricScopedAttribute.fabricScoped

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:84](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L84)

___

### fixed

• **fixed**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.fixed

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L44)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

OptionalWritableFabricScopedAttribute.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:36](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L36)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalWritableFabricScopedAttribute.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:89](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L89)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableFabricScopedAttribute.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L51)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.omitChanges

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L46)

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalWritableFabricScopedAttribute.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:56](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L56)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalWritableFabricScopedAttribute.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L50)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.persistent

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalWritableFabricScopedAttribute.readAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:39](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L39)

___

### scene

• **scene**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.scene

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L41)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

OptionalWritableFabricScopedAttribute.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L37)

___

### timed

• **timed**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.timed

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L43)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalWritableFabricScopedAttribute.unknown

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L52)

___

### writable

• **writable**: ``true``

#### Inherited from

OptionalWritableFabricScopedAttribute.writable

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:68](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L68)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalWritableFabricScopedAttribute.writeAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/Cluster.ts#L47)
