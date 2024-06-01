[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / GeneralDiagnostics

# Namespace: GeneralDiagnostics

## Index

### Enumerations

- [BootReason](enumerations/BootReason.md)
- [HardwareFault](enumerations/HardwareFault.md)
- [InterfaceType](enumerations/InterfaceType.md)
- [NetworkFault](enumerations/NetworkFault.md)
- [RadioFault](enumerations/RadioFault.md)
- [StatusCode](enumerations/StatusCode.md)

### Interfaces

- [BootReasonEvent](interfaces/BootReasonEvent.md)
- [Cluster](interfaces/Cluster.md)
- [HardwareFaultChangeEvent](interfaces/HardwareFaultChangeEvent.md)
- [NetworkFaultChangeEvent](interfaces/NetworkFaultChangeEvent.md)
- [NetworkInterface](interfaces/NetworkInterface.md)
- [RadioFaultChangeEvent](interfaces/RadioFaultChangeEvent.md)
- [TestEventTriggerRequest](interfaces/TestEventTriggerRequest.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:724

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeHardwareFaults

> `readonly` **activeHardwareFaults**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`HardwareFault`](enumerations/HardwareFault.md)[], `any`\>

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

##### attributes.activeNetworkFaults

> `readonly` **activeNetworkFaults**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`NetworkFault`](enumerations/NetworkFault.md)[], `any`\>

The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange.

###### See

MatterSpecification.v11.Core § 11.11.6.8

##### attributes.activeRadioFaults

> `readonly` **activeRadioFaults**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`RadioFault`](enumerations/RadioFault.md)[], `any`\>

The ActiveRadioFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate RadioFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific RadioFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
RadioFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to RadioFaultChange.

###### See

MatterSpecification.v11.Core § 11.11.6.7

##### attributes.bootReason

> `readonly` **bootReason**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`BootReason`](enumerations/BootReason.md), `any`\>

The BootReason attribute shall indicate the reason for the Node’s most recent boot.

###### See

MatterSpecification.v11.Core § 11.11.6.5

##### attributes.networkInterfaces

> `readonly` **networkInterfaces**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

The NetworkInterfaces attribute shall be a list of NetworkInterface structs. Each logical network
interface on the Node shall be represented by a single entry within the NetworkInterfaces attribute.

###### See

MatterSpecification.v11.Core § 11.11.6.1

##### attributes.rebootCount

> `readonly` **rebootCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The RebootCount attribute shall indicate a best-effort count of the number of times the Node has
rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The RebootCount
attribute shall NOT be incremented when a Node wakes from a low-power or sleep state. The RebootCount
attribute shall only be reset to 0 upon a factory reset of the Node.

###### See

MatterSpecification.v11.Core § 11.11.6.2

##### attributes.testEventTriggersEnabled

> `readonly` **testEventTriggersEnabled**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

The TestEventTriggersEnabled attribute shall indicate whether the Node has any TestEventTrigger
configured. When this attribute is true, the Node has been configured with one or more test event
triggers by virtue of the internally programmed EnableKey value (see Section 11.11.7.1,
“TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by Administrators
to detect if a device was inadvertently commissioned with test event trigger mode enabled, and take
appropriate action (e.g. warn the user and/or offer to remove all fabrics on the Node).

###### See

MatterSpecification.v11.Core § 11.11.6.9

##### attributes.totalOperationalHours

> `readonly` **totalOperationalHours**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TotalOperationalHours attribute shall indicate a best-effort attempt at tracking the length of time,
in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be incremented
to account for the periods of time that a Node is in a low-power or sleep state. The

TotalOperationalHours attribute shall only be reset upon a factory reset of the Node.

###### See

MatterSpecification.v11.Core § 11.11.6.4

##### attributes.upTime

> `readonly` **upTime**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

The UpTime attribute shall indicate a best-effort assessment of the length of time, in seconds, since
the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods of time
that a Node is in a low-power or sleep state. The UpTime attribute shall only be reset upon a device
reboot.

###### See

MatterSpecification.v11.Core § 11.11.6.3

##### commands

> `readonly` **commands**: `object`

##### commands.testEventTrigger

> `readonly` **testEventTrigger**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command shall be supported to provide a means for certification tests to trigger some test-
plan-specific events, necessary to assist in automation of device interactions for some certification
test cases. This command shall NOT cause any changes to the state of the device that persist after the
last fabric is removed.

The fields for the TestEventTrigger command are as follows:

###### See

MatterSpecification.v11.Core § 11.11.7.1

##### events

> `readonly` **events**: `object`

##### events.bootReason

> `readonly` **bootReason**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The BootReason Event shall indicate the reason that caused the device to start-up.

###### See

MatterSpecification.v11.Core § 11.11.8.4

##### events.hardwareFaultChange

> `readonly` **hardwareFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The HardwareFaultChange Event shall indicate a change in the set of hardware faults currently detected
by the Node.

###### See

MatterSpecification.v11.Core § 11.11.8.1

##### events.networkFaultChange

> `readonly` **networkFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

###### See

MatterSpecification.v11.Core § 11.11.8.3

##### events.radioFaultChange

> `readonly` **radioFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The RadioFaultChange Event shall indicate a change in the set of radio faults currently detected by the
Node.

###### See

MatterSpecification.v11.Core § 11.11.8.2

##### id

> `readonly` **id**: `51`

##### name

> `readonly` **name**: `"GeneralDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:420

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:727

***

### TlvBootReasonEvent

> `const` **TlvBootReasonEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the GeneralDiagnostics bootReason event

#### See

MatterSpecification.v11.Core § 11.11.8.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:394

***

### TlvHardwareFaultChangeEvent

> `const` **TlvHardwareFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the GeneralDiagnostics hardwareFaultChange event

#### See

MatterSpecification.v11.Core § 11.11.8.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:310

***

### TlvNetworkFaultChangeEvent

> `const` **TlvNetworkFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the GeneralDiagnostics networkFaultChange event

#### See

MatterSpecification.v11.Core § 11.11.8.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:366

***

### TlvNetworkInterface

> `const` **TlvNetworkInterface**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

#### See

MatterSpecification.v11.Core § 11.11.4.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:43

***

### TlvRadioFaultChangeEvent

> `const` **TlvRadioFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the GeneralDiagnostics radioFaultChange event

#### See

MatterSpecification.v11.Core § 11.11.8.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:339

***

### TlvTestEventTriggerRequest

> `const` **TlvTestEventTriggerRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the GeneralDiagnostics testEventTrigger command

#### See

MatterSpecification.v11.Core § 11.11.7.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:252
