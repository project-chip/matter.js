[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/level-control/export](../../../README.md) / [LevelControlServerLogic](../README.md) / Internal

# Class: Internal

## Constructors

### new Internal()

> **new Internal**(): [`Internal`](Internal.md)

#### Returns

[`Internal`](Internal.md)

## Properties

### currentTransitionData?

> `optional` **currentTransitionData**: `object`

Structure to store the data of the current managed transition

#### changeRate

> **changeRate**: `number`

#### options?

> `optional` **options**: [`TypeFromPartialBitSchema`](../../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

##### Type declaration

###### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

###### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../../../schema/export/README.md#bitflag)

#### targetLevel?

> `optional` **targetLevel**: `number`

#### withOnOff

> **withOnOff**: `boolean`

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:571](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L571)

***

### transitionIntervalTimer?

> `optional` **transitionIntervalTimer**: [`Timer`](../../../../../../../time/export/interfaces/Timer.md)

Timer for the managed transition

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:568](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L568)
