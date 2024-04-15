[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/general-diagnostics/export](../modules/behavior_definitions_general_diagnostics_export.md) / [GeneralDiagnosticsBehavior](../modules/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.md) / State

# Interface: State

[behavior/definitions/general-diagnostics/export](../modules/behavior_definitions_general_diagnostics_export.md).[GeneralDiagnosticsBehavior](../modules/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_general_diagnostics_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [activeHardwareFaults](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.State.md#activehardwarefaults)
- [activeNetworkFaults](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.State.md#activenetworkfaults)
- [activeRadioFaults](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.State.md#activeradiofaults)
- [bootReason](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.State.md#bootreason)
- [networkInterfaces](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.State.md#networkinterfaces)
- [rebootCount](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.State.md#rebootcount)
- [testEventTriggersEnabled](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.State.md#testeventtriggersenabled)
- [totalOperationalHours](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.State.md#totaloperationalhours)
- [upTime](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.State.md#uptime)

## Properties

### activeHardwareFaults

• `Optional` **activeHardwareFaults**: [`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]

The ActiveHardwareFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate HardwareFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific HardwareFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
HardwareFaultEnum value shall be removed from this list. An empty list shall indicate there are
currently no active faults. The order of this list SHOULD have no significance. Clients interested in
monitoring changes in active faults may subscribe to this attribute, or they may subscribe to
HardwareFaultChange.

**`See`**

MatterSpecification.v11.Core § 11.11.6.6

#### Inherited from

StateType.activeHardwareFaults

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:534](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L534)

___

### activeNetworkFaults

• `Optional` **activeNetworkFaults**: [`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]

The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange.

**`See`**

MatterSpecification.v11.Core § 11.11.6.8

#### Inherited from

StateType.activeNetworkFaults

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:568](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L568)

___

### activeRadioFaults

• `Optional` **activeRadioFaults**: [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]

The ActiveRadioFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate RadioFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific RadioFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
RadioFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to RadioFaultChange.

**`See`**

MatterSpecification.v11.Core § 11.11.6.7

#### Inherited from

StateType.activeRadioFaults

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:551](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L551)

___

### bootReason

• `Optional` **bootReason**: [`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)

The BootReason attribute shall indicate the reason for the Node’s most recent boot.

**`See`**

MatterSpecification.v11.Core § 11.11.6.5

#### Inherited from

StateType.bootReason

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:520](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L520)

___

### networkInterfaces

• **networkInterfaces**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[]

The NetworkInterfaces attribute shall be a list of NetworkInterface structs. Each logical network
interface on the Node shall be represented by a single entry within the NetworkInterfaces attribute.

**`See`**

MatterSpecification.v11.Core § 11.11.6.1

#### Inherited from

StateType.networkInterfaces

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:478](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L478)

___

### rebootCount

• **rebootCount**: `number`

The RebootCount attribute shall indicate a best-effort count of the number of times the Node has
rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The RebootCount
attribute shall NOT be incremented when a Node wakes from a low-power or sleep state. The RebootCount
attribute shall only be reset to 0 upon a factory reset of the Node.

**`See`**

MatterSpecification.v11.Core § 11.11.6.2

#### Inherited from

StateType.rebootCount

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:488](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L488)

___

### testEventTriggersEnabled

• **testEventTriggersEnabled**: `boolean`

The TestEventTriggersEnabled attribute shall indicate whether the Node has any TestEventTrigger
configured. When this attribute is true, the Node has been configured with one or more test event
triggers by virtue of the internally programmed EnableKey value (see Section 11.11.7.1,
“TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by Administrators
to detect if a device was inadvertently commissioned with test event trigger mode enabled, and take
appropriate action (e.g. warn the user and/or offer to remove all fabrics on the Node).

**`See`**

MatterSpecification.v11.Core § 11.11.6.9

#### Inherited from

StateType.testEventTriggersEnabled

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:584](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L584)

___

### totalOperationalHours

• `Optional` **totalOperationalHours**: `number`

The TotalOperationalHours attribute shall indicate a best-effort attempt at tracking the length of time,
in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be incremented
to account for the periods of time that a Node is in a low-power or sleep state. The

TotalOperationalHours attribute shall only be reset upon a factory reset of the Node.

**`See`**

MatterSpecification.v11.Core § 11.11.6.4

#### Inherited from

StateType.totalOperationalHours

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:509](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L509)

___

### upTime

• `Optional` **upTime**: `number` \| `bigint`

The UpTime attribute shall indicate a best-effort assessment of the length of time, in seconds, since
the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods of time
that a Node is in a low-power or sleep state. The UpTime attribute shall only be reset upon a device
reboot.

**`See`**

MatterSpecification.v11.Core § 11.11.6.3

#### Inherited from

StateType.upTime

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:498](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L498)
