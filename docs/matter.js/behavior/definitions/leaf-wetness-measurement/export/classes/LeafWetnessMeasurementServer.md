[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/leaf-wetness-measurement/export](../README.md) / LeafWetnessMeasurementServer

# Class: LeafWetnessMeasurementServer

This is the default server implementation of [LeafWetnessMeasurementBehavior](../README.md#leafwetnessmeasurementbehavior).

## Extends

- [`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md)

## Constructors

### new LeafWetnessMeasurementServer()

> **new LeafWetnessMeasurementServer**(`agent`, `backing`): [`LeafWetnessMeasurementServer`](LeafWetnessMeasurementServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`LeafWetnessMeasurementServer`](LeafWetnessMeasurementServer.md)

#### Inherited from

`LeafWetnessMeasurementBehavior.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`#agent`](../interfaces/LeafWetnessMeasurementBehavior.md##agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`[reference]`](../interfaces/LeafWetnessMeasurementBehavior.md#%5Breference%5D)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`agent`](../interfaces/LeafWetnessMeasurementBehavior.md#agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`cluster`](../interfaces/LeafWetnessMeasurementBehavior.md#cluster)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`context`](../interfaces/LeafWetnessMeasurementBehavior.md#context)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`endpoint`](../interfaces/LeafWetnessMeasurementBehavior.md#endpoint)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`EventEmitter`](../../../../../util/export/classes/EventEmitter.md), `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### maxMeasuredValue$Changing

> **maxMeasuredValue$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### measuredValue$Changing

> **measuredValue$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### minMeasuredValue$Changing

> **minMeasuredValue$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

#### Type declaration

##### tolerance$Changing

> **tolerance$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

#### Type declaration

##### maxMeasuredValue$Changed

> **maxMeasuredValue$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### measuredValue$Changed

> **measuredValue$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### minMeasuredValue$Changed

> **minMeasuredValue$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

#### Type declaration

##### tolerance$Changed

> **tolerance$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`events`](../interfaces/LeafWetnessMeasurementBehavior.md#events)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`features`](../interfaces/LeafWetnessMeasurementBehavior.md#features)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`session`](../interfaces/LeafWetnessMeasurementBehavior.md#session)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<`object`, `never`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### maxMeasuredValue

> **maxMeasuredValue**: `null` \| `number`

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.6.4.3

##### measuredValue

> **measuredValue**: `null` \| `number`

MeasuredValue represents the water content in % as follows:

MeasuredValue = 100 x water content

Where 0% < = water content < = 100%, corresponding to a MeasuredValue in the range 0 to 10000. The
maximum resolution this format allows is 0.01%.

MinMeasuredValue and MaxMeasuredValue define the range of the sensor.

The null value indicates that the measurement is unknown, otherwise the range shall be as described in
Measured Value.

MeasuredValue is updated continuously as new measurements are made.

###### See

MatterSpecification.v11.Cluster § 2.6.4.1

##### minMeasuredValue

> **minMeasuredValue**: `null` \| `number`

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.6.4.2

#### Type declaration

##### tolerance?

> `optional` **tolerance**: `number`

See Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.6.4.4

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`state`](../interfaces/LeafWetnessMeasurementBehavior.md#state)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/LeafWetnessMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>

#### Inherited from

`LeafWetnessMeasurementBehavior.Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### ExtensionInterface

> `static` `readonly` **ExtensionInterface**: `object`

#### Inherited from

`LeafWetnessMeasurementBehavior.ExtensionInterface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

***

### Interface

> `static` `readonly` **Interface**: `object`

#### components

> **components**: `never`[] = `[]`

#### Inherited from

`LeafWetnessMeasurementBehavior.Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### Internal()

> `static` `readonly` **Internal**: () => `object`

#### Returns

`object`

#### Inherited from

`LeafWetnessMeasurementBehavior.Internal`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

***

### State()

> `static` `readonly` **State**: () => [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/LeafWetnessMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/LeafWetnessMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>

#### Inherited from

`LeafWetnessMeasurementBehavior.State`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

***

### cluster

> `static` `readonly` **cluster**: [`Cluster`](../../../../../cluster/export/namespaces/LeafWetnessMeasurement/interfaces/Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

`LeafWetnessMeasurementBehavior.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/LeafWetnessMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>

#### Inherited from

`LeafWetnessMeasurementBehavior.defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`LeafWetnessMeasurementBehavior.dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`LeafWetnessMeasurementBehavior.early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"leafWetnessMeasurement"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`LeafWetnessMeasurementBehavior.id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`LeafWetnessMeasurementBehavior.name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`LeafWetnessMeasurementBehavior.schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`LeafWetnessMeasurementBehavior.supervisor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

***

### supports()

> `static` **supports**: (`other`) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`boolean`

#### Inherited from

`LeafWetnessMeasurementBehavior.supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`[asyncDispose]`](../interfaces/LeafWetnessMeasurementBehavior.md#%5Basyncdispose%5D)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L198)

***

### asAdmin()

> **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`asAdmin`](../interfaces/LeafWetnessMeasurementBehavior.md#asadmin)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L125)

***

### assertAttributeEnabled()

> **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`assertAttributeEnabled`](../interfaces/LeafWetnessMeasurementBehavior.md#assertattributeenabled)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

***

### callback()

> `protected` **callback**\<`A`, `R`\>(`reactor`, `options`?): (...`args`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../../../../export/README.md#reactortr).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* `any`[] |
| `R` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`A`, `R`\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`callback`](../interfaces/LeafWetnessMeasurementBehavior.md#callback)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### initialize()

> **initialize**(`_options`?): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_options`? | `object` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`initialize`](../interfaces/LeafWetnessMeasurementBehavior.md#initialize)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L192)

***

### reactTo()

> `protected` **reactTo**\<`O`\>(`observable`, `reactor`, `options`?): `void`

Install a [Reactor](../../../../export/README.md#reactortr).

Important: The reactor MUST be a real JS function - arrow functions will not work!

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

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`reactTo`](../interfaces/LeafWetnessMeasurementBehavior.md#reactto)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L212)

***

### requireAttributeEnabled()

> **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`requireAttributeEnabled`](../interfaces/LeafWetnessMeasurementBehavior.md#requireattributeenabled)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[`LeafWetnessMeasurementBehavior`](../interfaces/LeafWetnessMeasurementBehavior.md).[`toString`](../interfaces/LeafWetnessMeasurementBehavior.md#tostring)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)

***

### alter()

> `static` **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `AlterationsT` *extends* [`Alterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#alterationsoriginalt)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`LeafWetnessMeasurementBehavior.alter`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

***

### enable()

> `static` **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `FlagsT` *extends* [`ElementFlags`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagsclustert)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`LeafWetnessMeasurementBehavior.enable`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

***

### for()

> `static` **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema`?): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `ClusterT` *extends* [`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema`? | [`Schema`](../../../../cluster/export/-internal-/README.md#schema) |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`LeafWetnessMeasurementBehavior.for`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

***

### set()

> `static` **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../../../../../cluster/export/namespaces/ClusterType/README.md#relaxtypesv)\<`InstanceType`\<`This`\[`"State"`\]\>\>\> |

#### Returns

`This`

#### Inherited from

`LeafWetnessMeasurementBehavior.set`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

***

### with()

> `static` **with**\<`This`, `FeaturesT`\>(`this`, ...`features`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `FeaturesT` *extends* [`FeatureSelection`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featureselectiont)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| ...`features` | `FeaturesT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`LeafWetnessMeasurementBehavior.with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
