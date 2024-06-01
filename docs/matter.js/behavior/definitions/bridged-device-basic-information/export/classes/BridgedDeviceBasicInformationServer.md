[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/bridged-device-basic-information/export](../README.md) / BridgedDeviceBasicInformationServer

# Class: BridgedDeviceBasicInformationServer

This is the default server implementation of BridgedDeviceBasicInformationBehavior.

All attributes are optional except for the "reachable" attribute.

## Extends

- [`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md)

## Constructors

### new BridgedDeviceBasicInformationServer()

> **new BridgedDeviceBasicInformationServer**(`agent`, `backing`): [`BridgedDeviceBasicInformationServer`](BridgedDeviceBasicInformationServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`BridgedDeviceBasicInformationServer`](BridgedDeviceBasicInformationServer.md)

#### Inherited from

`BridgedDeviceBasicInformationBehavior.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`#agent`](../interfaces/BridgedDeviceBasicInformationBehavior.md##agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`[reference]`](../interfaces/BridgedDeviceBasicInformationBehavior.md#%5Breference%5D)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`agent`](../interfaces/BridgedDeviceBasicInformationBehavior.md#agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`cluster`](../interfaces/BridgedDeviceBasicInformationBehavior.md#cluster)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`context`](../interfaces/BridgedDeviceBasicInformationBehavior.md#context)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`endpoint`](../interfaces/BridgedDeviceBasicInformationBehavior.md#endpoint)

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

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`events`](../interfaces/BridgedDeviceBasicInformationBehavior.md#events)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`features`](../interfaces/BridgedDeviceBasicInformationBehavior.md#features)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`session`](../interfaces/BridgedDeviceBasicInformationBehavior.md#session)

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

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`state`](../interfaces/BridgedDeviceBasicInformationBehavior.md#state)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/BridgedDeviceBasicInformation/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>

#### Inherited from

`BridgedDeviceBasicInformationBehavior.Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### ExtensionInterface

> `static` `readonly` **ExtensionInterface**: `object`

#### Inherited from

`BridgedDeviceBasicInformationBehavior.ExtensionInterface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

***

### Interface

> `static` `readonly` **Interface**: `object`

#### components

> **components**: `never`[] = `[]`

#### Inherited from

`BridgedDeviceBasicInformationBehavior.Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### Internal()

> `static` `readonly` **Internal**: () => `object`

#### Returns

`object`

#### Inherited from

`BridgedDeviceBasicInformationBehavior.Internal`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

***

### cluster

> `static` `readonly` **cluster**: [`Cluster`](../../../../../cluster/export/namespaces/BridgedDeviceBasicInformation/interfaces/Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

`BridgedDeviceBasicInformationBehavior.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/BridgedDeviceBasicInformation/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>

#### Inherited from

`BridgedDeviceBasicInformationBehavior.defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`BridgedDeviceBasicInformationBehavior.dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`BridgedDeviceBasicInformationBehavior.early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"bridgedDeviceBasicInformation"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`BridgedDeviceBasicInformationBehavior.id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`BridgedDeviceBasicInformationBehavior.name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`BridgedDeviceBasicInformationBehavior.schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`BridgedDeviceBasicInformationBehavior.supervisor`

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

`BridgedDeviceBasicInformationBehavior.supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### #configurePart()

> `private` **#configurePart**(): `Promise`\<`void`\>

Per the specification, BridgedDeviceBasicInformation may only appear on bridged nodes, and bridged nodes may only
appear under aggregator nodes.

Therefore this default implementation of BridgedDeviceBasicInformation injects the BridgedNode device type on the
associated Endpoint and asserts that its parent is a [AggregatorEndpoint](../../../../../endpoint/definitions/system/AggregatorEndpoint/README.md#aggregatorendpoint).

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts#L46)

***

### #emitReachableChange()

> `private` **#emitReachableChange**(`reachable`): `void`

Per the specification.  Not sure what this adds vs. subscribing to attribute changes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reachable` | `boolean` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts#L35)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`[asyncDispose]`](../interfaces/BridgedDeviceBasicInformationBehavior.md#%5Basyncdispose%5D)

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

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`asAdmin`](../interfaces/BridgedDeviceBasicInformationBehavior.md#asadmin)

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

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`assertAttributeEnabled`](../interfaces/BridgedDeviceBasicInformationBehavior.md#assertattributeenabled)

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

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`callback`](../interfaces/BridgedDeviceBasicInformationBehavior.md#callback)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`initialize`](../interfaces/BridgedDeviceBasicInformationBehavior.md#initialize)

#### Source

[packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts#L22)

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

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`reactTo`](../interfaces/BridgedDeviceBasicInformationBehavior.md#reactto)

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

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`requireAttributeEnabled`](../interfaces/BridgedDeviceBasicInformationBehavior.md#requireattributeenabled)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[`BridgedDeviceBasicInformationBehavior`](../interfaces/BridgedDeviceBasicInformationBehavior.md).[`toString`](../interfaces/BridgedDeviceBasicInformationBehavior.md#tostring)

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

`BridgedDeviceBasicInformationBehavior.alter`

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

`BridgedDeviceBasicInformationBehavior.enable`

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

`BridgedDeviceBasicInformationBehavior.for`

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

`BridgedDeviceBasicInformationBehavior.set`

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

`BridgedDeviceBasicInformationBehavior.with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
