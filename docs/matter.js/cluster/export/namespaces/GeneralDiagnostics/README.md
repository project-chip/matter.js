[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / GeneralDiagnostics

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

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:676](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L676)

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

> `readonly` **networkInterfaces**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

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

> `readonly` **testEventTrigger**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

> `readonly` **bootReason**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The BootReason Event shall indicate the reason that caused the device to start-up.

###### See

MatterSpecification.v11.Core § 11.11.8.4

##### events.hardwareFaultChange

> `readonly` **hardwareFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The HardwareFaultChange Event shall indicate a change in the set of hardware faults currently detected
by the Node.

###### See

MatterSpecification.v11.Core § 11.11.8.1

##### events.networkFaultChange

> `readonly` **networkFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

###### See

MatterSpecification.v11.Core § 11.11.8.3

##### events.radioFaultChange

> `readonly` **radioFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The RadioFaultChange Event shall indicate a change in the set of radio faults currently detected by the
Node.

###### See

MatterSpecification.v11.Core § 11.11.8.2

##### id

> `readonly` **id**: `51` = `0x33`

##### name

> `readonly` **name**: `"GeneralDiagnostics"` = `"GeneralDiagnostics"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:491](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L491)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:679](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L679)

***

### TlvBootReasonEvent

> `const` **TlvBootReasonEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the GeneralDiagnostics bootReason event

#### See

MatterSpecification.v11.Core § 11.11.8.4

#### Type declaration

##### bootReason

> **bootReason**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`BootReason`](enumerations/BootReason.md)\>

This field shall contain the reason for this BootReason event.

###### See

MatterSpecification.v11.Core § 11.11.8.4.1

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:463](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L463)

***

### TlvHardwareFaultChangeEvent

> `const` **TlvHardwareFaultChangeEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the GeneralDiagnostics hardwareFaultChange event

#### See

MatterSpecification.v11.Core § 11.11.8.1

#### Type declaration

##### current

> **current**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`HardwareFault`](enumerations/HardwareFault.md)[]\>

This field shall represent the set of faults currently detected, as per Section 11.11.4.1,
“HardwareFaultEnum”.

###### See

MatterSpecification.v11.Core § 11.11.8.1.1

##### previous

> **previous**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`HardwareFault`](enumerations/HardwareFault.md)[]\>

This field shall represent the set of faults detected prior to this change event, as per Section

11.11.4.1, “HardwareFaultEnum”.

###### See

MatterSpecification.v11.Core § 11.11.8.1.2

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:373](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L373)

***

### TlvNetworkFaultChangeEvent

> `const` **TlvNetworkFaultChangeEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the GeneralDiagnostics networkFaultChange event

#### See

MatterSpecification.v11.Core § 11.11.8.3

#### Type declaration

##### current

> **current**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NetworkFault`](enumerations/NetworkFault.md)[]\>

This field shall represent the set of faults currently detected, as per Section 11.11.4.3,
“NetworkFaultEnum”.

###### See

MatterSpecification.v11.Core § 11.11.8.3.1

##### previous

> **previous**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NetworkFault`](enumerations/NetworkFault.md)[]\>

This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.3,
“NetworkFaultEnum”.

###### See

MatterSpecification.v11.Core § 11.11.8.3.2

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:433](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L433)

***

### TlvNetworkInterface

> `const` **TlvNetworkInterface**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

#### See

MatterSpecification.v11.Core § 11.11.4.6

#### Type declaration

##### hardwareAddress

> **hardwareAddress**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall contain the current link-layer address for a 802.3 or IEEE 802.11-2020 network interface
and contain the current extended MAC address for a 802.15.4 interface. The byte order of the octstr shall be
in wire byte order. For addresses values less than 64 bits, the first two bytes shall be zero.

###### See

MatterSpecification.v11.Core § 11.11.4.6.5

##### iPv4Addresses

> **iPv4Addresses**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`[]\>

This field shall provide a list of the IPv4 addresses that are currently assigned to the network interface.

###### See

MatterSpecification.v11.Core § 11.11.4.6.6

##### iPv6Addresses

> **iPv6Addresses**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`[]\>

This field shall provide a list of the unicast IPv6 addresses that are currently assigned to the network
interface. This list shall include the Node’s link-local address and SHOULD include any assigned GUA and ULA
addresses. This list shall NOT include any multicast group addresses to which the Node is subscribed.

###### See

MatterSpecification.v11.Core § 11.11.4.6.7

##### isOperational

> **isOperational**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

This field shall indicate if the Node is currently advertising itself operationally on this network
interface and is capable of successfully receiving incoming traffic from other Nodes.

###### See

MatterSpecification.v11.Core § 11.11.4.6.2

##### name

> **name**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This field shall indicate a human-readable (displayable) name for the network interface, that is different
from all other interfaces.

###### See

MatterSpecification.v11.Core § 11.11.4.6.1

##### offPremiseServicesReachableIPv4

> **offPremiseServicesReachableIPv4**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `boolean`\>

This field shall indicate whether the Node is currently able to reach off-premise services it uses by
utilizing IPv4. The value shall be null if the Node does not use such services or does not know whether it
can reach them.

###### See

MatterSpecification.v11.Core § 11.11.4.6.3

##### offPremiseServicesReachableIPv6

> **offPremiseServicesReachableIPv6**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `boolean`\>

This field shall indicate whether the Node is currently able to reach off-premise services it uses by
utilizing IPv6. The value shall be null if the Node does not use such services or does not know whether it
can reach them.

###### See

MatterSpecification.v11.Core § 11.11.4.6.4

##### type

> **type**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`InterfaceType`](enumerations/InterfaceType.md)\>

This field shall indicate the type of the interface using the InterfaceTypeEnum.

###### See

MatterSpecification.v11.Core § 11.11.4.6.8

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L67)

***

### TlvRadioFaultChangeEvent

> `const` **TlvRadioFaultChangeEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the GeneralDiagnostics radioFaultChange event

#### See

MatterSpecification.v11.Core § 11.11.8.2

#### Type declaration

##### current

> **current**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`RadioFault`](enumerations/RadioFault.md)[]\>

This field shall represent the set of faults currently detected, as per Section 11.11.4.2, “RadioFaultEnum”.

###### See

MatterSpecification.v11.Core § 11.11.8.2.1

##### previous

> **previous**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`RadioFault`](enumerations/RadioFault.md)[]\>

This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.2,
“RadioFaultEnum”.

###### See

MatterSpecification.v11.Core § 11.11.8.2.2

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:404](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L404)

***

### TlvTestEventTriggerRequest

> `const` **TlvTestEventTriggerRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the GeneralDiagnostics testEventTrigger command

#### See

MatterSpecification.v11.Core § 11.11.7.1

#### Type declaration

##### enableKey

> **enableKey**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

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

###### See

MatterSpecification.v11.Core § 11.11.7.1.1

##### eventTrigger

> **eventTrigger**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

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

###### See

MatterSpecification.v11.Core § 11.11.7.1.2

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:313](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L313)
