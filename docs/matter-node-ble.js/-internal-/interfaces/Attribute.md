[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Attribute

# Interface: Attribute\<T, F\>

## Extended by

- [`FabricScopedAttribute`](FabricScopedAttribute.md)
- [`FixedAttribute`](FixedAttribute.md)
- [`OptionalAttribute`](OptionalAttribute.md)
- [`WritableAttribute`](WritableAttribute.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:39

***

### fabricScoped

> **fabricScoped**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:36

***

### fixed

> **fixed**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:35

***

### id

> **id**: [`AttributeId`](../README.md#attributeid)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:27

***

### isConditional

> **isConditional**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:40

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:42

***

### omitChanges

> **omitChanges**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:37

***

### optional

> **optional**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:29

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:41

***

### persistent

> **persistent**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:33

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:30

***

### scene

> **scene**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:32

***

### schema

> **schema**: [`TlvSchema`](../classes/TlvSchema.md)\<`T`\>

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:28

***

### timed

> **timed**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:34

***

### unknown

> **unknown**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:43

***

### writable

> **writable**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:31

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:38
