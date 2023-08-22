[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Actions

# Namespace: Actions

[cluster/export](cluster_export.md).Actions

## Table of contents

### Enumerations

- [ActionError](../enums/cluster_export.Actions.ActionError.md)
- [ActionState](../enums/cluster_export.Actions.ActionState.md)
- [ActionType](../enums/cluster_export.Actions.ActionType.md)
- [EndpointListType](../enums/cluster_export.Actions.EndpointListType.md)

### Variables

- [Cluster](cluster_export.Actions.md#cluster)
- [CommandBits](cluster_export.Actions.md#commandbits)
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

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `actionList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `state`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\> ; `supportedCommands`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `disableAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `disableActionWithDuration`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableActionWithDuration`: [`BitFlag`](schema_export.md#bitflag-1) ; `instantAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `instantActionWithTransition`: [`BitFlag`](schema_export.md#bitflag-1) ; `pauseAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `pauseActionWithDuration`: [`BitFlag`](schema_export.md#bitflag-1) ; `resumeAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `startAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `startActionWithDuration`: [`BitFlag`](schema_export.md#bitflag-1) ; `stopAction`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ActionType`](../enums/cluster_export.Actions.ActionType.md)\>  }\>[], `any`\> ; `endpointLists`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)\>  }\>[], `any`\> ; `setupUrl`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`string`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `disableAction`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\> ; `disableActionWithDuration`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\> ; `enableAction`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\> ; `enableActionWithDuration`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\> ; `instantAction`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\> ; `instantActionWithTransition`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `pauseAction`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\> ; `pauseActionWithDuration`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\> ; `resumeAction`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\> ; `startAction`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\> ; `startActionWithDuration`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\> ; `stopAction`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\>  }, { `actionFailed`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `error`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ActionError`](../enums/cluster_export.Actions.ActionError.md)\> ; `invokeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>, `any`\> ; `stateChanged`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>, `any`\>  }\>

Actions

This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to expose

  • Information about logical grouping of endpoints on the Node (example: lights in a room)

  • Information about named actions that can be performed on such a group of endpoints (example: recall a scene
    for a group of lights by its name)

  • Commands to trigger such actions

  • Events to receive feedback on the state of such actions.

The information on grouping and available actions is typically provided by the user or Bridge manufacturer via
some means not defined in Matter, and therefore provided as read-only to Nodes. For example: a
manufacturer-provided app allows a user to set up logical grouping and create/assign scene for such groups.

Using this cluster, a Node can learn about such logical grouping, provided actions, and trigger such actions.

While the origin of this cluster stems from use cases with a Bridge, its server side may also be implemented on
any Node which can expose certain grouping, actions or automations to other users.

After defining the attributes, commands and events for this cluster, and the associated data types, several
examples are provided to illustrate the capabilities of this cluster.

Actions can be defined in a flexible manner to suit the needs of the various nodes implementing this cluster.
For each action, the commands available for that particular action are defined.

This cluster can be used to expose only the grouping of endpoints without any actions defined by populating the
EndpointList attribute accordingly and providing an empty list for ActionList.

The term 'action' in the description of this cluster should not be confused with the term 'action' as used in
the Interaction Model.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:566](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L566)

___

### CommandBits

• `Const` **CommandBits**: `Object`

Note - The bit allocation of this bitmap shall follow the ID’s of the Commands of this cluster.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `disableAction` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for DisableAction command |
| `disableActionWithDuration` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for DisableActionWithDuration command |
| `enableAction` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for EnableAction command |
| `enableActionWithDuration` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for EnableActionWithDuration command |
| `instantAction` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for InstantAction command |
| `instantActionWithTransition` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for InstantActionWithTransition command |
| `pauseAction` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for PauseAction command |
| `pauseActionWithDuration` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for PauseActionWithDuration command |
| `resumeAction` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for ResumeAction command |
| `startAction` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for StartAction command |
| `startActionWithDuration` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for StartActionWithDuration command |
| `stopAction` | [`BitFlag`](schema_export.md#bitflag-1) | Indicate support for StopAction command |

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L116)

___

### TlvActionFailedEvent

• `Const` **TlvActionFailedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `error`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ActionError`](../enums/cluster_export.Actions.ActionError.md)\> ; `invokeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>

Body of the Actions actionFailed event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:516](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L516)

___

### TlvActionStruct

• `Const` **TlvActionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `state`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\> ; `supportedCommands`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `disableAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `disableActionWithDuration`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `enableActionWithDuration`: [`BitFlag`](schema_export.md#bitflag-1) ; `instantAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `instantActionWithTransition`: [`BitFlag`](schema_export.md#bitflag-1) ; `pauseAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `pauseActionWithDuration`: [`BitFlag`](schema_export.md#bitflag-1) ; `resumeAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `startAction`: [`BitFlag`](schema_export.md#bitflag-1) ; `startActionWithDuration`: [`BitFlag`](schema_export.md#bitflag-1) ; `stopAction`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ActionType`](../enums/cluster_export.Actions.ActionType.md)\>  }\>

This data type holds the details of a single action, and contains the data fields below.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:210](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L210)

___

### TlvDisableActionRequest

• `Const` **TlvDisableActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions disableAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.11

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:456](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L456)

___

### TlvDisableActionWithDurationRequest

• `Const` **TlvDisableActionWithDurationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions disableActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.12

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:466](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L466)

___

### TlvEnableActionRequest

• `Const` **TlvEnableActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions enableAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.9

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:435](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L435)

___

### TlvEnableActionWithDurationRequest

• `Const` **TlvEnableActionWithDurationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions enableActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.10

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:445](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L445)

___

### TlvEndpointListStruct

• `Const` **TlvEndpointListStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)\>  }\>

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

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:322](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L322)

___

### TlvInstantActionRequest

• `Const` **TlvInstantActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions instantAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:340](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L340)

___

### TlvInstantActionWithTransitionRequest

• `Const` **TlvInstantActionWithTransitionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the Actions instantActionWithTransition command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:350](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L350)

___

### TlvPauseActionRequest

• `Const` **TlvPauseActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions pauseAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:404](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L404)

___

### TlvPauseActionWithDurationRequest

• `Const` **TlvPauseActionWithDurationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions pauseActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.7

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:414](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L414)

___

### TlvResumeActionRequest

• `Const` **TlvResumeActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions resumeAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.8

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:425](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L425)

___

### TlvStartActionRequest

• `Const` **TlvStartActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions startAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:367](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L367)

___

### TlvStartActionWithDurationRequest

• `Const` **TlvStartActionWithDurationRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions startActionWithDuration command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:377](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L377)

___

### TlvStateChangedEvent

• `Const` **TlvStateChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>

Body of the Actions stateChanged event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:477](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L477)

___

### TlvStopActionRequest

• `Const` **TlvStopActionRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the Actions stopAction command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:394](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L394)
