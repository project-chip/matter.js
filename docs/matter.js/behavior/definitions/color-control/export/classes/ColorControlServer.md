[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/color-control/export](../README.md) / ColorControlServer

# Class: ColorControlServer

## Extends

- [`ClusterBehavior`](../../../../cluster/export/classes/ClusterBehavior.md)\<`this`\> & `Omit`\<[`ColorControlServerLogic`](ColorControlServerLogic.md), `"state"` \| `"initialize"` \| *typeof* `asyncDispose` \| `"events"` \| `"cluster"` \| `"colorLoopSet"` \| `"stopMoveStep"` \| keyof HueSaturation \| keyof Xy \| keyof ColorTemperature \| keyof EnhancedHue \| `"moveToHueLogic"` \| `"moveHueLogic"` \| `"stopHueAndSaturationMovement"` \| `"stepHueLogic"` \| `"moveToSaturationLogic"` \| `"moveSaturationLogic"` \| `"stepSaturationLogic"` \| `"moveToHueAndSaturationLogic"` \| `"moveToColorLogic"` \| `"stopAllColorMovement"` \| `"moveColorLogic"` \| `"stepColorLogic"` \| `"moveToColorTemperatureLogic"` \| `"moveToEnhancedHueAndSaturationLogic"` \| `"stopColorLoopLogic"` \| `"startColorLoopLogic"` \| `"stopMoveStepLogic"` \| `"moveColorTemperatureLogic"` \| `"stepColorTemperatureLogic"` \| `"switchColorMode"` \| `"setColorMode"` \| `"setEnhancedColorMode"` \| `"syncColorTemperatureWithLevelLogic"`\> & `Omit`\<`object` & `object`, `never`\> & `object` & `object`

## Constructors

### new ColorControlServer()

> **new ColorControlServer**(`agent`, `backing`): [`ColorControlServer`](ColorControlServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`ColorControlServer`](ColorControlServer.md)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### colorPointBx

> **colorPointBx**: `undefined` \| `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).colorPointBx`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:338](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L338)

***

### colorPointGx

> **colorPointGx**: `undefined` \| `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).colorPointGx`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:312](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L312)

***

### colorPointGy

> **colorPointGy**: `undefined` \| `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).colorPointGy`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:325](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L325)

***

### colorPointRx

> **colorPointRx**: `undefined` \| `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).colorPointRx`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L286)

***

### colorPointRy

> **colorPointRy**: `undefined` \| `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).colorPointRy`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:299](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L299)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### enhancedHue

> **enhancedHue**: `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).enhancedHue`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:186](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L186)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), readonly [[`HueSaturation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#huesaturation), [`EnhancedHue`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#enhancedhue), [`ColorLoop`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colorloop), [`Xy`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#xy), [`ColorTemperature`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colortemperature)]\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ColorControlInterface`](../README.md#colorcontrolinterface)\>, [`ColorControlInterface`](../README.md#colorcontrolinterface)\>\>, `"colorMode$Changing"` \| `"options$Changing"` \| `"numberOfPrimaries$Changing"` \| `"enhancedColorMode$Changing"` \| `"colorCapabilities$Changing"` \| `"remainingTime$Changing"` \| `"driftCompensation$Changing"` \| `"compensationText$Changing"` \| `"primary1X$Changing"` \| `"primary1Y$Changing"` \| `"primary1Intensity$Changing"` \| `"primary2X$Changing"` \| `"primary2Y$Changing"` \| `"primary2Intensity$Changing"` \| `"primary3X$Changing"` \| `"primary3Y$Changing"` \| `"primary3Intensity$Changing"` \| `"primary4X$Changing"` \| `"primary4Y$Changing"` \| `"primary4Intensity$Changing"` \| `"primary5X$Changing"` \| `"primary5Y$Changing"` \| `"primary5Intensity$Changing"` \| `"primary6X$Changing"` \| `"primary6Y$Changing"` \| `"primary6Intensity$Changing"` \| `"whitePointX$Changing"` \| `"whitePointY$Changing"` \| `"colorPointRx$Changing"` \| `"colorPointRy$Changing"` \| `"colorPointRIntensity$Changing"` \| `"colorPointGx$Changing"` \| `"colorPointGy$Changing"` \| `"colorPointGIntensity$Changing"` \| `"colorPointBx$Changing"` \| `"colorPointBy$Changing"` \| `"colorPointBIntensity$Changing"` \| `"colorMode$Changed"` \| `"options$Changed"` \| `"numberOfPrimaries$Changed"` \| `"enhancedColorMode$Changed"` \| `"colorCapabilities$Changed"` \| `"remainingTime$Changed"` \| `"driftCompensation$Changed"` \| `"compensationText$Changed"` \| `"primary1X$Changed"` \| `"primary1Y$Changed"` \| `"primary1Intensity$Changed"` \| `"primary2X$Changed"` \| `"primary2Y$Changed"` \| `"primary2Intensity$Changed"` \| `"primary3X$Changed"` \| `"primary3Y$Changed"` \| `"primary3Intensity$Changed"` \| `"primary4X$Changed"` \| `"primary4Y$Changed"` \| `"primary4Intensity$Changed"` \| `"primary5X$Changed"` \| `"primary5Y$Changed"` \| `"primary5Intensity$Changed"` \| `"primary6X$Changed"` \| `"primary6Y$Changed"` \| `"primary6Intensity$Changed"` \| `"whitePointX$Changed"` \| `"whitePointY$Changed"` \| `"colorPointRx$Changed"` \| `"colorPointRy$Changed"` \| `"colorPointRIntensity$Changed"` \| `"colorPointGx$Changed"` \| `"colorPointGy$Changed"` \| `"colorPointGIntensity$Changed"` \| `"colorPointBx$Changed"` \| `"colorPointBy$Changed"` \| `"colorPointBIntensity$Changed"` \| `"colorTemperatureMireds$Changing"` \| `"currentHue$Changing"` \| `"currentSaturation$Changing"` \| `"currentX$Changing"` \| `"currentY$Changing"` \| `"colorTempPhysicalMinMireds$Changing"` \| `"colorTempPhysicalMaxMireds$Changing"` \| `"enhancedCurrentHue$Changing"` \| `"colorLoopActive$Changing"` \| `"colorLoopDirection$Changing"` \| `"colorLoopTime$Changing"` \| `"colorLoopStartEnhancedHue$Changing"` \| `"colorLoopStoredEnhancedHue$Changing"` \| `"coupleColorTempToLevelMinMireds$Changing"` \| `"startUpColorTemperatureMireds$Changing"` \| `"colorTemperatureMireds$Changed"` \| `"currentHue$Changed"` \| `"currentSaturation$Changed"` \| `"currentX$Changed"` \| `"currentY$Changed"` \| `"colorTempPhysicalMinMireds$Changed"` \| `"colorTempPhysicalMaxMireds$Changed"` \| `"enhancedCurrentHue$Changed"` \| `"colorLoopActive$Changed"` \| `"colorLoopDirection$Changed"` \| `"colorLoopTime$Changed"` \| `"colorLoopStartEnhancedHue$Changed"` \| `"colorLoopStoredEnhancedHue$Changed"` \| `"coupleColorTempToLevelMinMireds$Changed"` \| `"startUpColorTemperatureMireds$Changed"`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### colorCapabilities$Changing

> **colorCapabilities$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### colorMode$Changing

> **colorMode$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md), `any`\>\>

##### enhancedColorMode$Changing

> **enhancedColorMode$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`EnhancedColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md), `any`\>\>

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

##### whitePointX$Changing

> **whitePointX$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### whitePointY$Changing

> **whitePointY$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

#### Type declaration

##### colorCapabilities$Changed

> **colorCapabilities$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### colorMode$Changed

> **colorMode$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md), `any`\>\>

##### enhancedColorMode$Changed

> **enhancedColorMode$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`EnhancedColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md), `any`\>\>

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

##### whitePointX$Changed

> **whitePointX$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### whitePointY$Changed

> **whitePointY$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: [`FeaturesAsFlags`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featuresasflagsclustertflagst)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), readonly [[`HueSaturation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#huesaturation), [`EnhancedHue`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#enhancedhue), [`ColorLoop`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colorloop), [`Xy`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#xy), [`ColorTemperature`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colortemperature)]\>

Supported features as a flag object.

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### hue

> **hue**: `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).hue`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L174)

***

### kelvin

> **kelvin**: `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).kelvin`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:230](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L230)

***

### maximumColorTemperatureMireds

> **maximumColorTemperatureMireds**: `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).maximumColorTemperatureMireds`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:253](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L253)

***

### minimumColorTemperatureMireds

> **minimumColorTemperatureMireds**: `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).minimumColorTemperatureMireds`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:243](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L243)

***

### mireds

> **mireds**: `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).mireds`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L214)

***

### saturation

> **saturation**: `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).saturation`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L198)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<[`State`](../namespaces/ColorControlServerLogic/classes/State.md), `"options"` \| `"remainingTime"` \| `"colorTemperatureMireds"` \| `"currentHue"` \| `"currentSaturation"` \| `"currentX"` \| `"currentY"` \| `"colorTempPhysicalMinMireds"` \| `"colorTempPhysicalMaxMireds"` \| `"coupleColorTempToLevelMinMireds"` \| `"startUpColorTemperatureMireds"` \| `"enhancedCurrentHue"` \| `"colorLoopActive"` \| `"colorLoopDirection"` \| `"colorLoopTime"` \| `"colorLoopStartEnhancedHue"` \| `"colorLoopStoredEnhancedHue"` \| `"driftCompensation"` \| `"compensationText"` \| `"colorMode"` \| `"numberOfPrimaries"` \| `"primary1X"` \| `"primary1Y"` \| `"primary1Intensity"` \| `"primary2X"` \| `"primary2Y"` \| `"primary2Intensity"` \| `"primary3X"` \| `"primary3Y"` \| `"primary3Intensity"` \| `"primary4X"` \| `"primary4Y"` \| `"primary4Intensity"` \| `"primary5X"` \| `"primary5Y"` \| `"primary5Intensity"` \| `"primary6X"` \| `"primary6Y"` \| `"primary6Intensity"` \| `"whitePointX"` \| `"whitePointY"` \| `"colorPointRx"` \| `"colorPointRy"` \| `"colorPointRIntensity"` \| `"colorPointGx"` \| `"colorPointGy"` \| `"colorPointGIntensity"` \| `"colorPointBx"` \| `"colorPointBy"` \| `"colorPointBIntensity"` \| `"enhancedColorMode"` \| `"colorCapabilities"`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### colorCapabilities

> **colorCapabilities**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the
FeatureMap attribute. All other bits in ColorCapabilities shall be 0.

###### See

MatterSpecification.v11.Cluster § 3.2.7.18

###### Type declaration

###### colorLoop

> **colorLoop**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

###### colorTemperature

> **colorTemperature**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

###### enhancedHue

> **enhancedHue**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

###### hueSaturation

> **hueSaturation**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

###### xy

> **xy**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### colorMode

> **colorMode**: [`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md)

The ColorMode attribute indicates which attributes are currently determining the color of the device.

The value of the ColorMode attribute cannot be written directly - it is set upon reception of any
command in section Commands to the appropriate mode for that command.

Table 39. Values of the ColorMode Attribute

###### See

MatterSpecification.v11.Cluster § 3.2.7.9

##### enhancedColorMode

> **enhancedColorMode**: [`EnhancedColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md)

The EnhancedColorMode attribute specifies which attributes are currently determining the color of the
device, as detailed in Values of the EnhancedColorMode Attribute.

To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate ‘CurrentHue
and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the ColorMode attribute
is changed, e.g., due to one of the standard Color Control cluster commands defined in the ZCL, its new
value shall be copied to the EnhancedColorMode attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.12

##### options

> **options**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

The Options attribute is meant to be changed only during commissioning. The Options attribute is a
bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
the Options attribute shall first construct a temporary Options bitmap that is in effect during the
command processing. The temporary Options bitmap has the same format and meaning as the Options
attribute, but includes any bits that may be overridden by command fields.

Below is the format and description of the Options attribute and temporary Options bitmap and the effect
on dependent commands.

Table 40. Options Attribute

ExecuteIfOff Options bit: Command execution shall NOT continue beyond the Options processing if all of
these criteria are true:

  • The On/Off cluster exists on the same endpoint as this cluster.

  • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE.

  • The value of the ExecuteIfOff bit is 0.

###### See

MatterSpecification.v11.Cluster § 3.2.7.10

###### Type declaration

###### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Type declaration

##### colorPointBIntensity?

> `optional` **colorPointBIntensity**: `null` \| `number`

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointBx?

> `optional` **colorPointBx**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointBy?

> `optional` **colorPointBy**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointGIntensity?

> `optional` **colorPointGIntensity**: `null` \| `number`

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointGx?

> `optional` **colorPointGx**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointGy?

> `optional` **colorPointGy**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### colorPointRIntensity?

> `optional` **colorPointRIntensity**: `null` \| `number`

The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color
point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast
Configuration Cluster), normalized such that the color point with the highest relative intensity
contains the value 0xfe.

A value of null shall indicate an invalid value.

###### See

MatterSpecification.v11.Cluster § 3.2.10.5

##### colorPointRx?

> `optional` **colorPointRx**: `number`

The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX /
65536 (ColorPointRX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.3

##### colorPointRy?

> `optional` **colorPointRy**: `number`

The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY /
65536 (ColorPointRY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.4

##### compensationText?

> `optional` **compensationText**: `string`

The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to

compensate for color/intensity drift over time.

###### See

MatterSpecification.v11.Cluster § 3.2.7.7

##### driftCompensation?

> `optional` **driftCompensation**: [`DriftCompensation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/DriftCompensation.md)

The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
color/intensity drift over time. It shall be one of the non-reserved values in Values of the
DriftCompensation Attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.6

##### remainingTime?

> `optional` **remainingTime**: `number`

The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
command will be complete.

###### See

MatterSpecification.v11.Cluster § 3.2.7.3

##### whitePointX?

> `optional` **whitePointX**: `number`

The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / 65536
(WhitePointX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.1

##### whitePointY?

> `optional` **whitePointY**: `number`

The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / 65536
(WhitePointY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.2

#### Type declaration

##### numberOfPrimaries

> **numberOfPrimaries**: `null` \| `number`

The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
value of null shall indicate that the number of primaries is unknown.

Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
optional.

###### See

MatterSpecification.v11.Cluster § 3.2.8.1

#### Type declaration

##### primary1Intensity?

> `optional` **primary1Intensity**: `null` \| `number`

The Primary1intensity attribute contains a representation of the maximum intensity of this primary as
defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration
Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xfe.

A value of null shall indicate that this primary is not available.

###### See

MatterSpecification.v11.Cluster § 3.2.8.4

##### primary1X?

> `optional` **primary1X**: `number`

The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the
CIE xyY Color Space.

The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536
(Primary1X in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.2

##### primary1Y?

> `optional` **primary1Y**: `number`

The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the
CIE xyY Color Space.

The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536
(Primary1Y in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.3

##### primary2Intensity?

> `optional` **primary2Intensity**: `null` \| `number`

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary2X?

> `optional` **primary2X**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary2Y?

> `optional` **primary2Y**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary3Intensity?

> `optional` **primary3Intensity**: `null` \| `number`

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary3X?

> `optional` **primary3X**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary3Y?

> `optional` **primary3Y**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### primary4Intensity?

> `optional` **primary4Intensity**: `null` \| `number`

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary4X?

> `optional` **primary4X**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary4Y?

> `optional` **primary4Y**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary5Intensity?

> `optional` **primary5Intensity**: `null` \| `number`

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary5X?

> `optional` **primary5X**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary5Y?

> `optional` **primary5Y**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary6Intensity?

> `optional` **primary6Intensity**: `null` \| `number`

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary6X?

> `optional` **primary6X**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### primary6Y?

> `optional` **primary6Y**: `number`

###### See

MatterSpecification.v11.Cluster § 3.2.9

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).state`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

***

### whitePointX

> **whitePointX**: `undefined` \| `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).whitePointX`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:260](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L260)

***

### whitePointY

> **whitePointY**: `undefined` \| `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).whitePointY`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:273](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L273)

***

### x

> **x**: `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).x`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L146)

***

### y

> **y**: `number`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).y`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L159)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ColorControlServerLogic`](../namespaces/ColorControlServerLogic/README.md)\>

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### ExtensionInterface

> `static` `readonly` **ExtensionInterface**: `object`

#### moveColorLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `rateX` | `number` |
| `rateY` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### moveColorTemperatureLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |
| `rate` | `number` |
| `colorTemperatureMinimumMireds` | `number` |
| `colorTemperatureMaximumMireds` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### moveHueLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |
| `rate` | `number` |
| `isEnhancedHue` | `boolean` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### moveSaturationLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |
| `rate` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### moveToColorLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetX` | `number` |
| `targetY` | `number` |
| `transitionTime` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### moveToColorTemperatureLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetMireds` | `number` |
| `transitionTime` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### moveToEnhancedHueAndSaturationLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetEnhancedHue` | `number` |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### moveToHueAndSaturationLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetHue` | `number` |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### moveToHueLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetHue` | `number` |
| `direction` | [`ColorControlDirection`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorControlDirection.md) |
| `transitionTime` | `number` |
| `isEnhancedHue` | `boolean` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### moveToSaturationLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### setColorMode()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### setEnhancedColorMode()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`EnhancedColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md) |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### startColorLoopLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `startHue` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### stepColorLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepX` | `number` |
| `stepY` | `number` |
| `transitionTime` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### stepColorTemperatureLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |
| `colorTemperatureMinimumMireds` | `number` |
| `colorTemperatureMaximumMireds` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### stepHueLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |
| `isEnhancedHue` | `boolean` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### stepSaturationLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### stopAllColorMovement()

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### stopColorLoopLogic()

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### stopHueAndSaturationMovement()

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### stopMoveStepLogic()

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### switchColorMode()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `oldMode` | [`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) |
| `newMode` | [`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### syncColorTemperatureWithLevelLogic()

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `number` |

##### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).ExtensionInterface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

***

### Interface

> `static` `readonly` **Interface**: [`ColorControlInterface`](../README.md#colorcontrolinterface)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### Internal

> `static` `readonly` **Internal**: *typeof* [`Internal`](../namespaces/ColorControlServerLogic/classes/Internal.md)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).Internal`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

***

### State()

> `static` `readonly` **State**: () => [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ColorControlServerLogic`](../namespaces/ColorControlServerLogic/README.md)\>

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ColorControlServerLogic`](../namespaces/ColorControlServerLogic/README.md)\>

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).State`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

***

### cluster

> `static` `readonly` **cluster**: [`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.colorCapabilities

> `readonly` **colorCapabilities**: [`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of the
FeatureMap attribute. All other bits in ColorCapabilities shall be 0.

###### See

MatterSpecification.v11.Cluster § 3.2.7.18

##### attributes.colorMode

> `readonly` **colorMode**: [`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md), `any`\>

The ColorMode attribute indicates which attributes are currently determining the color of the device.

The value of the ColorMode attribute cannot be written directly - it is set upon reception of any
command in section Commands to the appropriate mode for that command.

Table 39. Values of the ColorMode Attribute

###### See

MatterSpecification.v11.Cluster § 3.2.7.9

##### attributes.colorPointBIntensity

> `readonly` **colorPointBIntensity**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointBx

> `readonly` **colorPointBx**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointBy

> `readonly` **colorPointBy**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGIntensity

> `readonly` **colorPointGIntensity**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGx

> `readonly` **colorPointGx**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointGy

> `readonly` **colorPointGy**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.10

##### attributes.colorPointRIntensity

> `readonly` **colorPointRIntensity**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color
point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast
Configuration Cluster), normalized such that the color point with the highest relative intensity
contains the value 0xfe.

A value of null shall indicate an invalid value.

###### See

MatterSpecification.v11.Cluster § 3.2.10.5

##### attributes.colorPointRx

> `readonly` **colorPointRx**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX /
65536 (ColorPointRX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.3

##### attributes.colorPointRy

> `readonly` **colorPointRy**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the red color point of the device.

The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY /
65536 (ColorPointRY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.4

##### attributes.compensationText

> `readonly` **compensationText**: [`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`string`, `any`\>

The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to

compensate for color/intensity drift over time.

###### See

MatterSpecification.v11.Cluster § 3.2.7.7

##### attributes.driftCompensation

> `readonly` **driftCompensation**: [`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`DriftCompensation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/DriftCompensation.md), `any`\>

The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
color/intensity drift over time. It shall be one of the non-reserved values in Values of the
DriftCompensation Attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.6

##### attributes.enhancedColorMode

> `readonly` **enhancedColorMode**: [`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`EnhancedColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md), `any`\>

The EnhancedColorMode attribute specifies which attributes are currently determining the color of the
device, as detailed in Values of the EnhancedColorMode Attribute.

To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate ‘CurrentHue
and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the ColorMode attribute
is changed, e.g., due to one of the standard Color Control cluster commands defined in the ZCL, its new
value shall be copied to the EnhancedColorMode attribute.

###### See

MatterSpecification.v11.Cluster § 3.2.7.12

##### attributes.numberOfPrimaries

> `readonly` **numberOfPrimaries**: [`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
value of null shall indicate that the number of primaries is unknown.

Where this attribute is implemented, the attributes below for indicating the “x” and “y” color values of
the primaries shall also be implemented for each of the primaries from 1 to NumberOfPrimaries, without
leaving gaps. Implementation of the Primary1Intensity attribute and subsequent intensity attributes is
optional.

###### See

MatterSpecification.v11.Cluster § 3.2.8.1

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The Options attribute is meant to be changed only during commissioning. The Options attribute is a
bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
the Options attribute shall first construct a temporary Options bitmap that is in effect during the
command processing. The temporary Options bitmap has the same format and meaning as the Options
attribute, but includes any bits that may be overridden by command fields.

Below is the format and description of the Options attribute and temporary Options bitmap and the effect
on dependent commands.

Table 40. Options Attribute

ExecuteIfOff Options bit: Command execution shall NOT continue beyond the Options processing if all of
these criteria are true:

  • The On/Off cluster exists on the same endpoint as this cluster.

  • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE.

  • The value of the ExecuteIfOff bit is 0.

###### See

MatterSpecification.v11.Cluster § 3.2.7.10

##### attributes.primary1Intensity

> `readonly` **primary1Intensity**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

The Primary1intensity attribute contains a representation of the maximum intensity of this primary as
defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration
Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xfe.

A value of null shall indicate that this primary is not available.

###### See

MatterSpecification.v11.Cluster § 3.2.8.4

##### attributes.primary1X

> `readonly` **primary1X**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the
CIE xyY Color Space.

The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536
(Primary1X in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.2

##### attributes.primary1Y

> `readonly` **primary1Y**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the
CIE xyY Color Space.

The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536
(Primary1Y in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.8.3

##### attributes.primary2Intensity

> `readonly` **primary2Intensity**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary2X

> `readonly` **primary2X**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary2Y

> `readonly` **primary2Y**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3Intensity

> `readonly` **primary3Intensity**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3X

> `readonly` **primary3X**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary3Y

> `readonly` **primary3Y**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.8

##### attributes.primary4Intensity

> `readonly` **primary4Intensity**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary4X

> `readonly` **primary4X**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary4Y

> `readonly` **primary4Y**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5Intensity

> `readonly` **primary5Intensity**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5X

> `readonly` **primary5X**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary5Y

> `readonly` **primary5Y**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6Intensity

> `readonly` **primary6Intensity**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`null` \| `number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6X

> `readonly` **primary6X**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.primary6Y

> `readonly` **primary6Y**: [`OptionalFixedAttribute`](../../../../../cluster/export/interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Cluster § 3.2.9

##### attributes.remainingTime

> `readonly` **remainingTime**: [`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
command will be complete.

###### See

MatterSpecification.v11.Cluster § 3.2.7.3

##### attributes.whitePointX

> `readonly` **whitePointX**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / 65536
(WhitePointX in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.1

##### attributes.whitePointY

> `readonly` **whitePointY**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
Space, of the current white point of the device.

The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / 65536
(WhitePointY in the range 0 to 65279 inclusive)

###### See

MatterSpecification.v11.Cluster § 3.2.10.2

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which ColorControlCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.colorLoop

> `readonly` **colorLoop**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

ColorLoop

Color loop is supported.

##### features.colorTemperature

> `readonly` **colorTemperature**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

ColorTemperature

Supports specification of color temperature.

##### features.enhancedHue

> `readonly` **enhancedHue**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

EnhancedHue

Enhanced hue is supported.

##### features.hueSaturation

> `readonly` **hueSaturation**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

HueSaturation

Supports color specification via hue/saturation.

##### features.xy

> `readonly` **xy**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Xy

Supports color specification via XY.

##### id

> `readonly` **id**: `768` = `0x300`

##### name

> `readonly` **name**: `"ColorControl"` = `"ColorControl"`

##### revision

> `readonly` **revision**: `5` = `5`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ColorControlServerLogic`](../namespaces/ColorControlServerLogic/README.md)\>

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"colorControl"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).supervisor`

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).[asyncDispose]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L198)

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).asAdmin`

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).assertAttributeEnabled`

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).callback`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### initialize()

> **initialize**(`_options`?): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_options`? | `object` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).initialize`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L192)

***

### moveColorLogic()

> **moveColorLogic**(`rateX`, `rateY`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rateX` | `number` |
| `rateY` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveColorLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2202)

***

### moveColorTemperatureLogic()

> **moveColorTemperatureLogic**(`moveMode`, `rate`, `colorTemperatureMinimumMireds`, `colorTemperatureMaximumMireds`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |
| `rate` | `number` |
| `colorTemperatureMinimumMireds` | `number` |
| `colorTemperatureMaximumMireds` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveColorTemperatureLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2213)

***

### moveHueLogic()

> **moveHueLogic**(`moveMode`, `rate`, `isEnhancedHue`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |
| `rate` | `number` |
| `isEnhancedHue` | `boolean` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveHueLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2188)

***

### moveSaturationLogic()

> **moveSaturationLogic**(`moveMode`, `rate`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |
| `rate` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveSaturationLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2197](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2197)

***

### moveToColorLogic()

> **moveToColorLogic**(`targetX`, `targetY`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetX` | `number` |
| `targetY` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToColorLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2200](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2200)

***

### moveToColorTemperatureLogic()

> **moveToColorTemperatureLogic**(`targetMireds`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetMireds` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToColorTemperatureLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2204](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2204)

***

### moveToEnhancedHueAndSaturationLogic()

> **moveToEnhancedHueAndSaturationLogic**(`targetEnhancedHue`, `targetSaturation`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetEnhancedHue` | `number` |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToEnhancedHueAndSaturationLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2205](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2205)

***

### moveToHueAndSaturationLogic()

> **moveToHueAndSaturationLogic**(`targetHue`, `targetSaturation`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetHue` | `number` |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToHueAndSaturationLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2199)

***

### moveToHueLogic()

> **moveToHueLogic**(`targetHue`, `direction`, `transitionTime`, `isEnhancedHue`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetHue` | `number` |
| `direction` | [`ColorControlDirection`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorControlDirection.md) |
| `transitionTime` | `number` |
| `isEnhancedHue` | `boolean` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToHueLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2182](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2182)

***

### moveToSaturationLogic()

> **moveToSaturationLogic**(`targetSaturation`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).moveToSaturationLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2196](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2196)

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).reactTo`

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### setColorMode()

> **setColorMode**(`mode`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).setColorMode`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2227)

***

### setEnhancedColorMode()

> **setEnhancedColorMode**(`mode`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`EnhancedColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md) |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).setEnhancedColorMode`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2228)

***

### startColorLoopLogic()

> **startColorLoopLogic**(`startHue`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `startHue` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).startColorLoopLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2211](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2211)

***

### stepColorLogic()

> **stepColorLogic**(`stepX`, `stepY`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepX` | `number` |
| `stepY` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stepColorLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2203)

***

### stepColorTemperatureLogic()

> **stepColorTemperatureLogic**(`stepMode`, `stepSize`, `transitionTime`, `colorTemperatureMinimumMireds`, `colorTemperatureMaximumMireds`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |
| `colorTemperatureMinimumMireds` | `number` |
| `colorTemperatureMaximumMireds` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stepColorTemperatureLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2219](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2219)

***

### stepHueLogic()

> **stepHueLogic**(`stepMode`, `stepSize`, `transitionTime`, `isEnhancedHue`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |
| `isEnhancedHue` | `boolean` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stepHueLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2190](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2190)

***

### stepSaturationLogic()

> **stepSaturationLogic**(`stepMode`, `stepSize`, `transitionTime`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stepSaturationLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2198)

***

### stopAllColorMovement()

> **stopAllColorMovement**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stopAllColorMovement`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2201)

***

### stopColorLoopLogic()

> **stopColorLoopLogic**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stopColorLoopLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2210](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2210)

***

### stopHueAndSaturationMovement()

> **stopHueAndSaturationMovement**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stopHueAndSaturationMovement`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2189)

***

### stopMoveStepLogic()

> **stopMoveStepLogic**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).stopMoveStepLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2212)

***

### switchColorMode()

> **switchColorMode**(`oldMode`, `newMode`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `oldMode` | [`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) |
| `newMode` | [`ColorMode`](../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).switchColorMode`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2226)

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

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).syncColorTemperatureWithLevel`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:1597](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L1597)

***

### syncColorTemperatureWithLevelLogic()

> **syncColorTemperatureWithLevelLogic**(`level`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).syncColorTemperatureWithLevelLogic`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2229](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2229)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).toString`

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).alter`

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).enable`

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).for`

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).set`

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

`ColorControlServerLogic.for(ClusterType(ColorControl.Base)).with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
