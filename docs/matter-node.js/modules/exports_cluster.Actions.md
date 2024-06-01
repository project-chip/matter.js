[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Actions

# Namespace: Actions

[exports/cluster](exports_cluster.md).Actions

## Table of contents

### Enumerations

- [ActionError](../enums/exports_cluster.Actions.ActionError.md)
- [ActionState](../enums/exports_cluster.Actions.ActionState.md)
- [ActionType](../enums/exports_cluster.Actions.ActionType.md)
- [EndpointListType](../enums/exports_cluster.Actions.EndpointListType.md)

### Interfaces

- [ActionFailedEvent](../interfaces/exports_cluster.Actions.ActionFailedEvent.md)
- [ActionStruct](../interfaces/exports_cluster.Actions.ActionStruct.md)
- [Cluster](../interfaces/exports_cluster.Actions.Cluster.md)
- [DisableActionRequest](../interfaces/exports_cluster.Actions.DisableActionRequest.md)
- [DisableActionWithDurationRequest](../interfaces/exports_cluster.Actions.DisableActionWithDurationRequest.md)
- [EnableActionRequest](../interfaces/exports_cluster.Actions.EnableActionRequest.md)
- [EnableActionWithDurationRequest](../interfaces/exports_cluster.Actions.EnableActionWithDurationRequest.md)
- [EndpointListStruct](../interfaces/exports_cluster.Actions.EndpointListStruct.md)
- [InstantActionRequest](../interfaces/exports_cluster.Actions.InstantActionRequest.md)
- [InstantActionWithTransitionRequest](../interfaces/exports_cluster.Actions.InstantActionWithTransitionRequest.md)
- [PauseActionRequest](../interfaces/exports_cluster.Actions.PauseActionRequest.md)
- [PauseActionWithDurationRequest](../interfaces/exports_cluster.Actions.PauseActionWithDurationRequest.md)
- [ResumeActionRequest](../interfaces/exports_cluster.Actions.ResumeActionRequest.md)
- [StartActionRequest](../interfaces/exports_cluster.Actions.StartActionRequest.md)
- [StartActionWithDurationRequest](../interfaces/exports_cluster.Actions.StartActionWithDurationRequest.md)
- [StateChangedEvent](../interfaces/exports_cluster.Actions.StateChangedEvent.md)
- [StopActionRequest](../interfaces/exports_cluster.Actions.StopActionRequest.md)

### Variables

- [Cluster](exports_cluster.Actions.md#cluster)
- [ClusterInstance](exports_cluster.Actions.md#clusterinstance)
- [CommandBits](exports_cluster.Actions.md#commandbits)
- [Complete](exports_cluster.Actions.md#complete)
- [TlvActionFailedEvent](exports_cluster.Actions.md#tlvactionfailedevent)
- [TlvActionStruct](exports_cluster.Actions.md#tlvactionstruct)
- [TlvDisableActionRequest](exports_cluster.Actions.md#tlvdisableactionrequest)
- [TlvDisableActionWithDurationRequest](exports_cluster.Actions.md#tlvdisableactionwithdurationrequest)
- [TlvEnableActionRequest](exports_cluster.Actions.md#tlvenableactionrequest)
- [TlvEnableActionWithDurationRequest](exports_cluster.Actions.md#tlvenableactionwithdurationrequest)
- [TlvEndpointListStruct](exports_cluster.Actions.md#tlvendpointliststruct)
- [TlvInstantActionRequest](exports_cluster.Actions.md#tlvinstantactionrequest)
- [TlvInstantActionWithTransitionRequest](exports_cluster.Actions.md#tlvinstantactionwithtransitionrequest)
- [TlvPauseActionRequest](exports_cluster.Actions.md#tlvpauseactionrequest)
- [TlvPauseActionWithDurationRequest](exports_cluster.Actions.md#tlvpauseactionwithdurationrequest)
- [TlvResumeActionRequest](exports_cluster.Actions.md#tlvresumeactionrequest)
- [TlvStartActionRequest](exports_cluster.Actions.md#tlvstartactionrequest)
- [TlvStartActionWithDurationRequest](exports_cluster.Actions.md#tlvstartactionwithdurationrequest)
- [TlvStateChangedEvent](exports_cluster.Actions.md#tlvstatechangedevent)
- [TlvStopActionRequest](exports_cluster.Actions.md#tlvstopactionrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.Actions.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:1168

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:1170

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `actionList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `endpointLists`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `setupUrl`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`string`, `any`\>  } ; `commands`: \{ `disableAction`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `disableActionWithDuration`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enableAction`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enableActionWithDuration`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `instantAction`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `instantActionWithTransition`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `pauseAction`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `pauseActionWithDuration`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `resumeAction`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `startAction`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `startActionWithDuration`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopAction`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `actionFailed`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stateChanged`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``37`` ; `name`: ``"Actions"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.Actions.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:670

___

### CommandBits

• `Const` **CommandBits**: `Object`

Note - The bit allocation of this bitmap shall follow the ID’s of the Commands of this cluster.

**`See`**

MatterSpecification.v11.Core § 9.14.4.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `disableAction` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for DisableAction command |
| `disableActionWithDuration` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for DisableActionWithDuration command |
| `enableAction` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for EnableAction command |
| `enableActionWithDuration` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for EnableActionWithDuration command |
| `instantAction` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for InstantAction command |
| `instantActionWithTransition` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for InstantActionWithTransition command |
| `pauseAction` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for PauseAction command |
| `pauseActionWithDuration` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for PauseActionWithDuration command |
| `resumeAction` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for ResumeAction command |
| `startAction` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for StartAction command |
| `startActionWithDuration` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for StartActionWithDuration command |
| `stopAction` | [`BitFlag`](exports_schema.md#bitflag) | Indicate support for StopAction command |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:95

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.Actions.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:1171

___

### TlvActionFailedEvent

• `Const` **TlvActionFailedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Actions actionFailed event

**`See`**

MatterSpecification.v11.Core § 9.14.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:633

___

### TlvActionStruct

• `Const` **TlvActionStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This data type holds the details of a single action, and contains the data fields below.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:173

___

### TlvDisableActionRequest

• `Const` **TlvDisableActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions disableAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:549

___

### TlvDisableActionWithDurationRequest

• `Const` **TlvDisableActionWithDurationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions disableActionWithDuration command

**`See`**

MatterSpecification.v11.Core § 9.14.6.12

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:565

___

### TlvEnableActionRequest

• `Const` **TlvEnableActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions enableAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:511

___

### TlvEnableActionWithDurationRequest

• `Const` **TlvEnableActionWithDurationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions enableActionWithDuration command

**`See`**

MatterSpecification.v11.Core § 9.14.6.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:527

___

### TlvEndpointListStruct

• `Const` **TlvEndpointListStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This data type holds the details of a single endpoint list, which relates to a set of endpoints that have some
logical relation, and contains the data fields below.

**`See`**

MatterSpecification.v11.Core § 9.14.4.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:324

___

### TlvInstantActionRequest

• `Const` **TlvInstantActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions instantAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:365

___

### TlvInstantActionWithTransitionRequest

• `Const` **TlvInstantActionWithTransitionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions instantActionWithTransition command

**`See`**

MatterSpecification.v11.Core § 9.14.6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:381

___

### TlvPauseActionRequest

• `Const` **TlvPauseActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions pauseAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:457

___

### TlvPauseActionWithDurationRequest

• `Const` **TlvPauseActionWithDurationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions pauseActionWithDuration command

**`See`**

MatterSpecification.v11.Core § 9.14.6.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:473

___

### TlvResumeActionRequest

• `Const` **TlvResumeActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions resumeAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:495

___

### TlvStartActionRequest

• `Const` **TlvStartActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions startAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:403

___

### TlvStartActionWithDurationRequest

• `Const` **TlvStartActionWithDurationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions startActionWithDuration command

**`See`**

MatterSpecification.v11.Core § 9.14.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:419

___

### TlvStateChangedEvent

• `Const` **TlvStateChangedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Actions stateChanged event

**`See`**

MatterSpecification.v11.Core § 9.14.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:587

___

### TlvStopActionRequest

• `Const` **TlvStopActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_certificate._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions stopAction command

**`See`**

MatterSpecification.v11.Core § 9.14.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:441
