[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / ConditionalAttribute

# Interface: ConditionalAttribute\<T, F\>

## Extends

- [`OptionalAttribute`](OptionalAttribute.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`default`](OptionalAttribute.md#default)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

***

### fabricScoped

> **fabricScoped**: `boolean`

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`fabricScoped`](OptionalAttribute.md#fabricscoped)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:36

***

### fixed

> **fixed**: `boolean`

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`fixed`](OptionalAttribute.md#fixed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

***

### id

> **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`id`](OptionalAttribute.md#id)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

***

### isConditional

> **isConditional**: `true`

#### Overrides

[`OptionalAttribute`](OptionalAttribute.md).[`isConditional`](OptionalAttribute.md#isconditional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:49

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`mandatoryIf`](OptionalAttribute.md#mandatoryif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`omitChanges`](OptionalAttribute.md#omitchanges)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`optional`](OptionalAttribute.md#optional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:46

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`optionalIf`](OptionalAttribute.md#optionalif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`persistent`](OptionalAttribute.md#persistent)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`readAcl`](OptionalAttribute.md#readacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

***

### scene

> **scene**: `boolean`

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`scene`](OptionalAttribute.md#scene)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

***

### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`schema`](OptionalAttribute.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

***

### timed

> **timed**: `boolean`

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`timed`](OptionalAttribute.md#timed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`unknown`](OptionalAttribute.md#unknown)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:43

***

### writable

> **writable**: `boolean`

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`writable`](OptionalAttribute.md#writable)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:31

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalAttribute`](OptionalAttribute.md).[`writeAcl`](OptionalAttribute.md#writeacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38
