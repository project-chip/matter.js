[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/occupancy-sensing/export](../README.md) / OccupancySensingBehavior

# Interface: OccupancySensingBehavior

## Extends

- [`OccupancySensingBehaviorType`](../-internal-/README.md#occupancysensingbehaviortype)

## Extended by

- [`OccupancySensingServer`](../classes/OccupancySensingServer.md)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`OccupancySensingBehaviorType.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`OccupancySensingBehaviorType.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`OccupancySensingBehaviorType.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`OccupancySensingBehaviorType.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`OccupancySensingBehaviorType.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`OccupancySensingBehaviorType.endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`EventEmitter`](../../../../../util/export/classes/EventEmitter.md), `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### occupancy$Changing

> **occupancy$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### occupancySensorType$Changing

> **occupancySensorType$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`OccupancySensorType`](../../../../../cluster/export/namespaces/OccupancySensing/enumerations/OccupancySensorType.md), `any`\>\>

##### occupancySensorTypeBitmap$Changing

> **occupancySensorTypeBitmap$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

#### Type declaration

##### physicalContactOccupiedToUnoccupiedDelay$Changing

> **physicalContactOccupiedToUnoccupiedDelay$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### physicalContactUnoccupiedToOccupiedDelay$Changing

> **physicalContactUnoccupiedToOccupiedDelay$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### physicalContactUnoccupiedToOccupiedThreshold$Changing

> **physicalContactUnoccupiedToOccupiedThreshold$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### pirOccupiedToUnoccupiedDelay$Changing

> **pirOccupiedToUnoccupiedDelay$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### pirUnoccupiedToOccupiedDelay$Changing

> **pirUnoccupiedToOccupiedDelay$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### pirUnoccupiedToOccupiedThreshold$Changing

> **pirUnoccupiedToOccupiedThreshold$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### ultrasonicOccupiedToUnoccupiedDelay$Changing

> **ultrasonicOccupiedToUnoccupiedDelay$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### ultrasonicUnoccupiedToOccupiedDelay$Changing

> **ultrasonicUnoccupiedToOccupiedDelay$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### ultrasonicUnoccupiedToOccupiedThreshold$Changing

> **ultrasonicUnoccupiedToOccupiedThreshold$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

#### Type declaration

##### occupancy$Changed

> **occupancy$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### occupancySensorType$Changed

> **occupancySensorType$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`OccupancySensorType`](../../../../../cluster/export/namespaces/OccupancySensing/enumerations/OccupancySensorType.md), `any`\>\>

##### occupancySensorTypeBitmap$Changed

> **occupancySensorTypeBitmap$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

#### Type declaration

##### physicalContactOccupiedToUnoccupiedDelay$Changed

> **physicalContactOccupiedToUnoccupiedDelay$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### physicalContactUnoccupiedToOccupiedDelay$Changed

> **physicalContactUnoccupiedToOccupiedDelay$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### physicalContactUnoccupiedToOccupiedThreshold$Changed

> **physicalContactUnoccupiedToOccupiedThreshold$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### pirOccupiedToUnoccupiedDelay$Changed

> **pirOccupiedToUnoccupiedDelay$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### pirUnoccupiedToOccupiedDelay$Changed

> **pirUnoccupiedToOccupiedDelay$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### pirUnoccupiedToOccupiedThreshold$Changed

> **pirUnoccupiedToOccupiedThreshold$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### ultrasonicOccupiedToUnoccupiedDelay$Changed

> **ultrasonicOccupiedToUnoccupiedDelay$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### ultrasonicUnoccupiedToOccupiedDelay$Changed

> **ultrasonicUnoccupiedToOccupiedDelay$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### ultrasonicUnoccupiedToOccupiedThreshold$Changed

> **ultrasonicUnoccupiedToOccupiedThreshold$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

`OccupancySensingBehaviorType.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

`OccupancySensingBehaviorType.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`OccupancySensingBehaviorType.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<`object`, `never`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### occupancy

> **occupancy**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The Occupancy attribute indicates the status of occupancy.

###### See

MatterSpecification.v11.Cluster § 2.7.6.1

###### Type declaration

###### occupied

> **occupied**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied.

##### occupancySensorType

> **occupancySensorType**: [`OccupancySensorType`](../../../../../cluster/export/namespaces/OccupancySensing/enumerations/OccupancySensorType.md)

The OccupancySensorType attribute specifies the type of the occupancy sensor.

###### See

MatterSpecification.v11.Cluster § 2.7.6.2

##### occupancySensorTypeBitmap

> **occupancySensorTypeBitmap**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The OccupancySensorTypeBitmap attribute specifies the types of the occupancy sensor. A ‘1’ in each bit
position indicates the capability is implemented.

The value of the OccupancySensorTypeBitmap attribute and the OccupancySensorType attribute shall be
aligned as defined below.

Table 32. Mapping between OccupancySensorTypeBitmap and OccupancySensorType Attributes

###### See

MatterSpecification.v11.Cluster § 2.7.6.3

###### Type declaration

###### physicalContact

> **physicalContact**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicates a physical contact sensor.

###### pir

> **pir**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicates a passive infrared sensor.

###### ultrasonic

> **ultrasonic**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicates a ultrasonic sensor.

#### Type declaration

##### physicalContactOccupiedToUnoccupiedDelay?

> `optional` **physicalContactOccupiedToUnoccupiedDelay**: `null` \| `number`

The PhysicalContactOccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact occupancy sensor changes to its unoccupied state after detecting the unoccupied event.
The null value indicates that the sensor does not report occupied to unoccupied transition.

###### See

MatterSpecification.v11.Cluster § 2.7.9.1

##### physicalContactUnoccupiedToOccupiedDelay?

> `optional` **physicalContactUnoccupiedToOccupiedDelay**: `null` \| `number`

The PhysicalContactUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the
physical contact sensor changes to its occupied state after the detection of the occupied event.

The null value indicates that the sensor does not report unoccupied to occupied transition.

###### See

MatterSpecification.v11.Cluster § 2.7.9.2

##### physicalContactUnoccupiedToOccupiedThreshold?

> `optional` **physicalContactUnoccupiedToOccupiedThreshold**: `number`

The PhysicalContactUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection
events that must occur in the period PhysicalContactUnoccupiedToOccupiedDelay, before the PIR sensor
changes to its occupied state. This attribute is mandatory if the
PhysicalContactUnoccupiedToOccupiedDelay attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.9.3

##### pirOccupiedToUnoccupiedDelay?

> `optional` **pirOccupiedToUnoccupiedDelay**: `number`

The PIROccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its unoccupied state after the last detection of movement in the sensed area.

###### See

MatterSpecification.v11.Cluster § 2.7.7.1

##### pirUnoccupiedToOccupiedDelay?

> `optional` **pirUnoccupiedToOccupiedDelay**: `number`

The PIRUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
changes to its occupied state after the detection of movement in the sensed area. This attribute is
mandatory if the PIRUnoccupiedToOccupiedThreshold attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.7.2

##### pirUnoccupiedToOccupiedThreshold?

> `optional` **pirUnoccupiedToOccupiedThreshold**: `number`

The PIRUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events that
must occur in the period PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied
state. This attribute is mandatory if the PIRUnoccupiedToOccupiedDelay attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.7.3

##### ultrasonicOccupiedToUnoccupiedDelay?

> `optional` **ultrasonicOccupiedToUnoccupiedDelay**: `number`

The UltrasonicOccupiedToUnoccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its unoccupied state after the last detection of movement in the sensed
area.

###### See

MatterSpecification.v11.Cluster § 2.7.8.1

##### ultrasonicUnoccupiedToOccupiedDelay?

> `optional` **ultrasonicUnoccupiedToOccupiedDelay**: `number`

The UltrasonicUnoccupiedToOccupiedDelay attribute and specifies the time delay, in seconds, before the
Ultrasonic sensor changes to its occupied state after the detection of movement in the sensed area. This
attribute is mandatory if the UltrasonicUnoccupiedToOccupiedThreshold attribute is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.8.2

##### ultrasonicUnoccupiedToOccupiedThreshold?

> `optional` **ultrasonicUnoccupiedToOccupiedThreshold**: `number`

The UltrasonicUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events
that must occur in the period UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes
to its occupied state. This attribute is mandatory if the UltrasonicUnoccupiedToOccupiedDelay attribute
is implemented.

###### See

MatterSpecification.v11.Cluster § 2.7.8.3

#### Inherited from

`OccupancySensingBehaviorType.state`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`OccupancySensingBehaviorType.[asyncDispose]`

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

`OccupancySensingBehaviorType.asAdmin`

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

`OccupancySensingBehaviorType.assertAttributeEnabled`

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

`OccupancySensingBehaviorType.callback`

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

`OccupancySensingBehaviorType.initialize`

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

`OccupancySensingBehaviorType.reactTo`

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

`OccupancySensingBehaviorType.requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`OccupancySensingBehaviorType.toString`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)
