[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/ota-software-update-requestor/export](../../../README.md) / [OtaSoftwareUpdateRequestorBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### defaultOtaProviders

> **defaultOtaProviders**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This field is a list of ProviderLocationStruct whose entries shall be set by Administrators, either
during Commissioning or at a later time, to set the Provider Location for the default OTA Provider Node
to use for software updates on a given Fabric.

There shall NOT be more than one entry per Fabric. On a list update that would introduce more than one
entry per fabric, the write shall fail with CONSTRAINT_ERROR status code.

Provider Locations obtained using the AnnounceOTAProvider command shall NOT overwrite values set in the
DefaultOTAProviders attribute.

#### See

MatterSpecification.v11.Core § 11.19.7.5.1

#### Inherited from

`StateType.defaultOtaProviders`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:252](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L252)

***

### updatePossible

> **updatePossible**: `boolean`

This field shall be set to True if the OTA Requestor is currently able to be updated. Otherwise, it
shall be set to False in case of any condition preventing update being possible, such as insufficient
capacity of an internal battery. This field is merely informational for diagnostics purposes and shall
NOT affect the responses provided by an OTA Provider to an OTA Requestor.

#### See

MatterSpecification.v11.Core § 11.19.7.5.2

#### Inherited from

`StateType.updatePossible`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L266)

***

### updateState

> **updateState**: [`UpdateState`](../../../../../../../cluster/export/namespaces/OtaSoftwareUpdateRequestor/enumerations/UpdateState.md)

This field shall reflect the current state of the OTA Requestor with regards to obtaining software
updates. See Section 11.19.7.4.2, “UpdateStateEnum” for possible values.

This field SHOULD be updated in a timely manner whenever OTA Requestor internal state updates.

#### See

MatterSpecification.v11.Core § 11.19.7.5.3

#### Inherited from

`StateType.updateState`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:276](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L276)

***

### updateStateProgress

> **updateStateProgress**: `null` \| `number`

This field shall reflect the percentage value of progress, relative to the current UpdateState, if
applicable to the state.

The value of this field shall be null if a progress indication does not apply to the current state.

A value of 0 shall indicate that the beginning has occurred. A value of 100 shall indicate completion.

This field may be updated infrequently. Some care SHOULD be taken by Nodes to avoid over- reporting
progress when this attribute is part of a subscription.

#### See

MatterSpecification.v11.Core § 11.19.7.5.4

#### Inherited from

`StateType.updateStateProgress`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:291](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L291)
