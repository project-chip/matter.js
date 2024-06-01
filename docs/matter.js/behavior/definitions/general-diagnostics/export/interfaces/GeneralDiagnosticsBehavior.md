[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/general-diagnostics/export](../README.md) / GeneralDiagnosticsBehavior

# Interface: GeneralDiagnosticsBehavior

## Extends

- [`GeneralDiagnosticsBehaviorType`](../-internal-/README.md#generaldiagnosticsbehaviortype)

## Extended by

- [`GeneralDiagnosticsServer`](../classes/GeneralDiagnosticsServer.md)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`GeneralDiagnosticsBehaviorType.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`GeneralDiagnosticsBehaviorType.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`GeneralDiagnosticsBehaviorType.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`GeneralDiagnosticsBehaviorType.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`GeneralDiagnosticsBehaviorType.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`GeneralDiagnosticsBehaviorType.endpoint`

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

`GeneralDiagnosticsBehaviorType.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

`GeneralDiagnosticsBehaviorType.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`GeneralDiagnosticsBehaviorType.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### networkInterfaces

> **networkInterfaces**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

The NetworkInterfaces attribute shall be a list of NetworkInterface structs. Each logical network
interface on the Node shall be represented by a single entry within the NetworkInterfaces attribute.

###### See

MatterSpecification.v11.Core § 11.11.6.1

##### rebootCount

> **rebootCount**: `number`

The RebootCount attribute shall indicate a best-effort count of the number of times the Node has
rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The RebootCount
attribute shall NOT be incremented when a Node wakes from a low-power or sleep state. The RebootCount
attribute shall only be reset to 0 upon a factory reset of the Node.

###### See

MatterSpecification.v11.Core § 11.11.6.2

##### testEventTriggersEnabled

> **testEventTriggersEnabled**: `boolean`

The TestEventTriggersEnabled attribute shall indicate whether the Node has any TestEventTrigger
configured. When this attribute is true, the Node has been configured with one or more test event
triggers by virtue of the internally programmed EnableKey value (see Section 11.11.7.1,
“TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by Administrators
to detect if a device was inadvertently commissioned with test event trigger mode enabled, and take
appropriate action (e.g. warn the user and/or offer to remove all fabrics on the Node).

###### See

MatterSpecification.v11.Core § 11.11.6.9

#### Type declaration

##### activeHardwareFaults?

> `optional` **activeHardwareFaults**: [`HardwareFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md)[]

The ActiveHardwareFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate HardwareFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific HardwareFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
HardwareFaultEnum value shall be removed from this list. An empty list shall indicate there are
currently no active faults. The order of this list SHOULD have no significance. Clients interested in
monitoring changes in active faults may subscribe to this attribute, or they may subscribe to
HardwareFaultChange.

###### See

MatterSpecification.v11.Core § 11.11.6.6

##### activeNetworkFaults?

> `optional` **activeNetworkFaults**: [`NetworkFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md)[]

The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange.

###### See

MatterSpecification.v11.Core § 11.11.6.8

##### activeRadioFaults?

> `optional` **activeRadioFaults**: [`RadioFault`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md)[]

The ActiveRadioFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate RadioFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific RadioFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
RadioFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to RadioFaultChange.

###### See

MatterSpecification.v11.Core § 11.11.6.7

##### bootReason?

> `optional` **bootReason**: [`BootReason`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/BootReason.md)

The BootReason attribute shall indicate the reason for the Node’s most recent boot.

###### See

MatterSpecification.v11.Core § 11.11.6.5

##### totalOperationalHours?

> `optional` **totalOperationalHours**: `number`

The TotalOperationalHours attribute shall indicate a best-effort attempt at tracking the length of time,
in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be incremented
to account for the periods of time that a Node is in a low-power or sleep state. The

TotalOperationalHours attribute shall only be reset upon a factory reset of the Node.

###### See

MatterSpecification.v11.Core § 11.11.6.4

##### upTime?

> `optional` **upTime**: `number` \| `bigint`

The UpTime attribute shall indicate a best-effort assessment of the length of time, in seconds, since
the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods of time
that a Node is in a low-power or sleep state. The UpTime attribute shall only be reset upon a device
reboot.

###### See

MatterSpecification.v11.Core § 11.11.6.3

#### Inherited from

`GeneralDiagnosticsBehaviorType.state`

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

`GeneralDiagnosticsBehaviorType.[asyncDispose]`

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

`GeneralDiagnosticsBehaviorType.asAdmin`

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

`GeneralDiagnosticsBehaviorType.assertAttributeEnabled`

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

`GeneralDiagnosticsBehaviorType.callback`

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

`GeneralDiagnosticsBehaviorType.initialize`

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

`GeneralDiagnosticsBehaviorType.reactTo`

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

`GeneralDiagnosticsBehaviorType.requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### testEventTrigger()

> **testEventTrigger**(`request`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

This command shall be supported to provide a means for certification tests to trigger some test-
plan-specific events, necessary to assist in automation of device interactions for some certification test
cases. This command shall NOT cause any changes to the state of the device that persist after the last
fabric is removed.

The fields for the TestEventTrigger command are as follows:

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`GeneralDiagnosticsBehaviorType.testEventTrigger`

#### See

MatterSpecification.v11.Core § 11.11.7.1

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts#L36)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`GeneralDiagnosticsBehaviorType.toString`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)
