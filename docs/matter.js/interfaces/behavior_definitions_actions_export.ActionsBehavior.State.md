[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/actions/export](../modules/behavior_definitions_actions_export.md) / [ActionsBehavior](../modules/behavior_definitions_actions_export.ActionsBehavior.md) / State

# Interface: State

[behavior/definitions/actions/export](../modules/behavior_definitions_actions_export.md).[ActionsBehavior](../modules/behavior_definitions_actions_export.ActionsBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_actions_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [actionList](behavior_definitions_actions_export.ActionsBehavior.State.md#actionlist)
- [endpointLists](behavior_definitions_actions_export.ActionsBehavior.State.md#endpointlists)
- [setupUrl](behavior_definitions_actions_export.ActionsBehavior.State.md#setupurl)

## Properties

### actionList

• **actionList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `endpointListId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `state`: [`FieldType`](tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\> ; `supportedCommands`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `disableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `disableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantActionWithTransition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `resumeAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopAction`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`ActionType`](../enums/cluster_export.Actions.ActionType.md)\>  }\>[]

The ActionList attribute holds the list of actions. Each entry shall have an unique ActionID, and its
EndpointListID shall exist in the EndpointLists attribute.

**`See`**

MatterSpecification.v11.Core § 9.14.5.1

#### Inherited from

StateType.actionList

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:667](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L667)

___

### endpointLists

• **endpointLists**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpointListId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)\>  }\>[]

The EndpointLists attribute holds the list of endpoint lists. Each entry shall have an unique
EndpointListID.

**`See`**

MatterSpecification.v11.Core § 9.14.5.2

#### Inherited from

StateType.endpointLists

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:675](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L675)

___

### setupUrl

• `Optional` **setupUrl**: `string`

The SetupURL attribute (when provided) shall indicate a URL; its syntax shall follow the syntax as
specified in RFC 3986, max. 512 ASCII characters. The location referenced by this URL shall provide
additional information for the actions provided:

  • When used without suffix, it shall provide information about the various actions which the cluster
    provides.

    ◦ Example: SetupURL could take the value of example://Actions or https://domain.example/
      Matter/bridgev1/Actions for this generic case (access generic info how to use actions provided by
      this cluster).

  • When used with a suffix of "/?a=" and the decimal value of ActionID for one of the actions, it may
    provide information about that particular action. This could be a deeplink to
    manufacturer-app/website (associated somehow to the server node) with the information/edit-screen
    for this action so that the user can view and update details of the action, e.g. edit the scene, or
    change the wake-up experience time period.

    ◦ Example of SetupURL with suffix added: example://Actions/?a=12345 or
      https://domain.example/Matter/bridgev1/Actions/?a=12345 for linking to specific info/editing of
      the action with ActionID 0x3039.

**`See`**

MatterSpecification.v11.Core § 9.14.5.3

#### Inherited from

StateType.setupUrl

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:701](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L701)
