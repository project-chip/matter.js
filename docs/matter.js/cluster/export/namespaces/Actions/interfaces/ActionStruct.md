[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Actions](../README.md) / ActionStruct

# Interface: ActionStruct

This data type holds the details of a single action, and contains the data fields below.

## See

MatterSpecification.v11.Core § 9.14.4.6

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvActionStruct`](../README.md#tlvactionstruct)\>

## Properties

### actionId

> **actionId**: `number`

This field shall provide an unique identifier used to identify an action.

#### See

MatterSpecification.v11.Core § 9.14.4.6.1

#### Inherited from

`TypeFromSchema.actionId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L218)

***

### endpointListId

> **endpointListId**: `number`

This field shall provide a reference to the associated endpoint list, which specifies the endpoints on this
Node which will be impacted by this ActionID.

#### See

MatterSpecification.v11.Core § 9.14.4.6.4

#### Inherited from

`TypeFromSchema.endpointListId`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L244)

***

### name

> **name**: `string`

This field shall indicate the name (as assigned by the user or automatically by the server) associated with
this action. This can be used for identifying the action to the user by the client. Example: "my colorful
scene".

#### See

MatterSpecification.v11.Core § 9.14.4.6.2

#### Inherited from

`TypeFromSchema.name`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L227)

***

### state

> **state**: [`ActionState`](../enumerations/ActionState.md)

This field shall indicate the current state of this action.

#### See

MatterSpecification.v11.Core § 9.14.4.6.6

#### Inherited from

`TypeFromSchema.state`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:261](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L261)

***

### supportedCommands

> **supportedCommands**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This field is a bitmap which shall be used to indicate which of the cluster’s commands are sup

ported for this particular action, with a bit set to 1 for each supported command according to the table
below. Other bits shall be set to 0.

#### See

MatterSpecification.v11.Core § 9.14.4.6.5

#### Type declaration

##### disableAction

> **disableAction**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for DisableAction command

##### disableActionWithDuration

> **disableActionWithDuration**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for DisableActionWithDuration command

##### enableAction

> **enableAction**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for EnableAction command

##### enableActionWithDuration

> **enableActionWithDuration**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for EnableActionWithDuration command

##### instantAction

> **instantAction**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for InstantAction command

##### instantActionWithTransition

> **instantActionWithTransition**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for InstantActionWithTransition command

##### pauseAction

> **pauseAction**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for PauseAction command

##### pauseActionWithDuration

> **pauseActionWithDuration**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for PauseActionWithDuration command

##### resumeAction

> **resumeAction**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for ResumeAction command

##### startAction

> **startAction**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for StartAction command

##### startActionWithDuration

> **startActionWithDuration**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for StartActionWithDuration command

##### stopAction

> **stopAction**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indicate support for StopAction command

#### Inherited from

`TypeFromSchema.supportedCommands`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:254](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L254)

***

### type

> **type**: [`ActionType`](../enumerations/ActionType.md)

This field shall indicate the type of action. The value of Type of an action, along with its
SupportedCommands can be used by the client in its UX or logic to determine how to present or use such
action. See ActionTypeEnum for details and examples.

#### See

MatterSpecification.v11.Core § 9.14.4.6.3

#### Inherited from

`TypeFromSchema.type`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:236](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L236)
