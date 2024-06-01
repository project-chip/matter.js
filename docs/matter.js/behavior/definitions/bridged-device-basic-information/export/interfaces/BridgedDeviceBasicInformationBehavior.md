[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/bridged-device-basic-information/export](../README.md) / BridgedDeviceBasicInformationBehavior

# Interface: BridgedDeviceBasicInformationBehavior

## Extends

- [`BridgedDeviceBasicInformationBehaviorType`](../-internal-/README.md#bridgeddevicebasicinformationbehaviortype)

## Extended by

- [`BridgedDeviceBasicInformationServer`](../classes/BridgedDeviceBasicInformationServer.md)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`EventEmitter`](../../../../../util/export/classes/EventEmitter.md), `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### reachable$Changing

> **reachable$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`boolean`, `any`\>\>

#### Type declaration

##### hardwareVersion$Changing

> **hardwareVersion$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### hardwareVersionString$Changing

> **hardwareVersionString$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### manufacturingDate$Changing

> **manufacturingDate$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### nodeLabel$Changing

> **nodeLabel$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>\>

##### partNumber$Changing

> **partNumber$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### productAppearance$Changing

> **productAppearance$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

##### productLabel$Changing

> **productLabel$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### productName$Changing

> **productName$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### productUrl$Changing

> **productUrl$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### serialNumber$Changing

> **serialNumber$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### softwareVersion$Changing

> **softwareVersion$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### softwareVersionString$Changing

> **softwareVersionString$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### uniqueId$Changing

> **uniqueId$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### vendorId$Changing

> **vendorId$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<[`VendorId`](../../../../../datatype/export/README.md#vendorid), `any`\>\>

##### vendorName$Changing

> **vendorName$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

#### Type declaration

##### reachable$Changed

> **reachable$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`boolean`, `any`\>\>

#### Type declaration

##### hardwareVersion$Changed

> **hardwareVersion$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### hardwareVersionString$Changed

> **hardwareVersionString$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### manufacturingDate$Changed

> **manufacturingDate$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### nodeLabel$Changed

> **nodeLabel$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>\>

##### partNumber$Changed

> **partNumber$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### productAppearance$Changed

> **productAppearance$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

##### productLabel$Changed

> **productLabel$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### productName$Changed

> **productName$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### productUrl$Changed

> **productUrl$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### serialNumber$Changed

> **serialNumber$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### softwareVersion$Changed

> **softwareVersion$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### softwareVersionString$Changed

> **softwareVersionString$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### uniqueId$Changed

> **uniqueId$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### vendorId$Changed

> **vendorId$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<[`VendorId`](../../../../../datatype/export/README.md#vendorid), `any`\>\>

##### vendorName$Changed

> **vendorName$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

#### Type declaration

##### reachableChanged

> **reachableChanged**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

This event shall be generated when there is a change in the Reachable attribute. Its purpose is to
provide an indication towards interested parties that the reachability of a bridged device (over the
non-Matter network) has changed, so they may take appropriate action.

After (re)start of a bridge this event may be generated.

###### See

MatterSpecification.v11.Core § 9.13.5.1

#### Type declaration

##### leave?

> `optional` **leave**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Core § 9.13.5

##### shutDown?

> `optional` **shutDown**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Core § 9.13.5

##### startUp?

> `optional` **startUp**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

###### See

MatterSpecification.v11.Core § 9.13.5

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<`object`, `never`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### reachable

> **reachable**: `boolean`

###### See

MatterSpecification.v11.Core § 9.13.4

#### Type declaration

##### nodeLabel?

> `optional` **nodeLabel**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

#### Type declaration

##### hardwareVersion?

> `optional` **hardwareVersion**: `number`

###### See

MatterSpecification.v11.Core § 9.13.4

##### hardwareVersionString?

> `optional` **hardwareVersionString**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

##### manufacturingDate?

> `optional` **manufacturingDate**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

##### partNumber?

> `optional` **partNumber**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

##### productAppearance?

> `optional` **productAppearance**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

###### Type declaration

###### finish

> **finish**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<[`ProductFinish`](../../../../../cluster/export/namespaces/BridgedDeviceBasicInformation/enumerations/ProductFinish.md)\>

###### primaryColor

> **primaryColor**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`Color`](../../../../../cluster/export/namespaces/BridgedDeviceBasicInformation/enumerations/Color.md)\>

##### productLabel?

> `optional` **productLabel**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

##### productName?

> `optional` **productName**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

##### productUrl?

> `optional` **productUrl**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

##### serialNumber?

> `optional` **serialNumber**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

##### softwareVersion?

> `optional` **softwareVersion**: `number`

###### See

MatterSpecification.v11.Core § 9.13.4

##### softwareVersionString?

> `optional` **softwareVersionString**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

##### uniqueId?

> `optional` **uniqueId**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

##### vendorId?

> `optional` **vendorId**: [`VendorId`](../../../../../datatype/export/README.md#vendorid)

###### See

MatterSpecification.v11.Core § 9.13.4

##### vendorName?

> `optional` **vendorName**: `string`

###### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.state`

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

`BridgedDeviceBasicInformationBehaviorType.[asyncDispose]`

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

`BridgedDeviceBasicInformationBehaviorType.asAdmin`

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

`BridgedDeviceBasicInformationBehaviorType.assertAttributeEnabled`

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

`BridgedDeviceBasicInformationBehaviorType.callback`

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

`BridgedDeviceBasicInformationBehaviorType.initialize`

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

`BridgedDeviceBasicInformationBehaviorType.reactTo`

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

`BridgedDeviceBasicInformationBehaviorType.requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`BridgedDeviceBasicInformationBehaviorType.toString`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)
