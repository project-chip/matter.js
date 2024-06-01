[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / ConditionalFixedAttribute

# Interface: ConditionalFixedAttribute\<T, F\>

## Extends

- [`OptionalFixedAttribute`](OptionalFixedAttribute.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`default`](OptionalFixedAttribute.md#default)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

***

### fabricScoped

> **fabricScoped**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`fabricScoped`](OptionalFixedAttribute.md#fabricscoped)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:36

***

### fixed

> **fixed**: `true`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`fixed`](OptionalFixedAttribute.md#fixed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:79

***

### id

> **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`id`](OptionalFixedAttribute.md#id)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

***

### isConditional

> **isConditional**: `true`

#### Overrides

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`isConditional`](OptionalFixedAttribute.md#isconditional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:82

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`mandatoryIf`](OptionalFixedAttribute.md#mandatoryif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`omitChanges`](OptionalFixedAttribute.md#omitchanges)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`optional`](OptionalFixedAttribute.md#optional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:46

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`optionalIf`](OptionalFixedAttribute.md#optionalif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`persistent`](OptionalFixedAttribute.md#persistent)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`readAcl`](OptionalFixedAttribute.md#readacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

***

### scene

> **scene**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`scene`](OptionalFixedAttribute.md#scene)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

***

### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`schema`](OptionalFixedAttribute.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

***

### timed

> **timed**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`timed`](OptionalFixedAttribute.md#timed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`unknown`](OptionalFixedAttribute.md#unknown)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:43

***

### writable

> **writable**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`writable`](OptionalFixedAttribute.md#writable)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:31

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`writeAcl`](OptionalFixedAttribute.md#writeacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38
