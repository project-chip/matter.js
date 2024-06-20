[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalWritableFabricScopedAttribute

# Interface: ConditionalWritableFabricScopedAttribute\<T, F\>

[cluster/export](../modules/cluster_export.md).ConditionalWritableFabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<`T`, `F`\>

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

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[default](cluster_export.OptionalWritableFabricScopedAttribute.md#default)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L49)

___

### fabricScoped

• **fabricScoped**: ``true``

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[fabricScoped](cluster_export.OptionalWritableFabricScopedAttribute.md#fabricscoped)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:85](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L85)

___

### fixed

• **fixed**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[fixed](cluster_export.OptionalWritableFabricScopedAttribute.md#fixed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L45)

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[id](cluster_export.OptionalWritableFabricScopedAttribute.md#id)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L37)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[isConditional](cluster_export.OptionalWritableFabricScopedAttribute.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:90](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L90)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[mandatoryIf](cluster_export.OptionalWritableFabricScopedAttribute.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L52)

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[omitChanges](cluster_export.OptionalWritableFabricScopedAttribute.md#omitchanges)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L47)

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[optional](cluster_export.OptionalWritableFabricScopedAttribute.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:57](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L57)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[optionalIf](cluster_export.OptionalWritableFabricScopedAttribute.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L51)

___

### persistent

• **persistent**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[persistent](cluster_export.OptionalWritableFabricScopedAttribute.md#persistent)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L43)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[readAcl](cluster_export.OptionalWritableFabricScopedAttribute.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L40)

___

### scene

• **scene**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[scene](cluster_export.OptionalWritableFabricScopedAttribute.md#scene)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[schema](cluster_export.OptionalWritableFabricScopedAttribute.md#schema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L38)

___

### timed

• **timed**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[timed](cluster_export.OptionalWritableFabricScopedAttribute.md#timed)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L44)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[unknown](cluster_export.OptionalWritableFabricScopedAttribute.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:53](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L53)

___

### writable

• **writable**: ``true``

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[writable](cluster_export.OptionalWritableFabricScopedAttribute.md#writable)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:69](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L69)

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[OptionalWritableFabricScopedAttribute](cluster_export.OptionalWritableFabricScopedAttribute.md).[writeAcl](cluster_export.OptionalWritableFabricScopedAttribute.md#writeacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/Cluster.ts#L48)
