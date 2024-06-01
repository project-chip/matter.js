[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / Actions

# Namespace: Actions

## Index

### Enumerations

- [ActionError](enumerations/ActionError.md)
- [ActionState](enumerations/ActionState.md)
- [ActionType](enumerations/ActionType.md)
- [EndpointListType](enumerations/EndpointListType.md)

### Interfaces

- [ActionFailedEvent](interfaces/ActionFailedEvent.md)
- [ActionStruct](interfaces/ActionStruct.md)
- [Cluster](interfaces/Cluster.md)
- [DisableActionRequest](interfaces/DisableActionRequest.md)
- [DisableActionWithDurationRequest](interfaces/DisableActionWithDurationRequest.md)
- [EnableActionRequest](interfaces/EnableActionRequest.md)
- [EnableActionWithDurationRequest](interfaces/EnableActionWithDurationRequest.md)
- [EndpointListStruct](interfaces/EndpointListStruct.md)
- [InstantActionRequest](interfaces/InstantActionRequest.md)
- [InstantActionWithTransitionRequest](interfaces/InstantActionWithTransitionRequest.md)
- [PauseActionRequest](interfaces/PauseActionRequest.md)
- [PauseActionWithDurationRequest](interfaces/PauseActionWithDurationRequest.md)
- [ResumeActionRequest](interfaces/ResumeActionRequest.md)
- [StartActionRequest](interfaces/StartActionRequest.md)
- [StartActionWithDurationRequest](interfaces/StartActionWithDurationRequest.md)
- [StateChangedEvent](interfaces/StateChangedEvent.md)
- [StopActionRequest](interfaces/StopActionRequest.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:987](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L987)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.actionList

> `readonly` **actionList**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The ActionList attribute holds the list of actions. Each entry shall have an unique ActionID, and its
EndpointListID shall exist in the EndpointLists attribute.

###### See

MatterSpecification.v11.Core § 9.14.5.1

##### attributes.endpointLists

> `readonly` **endpointLists**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The EndpointLists attribute holds the list of endpoint lists. Each entry shall have an unique
EndpointListID.

###### See

MatterSpecification.v11.Core § 9.14.5.2

##### attributes.setupUrl

> `readonly` **setupUrl**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`string`, `any`\>

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

###### See

MatterSpecification.v11.Core § 9.14.5.3

##### commands

> `readonly` **commands**: `object`

##### commands.disableAction

> `readonly` **disableAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command disables a certain action or automation, and shall change the action’s state to Inactive.

Example: disable a motion sensor to no longer control the lights in an area.

###### See

MatterSpecification.v11.Core § 9.14.6.11

##### commands.disableActionWithDuration

> `readonly` **disableActionWithDuration**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command disables a certain action or automation, and shall change the action’s state to Disabled.
After the specified Duration, the action or automation will re-start, and the action’s state shall
change to either Inactive or Active, depending on the actions (see examples 4 and 6).

Example: disable a "wakeup" experience for a period of 1 week when going on holiday (to prevent them
from turning on in the morning while you’re not at home). After this period, the wakeup experience will
control the lights as before.

###### See

MatterSpecification.v11.Core § 9.14.6.12

##### commands.enableAction

> `readonly` **enableAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command enables a certain action or automation. Afterwards, the action’s state shall be Active.

Example: enable a motion sensor to control the lights in an area.

###### See

MatterSpecification.v11.Core § 9.14.6.9

##### commands.enableActionWithDuration

> `readonly` **enableActionWithDuration**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command enables a certain action or automation, and shall change the action’s state to be Active.
After the specified Duration, the action or automation will stop, and the action’s state shall change to
Disabled.

Example: enable a "presence mimicking" behavior for the lights in your home during a vacation; the
Duration field is used to indicated the length of your absence from home. After that period, the
presence mimicking behavior will no longer control these lights.

###### See

MatterSpecification.v11.Core § 9.14.6.10

##### commands.instantAction

> `readonly` **instantAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command triggers an action (state change) on the involved endpoints, in a "fire and forget" manner.
Afterwards, the action’s state shall be Inactive.

Example: recall a scene on a number of lights.

###### See

MatterSpecification.v11.Core § 9.14.6.1

##### commands.instantActionWithTransition

> `readonly` **instantActionWithTransition**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data type),
a gradual transition SHOULD take place from the old to the new state over this time period. However, the
exact transition is manufacturer dependent.

This command triggers an action (state change) on the involved endpoints, with a specified time to
transition from the current state to the new state. During the transition, the action’s state shall be
Active. Afterwards, the action’s state shall be Inactive.

Example: recall a scene on a number of lights, with a specified transition time.

###### See

MatterSpecification.v11.Core § 9.14.6.2

##### commands.pauseAction

> `readonly` **pauseAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command pauses an ongoing action, and shall change the action’s state to Paused.

Example: pause a dynamic lighting effect (the lights stay at their current color) which was previously
started with StartAction.

###### See

MatterSpecification.v11.Core § 9.14.6.6

##### commands.pauseActionWithDuration

> `readonly` **pauseActionWithDuration**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command pauses an ongoing action, and shall change the action’s state to Paused. After the
specified Duration, the ongoing action will be automatically resumed. which shall change the action’s
state to Active.

Example: pause a dynamic lighting effect (the lights stay at their current color) for 10 minutes
(Duration=600).

The difference between Pause/Resume and Disable/Enable is on the one hand semantic (the former is more
of a transitionary nature while the latter is more permanent) and on the other hand these can be
implemented slightly differently in the implementation of the action (e.g. a Pause would be
automatically resumed after some hours or during a nightly reset, while an Disable would remain in
effect until explicitly enabled again).

###### See

MatterSpecification.v11.Core § 9.14.6.7

##### commands.resumeAction

> `readonly` **resumeAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command resumes a previously paused action, and shall change the action’s state to Active.

The difference between ResumeAction and StartAction is that ResumeAction will continue the action from
the state where it was paused, while StartAction will start the action from the beginning.

Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing from the
point they were paused).

###### See

MatterSpecification.v11.Core § 9.14.6.8

##### commands.startAction

> `readonly` **startAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command triggers the commencement of an action on the involved endpoints. Afterwards, the action’s
state shall be Active.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of
the scene) on a set of lights.

Example: start a sequence of events such as a wake-up experience involving lights moving through several
brightness/color combinations and the window covering gradually opening.

###### See

MatterSpecification.v11.Core § 9.14.6.3

##### commands.startActionWithDuration

> `readonly` **startActionWithDuration**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command triggers the commencement of an action on the involved endpoints, and shall change the
action’s state to Active. After the specified Duration, the action will stop, and the action’s state
shall change to Inactive.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of
the scene) on a set of lights for 1 hour (Duration=3600).

###### See

MatterSpecification.v11.Core § 9.14.6.4

##### commands.stopAction

> `readonly` **stopAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state shall be
Inactive.

Example: stop a dynamic lighting pattern which was previously started with StartAction.

###### See

MatterSpecification.v11.Core § 9.14.6.5

##### events

> `readonly` **events**: `object`

##### events.actionFailed

> `readonly` **actionFailed**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when there is some error which prevents the action from its normal planned
execution and the most recent command using that ActionID used an InvokeID data field.

It provides feedback to the client about the non-successful progress of the action.

Example: When InstantActionWithTransition is invoked (with an InvokeID data field), and another
controller changes the state of one or more of the involved endpoints during the transition, thus
interrupting the transition triggered by the action, two events would be generated:

  • StateChanged when the transition starts (NewState=Active)

  • ActionFailed when the interrupting command occurs (NewState=Inactive, Error=interrupted)

Example: When InstantActionWithTransition is invoked (with an InvokeID data field = 1), and the same
client invokes an InstantAction with (the same or another ActionId and) InvokeID = 2, and this second
command interrupts the transition triggered by the first command, these events would be generated:

  • StateChanged (InvokeID=1, NewState=Active) when the transition starts

  • ActionFailed (InvokeID=2, NewState=Inactive, Error=interrupted) when the second command interrupts
    the transition

  • StateChanged (InvokeID=2, NewState=Inactive) upon the execution of the action for the second command

###### See

MatterSpecification.v11.Core § 9.14.7.2

##### events.stateChanged

> `readonly` **stateChanged**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when there is a change in the State of an ActionID during the execution of
an action and the most recent command using that ActionID used an InvokeID data field.

It provides feedback to the client about the progress of the action.

Example: When InstantActionWithTransition is invoked (with an InvokeID data field), two StateChanged
events will be generated:

  • one when the transition starts (NewState=Active)

  • one when the transition completed (NewState=Inactive)

###### See

MatterSpecification.v11.Core § 9.14.7.1

##### id

> `readonly` **id**: `37` = `0x25`

##### name

> `readonly` **name**: `"Actions"` = `"Actions"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:699](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L699)

***

### CommandBits

> `const` **CommandBits**: `object`

Note - The bit allocation of this bitmap shall follow the ID’s of the Commands of this cluster.

#### See

MatterSpecification.v11.Core § 9.14.4.1

#### Type declaration

##### disableAction

> **disableAction**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for DisableAction command

##### disableActionWithDuration

> **disableActionWithDuration**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for DisableActionWithDuration command

##### enableAction

> **enableAction**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for EnableAction command

##### enableActionWithDuration

> **enableActionWithDuration**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for EnableActionWithDuration command

##### instantAction

> **instantAction**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for InstantAction command

##### instantActionWithTransition

> **instantActionWithTransition**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for InstantActionWithTransition command

##### pauseAction

> **pauseAction**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for PauseAction command

##### pauseActionWithDuration

> **pauseActionWithDuration**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for PauseActionWithDuration command

##### resumeAction

> **resumeAction**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for ResumeAction command

##### startAction

> **startAction**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for StartAction command

##### startActionWithDuration

> **startActionWithDuration**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for StartActionWithDuration command

##### stopAction

> **stopAction**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Indicate support for StopAction command

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L118)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:990](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L990)

***

### TlvActionFailedEvent

> `const` **TlvActionFailedEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the Actions actionFailed event

#### See

MatterSpecification.v11.Core § 9.14.7.2

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall be set to the ActionID of the action which encountered an error.

###### See

MatterSpecification.v11.Core § 9.14.7.2.1

##### error

> **error**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ActionError`](enumerations/ActionError.md)\>

This field shall be set to indicate the reason for non-successful progress of the action.

###### See

MatterSpecification.v11.Core § 9.14.7.2.4

##### invokeId

> **invokeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall be set to the InvokeID which was provided to the most recent command referencing this
ActionID.

###### See

MatterSpecification.v11.Core § 9.14.7.2.2

##### newState

> **newState**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ActionState`](enumerations/ActionState.md)\>

This field shall be set to state that the action is in at the time of generating the event.

###### See

MatterSpecification.v11.Core § 9.14.7.2.3

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:658](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L658)

***

### TlvActionStruct

> `const` **TlvActionStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This data type holds the details of a single action, and contains the data fields below.

#### See

MatterSpecification.v11.Core § 9.14.4.6

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall provide an unique identifier used to identify an action.

###### See

MatterSpecification.v11.Core § 9.14.4.6.1

##### endpointListId

> **endpointListId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall provide a reference to the associated endpoint list, which specifies the endpoints on this
Node which will be impacted by this ActionID.

###### See

MatterSpecification.v11.Core § 9.14.4.6.4

##### name

> **name**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This field shall indicate the name (as assigned by the user or automatically by the server) associated with
this action. This can be used for identifying the action to the user by the client. Example: "my colorful
scene".

###### See

MatterSpecification.v11.Core § 9.14.4.6.2

##### state

> **state**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ActionState`](enumerations/ActionState.md)\>

This field shall indicate the current state of this action.

###### See

MatterSpecification.v11.Core § 9.14.4.6.6

##### supportedCommands

> **supportedCommands**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

This field is a bitmap which shall be used to indicate which of the cluster’s commands are sup

ported for this particular action, with a bit set to 1 for each supported command according to the table
below. Other bits shall be set to 0.

###### See

MatterSpecification.v11.Core § 9.14.4.6.5

##### type

> **type**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ActionType`](enumerations/ActionType.md)\>

This field shall indicate the type of action. The value of Type of an action, along with its
SupportedCommands can be used by the client in its UX or logic to determine how to present or use such
action. See ActionTypeEnum for details and examples.

###### See

MatterSpecification.v11.Core § 9.14.4.6.3

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L212)

***

### TlvDisableActionRequest

> `const` **TlvDisableActionRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions disableAction command

#### See

MatterSpecification.v11.Core § 9.14.6.11

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:566](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L566)

***

### TlvDisableActionWithDurationRequest

> `const` **TlvDisableActionWithDurationRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions disableActionWithDuration command

#### See

MatterSpecification.v11.Core § 9.14.6.12

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### duration

> **duration**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the requested duration in seconds.

###### See

MatterSpecification.v11.Core § 9.14.6.12.1

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:583](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L583)

***

### TlvEnableActionRequest

> `const` **TlvEnableActionRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions enableAction command

#### See

MatterSpecification.v11.Core § 9.14.6.9

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:525](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L525)

***

### TlvEnableActionWithDurationRequest

> `const` **TlvEnableActionWithDurationRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions enableActionWithDuration command

#### See

MatterSpecification.v11.Core § 9.14.6.10

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### duration

> **duration**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the requested duration in seconds.

###### See

MatterSpecification.v11.Core § 9.14.6.10.1

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:542](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L542)

***

### TlvEndpointListStruct

> `const` **TlvEndpointListStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This data type holds the details of a single endpoint list, which relates to a set of endpoints that have some
logical relation, and contains the data fields below.

#### See

MatterSpecification.v11.Core § 9.14.4.7

#### Type declaration

##### endpointListId

> **endpointListId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall provide an unique identifier used to identify the endpoint list.

###### See

MatterSpecification.v11.Core § 9.14.4.7.1

##### endpoints

> **endpoints**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber)[]\>

This field shall provide a list of endpoint numbers.

###### See

MatterSpecification.v11.Core § 9.14.4.7.4

##### name

> **name**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This field shall indicate the name (as assigned by the user or automatically by the server) associated with
the set of endpoints in this list. This can be used for identifying the action to the user by the client.
Example: "living room".

###### See

MatterSpecification.v11.Core § 9.14.4.7.2

##### type

> **type**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`EndpointListType`](enumerations/EndpointListType.md)\>

This field shall indicate the type of endpoint list, see EndpointListTypeEnum.

###### See

MatterSpecification.v11.Core § 9.14.4.7.3

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:323](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L323)

***

### TlvInstantActionRequest

> `const` **TlvInstantActionRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions instantAction command

#### See

MatterSpecification.v11.Core § 9.14.6.1

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:368](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L368)

***

### TlvInstantActionWithTransitionRequest

> `const` **TlvInstantActionWithTransitionRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions instantActionWithTransition command

#### See

MatterSpecification.v11.Core § 9.14.6.2

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the transition time in 1/10th of seconds.

###### See

MatterSpecification.v11.Core § 9.14.6.2.1

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:385](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L385)

***

### TlvPauseActionRequest

> `const` **TlvPauseActionRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions pauseAction command

#### See

MatterSpecification.v11.Core § 9.14.6.6

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:467](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L467)

***

### TlvPauseActionWithDurationRequest

> `const` **TlvPauseActionWithDurationRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions pauseActionWithDuration command

#### See

MatterSpecification.v11.Core § 9.14.6.7

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### duration

> **duration**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the requested duration in seconds.

###### See

MatterSpecification.v11.Core § 9.14.6.7.1

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:484](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L484)

***

### TlvResumeActionRequest

> `const` **TlvResumeActionRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions resumeAction command

#### See

MatterSpecification.v11.Core § 9.14.6.8

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:508](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L508)

***

### TlvStartActionRequest

> `const` **TlvStartActionRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions startAction command

#### See

MatterSpecification.v11.Core § 9.14.6.3

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:409](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L409)

***

### TlvStartActionWithDurationRequest

> `const` **TlvStartActionWithDurationRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions startActionWithDuration command

#### See

MatterSpecification.v11.Core § 9.14.6.4

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### duration

> **duration**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the requested duration in seconds.

###### See

MatterSpecification.v11.Core § 9.14.6.4.1

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:426](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L426)

***

### TlvStateChangedEvent

> `const` **TlvStateChangedEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the Actions stateChanged event

#### See

MatterSpecification.v11.Core § 9.14.7.1

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall be set to the ActionID of the action which has changed state.

###### See

MatterSpecification.v11.Core § 9.14.7.1.1

##### invokeId

> **invokeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall be set to the InvokeID which was provided to the most recent command referencing this
ActionID.

###### See

MatterSpecification.v11.Core § 9.14.7.1.2

##### newState

> **newState**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ActionState`](enumerations/ActionState.md)\>

This field shall be set to state that the action has changed to.

###### See

MatterSpecification.v11.Core § 9.14.7.1.3

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:607](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L607)

***

### TlvStopActionRequest

> `const` **TlvStopActionRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Actions stopAction command

#### See

MatterSpecification.v11.Core § 9.14.6.5

#### Type declaration

##### actionId

> **actionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### invokeId

> **invokeId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:450](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L450)
