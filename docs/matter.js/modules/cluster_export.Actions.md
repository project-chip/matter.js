[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Actions

# Namespace: Actions

[cluster/export](cluster_export.md).Actions

## Table of contents

### Enumerations

- [ActionError](../enums/cluster_export.Actions.ActionError.md)
- [ActionState](../enums/cluster_export.Actions.ActionState.md)
- [ActionType](../enums/cluster_export.Actions.ActionType.md)
- [EndpointListType](../enums/cluster_export.Actions.EndpointListType.md)

### Interfaces

- [ActionFailedEvent](../interfaces/cluster_export.Actions.ActionFailedEvent.md)
- [ActionStruct](../interfaces/cluster_export.Actions.ActionStruct.md)
- [Cluster](../interfaces/cluster_export.Actions.Cluster.md)
- [DisableActionRequest](../interfaces/cluster_export.Actions.DisableActionRequest.md)
- [DisableActionWithDurationRequest](../interfaces/cluster_export.Actions.DisableActionWithDurationRequest.md)
- [EnableActionRequest](../interfaces/cluster_export.Actions.EnableActionRequest.md)
- [EnableActionWithDurationRequest](../interfaces/cluster_export.Actions.EnableActionWithDurationRequest.md)
- [EndpointListStruct](../interfaces/cluster_export.Actions.EndpointListStruct.md)
- [InstantActionRequest](../interfaces/cluster_export.Actions.InstantActionRequest.md)
- [InstantActionWithTransitionRequest](../interfaces/cluster_export.Actions.InstantActionWithTransitionRequest.md)
- [PauseActionRequest](../interfaces/cluster_export.Actions.PauseActionRequest.md)
- [PauseActionWithDurationRequest](../interfaces/cluster_export.Actions.PauseActionWithDurationRequest.md)
- [ResumeActionRequest](../interfaces/cluster_export.Actions.ResumeActionRequest.md)
- [StartActionRequest](../interfaces/cluster_export.Actions.StartActionRequest.md)
- [StartActionWithDurationRequest](../interfaces/cluster_export.Actions.StartActionWithDurationRequest.md)
- [StateChangedEvent](../interfaces/cluster_export.Actions.StateChangedEvent.md)
- [StopActionRequest](../interfaces/cluster_export.Actions.StopActionRequest.md)

### Variables

- [Cluster](cluster_export.Actions.md#cluster)
- [ClusterInstance](cluster_export.Actions.md#clusterinstance)
- [CommandBits](cluster_export.Actions.md#commandbits)
- [Complete](cluster_export.Actions.md#complete)
- [TlvActionFailedEvent](cluster_export.Actions.md#tlvactionfailedevent)
- [TlvActionStruct](cluster_export.Actions.md#tlvactionstruct)
- [TlvDisableActionRequest](cluster_export.Actions.md#tlvdisableactionrequest)
- [TlvDisableActionWithDurationRequest](cluster_export.Actions.md#tlvdisableactionwithdurationrequest)
- [TlvEnableActionRequest](cluster_export.Actions.md#tlvenableactionrequest)
- [TlvEnableActionWithDurationRequest](cluster_export.Actions.md#tlvenableactionwithdurationrequest)
- [TlvEndpointListStruct](cluster_export.Actions.md#tlvendpointliststruct)
- [TlvInstantActionRequest](cluster_export.Actions.md#tlvinstantactionrequest)
- [TlvInstantActionWithTransitionRequest](cluster_export.Actions.md#tlvinstantactionwithtransitionrequest)
- [TlvPauseActionRequest](cluster_export.Actions.md#tlvpauseactionrequest)
- [TlvPauseActionWithDurationRequest](cluster_export.Actions.md#tlvpauseactionwithdurationrequest)
- [TlvResumeActionRequest](cluster_export.Actions.md#tlvresumeactionrequest)
- [TlvStartActionRequest](cluster_export.Actions.md#tlvstartactionrequest)
- [TlvStartActionWithDurationRequest](cluster_export.Actions.md#tlvstartactionwithdurationrequest)
- [TlvStateChangedEvent](cluster_export.Actions.md#tlvstatechangedevent)
- [TlvStopActionRequest](cluster_export.Actions.md#tlvstopactionrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.Actions.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:962](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L962)

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:964](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L964)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `actionList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `state`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\> ; `supportedCommands`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `disableAction`: [`BitFlag`](schema_export.md#bitflag) ; `disableActionWithDuration`: [`BitFlag`](schema_export.md#bitflag) ; `enableAction`: [`BitFlag`](schema_export.md#bitflag) ; `enableActionWithDuration`: [`BitFlag`](schema_export.md#bitflag) ; `instantAction`: [`BitFlag`](schema_export.md#bitflag) ; `instantActionWithTransition`: [`BitFlag`](schema_export.md#bitflag) ; `pauseAction`: [`BitFlag`](schema_export.md#bitflag) ; `pauseActionWithDuration`: [`BitFlag`](schema_export.md#bitflag) ; `resumeAction`: [`BitFlag`](schema_export.md#bitflag) ; `startAction`: [`BitFlag`](schema_export.md#bitflag) ; `startActionWithDuration`: [`BitFlag`](schema_export.md#bitflag) ; `stopAction`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionType`](../enums/cluster_export.Actions.ActionType.md)\>  }\>[], `any`\> ; `endpointLists`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)\>  }\>[], `any`\> ; `setupUrl`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\>  } ; `commands`: \{ `disableAction`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `disableActionWithDuration`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `enableAction`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `enableActionWithDuration`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `instantAction`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `instantActionWithTransition`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `pauseAction`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `pauseActionWithDuration`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `resumeAction`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `startAction`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `startActionWithDuration`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `stopAction`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `events`: \{ `actionFailed`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `error`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionError`](../enums/cluster_export.Actions.ActionError.md)\> ; `invokeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>, `any`\> ; `stateChanged`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>, `any`\>  } ; `id`: ``37`` = 0x25; `name`: ``"Actions"`` = "Actions"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.Actions.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:656](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L656)

___

### CommandBits

• `Const` **CommandBits**: `Object`

Note - The bit allocation of this bitmap shall follow the ID’s of the Commands of this cluster.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `disableAction` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for DisableAction command |
| `disableActionWithDuration` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for DisableActionWithDuration command |
| `enableAction` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for EnableAction command |
| `enableActionWithDuration` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for EnableActionWithDuration command |
| `instantAction` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for InstantAction command |
| `instantActionWithTransition` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for InstantActionWithTransition command |
| `pauseAction` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for PauseAction command |
| `pauseActionWithDuration` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for PauseActionWithDuration command |
| `resumeAction` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for ResumeAction command |
| `startAction` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for StartAction command |
| `startActionWithDuration` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for StartActionWithDuration command |
| `stopAction` | [`BitFlag`](schema_export.md#bitflag) | Indicate support for StopAction command |

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:119](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L119)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.Actions.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:965](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L965)

___

### TlvActionFailedEvent

• `Const` **TlvActionFailedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `error`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionError`](../enums/cluster_export.Actions.ActionError.md)\> ; `invokeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>

Body of the Actions actionFailed event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:633](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L633)

___

### TlvActionStruct

• `Const` **TlvActionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `state`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\> ; `supportedCommands`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `disableAction`: [`BitFlag`](schema_export.md#bitflag) ; `disableActionWithDuration`: [`BitFlag`](schema_export.md#bitflag) ; `enableAction`: [`BitFlag`](schema_export.md#bitflag) ; `enableActionWithDuration`: [`BitFlag`](schema_export.md#bitflag) ; `instantAction`: [`BitFlag`](schema_export.md#bitflag) ; `instantActionWithTransition`: [`BitFlag`](schema_export.md#bitflag) ; `pauseAction`: [`BitFlag`](schema_export.md#bitflag) ; `pauseActionWithDuration`: [`BitFlag`](schema_export.md#bitflag) ; `resumeAction`: [`BitFlag`](schema_export.md#bitflag) ; `startAction`: [`BitFlag`](schema_export.md#bitflag) ; `startActionWithDuration`: [`BitFlag`](schema_export.md#bitflag) ; `stopAction`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionType`](../enums/cluster_export.Actions.ActionType.md)\>  }\>

This data type holds the details of a single action, and contains the data fields below.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:213](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L213)

___

### TlvDisableActionRequest

• `Const` **TlvDisableActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions disableAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.11

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:552](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L552)

___

### TlvDisableActionWithDurationRequest

• `Const` **TlvDisableActionWithDurationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions disableActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.12

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:569](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L569)

___

### TlvEnableActionRequest

• `Const` **TlvEnableActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions enableAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.9

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:517](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L517)

___

### TlvEnableActionWithDurationRequest

• `Const` **TlvEnableActionWithDurationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions enableActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.10

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:534](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L534)

___

### TlvEndpointListStruct

• `Const` **TlvEndpointListStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)\>  }\>

This data type holds the details of a single endpoint list, which relates to a set of endpoints that have some
logical relation, and contains the data fields below.

This field shall provide an unique identifier used to identify the endpoint list.

This field shall indicate the name (as assigned by the user or automatically by the server) associated with the
set of endpoints in this list. This can be used for identifying the action to the user by the client. Example:
"living room".

This field shall indicate the type of endpoint list, see EndpointListTypeEnum.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:332](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L332)

___

### TlvInstantActionRequest

• `Const` **TlvInstantActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions instantAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:366](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L366)

___

### TlvInstantActionWithTransitionRequest

• `Const` **TlvInstantActionWithTransitionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the Actions instantActionWithTransition command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:383](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L383)

___

### TlvPauseActionRequest

• `Const` **TlvPauseActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions pauseAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:465](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L465)

___

### TlvPauseActionWithDurationRequest

• `Const` **TlvPauseActionWithDurationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions pauseActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:482](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L482)

___

### TlvResumeActionRequest

• `Const` **TlvResumeActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions resumeAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:500](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L500)

___

### TlvStartActionRequest

• `Const` **TlvStartActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions startAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:407](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L407)

___

### TlvStartActionWithDurationRequest

• `Const` **TlvStartActionWithDurationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions startActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:424](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L424)

___

### TlvStateChangedEvent

• `Const` **TlvStateChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>

Body of the Actions stateChanged event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:587](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L587)

___

### TlvStopActionRequest

• `Const` **TlvStopActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

Input to the Actions stopAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:448](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L448)
