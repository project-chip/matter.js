[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Actions](../modules/exports_cluster.Actions.md) / ActionStruct

# Interface: ActionStruct

[exports/cluster](../modules/exports_cluster.md).[Actions](../modules/exports_cluster.Actions.md).ActionStruct

This data type holds the details of a single action, and contains the data fields below.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvActionStruct`](../modules/exports_cluster.Actions.md#tlvactionstruct)\>

  ↳ **`ActionStruct`**

## Table of contents

### Properties

- [actionId](exports_cluster.Actions.ActionStruct.md#actionid)
- [endpointListId](exports_cluster.Actions.ActionStruct.md#endpointlistid)
- [name](exports_cluster.Actions.ActionStruct.md#name)
- [state](exports_cluster.Actions.ActionStruct.md#state)
- [supportedCommands](exports_cluster.Actions.ActionStruct.md#supportedcommands)
- [type](exports_cluster.Actions.ActionStruct.md#type)

## Properties

### actionId

• **actionId**: `number`

This field shall provide an unique identifier used to identify an action.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6.1

#### Inherited from

TypeFromSchema.actionId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:179

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

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:202

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

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:187

___

### state

• **state**: [`ActionState`](../enums/exports_cluster.Actions.ActionState.md)

This field shall indicate the current state of this action.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6.6

#### Inherited from

TypeFromSchema.state

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:266

___

### supportedCommands

• **supportedCommands**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `disableAction`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `disableActionWithDuration`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `enableAction`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `enableActionWithDuration`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `instantAction`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `instantActionWithTransition`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pauseAction`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pauseActionWithDuration`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `resumeAction`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `startAction`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `startActionWithDuration`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `stopAction`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

This field is a bitmap which shall be used to indicate which of the cluster’s commands are sup

ported for this particular action, with a bit set to 1 for each supported command according to the table
below. Other bits shall be set to 0.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6.5

#### Inherited from

TypeFromSchema.supportedCommands

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:211

___

### type

• **type**: [`ActionType`](../enums/exports_cluster.Actions.ActionType.md)

This field shall indicate the type of action. The value of Type of an action, along with its
SupportedCommands can be used by the client in its UX or logic to determine how to present or use such
action. See ActionTypeEnum for details and examples.

**`See`**

MatterSpecification.v11.Core § 9.14.4.6.3

#### Inherited from

TypeFromSchema.type

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:195
