[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/general-diagnostics/export](../../../README.md) / [GeneralDiagnosticsServer](../README.md) / State

# Class: State

## Extends

- `State`

## Constructors

### new State()

> **new State**(): [`State`](State.md)

#### Returns

[`State`](State.md)

#### Inherited from

`GeneralDiagnosticsBehavior.State.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

## Properties

### activeHardwareFaults?

> `optional` **activeHardwareFaults**: [`HardwareFault`](../../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/HardwareFault.md)[]

The ActiveHardwareFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate HardwareFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific HardwareFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
HardwareFaultEnum value shall be removed from this list. An empty list shall indicate there are
currently no active faults. The order of this list SHOULD have no significance. Clients interested in
monitoring changes in active faults may subscribe to this attribute, or they may subscribe to
HardwareFaultChange.

#### See

MatterSpecification.v11.Core § 11.11.6.6

#### Inherited from

`GeneralDiagnosticsBehavior.State.activeHardwareFaults`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:559](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L559)

***

### activeNetworkFaults?

> `optional` **activeNetworkFaults**: [`NetworkFault`](../../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/NetworkFault.md)[]

The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange.

#### See

MatterSpecification.v11.Core § 11.11.6.8

#### Inherited from

`GeneralDiagnosticsBehavior.State.activeNetworkFaults`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:593](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L593)

***

### activeRadioFaults?

> `optional` **activeRadioFaults**: [`RadioFault`](../../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/RadioFault.md)[]

The ActiveRadioFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate RadioFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific RadioFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
RadioFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to RadioFaultChange.

#### See

MatterSpecification.v11.Core § 11.11.6.7

#### Inherited from

`GeneralDiagnosticsBehavior.State.activeRadioFaults`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:576](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L576)

***

### bootReason?

> `optional` **bootReason**: [`BootReason`](../../../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/BootReason.md)

The BootReason attribute shall indicate the reason for the Node’s most recent boot.

#### See

MatterSpecification.v11.Core § 11.11.6.5

#### Inherited from

`GeneralDiagnosticsBehavior.State.bootReason`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:545](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L545)

***

### networkInterfaces

> **networkInterfaces**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

The NetworkInterfaces attribute shall be a list of NetworkInterface structs. Each logical network
interface on the Node shall be represented by a single entry within the NetworkInterfaces attribute.

#### See

MatterSpecification.v11.Core § 11.11.6.1

#### Inherited from

`GeneralDiagnosticsBehavior.State.networkInterfaces`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:503](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L503)

***

### rebootCount

> **rebootCount**: `number`

The RebootCount attribute shall indicate a best-effort count of the number of times the Node has
rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The RebootCount
attribute shall NOT be incremented when a Node wakes from a low-power or sleep state. The RebootCount
attribute shall only be reset to 0 upon a factory reset of the Node.

#### See

MatterSpecification.v11.Core § 11.11.6.2

#### Inherited from

`GeneralDiagnosticsBehavior.State.rebootCount`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:513](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L513)

***

### testEventTriggersEnabled

> **testEventTriggersEnabled**: `boolean`

The TestEventTriggersEnabled attribute shall indicate whether the Node has any TestEventTrigger
configured. When this attribute is true, the Node has been configured with one or more test event
triggers by virtue of the internally programmed EnableKey value (see Section 11.11.7.1,
“TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by Administrators
to detect if a device was inadvertently commissioned with test event trigger mode enabled, and take
appropriate action (e.g. warn the user and/or offer to remove all fabrics on the Node).

#### See

MatterSpecification.v11.Core § 11.11.6.9

#### Inherited from

`GeneralDiagnosticsBehavior.State.testEventTriggersEnabled`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:609](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L609)

***

### totalOperationalHours?

> `optional` **totalOperationalHours**: `number`

The TotalOperationalHours attribute shall indicate a best-effort attempt at tracking the length of time,
in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be incremented
to account for the periods of time that a Node is in a low-power or sleep state. The

TotalOperationalHours attribute shall only be reset upon a factory reset of the Node.

#### See

MatterSpecification.v11.Core § 11.11.6.4

#### Inherited from

`GeneralDiagnosticsBehavior.State.totalOperationalHours`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:534](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L534)

***

### totalOperationalHoursCounter

> **totalOperationalHoursCounter**: `number` = `0`

Internal counter of the total operational hours, counted in seconds, updated every 5 minutes.

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:297](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L297)

***

### upTime?

> `optional` **upTime**: `number` \| `bigint`

The UpTime attribute shall indicate a best-effort assessment of the length of time, in seconds, since
the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods of time
that a Node is in a low-power or sleep state. The UpTime attribute shall only be reset upon a device
reboot.

#### See

MatterSpecification.v11.Core § 11.11.6.3

#### Inherited from

`GeneralDiagnosticsBehavior.State.upTime`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:523](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L523)

## Methods

### `[properties]`()

> **\[properties\]**(`endpoint`, `_session`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../../../cluster/export/-internal-/interfaces/Empty.md)\> |
| `_session` | [`Session`](../../../../../../cluster/export/-internal-/interfaces/Session.md) |

#### Returns

`object`

##### totalOperationalHours

> `get` **totalOperationalHours**(): `number`

Dynamically calculate the operating Hours from our internal counter. This is ok because the attribute
is not send out via subscriptions anyway.

###### Returns

`number`

##### upTime

> `get` **upTime**(): `number`

Dynamically calculate the upTime. This is ok because the attribute is not send out via subscriptions
anyway.

###### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:299](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L299)
