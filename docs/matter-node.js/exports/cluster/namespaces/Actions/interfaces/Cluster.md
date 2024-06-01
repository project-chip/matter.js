[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Actions](../README.md) / Cluster

# Interface: Cluster

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

## See

MatterSpecification.v11.Core § 9.14

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### actionList

> `readonly` **actionList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The ActionList attribute holds the list of actions. Each entry shall have an unique ActionID, and its
EndpointListID shall exist in the EndpointLists attribute.

###### See

MatterSpecification.v11.Core § 9.14.5.1

##### endpointLists

> `readonly` **endpointLists**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The EndpointLists attribute holds the list of endpoint lists. Each entry shall have an unique
EndpointListID.

###### See

MatterSpecification.v11.Core § 9.14.5.2

##### setupUrl

> `readonly` **setupUrl**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`string`, `any`\>

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

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### disableAction

> `readonly` **disableAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command disables a certain action or automation, and shall change the action’s state to Inactive.

Example: disable a motion sensor to no longer control the lights in an area.

##### See

MatterSpecification.v11.Core § 9.14.6.11

#### disableActionWithDuration

> `readonly` **disableActionWithDuration**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command disables a certain action or automation, and shall change the action’s state to Disabled.
After the specified Duration, the action or automation will re-start, and the action’s state shall
change to either Inactive or Active, depending on the actions (see examples 4 and 6).

Example: disable a "wakeup" experience for a period of 1 week when going on holiday (to prevent them
from turning on in the morning while you’re not at home). After this period, the wakeup experience will
control the lights as before.

##### See

MatterSpecification.v11.Core § 9.14.6.12

#### enableAction

> `readonly` **enableAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command enables a certain action or automation. Afterwards, the action’s state shall be Active.

Example: enable a motion sensor to control the lights in an area.

##### See

MatterSpecification.v11.Core § 9.14.6.9

#### enableActionWithDuration

> `readonly` **enableActionWithDuration**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command enables a certain action or automation, and shall change the action’s state to be Active.
After the specified Duration, the action or automation will stop, and the action’s state shall change to
Disabled.

Example: enable a "presence mimicking" behavior for the lights in your home during a vacation; the
Duration field is used to indicated the length of your absence from home. After that period, the
presence mimicking behavior will no longer control these lights.

##### See

MatterSpecification.v11.Core § 9.14.6.10

#### instantAction

> `readonly` **instantAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command triggers an action (state change) on the involved endpoints, in a "fire and forget" manner.
Afterwards, the action’s state shall be Inactive.

Example: recall a scene on a number of lights.

##### See

MatterSpecification.v11.Core § 9.14.6.1

#### instantActionWithTransition

> `readonly` **instantActionWithTransition**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data type),
a gradual transition SHOULD take place from the old to the new state over this time period. However, the
exact transition is manufacturer dependent.

This command triggers an action (state change) on the involved endpoints, with a specified time to
transition from the current state to the new state. During the transition, the action’s state shall be
Active. Afterwards, the action’s state shall be Inactive.

Example: recall a scene on a number of lights, with a specified transition time.

##### See

MatterSpecification.v11.Core § 9.14.6.2

#### pauseAction

> `readonly` **pauseAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command pauses an ongoing action, and shall change the action’s state to Paused.

Example: pause a dynamic lighting effect (the lights stay at their current color) which was previously
started with StartAction.

##### See

MatterSpecification.v11.Core § 9.14.6.6

#### pauseActionWithDuration

> `readonly` **pauseActionWithDuration**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

##### See

MatterSpecification.v11.Core § 9.14.6.7

#### resumeAction

> `readonly` **resumeAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command resumes a previously paused action, and shall change the action’s state to Active.

The difference between ResumeAction and StartAction is that ResumeAction will continue the action from
the state where it was paused, while StartAction will start the action from the beginning.

Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing from the
point they were paused).

##### See

MatterSpecification.v11.Core § 9.14.6.8

#### startAction

> `readonly` **startAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command triggers the commencement of an action on the involved endpoints. Afterwards, the action’s
state shall be Active.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of
the scene) on a set of lights.

Example: start a sequence of events such as a wake-up experience involving lights moving through several
brightness/color combinations and the window covering gradually opening.

##### See

MatterSpecification.v11.Core § 9.14.6.3

#### startActionWithDuration

> `readonly` **startActionWithDuration**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command triggers the commencement of an action on the involved endpoints, and shall change the
action’s state to Active. After the specified Duration, the action will stop, and the action’s state
shall change to Inactive.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of
the scene) on a set of lights for 1 hour (Duration=3600).

##### See

MatterSpecification.v11.Core § 9.14.6.4

#### stopAction

> `readonly` **stopAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state shall be
Inactive.

Example: stop a dynamic lighting pattern which was previously started with StartAction.

##### See

MatterSpecification.v11.Core § 9.14.6.5

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### actionFailed

> `readonly` **actionFailed**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

##### See

MatterSpecification.v11.Core § 9.14.7.2

#### stateChanged

> `readonly` **stateChanged**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when there is a change in the State of an ActionID during the execution of
an action and the most recent command using that ActionID used an InvokeID data field.

It provides feedback to the client about the progress of the action.

Example: When InstantActionWithTransition is invoked (with an InvokeID data field), two StateChanged
events will be generated:

  • one when the transition starts (NewState=Active)

  • one when the transition completed (NewState=Inactive)

##### See

MatterSpecification.v11.Core § 9.14.7.1

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`37`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"Actions"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `1`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

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

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

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

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

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

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

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

##### attributes.actionList

> `readonly` **actionList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The ActionList attribute holds the list of actions. Each entry shall have an unique ActionID, and its
EndpointListID shall exist in the EndpointLists attribute.

###### See

MatterSpecification.v11.Core § 9.14.5.1

##### attributes.endpointLists

> `readonly` **endpointLists**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The EndpointLists attribute holds the list of endpoint lists. Each entry shall have an unique
EndpointListID.

###### See

MatterSpecification.v11.Core § 9.14.5.2

##### attributes.setupUrl

> `readonly` **setupUrl**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`string`, `any`\>

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

> `readonly` **disableAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command disables a certain action or automation, and shall change the action’s state to Inactive.

Example: disable a motion sensor to no longer control the lights in an area.

###### See

MatterSpecification.v11.Core § 9.14.6.11

##### commands.disableActionWithDuration

> `readonly` **disableActionWithDuration**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command disables a certain action or automation, and shall change the action’s state to Disabled.
After the specified Duration, the action or automation will re-start, and the action’s state shall
change to either Inactive or Active, depending on the actions (see examples 4 and 6).

Example: disable a "wakeup" experience for a period of 1 week when going on holiday (to prevent them
from turning on in the morning while you’re not at home). After this period, the wakeup experience will
control the lights as before.

###### See

MatterSpecification.v11.Core § 9.14.6.12

##### commands.enableAction

> `readonly` **enableAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command enables a certain action or automation. Afterwards, the action’s state shall be Active.

Example: enable a motion sensor to control the lights in an area.

###### See

MatterSpecification.v11.Core § 9.14.6.9

##### commands.enableActionWithDuration

> `readonly` **enableActionWithDuration**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command enables a certain action or automation, and shall change the action’s state to be Active.
After the specified Duration, the action or automation will stop, and the action’s state shall change to
Disabled.

Example: enable a "presence mimicking" behavior for the lights in your home during a vacation; the
Duration field is used to indicated the length of your absence from home. After that period, the
presence mimicking behavior will no longer control these lights.

###### See

MatterSpecification.v11.Core § 9.14.6.10

##### commands.instantAction

> `readonly` **instantAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command triggers an action (state change) on the involved endpoints, in a "fire and forget" manner.
Afterwards, the action’s state shall be Inactive.

Example: recall a scene on a number of lights.

###### See

MatterSpecification.v11.Core § 9.14.6.1

##### commands.instantActionWithTransition

> `readonly` **instantActionWithTransition**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

> `readonly` **pauseAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command pauses an ongoing action, and shall change the action’s state to Paused.

Example: pause a dynamic lighting effect (the lights stay at their current color) which was previously
started with StartAction.

###### See

MatterSpecification.v11.Core § 9.14.6.6

##### commands.pauseActionWithDuration

> `readonly` **pauseActionWithDuration**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

> `readonly` **resumeAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command resumes a previously paused action, and shall change the action’s state to Active.

The difference between ResumeAction and StartAction is that ResumeAction will continue the action from
the state where it was paused, while StartAction will start the action from the beginning.

Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing from the
point they were paused).

###### See

MatterSpecification.v11.Core § 9.14.6.8

##### commands.startAction

> `readonly` **startAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command triggers the commencement of an action on the involved endpoints. Afterwards, the action’s
state shall be Active.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of
the scene) on a set of lights.

Example: start a sequence of events such as a wake-up experience involving lights moving through several
brightness/color combinations and the window covering gradually opening.

###### See

MatterSpecification.v11.Core § 9.14.6.3

##### commands.startActionWithDuration

> `readonly` **startActionWithDuration**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command triggers the commencement of an action on the involved endpoints, and shall change the
action’s state to Active. After the specified Duration, the action will stop, and the action’s state
shall change to Inactive.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of
the scene) on a set of lights for 1 hour (Duration=3600).

###### See

MatterSpecification.v11.Core § 9.14.6.4

##### commands.stopAction

> `readonly` **stopAction**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state shall be
Inactive.

Example: stop a dynamic lighting pattern which was previously started with StartAction.

###### See

MatterSpecification.v11.Core § 9.14.6.5

##### events

> `readonly` **events**: `object`

##### events.actionFailed

> `readonly` **actionFailed**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **stateChanged**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
