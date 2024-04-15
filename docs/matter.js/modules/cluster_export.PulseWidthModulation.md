[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / PulseWidthModulation

# Namespace: PulseWidthModulation

[cluster/export](cluster_export.md).PulseWidthModulation

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.PulseWidthModulation.Feature.md)
- [MoveMode](../enums/cluster_export.PulseWidthModulation.MoveMode.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.PulseWidthModulation.Cluster.md)
- [Complete](../interfaces/cluster_export.PulseWidthModulation.Complete.md)
- [MoveRequest](../interfaces/cluster_export.PulseWidthModulation.MoveRequest.md)
- [MoveToClosestFrequencyRequest](../interfaces/cluster_export.PulseWidthModulation.MoveToClosestFrequencyRequest.md)
- [MoveToLevelRequest](../interfaces/cluster_export.PulseWidthModulation.MoveToLevelRequest.md)
- [StepRequest](../interfaces/cluster_export.PulseWidthModulation.StepRequest.md)
- [StopRequest](../interfaces/cluster_export.PulseWidthModulation.StopRequest.md)

### Variables

- [Base](cluster_export.PulseWidthModulation.md#base)
- [Cluster](cluster_export.PulseWidthModulation.md#cluster)
- [ClusterInstance](cluster_export.PulseWidthModulation.md#clusterinstance)
- [Complete](cluster_export.PulseWidthModulation.md#complete)
- [CompleteInstance](cluster_export.PulseWidthModulation.md#completeinstance)
- [FrequencyComponent](cluster_export.PulseWidthModulation.md#frequencycomponent)
- [LightingComponent](cluster_export.PulseWidthModulation.md#lightingcomponent)
- [Options](cluster_export.PulseWidthModulation.md#options)
- [TlvMoveRequest](cluster_export.PulseWidthModulation.md#tlvmoverequest)
- [TlvMoveToClosestFrequencyRequest](cluster_export.PulseWidthModulation.md#tlvmovetoclosestfrequencyrequest)
- [TlvMoveToLevelRequest](cluster_export.PulseWidthModulation.md#tlvmovetolevelrequest)
- [TlvStepRequest](cluster_export.PulseWidthModulation.md#tlvsteprequest)
- [TlvStopRequest](cluster_export.PulseWidthModulation.md#tlvstoprequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all PulseWidthModulation clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } | - |
| `attributes.currentLevel` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> | The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device dependent. **`See`** MatterSpecification.v11.Cluster § 1.6.5.1 |
| `attributes.defaultMoveRate` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> | The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is received with a null value Rate parameter. **`See`** MatterSpecification.v11.Cluster § 1.6.5.13 |
| `attributes.maxLevel` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> | The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned. **`See`** MatterSpecification.v11.Cluster § 1.6.5.4 |
| `attributes.minLevel` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> | The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned. **`See`** MatterSpecification.v11.Cluster § 1.6.5.3 |
| `attributes.offTransitionTime` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> | The OffTransitionTime attribute represents the time taken to move the current level from the maximum level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime will be used instead. **`See`** MatterSpecification.v11.Cluster § 1.6.5.12 |
| `attributes.onLevel` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> | The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute. **`See`** MatterSpecification.v11.Cluster § 1.6.5.10 |
| `attributes.onOffTransitionTime` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> | The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a second. The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note that if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD NOT be implemented. **`See`** MatterSpecification.v11.Cluster § 1.6.5.9 |
| `attributes.onTransitionTime` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> | The OnTransitionTime attribute represents the time taken to move the current level from the minimum level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime will be used instead. **`See`** MatterSpecification.v11.Cluster § 1.6.5.11 |
| `attributes.options` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | The Options attribute is meant to be changed only during commissioning. The Options attribute is a bitmap that determines the default behavior of some cluster commands. Each command that is dependent on the Options attribute shall first construct a temporary Options bitmap that is in effect during the command processing. The temporary Options bitmap has the same format and meaning as the Options attribute, but includes any bits that may be overridden by command fields. Below is the format and description of the Options attribute and temporary Options bitmap and the effect on dependent commands. Table 19. Options Attribute **`See`** MatterSpecification.v11.Cluster § 1.6.5.8 |
| `commands` | \{ `move`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `step`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stop`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } | - |
| `commands.move` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6.2 |
| `commands.moveToLevel` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6.1 |
| `commands.moveToLevelWithOnOff` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6 |
| `commands.moveWithOnOff` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6 |
| `commands.step` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> | The StepMode field shall be one of the non-reserved values in Values of the StepMode Field. The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second. A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is able. If the device is not able to move at a variable rate, the TransitionTime field may be disregarded. **`See`** MatterSpecification.v11.Cluster § 1.6.6.3 |
| `commands.stepWithOnOff` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6 |
| `commands.stop` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6.4 |
| `commands.stopWithOnOff` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `remainingTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = LightingComponent; `flags`: \{ `lighting`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `maxFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `minFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveToClosestFrequency`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = FrequencyComponent; `flags`: \{ `frequency`: ``true`` = true }  }] | This metadata controls which PulseWidthModulationCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `frequency`: [`BitFlag`](schema_export.md#bitflag) ; `lighting`: [`BitFlag`](schema_export.md#bitflag) ; `onOff`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.frequency` | [`BitFlag`](schema_export.md#bitflag) | Frequency Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency control. |
| `features.lighting` | [`BitFlag`](schema_export.md#bitflag) | Lighting Behavior that supports lighting applications |
| `features.onOff` | [`BitFlag`](schema_export.md#bitflag) | OnOff Dependency with the On/Off cluster |
| `id` | ``28`` | - |
| `name` | ``"PulseWidthModulation"`` | - |
| `revision` | ``5`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L255)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.PulseWidthModulation.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:452](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L452)

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:454](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L454)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `move`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `step`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stop`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `remainingTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = LightingComponent; `flags`: \{ `lighting`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `maxFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `minFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveToClosestFrequency`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = FrequencyComponent; `flags`: \{ `frequency`: ``true`` = true }  }] ; `features`: \{ `frequency`: [`BitFlag`](schema_export.md#bitflag) ; `lighting`: [`BitFlag`](schema_export.md#bitflag) ; `onOff`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``28`` = 0x1c; `name`: ``"PulseWidthModulation"`` = "PulseWidthModulation"; `revision`: ``5`` = 5; `supportedFeatures`: \{ `onOff`: ``true`` = true }  }\>

**`See`**

[Cluster](cluster_export.PulseWidthModulation.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:439](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L439)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.PulseWidthModulation.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:506](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L506)

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:508](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L508)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `currentFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `frequency`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `frequency`: [`BitFlag`](schema_export.md#bitflag) ; `lighting`: [`BitFlag`](schema_export.md#bitflag) ; `onOff`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `maxFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `frequency`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `maxLevel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `minFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `frequency`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `minLevel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `remainingTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `startUpCurrentLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lighting`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `move`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToClosestFrequency`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `frequency`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToLevel`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `step`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stop`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `frequency`: [`BitFlag`](schema_export.md#bitflag) ; `lighting`: [`BitFlag`](schema_export.md#bitflag) ; `onOff`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``28``, ``"ClusterId"``\> = Cluster.id; `name`: ``"PulseWidthModulation"`` = Cluster.name; `revision`: ``5`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.PulseWidthModulation.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:461](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L461)

___

### FrequencyComponent

• `Const` **FrequencyComponent**: `Object`

A PulseWidthModulationCluster supports these elements if it supports feature Frequency.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `maxFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `minFrequency`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } |
| `attributes.currentFrequency` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `attributes.maxFrequency` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `attributes.minFrequency` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `commands` | \{ `moveToClosestFrequency`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } |
| `commands.moveToClosestFrequency` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L188)

___

### LightingComponent

• `Const` **LightingComponent**: `Object`

A PulseWidthModulationCluster supports these elements if it supports feature Lighting.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `remainingTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.remainingTime` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `attributes.startUpCurrentLevel` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L155)

___

### Options

• `Const` **Options**: `Object`

The value of the PulseWidthModulation options attribute

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coupleColorTempToLevel` | [`BitFlag`](schema_export.md#bitflag) |
| `executeIfOff` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L48)

___

### TlvMoveRequest

• `Const` **TlvMoveRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Input to the PulseWidthModulation move command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L84)

___

### TlvMoveToClosestFrequencyRequest

• `Const` **TlvMoveToClosestFrequencyRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the PulseWidthModulation moveToClosestFrequency command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L34)

___

### TlvMoveToLevelRequest

• `Const` **TlvMoveToLevelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Input to the PulseWidthModulation moveToLevel command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L55)

___

### TlvStepRequest

• `Const` **TlvStepRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Input to the PulseWidthModulation step command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L120)

___

### TlvStopRequest

• `Const` **TlvStopRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag)  }\>\>  }\>

Input to the PulseWidthModulation stop command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L140)
