[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / Actions

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

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:1168

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.actionList

> `readonly` **actionList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

The ActionList attribute holds the list of actions. Each entry shall have an unique ActionID, and its
EndpointListID shall exist in the EndpointLists attribute.

###### See

MatterSpecification.v11.Core § 9.14.5.1

##### attributes.endpointLists

> `readonly` **endpointLists**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

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

> `readonly` **disableAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command disables a certain action or automation, and shall change the action’s state to Inactive.

Example: disable a motion sensor to no longer control the lights in an area.

###### See

MatterSpecification.v11.Core § 9.14.6.11

##### commands.disableActionWithDuration

> `readonly` **disableActionWithDuration**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command disables a certain action or automation, and shall change the action’s state to Disabled.
After the specified Duration, the action or automation will re-start, and the action’s state shall
change to either Inactive or Active, depending on the actions (see examples 4 and 6).

Example: disable a "wakeup" experience for a period of 1 week when going on holiday (to prevent them
from turning on in the morning while you’re not at home). After this period, the wakeup experience will
control the lights as before.

###### See

MatterSpecification.v11.Core § 9.14.6.12

##### commands.enableAction

> `readonly` **enableAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command enables a certain action or automation. Afterwards, the action’s state shall be Active.

Example: enable a motion sensor to control the lights in an area.

###### See

MatterSpecification.v11.Core § 9.14.6.9

##### commands.enableActionWithDuration

> `readonly` **enableActionWithDuration**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command enables a certain action or automation, and shall change the action’s state to be Active.
After the specified Duration, the action or automation will stop, and the action’s state shall change to
Disabled.

Example: enable a "presence mimicking" behavior for the lights in your home during a vacation; the
Duration field is used to indicated the length of your absence from home. After that period, the
presence mimicking behavior will no longer control these lights.

###### See

MatterSpecification.v11.Core § 9.14.6.10

##### commands.instantAction

> `readonly` **instantAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command triggers an action (state change) on the involved endpoints, in a "fire and forget" manner.
Afterwards, the action’s state shall be Inactive.

Example: recall a scene on a number of lights.

###### See

MatterSpecification.v11.Core § 9.14.6.1

##### commands.instantActionWithTransition

> `readonly` **instantActionWithTransition**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **pauseAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command pauses an ongoing action, and shall change the action’s state to Paused.

Example: pause a dynamic lighting effect (the lights stay at their current color) which was previously
started with StartAction.

###### See

MatterSpecification.v11.Core § 9.14.6.6

##### commands.pauseActionWithDuration

> `readonly` **pauseActionWithDuration**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **resumeAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command resumes a previously paused action, and shall change the action’s state to Active.

The difference between ResumeAction and StartAction is that ResumeAction will continue the action from
the state where it was paused, while StartAction will start the action from the beginning.

Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing from the
point they were paused).

###### See

MatterSpecification.v11.Core § 9.14.6.8

##### commands.startAction

> `readonly` **startAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command triggers the commencement of an action on the involved endpoints. Afterwards, the action’s
state shall be Active.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of
the scene) on a set of lights.

Example: start a sequence of events such as a wake-up experience involving lights moving through several
brightness/color combinations and the window covering gradually opening.

###### See

MatterSpecification.v11.Core § 9.14.6.3

##### commands.startActionWithDuration

> `readonly` **startActionWithDuration**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command triggers the commencement of an action on the involved endpoints, and shall change the
action’s state to Active. After the specified Duration, the action will stop, and the action’s state
shall change to Inactive.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of
the scene) on a set of lights for 1 hour (Duration=3600).

###### See

MatterSpecification.v11.Core § 9.14.6.4

##### commands.stopAction

> `readonly` **stopAction**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state shall be
Inactive.

Example: stop a dynamic lighting pattern which was previously started with StartAction.

###### See

MatterSpecification.v11.Core § 9.14.6.5

##### events

> `readonly` **events**: `object`

##### events.actionFailed

> `readonly` **actionFailed**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **stateChanged**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **id**: `37`

##### name

> `readonly` **name**: `"Actions"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:670

***

### CommandBits

> `const` **CommandBits**: `object`

Note - The bit allocation of this bitmap shall follow the ID’s of the Commands of this cluster.

#### See

MatterSpecification.v11.Core § 9.14.4.1

#### Type declaration

##### disableAction

> **disableAction**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for DisableAction command

##### disableActionWithDuration

> **disableActionWithDuration**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for DisableActionWithDuration command

##### enableAction

> **enableAction**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for EnableAction command

##### enableActionWithDuration

> **enableActionWithDuration**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for EnableActionWithDuration command

##### instantAction

> **instantAction**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for InstantAction command

##### instantActionWithTransition

> **instantActionWithTransition**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for InstantActionWithTransition command

##### pauseAction

> **pauseAction**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for PauseAction command

##### pauseActionWithDuration

> **pauseActionWithDuration**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for PauseActionWithDuration command

##### resumeAction

> **resumeAction**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for ResumeAction command

##### startAction

> **startAction**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for StartAction command

##### startActionWithDuration

> **startActionWithDuration**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for StartActionWithDuration command

##### stopAction

> **stopAction**: [`BitFlag`](../../../schema/README.md#bitflag)

Indicate support for StopAction command

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:95

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:1171

***

### TlvActionFailedEvent

> `const` **TlvActionFailedEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the Actions actionFailed event

#### See

MatterSpecification.v11.Core § 9.14.7.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:633

***

### TlvActionStruct

> `const` **TlvActionStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This data type holds the details of a single action, and contains the data fields below.

#### See

MatterSpecification.v11.Core § 9.14.4.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:173

***

### TlvDisableActionRequest

> `const` **TlvDisableActionRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions disableAction command

#### See

MatterSpecification.v11.Core § 9.14.6.11

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:549

***

### TlvDisableActionWithDurationRequest

> `const` **TlvDisableActionWithDurationRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions disableActionWithDuration command

#### See

MatterSpecification.v11.Core § 9.14.6.12

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:565

***

### TlvEnableActionRequest

> `const` **TlvEnableActionRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions enableAction command

#### See

MatterSpecification.v11.Core § 9.14.6.9

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:511

***

### TlvEnableActionWithDurationRequest

> `const` **TlvEnableActionWithDurationRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions enableActionWithDuration command

#### See

MatterSpecification.v11.Core § 9.14.6.10

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:527

***

### TlvEndpointListStruct

> `const` **TlvEndpointListStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This data type holds the details of a single endpoint list, which relates to a set of endpoints that have some
logical relation, and contains the data fields below.

#### See

MatterSpecification.v11.Core § 9.14.4.7

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:324

***

### TlvInstantActionRequest

> `const` **TlvInstantActionRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions instantAction command

#### See

MatterSpecification.v11.Core § 9.14.6.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:365

***

### TlvInstantActionWithTransitionRequest

> `const` **TlvInstantActionWithTransitionRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions instantActionWithTransition command

#### See

MatterSpecification.v11.Core § 9.14.6.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:381

***

### TlvPauseActionRequest

> `const` **TlvPauseActionRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions pauseAction command

#### See

MatterSpecification.v11.Core § 9.14.6.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:457

***

### TlvPauseActionWithDurationRequest

> `const` **TlvPauseActionWithDurationRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions pauseActionWithDuration command

#### See

MatterSpecification.v11.Core § 9.14.6.7

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:473

***

### TlvResumeActionRequest

> `const` **TlvResumeActionRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions resumeAction command

#### See

MatterSpecification.v11.Core § 9.14.6.8

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:495

***

### TlvStartActionRequest

> `const` **TlvStartActionRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions startAction command

#### See

MatterSpecification.v11.Core § 9.14.6.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:403

***

### TlvStartActionWithDurationRequest

> `const` **TlvStartActionWithDurationRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions startActionWithDuration command

#### See

MatterSpecification.v11.Core § 9.14.6.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:419

***

### TlvStateChangedEvent

> `const` **TlvStateChangedEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the Actions stateChanged event

#### See

MatterSpecification.v11.Core § 9.14.7.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:587

***

### TlvStopActionRequest

> `const` **TlvStopActionRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Actions stopAction command

#### See

MatterSpecification.v11.Core § 9.14.6.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:441
