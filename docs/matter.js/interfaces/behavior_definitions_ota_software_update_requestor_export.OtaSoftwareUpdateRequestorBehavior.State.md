[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/ota-software-update-requestor/export](../modules/behavior_definitions_ota_software_update_requestor_export.md) / [OtaSoftwareUpdateRequestorBehavior](../modules/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior.md) / State

# Interface: State

[behavior/definitions/ota-software-update-requestor/export](../modules/behavior_definitions_ota_software_update_requestor_export.md).[OtaSoftwareUpdateRequestorBehavior](../modules/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_ota_software_update_requestor_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [defaultOtaProviders](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior.State.md#defaultotaproviders)
- [updatePossible](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior.State.md#updatepossible)
- [updateState](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior.State.md#updatestate)
- [updateStateProgress](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior.State.md#updatestateprogress)

## Properties

### defaultOtaProviders

• **defaultOtaProviders**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]

This field is a list of ProviderLocationStruct whose entries shall be set by Administrators, either
during Commissioning or at a later time, to set the Provider Location for the default OTA Provider Node
to use for software updates on a given Fabric.

There shall NOT be more than one entry per Fabric. On a list update that would introduce more than one
entry per fabric, the write shall fail with CONSTRAINT_ERROR status code.

Provider Locations obtained using the AnnounceOTAProvider command shall NOT overwrite values set in the
DefaultOTAProviders attribute.

**`See`**

MatterSpecification.v11.Core § 11.19.7.5.1

#### Inherited from

StateType.defaultOtaProviders

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:254](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L254)

___

### updatePossible

• **updatePossible**: `boolean`

This field shall be set to True if the OTA Requestor is currently able to be updated. Otherwise, it
shall be set to False in case of any condition preventing update being possible, such as insufficient
capacity of an internal battery. This field is merely informational for diagnostics purposes and shall
NOT affect the responses provided by an OTA Provider to an OTA Requestor.

**`See`**

MatterSpecification.v11.Core § 11.19.7.5.2

#### Inherited from

StateType.updatePossible

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:268](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L268)

___

### updateState

• **updateState**: [`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)

This field shall reflect the current state of the OTA Requestor with regards to obtaining software
updates. See Section 11.19.7.4.2, “UpdateStateEnum” for possible values.

This field SHOULD be updated in a timely manner whenever OTA Requestor internal state updates.

**`See`**

MatterSpecification.v11.Core § 11.19.7.5.3

#### Inherited from

StateType.updateState

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:278](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L278)

___

### updateStateProgress

• **updateStateProgress**: ``null`` \| `number`

This field shall reflect the percentage value of progress, relative to the current UpdateState, if
applicable to the state.

The value of this field shall be null if a progress indication does not apply to the current state.

A value of 0 shall indicate that the beginning has occurred. A value of 100 shall indicate completion.

This field may be updated infrequently. Some care SHOULD be taken by Nodes to avoid over- reporting
progress when this attribute is part of a subscription.

**`See`**

MatterSpecification.v11.Core § 11.19.7.5.4

#### Inherited from

StateType.updateStateProgress

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L293)
