[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / BehaviorBacking

# Class: `abstract` BehaviorBacking

The "backing" for a behavior manages those portions of behavior that endure for the lifetime of an endpoint.

## Constructors

### new BehaviorBacking()

> **new BehaviorBacking**(`endpoint`, `type`, `options`?): [`BehaviorBacking`](BehaviorBacking.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../interfaces/Empty.md)\> |
| `type` | [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |
| `options`? | `Partial`\<`object`\> |

#### Returns

[`BehaviorBacking`](BehaviorBacking.md)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L40)

## Properties

### #construction

> `private` **#construction**: [`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`BehaviorBacking`](BehaviorBacking.md)\>

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L34)

***

### #datasource?

> `private` `optional` **#datasource**: [`Datasource`](../interfaces/Datasource.md)\<[`StateType`](../interfaces/StateType.md)\>

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L32)

***

### #endpoint

> `private` **#endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L27)

***

### #events?

> `private` `optional` **#events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L30)

***

### #internal?

> `private` `optional` **#internal**: `object`

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L29)

***

### #options?

> `private` `optional` **#options**: `Partial`\<`object`\>

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L31)

***

### #reactors?

> `private` `optional` **#reactors**: [`Reactors`](Reactors.md)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L33)

***

### #type

> `private` **#type**: [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L28)

***

### store?

> `protected` `optional` `readonly` `abstract` **store**: [`Store`](../namespaces/Datasource/interfaces/Store.md)

The data provider for [datasource](BehaviorBacking.md#datasource).

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L171)

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`BehaviorBacking`](BehaviorBacking.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`BehaviorBacking`](BehaviorBacking.md)\>

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L36)

***

### datasource

> `get` **datasource**(): [`Datasource`](../interfaces/Datasource.md)\<[`StateType`](../interfaces/StateType.md)\>

The source of raw data that backs managed state instances.

#### Returns

[`Datasource`](../interfaces/Datasource.md)\<[`StateType`](../interfaces/StateType.md)\>

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L148)

***

### datasourceOptions

> `get` `protected` **datasourceOptions**(): [`Options`](../namespaces/Datasource/interfaces/Options.md)\<[`StateType`](../interfaces/StateType.md)\>

#### Returns

[`Options`](../namespaces/Datasource/interfaces/Options.md)\<[`StateType`](../interfaces/StateType.md)\>

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L156)

***

### endpoint

> `get` **endpoint**(): [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../interfaces/Empty.md)\>

The [Endpoint](../../../../../endpoint/export/classes/Endpoint.md) that owns the behavior.

#### Returns

[`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L118)

***

### events

> `get` **events**(): [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md)

Access the event object.  Unlike state, the events object does not vary by instance.

#### Returns

[`EventEmitter`](../../../../../util/export/classes/EventEmitter.md)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L187)

***

### path

> `get` **path**(): [`DataModelPath`](../interfaces/DataModelPath.md)

#### Returns

[`DataModelPath`](../interfaces/DataModelPath.md)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L52)

***

### stateView

> `get` **stateView**(): `object`

A read-only offline view of behavior state.

#### Returns

`object`

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:204](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L204)

***

### status

> `get` **status**(): [`Status`](../../../../../common/export/namespaces/Lifecycle/enumerations/Status.md)

The status of the behavior.

#### Returns

[`Status`](../../../../../common/export/namespaces/Lifecycle/enumerations/Status.md)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:197](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L197)

***

### type

> `get` **type**(): [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)

The [Behavior.Type](../../../../export/namespaces/Behavior/interfaces/Type.md) backed.

#### Returns

[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L125)

## Methods

### #invokeClose()

> `private` **#invokeClose**(`agent`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Invoke Behavior.destroy to clean up application logic.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L225)

***

### #lifecycleInstance()

> `private` **#lifecycleInstance**(`agent`): [`Behavior`](../../../../export/classes/Behavior.md)

Obtain a behavior instance for lifecycle methods (initialize and close).

Under these circumstances we can't use [Agent.get](../../../../../endpoint/export/classes/Agent.md#get) because it will throw if the endpoint is initializing
or closing.

Instead we use a "friend" method of agent to retrieve any existing behavior or create a new one.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |

#### Returns

[`Behavior`](../../../../export/classes/Behavior.md)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:248](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L248)

***

### close()

> **close**(`agent`, `invokeClose`): [`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`BehaviorBacking`](BehaviorBacking.md)\>

Destroy the backing.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) | `undefined` |
| `invokeClose` | `boolean` | `true` |

#### Returns

[`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`BehaviorBacking`](BehaviorBacking.md)\>

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L83)

***

### createBehavior()

> **createBehavior**(`agent`, `type`): [`Behavior`](../../../../export/classes/Behavior.md)

Create an instance of the backed [Behavior](../../../../export/classes/Behavior.md).

Derivatives may override to perform additional setup beyond simple instantiation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `type` | [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

[`Behavior`](../../../../export/classes/Behavior.md)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L134)

***

### getInternal()

> **getInternal**(): `object`

Obtain internal state for a behavior instance.

#### Returns

`object`

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L176)

***

### initialize()

> **initialize**(`agent`): `void`

Initialize state by applying values from options and invoking the behavior's initialize() function.

Called by Behaviors class once the backing is installed.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L61)

***

### invokeInitializer()

> `protected` **invokeInitializer**(`behavior`, `options`?): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Set state from options and invoke Behavior.invokeInitializer.

This is an optional extension point for derivatives.  Errors thrown here are recorded and place the behavior into
crashed state.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `behavior` | [`Behavior`](../../../../export/classes/Behavior.md) |
| `options`? | `Partial`\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L111)

***

### reactTo()

> **reactTo**\<`O`\>(`observable`, `reactor`, `options`?): `void`

Install a reactor.

#### Type parameters

| Type parameter |
| :------ |
| `O` *extends* [`Observable`](../../../../../util/export/interfaces/Observable.md)\<`any`[], `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`Parameters`\<`O`\[`"emit"`\]\>, `ReturnType`\<`O`\[`"emit"`\]\>\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:211](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L211)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L48)
