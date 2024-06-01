[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GeneralDiagnostics](../README.md) / Cluster

# Interface: Cluster

General Diagnostics

The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized
diagnostics metrics that may be used by a Node to assist a user or Administrator in diagnosing potential
problems. The General Diagnostics Cluster attempts to centralize all metrics that are broadly relevant to the
majority of Nodes.

## See

MatterSpecification.v11.Core § 11.11

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### activeHardwareFaults

> `readonly` **activeHardwareFaults**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`HardwareFault`](../enumerations/HardwareFault.md)[], `any`\>

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

##### activeNetworkFaults

> `readonly` **activeNetworkFaults**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`NetworkFault`](../enumerations/NetworkFault.md)[], `any`\>

The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange.

###### See

MatterSpecification.v11.Core § 11.11.6.8

##### activeRadioFaults

> `readonly` **activeRadioFaults**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`RadioFault`](../enumerations/RadioFault.md)[], `any`\>

The ActiveRadioFaults attribute shall indicate the set of faults currently detected by the Node. When
the Node detects a fault has been raised, the appropriate RadioFaultEnum value shall be added to this
list. This list shall NOT contain more than one instance of a specific RadioFaultEnum value. When the
Node detects that all conditions contributing to a fault has been cleared, the corresponding
RadioFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to RadioFaultChange.

###### See

MatterSpecification.v11.Core § 11.11.6.7

##### bootReason

> `readonly` **bootReason**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`BootReason`](../enumerations/BootReason.md), `any`\>

The BootReason attribute shall indicate the reason for the Node’s most recent boot.

###### See

MatterSpecification.v11.Core § 11.11.6.5

##### networkInterfaces

> `readonly` **networkInterfaces**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The NetworkInterfaces attribute shall be a list of NetworkInterface structs. Each logical network
interface on the Node shall be represented by a single entry within the NetworkInterfaces attribute.

###### See

MatterSpecification.v11.Core § 11.11.6.1

##### rebootCount

> `readonly` **rebootCount**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\>

The RebootCount attribute shall indicate a best-effort count of the number of times the Node has
rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The RebootCount
attribute shall NOT be incremented when a Node wakes from a low-power or sleep state. The RebootCount
attribute shall only be reset to 0 upon a factory reset of the Node.

###### See

MatterSpecification.v11.Core § 11.11.6.2

##### testEventTriggersEnabled

> `readonly` **testEventTriggersEnabled**: [`Attribute`](../../../interfaces/Attribute.md)\<`boolean`, `any`\>

The TestEventTriggersEnabled attribute shall indicate whether the Node has any TestEventTrigger
configured. When this attribute is true, the Node has been configured with one or more test event
triggers by virtue of the internally programmed EnableKey value (see Section 11.11.7.1,
“TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by Administrators
to detect if a device was inadvertently commissioned with test event trigger mode enabled, and take
appropriate action (e.g. warn the user and/or offer to remove all fabrics on the Node).

###### See

MatterSpecification.v11.Core § 11.11.6.9

##### totalOperationalHours

> `readonly` **totalOperationalHours**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TotalOperationalHours attribute shall indicate a best-effort attempt at tracking the length of time,
in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be incremented
to account for the periods of time that a Node is in a low-power or sleep state. The

TotalOperationalHours attribute shall only be reset upon a factory reset of the Node.

###### See

MatterSpecification.v11.Core § 11.11.6.4

##### upTime

> `readonly` **upTime**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

The UpTime attribute shall indicate a best-effort assessment of the length of time, in seconds, since
the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods of time
that a Node is in a low-power or sleep state. The UpTime attribute shall only be reset upon a device
reboot.

###### See

MatterSpecification.v11.Core § 11.11.6.3

#### Inherited from

`Identity.attributes`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L86)

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L92)

***

### commands

> **commands**: `object`

#### testEventTrigger

> `readonly` **testEventTrigger**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command shall be supported to provide a means for certification tests to trigger some test-
plan-specific events, necessary to assist in automation of device interactions for some certification
test cases. This command shall NOT cause any changes to the state of the device that persist after the
last fabric is removed.

The fields for the TestEventTrigger command are as follows:

##### See

MatterSpecification.v11.Core § 11.11.7.1

#### Inherited from

`Identity.commands`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L89)

***

### events

> **events**: `object`

#### bootReason

> `readonly` **bootReason**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The BootReason Event shall indicate the reason that caused the device to start-up.

##### See

MatterSpecification.v11.Core § 11.11.8.4

#### hardwareFaultChange

> `readonly` **hardwareFaultChange**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The HardwareFaultChange Event shall indicate a change in the set of hardware faults currently detected
by the Node.

##### See

MatterSpecification.v11.Core § 11.11.8.1

#### networkFaultChange

> `readonly` **networkFaultChange**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

##### See

MatterSpecification.v11.Core § 11.11.8.3

#### radioFaultChange

> `readonly` **radioFaultChange**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The RadioFaultChange Event shall indicate a change in the set of radio faults currently detected by the
Node.

##### See

MatterSpecification.v11.Core § 11.11.8.2

#### Inherited from

`Identity.events`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L90)

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L93)

***

### features

> **features**: `object`

#### Inherited from

`Identity.features`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L84)

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`51`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L81)

***

### name

> **name**: `"GeneralDiagnostics"`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L82)

***

### revision

> **revision**: `1`

#### Inherited from

`Identity.revision`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L83)

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L85)

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeHardwareFaults

> `readonly` **activeHardwareFaults**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`HardwareFault`](../enumerations/HardwareFault.md)[], `any`\>

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

> `readonly` **activeNetworkFaults**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`NetworkFault`](../enumerations/NetworkFault.md)[], `any`\>

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

> `readonly` **activeRadioFaults**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`RadioFault`](../enumerations/RadioFault.md)[], `any`\>

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

> `readonly` **bootReason**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<[`BootReason`](../enumerations/BootReason.md), `any`\>

The BootReason attribute shall indicate the reason for the Node’s most recent boot.

###### See

MatterSpecification.v11.Core § 11.11.6.5

##### attributes.networkInterfaces

> `readonly` **networkInterfaces**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The NetworkInterfaces attribute shall be a list of NetworkInterface structs. Each logical network
interface on the Node shall be represented by a single entry within the NetworkInterfaces attribute.

###### See

MatterSpecification.v11.Core § 11.11.6.1

##### attributes.rebootCount

> `readonly` **rebootCount**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\>

The RebootCount attribute shall indicate a best-effort count of the number of times the Node has
rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The RebootCount
attribute shall NOT be incremented when a Node wakes from a low-power or sleep state. The RebootCount
attribute shall only be reset to 0 upon a factory reset of the Node.

###### See

MatterSpecification.v11.Core § 11.11.6.2

##### attributes.testEventTriggersEnabled

> `readonly` **testEventTriggersEnabled**: [`Attribute`](../../../interfaces/Attribute.md)\<`boolean`, `any`\>

The TestEventTriggersEnabled attribute shall indicate whether the Node has any TestEventTrigger
configured. When this attribute is true, the Node has been configured with one or more test event
triggers by virtue of the internally programmed EnableKey value (see Section 11.11.7.1,
“TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by Administrators
to detect if a device was inadvertently commissioned with test event trigger mode enabled, and take
appropriate action (e.g. warn the user and/or offer to remove all fabrics on the Node).

###### See

MatterSpecification.v11.Core § 11.11.6.9

##### attributes.totalOperationalHours

> `readonly` **totalOperationalHours**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TotalOperationalHours attribute shall indicate a best-effort attempt at tracking the length of time,
in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be incremented
to account for the periods of time that a Node is in a low-power or sleep state. The

TotalOperationalHours attribute shall only be reset upon a factory reset of the Node.

###### See

MatterSpecification.v11.Core § 11.11.6.4

##### attributes.upTime

> `readonly` **upTime**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

The UpTime attribute shall indicate a best-effort assessment of the length of time, in seconds, since
the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods of time
that a Node is in a low-power or sleep state. The UpTime attribute shall only be reset upon a device
reboot.

###### See

MatterSpecification.v11.Core § 11.11.6.3

##### commands

> `readonly` **commands**: `object`

##### commands.testEventTrigger

> `readonly` **testEventTrigger**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

> `readonly` **bootReason**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The BootReason Event shall indicate the reason that caused the device to start-up.

###### See

MatterSpecification.v11.Core § 11.11.8.4

##### events.hardwareFaultChange

> `readonly` **hardwareFaultChange**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The HardwareFaultChange Event shall indicate a change in the set of hardware faults currently detected
by the Node.

###### See

MatterSpecification.v11.Core § 11.11.8.1

##### events.networkFaultChange

> `readonly` **networkFaultChange**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

###### See

MatterSpecification.v11.Core § 11.11.8.3

##### events.radioFaultChange

> `readonly` **radioFaultChange**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
