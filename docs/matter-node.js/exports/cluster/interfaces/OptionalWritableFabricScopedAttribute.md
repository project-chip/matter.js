[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / OptionalWritableFabricScopedAttribute

# Interface: OptionalWritableFabricScopedAttribute\<T, F\>

## Extends

- [`OptionalWritableAttribute`](OptionalWritableAttribute.md)\<`T`, `F`\>

## Extended by

- [`ConditionalWritableFabricScopedAttribute`](ConditionalWritableFabricScopedAttribute.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`default`](OptionalWritableAttribute.md#default)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

***

### fabricScoped

> **fabricScoped**: `true`

#### Overrides

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`fabricScoped`](OptionalWritableAttribute.md#fabricscoped)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:67

***

### fixed

> **fixed**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`fixed`](OptionalWritableAttribute.md#fixed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

***

### id

> **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`id`](OptionalWritableAttribute.md#id)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`isConditional`](OptionalWritableAttribute.md#isconditional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:40

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`mandatoryIf`](OptionalWritableAttribute.md#mandatoryif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`omitChanges`](OptionalWritableAttribute.md#omitchanges)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`optional`](OptionalWritableAttribute.md#optional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:46

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`optionalIf`](OptionalWritableAttribute.md#optionalif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`persistent`](OptionalWritableAttribute.md#persistent)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`readAcl`](OptionalWritableAttribute.md#readacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

***

### scene

> **scene**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`scene`](OptionalWritableAttribute.md#scene)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

***

### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`schema`](OptionalWritableAttribute.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

***

### timed

> **timed**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`timed`](OptionalWritableAttribute.md#timed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`unknown`](OptionalWritableAttribute.md#unknown)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:43

***

### writable

> **writable**: `true`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`writable`](OptionalWritableAttribute.md#writable)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:55

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`writeAcl`](OptionalWritableAttribute.md#writeacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38
