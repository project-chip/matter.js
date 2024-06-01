[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / WritableAttribute

# Interface: WritableAttribute\<T, F\>

## Extends

- [`Attribute`](Attribute.md)\<`T`, `F`\>

## Extended by

- [`WritableFabricScopedAttribute`](WritableFabricScopedAttribute.md)
- [`WritableFixedAttribute`](WritableFixedAttribute.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`Attribute`](Attribute.md).[`default`](Attribute.md#default)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

***

### fabricScoped

> **fabricScoped**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`fabricScoped`](Attribute.md#fabricscoped)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:36

***

### fixed

> **fixed**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`fixed`](Attribute.md#fixed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

***

### id

> **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Inherited from

[`Attribute`](Attribute.md).[`id`](Attribute.md#id)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`isConditional`](Attribute.md#isconditional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:40

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Attribute`](Attribute.md).[`mandatoryIf`](Attribute.md#mandatoryif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`omitChanges`](Attribute.md#omitchanges)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37

***

### optional

> **optional**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`optional`](Attribute.md#optional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:29

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Attribute`](Attribute.md).[`optionalIf`](Attribute.md#optionalif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`persistent`](Attribute.md#persistent)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`Attribute`](Attribute.md).[`readAcl`](Attribute.md#readacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

***

### scene

> **scene**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`scene`](Attribute.md#scene)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

***

### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`Attribute`](Attribute.md).[`schema`](Attribute.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

***

### timed

> **timed**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`timed`](Attribute.md#timed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`unknown`](Attribute.md#unknown)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:43

***

### writable

> **writable**: `true`

#### Overrides

[`Attribute`](Attribute.md).[`writable`](Attribute.md#writable)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:52

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`Attribute`](Attribute.md).[`writeAcl`](Attribute.md#writeacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38
