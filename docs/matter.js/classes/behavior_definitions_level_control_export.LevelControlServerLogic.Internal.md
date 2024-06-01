[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/level-control/export](../modules/behavior_definitions_level_control_export.md) / [LevelControlServerLogic](../modules/behavior_definitions_level_control_export.LevelControlServerLogic.md) / Internal

# Class: Internal

[behavior/definitions/level-control/export](../modules/behavior_definitions_level_control_export.md).[LevelControlServerLogic](../modules/behavior_definitions_level_control_export.LevelControlServerLogic.md).Internal

## Table of contents

### Constructors

- [constructor](behavior_definitions_level_control_export.LevelControlServerLogic.Internal.md#constructor)

### Properties

- [currentTransitionData](behavior_definitions_level_control_export.LevelControlServerLogic.Internal.md#currenttransitiondata)
- [transitionIntervalTimer](behavior_definitions_level_control_export.LevelControlServerLogic.Internal.md#transitionintervaltimer)

## Constructors

### constructor

• **new Internal**(): [`Internal`](behavior_definitions_level_control_export.LevelControlServerLogic.Internal.md)

#### Returns

[`Internal`](behavior_definitions_level_control_export.LevelControlServerLogic.Internal.md)

## Properties

### currentTransitionData

• `Optional` **currentTransitionData**: `Object`

Structure to store the data of the current managed transition

#### Type declaration

| Name | Type |
| :------ | :------ |
| `changeRate` | `number` |
| `options?` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |
| `targetLevel?` | `number` |
| `withOnOff` | `boolean` |

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:571](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L571)

___

### transitionIntervalTimer

• `Optional` **transitionIntervalTimer**: [`Timer`](../interfaces/time_export.Timer.md)

Timer for the managed transition

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:568](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L568)
