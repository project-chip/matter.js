[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / PulseWidthModulation

# Namespace: PulseWidthModulation

[exports/cluster](exports_cluster.md).PulseWidthModulation

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.PulseWidthModulation.Feature.md)
- [MoveMode](../enums/exports_cluster.PulseWidthModulation.MoveMode.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.PulseWidthModulation.Cluster.md)
- [Complete](../interfaces/exports_cluster.PulseWidthModulation.Complete.md)
- [MoveRequest](../interfaces/exports_cluster.PulseWidthModulation.MoveRequest.md)
- [MoveToClosestFrequencyRequest](../interfaces/exports_cluster.PulseWidthModulation.MoveToClosestFrequencyRequest.md)
- [MoveToLevelRequest](../interfaces/exports_cluster.PulseWidthModulation.MoveToLevelRequest.md)
- [StepRequest](../interfaces/exports_cluster.PulseWidthModulation.StepRequest.md)
- [StopRequest](../interfaces/exports_cluster.PulseWidthModulation.StopRequest.md)

### Variables

- [Base](exports_cluster.PulseWidthModulation.md#base)
- [Cluster](exports_cluster.PulseWidthModulation.md#cluster)
- [ClusterInstance](exports_cluster.PulseWidthModulation.md#clusterinstance)
- [Complete](exports_cluster.PulseWidthModulation.md#complete)
- [CompleteInstance](exports_cluster.PulseWidthModulation.md#completeinstance)
- [FrequencyComponent](exports_cluster.PulseWidthModulation.md#frequencycomponent)
- [LightingComponent](exports_cluster.PulseWidthModulation.md#lightingcomponent)
- [Options](exports_cluster.PulseWidthModulation.md#options)
- [TlvMoveRequest](exports_cluster.PulseWidthModulation.md#tlvmoverequest)
- [TlvMoveToClosestFrequencyRequest](exports_cluster.PulseWidthModulation.md#tlvmovetoclosestfrequencyrequest)
- [TlvMoveToLevelRequest](exports_cluster.PulseWidthModulation.md#tlvmovetolevelrequest)
- [TlvStepRequest](exports_cluster.PulseWidthModulation.md#tlvsteprequest)
- [TlvStopRequest](exports_cluster.PulseWidthModulation.md#tlvstoprequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all PulseWidthModulation clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `maxLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } | - |
| `attributes.currentLevel` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> | The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device dependent. **`See`** MatterSpecification.v11.Cluster § 1.6.5.1 |
| `attributes.defaultMoveRate` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> | The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is received with a null value Rate parameter. **`See`** MatterSpecification.v11.Cluster § 1.6.5.13 |
| `attributes.maxLevel` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> | The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned. **`See`** MatterSpecification.v11.Cluster § 1.6.5.4 |
| `attributes.minLevel` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> | The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned. **`See`** MatterSpecification.v11.Cluster § 1.6.5.3 |
| `attributes.offTransitionTime` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> | The OffTransitionTime attribute represents the time taken to move the current level from the maximum level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime will be used instead. **`See`** MatterSpecification.v11.Cluster § 1.6.5.12 |
| `attributes.onLevel` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> | The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute. **`See`** MatterSpecification.v11.Cluster § 1.6.5.10 |
| `attributes.onOffTransitionTime` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> | The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a second. The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note that if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD NOT be implemented. **`See`** MatterSpecification.v11.Cluster § 1.6.5.9 |
| `attributes.onTransitionTime` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> | The OnTransitionTime attribute represents the time taken to move the current level from the minimum level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime will be used instead. **`See`** MatterSpecification.v11.Cluster § 1.6.5.11 |
| `attributes.options` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | The Options attribute is meant to be changed only during commissioning. The Options attribute is a bitmap that determines the default behavior of some cluster commands. Each command that is dependent on the Options attribute shall first construct a temporary Options bitmap that is in effect during the command processing. The temporary Options bitmap has the same format and meaning as the Options attribute, but includes any bits that may be overridden by command fields. Below is the format and description of the Options attribute and temporary Options bitmap and the effect on dependent commands. Table 19. Options Attribute **`See`** MatterSpecification.v11.Cluster § 1.6.5.8 |
| `commands` | \{ `move`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `step`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `stop`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } | - |
| `commands.move` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6.2 |
| `commands.moveToLevel` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6.1 |
| `commands.moveToLevelWithOnOff` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6 |
| `commands.moveWithOnOff` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6 |
| `commands.step` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | The StepMode field shall be one of the non-reserved values in Values of the StepMode Field. The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second. A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is able. If the device is not able to move at a variable rate, the TransitionTime field may be disregarded. **`See`** MatterSpecification.v11.Cluster § 1.6.6.3 |
| `commands.stepWithOnOff` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6 |
| `commands.stop` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6.4 |
| `commands.stopWithOnOff` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 1.6.6 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `remainingTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `lighting`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `currentFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `maxFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `minFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveToClosestFrequency`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `frequency`: ``true``  }  }] | This metadata controls which PulseWidthModulationCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `frequency`: [`BitFlag`](exports_schema.md#bitflag) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.frequency` | [`BitFlag`](exports_schema.md#bitflag) | Frequency Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency control. |
| `features.lighting` | [`BitFlag`](exports_schema.md#bitflag) | Lighting Behavior that supports lighting applications |
| `features.onOff` | [`BitFlag`](exports_schema.md#bitflag) | OnOff Dependency with the On/Off cluster |
| `id` | ``28`` | - |
| `name` | ``"PulseWidthModulation"`` | - |
| `revision` | ``5`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:248

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.PulseWidthModulation.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:829

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:831

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `maxLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `move`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `step`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `stop`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `remainingTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `lighting`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `currentFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `maxFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `minFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `moveToClosestFrequency`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `frequency`: ``true``  }  }] ; `features`: \{ `frequency`: [`BitFlag`](exports_schema.md#bitflag) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``28`` ; `name`: ``"PulseWidthModulation"`` ; `revision`: ``5`` ; `supportedFeatures`: \{ `onOff`: ``true``  }  }\>

**`See`**

[Cluster](exports_cluster.PulseWidthModulation.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:533

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.PulseWidthModulation.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:1058

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:1060

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `frequency`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `maxFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `frequency`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `minFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `frequency`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `remainingTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `lighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `startUpCurrentLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `lighting`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `move`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToClosestFrequency`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `frequency`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `moveToLevel`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `step`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stepWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `stop`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopWithOnOff`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `frequency`: [`BitFlag`](exports_schema.md#bitflag) ; `lighting`: [`BitFlag`](exports_schema.md#bitflag) ; `onOff`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PulseWidthModulation"`` ; `revision`: ``5``  }\>

**`See`**

[Complete](exports_cluster.PulseWidthModulation.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:835

___

### FrequencyComponent

• `Const` **FrequencyComponent**: `Object`

A PulseWidthModulationCluster supports these elements if it supports feature Frequency.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `maxFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `minFrequency`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } |
| `attributes.currentFrequency` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.maxFrequency` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.minFrequency` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `commands` | \{ `moveToClosestFrequency`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.moveToClosestFrequency` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:186

___

### LightingComponent

• `Const` **LightingComponent**: `Object`

A PulseWidthModulationCluster supports these elements if it supports feature Lighting.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `remainingTime`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.remainingTime` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.startUpCurrentLevel` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:159

___

### Options

• `Const` **Options**: `Object`

The value of the PulseWidthModulation options attribute

**`See`**

MatterSpecification.v11.Cluster § 1.6.5.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coupleColorTempToLevel` | [`BitFlag`](exports_schema.md#bitflag) |
| `executeIfOff` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:33

___

### TlvMoveRequest

• `Const` **TlvMoveRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the PulseWidthModulation move command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:75

___

### TlvMoveToClosestFrequencyRequest

• `Const` **TlvMoveToClosestFrequencyRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the PulseWidthModulation moveToClosestFrequency command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:18

___

### TlvMoveToLevelRequest

• `Const` **TlvMoveToLevelRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the PulseWidthModulation moveToLevel command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:42

___

### TlvStepRequest

• `Const` **TlvStepRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the PulseWidthModulation step command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:114

___

### TlvStopRequest

• `Const` **TlvStopRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the PulseWidthModulation stop command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:139
