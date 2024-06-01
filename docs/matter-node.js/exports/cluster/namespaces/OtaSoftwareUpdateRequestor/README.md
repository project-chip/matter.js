[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / OtaSoftwareUpdateRequestor

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

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:308

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.defaultOtaProviders

> `readonly` **defaultOtaProviders**: [`WritableFabricScopedAttribute`](../../interfaces/WritableFabricScopedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

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

> `readonly` **updateStateProgress**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **announceOtaProvider**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command may be invoked by Administrators to announce the presence of a particular OTA Provider.

This command shall be scoped to the accessing fabric.

If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.

###### See

MatterSpecification.v11.Core § 11.19.7.6.1

##### events

> `readonly` **events**: `object`

##### events.downloadError

> `readonly` **downloadError**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated whenever an error occurs during OTA Requestor download operation.

###### See

MatterSpecification.v11.Core § 11.19.7.7.9

##### events.stateTransition

> `readonly` **stateTransition**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated when a change of the UpdateState attribute occurs due to an OTA Requestor
moving through the states necessary to query for updates.

###### See

MatterSpecification.v11.Core § 11.19.7.7.1

##### events.versionApplied

> `readonly` **versionApplied**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated whenever a new version starts executing after being applied due to a
software update. This event SHOULD be generated even if a software update was done using means outside
of this cluster.

###### See

MatterSpecification.v11.Core § 11.19.7.7.6

##### id

> `readonly` **id**: `42`

##### name

> `readonly` **name**: `"OtaSoftwareUpdateRequestor"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:189

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:311

***

### TlvAnnounceOtaProviderRequest

> `const` **TlvAnnounceOtaProviderRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

#### See

MatterSpecification.v11.Core § 11.19.7.6.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:94

***

### TlvDownloadErrorEvent

> `const` **TlvDownloadErrorEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the OtaSoftwareUpdateRequestor downloadError event

#### See

MatterSpecification.v11.Core § 11.19.7.7.9

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:173

***

### TlvProviderLocationStruct

> `const` **TlvProviderLocationStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

#### See

MatterSpecification.v11.Core § 11.19.7.4.21

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:17

***

### TlvStateTransitionEvent

> `const` **TlvStateTransitionEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the OtaSoftwareUpdateRequestor stateTransition event

#### See

MatterSpecification.v11.Core § 11.19.7.7.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:139

***

### TlvVersionAppliedEvent

> `const` **TlvVersionAppliedEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the OtaSoftwareUpdateRequestor versionApplied event

#### See

MatterSpecification.v11.Core § 11.19.7.7.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:157
