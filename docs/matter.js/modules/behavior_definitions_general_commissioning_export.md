[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/general-commissioning/export

# Module: behavior/definitions/general-commissioning/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_general_commissioning_export._internal_.md)

### Namespaces

- [GeneralCommissioningBehavior](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior.md)
- [GeneralCommissioningInterface](behavior_definitions_general_commissioning_export.GeneralCommissioningInterface.md)
- [GeneralCommissioningServer](behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)

### Classes

- [GeneralCommissioningServer](../classes/behavior_definitions_general_commissioning_export.GeneralCommissioningServer-1.md)

### Interfaces

- [GeneralCommissioningBehavior](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior-1.md)

### Type Aliases

- [ArmFailSafeRequest](behavior_definitions_general_commissioning_export.md#armfailsaferequest)
- [ArmFailSafeResponse](behavior_definitions_general_commissioning_export.md#armfailsaferesponse)
- [CommissioningCompleteResponse](behavior_definitions_general_commissioning_export.md#commissioningcompleteresponse)
- [GeneralCommissioningInterface](behavior_definitions_general_commissioning_export.md#generalcommissioninginterface)
- [SetRegulatoryConfigRequest](behavior_definitions_general_commissioning_export.md#setregulatoryconfigrequest)
- [SetRegulatoryConfigResponse](behavior_definitions_general_commissioning_export.md#setregulatoryconfigresponse)

### Variables

- [GeneralCommissioningBehavior](behavior_definitions_general_commissioning_export.md#generalcommissioningbehavior)

## Type Aliases

### ArmFailSafeRequest

Ƭ **ArmFailSafeRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvArmFailSafeRequest`](cluster_export.GeneralCommissioning.md#tlvarmfailsaferequest)\>

Success or failure of this command shall be communicated by the ArmFailSafeResponse command, unless some data model
validations caused a failure status code to be issued during the processing of the command.

If the fail-safe timer is not currently armed, the commissioning window is open, and the command was received over a
CASE session, the command shall leave the current fail-safe state unchanged and immediately respond with an
ArmFailSafeResponse containing an ErrorCode value of BusyWithOtherAdmin. This is done to allow commissioners, which
use PASE connections, the opportunity to use the failsafe during the relatively short commissioning window.

Otherwise, the command shall arm or re-arm the "fail-safe timer" with an expiry time set for a duration of
ExpiryLengthSeconds, or disarm it, depending on the situation:

  • If ExpiryLengthSeconds is 0 and the fail-safe timer was already armed and the accessing fabric matches the
    Fabric currently associated with the fail-safe context, then the fail-safe timer shall be immediately expired
    (see further below for side-effects of expiration).

  • If ExpiryLengthSeconds is 0 and the fail-safe timer was not armed, then this command invocation shall lead to a
    success response with no side-effects against the fail-safe context.

  • If ExpiryLengthSeconds is non-zero and the fail-safe timer was not currently armed, then the fail-safe timer
    shall be armed for that duration.

  • If ExpiryLengthSeconds is non-zero and the fail-safe timer was currently armed, and the accessing Fabric matches
    the fail-safe context’s associated Fabric, then the fail-safe timer shall be re- armed to expire in
    ExpiryLengthSeconds.

  • Otherwise, the command shall leave the current fail-safe state unchanged and immediately respond with
    ArmFailSafeResponse containing an ErrorCode value of BusyWithOtherAdmin, indicating a likely conflict between
    commissioners.

The value of the Breadcrumb field shall be written to the Breadcrumb Attribute on successful execution of the
command.

If the receiver restarts unexpectedly (e.g., power interruption, software crash, or other reset) the receiver shall
behave as if the fail-safe timer expired and perform the sequence of clean-up steps listed below.

On successful execution of the command, the ErrorCode field of the ArmFailSafeResponse shall be set to OK.

### Fail Safe Context

When first arming the fail-safe timer, a 'Fail Safe Context' shall be created on the receiver, to track the
following state information while the fail-safe is armed:

  • The fail-safe timer duration.

  • The state of all Network Commissioning Networks attribute configurations, to allow recovery of connectivity
    after Fail-Safe expiry.

  • Whether an AddNOC command or UpdateNOC command has taken place.

  • A Fabric Index for the fabric-scoping of the context, starting at the accessing fabric index for the ArmFailSafe
    command, and updated with the Fabric Index associated with an AddNOC command or an UpdateNOC command being
    invoked successfully during the ongoing Fail-Safe timer period.

  • The operational credentials associated with any Fabric whose configuration is affected by the UpdateNOC command.

  • Optionally: the previous state of non-fabric-scoped data that is mutated during the fail-safe period.

Note the following to assist in understanding the above state-keeping, which summarizes other normative requirements
in the respective sections:

  • The AddNOC command can only be invoked once per contiguous non-expiring fail-safe timer period, and only if no
    UpdateNOC command was previously processed within the same fail-safe timer period.

  • The UpdateNOC command can only be invoked once per contiguous non-expiring fail-safe timer

period, can only be invoked over a CASE session, and only if no AddNOC command was previously processed in the same
fail-safe timer period.

On creation of the Fail Safe Context a second timer shall be created to expire at MaxCumulativeFailsafeSeconds as
specified in BasicCommissioningInfo. This Cumulative Fail Safe Context timer (CFSC timer) serves to limit the
lifetime of any particular Fail Safe Context; it shall NOT be extended or modified on subsequent invocations of
ArmFailSafe associated with this Fail Safe Context. Upon expiry of the CFSC timer, the receiver shall execute
cleanup behavior equivalent to that of fail-safe timer expiration as detailed in Section 11.9.6.2.2, “Behavior on
expiry of Fail-Safe timer”. Termination of the session prior to the expiration of that timer for any reason
(including a successful end of commissioning or an expiry of a fail-safe timer) shall also delete the CFSC timer.

### Behavior on expiry of Fail-Safe timer

If the fail-safe timer expires before the CommissioningComplete command is successfully invoked, the following
sequence of clean-up steps shall be executed, in order, by the receiver:

  1. Terminate any open PASE secure session by clearing any associated Secure Session Context at the Server.

  2. Revoke the temporary administrative privileges granted to any open PASE session (see Section 6.6.2.8,
     “Bootstrapping of the Access Control Cluster”) at the Server.

  3. If an AddNOC or UpdateNOC command has been successfully invoked, terminate all CASE sessions associated with
     the Fabric whose Fabric Index is recorded in the Fail-Safe context (see Section 11.9.6.2, “ArmFailSafe
     Command”) by clearing any associated Secure Session Context at the Server.

  4. Reset the configuration of all Network Commissioning Networks attribute to their state prior to the Fail-Safe
     being armed.

  5. If an UpdateNOC command had been successfully invoked, revert the state of operational key pair, NOC and ICAC
     for that Fabric to the state prior to the Fail-Safe timer being armed, for the Fabric Index that was the
     subject of the UpdateNOC command.

  6. If an AddNOC command had been successfully invoked, achieve the equivalent effect of invoking the RemoveFabric
     command against the Fabric Index stored in the Fail-Safe Context for the Fabric Index that was the subject of
     the AddNOC command. This shall remove all associations to that Fabric including all fabric-scoped data, and may
     possibly factory-reset the device depending on current device state. This shall only apply to Fabrics added
     during the fail-safe period as the result of the AddNOC command.

  7. Remove any RCACs added by the AddTrustedRootCertificate command that are not currently referenced by any entry
     in the Fabrics attribute.

  8. Reset the Breadcrumb attribute to zero.

  9. Optionally: if no factory-reset resulted from the previous steps, it is RECOMMENDED that the Node rollback the
     state of all non fabric-scoped data present in the Fail-Safe context.

**`See`**

MatterSpecification.v11.Core § 11.9.6.2

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts#L127)

___

### ArmFailSafeResponse

Ƭ **ArmFailSafeResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvArmFailSafeResponse`](cluster_export.GeneralCommissioning.md#tlvarmfailsaferesponse)\>

**`See`**

MatterSpecification.v11.Core § 11.9.6.3

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts#L132)

___

### CommissioningCompleteResponse

Ƭ **CommissioningCompleteResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvCommissioningCompleteResponse`](cluster_export.GeneralCommissioning.md#tlvcommissioningcompleteresponse)\>

This field shall contain the result of the operation, based on the behavior specified in the functional description
of the CommissioningComplete command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.7

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts:186](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts#L186)

___

### GeneralCommissioningInterface

Ƭ **GeneralCommissioningInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_general_commissioning_export.GeneralCommissioningInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts#L188)

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts:404](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts#L404)

___

### SetRegulatoryConfigRequest

Ƭ **SetRegulatoryConfigRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSetRegulatoryConfigRequest`](cluster_export.GeneralCommissioning.md#tlvsetregulatoryconfigrequest)\>

This shall add or update the regulatory configuration in the RegulatoryConfig Attribute to the value provided in the
NewRegulatoryConfig field.

Success or failure of this command shall be communicated by the SetRegulatoryConfigResponse command, unless some
data model validations caused a failure status code to be issued during the processing of the command.

The CountryCode field shall conforms to ISO 3166-1 alpha-2 and shall be used to set the Location attribute reflected
by the Basic Information Cluster.

If the server limits some of the values (e.g. locked to a particular country, with no regulatory data for others),
then setting regulatory information outside a valid country or location shall still set the Location attribute
reflected by the Basic Information Cluster configuration, but the SetRegulatoryConfigResponse replied shall have the
ErrorCode field set to ValueOutsideRange error.

If the LocationCapability attribute is not Indoor/Outdoor and the NewRegulatoryConfig value received does not match
either the Indoor or Outdoor fixed value in LocationCapability, then the SetRegulatoryConfigResponse replied shall
have the ErrorCode field set to ValueOutsideRange

error and the RegulatoryConfig attribute and associated internal radio configuration shall remain unchanged.

If the LocationCapability attribute is set to Indoor/Outdoor, then the RegulatoryConfig attribute shall be set to
match the NewRegulatoryConfig field.

On successful execution of the command, the ErrorCode field of the SetRegulatoryConfigResponse shall be set to OK.

The Breadcrumb field shall be used to atomically set the Breadcrumb attribute on success of this command, when
SetRegulatoryConfigResponse has the ErrorCode field set to OK. If the command fails, the Breadcrumb attribute shall
be left unchanged.

**`See`**

MatterSpecification.v11.Core § 11.9.6.4

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts#L166)

___

### SetRegulatoryConfigResponse

Ƭ **SetRegulatoryConfigResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSetRegulatoryConfigResponse`](cluster_export.GeneralCommissioning.md#tlvsetregulatoryconfigresponse)\>

This field shall contain the result of the operation, based on the behavior specified in the functional description
of the SetRegulatoryConfig command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.5

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts:176](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningInterface.ts#L176)

## Variables

### GeneralCommissioningBehavior

• `Const` **GeneralCommissioningBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.GeneralCommissioning.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GeneralCommissioningInterface`](behavior_definitions_general_commissioning_export.md#generalcommissioninginterface)\>, [`GeneralCommissioningInterface`](behavior_definitions_general_commissioning_export.md#generalcommissioninginterface)\>

GeneralCommissioningBehavior is the base class for objects that support interaction with GeneralCommissioning.Cluster.

#### Defined in

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningBehavior.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningBehavior.ts#L17)

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningBehavior.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningBehavior.ts#L22)

[packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-commissioning/GeneralCommissioningBehavior.ts#L24)
