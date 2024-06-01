[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / WritableFabricScopedAttribute

# Interface: WritableFabricScopedAttribute\<T, F\>

## Extends

- [`WritableAttribute`](WritableAttribute.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`default`](WritableAttribute.md#default)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

***

### fabricScoped

> **fabricScoped**: `true`

#### Overrides

[`WritableAttribute`](WritableAttribute.md).[`fabricScoped`](WritableAttribute.md#fabricscoped)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:64

***

### fixed

> **fixed**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`fixed`](WritableAttribute.md#fixed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

***

### id

> **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`id`](WritableAttribute.md#id)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`isConditional`](WritableAttribute.md#isconditional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:40

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`mandatoryIf`](WritableAttribute.md#mandatoryif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`omitChanges`](WritableAttribute.md#omitchanges)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37

***

### optional

> **optional**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`optional`](WritableAttribute.md#optional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:29

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`optionalIf`](WritableAttribute.md#optionalif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`persistent`](WritableAttribute.md#persistent)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`readAcl`](WritableAttribute.md#readacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

***

### scene

> **scene**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`scene`](WritableAttribute.md#scene)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

***

### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`schema`](WritableAttribute.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

***

### timed

> **timed**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`timed`](WritableAttribute.md#timed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`unknown`](WritableAttribute.md#unknown)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:43

***

### writable

> **writable**: `true`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`writable`](WritableAttribute.md#writable)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:52

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`writeAcl`](WritableAttribute.md#writeacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38
