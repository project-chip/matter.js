[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / Attribute

# Interface: Attribute\<T, F\>

## Extended by

- [`OptionalAttribute`](OptionalAttribute.md)
- [`WritableAttribute`](WritableAttribute.md)
- [`FabricScopedAttribute`](FabricScopedAttribute.md)
- [`FixedAttribute`](FixedAttribute.md)
- [`UnknownAttribute`](UnknownAttribute.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

***

### fabricScoped

> **fabricScoped**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:36

***

### fixed

> **fixed**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

***

### id

> **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

***

### isConditional

> **isConditional**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:40

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

***

### omitChanges

> **omitChanges**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37

***

### optional

> **optional**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:29

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

***

### persistent

> **persistent**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

***

### scene

> **scene**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

***

### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

***

### timed

> **timed**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

***

### unknown

> **unknown**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:43

***

### writable

> **writable**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:31

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38
