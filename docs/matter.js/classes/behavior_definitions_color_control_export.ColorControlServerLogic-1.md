[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / ColorControlServerLogic

# Class: ColorControlServerLogic

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).ColorControlServerLogic

This is the default server implementation of [ColorControlBehavior](../modules/behavior_definitions_color_control_export.md#colorcontrolbehavior).

This implementation includes all features of [ColorControl.Cluster](../modules/cluster_export.ColorControl.md#cluster) and implements all mandatory commands.
You should use [ColorControlServer.with](behavior_definitions_color_control_export.ColorControlServer.md#with) to specialize the class for the features your implementation supports.

This default implementation also handles together with the LevelControl cluster the currentLevel dependency as defined
by the Matter specification automatically.

This implementation ignores by default all transition times and sets the new color immediately. Alternatively, you can
set the `managedTransitionTimeHandling` state attribute to true to have matter.js manage transition times by
changing the level value step-wise every second. This might be an intermediate solution if you develop
independently of defined hardware.

If you develop for a specific hardware you should extend the [ColorControlServer](behavior_definitions_color_control_export.ColorControlServer.md) class and implement the
following methods to natively use device features to correctly support the transition times. For this the default
implementation uses special protected methods which are used by the real commands and are only responsible for the
actual value change logic. The benefit of this structure is that basic data validations and options checks are
already done and you can focus on the actual hardware interaction:
* [ColorControlServerLogic.moveToHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohuelogic) Logic to move the hue to a defined value in a defined time
* [ColorControlServerLogic.moveHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movehuelogic) Logic to move the hue by a defined rate/second
* [ColorControlServerLogic.stepHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stephuelogic) Logic to move the hue one defined step in a defined time
* [ColorControlServerLogic.moveToSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetosaturationlogic) Logic to move the saturation to a defined value in a defined time
* [ColorControlServerLogic.moveSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movesaturationlogic) Logic to move the saturation by a defined rate/second
* [ColorControlServerLogic.stepSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepsaturationlogic) Logic to move the saturation one defined step in a defined time
* [ColorControlServerLogic.moveToHueAndSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohueandsaturationlogic) Logic to move the hue and saturation to a defined value in a defined time
* [ColorControlServerLogic.moveToColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolorlogic) Logic to move the x/y color to a defined value in a defined time
* [ColorControlServerLogic.moveColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movecolorlogic) Logic to move the x/y color by a defined rate/second
* [ColorControlServerLogic.stepColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepcolorlogic) Logic to move the x/y color one defined step in a defined time
* [ColorControlServerLogic.moveToColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolortemperaturelogic) Logic to move the color temperature to a defined value in a defined time
* [ColorControlServerLogic.moveToEnhancedHueAndSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetoenhancedhueandsaturationlogic) Logic to move the enhanced hue and saturation to a defined value in a defined time
* [ColorControlServerLogic.moveColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movecolortemperaturelogic) Logic to move the color temperature by a defined rate/second
* [ColorControlServerLogic.stepColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepcolortemperaturelogic) Logic to move the color temperature one defined step in a defined time
* [ColorControlServerLogic.stopHueAndSaturationMovement](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stophueandsaturationmovement) Logic to stop any hue and saturation movements
* [ColorControlServerLogic.stopAllColorMovement](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopallcolormovement) Logic to stop any color movements
* [ColorControlServerLogic.startColorLoopLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#startcolorlooplogic) Logic to start the color loop (looping enhanced hue endlessly)
* [ColorControlServerLogic.stopColorLoopLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopcolorlooplogic) Logic to stop the color loop
* [ColorControlServerLogic.stopMoveStepLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopmovesteplogic) Logic to stop all movements beside color loops
* [ColorControlServerLogic.switchColorMode](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#switchcolormode) Logic to switch the color mode and to set the current attributes of the new mode

All overridable methods can be implemented sync or async by returning a Promise.

For own implementations you can use:
* [ColorControlServerLogic#setColorMode](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#setcolormode) to set the color mode
* [ColorControlServerLogic#setEnhancedColorMode](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#setenhancedcolormode) to set the enhanced color mode

The default implementation of [ColorControlServerLogic.switchColorMode](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#switchcolormode) tries to convert the color values
between the different modi. When switching from color temperature mode to any other mode the value can be converted
when the color temperature was between 1000K and 20.000K. For other values no conversion takes place.

The method [ColorControlServerLogic.syncColorTemperatureWithLevelLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#synccolortemperaturewithlevellogic) is handling the sync between the
LevelControl and ColorControl cluster when the color temperature is used.

Additionally there are some convenience properties to access the current attribute values for all relevant color
attributes (x,y, hue, saturation, mireds/kelvin, colorTemperatur, ...) in their CIE value format instead the matter
data ranges.

## Hierarchy

- [`ColorControlServerBase`](../modules/behavior_definitions_color_control_export._internal_.md#colorcontrolserverbase)

  ↳ **`ColorControlServerLogic`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#constructor)

### Properties

- [#agent](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##agent)
- [[reference]](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#[reference])
- [agent](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#agent)
- [cluster](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#cluster)
- [context](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#context)
- [endpoint](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#endpoint)
- [events](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#events)
- [features](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#features)
- [internal](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#internal)
- [session](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#session)
- [state](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#state)
- [Events](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#events-1)
- [Interface](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#interface)
- [cluster](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#cluster-1)
- [defaults](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#defaults)
- [dependencies](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#dependencies)
- [early](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#early)
- [id](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#id)
- [name](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#name)
- [schema](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#schema)
- [supervisor](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#supervisor)
- [supports](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#supports)

### Accessors

- [colorPointBx](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#colorpointbx)
- [colorPointGx](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#colorpointgx)
- [colorPointGy](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#colorpointgy)
- [colorPointRx](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#colorpointrx)
- [colorPointRy](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#colorpointry)
- [enhancedHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#enhancedhue)
- [hue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#hue)
- [kelvin](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#kelvin)
- [maximumColorTemperatureMireds](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#maximumcolortemperaturemireds)
- [minimumColorTemperatureMireds](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#minimumcolortemperaturemireds)
- [mireds](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#mireds)
- [saturation](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#saturation)
- [whitePointX](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#whitepointx)
- [whitePointY](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#whitepointy)
- [x](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#x)
- [y](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#y)

### Methods

- [#assertRate](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##assertrate)
- [#calculateEffectiveOptions](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##calculateeffectiveoptions)
- [#colorTemperatureStepIntervalTick](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##colortemperaturestepintervaltick)
- [#getBootReason](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##getbootreason)
- [#getHueDistanceByDirection](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##gethuedistancebydirection)
- [#hueStepIntervalTick](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##huestepintervaltick)
- [#initializeManagedTransitionTimers](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##initializemanagedtransitiontimers)
- [#initiateTransition](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##initiatetransition)
- [#optionsAllowExecution](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##optionsallowexecution)
- [#returnAsOptionalXyValue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##returnasoptionalxyvalue)
- [#returnAsXyValue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##returnasxyvalue)
- [#saturationStepIntervalTick](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##saturationstepintervaltick)
- [#setFromXyValue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##setfromxyvalue)
- [#setRemainingTime](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##setremainingtime)
- [#stepIntervalTick](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##stepintervaltick)
- [#stopColorLoop](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##stopcolorloop)
- [#xStepIntervalTick](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##xstepintervaltick)
- [#yStepIntervalTick](behavior_definitions_color_control_export.ColorControlServerLogic-1.md##ystepintervaltick)
- [[asyncDispose]](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#assertattributeenabled)
- [callback](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#callback)
- [colorLoopSet](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#colorloopset)
- [enhancedMoveHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#enhancedmovehue)
- [enhancedMoveToHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#enhancedmovetohue)
- [enhancedMoveToHueAndSaturation](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#enhancedmovetohueandsaturation)
- [enhancedStepHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#enhancedstephue)
- [initialize](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#initialize)
- [moveColor](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movecolor)
- [moveColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movecolorlogic)
- [moveColorTemperature](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movecolortemperature)
- [moveColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movecolortemperaturelogic)
- [moveHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movehue)
- [moveHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movehuelogic)
- [moveSaturation](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movesaturation)
- [moveSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movesaturationlogic)
- [moveToColor](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolor)
- [moveToColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolorlogic)
- [moveToColorTemperature](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolortemperature)
- [moveToColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolortemperaturelogic)
- [moveToEnhancedHueAndSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetoenhancedhueandsaturationlogic)
- [moveToHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohue)
- [moveToHueAndSaturation](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohueandsaturation)
- [moveToHueAndSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohueandsaturationlogic)
- [moveToHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohuelogic)
- [moveToSaturation](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetosaturation)
- [moveToSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetosaturationlogic)
- [reactTo](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#reactto)
- [requireAttributeEnabled](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#requireattributeenabled)
- [setColorMode](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#setcolormode)
- [setEnhancedColorMode](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#setenhancedcolormode)
- [startColorLoopLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#startcolorlooplogic)
- [stepColor](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepcolor)
- [stepColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepcolorlogic)
- [stepColorTemperature](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepcolortemperature)
- [stepColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepcolortemperaturelogic)
- [stepHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stephue)
- [stepHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stephuelogic)
- [stepSaturation](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepsaturation)
- [stepSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepsaturationlogic)
- [stopAllColorMovement](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopallcolormovement)
- [stopColorLoopLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopcolorlooplogic)
- [stopHueAndSaturationMovement](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stophueandsaturationmovement)
- [stopMoveStep](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopmovestep)
- [stopMoveStepLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopmovesteplogic)
- [switchColorMode](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#switchcolormode)
- [syncColorTemperatureWithLevel](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#synccolortemperaturewithlevel)
- [syncColorTemperatureWithLevelLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#synccolortemperaturewithlevellogic)
- [toString](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#tostring)
- [alter](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#alter)
- [enable](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#enable)
- [for](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#for)
- [set](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#set)
- [with](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#with)

## Constructors

### constructor

• **new ColorControlServerLogic**(`agent`, `backing`): [`ColorControlServerLogic`](behavior_definitions_color_control_export.ColorControlServerLogic-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`ColorControlServerLogic`](behavior_definitions_color_control_export.ColorControlServerLogic-1.md)

#### Inherited from

ColorControlServerBase.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

ColorControlServerBase.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

ColorControlServerBase.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

ColorControlServerBase.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

ColorControlServerBase.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

ColorControlServerBase.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

ColorControlServerBase.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ColorControlInterface`](../modules/behavior_definitions_color_control_export.md#colorcontrolinterface)\>\>, ``"colorMode$Changing"`` \| ``"options$Changing"`` \| ``"numberOfPrimaries$Changing"`` \| ``"enhancedColorMode$Changing"`` \| ``"colorCapabilities$Changing"`` \| ``"remainingTime$Changing"`` \| ``"driftCompensation$Changing"`` \| ``"compensationText$Changing"`` \| ``"primary1X$Changing"`` \| ``"primary1Y$Changing"`` \| ``"primary1Intensity$Changing"`` \| ``"primary2X$Changing"`` \| ``"primary2Y$Changing"`` \| ``"primary2Intensity$Changing"`` \| ``"primary3X$Changing"`` \| ``"primary3Y$Changing"`` \| ``"primary3Intensity$Changing"`` \| ``"primary4X$Changing"`` \| ``"primary4Y$Changing"`` \| ``"primary4Intensity$Changing"`` \| ``"primary5X$Changing"`` \| ``"primary5Y$Changing"`` \| ``"primary5Intensity$Changing"`` \| ``"primary6X$Changing"`` \| ``"primary6Y$Changing"`` \| ``"primary6Intensity$Changing"`` \| ``"whitePointX$Changing"`` \| ``"whitePointY$Changing"`` \| ``"colorPointRx$Changing"`` \| ``"colorPointRy$Changing"`` \| ``"colorPointRIntensity$Changing"`` \| ``"colorPointGx$Changing"`` \| ``"colorPointGy$Changing"`` \| ``"colorPointGIntensity$Changing"`` \| ``"colorPointBx$Changing"`` \| ``"colorPointBy$Changing"`` \| ``"colorPointBIntensity$Changing"`` \| ``"colorMode$Changed"`` \| ``"options$Changed"`` \| ``"numberOfPrimaries$Changed"`` \| ``"enhancedColorMode$Changed"`` \| ``"colorCapabilities$Changed"`` \| ``"remainingTime$Changed"`` \| ``"driftCompensation$Changed"`` \| ``"compensationText$Changed"`` \| ``"primary1X$Changed"`` \| ``"primary1Y$Changed"`` \| ``"primary1Intensity$Changed"`` \| ``"primary2X$Changed"`` \| ``"primary2Y$Changed"`` \| ``"primary2Intensity$Changed"`` \| ``"primary3X$Changed"`` \| ``"primary3Y$Changed"`` \| ``"primary3Intensity$Changed"`` \| ``"primary4X$Changed"`` \| ``"primary4Y$Changed"`` \| ``"primary4Intensity$Changed"`` \| ``"primary5X$Changed"`` \| ``"primary5Y$Changed"`` \| ``"primary5Intensity$Changed"`` \| ``"primary6X$Changed"`` \| ``"primary6Y$Changed"`` \| ``"primary6Intensity$Changed"`` \| ``"whitePointX$Changed"`` \| ``"whitePointY$Changed"`` \| ``"colorPointRx$Changed"`` \| ``"colorPointRy$Changed"`` \| ``"colorPointRIntensity$Changed"`` \| ``"colorPointGx$Changed"`` \| ``"colorPointGy$Changed"`` \| ``"colorPointGIntensity$Changed"`` \| ``"colorPointBx$Changed"`` \| ``"colorPointBy$Changed"`` \| ``"colorPointBIntensity$Changed"``\> & \{ `colorCapabilities$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `colorLoopActive$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopActive`](../enums/cluster_export.ColorControl.ColorLoopActive.md), `any`\>\> ; `colorLoopDirection$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopDirection`](../enums/cluster_export.ColorControl.ColorLoopDirection.md), `any`\>\> ; `colorLoopStartEnhancedHue$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `colorLoopStoredEnhancedHue$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `colorLoopTime$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `colorMode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\>\> ; `colorTempPhysicalMaxMireds$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `colorTempPhysicalMinMireds$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `colorTemperatureMireds$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `currentHue$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `currentSaturation$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `currentX$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `currentY$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `enhancedColorMode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\>\> ; `enhancedCurrentHue$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `numberOfPrimaries$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `colorPointBIntensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointBx$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointBy$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGIntensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointGx$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGy$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRIntensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointRx$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRy$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `compensationText$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\>\> ; `coupleColorTempToLevelMinMireds$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `driftCompensation$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\>\> ; `primary1Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary1X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary1Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary2X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary3X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary4X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary5X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary6X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `remainingTime$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `startUpColorTemperatureMireds$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `whitePointX$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `whitePointY$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\>  } & \{ `colorCapabilities$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `colorLoopActive$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopActive`](../enums/cluster_export.ColorControl.ColorLoopActive.md), `any`\>\> ; `colorLoopDirection$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorLoopDirection`](../enums/cluster_export.ColorControl.ColorLoopDirection.md), `any`\>\> ; `colorLoopStartEnhancedHue$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `colorLoopStoredEnhancedHue$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `colorLoopTime$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `colorMode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\>\> ; `colorTempPhysicalMaxMireds$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `colorTempPhysicalMinMireds$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `colorTemperatureMireds$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `currentHue$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `currentSaturation$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `currentX$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `currentY$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `enhancedColorMode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\>\> ; `enhancedCurrentHue$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `numberOfPrimaries$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `colorPointBIntensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointBx$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointBy$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGIntensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointGx$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGy$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRIntensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointRx$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRy$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `compensationText$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\>\> ; `coupleColorTempToLevelMinMireds$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `driftCompensation$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\>\> ; `primary1Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary1X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary1Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary2X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary3X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary4X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary5X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary6X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `remainingTime$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `startUpColorTemperatureMireds$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `whitePointX$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `whitePointY$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

ColorControlServerBase.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: [`FeaturesAsFlags`](../modules/cluster_export.ClusterComposer.md#featuresasflags)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [[`HueSaturation`](../enums/cluster_export.ColorControl.Feature.md#huesaturation), [`EnhancedHue`](../enums/cluster_export.ColorControl.Feature.md#enhancedhue), [`ColorLoop`](../enums/cluster_export.ColorControl.Feature.md#colorloop), [`Xy`](../enums/cluster_export.ColorControl.Feature.md#xy), [`ColorTemperature`](../enums/cluster_export.ColorControl.Feature.md#colortemperature)]\>

Supported features as a flag object.

#### Inherited from

ColorControlServerBase.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### internal

• `Protected` **internal**: [`Internal`](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:137](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L137)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

ColorControlServerBase.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• **state**: [`State`](behavior_definitions_color_control_export.ColorControlServerLogic.State.md)

#### Overrides

ColorControlServerBase.state

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:138](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L138)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [[`HueSaturation`](../enums/cluster_export.ColorControl.Feature.md#huesaturation), [`EnhancedHue`](../enums/cluster_export.ColorControl.Feature.md#enhancedhue), [`ColorLoop`](../enums/cluster_export.ColorControl.Feature.md#colorloop), [`Xy`](../enums/cluster_export.ColorControl.Feature.md#xy), [`ColorTemperature`](../enums/cluster_export.ColorControl.Feature.md#colortemperature)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ColorControlInterface`](../modules/behavior_definitions_color_control_export.md#colorcontrolinterface)\>, [`ColorControlInterface`](../modules/behavior_definitions_color_control_export.md#colorcontrolinterface)\>\>

#### Inherited from

ColorControlServerBase.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`ColorControlInterface`](../modules/behavior_definitions_color_control_export.md#colorcontrolinterface)

#### Inherited from

ColorControlServerBase.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [[`HueSaturation`](../enums/cluster_export.ColorControl.Feature.md#huesaturation), [`EnhancedHue`](../enums/cluster_export.ColorControl.Feature.md#enhancedhue), [`ColorLoop`](../enums/cluster_export.ColorControl.Feature.md#colorloop), [`Xy`](../enums/cluster_export.ColorControl.Feature.md#xy), [`ColorTemperature`](../enums/cluster_export.ColorControl.Feature.md#colortemperature)]\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

ColorControlServerBase.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [[`HueSaturation`](../enums/cluster_export.ColorControl.Feature.md#huesaturation), [`EnhancedHue`](../enums/cluster_export.ColorControl.Feature.md#enhancedhue), [`ColorLoop`](../enums/cluster_export.ColorControl.Feature.md#colorloop), [`Xy`](../enums/cluster_export.ColorControl.Feature.md#xy), [`ColorTemperature`](../enums/cluster_export.ColorControl.Feature.md#colortemperature)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ColorControlInterface`](../modules/behavior_definitions_color_control_export.md#colorcontrolinterface)\>, [`ColorControlInterface`](../modules/behavior_definitions_color_control_export.md#colorcontrolinterface)\>\>

#### Inherited from

ColorControlServerBase.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

ColorControlServerBase.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

ColorControlServerBase.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"colorControl"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

ColorControlServerBase.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

ColorControlServerBase.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

ColorControlServerBase.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

ColorControlServerBase.supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

___

### supports

▪ `Static` **supports**: (`other`: [`Type`](../interfaces/behavior_export.Behavior.Type.md)) => `boolean`

#### Type declaration

▸ (`other`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

##### Returns

`boolean`

#### Inherited from

ColorControlServerBase.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Accessors

### colorPointBx

• `get` **colorPointBx**(): `undefined` \| `number`

Returns the current colorPoint Bx value as decimal number according to CIE in the range 0..1.

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:338](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L338)

• `set` **colorPointBx**(`value`): `void`

Sets the current colorPoint Bx value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:346](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L346)

___

### colorPointGx

• `get` **colorPointGx**(): `undefined` \| `number`

Returns the current colorPoint Gx value as decimal number according to CIE in the range 0..1.

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:312](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L312)

• `set` **colorPointGx**(`value`): `void`

Sets the current colorPoint Gx value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:320](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L320)

___

### colorPointGy

• `get` **colorPointGy**(): `undefined` \| `number`

Returns the current colorPoint Gy value as decimal number according to CIE in the range 0..1.

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:325](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L325)

• `set` **colorPointGy**(`value`): `void`

Sets the current colorPoint Gy value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:333](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L333)

___

### colorPointRx

• `get` **colorPointRx**(): `undefined` \| `number`

Returns the current colorPoint Rx value as decimal number according to CIE in the range 0..1.

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:286](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L286)

• `set` **colorPointRx**(`value`): `void`

Sets the current colorPoint Rx value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:294](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L294)

___

### colorPointRy

• `get` **colorPointRy**(): `undefined` \| `number`

Returns the current colorPoint Ry value as decimal number according to CIE in the range 0..1.

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:299](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L299)

• `set` **colorPointRy**(`value`): `void`

Sets the current colorPoint Ry value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:307](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L307)

___

### enhancedHue

• `get` **enhancedHue**(): `number`

Returns the current enhanced hue value as decimal number in the range 0..0xFFFF.

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:186](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L186)

• `set` **enhancedHue**(`value`): `void`

Sets the current enhanced hue value as decimal number in the range 0..0xFFFF and converts into Matter number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:193](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L193)

___

### hue

• `get` **hue**(): `number`

Returns the current hue value as decimal number in the range 0..360.

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:174](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L174)

• `set` **hue**(`value`): `void`

Sets the current hue value as decimal number in the range 0..360 and converts into Matter number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:181](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L181)

___

### kelvin

• `get` **kelvin**(): `number`

Returns the current color temperature value in Kelvin (from internal Mireds).

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:230](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L230)

• `set` **kelvin**(`value`): `void`

Sets the current color temperature value in Kelvin and updates the internal mireds value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:235](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L235)

___

### maximumColorTemperatureMireds

• `get` **maximumColorTemperatureMireds**(): `number`

Returns the maximum color temperature value in Mireds (0..0xFFFF). This automatically handled the case that no
physical maximum value is defined.

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:253](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L253)

___

### minimumColorTemperatureMireds

• `get` **minimumColorTemperatureMireds**(): `number`

Returns the minimum color temperature value in Mireds (0..0xFFFF). This automatically handled the case that no
physical minimum value is defined.

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:243](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L243)

___

### mireds

• `get` **mireds**(): `number`

Returns the current color temperature value in Mireds (0..0xFFFF).

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:214](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L214)

• `set` **mireds**(`value`): `void`

Sets the current color temperature value in Mireds (0..0xFFFF) and converts into Matter number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:221](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L221)

___

### saturation

• `get` **saturation**(): `number`

Returns the current saturation value as decimal number in the range 0..1.

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:198](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L198)

• `set` **saturation**(`value`): `void`

Sets the current saturation value as decimal number in the range 0..1 and converts into Matter number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:205](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L205)

___

### whitePointX

• `get` **whitePointX**(): `undefined` \| `number`

Returns the current whitePoint X value as decimal number according to CIE in the range 0..1.

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:260](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L260)

• `set` **whitePointX**(`value`): `void`

Sets the current whitePoint X value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:268](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L268)

___

### whitePointY

• `get` **whitePointY**(): `undefined` \| `number`

Returns the current whitePoint Y value as decimal number according to CIE in the range 0..1.

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:273](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L273)

• `set` **whitePointY**(`value`): `void`

Sets the current whitePoint Y value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:281](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L281)

___

### x

• `get` **x**(): `number`

Returns the current X value as decimal number according to CIE in the range 0..1.

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:146](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L146)

• `set` **x**(`value`): `void`

Sets the current X value as decimal number according to CIE in the range 0..1 and converts into Matter number
range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:154](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L154)

___

### y

• `get` **y**(): `number`

Returns the current Y value as decimal number according to CIE in the range 0..1.

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:159](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L159)

• `set` **y**(`value`): `void`

Sets the current Y value as decimal number according to CIE in the range 0..1 and converts into Matter number
range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:167](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L167)

## Methods

### #assertRate

▸ **#assertRate**(`mode`, `rate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md) |
| `rate` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1654](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1654)

___

### #calculateEffectiveOptions

▸ **#calculateEffectiveOptions**(`optionsMask`, `optionsOverride`): [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionsMask` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |
| `optionsOverride` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1733](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1733)

___

### #colorTemperatureStepIntervalTick

▸ **#colorTemperatureStepIntervalTick**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1867](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1867)

___

### #getBootReason

▸ **#getBootReason**(): `undefined` \| [`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)

#### Returns

`undefined` \| [`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1726](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1726)

___

### #getHueDistanceByDirection

▸ **#getHueDistanceByDirection**(`currentHue`, `targetHue`, `direction`, `max`): `number`

Calculate the hue distance depending on the direction and the current and target hue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentHue` | `number` |
| `targetHue` | `number` |
| `direction` | [`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md) |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1661](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1661)

___

### #hueStepIntervalTick

▸ **#hueStepIntervalTick**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1848](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1848)

___

### #initializeManagedTransitionTimers

▸ **#initializeManagedTransitionTimers**(): `void`

Initialize the managed transition timers..

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1695](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1695)

___

### #initiateTransition

▸ **#initiateTransition**(`transitionType`, `changeRate`, `minValue`, `maxValue`, `targetValue?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transitionType` | [`ManagedTransitionType`](../modules/behavior_definitions_color_control_export._internal_.md#managedtransitiontype) |
| `changeRate` | `number` |
| `minValue` | `number` |
| `maxValue` | `number` |
| `targetValue?` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1751](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1751)

___

### #optionsAllowExecution

▸ **#optionsAllowExecution**(`optionsMask`, `optionsOverride`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionsMask` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |
| `optionsOverride` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1743](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1743)

___

### #returnAsOptionalXyValue

▸ **#returnAsOptionalXyValue**(`value`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2061](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2061)

___

### #returnAsXyValue

▸ **#returnAsXyValue**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2057](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2057)

___

### #saturationStepIntervalTick

▸ **#saturationStepIntervalTick**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1858](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1858)

___

### #setFromXyValue

▸ **#setFromXyValue**(`fieldName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `value` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2068](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2068)

___

### #setRemainingTime

▸ **#setRemainingTime**(): `void`

This method is used to set the remaining Time by checking the current transition timers depending on the color mode.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1563](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1563)

___

### #stepIntervalTick

▸ **#stepIntervalTick**(`transitionType`, `transitionTimer`, `transitionData`, `currentValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transitionType` | [`ManagedTransitionType`](../modules/behavior_definitions_color_control_export._internal_.md#managedtransitiontype) |
| `transitionTimer` | `undefined` \| [`Timer`](../interfaces/time_export.Timer.md) |
| `transitionData` | `undefined` \| [`TransitionData`](../modules/behavior_definitions_color_control_export._internal_.md#transitiondata) |
| `currentValue` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1894](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1894)

___

### #stopColorLoop

▸ **#stopColorLoop**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Internal method to step the color loop and sync the internal ColorLoopActive state and restore the stored
enhanced hue. It uses [stopColorLoopLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopcolorlooplogic) to execute the stop.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1192](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1192)

___

### #xStepIntervalTick

▸ **#xStepIntervalTick**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1876](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1876)

___

### #yStepIntervalTick

▸ **#yStepIntervalTick**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1885](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1885)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

ColorControlServerBase.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2079](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2079)

___

### asAdmin

▸ **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

ColorControlServerBase.asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### assertAttributeEnabled

▸ **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

ColorControlServerBase.assertAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### callback

▸ **callback**\<`A`, `R`\>(`reactor`, `options?`): (...`args`: `A`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../modules/behavior_export.md#reactor).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`A`, `R`\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`fn`

▸ (`...args`): `undefined` \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

ColorControlServerBase.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### colorLoopSet

▸ **colorLoopSet**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks and potentially switching the color mode it uses the [stopColorLoopLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopcolorlooplogic)
method to stop color loops or [startColorLoopLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#startcolorlooplogic) to start a color loop at a defined enhanced hue value.
If you want to implement own logic just override these methods.
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the color temperature is
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Action`](../enums/cluster_export.ColorControl.Action.md)\> ; `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `startHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `time`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateFlags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `reserved`: [`BitField`](../modules/schema_export.md#bitfield) ; `updateAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `updateDirection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `updateStartHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `updateTime`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.colorLoopSet

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1140](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1140)

___

### enhancedMoveHue

▸ **enhancedMoveHue**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movehuelogic) method to set the enhanced hue.
If you want to implement own logic just override [moveHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movehuelogic) which is used together with
[moveHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movehue).
The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, but
increase only one rate directly if the managed transition is not used. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.enhancedMoveHue

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1039](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1039)

___

### enhancedMoveToHue

▸ **enhancedMoveToHue**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveToHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohuelogic) method to set the enhanced hue.
If you want to implement own logic just override [moveToHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohuelogic) which is used together with
[moveToHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohue).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the color temperature is
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.enhancedMoveToHue

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1014](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1014)

___

### enhancedMoveToHueAndSaturation

▸ **enhancedMoveToHueAndSaturation**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
After the options checks it uses the [moveToEnhancedHueAndSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetoenhancedhueandsaturationlogic) method to set the enhanced hue
and saturation.
If you want to implement own logic just override [moveToEnhancedHueAndSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetoenhancedhueandsaturationlogic).
The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, so
we set to min/max directly if the managed transition is not used. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enhancedHue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Overrides

ColorControlServerBase.enhancedMoveToHueAndSaturation

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1090](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1090)

___

### enhancedStepHue

▸ **enhancedStepHue**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks it uses the [stepHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stephuelogic) method to set the enhanced hue.
If you want to implement own logic just override [stepHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stephuelogic) which is used together with
[stepHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stephue).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the hue is increased or
decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.enhancedStepHue

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1065](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1065)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Overrides

ColorControlServerBase.initialize

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:350](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L350)

___

### moveColor

▸ **moveColor**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
After the options checks it uses the [moveColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movecolorlogic) method to set the x and y value.
If you want to implement own logic just override [moveColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movecolorlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target values directly. Else the step logic is applied and the x and y is
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rateX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `rateY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Overrides

ColorControlServerBase.moveColor

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:845](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L845)

___

### moveColorLogic

▸ **moveColorLogic**(`rateX`, `rateY`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the moveColor logic.
If the managed transition time handling is disabled the method directly sets the new x and y values.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rateX` | `number` | The rate to move the x value up or down (positive values mean up, negative down) |
| `rateY` | `number` | The rate to move the y value up or down (positive values mean up, negative down) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:883](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L883)

___

### moveColorTemperature

▸ **moveColorTemperature**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
After the options checks and potentially changing the color mode it uses the [moveColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movecolortemperaturelogic)
method to set the color temperature.
If the current movement should be stopped [stopHueAndSaturationMovement](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stophueandsaturationmovement) is used.
If you want to implement own logic just override [moveColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movecolortemperaturelogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the color temperature is
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Overrides

ColorControlServerBase.moveColorTemperature

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1269](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1269)

___

### moveColorTemperatureLogic

▸ **moveColorTemperatureLogic**(`moveMode`, `rate`, `colorTemperatureMinimumMireds`, `colorTemperatureMaximumMireds`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the moveColorTemperature logic.
If the managed transition time handling is disabled the method directly sets the min or max color temperature value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md) |
| `rate` | `number` |
| `colorTemperatureMinimumMireds` | `number` |
| `colorTemperatureMaximumMireds` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1324](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1324)

___

### moveHue

▸ **moveHue**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movehuelogic) method to set the hue.
If you want to implement own logic just override [moveHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movehuelogic) with is also used for [enhancedMoveHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#enhancedmovehue).
If a currently running movement should be stopped [stopHueAndSaturationMovement](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stophueandsaturationmovement) is used which can also be
overridden.
The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, but
increase only one rate directly if the managed transition is not used. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.moveHue

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:449](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L449)

___

### moveHueLogic

▸ **moveHueLogic**(`moveMode`, `rate`, `isEnhancedHue?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the moveHue logic. The method handled hue and enhanced-Hue changes depending on the
last parameter.
If the managed transition time handling is disabled the method directly increases the hue value by one rate step.
So without managed transition not too much happens.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `moveMode` | [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md) | `undefined` | Move Mode to move the hue up or down (Stop should not be provided in here because already handled) |
| `rate` | `number` | `undefined` | The rate to move the hue up or down. 0 should never be provided her because handled here. |
| `isEnhancedHue` | `boolean` | `false` | If true the enhanced hue is handled, otherwise the normal hue |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:475](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L475)

___

### moveSaturation

▸ **moveSaturation**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movesaturationlogic) method to set the hue.
If you want to implement own logic just override [moveSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movesaturationlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set to min/max directly. Else the step logic is applied and the saturation is increased or
decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.moveSaturation

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:634](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L634)

___

### moveSaturationLogic

▸ **moveSaturationLogic**(`moveMode`, `rate`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the moveSaturation logic.
If the managed transition time handling is disabled the method directly sets the new saturation value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moveMode` | [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md) | Move Mode to move the saturation up or down |
| `rate` | `number` | The rate to move the saturation up or down |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:657](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L657)

___

### moveToColor

▸ **moveToColor**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveToColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolorlogic) method to set the x and y value.
If you want to implement own logic just override [moveToColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolorlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target values directly. Else the step logic is applied and the x and y is
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`MoveToColorRequest`](../interfaces/cluster_export.ColorControl.MoveToColorRequest.md) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.moveToColor

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:792](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L792)

___

### moveToColorLogic

▸ **moveToColorLogic**(`targetX`, `targetY`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the moveToColor logic.
If the managed transition time handling is disabled the method directly sets the new x and y values.
Otherwise the method initiates a transition with the given rate.
This method internally uses [moveToColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolorlogic) to handle the x and y changes, so if you have implemented it
already you might not need to override this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetX` | `number` | The target x value to move to |
| `targetY` | `number` | The target y value to move to |
| `transitionTime` | `number` | The time in seconds to move to the target x and y. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:819](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L819)

___

### moveToColorTemperature

▸ **moveToColorTemperature**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
After the options checks it uses the [moveToColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolortemperaturelogic) method to set the color temperature.
If you want to implement own logic just override [moveToColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolortemperaturelogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the color temperature is
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Overrides

ColorControlServerBase.moveToColorTemperature

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:963](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L963)

___

### moveToColorTemperatureLogic

▸ **moveToColorTemperatureLogic**(`targetMireds`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the moveToColorTemperature logic.
If the managed transition time handling is disabled the method directly sets the new color temperature value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetMireds` | `number` | The target color temperature value to move to |
| `transitionTime` | `number` | The time in seconds to move to the target color temperature. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:986](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L986)

___

### moveToEnhancedHueAndSaturationLogic

▸ **moveToEnhancedHueAndSaturationLogic**(`targetEnhancedHue`, `targetSaturation`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
After the options checks it uses the [moveToHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohuelogic) and [moveToSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetosaturationlogic) methods to set the
hue and saturation.
Both methods are also used for other commands, so it maybe is not needed to override this method.
The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, so
we set to min/max directly if the managed transition is not used. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetEnhancedHue` | `number` |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1115](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1115)

___

### moveToHue

▸ **moveToHue**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
This method ignores the transition time provided by the command and just sets the hue value to the
requested value. After the options and value checks and the potential color mode switch it uses the
[moveToHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohuelogic) method to set the hue. If you want to implement own logic just override
[moveToHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohuelogic) with is also used for [enhancedMoveToHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#enhancedmovetohue), [moveToHueAndSaturation](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohueandsaturation) and
[enhancedMoveToHueAndSaturation](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#enhancedmovetohueandsaturation).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `direction`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)\> ; `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.moveToHue

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:388](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L388)

___

### moveToHueAndSaturation

▸ **moveToHueAndSaturation**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks and potentially switching the color mode it uses the [moveToHueAndSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohueandsaturationlogic)
method to set the hue.
If you want to implement own logic just override [moveToHueAndSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohueandsaturationlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target values directly. Else the step logic is applied and the hue and saturation is
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.moveToHueAndSaturation

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:746](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L746)

___

### moveToHueAndSaturationLogic

▸ **moveToHueAndSaturationLogic**(`targetHue`, `targetSaturation`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the moveToHueAndSaturation logic.
If the managed transition time handling is disabled the method directly sets the new hue and saturation values.
Otherwise the method initiates a transition with the given rate.
This method internally uses [moveToHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohuelogic) and [moveToSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetosaturationlogic) to handle the hue and
saturation changes, so if you have implemented them already you might not need to override this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetHue` | `number` | The target hue value to move to |
| `targetSaturation` | `number` | The target saturation value to move to |
| `transitionTime` | `number` | The time in seconds to move to the target hue and saturation. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:773](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L773)

___

### moveToHueLogic

▸ **moveToHueLogic**(`targetHue`, `direction`, `transitionTime`, `isEnhancedHue?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the moveToHue logic. When a transition time is specified the implementation uses a
step based to manage the move. The method handled hue and enhanced-Hue changes depending on the last parameter.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `targetHue` | `number` | `undefined` | The target hue value to move to (in range of the matter hue or enhanced hue ranges) |
| `direction` | [`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md) | `undefined` | The direction to move to the target hue |
| `transitionTime` | `number` | `undefined` | The time in seconds to move to the target hue. 0 means "as fast as possible" |
| `isEnhancedHue` | `boolean` | `false` | If true the enhanced hue is handled, otherwise the normal hue |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:407](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L407)

___

### moveToSaturation

▸ **moveToSaturation**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks and potentially switching the color mode it uses the [moveToSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetosaturationlogic)
method to set the hue.
If you want to implement own logic just override [moveToSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetosaturationlogic) with is also used for
[moveToHueAndSaturation](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetohueandsaturation).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the saturation is increased or
decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `saturation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.moveToSaturation

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:589](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L589)

___

### moveToSaturationLogic

▸ **moveToSaturationLogic**(`targetSaturation`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the moveToSaturation logic.
If the managed transition time handling is disabled the method directly sets the new saturation value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetSaturation` | `number` | The target saturation value to move to |
| `transitionTime` | `number` | The time in seconds to move to the target saturation. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:607](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L607)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

ColorControlServerBase.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### requireAttributeEnabled

▸ **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Inherited from

ColorControlServerBase.requireAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### setColorMode

▸ **setColorMode**(`mode`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Convenient method to change the color mode of the device. It uses [switchColorMode](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#switchcolormode) to
convert the current color attributes to the new mode. Override this method for device specific behavior.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1443](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1443)

___

### setEnhancedColorMode

▸ **setEnhancedColorMode**(`mode`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Convenient method to change the enhanced color mode of the device. it uses [switchColorMode](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#switchcolormode) to
convert the current color attributes to the new mode. Override this method for device specific behavior.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1459](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1459)

___

### startColorLoopLogic

▸ **startColorLoopLogic**(`startHue`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
This method uses [moveHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movehuelogic) to start a enhanced color loop and sets the required start hue beforehand.
If this is sufficient for your implementation you might not need to override this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startHue` | `number` | The hue to start the color loop at |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1218](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1218)

___

### stepColor

▸ **stepColor**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
After the options checks it uses the [stepColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepcolorlogic) method to set the x and y value.
If you want to implement own logic just override [stepColorLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepcolorlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target values directly. Else the step logic is applied and the x and y is
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepX`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepY`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Overrides

ColorControlServerBase.stepColor

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:913](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L913)

___

### stepColorLogic

▸ **stepColorLogic**(`stepX`, `stepY`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the stepColor logic.
If the managed transition time handling is disabled the method directly sets the new x and y values.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stepX` | `number` | The step size to move the x value up or down |
| `stepY` | `number` | The step size to move the y value up or down |
| `transitionTime` | `number` | The time in seconds to move the x and y. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:932](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L932)

___

### stepColorTemperature

▸ **stepColorTemperature**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks and potentially switching the color mode it uses the [stepColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepcolortemperaturelogic)
method to set the color temperature.
If you want to implement own logic just override [stepColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepcolortemperaturelogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the color temperature is
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `colorTemperatureMaximumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `colorTemperatureMinimumMireds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.stepColorTemperature

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1356](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1356)

___

### stepColorTemperatureLogic

▸ **stepColorTemperatureLogic**(`stepMode`, `stepSize`, `transitionTime`, `colorTemperatureMinimumMireds`, `colorTemperatureMaximumMireds`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the stepColorTemperature logic.
If the managed transition time handling is disabled the method directly sets the new color temperature value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stepMode` | [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md) | Step Mode to move the color temperature up or down |
| `stepSize` | `number` | Step size to move the color temperature up or down |
| `transitionTime` | `number` | Time in seconds to move the color temperature. 0 means "as fast as possible" |
| `colorTemperatureMinimumMireds` | `number` | Minimum allowed color temperature value |
| `colorTemperatureMaximumMireds` | `number` | Maximum allowed color temperature value |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1409](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1409)

___

### stepHue

▸ **stepHue**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks it uses the [stepHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stephuelogic) method to set the hue.
If you want to implement own logic just override [stepHueLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stephuelogic) with is also used for [enhancedStepHue](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#enhancedstephue).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set to min/max directly. Else the step logic is applied and the hue is increased or decreased
by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.stepHue

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:521](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L521)

___

### stepHueLogic

▸ **stepHueLogic**(`stepMode`, `stepSize`, `transitionTime`, `isEnhancedHue?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the stepHue logic. The method handled hue and enhanced-Hue changes depending on the
last parameter.
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set to current Hue +/- stepSize directly. Else the step logic is applied and the hue is increased
or decreased by the step size every transition time interval.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `stepMode` | [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md) | `undefined` | The step mode to move the hue up or down |
| `stepSize` | `number` | `undefined` | The step size to move the hue up or down |
| `transitionTime` | `number` | `undefined` | The time in seconds to move the hue. 0 means "as fast as possible" |
| `isEnhancedHue` | `boolean` | `false` | If true the enhanced hue is handled, otherwise the normal hue |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:542](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L542)

___

### stepSaturation

▸ **stepSaturation**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks and potentially switching the color mode it uses the [stepSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepsaturationlogic)
method to set the hue.
If you want to implement own logic just override [stepSaturationLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stepsaturationlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target values directly. Else the step logic is applied and the hue and saturation are
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

ColorControlServerBase.stepSaturation

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:683](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L683)

___

### stepSaturationLogic

▸ **stepSaturationLogic**(`stepMode`, `stepSize`, `transitionTime`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation of the stepSaturation logic.
If the managed transition time handling is disabled the method directly sets the new saturation value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stepMode` | [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md) | The step mode to move the saturation up or down |
| `stepSize` | `number` | The step size to move the saturation up or down |
| `transitionTime` | `number` | The time in seconds to move the saturation. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:708](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L708)

___

### stopAllColorMovement

▸ **stopAllColorMovement**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
This method is called to stop any color movements potentially in progress, including any x/y, hue, saturation and
color temperature transitions. Override this method with hardware specific logic to implement this functionality.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:865](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L865)

___

### stopColorLoopLogic

▸ **stopColorLoopLogic**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
Implement stopping the color loop here if any special hardware specific logic is needed.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1206](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1206)

___

### stopHueAndSaturationMovement

▸ **stopHueAndSaturationMovement**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
This method is called to stop any hue, enhanced hue and/or saturation movements potentially in progress. Override
this method with hardware specific logic to implement this functionality.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:508](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L508)

___

### stopMoveStep

▸ **stopMoveStep**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
After the options checks it uses the [stopMoveStepLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopmovesteplogic) method to stop any ongoing color movement.
If you want to implement own logic just override [stopMoveStepLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#stopmovesteplogic).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Overrides

ColorControlServerBase.stopMoveStep

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1235](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1235)

___

### stopMoveStepLogic

▸ **stopMoveStepLogic**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
Implement stopping any ongoing color movement here if any special hardware specific logic is needed. In fact this
needs to stop any ongoing saturation, color temperature, x or y movement. Hue transitions should only be stopped
when they do not belong to a color loop.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1249](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1249)

___

### switchColorMode

▸ **switchColorMode**(`oldMode`, `newMode`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Default implementation notes:
This method is used to switch the device color mode. It converts the current color attributes to the new mode on
a best effort "as close as possible" basis. If the device hardware can do this better this method should be
overridden to implement this switch logic and to update all state attributes for the new mode. The color mode
attribute update itself is handled by the calling method, so is not needed to be done here.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldMode` | [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md) | Old color Mode |
| `newMode` | [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md) | New color Mode |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1486](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1486)

___

### syncColorTemperatureWithLevel

▸ **syncColorTemperatureWithLevel**(`level`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This method is used internally to potentially handle the dependency between the ColorControl and LevelControl
cluster.
Do not override this method! Please use the [syncColorTemperatureWithLevelLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#synccolortemperaturewithlevellogic) method instead which is
called by this method if a sync is needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1597](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1597)

___

### syncColorTemperatureWithLevelLogic

▸ **syncColorTemperatureWithLevelLogic**(`level`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This method is used internally to potentially handle the dependency between the ColorControl and LevelControl
clusters as defined by the Matter specification. It uses [moveToColorTemperatureLogic](behavior_definitions_color_control_export.ColorControlServerLogic-1.md#movetocolortemperaturelogic) with a transition
time of 0 (as fast as possible) to set the determined color temperature. Unless you have special requirements
you do not need to override it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | The current level value from the LevelControl cluster |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1615](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1615)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

ColorControlServerBase.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L203)

___

### alter

▸ **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

ColorControlServerBase.alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

___

### enable

▸ **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

ColorControlServerBase.enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

___

### for

▸ **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema?`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema?` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

ColorControlServerBase.for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

___

### set

▸ **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<`InstanceType`\<`This`[``"State"``]\>\>\> |

#### Returns

`This`

#### Inherited from

ColorControlServerBase.set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

___

### with

▸ **with**\<`This`, `FeaturesT`\>(`this`, `...features`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FeaturesT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `...features` | `FeaturesT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

ColorControlServerBase.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
