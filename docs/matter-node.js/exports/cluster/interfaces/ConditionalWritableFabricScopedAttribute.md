[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / ConditionalWritableFabricScopedAttribute

# Interface: ConditionalWritableFabricScopedAttribute\<T, F\>

## Extends

- [`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`default`](OptionalWritableFabricScopedAttribute.md#default)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:39

***

### fabricScoped

> **fabricScoped**: `true`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`fabricScoped`](OptionalWritableFabricScopedAttribute.md#fabricscoped)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:67

***

### fixed

> **fixed**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`fixed`](OptionalWritableFabricScopedAttribute.md#fixed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:35

***

### id

> **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`id`](OptionalWritableFabricScopedAttribute.md#id)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:27

***

### isConditional

> **isConditional**: `true`

#### Overrides

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`isConditional`](OptionalWritableFabricScopedAttribute.md#isconditional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:70

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`mandatoryIf`](OptionalWritableFabricScopedAttribute.md#mandatoryif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:42

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`omitChanges`](OptionalWritableFabricScopedAttribute.md#omitchanges)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:37

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`optional`](OptionalWritableFabricScopedAttribute.md#optional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:46

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`optionalIf`](OptionalWritableFabricScopedAttribute.md#optionalif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:41

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`persistent`](OptionalWritableFabricScopedAttribute.md#persistent)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:33

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`readAcl`](OptionalWritableFabricScopedAttribute.md#readacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:30

***

### scene

> **scene**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`scene`](OptionalWritableFabricScopedAttribute.md#scene)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:32

***

### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`schema`](OptionalWritableFabricScopedAttribute.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:28

***

### timed

> **timed**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`timed`](OptionalWritableFabricScopedAttribute.md#timed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:34

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`unknown`](OptionalWritableFabricScopedAttribute.md#unknown)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:43

***

### writable

> **writable**: `true`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`writable`](OptionalWritableFabricScopedAttribute.md#writable)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:55

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`writeAcl`](OptionalWritableFabricScopedAttribute.md#writeacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:38
