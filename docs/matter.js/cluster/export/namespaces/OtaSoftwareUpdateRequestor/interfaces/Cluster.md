[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / Cluster

# Interface: Cluster

OTA Software Update Requestor

Provides an interface for downloading and applying OTA software updates

## See

MatterSpecification.v11.Core § 11.19.7

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### defaultOtaProviders

> `readonly` **defaultOtaProviders**: [`WritableFabricScopedAttribute`](../../../interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This field is a list of ProviderLocationStruct whose entries shall be set by Administrators, either
during Commissioning or at a later time, to set the Provider Location for the default OTA Provider Node
to use for software updates on a given Fabric.

There shall NOT be more than one entry per Fabric. On a list update that would introduce more than one
entry per fabric, the write shall fail with CONSTRAINT_ERROR status code.

Provider Locations obtained using the AnnounceOTAProvider command shall NOT overwrite values set in the
DefaultOTAProviders attribute.

###### See

MatterSpecification.v11.Core § 11.19.7.5.1

##### updatePossible

> `readonly` **updatePossible**: [`Attribute`](../../../interfaces/Attribute.md)\<`boolean`, `any`\>

This field shall be set to True if the OTA Requestor is currently able to be updated. Otherwise, it
shall be set to False in case of any condition preventing update being possible, such as insufficient
capacity of an internal battery. This field is merely informational for diagnostics purposes and shall
NOT affect the responses provided by an OTA Provider to an OTA Requestor.

###### See

MatterSpecification.v11.Core § 11.19.7.5.2

##### updateState

> `readonly` **updateState**: [`Attribute`](../../../interfaces/Attribute.md)\<[`UpdateState`](../enumerations/UpdateState.md), `any`\>

This field shall reflect the current state of the OTA Requestor with regards to obtaining software
updates. See Section 11.19.7.4.2, “UpdateStateEnum” for possible values.

This field SHOULD be updated in a timely manner whenever OTA Requestor internal state updates.

###### See

MatterSpecification.v11.Core § 11.19.7.5.3

##### updateStateProgress

> `readonly` **updateStateProgress**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This field shall reflect the percentage value of progress, relative to the current UpdateState, if
applicable to the state.

The value of this field shall be null if a progress indication does not apply to the current state.

A value of 0 shall indicate that the beginning has occurred. A value of 100 shall indicate completion.

This field may be updated infrequently. Some care SHOULD be taken by Nodes to avoid over- reporting
progress when this attribute is part of a subscription.

###### See

MatterSpecification.v11.Core § 11.19.7.5.4

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

#### announceOtaProvider

> `readonly` **announceOtaProvider**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command may be invoked by Administrators to announce the presence of a particular OTA Provider.

This command shall be scoped to the accessing fabric.

If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.

##### See

MatterSpecification.v11.Core § 11.19.7.6.1

#### Inherited from

`Identity.commands`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L89)

***

### events

> **events**: `object`

#### downloadError

> `readonly` **downloadError**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated whenever an error occurs during OTA Requestor download operation.

##### See

MatterSpecification.v11.Core § 11.19.7.7.9

#### stateTransition

> `readonly` **stateTransition**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when a change of the UpdateState attribute occurs due to an OTA Requestor
moving through the states necessary to query for updates.

##### See

MatterSpecification.v11.Core § 11.19.7.7.1

#### versionApplied

> `readonly` **versionApplied**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated whenever a new version starts executing after being applied due to a
software update. This event SHOULD be generated even if a software update was done using means outside
of this cluster.

##### See

MatterSpecification.v11.Core § 11.19.7.7.6

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

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`42`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L81)

***

### name

> **name**: `"OtaSoftwareUpdateRequestor"`

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

##### attributes.defaultOtaProviders

> `readonly` **defaultOtaProviders**: [`WritableFabricScopedAttribute`](../../../interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

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

> `readonly` **updatePossible**: [`Attribute`](../../../interfaces/Attribute.md)\<`boolean`, `any`\>

This field shall be set to True if the OTA Requestor is currently able to be updated. Otherwise, it
shall be set to False in case of any condition preventing update being possible, such as insufficient
capacity of an internal battery. This field is merely informational for diagnostics purposes and shall
NOT affect the responses provided by an OTA Provider to an OTA Requestor.

###### See

MatterSpecification.v11.Core § 11.19.7.5.2

##### attributes.updateState

> `readonly` **updateState**: [`Attribute`](../../../interfaces/Attribute.md)\<[`UpdateState`](../enumerations/UpdateState.md), `any`\>

This field shall reflect the current state of the OTA Requestor with regards to obtaining software
updates. See Section 11.19.7.4.2, “UpdateStateEnum” for possible values.

This field SHOULD be updated in a timely manner whenever OTA Requestor internal state updates.

###### See

MatterSpecification.v11.Core § 11.19.7.5.3

##### attributes.updateStateProgress

> `readonly` **updateStateProgress**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

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

> `readonly` **announceOtaProvider**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command may be invoked by Administrators to announce the presence of a particular OTA Provider.

This command shall be scoped to the accessing fabric.

If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.

###### See

MatterSpecification.v11.Core § 11.19.7.6.1

##### events

> `readonly` **events**: `object`

##### events.downloadError

> `readonly` **downloadError**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated whenever an error occurs during OTA Requestor download operation.

###### See

MatterSpecification.v11.Core § 11.19.7.7.9

##### events.stateTransition

> `readonly` **stateTransition**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when a change of the UpdateState attribute occurs due to an OTA Requestor
moving through the states necessary to query for updates.

###### See

MatterSpecification.v11.Core § 11.19.7.7.1

##### events.versionApplied

> `readonly` **versionApplied**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
