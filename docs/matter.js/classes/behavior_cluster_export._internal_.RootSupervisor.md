[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / RootSupervisor

# Class: RootSupervisor

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).RootSupervisor

A RootSupervisor is a [ValueSupervisor](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md) that supervises a specific root [Schema](../modules/behavior_cluster_export._internal_.md#schema).  It acts as a factory
for [ValueSupervisor](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md)s for sub-schemas of the root schema.

You can produce n ValueSupervisor for any schema using this factory. However, there are specific customizations
controlled by the root schema:

- Change eventing occur for root schema members.  In the case of a cluster this means you can monitor for changes on
  a per-attribute basis.

- If the root schema defines a cluster, the cluster's featureMap and supportedFeatures affect conformance-based
  validation.

## Implements

- [`ValueSupervisor`](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md)

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.RootSupervisor.md#constructor)

### Properties

- [#cache](behavior_cluster_export._internal_.RootSupervisor.md##cache)
- [#featureMap](behavior_cluster_export._internal_.RootSupervisor.md##featuremap)
- [#generating](behavior_cluster_export._internal_.RootSupervisor.md##generating)
- [#memberNames](behavior_cluster_export._internal_.RootSupervisor.md##membernames)
- [#members](behavior_cluster_export._internal_.RootSupervisor.md##members)
- [#persistentNames](behavior_cluster_export._internal_.RootSupervisor.md##persistentnames)
- [#root](behavior_cluster_export._internal_.RootSupervisor.md##root)
- [#supportedFeatures](behavior_cluster_export._internal_.RootSupervisor.md##supportedfeatures)

### Accessors

- [access](behavior_cluster_export._internal_.RootSupervisor.md#access)
- [featureMap](behavior_cluster_export._internal_.RootSupervisor.md#featuremap)
- [manage](behavior_cluster_export._internal_.RootSupervisor.md#manage)
- [memberNames](behavior_cluster_export._internal_.RootSupervisor.md#membernames)
- [members](behavior_cluster_export._internal_.RootSupervisor.md#members)
- [owner](behavior_cluster_export._internal_.RootSupervisor.md#owner)
- [patch](behavior_cluster_export._internal_.RootSupervisor.md#patch)
- [persistentNames](behavior_cluster_export._internal_.RootSupervisor.md#persistentnames)
- [schema](behavior_cluster_export._internal_.RootSupervisor.md#schema)
- [supportedFeatures](behavior_cluster_export._internal_.RootSupervisor.md#supportedfeatures)
- [validate](behavior_cluster_export._internal_.RootSupervisor.md#validate)

### Methods

- [#createValueSupervisor](behavior_cluster_export._internal_.RootSupervisor.md##createvaluesupervisor)
- [#isGenerating](behavior_cluster_export._internal_.RootSupervisor.md##isgenerating)
- [get](behavior_cluster_export._internal_.RootSupervisor.md#get)

## Constructors

### constructor

• **new RootSupervisor**(`schema`): [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

Create a new supervisor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) | the [Schema](../modules/behavior_cluster_export._internal_.md#schema) for the supervised data |

#### Returns

[`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:46](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L46)

## Properties

### #cache

• `Private` **#cache**: `WeakMap`\<[`Schema`](../modules/behavior_cluster_export._internal_.md#schema), [`ValueSupervisor`](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md)\>

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:33](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L33)

___

### #featureMap

• `Private` **#featureMap**: [`ValueModel`](model.ValueModel.md)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:34](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L34)

___

### #generating

• `Private` **#generating**: `Set`\<[`Schema`](../modules/behavior_cluster_export._internal_.md#schema)\>

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:32](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L32)

___

### #memberNames

• `Private` `Optional` **#memberNames**: `Set`\<`string`\>

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:38](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L38)

___

### #members

• `Private` **#members**: `Set`\<[`ValueModel`](model.ValueModel.md)\>

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:36](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L36)

___

### #persistentNames

• `Private` `Optional` **#persistentNames**: `Set`\<`string`\>

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:39](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L39)

___

### #root

• `Private` **#root**: [`ValueSupervisor`](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:37](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L37)

___

### #supportedFeatures

• `Private` **#supportedFeatures**: [`FeatureSet`](model.FeatureSet-1.md)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:35](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L35)

## Accessors

### access

• `get` **access**(): [`AccessControl`](../interfaces/behavior_export.AccessControl-1.md)

Consolidated access control information for the schema.

#### Returns

[`AccessControl`](../interfaces/behavior_export.AccessControl-1.md)

#### Implementation of

[ValueSupervisor](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md).[access](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md#access)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:67](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L67)

___

### featureMap

• `get` **featureMap**(): [`ValueModel`](model.ValueModel.md)

All available features defined in the schema.

#### Returns

[`ValueModel`](model.ValueModel.md)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:130](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L130)

___

### manage

• `get` **manage**(): [`Manage`](../modules/behavior_cluster_export._internal_.ValueSupervisor.md#manage)

Create a managed instance of a value.

#### Returns

[`Manage`](../modules/behavior_cluster_export._internal_.ValueSupervisor.md#manage)

#### Implementation of

[ValueSupervisor](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md).[manage](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md#manage)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:75](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L75)

___

### memberNames

• `get` **memberNames**(): `Set`\<`string`\>

The names of all members.

#### Returns

`Set`\<`string`\>

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:93](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L93)

___

### members

• `get` **members**(): `Set`\<[`ValueModel`](model.ValueModel.md)\>

Retrieve root schema elements that contribute fields to the data model.

#### Returns

`Set`\<[`ValueModel`](model.ValueModel.md)\>

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:86](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L86)

___

### owner

• `get` **owner**(): [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

The schema manager that owns this ValueSupervisor.

#### Returns

[`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Implementation of

[ValueSupervisor](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md).[owner](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md#owner)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:59](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L59)

___

### patch

• `get` **patch**(): [`Patch`](../modules/behavior_cluster_export._internal_.ValueSupervisor.md#patch)

Apply changes.  Does not validate perform validation.

#### Returns

[`Patch`](../modules/behavior_cluster_export._internal_.ValueSupervisor.md#patch)

#### Implementation of

[ValueSupervisor](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md).[patch](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md#patch)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:79](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L79)

___

### persistentNames

• `get` **persistentNames**(): `Set`\<`string`\>

Names of fields configured as non-volatile.

#### Returns

`Set`\<`string`\>

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:108](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L108)

___

### schema

• `get` **schema**(): [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

The logical schema that controls the value's behavior.

#### Returns

[`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Implementation of

[ValueSupervisor](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md).[schema](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md#schema)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:63](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L63)

___

### supportedFeatures

• `get` **supportedFeatures**(): [`FeatureSet`](model.FeatureSet-1.md)

Features supported by this implementation.

#### Returns

[`FeatureSet`](model.FeatureSet-1.md)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:137](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L137)

___

### validate

• `get` **validate**(): `undefined` \| [`Validate`](../modules/behavior_cluster_export._internal_.ValueSupervisor.md#validate)

Perform validation.

#### Returns

`undefined` \| [`Validate`](../modules/behavior_cluster_export._internal_.ValueSupervisor.md#validate)

#### Implementation of

[ValueSupervisor](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md).[validate](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md#validate)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:71](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L71)

## Methods

### #createValueSupervisor

▸ **#createValueSupervisor**(`schema`): [`ValueSupervisor`](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) |

#### Returns

[`ValueSupervisor`](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md)

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:162](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L162)

___

### #isGenerating

▸ **#isGenerating**(`schema`): `boolean`

If a schema has circular references, code generation may need to defer generation of child functions to avoid
infinite loops.

In order to keep generation code simpler we use this method to detect when lazy generation is necessary and
install stubs that bootstrap each method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:225](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L225)

___

### get

▸ **get**(`schema`): [`ValueSupervisor`](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md)

Obtain [ValueSupervisor](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md) implementation for a specific schema.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) | the model describing the record type |

#### Returns

[`ValueSupervisor`](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md)

the I/O implementation

#### Defined in

[packages/matter.js/src/behavior/supervision/RootSupervisor.ts:147](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/supervision/RootSupervisor.ts#L147)
