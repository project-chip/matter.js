[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / OtaSoftwareUpdateRequestor

# Namespace: OtaSoftwareUpdateRequestor

## Index

### Enumerations

- [AnnouncementReason](enumerations/AnnouncementReason.md)
- [ChangeReason](enumerations/ChangeReason.md)
- [UpdateState](enumerations/UpdateState.md)

### Interfaces

- [AnnounceOtaProviderRequest](interfaces/AnnounceOtaProviderRequest.md)
- [Cluster](interfaces/Cluster.md)
- [DownloadErrorEvent](interfaces/DownloadErrorEvent.md)
- [ProviderLocationStruct](interfaces/ProviderLocationStruct.md)
- [StateTransitionEvent](interfaces/StateTransitionEvent.md)
- [VersionAppliedEvent](interfaces/VersionAppliedEvent.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:347](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L347)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.defaultOtaProviders

> `readonly` **defaultOtaProviders**: [`WritableFabricScopedAttribute`](../../interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This field is a list of ProviderLocationStruct whose entries shall be set by Administrators, either
during Commissioning or at a later time, to set the Provider Location for the default OTA Provider Node
to use for software updates on a given Fabric.

There shall NOT be more than one entry per Fabric. On a list update that would introduce more than one
entry per fabric, the write shall fail with CONSTRAINT_ERROR status code.

Provider Locations obtained using the AnnounceOTAProvider command shall NOT overwrite values set in the
DefaultOTAProviders attribute.

###### See

MatterSpecification.v11.Core § 11.19.7.5.1

##### attributes.updatePossible

> `readonly` **updatePossible**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

This field shall be set to True if the OTA Requestor is currently able to be updated. Otherwise, it
shall be set to False in case of any condition preventing update being possible, such as insufficient
capacity of an internal battery. This field is merely informational for diagnostics purposes and shall
NOT affect the responses provided by an OTA Provider to an OTA Requestor.

###### See

MatterSpecification.v11.Core § 11.19.7.5.2

##### attributes.updateState

> `readonly` **updateState**: [`Attribute`](../../interfaces/Attribute.md)\<[`UpdateState`](enumerations/UpdateState.md), `any`\>

This field shall reflect the current state of the OTA Requestor with regards to obtaining software
updates. See Section 11.19.7.4.2, “UpdateStateEnum” for possible values.

This field SHOULD be updated in a timely manner whenever OTA Requestor internal state updates.

###### See

MatterSpecification.v11.Core § 11.19.7.5.3

##### attributes.updateStateProgress

> `readonly` **updateStateProgress**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This field shall reflect the percentage value of progress, relative to the current UpdateState, if
applicable to the state.

The value of this field shall be null if a progress indication does not apply to the current state.

A value of 0 shall indicate that the beginning has occurred. A value of 100 shall indicate completion.

This field may be updated infrequently. Some care SHOULD be taken by Nodes to avoid over- reporting
progress when this attribute is part of a subscription.

###### See

MatterSpecification.v11.Core § 11.19.7.5.4

##### commands

> `readonly` **commands**: `object`

##### commands.announceOtaProvider

> `readonly` **announceOtaProvider**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command may be invoked by Administrators to announce the presence of a particular OTA Provider.

This command shall be scoped to the accessing fabric.

If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.

###### See

MatterSpecification.v11.Core § 11.19.7.6.1

##### events

> `readonly` **events**: `object`

##### events.downloadError

> `readonly` **downloadError**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated whenever an error occurs during OTA Requestor download operation.

###### See

MatterSpecification.v11.Core § 11.19.7.7.9

##### events.stateTransition

> `readonly` **stateTransition**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when a change of the UpdateState attribute occurs due to an OTA Requestor
moving through the states necessary to query for updates.

###### See

MatterSpecification.v11.Core § 11.19.7.7.1

##### events.versionApplied

> `readonly` **versionApplied**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated whenever a new version starts executing after being applied due to a
software update. This event SHOULD be generated even if a software update was done using means outside
of this cluster.

###### See

MatterSpecification.v11.Core § 11.19.7.7.6

##### id

> `readonly` **id**: `42` = `0x2a`

##### name

> `readonly` **name**: `"OtaSoftwareUpdateRequestor"` = `"OtaSoftwareUpdateRequestor"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:233](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L233)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:350](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L350)

***

### TlvAnnounceOtaProviderRequest

> `const` **TlvAnnounceOtaProviderRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

#### See

MatterSpecification.v11.Core § 11.19.7.6.1

#### Type declaration

##### announcementReason

> **announcementReason**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`AnnouncementReason`](enumerations/AnnouncementReason.md)\>

##### endpoint

> **endpoint**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber)\>

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### metadataForNode

> **metadataForNode**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### providerNodeId

> **providerNodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NodeId`](../../../../datatype/export/README.md#nodeid)\>

##### vendorId

> **vendorId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`VendorId`](../../../../datatype/export/README.md#vendorid)\>

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L129)

***

### TlvDownloadErrorEvent

> `const` **TlvDownloadErrorEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the OtaSoftwareUpdateRequestor downloadError event

#### See

MatterSpecification.v11.Core § 11.19.7.7.9

#### Type declaration

##### bytesDownloaded

> **bytesDownloaded**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

##### platformCode

> **platformCode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number` \| `bigint`\>

##### progressPercent

> **progressPercent**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

##### softwareVersion

> **softwareVersion**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L216)

***

### TlvProviderLocationStruct

> `const` **TlvProviderLocationStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

#### See

MatterSpecification.v11.Core § 11.19.7.4.21

#### Type declaration

##### endpoint

> **endpoint**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber)\>

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### providerNodeId

> **providerNodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NodeId`](../../../../datatype/export/README.md#nodeid)\>

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L39)

***

### TlvStateTransitionEvent

> `const` **TlvStateTransitionEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the OtaSoftwareUpdateRequestor stateTransition event

#### See

MatterSpecification.v11.Core § 11.19.7.7.1

#### Type declaration

##### newState

> **newState**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`UpdateState`](enumerations/UpdateState.md)\>

##### previousState

> **previousState**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`UpdateState`](enumerations/UpdateState.md)\>

##### reason

> **reason**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ChangeReason`](enumerations/ChangeReason.md)\>

##### targetSoftwareVersion

> **targetSoftwareVersion**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:180](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L180)

***

### TlvVersionAppliedEvent

> `const` **TlvVersionAppliedEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the OtaSoftwareUpdateRequestor versionApplied event

#### See

MatterSpecification.v11.Core § 11.19.7.7.6

#### Type declaration

##### productId

> **productId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### softwareVersion

> **softwareVersion**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L199)
