[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/level-control/export](../README.md) / LevelControlServerLogic

# Class: LevelControlServerLogic

This is the default server implementation of [LevelControlBehavior](../README.md#levelcontrolbehavior).

This implementation includes all features of [LevelControl.Cluster](../../../../../cluster/export/namespaces/LevelControl/README.md#cluster) and implements all mandatory commands. The
On-Off Feature is automatically turned on as defined by the matter specification.
You should use [LevelControlServer.with](LevelControlServer.md#with) to specialize the class for the features your implementation supports.

This default implementation also handles the OnOff cluster dependency and the ColorControl dependency as defined by
the Matter specification automatically.

This implementation ignores by default all transition times and sets the level immediately. Alternatively, you can
set the `managedTransitionTimeHandling` state attribute to true to have matter.js manage transition times by
changing the level value step-wise every second. This might be an intermediate solution if you develop
independently of defined hardware.

If you develop for a specific hardware you should extend the [LevelControlServer](LevelControlServer.md) class and implement the
following methods to natively use device features to correctly support the transition times. For this the default
implementation uses special protected methods which are used by the real commands and are only responsible for the
actual value change logic. The benefit of this structure is that basic data validations and options checks are
already done and you can focus on the actual hardware interaction:
* [LevelControlServerLogic.moveToLevelLogic](LevelControlServerLogic.md#movetolevellogic) Logic to move the value to a defined level with a transition time
* [LevelControlServerLogic.moveLogic](LevelControlServerLogic.md#movelogic) Logic to move the value up or down with a defined rate
* [LevelControlServerLogic.stepLogic](LevelControlServerLogic.md#steplogic) Logic to step the value up or down with a defined step size and transition
* [LevelControlServerLogic.stopLogic](LevelControlServerLogic.md#stoplogic) Logic to stop any currently running transitions
* [LevelControlServerLogic.handleOnOffChange](LevelControlServerLogic.md#handleonoffchange) Logic to handle dimming to onLevel when device got turned on by connected OnOff cluster

If you add own implementation you can use:
* [LevelControlServerLogic.setLevel](LevelControlServerLogic.md#setlevel) to set the level attribute including automatic handling of the onoff dependency
* [LevelControlServerLogic.setRemainingTime](LevelControlServerLogic.md#setremainingtime) to set the remaining time attribute when Lighting feature is enabled

All overridable methods except setRemainingTime can be implemented sync or async by returning a Promise.

## Extends

- [`LevelControlLogicBase`](../-internal-/README.md#levelcontrollogicbase)

## Constructors

### new LevelControlServerLogic()

> **new LevelControlServerLogic**(`agent`, `backing`): [`LevelControlServerLogic`](LevelControlServerLogic.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`LevelControlServerLogic`](LevelControlServerLogic.md)

#### Inherited from

`LevelControlLogicBase.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`LevelControlLogicBase.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`LevelControlLogicBase.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`LevelControlLogicBase.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`LevelControlLogicBase.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`LevelControlLogicBase.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`LevelControlLogicBase.endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Cluster`](../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`LevelControlInterface`](../README.md#levelcontrolinterface)\>\>, `"options$Changing"` \| `"options$Changed"` \| `"currentLevel$Changing"` \| `"onLevel$Changing"` \| `"minLevel$Changing"` \| `"maxLevel$Changing"` \| `"onOffTransitionTime$Changing"` \| `"onTransitionTime$Changing"` \| `"offTransitionTime$Changing"` \| `"defaultMoveRate$Changing"` \| `"currentLevel$Changed"` \| `"onLevel$Changed"` \| `"minLevel$Changed"` \| `"maxLevel$Changed"` \| `"onOffTransitionTime$Changed"` \| `"onTransitionTime$Changed"` \| `"offTransitionTime$Changed"` \| `"defaultMoveRate$Changed"`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### currentLevel$Changing

> **currentLevel$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### onLevel$Changing

> **onLevel$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### options$Changing

> **options$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### remainingTime$Changing

> **remainingTime$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### startUpCurrentLevel$Changing

> **startUpCurrentLevel$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>\>

#### Type declaration

##### defaultMoveRate$Changing

> **defaultMoveRate$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### maxLevel$Changing

> **maxLevel$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### minLevel$Changing

> **minLevel$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### offTransitionTime$Changing

> **offTransitionTime$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### onOffTransitionTime$Changing

> **onOffTransitionTime$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### onTransitionTime$Changing

> **onTransitionTime$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

#### Type declaration

##### currentLevel$Changed

> **currentLevel$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### onLevel$Changed

> **onLevel$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### options$Changed

> **options$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### remainingTime$Changed

> **remainingTime$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### startUpCurrentLevel$Changed

> **startUpCurrentLevel$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>\>

#### Type declaration

##### defaultMoveRate$Changed

> **defaultMoveRate$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### maxLevel$Changed

> **maxLevel$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### minLevel$Changed

> **minLevel$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### offTransitionTime$Changed

> **offTransitionTime$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### onOffTransitionTime$Changed

> **onOffTransitionTime$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### onTransitionTime$Changed

> **onTransitionTime$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

#### Inherited from

`LevelControlLogicBase.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object` & [`FeaturesAsFlags`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featuresasflagsclustertflagst)\<[`Cluster`](../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), readonly [[`OnOff`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff), [`Lighting`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#lighting)]\>

Supported features as a flag object.

#### Type declaration

##### onOff

> `readonly` **onOff**: `true` = `true`

#### Inherited from

`LevelControlLogicBase.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### internal

> `protected` **internal**: [`Internal`](../namespaces/LevelControlServerLogic/classes/Internal.md)

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L67)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`LevelControlLogicBase.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> **state**: [`State`](../namespaces/LevelControlServerLogic/classes/State.md)

#### Overrides

`LevelControlLogicBase.state`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L68)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), readonly [[`OnOff`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff), [`Lighting`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#lighting)]\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`LevelControlInterface`](../README.md#levelcontrolinterface)\>, [`LevelControlInterface`](../README.md#levelcontrolinterface)\>\>

#### Inherited from

`LevelControlLogicBase.Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### Interface

> `static` `readonly` **Interface**: [`LevelControlInterface`](../README.md#levelcontrolinterface)

#### Inherited from

`LevelControlLogicBase.Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### cluster

> `static` `readonly` **cluster**: [`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), readonly [[`OnOff`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff), [`Lighting`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#lighting)]\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

`LevelControlLogicBase.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), readonly [[`OnOff`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#onoff), [`Lighting`](../../../../../cluster/export/namespaces/LevelControl/enumerations/Feature.md#lighting)]\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../cluster/export/namespaces/LevelControl/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`LevelControlInterface`](../README.md#levelcontrolinterface)\>, [`LevelControlInterface`](../README.md#levelcontrolinterface)\>\>

#### Inherited from

`LevelControlLogicBase.defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`LevelControlLogicBase.dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`LevelControlLogicBase.early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"levelControl"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`LevelControlLogicBase.id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`LevelControlLogicBase.name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`LevelControlLogicBase.schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`LevelControlLogicBase.supervisor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

***

### supports()

> `static` **supports**: (`other`) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`boolean`

#### Inherited from

`LevelControlLogicBase.supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Accessors

### currentLevel

> `get` **currentLevel**(): `number`

The current level value as number.
Throws an StatusResponse Error when null!

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L84)

***

### maxLevel

> `get` **maxLevel**(): `number`

Returns the maximum level, including feature specific fallback value handling.

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L76)

***

### minLevel

> `get` **minLevel**(): `number`

Returns the minimum level, including feature specific fallback value handling.

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L71)

## Methods

### #assertLevelValue()

> `private` **#assertLevelValue**(`level`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:450](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L450)

***

### #calculateEffectiveOptions()

> `private` **#calculateEffectiveOptions**(`optionsMask`, `optionsOverride`): [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `optionsMask` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |
| `optionsOverride` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:426](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L426)

***

### #getBootReason()

> `private` **#getBootReason**(): `undefined` \| [`BootReason`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/BootReason.md)

#### Returns

`undefined` \| [`BootReason`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/BootReason.md)

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:552](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L552)

***

### #initiateTransition()

> `private` **#initiateTransition**(`stepSize`, `withOnOff`, `targetLevel`?, `options`?): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepSize` | `number` |
| `withOnOff` | `boolean` |
| `targetLevel`? | `number` |
| `options`? | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:482](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L482)

***

### #optionsAllowExecution()

> `private` **#optionsAllowExecution**(`options`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:441](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L441)

***

### #stepIntervalTick()

> `private` **#stepIntervalTick**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:502](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L502)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

`LevelControlLogicBase.[asyncDispose]`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:559](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L559)

***

### asAdmin()

> **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

`LevelControlLogicBase.asAdmin`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L125)

***

### assertAttributeEnabled()

> **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

`LevelControlLogicBase.assertAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

***

### callback()

> `protected` **callback**\<`A`, `R`\>(`reactor`, `options`?): (...`args`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../../../../export/README.md#reactortr).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* `any`[] |
| `R` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`A`, `R`\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

`LevelControlLogicBase.callback`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### handleOnOffChange()

> `protected` **handleOnOffChange**(`onOff`): `void`

This is the default implementation of the required interaction with the OnOff cluster on the same endpoint when
the onOff feature is used.
This implementation just sets the current level to the onLevel value when the device is turned on. Other fading
up/down logic required by the MatterSpecification.v12.Cluster §1.6.4.1.1 needs to be implemented in a
specialized class if needed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `onOff` | `boolean` | The new onOff state |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:475](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L475)

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

#### Overrides

`LevelControlLogicBase.initialize`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L94)

***

### move()

> **move**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveLogic](LevelControlServerLogic.md#movelogic) method to set the level.
If you want to implement own logic just override [moveLogic](LevelControlServerLogic.md#movelogic) with is also used for [moveWithOnOff](LevelControlServerLogic.md#movewithonoff).
The logic is implemented as follows: When no move rate is provided and also no default move rate is set, the
server will move as fast as possible, so we set to min/max directly. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`LevelControlLogicBase.move`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L223)

***

### moveLogic()

> `protected` **moveLogic**(`moveMode`, `rate`, `withOnOff`, `options`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation of the move logic. When no move rate is provided and also no default move rate is set, the
server will move as fast as possible, so it is set to min/max directly. Else the step logic is applied and the
level is increased or decreased by the step size every second. The method uses [setLevel](LevelControlServerLogic.md#setlevel) to set the level
and handle the on/off state if the method is called by a *WithOnOff command.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../cluster/export/namespaces/LevelControl/enumerations/MoveMode.md) | Mode (Up/Down) of the move action |
| `rate` | `null` \| `number` | Rate of the move action, null if no rate is provided and the default should be used |
| `withOnOff` | `boolean` | true if the method is called by a *WithOnOff command |
| `options` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> | Options for the command |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:256](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L256)

***

### moveToLevel()

> **moveToLevel**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
This method ignores the transition time provided by the command or settings and just sets the level to the
requested value. After the options and value checks it uses the [moveToLevelLogic](LevelControlServerLogic.md#movetolevellogic) method to set the level.
If you want to implement own logic just override [moveToLevelLogic](LevelControlServerLogic.md#movetolevellogic) with is also used for [moveToLevelWithOnOff](LevelControlServerLogic.md#movetolevelwithonoff).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`LevelControlLogicBase.moveToLevel`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L152)

***

### moveToLevelLogic()

> `protected` **moveToLevelLogic**(`level`, `transitionTime`, `withOnOff`, `options`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation of the moveToLevel logic. When a transition time is specified the implementation uses a
step based logic to manage the move. It also checks if the level is within the min and max level range and sets
the level accordingly. The method uses [setLevel](LevelControlServerLogic.md#setlevel) to set the level and handle the on/off state if the method
is called by a *WithOnOff command.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | Level to set |
| `transitionTime` | `null` \| `number` | Transition time, ignored in this default implementation |
| `withOnOff` | `boolean` | true if the method is called by a *WithOnOff command |
| `options` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> | Options for the command |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L187)

***

### moveToLevelWithOnOff()

> **moveToLevelWithOnOff**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
This method ignores the transition time provided by the command or settings and just sets the level to the
requested value. After the options and value checks it uses the [moveToLevelLogic](LevelControlServerLogic.md#movetolevellogic) method to set the level.
If you want to implement own logic just override [moveToLevelLogic](LevelControlServerLogic.md#movetolevellogic) with is also used for [moveToLevel](LevelControlServerLogic.md#movetolevel).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`LevelControlLogicBase.moveToLevelWithOnOff`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L169)

***

### moveWithOnOff()

> **moveWithOnOff**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
This implementation uses the [moveLogic](LevelControlServerLogic.md#movelogic) method to set the level.
If you want to implement own logic just override [moveLogic](LevelControlServerLogic.md#movelogic) with is also used for [move](LevelControlServerLogic.md#move).
The logic is implemented as follows: When no move rate is provided and also no default move rate is set, the
server will move as fast as possible, so we set to min/max directly. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`LevelControlLogicBase.moveWithOnOff`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L240)

***

### reactTo()

> `protected` **reactTo**\<`O`\>(`observable`, `reactor`, `options`?): `void`

Install a [Reactor](../../../../export/README.md#reactortr).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `O` *extends* [`Observable`](../../../../../util/export/interfaces/Observable.md)\<`any`[], `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`Parameters`\<`O`\[`"emit"`\]\>, `ReturnType`\<`O`\[`"emit"`\]\>\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`void`

#### Inherited from

`LevelControlLogicBase.reactTo`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L212)

***

### requireAttributeEnabled()

> **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Inherited from

`LevelControlLogicBase.requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### setLevel()

> `protected` **setLevel**(`level`, `withOnOff`, `options`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation of the logic to set the level including the handing of the on/off state when one of the
*WithOnOff commands is called. This implementation checks if the level is at the minLevel and the device is on,
it will turn off the device. If the level is above the minLevel and the device is off, it will turn on the device.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | Level which is set by the command |
| `withOnOff` | `boolean` | true if the method is called by a *WithOnOff command |
| `options` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> | Options for the command |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:396](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L396)

***

### setRemainingTime()

> `protected` **setRemainingTime**(`remainingTime`): `void`

Method to set the remaining time attribute when Lighting feature is enabled.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `remainingTime` | `number` | Remaining time in 1/10th of a second |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:379](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L379)

***

### step()

> **step**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks it uses the [stepLogic](LevelControlServerLogic.md#steplogic) method to set the level.
If you want to implement own logic just override [stepLogic](LevelControlServerLogic.md#steplogic) with is also used for [stepWithOnOff](LevelControlServerLogic.md#stepwithonoff).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set to currentlevel +/- stepSize directly. Else the step logic is applied and the level is
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`LevelControlLogicBase.step`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:291](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L291)

***

### stepLogic()

> `protected` **stepLogic**(`stepMode`, `stepSize`, `transitionTime`, `withOnOff`, `options`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation of the step logic. When no transition time is provided, the server will move as fast as
possible, so it is set to min/max directly. Else the level is increased or decreased by the step size every
second. The method uses [setLevel](LevelControlServerLogic.md#setlevel) to set the level and handle the on/off state if the method is called
by a *WithOnOff command. The remaining time is updated with every step.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../cluster/export/namespaces/LevelControl/enumerations/StepMode.md) | Mode (Up/Down) of the step action |
| `stepSize` | `number` | Size of the step action |
| `transitionTime` | `null` \| `number` | Time of the step action in 10th of a second |
| `withOnOff` | `boolean` | true if the method is called by a *WithOnOff command |
| `options` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> | Options for the command |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:324](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L324)

***

### stepWithOnOff()

> **stepWithOnOff**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
This implementation uses the [stepLogic](LevelControlServerLogic.md#steplogic) method to set the level.
If you want to implement own logic just override [stepLogic](LevelControlServerLogic.md#steplogic) with is also used for [step](LevelControlServerLogic.md#step).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set to min/max directly. Else the step logic is applied and the level is increased or decreased
by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`LevelControlLogicBase.stepWithOnOff`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:307](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L307)

***

### stop()

> **stop**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`LevelControlLogicBase.stop`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:349](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L349)

***

### stopLogic()

> `protected` **stopLogic**(`_options`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation of the stop logic. This stops any level transitions currently appening and sets the
remaining time to 0.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_options` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:368](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L368)

***

### stopWithOnOff()

> **stopWithOnOff**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`LevelControlLogicBase.stopWithOnOff`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:358](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L358)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`LevelControlLogicBase.toString`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)

***

### alter()

> `static` **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `AlterationsT` *extends* [`Alterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#alterationsoriginalt)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`LevelControlLogicBase.alter`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

***

### enable()

> `static` **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `FlagsT` *extends* [`ElementFlags`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagsclustert)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`LevelControlLogicBase.enable`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

***

### for()

> `static` **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema`?): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `ClusterT` *extends* [`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema`? | [`Schema`](../../../../cluster/export/-internal-/README.md#schema) |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`LevelControlLogicBase.for`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

***

### set()

> `static` **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../../../../../cluster/export/namespaces/ClusterType/README.md#relaxtypesv)\<`InstanceType`\<`This`\[`"State"`\]\>\>\> |

#### Returns

`This`

#### Inherited from

`LevelControlLogicBase.set`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

***

### with()

> `static` **with**\<`This`, `FeaturesT`\>(`this`, ...`features`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `FeaturesT` *extends* [`FeatureSelection`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featureselectiont)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| ...`features` | `FeaturesT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`LevelControlLogicBase.with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
