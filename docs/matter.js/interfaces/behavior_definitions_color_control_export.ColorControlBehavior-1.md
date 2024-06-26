[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / ColorControlBehavior

# Interface: ColorControlBehavior

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).ColorControlBehavior

## Hierarchy

- [`ColorControlBehaviorType`](../modules/behavior_definitions_color_control_export._internal_.md#colorcontrolbehaviortype)

  ↳ **`ColorControlBehavior`**

## Table of contents

### Properties

- [#agent](behavior_definitions_color_control_export.ColorControlBehavior-1.md##agent)
- [[reference]](behavior_definitions_color_control_export.ColorControlBehavior-1.md#[reference])
- [agent](behavior_definitions_color_control_export.ColorControlBehavior-1.md#agent)
- [cluster](behavior_definitions_color_control_export.ColorControlBehavior-1.md#cluster)
- [context](behavior_definitions_color_control_export.ColorControlBehavior-1.md#context)
- [endpoint](behavior_definitions_color_control_export.ColorControlBehavior-1.md#endpoint)
- [events](behavior_definitions_color_control_export.ColorControlBehavior-1.md#events)
- [features](behavior_definitions_color_control_export.ColorControlBehavior-1.md#features)
- [session](behavior_definitions_color_control_export.ColorControlBehavior-1.md#session)
- [state](behavior_definitions_color_control_export.ColorControlBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_color_control_export.ColorControlBehavior-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_color_control_export.ColorControlBehavior-1.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_color_control_export.ColorControlBehavior-1.md#assertattributeenabled)
- [callback](behavior_definitions_color_control_export.ColorControlBehavior-1.md#callback)
- [initialize](behavior_definitions_color_control_export.ColorControlBehavior-1.md#initialize)
- [reactTo](behavior_definitions_color_control_export.ColorControlBehavior-1.md#reactto)
- [requireAttributeEnabled](behavior_definitions_color_control_export.ColorControlBehavior-1.md#requireattributeenabled)
- [toString](behavior_definitions_color_control_export.ColorControlBehavior-1.md#tostring)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ColorControlBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

ColorControlBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ColorControlBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

ColorControlBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

ColorControlBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

ColorControlBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `colorCapabilities$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `colorMode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\>\> ; `enhancedColorMode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\>\> ; `numberOfPrimaries$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `colorPointBIntensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointBx$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointBy$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGIntensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointGx$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGy$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRIntensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointRx$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRy$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `compensationText$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`string`, `any`\>\> ; `driftCompensation$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\>\> ; `primary1Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary1X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary1Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary2X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary3X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary4X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary5X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Intensity$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary6X$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Y$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `remainingTime$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `whitePointX$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `whitePointY$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\>  } & \{ `colorCapabilities$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `colorMode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `any`\>\> ; `enhancedColorMode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md), `any`\>\> ; `numberOfPrimaries$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `colorPointBIntensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointBx$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointBy$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGIntensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointGx$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointGy$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRIntensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `colorPointRx$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `colorPointRy$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `compensationText$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`string`, `any`\>\> ; `driftCompensation$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md), `any`\>\> ; `primary1Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary1X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary1Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary2X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary2Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary3X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary3Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary4X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary4Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary5X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary5Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Intensity$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `primary6X$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `primary6Y$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `remainingTime$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `whitePointX$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `whitePointY$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

ColorControlBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

ColorControlBehaviorType.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### session

• **session**: [`SecureSession`](../classes/session_export.SecureSession.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

ColorControlBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `colorCapabilities`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `colorLoop`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `colorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enhancedHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hueSaturation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `xy`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `colorMode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md) ; `enhancedColorMode`: [`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md) ; `options`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>  } & \{ `colorPointBIntensity?`: ``null`` \| `number` ; `colorPointBx?`: `number` ; `colorPointBy?`: `number` ; `colorPointGIntensity?`: ``null`` \| `number` ; `colorPointGx?`: `number` ; `colorPointGy?`: `number` ; `colorPointRIntensity?`: ``null`` \| `number` ; `colorPointRx?`: `number` ; `colorPointRy?`: `number` ; `compensationText?`: `string` ; `driftCompensation?`: [`DriftCompensation`](../enums/cluster_export.ColorControl.DriftCompensation.md) ; `remainingTime?`: `number` ; `whitePointX?`: `number` ; `whitePointY?`: `number`  } & \{ `numberOfPrimaries`: ``null`` \| `number`  } & \{ `primary1Intensity?`: ``null`` \| `number` ; `primary1X?`: `number` ; `primary1Y?`: `number` ; `primary2Intensity?`: ``null`` \| `number` ; `primary2X?`: `number` ; `primary2Y?`: `number` ; `primary3Intensity?`: ``null`` \| `number` ; `primary3X?`: `number` ; `primary3Y?`: `number` ; `primary4Intensity?`: ``null`` \| `number` ; `primary4X?`: `number` ; `primary4Y?`: `number` ; `primary5Intensity?`: ``null`` \| `number` ; `primary5X?`: `number` ; `primary5Y?`: `number` ; `primary6Intensity?`: ``null`` \| `number` ; `primary6X?`: `number` ; `primary6Y?`: `number`  }

Access the behavior's state.

#### Inherited from

ColorControlBehaviorType.state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:311](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L311)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlBehaviorType.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L198)

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

ColorControlBehaviorType.asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### assertAttributeEnabled

▸ **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](../classes/behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

ColorControlBehaviorType.assertAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

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
| `options?` | [`Options`](behavior_export.Reactor.Options.md) |

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

ColorControlBehaviorType.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### initialize

▸ **initialize**(`_options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ColorControlBehaviorType.initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

ColorControlBehaviorType.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### requireAttributeEnabled

▸ **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](../classes/behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Inherited from

ColorControlBehaviorType.requireAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

ColorControlBehaviorType.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L203)
