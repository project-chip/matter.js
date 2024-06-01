[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/color-control/export](../README.md) / ColorControlServerLogic

# Class: ColorControlServerLogic

This is the default server implementation of [ColorControlBehavior](../README.md#colorcontrolbehavior).

This implementation includes all features of [ColorControl.Cluster](../../../../../cluster/export/namespaces/ColorControl/README.md#cluster) and implements all mandatory commands.
You should use [ColorControlServer.with](ColorControlServer.md#with) to specialize the class for the features your implementation supports.

This default implementation also handles together with the LevelControl cluster the currentLevel dependency as defined
by the Matter specification automatically.

This implementation ignores by default all transition times and sets the new color immediately. Alternatively, you can
set the `managedTransitionTimeHandling` state attribute to true to have matter.js manage transition times by
changing the level value step-wise every second. This might be an intermediate solution if you develop
independently of defined hardware.

If you develop for a specific hardware you should extend the [ColorControlServer](ColorControlServer.md) class and implement the
following methods to natively use device features to correctly support the transition times. For this the default
implementation uses special protected methods which are used by the real commands and are only responsible for the
actual value change logic. The benefit of this structure is that basic data validations and options checks are
already done and you can focus on the actual hardware interaction:
* [ColorControlServerLogic.moveToHueLogic](ColorControlServerLogic.md#movetohuelogic) Logic to move the hue to a defined value in a defined time
* [ColorControlServerLogic.moveHueLogic](ColorControlServerLogic.md#movehuelogic) Logic to move the hue by a defined rate/second
* [ColorControlServerLogic.stepHueLogic](ColorControlServerLogic.md#stephuelogic) Logic to move the hue one defined step in a defined time
* [ColorControlServerLogic.moveToSaturationLogic](ColorControlServerLogic.md#movetosaturationlogic) Logic to move the saturation to a defined value in a defined time
* [ColorControlServerLogic.moveSaturationLogic](ColorControlServerLogic.md#movesaturationlogic) Logic to move the saturation by a defined rate/second
* [ColorControlServerLogic.stepSaturationLogic](ColorControlServerLogic.md#stepsaturationlogic) Logic to move the saturation one defined step in a defined time
* [ColorControlServerLogic.moveToHueAndSaturationLogic](ColorControlServerLogic.md#movetohueandsaturationlogic) Logic to move the hue and saturation to a defined value in a defined time
* [ColorControlServerLogic.moveToColorLogic](ColorControlServerLogic.md#movetocolorlogic) Logic to move the x/y color to a defined value in a defined time
* [ColorControlServerLogic.moveColorLogic](ColorControlServerLogic.md#movecolorlogic) Logic to move the x/y color by a defined rate/second
* [ColorControlServerLogic.stepColorLogic](ColorControlServerLogic.md#stepcolorlogic) Logic to move the x/y color one defined step in a defined time
* [ColorControlServerLogic.moveToColorTemperatureLogic](ColorControlServerLogic.md#movetocolortemperaturelogic) Logic to move the color temperature to a defined value in a defined time
* [ColorControlServerLogic.moveToEnhancedHueAndSaturationLogic](ColorControlServerLogic.md#movetoenhancedhueandsaturationlogic) Logic to move the enhanced hue and saturation to a defined value in a defined time
* [ColorControlServerLogic.moveColorTemperatureLogic](ColorControlServerLogic.md#movecolortemperaturelogic) Logic to move the color temperature by a defined rate/second
* [ColorControlServerLogic.stepColorTemperatureLogic](ColorControlServerLogic.md#stepcolortemperaturelogic) Logic to move the color temperature one defined step in a defined time
* [ColorControlServerLogic.stopHueAndSaturationMovement](ColorControlServerLogic.md#stophueandsaturationmovement) Logic to stop any hue and saturation movements
* [ColorControlServerLogic.stopAllColorMovement](ColorControlServerLogic.md#stopallcolormovement) Logic to stop any color movements
* [ColorControlServerLogic.startColorLoopLogic](ColorControlServerLogic.md#startcolorlooplogic) Logic to start the color loop (looping enhanced hue endlessly)
* [ColorControlServerLogic.stopColorLoopLogic](ColorControlServerLogic.md#stopcolorlooplogic) Logic to stop the color loop
* [ColorControlServerLogic.stopMoveStepLogic](ColorControlServerLogic.md#stopmovesteplogic) Logic to stop all movements beside color loops
* [ColorControlServerLogic.switchColorMode](ColorControlServerLogic.md#switchcolormode) Logic to switch the color mode and to set the current attributes of the new mode

All overridable methods can be implemented sync or async by returning a Promise.

For own implementations you can use:
* [ColorControlServerLogic#setColorMode](ColorControlServerLogic.md#setcolormode) to set the color mode
* [ColorControlServerLogic#setEnhancedColorMode](ColorControlServerLogic.md#setenhancedcolormode) to set the enhanced color mode

The default implementation of [ColorControlServerLogic.switchColorMode](ColorControlServerLogic.md#switchcolormode) tries to convert the color values
between the different modi. When switching from color temperature mode to any other mode the value can be converted
when the color temperature was between 1000K and 20.000K. For other values no conversion takes place.

The method [ColorControlServerLogic.syncColorTemperatureWithLevelLogic](ColorControlServerLogic.md#synccolortemperaturewithlevellogic) is handling the sync between the
LevelControl and ColorControl cluster when the color temperature is used.

Additionally there are some convenience properties to access the current attribute values for all relevant color
attributes (x,y, hue, saturation, mireds/kelvin, colorTemperatur, ...) in their CIE value format instead the matter
data ranges.

## Extends

- [`ColorControlServerBase`](../-internal-/README.md#colorcontrolserverbase)

## Constructors

### new ColorControlServerLogic()

> **new ColorControlServerLogic**(`agent`, `backing`): [`ColorControlServerLogic`](ColorControlServerLogic.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`ColorControlServerLogic`](ColorControlServerLogic.md)

#### Inherited from

`ColorControlServerBase.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`ColorControlServerBase.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`ColorControlServerBase.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`ColorControlServerBase.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`ColorControlServerBase.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`ColorControlServerBase.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`ColorControlServerBase.endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ColorControlInterface`](../README.md#colorcontrolinterface)\>\>, `"colorMode$Changing"` \| `"options$Changing"` \| `"numberOfPrimaries$Changing"` \| `"enhancedColorMode$Changing"` \| `"colorCapabilities$Changing"` \| `"remainingTime$Changing"` \| `"driftCompensation$Changing"` \| `"compensationText$Changing"` \| `"primary1X$Changing"` \| `"primary1Y$Changing"` \| `"primary1Intensity$Changing"` \| `"primary2X$Changing"` \| `"primary2Y$Changing"` \| `"primary2Intensity$Changing"` \| `"primary3X$Changing"` \| `"primary3Y$Changing"` \| `"primary3Intensity$Changing"` \| `"primary4X$Changing"` \| `"primary4Y$Changing"` \| `"primary4Intensity$Changing"` \| `"primary5X$Changing"` \| `"primary5Y$Changing"` \| `"primary5Intensity$Changing"` \| `"primary6X$Changing"` \| `"primary6Y$Changing"` \| `"primary6Intensity$Changing"` \| `"whitePointX$Changing"` \| `"whitePointY$Changing"` \| `"colorPointRx$Changing"` \| `"colorPointRy$Changing"` \| `"colorPointRIntensity$Changing"` \| `"colorPointGx$Changing"` \| `"colorPointGy$Changing"` \| `"colorPointGIntensity$Changing"` \| `"colorPointBx$Changing"` \| `"colorPointBy$Changing"` \| `"colorPointBIntensity$Changing"` \| `"colorMode$Changed"` \| `"options$Changed"` \| `"numberOfPrimaries$Changed"` \| `"enhancedColorMode$Changed"` \| `"colorCapabilities$Changed"` \| `"remainingTime$Changed"` \| `"driftCompensation$Changed"` \| `"compensationText$Changed"` \| `"primary1X$Changed"` \| `"primary1Y$Changed"` \| `"primary1Intensity$Changed"` \| `"primary2X$Changed"` \| `"primary2Y$Changed"` \| `"primary2Intensity$Changed"` \| `"primary3X$Changed"` \| `"primary3Y$Changed"` \| `"primary3Intensity$Changed"` \| `"primary4X$Changed"` \| `"primary4Y$Changed"` \| `"primary4Intensity$Changed"` \| `"primary5X$Changed"` \| `"primary5Y$Changed"` \| `"primary5Intensity$Changed"` \| `"primary6X$Changed"` \| `"primary6Y$Changed"` \| `"primary6Intensity$Changed"` \| `"whitePointX$Changed"` \| `"whitePointY$Changed"` \| `"colorPointRx$Changed"` \| `"colorPointRy$Changed"` \| `"colorPointRIntensity$Changed"` \| `"colorPointGx$Changed"` \| `"colorPointGy$Changed"` \| `"colorPointGIntensity$Changed"` \| `"colorPointBx$Changed"` \| `"colorPointBy$Changed"` \| `"colorPointBIntensity$Changed"`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### colorCapabilities$Changing

> **colorCapabilities$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### colorLoopActive$Changing

> **colorLoopActive$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ColorLoopActive`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorLoopActive.md), `any`\>\>

##### colorLoopDirection$Changing

> **colorLoopDirection$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ColorLoopDirection`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorLoopDirection.md), `any`\>\>

##### colorLoopStartEnhancedHue$Changing

> **colorLoopStartEnhancedHue$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### colorLoopStoredEnhancedHue$Changing

> **colorLoopStoredEnhancedHue$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### colorLoopTime$Changing

> **colorLoopTime$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### colorMode$Changing

> **colorMode$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md), `any`\>\>

##### colorTempPhysicalMaxMireds$Changing

> **colorTempPhysicalMaxMireds$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### colorTempPhysicalMinMireds$Changing

> **colorTempPhysicalMinMireds$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### colorTemperatureMireds$Changing

> **colorTemperatureMireds$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### currentHue$Changing

> **currentHue$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### currentSaturation$Changing

> **currentSaturation$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### currentX$Changing

> **currentX$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### currentY$Changing

> **currentY$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### enhancedColorMode$Changing

> **enhancedColorMode$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`EnhancedColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md), `any`\>\>

##### enhancedCurrentHue$Changing

> **enhancedCurrentHue$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### numberOfPrimaries$Changing

> **numberOfPrimaries$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### options$Changing

> **options$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

#### Type declaration

##### colorPointBIntensity$Changing

> **colorPointBIntensity$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### colorPointBx$Changing

> **colorPointBx$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### colorPointBy$Changing

> **colorPointBy$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### colorPointGIntensity$Changing

> **colorPointGIntensity$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### colorPointGx$Changing

> **colorPointGx$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### colorPointGy$Changing

> **colorPointGy$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### colorPointRIntensity$Changing

> **colorPointRIntensity$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### colorPointRx$Changing

> **colorPointRx$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### colorPointRy$Changing

> **colorPointRy$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### compensationText$Changing

> **compensationText$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`string`, `any`\>\>

##### coupleColorTempToLevelMinMireds$Changing

> **coupleColorTempToLevelMinMireds$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### driftCompensation$Changing

> **driftCompensation$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`DriftCompensation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/DriftCompensation.md), `any`\>\>

##### primary1Intensity$Changing

> **primary1Intensity$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary1X$Changing

> **primary1X$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary1Y$Changing

> **primary1Y$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary2Intensity$Changing

> **primary2Intensity$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary2X$Changing

> **primary2X$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary2Y$Changing

> **primary2Y$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary3Intensity$Changing

> **primary3Intensity$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary3X$Changing

> **primary3X$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary3Y$Changing

> **primary3Y$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary4Intensity$Changing

> **primary4Intensity$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary4X$Changing

> **primary4X$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary4Y$Changing

> **primary4Y$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary5Intensity$Changing

> **primary5Intensity$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary5X$Changing

> **primary5X$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary5Y$Changing

> **primary5Y$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary6Intensity$Changing

> **primary6Intensity$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary6X$Changing

> **primary6X$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary6Y$Changing

> **primary6Y$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### remainingTime$Changing

> **remainingTime$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### startUpColorTemperatureMireds$Changing

> **startUpColorTemperatureMireds$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### whitePointX$Changing

> **whitePointX$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### whitePointY$Changing

> **whitePointY$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

#### Type declaration

##### colorCapabilities$Changed

> **colorCapabilities$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### colorLoopActive$Changed

> **colorLoopActive$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ColorLoopActive`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorLoopActive.md), `any`\>\>

##### colorLoopDirection$Changed

> **colorLoopDirection$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ColorLoopDirection`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorLoopDirection.md), `any`\>\>

##### colorLoopStartEnhancedHue$Changed

> **colorLoopStartEnhancedHue$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### colorLoopStoredEnhancedHue$Changed

> **colorLoopStoredEnhancedHue$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### colorLoopTime$Changed

> **colorLoopTime$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### colorMode$Changed

> **colorMode$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md), `any`\>\>

##### colorTempPhysicalMaxMireds$Changed

> **colorTempPhysicalMaxMireds$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### colorTempPhysicalMinMireds$Changed

> **colorTempPhysicalMinMireds$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### colorTemperatureMireds$Changed

> **colorTemperatureMireds$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### currentHue$Changed

> **currentHue$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### currentSaturation$Changed

> **currentSaturation$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### currentX$Changed

> **currentX$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### currentY$Changed

> **currentY$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### enhancedColorMode$Changed

> **enhancedColorMode$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`EnhancedColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md), `any`\>\>

##### enhancedCurrentHue$Changed

> **enhancedCurrentHue$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### numberOfPrimaries$Changed

> **numberOfPrimaries$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### options$Changed

> **options$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

#### Type declaration

##### colorPointBIntensity$Changed

> **colorPointBIntensity$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### colorPointBx$Changed

> **colorPointBx$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### colorPointBy$Changed

> **colorPointBy$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### colorPointGIntensity$Changed

> **colorPointGIntensity$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### colorPointGx$Changed

> **colorPointGx$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### colorPointGy$Changed

> **colorPointGy$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### colorPointRIntensity$Changed

> **colorPointRIntensity$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### colorPointRx$Changed

> **colorPointRx$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### colorPointRy$Changed

> **colorPointRy$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### compensationText$Changed

> **compensationText$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`string`, `any`\>\>

##### coupleColorTempToLevelMinMireds$Changed

> **coupleColorTempToLevelMinMireds$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### driftCompensation$Changed

> **driftCompensation$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`DriftCompensation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/DriftCompensation.md), `any`\>\>

##### primary1Intensity$Changed

> **primary1Intensity$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary1X$Changed

> **primary1X$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary1Y$Changed

> **primary1Y$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary2Intensity$Changed

> **primary2Intensity$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary2X$Changed

> **primary2X$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary2Y$Changed

> **primary2Y$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary3Intensity$Changed

> **primary3Intensity$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary3X$Changed

> **primary3X$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary3Y$Changed

> **primary3Y$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary4Intensity$Changed

> **primary4Intensity$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary4X$Changed

> **primary4X$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary4Y$Changed

> **primary4Y$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary5Intensity$Changed

> **primary5Intensity$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary5X$Changed

> **primary5X$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary5Y$Changed

> **primary5Y$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary6Intensity$Changed

> **primary6Intensity$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### primary6X$Changed

> **primary6X$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### primary6Y$Changed

> **primary6Y$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>\>

##### remainingTime$Changed

> **remainingTime$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### startUpColorTemperatureMireds$Changed

> **startUpColorTemperatureMireds$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### whitePointX$Changed

> **whitePointX$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### whitePointY$Changed

> **whitePointY$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

`ColorControlServerBase.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: [`FeaturesAsFlags`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featuresasflagsclustertflagst)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), readonly [[`HueSaturation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#huesaturation), [`EnhancedHue`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#enhancedhue), [`ColorLoop`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colorloop), [`Xy`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#xy), [`ColorTemperature`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colortemperature)]\>

Supported features as a flag object.

#### Inherited from

`ColorControlServerBase.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### internal

> `protected` **internal**: [`Internal`](../namespaces/ColorControlServerLogic/classes/Internal.md)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L137)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`ColorControlServerBase.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> **state**: [`State`](../namespaces/ColorControlServerLogic/classes/State.md)

#### Overrides

`ColorControlServerBase.state`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L138)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), readonly [[`HueSaturation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#huesaturation), [`EnhancedHue`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#enhancedhue), [`ColorLoop`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colorloop), [`Xy`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#xy), [`ColorTemperature`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colortemperature)]\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ColorControlInterface`](../README.md#colorcontrolinterface)\>, [`ColorControlInterface`](../README.md#colorcontrolinterface)\>\>

#### Inherited from

`ColorControlServerBase.Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### Interface

> `static` `readonly` **Interface**: [`ColorControlInterface`](../README.md#colorcontrolinterface)

#### Inherited from

`ColorControlServerBase.Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### cluster

> `static` `readonly` **cluster**: [`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), readonly [[`HueSaturation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#huesaturation), [`EnhancedHue`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#enhancedhue), [`ColorLoop`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colorloop), [`Xy`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#xy), [`ColorTemperature`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colortemperature)]\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

`ColorControlServerBase.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), readonly [[`HueSaturation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#huesaturation), [`EnhancedHue`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#enhancedhue), [`ColorLoop`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colorloop), [`Xy`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#xy), [`ColorTemperature`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colortemperature)]\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ColorControlInterface`](../README.md#colorcontrolinterface)\>, [`ColorControlInterface`](../README.md#colorcontrolinterface)\>\>

#### Inherited from

`ColorControlServerBase.defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`ColorControlServerBase.dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`ColorControlServerBase.early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"colorControl"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`ColorControlServerBase.id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`ColorControlServerBase.name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`ColorControlServerBase.schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`ColorControlServerBase.supervisor`

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

`ColorControlServerBase.supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Accessors

### colorPointBx

> `get` **colorPointBx**(): `undefined` \| `number`

Returns the current colorPoint Bx value as decimal number according to CIE in the range 0..1.

> `set` **colorPointBx**(`value`): `void`

Sets the current colorPoint Bx value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:338](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L338)

***

### colorPointGx

> `get` **colorPointGx**(): `undefined` \| `number`

Returns the current colorPoint Gx value as decimal number according to CIE in the range 0..1.

> `set` **colorPointGx**(`value`): `void`

Sets the current colorPoint Gx value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:312](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L312)

***

### colorPointGy

> `get` **colorPointGy**(): `undefined` \| `number`

Returns the current colorPoint Gy value as decimal number according to CIE in the range 0..1.

> `set` **colorPointGy**(`value`): `void`

Sets the current colorPoint Gy value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:325](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L325)

***

### colorPointRx

> `get` **colorPointRx**(): `undefined` \| `number`

Returns the current colorPoint Rx value as decimal number according to CIE in the range 0..1.

> `set` **colorPointRx**(`value`): `void`

Sets the current colorPoint Rx value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L286)

***

### colorPointRy

> `get` **colorPointRy**(): `undefined` \| `number`

Returns the current colorPoint Ry value as decimal number according to CIE in the range 0..1.

> `set` **colorPointRy**(`value`): `void`

Sets the current colorPoint Ry value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:299](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L299)

***

### enhancedHue

> `get` **enhancedHue**(): `number`

Returns the current enhanced hue value as decimal number in the range 0..0xFFFF.

> `set` **enhancedHue**(`value`): `void`

Sets the current enhanced hue value as decimal number in the range 0..0xFFFF and converts into Matter number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:186](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L186)

***

### hue

> `get` **hue**(): `number`

Returns the current hue value as decimal number in the range 0..360.

> `set` **hue**(`value`): `void`

Sets the current hue value as decimal number in the range 0..360 and converts into Matter number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L174)

***

### kelvin

> `get` **kelvin**(): `number`

Returns the current color temperature value in Kelvin (from internal Mireds).

> `set` **kelvin**(`value`): `void`

Sets the current color temperature value in Kelvin and updates the internal mireds value.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:230](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L230)

***

### maximumColorTemperatureMireds

> `get` **maximumColorTemperatureMireds**(): `number`

Returns the maximum color temperature value in Mireds (0..0xFFFF). This automatically handled the case that no
physical maximum value is defined.

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:253](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L253)

***

### minimumColorTemperatureMireds

> `get` **minimumColorTemperatureMireds**(): `number`

Returns the minimum color temperature value in Mireds (0..0xFFFF). This automatically handled the case that no
physical minimum value is defined.

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:243](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L243)

***

### mireds

> `get` **mireds**(): `number`

Returns the current color temperature value in Mireds (0..0xFFFF).

> `set` **mireds**(`value`): `void`

Sets the current color temperature value in Mireds (0..0xFFFF) and converts into Matter number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L214)

***

### saturation

> `get` **saturation**(): `number`

Returns the current saturation value as decimal number in the range 0..1.

> `set` **saturation**(`value`): `void`

Sets the current saturation value as decimal number in the range 0..1 and converts into Matter number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L198)

***

### whitePointX

> `get` **whitePointX**(): `undefined` \| `number`

Returns the current whitePoint X value as decimal number according to CIE in the range 0..1.

> `set` **whitePointX**(`value`): `void`

Sets the current whitePoint X value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:260](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L260)

***

### whitePointY

> `get` **whitePointY**(): `undefined` \| `number`

Returns the current whitePoint Y value as decimal number according to CIE in the range 0..1.

> `set` **whitePointY**(`value`): `void`

Sets the current whitePoint Y value as decimal number according to CIE in the range 0..1 and converts into Matter
number range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:273](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L273)

***

### x

> `get` **x**(): `number`

Returns the current X value as decimal number according to CIE in the range 0..1.

> `set` **x**(`value`): `void`

Sets the current X value as decimal number according to CIE in the range 0..1 and converts into Matter number
range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L146)

***

### y

> `get` **y**(): `number`

Returns the current Y value as decimal number according to CIE in the range 0..1.

> `set` **y**(`value`): `void`

Sets the current Y value as decimal number according to CIE in the range 0..1 and converts into Matter number
range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L159)

## Methods

### #assertRate()

> `private` **#assertRate**(`mode`, `rate`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`MoveMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |
| `rate` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1654](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1654)

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

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1733](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1733)

***

### #colorTemperatureStepIntervalTick()

> `private` **#colorTemperatureStepIntervalTick**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1867](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1867)

***

### #getBootReason()

> `private` **#getBootReason**(): `undefined` \| [`BootReason`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/BootReason.md)

#### Returns

`undefined` \| [`BootReason`](../../../../../cluster/export/namespaces/GeneralDiagnostics/enumerations/BootReason.md)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1726](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1726)

***

### #getHueDistanceByDirection()

> `private` **#getHueDistanceByDirection**(`currentHue`, `targetHue`, `direction`, `max`): `number`

Calculate the hue distance depending on the direction and the current and target hue.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `currentHue` | `number` |
| `targetHue` | `number` |
| `direction` | [`ColorControlDirection`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorControlDirection.md) |
| `max` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1661](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1661)

***

### #hueStepIntervalTick()

> `private` **#hueStepIntervalTick**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1848](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1848)

***

### #initializeManagedTransitionTimers()

> `private` **#initializeManagedTransitionTimers**(): `void`

Initialize the managed transition timers..

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1695](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1695)

***

### #initiateTransition()

> `private` **#initiateTransition**(`transitionType`, `changeRate`, `minValue`, `maxValue`, `targetValue`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `transitionType` | [`ManagedTransitionType`](../-internal-/README.md#managedtransitiontype) |
| `changeRate` | `number` |
| `minValue` | `number` |
| `maxValue` | `number` |
| `targetValue`? | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1751](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1751)

***

### #optionsAllowExecution()

> `private` **#optionsAllowExecution**(`optionsMask`, `optionsOverride`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `optionsMask` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |
| `optionsOverride` | [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1743](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1743)

***

### #returnAsOptionalXyValue()

> `private` **#returnAsOptionalXyValue**(`value`): `undefined` \| `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2061](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2061)

***

### #returnAsXyValue()

> `private` **#returnAsXyValue**(`value`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2057](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2057)

***

### #saturationStepIntervalTick()

> `private` **#saturationStepIntervalTick**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1858](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1858)

***

### #setFromXyValue()

> `private` **#setFromXyValue**(`fieldName`, `value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `value` | `undefined` \| `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2068](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2068)

***

### #setRemainingTime()

> `private` **#setRemainingTime**(): `void`

This method is used to set the remaining Time by checking the current transition timers depending on the color mode.

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1563](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1563)

***

### #stepIntervalTick()

> `private` **#stepIntervalTick**(`transitionType`, `transitionTimer`, `transitionData`, `currentValue`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `transitionType` | [`ManagedTransitionType`](../-internal-/README.md#managedtransitiontype) |
| `transitionTimer` | `undefined` \| [`Timer`](../../../../../time/export/interfaces/Timer.md) |
| `transitionData` | `undefined` \| [`TransitionData`](../-internal-/README.md#transitiondata) |
| `currentValue` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1894](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1894)

***

### #stopColorLoop()

> `private` **#stopColorLoop**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Internal method to step the color loop and sync the internal ColorLoopActive state and restore the stored
enhanced hue. It uses [stopColorLoopLogic](ColorControlServerLogic.md#stopcolorlooplogic) to execute the stop.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1192)

***

### #xStepIntervalTick()

> `private` **#xStepIntervalTick**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1876](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1876)

***

### #yStepIntervalTick()

> `private` **#yStepIntervalTick**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1885](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1885)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

`ColorControlServerBase.[asyncDispose]`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2079](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2079)

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

`ColorControlServerBase.asAdmin`

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

`ColorControlServerBase.assertAttributeEnabled`

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

`ColorControlServerBase.callback`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### colorLoopSet()

> **colorLoopSet**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks and potentially switching the color mode it uses the [stopColorLoopLogic](ColorControlServerLogic.md#stopcolorlooplogic)
method to stop color loops or [startColorLoopLogic](ColorControlServerLogic.md#startcolorlooplogic) to start a color loop at a defined enhanced hue value.
If you want to implement own logic just override these methods.
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the color temperature is
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.colorLoopSet`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1140)

***

### enhancedMoveHue()

> **enhancedMoveHue**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveHueLogic](ColorControlServerLogic.md#movehuelogic) method to set the enhanced hue.
If you want to implement own logic just override [moveHueLogic](ColorControlServerLogic.md#movehuelogic) which is used together with
[moveHue](ColorControlServerLogic.md#movehue).
The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, but
increase only one rate directly if the managed transition is not used. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.enhancedMoveHue`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1039](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1039)

***

### enhancedMoveToHue()

> **enhancedMoveToHue**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveToHueLogic](ColorControlServerLogic.md#movetohuelogic) method to set the enhanced hue.
If you want to implement own logic just override [moveToHueLogic](ColorControlServerLogic.md#movetohuelogic) which is used together with
[moveToHue](ColorControlServerLogic.md#movetohue).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the color temperature is
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.enhancedMoveToHue`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1014](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1014)

***

### enhancedMoveToHueAndSaturation()

> **enhancedMoveToHueAndSaturation**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
After the options checks it uses the [moveToEnhancedHueAndSaturationLogic](ColorControlServerLogic.md#movetoenhancedhueandsaturationlogic) method to set the enhanced hue
and saturation.
If you want to implement own logic just override [moveToEnhancedHueAndSaturationLogic](ColorControlServerLogic.md#movetoenhancedhueandsaturationlogic).
The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, so
we set to min/max directly if the managed transition is not used. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Overrides

`ColorControlServerBase.enhancedMoveToHueAndSaturation`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1090](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1090)

***

### enhancedStepHue()

> **enhancedStepHue**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks it uses the [stepHueLogic](ColorControlServerLogic.md#stephuelogic) method to set the enhanced hue.
If you want to implement own logic just override [stepHueLogic](ColorControlServerLogic.md#stephuelogic) which is used together with
[stepHue](ColorControlServerLogic.md#stephue).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the hue is increased or
decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.enhancedStepHue`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1065](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1065)

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

#### Overrides

`ColorControlServerBase.initialize`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:350](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L350)

***

### moveColor()

> **moveColor**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
After the options checks it uses the [moveColorLogic](ColorControlServerLogic.md#movecolorlogic) method to set the x and y value.
If you want to implement own logic just override [moveColorLogic](ColorControlServerLogic.md#movecolorlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target values directly. Else the step logic is applied and the x and y is
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Overrides

`ColorControlServerBase.moveColor`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:845](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L845)

***

### moveColorLogic()

> `protected` **moveColorLogic**(`rateX`, `rateY`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the moveColor logic.
If the managed transition time handling is disabled the method directly sets the new x and y values.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `rateX` | `number` | The rate to move the x value up or down (positive values mean up, negative down) |
| `rateY` | `number` | The rate to move the y value up or down (positive values mean up, negative down) |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:883](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L883)

***

### moveColorTemperature()

> **moveColorTemperature**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
After the options checks and potentially changing the color mode it uses the [moveColorTemperatureLogic](ColorControlServerLogic.md#movecolortemperaturelogic)
method to set the color temperature.
If the current movement should be stopped [stopHueAndSaturationMovement](ColorControlServerLogic.md#stophueandsaturationmovement) is used.
If you want to implement own logic just override [moveColorTemperatureLogic](ColorControlServerLogic.md#movecolortemperaturelogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the color temperature is
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Overrides

`ColorControlServerBase.moveColorTemperature`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1269](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1269)

***

### moveColorTemperatureLogic()

> `protected` **moveColorTemperatureLogic**(`moveMode`, `rate`, `colorTemperatureMinimumMireds`, `colorTemperatureMaximumMireds`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the moveColorTemperature logic.
If the managed transition time handling is disabled the method directly sets the min or max color temperature value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |  |
| `rate` | `number` |  |
| `colorTemperatureMinimumMireds` | `number` |  |
| `colorTemperatureMaximumMireds` | `number` |  |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1324](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1324)

***

### moveHue()

> **moveHue**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveHueLogic](ColorControlServerLogic.md#movehuelogic) method to set the hue.
If you want to implement own logic just override [moveHueLogic](ColorControlServerLogic.md#movehuelogic) with is also used for [enhancedMoveHue](ColorControlServerLogic.md#enhancedmovehue).
If a currently running movement should be stopped [stopHueAndSaturationMovement](ColorControlServerLogic.md#stophueandsaturationmovement) is used which can also be
overridden.
The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, but
increase only one rate directly if the managed transition is not used. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.moveHue`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:449](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L449)

***

### moveHueLogic()

> `protected` **moveHueLogic**(`moveMode`, `rate`, `isEnhancedHue`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the moveHue logic. The method handled hue and enhanced-Hue changes depending on the
last parameter.
If the managed transition time handling is disabled the method directly increases the hue value by one rate step.
So without managed transition not too much happens.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) | `undefined` | Move Mode to move the hue up or down (Stop should not be provided in here because already handled) |
| `rate` | `number` | `undefined` | The rate to move the hue up or down. 0 should never be provided her because handled here. |
| `isEnhancedHue` | `boolean` | `false` | If true the enhanced hue is handled, otherwise the normal hue |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:475](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L475)

***

### moveSaturation()

> **moveSaturation**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveSaturationLogic](ColorControlServerLogic.md#movesaturationlogic) method to set the hue.
If you want to implement own logic just override [moveSaturationLogic](ColorControlServerLogic.md#movesaturationlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set to min/max directly. Else the step logic is applied and the saturation is increased or
decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.moveSaturation`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:634](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L634)

***

### moveSaturationLogic()

> `protected` **moveSaturationLogic**(`moveMode`, `rate`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the moveSaturation logic.
If the managed transition time handling is disabled the method directly sets the new saturation value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) | Move Mode to move the saturation up or down |
| `rate` | `number` | The rate to move the saturation up or down |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:657](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L657)

***

### moveToColor()

> **moveToColor**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveToColorLogic](ColorControlServerLogic.md#movetocolorlogic) method to set the x and y value.
If you want to implement own logic just override [moveToColorLogic](ColorControlServerLogic.md#movetocolorlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target values directly. Else the step logic is applied and the x and y is
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`MoveToColorRequest`](../../../../../cluster/export/namespaces/ColorControl/interfaces/MoveToColorRequest.md) |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.moveToColor`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:792](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L792)

***

### moveToColorLogic()

> `protected` **moveToColorLogic**(`targetX`, `targetY`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the moveToColor logic.
If the managed transition time handling is disabled the method directly sets the new x and y values.
Otherwise the method initiates a transition with the given rate.
This method internally uses [moveToColorLogic](ColorControlServerLogic.md#movetocolorlogic) to handle the x and y changes, so if you have implemented it
already you might not need to override this method.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `targetX` | `number` | The target x value to move to |
| `targetY` | `number` | The target y value to move to |
| `transitionTime` | `number` | The time in seconds to move to the target x and y. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:819](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L819)

***

### moveToColorTemperature()

> **moveToColorTemperature**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
After the options checks it uses the [moveToColorTemperatureLogic](ColorControlServerLogic.md#movetocolortemperaturelogic) method to set the color temperature.
If you want to implement own logic just override [moveToColorTemperatureLogic](ColorControlServerLogic.md#movetocolortemperaturelogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the color temperature is
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Overrides

`ColorControlServerBase.moveToColorTemperature`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:963](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L963)

***

### moveToColorTemperatureLogic()

> `protected` **moveToColorTemperatureLogic**(`targetMireds`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the moveToColorTemperature logic.
If the managed transition time handling is disabled the method directly sets the new color temperature value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `targetMireds` | `number` | The target color temperature value to move to |
| `transitionTime` | `number` | The time in seconds to move to the target color temperature. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:986](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L986)

***

### moveToEnhancedHueAndSaturationLogic()

> `protected` **moveToEnhancedHueAndSaturationLogic**(`targetEnhancedHue`, `targetSaturation`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
After the options checks it uses the [moveToHueLogic](ColorControlServerLogic.md#movetohuelogic) and [moveToSaturationLogic](ColorControlServerLogic.md#movetosaturationlogic) methods to set the
hue and saturation.
Both methods are also used for other commands, so it maybe is not needed to override this method.
The logic is implemented as follows: Depending on the provided rate the server will move as fast as possible, so
we set to min/max directly if the managed transition is not used. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetEnhancedHue` | `number` |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1115)

***

### moveToHue()

> **moveToHue**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
This method ignores the transition time provided by the command and just sets the hue value to the
requested value. After the options and value checks and the potential color mode switch it uses the
[moveToHueLogic](ColorControlServerLogic.md#movetohuelogic) method to set the hue. If you want to implement own logic just override
[moveToHueLogic](ColorControlServerLogic.md#movetohuelogic) with is also used for [enhancedMoveToHue](ColorControlServerLogic.md#enhancedmovetohue), [moveToHueAndSaturation](ColorControlServerLogic.md#movetohueandsaturation) and
[enhancedMoveToHueAndSaturation](ColorControlServerLogic.md#enhancedmovetohueandsaturation).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.moveToHue`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:388](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L388)

***

### moveToHueAndSaturation()

> **moveToHueAndSaturation**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks and potentially switching the color mode it uses the [moveToHueAndSaturationLogic](ColorControlServerLogic.md#movetohueandsaturationlogic)
method to set the hue.
If you want to implement own logic just override [moveToHueAndSaturationLogic](ColorControlServerLogic.md#movetohueandsaturationlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target values directly. Else the step logic is applied and the hue and saturation is
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.moveToHueAndSaturation`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:746](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L746)

***

### moveToHueAndSaturationLogic()

> `protected` **moveToHueAndSaturationLogic**(`targetHue`, `targetSaturation`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the moveToHueAndSaturation logic.
If the managed transition time handling is disabled the method directly sets the new hue and saturation values.
Otherwise the method initiates a transition with the given rate.
This method internally uses [moveToHueLogic](ColorControlServerLogic.md#movetohuelogic) and [moveToSaturationLogic](ColorControlServerLogic.md#movetosaturationlogic) to handle the hue and
saturation changes, so if you have implemented them already you might not need to override this method.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `targetHue` | `number` | The target hue value to move to |
| `targetSaturation` | `number` | The target saturation value to move to |
| `transitionTime` | `number` | The time in seconds to move to the target hue and saturation. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:773](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L773)

***

### moveToHueLogic()

> `protected` **moveToHueLogic**(`targetHue`, `direction`, `transitionTime`, `isEnhancedHue`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the moveToHue logic. When a transition time is specified the implementation uses a
step based to manage the move. The method handled hue and enhanced-Hue changes depending on the last parameter.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `targetHue` | `number` | `undefined` | The target hue value to move to (in range of the matter hue or enhanced hue ranges) |
| `direction` | [`ColorControlDirection`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorControlDirection.md) | `undefined` | The direction to move to the target hue |
| `transitionTime` | `number` | `undefined` | The time in seconds to move to the target hue. 0 means "as fast as possible" |
| `isEnhancedHue` | `boolean` | `false` | If true the enhanced hue is handled, otherwise the normal hue |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:407](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L407)

***

### moveToSaturation()

> **moveToSaturation**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks and potentially switching the color mode it uses the [moveToSaturationLogic](ColorControlServerLogic.md#movetosaturationlogic)
method to set the hue.
If you want to implement own logic just override [moveToSaturationLogic](ColorControlServerLogic.md#movetosaturationlogic) with is also used for
[moveToHueAndSaturation](ColorControlServerLogic.md#movetohueandsaturation).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the saturation is increased or
decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.moveToSaturation`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:589](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L589)

***

### moveToSaturationLogic()

> `protected` **moveToSaturationLogic**(`targetSaturation`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the moveToSaturation logic.
If the managed transition time handling is disabled the method directly sets the new saturation value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `targetSaturation` | `number` | The target saturation value to move to |
| `transitionTime` | `number` | The time in seconds to move to the target saturation. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:607](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L607)

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

`ColorControlServerBase.reactTo`

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

`ColorControlServerBase.requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### setColorMode()

> `private` **setColorMode**(`mode`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Convenient method to change the color mode of the device. It uses [switchColorMode](ColorControlServerLogic.md#switchcolormode) to
convert the current color attributes to the new mode. Override this method for device specific behavior.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1443](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1443)

***

### setEnhancedColorMode()

> `private` **setEnhancedColorMode**(`mode`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Convenient method to change the enhanced color mode of the device. it uses [switchColorMode](ColorControlServerLogic.md#switchcolormode) to
convert the current color attributes to the new mode. Override this method for device specific behavior.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`EnhancedColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md) |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1459](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1459)

***

### startColorLoopLogic()

> `protected` **startColorLoopLogic**(`startHue`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
This method uses [moveHueLogic](ColorControlServerLogic.md#movehuelogic) to start a enhanced color loop and sets the required start hue beforehand.
If this is sufficient for your implementation you might not need to override this method.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `startHue` | `number` | The hue to start the color loop at |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1218)

***

### stepColor()

> **stepColor**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
After the options checks it uses the [stepColorLogic](ColorControlServerLogic.md#stepcolorlogic) method to set the x and y value.
If you want to implement own logic just override [stepColorLogic](ColorControlServerLogic.md#stepcolorlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target values directly. Else the step logic is applied and the x and y is
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Overrides

`ColorControlServerBase.stepColor`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:913](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L913)

***

### stepColorLogic()

> `protected` **stepColorLogic**(`stepX`, `stepY`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the stepColor logic.
If the managed transition time handling is disabled the method directly sets the new x and y values.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `stepX` | `number` | The step size to move the x value up or down |
| `stepY` | `number` | The step size to move the y value up or down |
| `transitionTime` | `number` | The time in seconds to move the x and y. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:932](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L932)

***

### stepColorTemperature()

> **stepColorTemperature**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks and potentially switching the color mode it uses the [stepColorTemperatureLogic](ColorControlServerLogic.md#stepcolortemperaturelogic)
method to set the color temperature.
If you want to implement own logic just override [stepColorTemperatureLogic](ColorControlServerLogic.md#stepcolortemperaturelogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target value directly. Else the step logic is applied and the color temperature is
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.stepColorTemperature`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1356](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1356)

***

### stepColorTemperatureLogic()

> `protected` **stepColorTemperatureLogic**(`stepMode`, `stepSize`, `transitionTime`, `colorTemperatureMinimumMireds`, `colorTemperatureMaximumMireds`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the stepColorTemperature logic.
If the managed transition time handling is disabled the method directly sets the new color temperature value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) | Step Mode to move the color temperature up or down |
| `stepSize` | `number` | Step size to move the color temperature up or down |
| `transitionTime` | `number` | Time in seconds to move the color temperature. 0 means "as fast as possible" |
| `colorTemperatureMinimumMireds` | `number` | Minimum allowed color temperature value |
| `colorTemperatureMaximumMireds` | `number` | Maximum allowed color temperature value |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1409](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1409)

***

### stepHue()

> **stepHue**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks it uses the [stepHueLogic](ColorControlServerLogic.md#stephuelogic) method to set the hue.
If you want to implement own logic just override [stepHueLogic](ColorControlServerLogic.md#stephuelogic) with is also used for [enhancedStepHue](ColorControlServerLogic.md#enhancedstephue).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set to min/max directly. Else the step logic is applied and the hue is increased or decreased
by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.stepHue`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:521](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L521)

***

### stepHueLogic()

> `protected` **stepHueLogic**(`stepMode`, `stepSize`, `transitionTime`, `isEnhancedHue`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the stepHue logic. The method handled hue and enhanced-Hue changes depending on the
last parameter.
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set to current Hue +/- stepSize directly. Else the step logic is applied and the hue is increased
or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) | `undefined` | The step mode to move the hue up or down |
| `stepSize` | `number` | `undefined` | The step size to move the hue up or down |
| `transitionTime` | `number` | `undefined` | The time in seconds to move the hue. 0 means "as fast as possible" |
| `isEnhancedHue` | `boolean` | `false` | If true the enhanced hue is handled, otherwise the normal hue |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:542](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L542)

***

### stepSaturation()

> **stepSaturation**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

Default implementation notes:
After the options checks and potentially switching the color mode it uses the [stepSaturationLogic](ColorControlServerLogic.md#stepsaturationlogic)
method to set the hue.
If you want to implement own logic just override [stepSaturationLogic](ColorControlServerLogic.md#stepsaturationlogic).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set the target values directly. Else the step logic is applied and the hue and saturation are
increased or decreased by the step size every transition time interval.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Overrides

`ColorControlServerBase.stepSaturation`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:683](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L683)

***

### stepSaturationLogic()

> `protected` **stepSaturationLogic**(`stepMode`, `stepSize`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation of the stepSaturation logic.
If the managed transition time handling is disabled the method directly sets the new saturation value.
Otherwise the method initiates a transition with the given rate.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) | The step mode to move the saturation up or down |
| `stepSize` | `number` | The step size to move the saturation up or down |
| `transitionTime` | `number` | The time in seconds to move the saturation. 0 means "as fast as possible" |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:708](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L708)

***

### stopAllColorMovement()

> `protected` **stopAllColorMovement**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
This method is called to stop any color movements potentially in progress, including any x/y, hue, saturation and
color temperature transitions. Override this method with hardware specific logic to implement this functionality.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:865](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L865)

***

### stopColorLoopLogic()

> `protected` **stopColorLoopLogic**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
Implement stopping the color loop here if any special hardware specific logic is needed.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1206)

***

### stopHueAndSaturationMovement()

> `protected` **stopHueAndSaturationMovement**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
This method is called to stop any hue, enhanced hue and/or saturation movements potentially in progress. Override
this method with hardware specific logic to implement this functionality.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:508](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L508)

***

### stopMoveStep()

> **stopMoveStep**(`__namedParameters`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
After the options checks it uses the [stopMoveStepLogic](ColorControlServerLogic.md#stopmovesteplogic) method to stop any ongoing color movement.
If you want to implement own logic just override [stopMoveStepLogic](ColorControlServerLogic.md#stopmovesteplogic).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Overrides

`ColorControlServerBase.stopMoveStep`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1235](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1235)

***

### stopMoveStepLogic()

> `protected` **stopMoveStepLogic**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
Implement stopping any ongoing color movement here if any special hardware specific logic is needed. In fact this
needs to stop any ongoing saturation, color temperature, x or y movement. Hue transitions should only be stopped
when they do not belong to a color loop.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1249)

***

### switchColorMode()

> `protected` **switchColorMode**(`oldMode`, `newMode`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Default implementation notes:
This method is used to switch the device color mode. It converts the current color attributes to the new mode on
a best effort "as close as possible" basis. If the device hardware can do this better this method should be
overridden to implement this switch logic and to update all state attributes for the new mode. The color mode
attribute update itself is handled by the calling method, so is not needed to be done here.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `oldMode` | [`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) | Old color Mode |
| `newMode` | [`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) | New color Mode |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1486](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1486)

***

### syncColorTemperatureWithLevel()

> **syncColorTemperatureWithLevel**(`level`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

This method is used internally to potentially handle the dependency between the ColorControl and LevelControl
cluster.
Do not override this method! Please use the [syncColorTemperatureWithLevelLogic](ColorControlServerLogic.md#synccolortemperaturewithlevellogic) method instead which is
called by this method if a sync is needed.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1597](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1597)

***

### syncColorTemperatureWithLevelLogic()

> `protected` **syncColorTemperatureWithLevelLogic**(`level`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

This method is used internally to potentially handle the dependency between the ColorControl and LevelControl
clusters as defined by the Matter specification. It uses [moveToColorTemperatureLogic](ColorControlServerLogic.md#movetocolortemperaturelogic) with a transition
time of 0 (as fast as possible) to set the determined color temperature. Unless you have special requirements
you do not need to override it.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | The current level value from the LevelControl cluster |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1615](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1615)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`ColorControlServerBase.toString`

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

`ColorControlServerBase.alter`

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

`ColorControlServerBase.enable`

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

`ColorControlServerBase.for`

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

`ColorControlServerBase.set`

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

`ColorControlServerBase.with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
