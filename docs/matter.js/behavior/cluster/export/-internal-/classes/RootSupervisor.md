[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / RootSupervisor

# Class: RootSupervisor

A RootSupervisor is a [ValueSupervisor](../interfaces/ValueSupervisor.md) that supervises a specific root [Schema](../README.md#schema).  It acts as a factory
for [ValueSupervisor](../interfaces/ValueSupervisor.md)s for sub-schemas of the root schema.

You can produce n ValueSupervisor for any schema using this factory. However, there are specific customizations
controlled by the root schema:

- Change eventing occur for root schema members.  In the case of a cluster this means you can monitor for changes on
  a per-attribute basis.

- If the root schema defines a cluster, the cluster's featureMap and supportedFeatures affect conformance-based
  validation.

## Implements

- [`ValueSupervisor`](../interfaces/ValueSupervisor.md)

## Constructors

### new RootSupervisor()

> **new RootSupervisor**(`schema`): [`RootSupervisor`](RootSupervisor.md)

Create a new supervisor.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `schema` | [`Schema`](../README.md#schema) | the [Schema](../README.md#schema) for the supervised data |

#### Returns

[`RootSupervisor`](RootSupervisor.md)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L46)

## Properties

### #cache

> `private` **#cache**: `WeakMap`\<[`Schema`](../README.md#schema), [`ValueSupervisor`](../interfaces/ValueSupervisor.md)\>

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L33)

***

### #featureMap

> `private` **#featureMap**: [`ValueModel`](../../../../../model/classes/ValueModel.md)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L34)

***

### #generating

> `private` **#generating**: `Set`\<[`Schema`](../README.md#schema)\>

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L32)

***

### #memberNames?

> `private` `optional` **#memberNames**: `Set`\<`string`\>

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L38)

***

### #members

> `private` **#members**: `Set`\<[`ValueModel`](../../../../../model/classes/ValueModel.md)\>

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L36)

***

### #persistentNames?

> `private` `optional` **#persistentNames**: `Set`\<`string`\>

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L39)

***

### #root

> `private` **#root**: [`ValueSupervisor`](../interfaces/ValueSupervisor.md)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L37)

***

### #supportedFeatures

> `private` **#supportedFeatures**: [`FeatureSet`](../../../../../model/classes/FeatureSet.md)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L35)

## Accessors

### access

> `get` **access**(): [`AccessControl`](../../../../export/interfaces/AccessControl.md)

Consolidated access control information for the schema.

#### Returns

[`AccessControl`](../../../../export/interfaces/AccessControl.md)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L67)

***

### featureMap

> `get` **featureMap**(): [`ValueModel`](../../../../../model/classes/ValueModel.md)

All available features defined in the schema.

#### Returns

[`ValueModel`](../../../../../model/classes/ValueModel.md)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L130)

***

### manage

> `get` **manage**(): [`Manage`](../namespaces/ValueSupervisor/README.md#manage)

Create a managed instance of a value.

#### Returns

[`Manage`](../namespaces/ValueSupervisor/README.md#manage)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L75)

***

### memberNames

> `get` **memberNames**(): `Set`\<`string`\>

The names of all members.

#### Returns

`Set`\<`string`\>

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L93)

***

### members

> `get` **members**(): `Set`\<[`ValueModel`](../../../../../model/classes/ValueModel.md)\>

Retrieve root schema elements that contribute fields to the data model.

#### Returns

`Set`\<[`ValueModel`](../../../../../model/classes/ValueModel.md)\>

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L86)

***

### owner

> `get` **owner**(): [`RootSupervisor`](RootSupervisor.md)

The schema manager that owns this ValueSupervisor.

#### Returns

[`RootSupervisor`](RootSupervisor.md)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L59)

***

### patch

> `get` **patch**(): [`Patch`](../namespaces/ValueSupervisor/README.md#patch)

Apply changes.  Does not validate perform validation.

#### Returns

[`Patch`](../namespaces/ValueSupervisor/README.md#patch)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L79)

***

### persistentNames

> `get` **persistentNames**(): `Set`\<`string`\>

Names of fields configured as non-volatile.

#### Returns

`Set`\<`string`\>

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L108)

***

### schema

> `get` **schema**(): [`Schema`](../README.md#schema)

The logical schema that controls the value's behavior.

#### Returns

[`Schema`](../README.md#schema)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L63)

***

### supportedFeatures

> `get` **supportedFeatures**(): [`FeatureSet`](../../../../../model/classes/FeatureSet.md)

Features supported by this implementation.

#### Returns

[`FeatureSet`](../../../../../model/classes/FeatureSet.md)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L137)

***

### validate

> `get` **validate**(): `undefined` \| [`Validate`](../namespaces/ValueSupervisor/README.md#validate)

Perform validation.

#### Returns

`undefined` \| [`Validate`](../namespaces/ValueSupervisor/README.md#validate)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L71)

## Methods

### #createValueSupervisor()

> `private` **#createValueSupervisor**(`schema`): [`ValueSupervisor`](../interfaces/ValueSupervisor.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `schema` | [`Schema`](../README.md#schema) |

#### Returns

[`ValueSupervisor`](../interfaces/ValueSupervisor.md)

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L162)

***

### #isGenerating()

> `private` **#isGenerating**(`schema`): `boolean`

If a schema has circular references, code generation may need to defer generation of child functions to avoid
infinite loops.

In order to keep generation code simpler we use this method to detect when lazy generation is necessary and
install stubs that bootstrap each method.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `schema` | [`Schema`](../README.md#schema) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L225)

***

### get()

> **get**(`schema`): [`ValueSupervisor`](../interfaces/ValueSupervisor.md)

Obtain [ValueSupervisor](../interfaces/ValueSupervisor.md) implementation for a specific schema.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `schema` | [`Schema`](../README.md#schema) | the model describing the record type |

#### Returns

[`ValueSupervisor`](../interfaces/ValueSupervisor.md)

the I/O implementation

#### Source

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L147)
