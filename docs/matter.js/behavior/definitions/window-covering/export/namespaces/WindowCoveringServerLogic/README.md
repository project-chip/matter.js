[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [behavior/definitions/window-covering/export](../../README.md) / WindowCoveringServerLogic

# Namespace: WindowCoveringServerLogic

## Index

### Classes

- [Internal](classes/Internal.md)
- [State](classes/State.md)

## Variables

### ExtensionInterface

> `const` **ExtensionInterface**: `object`

#### Type declaration

##### executeCalibration()

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### handleMovement()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`MovementType`](../../enumerations/MovementType.md) |
| `reversed` | `boolean` |
| `direction` | [`MovementDirection`](../../enumerations/MovementDirection.md) |
| `targetPercent100ths`? | `number` |

###### Returns

`Promise`\<`void`\>

##### handleStopMovement()

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:722](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L722)
