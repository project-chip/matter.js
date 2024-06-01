[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/basic-information/export](../README.md) / BasicInformationServer

# Class: BasicInformationServer

This is the default server implementation of BasicInformationBehavior.

## Extends

- [`ClusterBehavior`](../../../../cluster/export/classes/ClusterBehavior.md)\<`this`\> & `Omit`\<[`Instance`](../../../../cluster/export/namespaces/ClusterBehavior/README.md#instancecbi)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), `object`\>, `"state"` \| `"initialize"` \| *typeof* `asyncDispose` \| `"events"` \| `"cluster"`\> & `Omit`\<`object` & `object`, `never`\> & `object`

## Constructors

### new BasicInformationServer()

> **new BasicInformationServer**(`agent`, `backing`): [`BasicInformationServer`](BasicInformationServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`BasicInformationServer`](BasicInformationServer.md)

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `"startUp"` \| `"shutDown"` \| `"leave"` \| `"reachableChanged"` \| `"dataModelRevision$Changing"` \| `"vendorName$Changing"` \| `"vendorId$Changing"` \| `"productName$Changing"` \| `"productId$Changing"` \| `"nodeLabel$Changing"` \| `"location$Changing"` \| `"hardwareVersion$Changing"` \| `"hardwareVersionString$Changing"` \| `"softwareVersion$Changing"` \| `"softwareVersionString$Changing"` \| `"capabilityMinima$Changing"` \| `"manufacturingDate$Changing"` \| `"partNumber$Changing"` \| `"productUrl$Changing"` \| `"productLabel$Changing"` \| `"serialNumber$Changing"` \| `"localConfigDisabled$Changing"` \| `"reachable$Changing"` \| `"uniqueId$Changing"` \| `"productAppearance$Changing"` \| `"dataModelRevision$Changed"` \| `"vendorName$Changed"` \| `"vendorId$Changed"` \| `"productName$Changed"` \| `"productId$Changed"` \| `"nodeLabel$Changed"` \| `"location$Changed"` \| `"hardwareVersion$Changed"` \| `"hardwareVersionString$Changed"` \| `"softwareVersion$Changed"` \| `"softwareVersionString$Changed"` \| `"capabilityMinima$Changed"` \| `"manufacturingDate$Changed"` \| `"partNumber$Changed"` \| `"productUrl$Changed"` \| `"productLabel$Changed"` \| `"serialNumber$Changed"` \| `"localConfigDisabled$Changed"` \| `"reachable$Changed"` \| `"uniqueId$Changed"` \| `"productAppearance$Changed"`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### capabilityMinima$Changing

> **capabilityMinima$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

##### dataModelRevision$Changing

> **dataModelRevision$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### hardwareVersion$Changing

> **hardwareVersion$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### hardwareVersionString$Changing

> **hardwareVersionString$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`string`, `any`\>\>

##### location$Changing

> **location$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<`string`, `any`\>\>

##### nodeLabel$Changing

> **nodeLabel$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<`string`, `any`\>\>

##### productId$Changing

> **productId$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### productName$Changing

> **productName$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`string`, `any`\>\>

##### softwareVersion$Changing

> **softwareVersion$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### softwareVersionString$Changing

> **softwareVersionString$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`string`, `any`\>\>

##### vendorId$Changing

> **vendorId$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`VendorId`](../../../../../datatype/export/README.md#vendorid), `any`\>\>

##### vendorName$Changing

> **vendorName$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`string`, `any`\>\>

#### Type declaration

##### localConfigDisabled$Changing

> **localConfigDisabled$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>\>

##### manufacturingDate$Changing

> **manufacturingDate$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### partNumber$Changing

> **partNumber$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### productAppearance$Changing

> **productAppearance$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

##### productLabel$Changing

> **productLabel$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### productUrl$Changing

> **productUrl$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### reachable$Changing

> **reachable$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`boolean`, `any`\>\>

##### serialNumber$Changing

> **serialNumber$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### uniqueId$Changing

> **uniqueId$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

#### Type declaration

##### capabilityMinima$Changed

> **capabilityMinima$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

##### dataModelRevision$Changed

> **dataModelRevision$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### hardwareVersion$Changed

> **hardwareVersion$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### hardwareVersionString$Changed

> **hardwareVersionString$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`string`, `any`\>\>

##### location$Changed

> **location$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<`string`, `any`\>\>

##### nodeLabel$Changed

> **nodeLabel$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<`string`, `any`\>\>

##### productId$Changed

> **productId$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### productName$Changed

> **productName$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`string`, `any`\>\>

##### softwareVersion$Changed

> **softwareVersion$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### softwareVersionString$Changed

> **softwareVersionString$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`string`, `any`\>\>

##### vendorId$Changed

> **vendorId$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`VendorId`](../../../../../datatype/export/README.md#vendorid), `any`\>\>

##### vendorName$Changed

> **vendorName$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`string`, `any`\>\>

#### Type declaration

##### localConfigDisabled$Changed

> **localConfigDisabled$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>\>

##### manufacturingDate$Changed

> **manufacturingDate$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### partNumber$Changed

> **partNumber$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### productAppearance$Changed

> **productAppearance$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

##### productLabel$Changed

> **productLabel$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### productUrl$Changed

> **productUrl$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### reachable$Changed

> **reachable$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`boolean`, `any`\>\>

##### serialNumber$Changed

> **serialNumber$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

##### uniqueId$Changed

> **uniqueId$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>\>

#### Type declaration

##### leave

> **leave**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<`Omit`\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>, `"optional"`\> & `object`\>

The Leave event SHOULD be generated by a Node prior to permanently leaving a given Fabric, such as when
the RemoveFabric command is invoked for a given fabric, or triggered by factory reset or some other
manufacturer specific action to disable or reset the operational data in the Node. When a Leave event is
generated, it SHOULD be assumed that the fabric recorded in the event is no longer usable, and
subsequent interactions targeting that fabric will most likely fail.

Upon receipt of Leave Event on a subscription, the receiving Node may update other nodes in the fabric
by removing related bindings, access control list entries and other data referencing the leaving Node.

###### See

MatterSpecification.v11.Core § 11.1.6.3

##### shutDown

> **shutDown**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<`Omit`\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>, `"optional"`\> & `object`\>

The ShutDown event SHOULD be generated by a Node prior to any orderly shutdown sequence on a best-effort
basis. When a ShutDown event is generated, it SHOULD be the last Data Model event recorded by the Node.
This event SHOULD be delivered urgently to current subscribers on a best- effort basis. Any subsequent
incoming interactions to the Node may be dropped until the completion of a future boot or reboot process.

###### See

MatterSpecification.v11.Core § 11.1.6.2

##### startUp

> **startUp**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<`Omit`\<[`Event`](../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>, `"optional"`\> & `object`\>

The StartUp event shall be generated by a Node as soon as reasonable after completing a boot or reboot
process. The StartUp event SHOULD be the first Data Model event recorded by the Node after it completes
a boot or reboot process.

###### See

MatterSpecification.v11.Core § 11.1.6.1

#### Type declaration

##### reachableChanged?

> `optional` **reachableChanged**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

This event shall be supported if and only if the Reachable attribute is supported.

This event (when supported) shall be generated when there is a change in the Reachable attribute.

Its main use case is in the derived Bridged Device Basic Information cluster.

###### See

MatterSpecification.v11.Core § 11.1.6.4

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `"location"` \| `"vendorId"` \| `"serialNumber"` \| `"productId"` \| `"vendorName"` \| `"softwareVersion"` \| `"productName"` \| `"nodeLabel"` \| `"hardwareVersion"` \| `"hardwareVersionString"` \| `"softwareVersionString"` \| `"manufacturingDate"` \| `"partNumber"` \| `"productUrl"` \| `"productLabel"` \| `"reachable"` \| `"uniqueId"` \| `"productAppearance"` \| `"dataModelRevision"` \| `"localConfigDisabled"` \| `"capabilityMinima"`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### location

> **location**: `string`

This attribute shall be an ISO 3166-1 alpha-2 code to represent the country, dependent territory, or
special area of geographic interest in which the Node is located at the time of the attribute being set.
This attribute shall be set during initial commissioning (unless already set) and may be updated by
further reconfigurations. This attribute may affect some regulatory aspects of the Node’s operation,
such as radio transmission power levels in given spectrum allocation bands if technologies where this is
applicable are used. The Location’s region code shall be interpreted in a case-insensitive manner. If
the Node cannot understand the location code with which it was configured, or the location code has not
yet been configured, it shall configure itself in a region- agnostic manner as determined by the vendor,
avoiding region-specific assumptions as much as is practical. The special value XX shall indicate that
region-agnostic mode is used.

###### See

MatterSpecification.v11.Core § 11.1.5.7

##### nodeLabel

> **nodeLabel**: `string`

This attribute shall represent a user defined name for the Node. This attribute SHOULD be set during
initial commissioning and may be updated by further reconfigurations.

###### See

MatterSpecification.v11.Core § 11.1.5.6

#### Type declaration

##### localConfigDisabled?

> `optional` **localConfigDisabled**: `boolean`

This attribute shall allow a local Node configuration to be disabled. When this attribute is set to True
the Node shall disable the ability to configure the Node through an on-Node user interface. The value of
the LocalConfigDisabled attribute shall NOT in any way modify, disable, or otherwise affect the user’s
ability to trigger a factory reset on the Node.

###### See

MatterSpecification.v11.Core § 11.1.5.17

##### reachable?

> `optional` **reachable**: `boolean`

This attribute (when used) shall indicate whether the Node can be reached. For a native Node this is
implicitly True (and its use is optional).

Its main use case is in the derived Bridged Device Basic Information cluster where it is used to
indicate whether the bridged device is reachable by the bridge over the non-native network.

###### See

MatterSpecification.v11.Core § 11.1.5.18

#### Type declaration

##### capabilityMinima

> **capabilityMinima**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

This attribute shall provide the minimum guaranteed value for some system-wide resource capabilities
that are not otherwise cluster-specific and do not appear elsewhere. This attribute may be used by
clients to optimize communication with Nodes by allowing them to use more than the strict minimum values
required by this specification, wherever available.

The values supported by the server in reality may be larger than the values provided in this attribute,
such as if a server is not resource-constrained at all. However, clients SHOULD only rely on the amounts
provided in this attribute.

Note that since the fixed values within this attribute may change over time, both increasing and
decreasing, as software versions change for a given Node, clients SHOULD take care not to assume forever
unchanging values and SHOULD NOT cache this value permanently at Commissioning time.

###### See

MatterSpecification.v11.Core § 11.1.5.20

###### Type declaration

###### caseSessionsPerFabric

> **caseSessionsPerFabric**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the actual minimum number of concurrent CASE sessions that are supported per
fabric.

This value shall NOT be smaller than the required minimum indicated in Section 4.13.2.8, “Minimal Number of
CASE Sessions”.

###### See

MatterSpecification.v11.Core § 11.1.4.1.1

###### subscriptionsPerFabric

> **subscriptionsPerFabric**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the actual minimum number of concurrent subscriptions supported per fabric.

This value shall NOT be smaller than the required minimum indicated in Section 8.5.1, “Subscribe
Transaction”.

###### See

MatterSpecification.v11.Core § 11.1.4.1.2

##### dataModelRevision

> **dataModelRevision**: `number`

This attribute shall be set to the revision number of the Data Model against which the Node is certified.

###### See

MatterSpecification.v11.Core § 11.1.5.1

##### hardwareVersion

> **hardwareVersion**: `number`

This attribute shall specify the version number of the hardware of the Node. The meaning of its value,
and the versioning scheme, are vendor defined.

###### See

MatterSpecification.v11.Core § 11.1.5.8

##### hardwareVersionString

> **hardwareVersionString**: `string`

This attribute shall specify the version number of the hardware of the Node. The meaning of its value,
and the versioning scheme, are vendor defined. The HardwareVersionString attribute shall be used to
provide a more user-friendly value than that represented by the HardwareVersion attribute.

###### See

MatterSpecification.v11.Core § 11.1.5.9

##### productId

> **productId**: `number`

This attribute shall specify the Product ID assigned by the vendor that is unique to the specific
product of the Node.

###### See

MatterSpecification.v11.Core § 11.1.5.5

##### productName

> **productName**: `string`

This attribute shall specify a human readable (displayable) name of the model for the Node such as the
model number (or other identifier) assigned by the vendor.

###### See

MatterSpecification.v11.Core § 11.1.5.4

##### softwareVersion

> **softwareVersion**: `number`

This attribute shall contain the current version number for the software running on this Node. The
version number can be compared using a total ordering to determine if a version is logically newer than
another one. A larger value of SoftwareVersion is newer than a lower value, from the perspective of
software updates (see Section 11.19.3.3, “Availability of Software Images”). Nodes may query this field
to determine the currently running version of software on another given Node.

###### See

MatterSpecification.v11.Core § 11.1.5.10

##### softwareVersionString

> **softwareVersionString**: `string`

This attribute shall contain a current human-readable representation for the software running on the
Node. This version information may be conveyed to users. The maximum length of the SoftwareVersionString
attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use simple 7-bit ASCII alphanumeric
and punctuation characters, so as to simplify the conveyance of the value to a variety of cultures.

Examples of version strings include "1.0", "1.2.3456", "1.2-2", "1.0b123", "1.2_3".

###### See

MatterSpecification.v11.Core § 11.1.5.11

##### vendorId

> **vendorId**: [`VendorId`](../../../../../datatype/export/README.md#vendorid)

This attribute shall specify the Vendor ID.

###### See

MatterSpecification.v11.Core § 11.1.5.3

##### vendorName

> **vendorName**: `string`

This attribute shall specify a human readable (displayable) name of the vendor for the Node.

###### See

MatterSpecification.v11.Core § 11.1.5.2

#### Type declaration

##### manufacturingDate?

> `optional` **manufacturingDate**: `string`

This attribute shall specify the date that the Node was manufactured. The first 8 characters shall
specify the date of manufacture of the Node in international date notation according to ISO 8601, i.e.,
YYYYMMDD, e.g., 20060814. The final 8 characters may include country, factory, line, shift or other
related information at the option of the vendor. The format of this information is vendor

defined.

###### See

MatterSpecification.v11.Core § 11.1.5.12

##### partNumber?

> `optional` **partNumber**: `string`

This attribute shall specify a human-readable (displayable) vendor assigned part number for the Node
whose meaning and numbering scheme is vendor defined.

Multiple products (and hence PartNumbers) can share a ProductID. For instance, there may be different
packaging (with different PartNumbers) for different regions; also different colors of a product might
share the ProductID but may have a different PartNumber.

###### See

MatterSpecification.v11.Core § 11.1.5.13

##### productAppearance?

> `optional` **productAppearance**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

###### Type declaration

###### finish

> **finish**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<[`ProductFinish`](../../../../../cluster/export/namespaces/BasicInformation/enumerations/ProductFinish.md)\>

###### primaryColor

> **primaryColor**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`Color`](../../../../../cluster/export/namespaces/BasicInformation/enumerations/Color.md)\>

##### productLabel?

> `optional` **productLabel**: `string`

This attribute shall specify a vendor specific human readable (displayable) product label. The
ProductLabel attribute may be used to provide a more user-friendly value than that represented by the
ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as defined
within the VendorName attribute.

###### See

MatterSpecification.v11.Core § 11.1.5.15

##### productUrl?

> `optional` **productUrl**: `string`

This attribute shall specify a link to a product specific web page. The syntax of the ProductURL
attribute shall follow the syntax as specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. The
specified URL SHOULD resolve to a maintained web page available for the lifetime of the product. The
maximum length of the ProductUrl attribute is 256 ASCII characters.

###### See

MatterSpecification.v11.Core § 11.1.5.14

##### serialNumber?

> `optional` **serialNumber**: `string`

This attributes shall specify a human readable (displayable) serial number.

###### See

MatterSpecification.v11.Core § 11.1.5.16

##### uniqueId?

> `optional` **uniqueId**: `string`

This attribute (when used) shall indicate a unique identifier for the device, which is constructed in a
manufacturer specific manner.

It may be constructed using a permanent device identifier (such as device MAC address) as basis. In
order to prevent tracking,

  • it SHOULD NOT be identical to (or easily derived from) such permanent device identifier

  • it SHOULD be updated when the device is factory reset

  • it shall not be identical to the SerialNumber attribute

  • it shall not be printed on the product or delivered with the product The value does not need to be
    human readable.

###### See

MatterSpecification.v11.Core § 11.1.5.19

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).state`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`object`\>\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), `object`\>\>

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### ExtensionInterface

> `static` `readonly` **ExtensionInterface**: `object`

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).ExtensionInterface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

***

### Interface

> `static` `readonly` **Interface**: `object`

#### components

> **components**: `never`[] = `[]`

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### Internal()

> `static` `readonly` **Internal**: () => `object`

#### Returns

`object`

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).Internal`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

***

### State()

> `static` `readonly` **State**: () => [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`object`\>\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), `object`\>\>

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`object`\>\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), `object`\>\>

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).State`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

***

### cluster

> `static` `readonly` **cluster**: [`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`object`\>\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`object`\>\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../cluster/export/namespaces/BasicInformation/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), `object`\>\>

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"basicInformation"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).supervisor`

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### #emitReachableChange()

> `private` **#emitReachableChange**(`reachable`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reachable` | `boolean` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L88)

***

### #handleRemovedFabric()

> `private` **#handleRemovedFabric**(`__namedParameters`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Fabric`](../../../../../fabric/export/classes/Fabric.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L92)

***

### #online()

> `private` **#online**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L81)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `void`

#### Returns

`void`

#### Overrides

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).[asyncDispose]`

#### Source

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L77)

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).asAdmin`

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).assertAttributeEnabled`

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).callback`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

#### Overrides

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).initialize`

#### Source

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L27)

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).reactTo`

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).toString`

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).alter`

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).enable`

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).for`

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).set`

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

`BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
