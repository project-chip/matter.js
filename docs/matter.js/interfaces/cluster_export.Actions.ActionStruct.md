[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / ActionStruct

# Interface: ActionStruct

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).ActionStruct

This data type holds the details of a single action, and contains the data fields below.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvActionStruct`](../modules/cluster_export.Actions.md#tlvactionstruct)\>

  ↳ **`ActionStruct`**

## Table of contents

### Properties

- [actionId](cluster_export.Actions.ActionStruct.md#actionid)
- [endpointListId](cluster_export.Actions.ActionStruct.md#endpointlistid)
- [name](cluster_export.Actions.ActionStruct.md#name)
- [state](cluster_export.Actions.ActionStruct.md#state)
- [supportedCommands](cluster_export.Actions.ActionStruct.md#supportedcommands)
- [type](cluster_export.Actions.ActionStruct.md#type)

## Properties

### actionId

• **actionId**: `number`

This field shall provide an unique identifier used to identify an action.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6.1

#### Inherited from

TypeFromSchema.actionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:218](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L218)

___

### endpointListId

• **endpointListId**: `number`

This field shall provide a reference to the associated endpoint list, which specifies the endpoints on this
Node which will be impacted by this ActionID.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6.4

#### Inherited from

TypeFromSchema.endpointListId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:244](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L244)

___

### name

• **name**: `string`

This field shall indicate the name (as assigned by the user or automatically by the server) associated with
this action. This can be used for identifying the action to the user by the client. Example: "my colorful
scene".

**`See`**

MatterSpecification.v11.Core § 9.14.4.6.2

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L227)

___

### state

• **state**: [`ActionState`](../enums/cluster_export.Actions.ActionState.md)

This field shall indicate the current state of this action.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6.6

#### Inherited from

TypeFromSchema.state

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:261](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L261)

___

### supportedCommands

• **supportedCommands**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `disableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `disableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantActionWithTransition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `resumeAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopAction`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

This field is a bitmap which shall be used to indicate which of the cluster’s commands are sup

ported for this particular action, with a bit set to 1 for each supported command according to the table
below. Other bits shall be set to 0.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6.5

#### Inherited from

TypeFromSchema.supportedCommands

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:254](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L254)

___

### type

• **type**: [`ActionType`](../enums/cluster_export.Actions.ActionType.md)

This field shall indicate the type of action. The value of Type of an action, along with its
SupportedCommands can be used by the client in its UX or logic to determine how to present or use such
action. See ActionTypeEnum for details and examples.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6.3

#### Inherited from

TypeFromSchema.type

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:236](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L236)
