[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/general-commissioning/export](../README.md) / GeneralCommissioningServer

# Class: GeneralCommissioningServer

This is the default server implementation of GeneralCommissioningBehavior.

## Extends

- [`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md)

## Constructors

### new GeneralCommissioningServer()

> **new GeneralCommissioningServer**(`agent`, `backing`): [`GeneralCommissioningServer`](GeneralCommissioningServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`GeneralCommissioningServer`](GeneralCommissioningServer.md)

#### Inherited from

`GeneralCommissioningBehavior.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`#agent`](../interfaces/GeneralCommissioningBehavior.md##agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`[reference]`](../interfaces/GeneralCommissioningBehavior.md#%5Breference%5D)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`agent`](../interfaces/GeneralCommissioningBehavior.md#agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`cluster`](../interfaces/GeneralCommissioningBehavior.md#cluster)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`context`](../interfaces/GeneralCommissioningBehavior.md#context)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`endpoint`](../interfaces/GeneralCommissioningBehavior.md#endpoint)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### basicCommissioningInfo$Changing

> **basicCommissioningInfo$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

##### breadcrumb$Changing

> **breadcrumb$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<`number` \| `bigint`, `any`\>\>

##### locationCapability$Changing

> **locationCapability$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`RegulatoryLocationType`](../../../../../cluster/export/namespaces/GeneralCommissioning/enumerations/RegulatoryLocationType.md), `any`\>\>

##### regulatoryConfig$Changing

> **regulatoryConfig$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`RegulatoryLocationType`](../../../../../cluster/export/namespaces/GeneralCommissioning/enumerations/RegulatoryLocationType.md), `any`\>\>

##### supportsConcurrentConnection$Changing

> **supportsConcurrentConnection$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`boolean`, `any`\>\>

#### Type declaration

##### basicCommissioningInfo$Changed

> **basicCommissioningInfo$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

##### breadcrumb$Changed

> **breadcrumb$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<`number` \| `bigint`, `any`\>\>

##### locationCapability$Changed

> **locationCapability$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<[`RegulatoryLocationType`](../../../../../cluster/export/namespaces/GeneralCommissioning/enumerations/RegulatoryLocationType.md), `any`\>\>

##### regulatoryConfig$Changed

> **regulatoryConfig$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`RegulatoryLocationType`](../../../../../cluster/export/namespaces/GeneralCommissioning/enumerations/RegulatoryLocationType.md), `any`\>\>

##### supportsConcurrentConnection$Changed

> **supportsConcurrentConnection$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`boolean`, `any`\>\>

#### Inherited from

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`events`](../interfaces/GeneralCommissioningBehavior.md#events)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`features`](../interfaces/GeneralCommissioningBehavior.md#features)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`session`](../interfaces/GeneralCommissioningBehavior.md#session)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> **state**: [`State`](../namespaces/GeneralCommissioningServer/classes/State.md)

Access the behavior's state.

#### Overrides

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`state`](../interfaces/GeneralCommissioningBehavior.md#state)

#### Source

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts#L26)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/GeneralCommissioning/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`GeneralCommissioningInterface`](../README.md#generalcommissioninginterface)\>\>

#### Inherited from

`GeneralCommissioningBehavior.Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### ExtensionInterface

> `static` `readonly` **ExtensionInterface**: `object`

#### Inherited from

`GeneralCommissioningBehavior.ExtensionInterface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

***

### Interface

> `static` `readonly` **Interface**: [`GeneralCommissioningInterface`](../README.md#generalcommissioninginterface)

#### Inherited from

`GeneralCommissioningBehavior.Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### Internal()

> `static` `readonly` **Internal**: () => `object`

#### Returns

`object`

#### Inherited from

`GeneralCommissioningBehavior.Internal`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

***

### cluster

> `static` `readonly` **cluster**: [`Cluster`](../../../../../cluster/export/namespaces/GeneralCommissioning/interfaces/Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

`GeneralCommissioningBehavior.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/GeneralCommissioning/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`GeneralCommissioningInterface`](../README.md#generalcommissioninginterface)\>\>

#### Inherited from

`GeneralCommissioningBehavior.defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`GeneralCommissioningBehavior.dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`GeneralCommissioningBehavior.early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"generalCommissioning"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`GeneralCommissioningBehavior.id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`GeneralCommissioningBehavior.name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`GeneralCommissioningBehavior.schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`GeneralCommissioningBehavior.supervisor`

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

`GeneralCommissioningBehavior.supports`

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

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`[asyncDispose]`](../interfaces/GeneralCommissioningBehavior.md#%5Basyncdispose%5D)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L198)

***

### armFailSafe()

> **armFailSafe**(`__namedParameters`): `Promise`\<`object`\>

Success or failure of this command shall be communicated by the ArmFailSafeResponse command, unless some
data model validations caused a failure status code to be issued during the processing of the command.

If the fail-safe timer is not currently armed, the commissioning window is open, and the command was
received over a CASE session, the command shall leave the current fail-safe state unchanged and immediately
respond with an ArmFailSafeResponse containing an ErrorCode value of BusyWithOtherAdmin. This is done to
allow commissioners, which use PASE connections, the opportunity to use the failsafe during the relatively
short commissioning window.

Otherwise, the command shall arm or re-arm the "fail-safe timer" with an expiry time set for a duration of
ExpiryLengthSeconds, or disarm it, depending on the situation:

  • If ExpiryLengthSeconds is 0 and the fail-safe timer was already armed and the accessing fabric matches
    the Fabric currently associated with the fail-safe context, then the fail-safe timer shall be
    immediately expired (see further below for side-effects of expiration).

  • If ExpiryLengthSeconds is 0 and the fail-safe timer was not armed, then this command invocation shall
    lead to a success response with no side-effects against the fail-safe context.

  • If ExpiryLengthSeconds is non-zero and the fail-safe timer was not currently armed, then the fail-safe
    timer shall be armed for that duration.

  • If ExpiryLengthSeconds is non-zero and the fail-safe timer was currently armed, and the accessing Fabric
    matches the fail-safe context’s associated Fabric, then the fail-safe timer shall be re- armed to expire
    in ExpiryLengthSeconds.

  • Otherwise, the command shall leave the current fail-safe state unchanged and immediately respond with
    ArmFailSafeResponse containing an ErrorCode value of BusyWithOtherAdmin, indicating a likely conflict
    between commissioners.

The value of the Breadcrumb field shall be written to the Breadcrumb Attribute on successful execution of
the command.

If the receiver restarts unexpectedly (e.g., power interruption, software crash, or other reset) the
receiver shall behave as if the fail-safe timer expired and perform the sequence of clean-up steps listed
below.

On successful execution of the command, the ErrorCode field of the ArmFailSafeResponse shall be set to OK.

### Fail Safe Context

When first arming the fail-safe timer, a 'Fail Safe Context' shall be created on the receiver, to track the
following state information while the fail-safe is armed:

  • The fail-safe timer duration.

  • The state of all Network Commissioning Networks attribute configurations, to allow recovery of
    connectivity after Fail-Safe expiry.

  • Whether an AddNOC command or UpdateNOC command has taken place.

  • A Fabric Index for the fabric-scoping of the context, starting at the accessing fabric index for the
    ArmFailSafe command, and updated with the Fabric Index associated with an AddNOC command or an UpdateNOC
    command being invoked successfully during the ongoing Fail-Safe timer period.

  • The operational credentials associated with any Fabric whose configuration is affected by the UpdateNOC
    command.

  • Optionally: the previous state of non-fabric-scoped data that is mutated during the fail-safe period.

Note the following to assist in understanding the above state-keeping, which summarizes other normative
requirements in the respective sections:

  • The AddNOC command can only be invoked once per contiguous non-expiring fail-safe timer period, and only
    if no UpdateNOC command was previously processed within the same fail-safe timer period.

  • The UpdateNOC command can only be invoked once per contiguous non-expiring fail-safe timer

period, can only be invoked over a CASE session, and only if no AddNOC command was previously processed in
the same fail-safe timer period.

On creation of the Fail Safe Context a second timer shall be created to expire at
MaxCumulativeFailsafeSeconds as specified in BasicCommissioningInfo. This Cumulative Fail Safe Context timer
(CFSC timer) serves to limit the lifetime of any particular Fail Safe Context; it shall NOT be extended or
modified on subsequent invocations of ArmFailSafe associated with this Fail Safe Context. Upon expiry of the
CFSC timer, the receiver shall execute cleanup behavior equivalent to that of fail-safe timer expiration as
detailed in Section 11.9.6.2.2, “Behavior on expiry of Fail-Safe timer”. Termination of the session prior to
the expiration of that timer for any reason (including a successful end of commissioning or an expiry of a
fail-safe timer) shall also delete the CFSC timer.

### Behavior on expiry of Fail-Safe timer

If the fail-safe timer expires before the CommissioningComplete command is successfully invoked, the
following sequence of clean-up steps shall be executed, in order, by the receiver:

  1. Terminate any open PASE secure session by clearing any associated Secure Session Context at the Server.

  2. Revoke the temporary administrative privileges granted to any open PASE session (see Section 6.6.2.8,
     “Bootstrapping of the Access Control Cluster”) at the Server.

  3. If an AddNOC or UpdateNOC command has been successfully invoked, terminate all CASE sessions associated
     with the Fabric whose Fabric Index is recorded in the Fail-Safe context (see Section 11.9.6.2,
     “ArmFailSafe Command”) by clearing any associated Secure Session Context at the Server.

  4. Reset the configuration of all Network Commissioning Networks attribute to their state prior to the
     Fail-Safe being armed.

  5. If an UpdateNOC command had been successfully invoked, revert the state of operational key pair, NOC
     and ICAC for that Fabric to the state prior to the Fail-Safe timer being armed, for the Fabric Index
     that was the subject of the UpdateNOC command.

  6. If an AddNOC command had been successfully invoked, achieve the equivalent effect of invoking the
     RemoveFabric command against the Fabric Index stored in the Fail-Safe Context for the Fabric Index that
     was the subject of the AddNOC command. This shall remove all associations to that Fabric including all
     fabric-scoped data, and may possibly factory-reset the device depending on current device state. This
     shall only apply to Fabrics added during the fail-safe period as the result of the AddNOC command.

  7. Remove any RCACs added by the AddTrustedRootCertificate command that are not currently referenced by
     any entry in the Fabrics attribute.

  8. Reset the Breadcrumb attribute to zero.

  9. Optionally: if no factory-reset resulted from the previous steps, it is RECOMMENDED that the Node
     rollback the state of all non fabric-scoped data present in the Fail-Safe context.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`object`\>

##### debugText

> **debugText**: `string` = `""`

##### errorCode

> **errorCode**: [`CommissioningError`](../../../../../cluster/export/namespaces/GeneralCommissioning/enumerations/CommissioningError.md) = `GeneralCommissioning.CommissioningError.Ok`

#### Overrides

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`armFailSafe`](../interfaces/GeneralCommissioningBehavior.md#armfailsafe)

#### See

MatterSpecification.v11.Core § 11.9.6.2

#### Source

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts#L44)

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

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`asAdmin`](../interfaces/GeneralCommissioningBehavior.md#asadmin)

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

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`assertAttributeEnabled`](../interfaces/GeneralCommissioningBehavior.md#assertattributeenabled)

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

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`callback`](../interfaces/GeneralCommissioningBehavior.md#callback)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### commissioningComplete()

> **commissioningComplete**(): `Promise`\<`object`\>

This command has no data.

Success or failure of this command shall be communicated by the CommissioningCompleteResponse command,
unless some data model validations caused a failure status code to be issued during the processing of the
command.

This command signals the Server that the Commissioner or Administrator has successfully completed all steps
needed during the Fail-Safe period, such as commissioning (see Section 5.5, “Commissioning Flows”) or other
Administrator operations requiring usage of the Fail Safe timer. It ensures that the Server is configured in
a state such that it still has all necessary elements to be fully operable within a Fabric, such as ACL
entries (see Access Control Cluster) and operational credentials (see Section 6.4, “Node Operational
Credentials Specification”), and that the Node is reachable using CASE (see Section 4.13.2, “Certificate
Authenticated Session Establishment (CASE)”) over an operational network.

An ErrorCode of NoFailSafe shall be responded to the invoker if the CommissioningComplete command was
received when no Fail-Safe context exists.

This command is fabric-scoped, so cannot be issued over a session that does not have an associated fabric,
i.e. over PASE session prior to an AddNOC command. In addition, this command is only permitted over CASE and
must be issued by a node associated with the ongoing Fail-Safe context. An ErrorCode of
InvalidAuthentication shall be responded to the invoker if the CommissioningComplete command was received
outside a CASE session (e.g., over Group messaging, or PASE session after AddNOC), or if the accessing
fabric is not the one associated with the ongoing Fail-Safe context.

This command shall only result in success with an ErrorCode value of OK in the CommissioningCompleteResponse
if received over a CASE session and the accessing fabric index matches the Fabric Index associated with the
current Fail-Safe context. In other words:

  • If no AddNOC command had been successfully invoked, the CommissioningComplete command must originate
    from the Fabric that initiated the Fail-Safe context.

  • After an AddNOC command has been successfully invoked, the CommissioningComplete command must originate
    from the Fabric which was joined through the execution of that command, which updated the Fail-Safe
    context’s Fabric Index.

On successful execution of the CommissioningComplete command, where the CommissioningCompleteResponse has an
ErrorCode of OK, the following actions shall be undertaken on the Server:

  1. The Fail-Safe timer associated with the current Fail-Safe context shall be disarmed.

  2. The commissioning window at the Server shall be closed.

  3. Any temporary administrative privileges automatically granted to any open PASE session shall be revoked
     (see Section 6.6.2.8, “Bootstrapping of the Access Control Cluster”).

  4. The Secure Session Context of any PASE session still established at the Server shall be cleared.

  5. The Breadcrumb attribute shall be reset to zero.

After receipt of a CommissioningCompleteResponse with an ErrorCode value of OK, a client cannot expect any
previously established PASE session to still be usable, due to the server having cleared such sessions.

#### Returns

`Promise`\<`object`\>

##### debugText

> **debugText**: `string` = `""`

##### errorCode

> **errorCode**: [`CommissioningError`](../../../../../cluster/export/namespaces/GeneralCommissioning/enumerations/CommissioningError.md) = `GeneralCommissioning.CommissioningError.Ok`

#### Overrides

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`commissioningComplete`](../interfaces/GeneralCommissioningBehavior.md#commissioningcomplete)

#### See

MatterSpecification.v11.Core § 11.9.6.6

#### Source

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts#L173)

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

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`initialize`](../interfaces/GeneralCommissioningBehavior.md#initialize)

#### Source

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts#L28)

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

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`reactTo`](../interfaces/GeneralCommissioningBehavior.md#reactto)

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

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`requireAttributeEnabled`](../interfaces/GeneralCommissioningBehavior.md#requireattributeenabled)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### setRegulatoryConfig()

> **setRegulatoryConfig**(`__namedParameters`): `Promise`\<`object`\>

This shall add or update the regulatory configuration in the RegulatoryConfig Attribute to the value
provided in the NewRegulatoryConfig field.

Success or failure of this command shall be communicated by the SetRegulatoryConfigResponse command, unless
some data model validations caused a failure status code to be issued during the processing of the command.

The CountryCode field shall conforms to ISO 3166-1 alpha-2 and shall be used to set the Location attribute
reflected by the Basic Information Cluster.

If the server limits some of the values (e.g. locked to a particular country, with no regulatory data for
others), then setting regulatory information outside a valid country or location shall still set the
Location attribute reflected by the Basic Information Cluster configuration, but the
SetRegulatoryConfigResponse replied shall have the ErrorCode field set to ValueOutsideRange error.

If the LocationCapability attribute is not Indoor/Outdoor and the NewRegulatoryConfig value received does
not match either the Indoor or Outdoor fixed value in LocationCapability, then the
SetRegulatoryConfigResponse replied shall have the ErrorCode field set to ValueOutsideRange

error and the RegulatoryConfig attribute and associated internal radio configuration shall remain unchanged.

If the LocationCapability attribute is set to Indoor/Outdoor, then the RegulatoryConfig attribute shall be
set to match the NewRegulatoryConfig field.

On successful execution of the command, the ErrorCode field of the SetRegulatoryConfigResponse shall be set
to OK.

The Breadcrumb field shall be used to atomically set the Breadcrumb attribute on success of this command,
when SetRegulatoryConfigResponse has the ErrorCode field set to OK. If the command fails, the Breadcrumb
attribute shall be left unchanged.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`object`\>

##### debugText

> **debugText**: `string` = `""`

##### errorCode

> **errorCode**: [`CommissioningError`](../../../../../cluster/export/namespaces/GeneralCommissioning/enumerations/CommissioningError.md) = `GeneralCommissioning.CommissioningError.Ok`

#### Overrides

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`setRegulatoryConfig`](../interfaces/GeneralCommissioningBehavior.md#setregulatoryconfig)

#### See

MatterSpecification.v11.Core § 11.9.6.4

#### Source

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningServer.ts#L100)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[`GeneralCommissioningBehavior`](../interfaces/GeneralCommissioningBehavior.md).[`toString`](../interfaces/GeneralCommissioningBehavior.md#tostring)

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

`GeneralCommissioningBehavior.alter`

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

`GeneralCommissioningBehavior.enable`

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

`GeneralCommissioningBehavior.for`

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

`GeneralCommissioningBehavior.set`

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

`GeneralCommissioningBehavior.with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
