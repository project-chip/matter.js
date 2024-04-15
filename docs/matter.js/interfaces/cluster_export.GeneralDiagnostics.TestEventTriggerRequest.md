[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / TestEventTriggerRequest

# Interface: TestEventTriggerRequest

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).TestEventTriggerRequest

Input to the GeneralDiagnostics testEventTrigger command

**`See`**

MatterSpecification.v11.Core § 11.11.7.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvTestEventTriggerRequest`](../modules/cluster_export.GeneralDiagnostics.md#tlvtesteventtriggerrequest)\>

  ↳ **`TestEventTriggerRequest`**

## Table of contents

### Properties

- [enableKey](cluster_export.GeneralDiagnostics.TestEventTriggerRequest.md#enablekey)
- [eventTrigger](cluster_export.GeneralDiagnostics.TestEventTriggerRequest.md#eventtrigger)

## Properties

### enableKey

• **enableKey**: `Uint8Array`

The EnableKey is a 128 bit value provided by the client in this command, which needs to match a value chosen
by the manufacturer and configured on the server using manufacturer-specific means, such as
pre-provisioning. The value of all zeroes is reserved to indicate that no EnableKey is set. Therefore, if
the EnableKey field is received with all zeroes, this command shall FAIL with a response status of
CONSTRAINT_ERROR.

The EnableKey SHOULD be unique per exact set of devices going to a certification test.

Devices not targeted towards going to a certification test event shall NOT have a non-zero EnableKey value
configured, so that only devices in test environments are responsive to this command.

In order to prevent unwittingly actuating a particular trigger, this command shall respond with the
cluster-specific error status code EnableKeyMismatch if the EnableKey field does not match the a-priori
value configured on the device.

**`See`**

MatterSpecification.v11.Core § 11.11.7.1.1

#### Inherited from

TypeFromSchema.enableKey

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:332](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L332)

___

### eventTrigger

• **eventTrigger**: `number` \| `bigint`

This field shall indicate the test or test mode which the client wants to trigger.

The expected side-effects of EventTrigger values are out of scope of this specification and will be
described within appropriate certification test literature provided to manufacturers by the Connectivity
Standards Alliance, in conjunction with certification test cases documentation.

Values of EventTrigger in the range 0xFFFF_FFFF_0000_0000 through 0xFFFF_FFFF_FFFF_FFFF are reserved for
testing use by manufacturers and will not appear in CSA certification test literature.

If the value of EventTrigger received is not supported by the receiving Node, this command shall fail with a
status code of INVALID_COMMAND.

Otherwise, if the EnableKey value matches the configured internal value for a particular Node, and the
EventTrigger value matches a supported test event trigger value, the command shall succeed and execute the
expected trigger action.

If no specific test event triggers are required to be supported by certification test requirements for the
features that a given product will be certified against, this command may always fail with the
INVALID_COMMAND status, equivalent to the situation of receiving an unknown EventTrigger, for all possible
EventTrigger values.

**`See`**

MatterSpecification.v11.Core § 11.11.7.1.2

#### Inherited from

TypeFromSchema.eventTrigger

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:358](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L358)
