[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/level-control/export](../../../README.md) / [LevelControlServerLogic](../README.md) / State

# Class: State

## Extends

- `State`

## Constructors

### new State()

> **new State**(): [`State`](State.md)

#### Returns

[`State`](State.md)

#### Inherited from

`LevelControlLogicBase.State.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

## Properties

### currentLevel

> **currentLevel**: `null` \| `number`

The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
dependent.

#### See

MatterSpecification.v11.Cluster § 1.6.5.1

#### Inherited from

`LevelControlLogicBase.State.currentLevel`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:365](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L365)

***

### defaultMoveRate?

> `optional` **defaultMoveRate**: `null` \| `number`

The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is
received with a null value Rate parameter.

#### See

MatterSpecification.v11.Cluster § 1.6.5.13

#### Inherited from

`LevelControlLogicBase.State.defaultMoveRate`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:446](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L446)

***

### managedTransitionTimeHandling

> **managedTransitionTimeHandling**: `boolean` = `false`

The default implementation always set the target level immediately and so ignores all transition times
requested or configured.
Set this to true to manage transition times by changing the level value step wise every second. This is in
most cases not the best way because hardware supporting levels usually have ways to specify the change rate
or target value and transition time.

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:587](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L587)

***

### maxLevel?

> `optional` **maxLevel**: `number`

The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned.

#### See

MatterSpecification.v11.Cluster § 1.6.5.4

#### Inherited from

`LevelControlLogicBase.State.maxLevel`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:379](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L379)

***

### minLevel?

> `optional` **minLevel**: `number`

The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned.

#### See

MatterSpecification.v11.Cluster § 1.6.5.3

#### Inherited from

`LevelControlLogicBase.State.minLevel`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:372](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L372)

***

### offTransitionTime?

> `optional` **offTransitionTime**: `null` \| `number`

The OffTransitionTime attribute represents the time taken to move the current level from the maximum
level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

#### See

MatterSpecification.v11.Cluster § 1.6.5.12

#### Inherited from

`LevelControlLogicBase.State.offTransitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:438](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L438)

***

### onLevel

> **onLevel**: `null` \| `number`

The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff
attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off
cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no
effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.

#### See

MatterSpecification.v11.Cluster § 1.6.5.10

#### Inherited from

`LevelControlLogicBase.State.onLevel`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:418](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L418)

***

### onOffTransitionTime?

> `optional` **onOffTransitionTime**: `number`

The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On
or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a
second.

The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note that
if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD NOT be
implemented.

#### See

MatterSpecification.v11.Cluster § 1.6.5.9

#### Inherited from

`LevelControlLogicBase.State.onOffTransitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:408](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L408)

***

### onTransitionTime?

> `optional` **onTransitionTime**: `null` \| `number`

The OnTransitionTime attribute represents the time taken to move the current level from the minimum
level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

#### See

MatterSpecification.v11.Cluster § 1.6.5.11

#### Inherited from

`LevelControlLogicBase.State.onTransitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:428](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L428)

***

### options

> **options**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The Options attribute is meant to be changed only during commissioning. The Options attribute is a
bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
the Options attribute shall first construct a temporary Options bitmap that is in effect during the
command processing. The temporary Options bitmap has the same format and meaning as the Options
attribute, but includes any bits that may be overridden by command fields.

Below is the format and description of the Options attribute and temporary Options bitmap and the effect
on dependent commands.

Table 19. Options Attribute

#### See

MatterSpecification.v11.Cluster § 1.6.5.8

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

#### Inherited from

`LevelControlLogicBase.State.options`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:395](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L395)

***

### remainingTime

> **remainingTime**: `number`

The RemainingTime attribute represents the time remaining until the current command is complete - it is
specified in 1/10ths of a second.

#### See

MatterSpecification.v11.Cluster § 1.6.5.2

#### Inherited from

`LevelControlLogicBase.State.remainingTime`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L237)

***

### startUpCurrentLevel

> **startUpCurrentLevel**: `null` \| `number`

The StartUpCurrentLevel attribute shall define the desired startup level for a device when it is
supplied with power and this level shall be reflected in the CurrentLevel attribute. The values of the
StartUpCurrentLevel attribute are listed below:

Table 20. Values of the StartUpCurrentLevel attribute

This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentLevel
attribute shall return to its value prior to the restart.

#### See

MatterSpecification.v11.Cluster § 1.6.5.14

#### Inherited from

`LevelControlLogicBase.State.startUpCurrentLevel`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L251)
