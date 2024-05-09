[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/general-commissioning/export](../modules/behavior_definitions_general_commissioning_export.md) / GeneralCommissioningBehavior

# Interface: GeneralCommissioningBehavior

[behavior/definitions/general-commissioning/export](../modules/behavior_definitions_general_commissioning_export.md).GeneralCommissioningBehavior

## Hierarchy

- [`GeneralCommissioningBehaviorType`](../modules/behavior_definitions_general_commissioning_export._internal_.md#generalcommissioningbehaviortype)

  ↳ **`GeneralCommissioningBehavior`**

  ↳↳ [`GeneralCommissioningServer`](../classes/behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md)

## Table of contents

### Properties

- [#agent](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md##agent)
- [[reference]](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#[reference])
- [agent](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#agent)
- [cluster](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#cluster)
- [context](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#context)
- [endpoint](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#endpoint)
- [events](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#events)
- [features](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#features)
- [session](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#session)
- [state](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#[asyncdispose])
- [armFailSafe](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#armfailsafe)
- [asAdmin](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#asadmin)
- [callback](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#callback)
- [commissioningComplete](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#commissioningcomplete)
- [initialize](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#initialize)
- [reactTo](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#reactto)
- [setRegulatoryConfig](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#setregulatoryconfig)
- [toString](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md#tostring)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

GeneralCommissioningBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

GeneralCommissioningBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

GeneralCommissioningBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

GeneralCommissioningBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

GeneralCommissioningBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

GeneralCommissioningBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `basicCommissioningInfo$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `failSafeExpiryLengthSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>\> ; `breadcrumb$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number` \| `bigint`, `any`\>\> ; `locationCapability$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\>\> ; `regulatoryConfig$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\>\> ; `supportsConcurrentConnection$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>\>  } & {} & {} & {}

Access the behavior's events.

#### Inherited from

GeneralCommissioningBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

GeneralCommissioningBehaviorType.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### session

• **session**: [`SecureSession`](../classes/session_export.SecureSession.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

GeneralCommissioningBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `breadcrumb`: `number` \| `bigint` ; `regulatoryConfig`: [`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)  } & {} & \{ `basicCommissioningInfo`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `failSafeExpiryLengthSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> ; `locationCapability`: [`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md) ; `supportsConcurrentConnection`: `boolean`  } & {}

Access the behavior's state.

#### Inherited from

GeneralCommissioningBehaviorType.state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

GeneralCommissioningBehaviorType.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### armFailSafe

▸ **armFailSafe**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>\>

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

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `expiryLengthSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.9.6.2

#### Inherited from

GeneralCommissioningBehaviorType.armFailSafe

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts:308](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts#L308)

___

### asAdmin

▸ **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

GeneralCommissioningBehaviorType.asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### callback

▸ **callback**\<`A`, `R`\>(`reactor`, `options?`): (...`args`: `A`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../modules/behavior_export.md#reactor).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`A`, `R`\> |
| `options?` | [`Options`](behavior_export.Reactor.Options.md) |

#### Returns

`fn`

▸ (`...args`): `undefined` \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

GeneralCommissioningBehaviorType.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### commissioningComplete

▸ **commissioningComplete**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>\>

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

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.9.6.6

#### Inherited from

GeneralCommissioningBehaviorType.commissioningComplete

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts:400](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts#L400)

___

### initialize

▸ **initialize**(`_options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

GeneralCommissioningBehaviorType.initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

GeneralCommissioningBehaviorType.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### setRegulatoryConfig

▸ **setRegulatoryConfig**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>\>

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

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `countryCode`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `newRegulatoryConfig`: [`FieldType`](tlv_export.FieldType.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.9.6.4

#### Inherited from

GeneralCommissioningBehaviorType.setRegulatoryConfig

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts:343](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts#L343)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

GeneralCommissioningBehaviorType.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)
