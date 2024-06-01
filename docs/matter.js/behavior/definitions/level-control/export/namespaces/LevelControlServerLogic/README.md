[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [behavior/definitions/level-control/export](../../README.md) / LevelControlServerLogic

# Namespace: LevelControlServerLogic

## Index

### Classes

- [Internal](classes/Internal.md)
- [State](classes/State.md)

## Variables

### ExtensionInterface

> `const` **ExtensionInterface**: `object`

#### Type declaration

##### handleOnOffChange()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `onOff` | `boolean` |

###### Returns

`void`

##### moveLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/MoveMode.md) |
| `rate` | `null` \| `number` |
| `withOnOff` | `boolean` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)\<`void`\>

##### moveToLevelLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `number` |
| `transitionTime` | `null` \| `number` |
| `withOnOff` | `boolean` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)\<`void`\>

##### setLevel()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `number` |
| `withOnOff` | `boolean` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)\<`void`\>

##### setRemainingTime()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `remainingTime` | `number` |

###### Returns

`void`

##### stepLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../../cluster/export/namespaces/LevelControl/enumerations/StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `null` \| `number` |
| `withOnOff` | `boolean` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)\<`void`\>

##### stopLogic()

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:590](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L590)
