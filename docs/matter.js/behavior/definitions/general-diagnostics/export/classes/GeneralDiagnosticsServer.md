[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/general-diagnostics/export](../README.md) / GeneralDiagnosticsServer

# Class: GeneralDiagnosticsServer

This is the default server implementation of GeneralDiagnosticsBehavior.

## Extends

- [`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md)

## Constructors

### new GeneralDiagnosticsServer()

> **new GeneralDiagnosticsServer**(`agent`, `backing`): [`GeneralDiagnosticsServer`](GeneralDiagnosticsServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`GeneralDiagnosticsServer`](GeneralDiagnosticsServer.md)

#### Inherited from

`GeneralDiagnosticsBehavior.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`#agent`](../interfaces/GeneralDiagnosticsBehavior.md##agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`[reference]`](../interfaces/GeneralDiagnosticsBehavior.md#%5Breference%5D)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`agent`](../interfaces/GeneralDiagnosticsBehavior.md#agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`cluster`](../interfaces/GeneralDiagnosticsBehavior.md#cluster)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`context`](../interfaces/GeneralDiagnosticsBehavior.md#context)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`endpoint`](../interfaces/GeneralDiagnosticsBehavior.md#endpoint)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### networkInterfaces$Changing

> **networkInterfaces$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### rebootCount$Changing

> **rebootCount$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### testEventTriggersEnabled$Changing

> **testEventTriggersEnabled$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`boolean`, `any`\>\>

#### Type declaration

##### activeHardwareFaults$Changing

> **activeHardwareFaults$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`HardwareFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md)[], `any`\>\>

##### activeNetworkFaults$Changing

> **activeNetworkFaults$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`NetworkFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md)[], `any`\>\>

##### activeRadioFaults$Changing

> **activeRadioFaults$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`RadioFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md)[], `any`\>\>

##### bootReason$Changing

> **bootReason$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`BootReason`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/BootReason.md), `any`\>\>

##### totalOperationalHours$Changing

> **totalOperationalHours$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### upTime$Changing

> **upTime$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>\>

#### Type declaration

##### networkInterfaces$Changed

> **networkInterfaces$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### rebootCount$Changed

> **rebootCount$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### testEventTriggersEnabled$Changed

> **testEventTriggersEnabled$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`boolean`, `any`\>\>

#### Type declaration

##### activeHardwareFaults$Changed

> **activeHardwareFaults$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`HardwareFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md)[], `any`\>\>

##### activeNetworkFaults$Changed

> **activeNetworkFaults$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`NetworkFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md)[], `any`\>\>

##### activeRadioFaults$Changed

> **activeRadioFaults$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`RadioFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md)[], `any`\>\>

##### bootReason$Changed

> **bootReason$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`BootReason`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/BootReason.md), `any`\>\>

##### totalOperationalHours$Changed

> **totalOperationalHours$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### upTime$Changed

> **upTime$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>\>

#### Type declaration

##### bootReason

> **bootReason**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

The BootReason Event shall indicate the reason that caused the device to start-up.

###### See

MatterSpecification.v11.Core § 11.11.8.4

#### Type declaration

##### hardwareFaultChange?

> `optional` **hardwareFaultChange**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

The HardwareFaultChange Event shall indicate a change in the set of hardware faults currently detected
by the Node.

###### See

MatterSpecification.v11.Core § 11.11.8.1

##### networkFaultChange?

> `optional` **networkFaultChange**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

###### See

MatterSpecification.v11.Core § 11.11.8.3

##### radioFaultChange?

> `optional` **radioFaultChange**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

The RadioFaultChange Event shall indicate a change in the set of radio faults currently detected by the
Node.

###### See

MatterSpecification.v11.Core § 11.11.8.2

#### Inherited from

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`events`](../interfaces/GeneralDiagnosticsBehavior.md#events)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`features`](../interfaces/GeneralDiagnosticsBehavior.md#features)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### internal

> `protected` **internal**: [`Internal`](../namespaces/GeneralDiagnosticsServer/classes/Internal.md)

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L27)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`session`](../interfaces/GeneralDiagnosticsBehavior.md#session)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> **state**: [`State`](../namespaces/GeneralDiagnosticsServer/classes/State.md)

Access the behavior's state.

#### Overrides

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`state`](../interfaces/GeneralDiagnosticsBehavior.md#state)

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L28)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/GeneralDiagnostics/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`GeneralDiagnosticsInterface`](../README.md#generaldiagnosticsinterface)\>\>

#### Inherited from

`GeneralDiagnosticsBehavior.Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### Interface

> `static` `readonly` **Interface**: [`GeneralDiagnosticsInterface`](../README.md#generaldiagnosticsinterface)

#### Inherited from

`GeneralDiagnosticsBehavior.Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### cluster

> `static` `readonly` **cluster**: [`Cluster`](../../../../../cluster/export/namespaces/GeneralDiagnostics/interfaces/Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

`GeneralDiagnosticsBehavior.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/GeneralDiagnostics/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`GeneralDiagnosticsInterface`](../README.md#generaldiagnosticsinterface)\>\>

#### Inherited from

`GeneralDiagnosticsBehavior.defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`GeneralDiagnosticsBehavior.dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`GeneralDiagnosticsBehavior.early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"generalDiagnostics"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`GeneralDiagnosticsBehavior.id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`GeneralDiagnosticsBehavior.name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`GeneralDiagnosticsBehavior.schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`GeneralDiagnosticsBehavior.supervisor`

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

`GeneralDiagnosticsBehavior.supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### #online()

> `private` **#online**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L189)

***

### #triggerActiveHardwareFaultsChangedEvent()

> `private` **#triggerActiveHardwareFaultsChangedEvent**(`current`, `previous`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `current` | [`HardwareFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md)[] |
| `previous` | [`HardwareFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md)[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L100)

***

### #triggerActiveNetworkFaultsChangedEvent()

> `private` **#triggerActiveNetworkFaultsChangedEvent**(`current`, `previous`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `current` | [`NetworkFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md)[] |
| `previous` | [`NetworkFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md)[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L176)

***

### #triggerActiveRadioFaultsChangedEvent()

> `private` **#triggerActiveRadioFaultsChangedEvent**(`current`, `previous`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `current` | [`RadioFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md)[] |
| `previous` | [`RadioFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md)[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L138)

***

### #updateNetworkList()

> `private` **#updateNetworkList**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L215)

***

### #updateTotalOperationalHoursCounter()

> `private` **#updateTotalOperationalHoursCounter**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L208)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`[asyncDispose]`](../interfaces/GeneralDiagnosticsBehavior.md#%5Basyncdispose%5D)

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:276](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L276)

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

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`asAdmin`](../interfaces/GeneralDiagnosticsBehavior.md#asadmin)

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

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`assertAttributeEnabled`](../interfaces/GeneralDiagnosticsBehavior.md#assertattributeenabled)

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

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`callback`](../interfaces/GeneralDiagnosticsBehavior.md#callback)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### clearHardwareFault()

> **clearHardwareFault**(`faultType`): `void`

Clear a hardware fault. This convenience method updates the activeHardwareFaults attribute and sends out the
HardwareFaultChanged event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`HardwareFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md) | The hardware fault to clear. |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L95)

***

### clearNetworkFault()

> **clearNetworkFault**(`faultType`): `void`

Clear a network fault. This convenience method updates the activeNetworkFaults attribute and sends out the
NetworkFaultChanged event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`NetworkFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md) | The network fault to clear. |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L171)

***

### clearRadioFault()

> **clearRadioFault**(`faultType`): `void`

Clear a radio fault. This convenience method updates the activeRadioFaults attribute and sends out the
RadioFaultChanged event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`RadioFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md) | The radio fault to clear. |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L133)

***

### initialize()

> **initialize**(): `void`

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

`void`

#### Overrides

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`initialize`](../interfaces/GeneralDiagnosticsBehavior.md#initialize)

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L37)

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

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`reactTo`](../interfaces/GeneralDiagnosticsBehavior.md#reactto)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L212)

***

### registerHardwareFault()

> **registerHardwareFault**(`faultType`): `void`

Register a hardware fault. This convenience method updates the activeHardwareFaults attribute and sends out the
HardwareFaultChanged event. Make sure to clear the fault when it is resolved.
This method requires that the activeHardwareFaults attribute is activated when the cluster gets initialized.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`HardwareFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md) | The hardware fault to register. |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L82)

***

### registerNetworkFault()

> **registerNetworkFault**(`faultType`): `void`

Register a network fault. This convenience method updates the activeNetworkFaults attribute and sends out the
NetworkFaultChanged event. Make sure to clear the fault when it is resolved.
This method requires that the activeNetworkFaults attribute is activated when the cluster gets initialized.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`NetworkFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md) | The network fault to register. |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L158)

***

### registerRadioFault()

> **registerRadioFault**(`faultType`): `void`

Register a radio fault. This convenience method updates the activeRadioFaults attribute and sends out the
RadioFaultChanged event. Make sure to clear the fault when it is resolved.
This method requires that the activeRadioFaults attribute is activated when the cluster gets initialized.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`RadioFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md) | The radio fault to register. |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L120)

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

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`requireAttributeEnabled`](../interfaces/GeneralDiagnosticsBehavior.md#requireattributeenabled)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### testEventTrigger()

> **testEventTrigger**(`__namedParameters`): `void`

This command shall be supported to provide a means for certification tests to trigger some test-
plan-specific events, necessary to assist in automation of device interactions for some certification test
cases. This command shall NOT cause any changes to the state of the device that persist after the last
fabric is removed.

The fields for the TestEventTrigger command are as follows:

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### Overrides

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`testEventTrigger`](../interfaces/GeneralDiagnosticsBehavior.md#testeventtrigger)

#### See

MatterSpecification.v11.Core § 11.11.7.1

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L68)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[`GeneralDiagnosticsBehavior`](../interfaces/GeneralDiagnosticsBehavior.md).[`toString`](../interfaces/GeneralDiagnosticsBehavior.md#tostring)

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

`GeneralDiagnosticsBehavior.alter`

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

`GeneralDiagnosticsBehavior.enable`

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

`GeneralDiagnosticsBehavior.for`

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

`GeneralDiagnosticsBehavior.set`

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

`GeneralDiagnosticsBehavior.with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
