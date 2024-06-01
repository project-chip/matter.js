[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/level-control/export](../modules/behavior_definitions_level_control_export.md) / LevelControlServer

# Class: LevelControlServer

[behavior/definitions/level-control/export](../modules/behavior_definitions_level_control_export.md).LevelControlServer

## Hierarchy

- [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior-1.md)\<`this`\> & `Omit`\<[`LevelControlServerLogic`](behavior_definitions_level_control_export.LevelControlServerLogic-1.md), ``"state"`` \| ``"initialize"`` \| typeof `asyncDispose` \| ``"events"`` \| ``"cluster"`` \| keyof Base \| ``"moveToLevelLogic"`` \| ``"moveLogic"`` \| ``"stepLogic"`` \| ``"stopLogic"`` \| ``"setLevel"`` \| ``"setRemainingTime"`` \| ``"handleOnOffChange"``\> & [`Base`](../interfaces/behavior_definitions_level_control_export.LevelControlInterface.Base.md) & `Omit`\<\{ `move`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `void`, `any`\>\> ; `moveToLevel`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `void`, `any`\>\> ; `moveToLevelWithOnOff`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `void`, `any`\>\> ; `moveWithOnOff`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `void`, `any`\>\> ; `step`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `void`, `any`\>\> ; `stepWithOnOff`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `void`, `any`\>\> ; `stop`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\>  }\>, `void`, `any`\>\> ; `stopWithOnOff`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\>  }\>, `void`, `any`\>\>  } & {}, keyof [`Base`](../interfaces/behavior_definitions_level_control_export.LevelControlInterface.Base.md)\> & \{ `handleOnOffChange`: (`onOff`: `boolean`) => `void` ; `moveLogic`: (`moveMode`: [`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md), `rate`: ``null`` \| `number`, `withOnOff`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> ; `moveToLevelLogic`: (`level`: `number`, `transitionTime`: ``null`` \| `number`, `withOnOff`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> ; `setLevel`: (`level`: `number`, `withOnOff`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> ; `setRemainingTime`: (`remainingTime`: `number`) => `void` ; `stepLogic`: (`stepMode`: [`StepMode`](../enums/cluster_export.LevelControl.StepMode.md), `stepSize`: `number`, `transitionTime`: ``null`` \| `number`, `withOnOff`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> ; `stopLogic`: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>  } & \{ `cluster`: [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff)]\> ; `events`: [`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff)]\>, typeof [`LevelControlServerLogic`](../modules/behavior_definitions_level_control_export.LevelControlServerLogic.md)\> ; `features`: [`FeaturesAsFlags`](../modules/cluster_export.ClusterComposer.md#featuresasflags)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff)]\> ; `state`: [`ClusterState`](../modules/behavior_cluster_export.md#clusterstate)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff)]\>, typeof [`LevelControlServerLogic`](../modules/behavior_definitions_level_control_export.LevelControlServerLogic.md)\> ; `[asyncDispose]`: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>  }

  ↳ **`LevelControlServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_level_control_export.LevelControlServer.md#constructor)

### Properties

- [#agent](behavior_definitions_level_control_export.LevelControlServer.md##agent)
- [[reference]](behavior_definitions_level_control_export.LevelControlServer.md#[reference])
- [agent](behavior_definitions_level_control_export.LevelControlServer.md#agent)
- [cluster](behavior_definitions_level_control_export.LevelControlServer.md#cluster)
- [context](behavior_definitions_level_control_export.LevelControlServer.md#context)
- [currentLevel](behavior_definitions_level_control_export.LevelControlServer.md#currentlevel)
- [endpoint](behavior_definitions_level_control_export.LevelControlServer.md#endpoint)
- [events](behavior_definitions_level_control_export.LevelControlServer.md#events)
- [features](behavior_definitions_level_control_export.LevelControlServer.md#features)
- [maxLevel](behavior_definitions_level_control_export.LevelControlServer.md#maxlevel)
- [minLevel](behavior_definitions_level_control_export.LevelControlServer.md#minlevel)
- [session](behavior_definitions_level_control_export.LevelControlServer.md#session)
- [state](behavior_definitions_level_control_export.LevelControlServer.md#state)
- [Events](behavior_definitions_level_control_export.LevelControlServer.md#events-1)
- [ExtensionInterface](behavior_definitions_level_control_export.LevelControlServer.md#extensioninterface)
- [Interface](behavior_definitions_level_control_export.LevelControlServer.md#interface)
- [Internal](behavior_definitions_level_control_export.LevelControlServer.md#internal)
- [State](behavior_definitions_level_control_export.LevelControlServer.md#state-1)
- [cluster](behavior_definitions_level_control_export.LevelControlServer.md#cluster-1)
- [defaults](behavior_definitions_level_control_export.LevelControlServer.md#defaults)
- [dependencies](behavior_definitions_level_control_export.LevelControlServer.md#dependencies)
- [early](behavior_definitions_level_control_export.LevelControlServer.md#early)
- [id](behavior_definitions_level_control_export.LevelControlServer.md#id)
- [name](behavior_definitions_level_control_export.LevelControlServer.md#name)
- [schema](behavior_definitions_level_control_export.LevelControlServer.md#schema)
- [supervisor](behavior_definitions_level_control_export.LevelControlServer.md#supervisor)
- [supports](behavior_definitions_level_control_export.LevelControlServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_level_control_export.LevelControlServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_level_control_export.LevelControlServer.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_level_control_export.LevelControlServer.md#assertattributeenabled)
- [callback](behavior_definitions_level_control_export.LevelControlServer.md#callback)
- [handleOnOffChange](behavior_definitions_level_control_export.LevelControlServer.md#handleonoffchange)
- [initialize](behavior_definitions_level_control_export.LevelControlServer.md#initialize)
- [move](behavior_definitions_level_control_export.LevelControlServer.md#move)
- [moveLogic](behavior_definitions_level_control_export.LevelControlServer.md#movelogic)
- [moveToLevel](behavior_definitions_level_control_export.LevelControlServer.md#movetolevel)
- [moveToLevelLogic](behavior_definitions_level_control_export.LevelControlServer.md#movetolevellogic)
- [moveToLevelWithOnOff](behavior_definitions_level_control_export.LevelControlServer.md#movetolevelwithonoff)
- [moveWithOnOff](behavior_definitions_level_control_export.LevelControlServer.md#movewithonoff)
- [reactTo](behavior_definitions_level_control_export.LevelControlServer.md#reactto)
- [requireAttributeEnabled](behavior_definitions_level_control_export.LevelControlServer.md#requireattributeenabled)
- [setLevel](behavior_definitions_level_control_export.LevelControlServer.md#setlevel)
- [setRemainingTime](behavior_definitions_level_control_export.LevelControlServer.md#setremainingtime)
- [step](behavior_definitions_level_control_export.LevelControlServer.md#step)
- [stepLogic](behavior_definitions_level_control_export.LevelControlServer.md#steplogic)
- [stepWithOnOff](behavior_definitions_level_control_export.LevelControlServer.md#stepwithonoff)
- [stop](behavior_definitions_level_control_export.LevelControlServer.md#stop)
- [stopLogic](behavior_definitions_level_control_export.LevelControlServer.md#stoplogic)
- [stopWithOnOff](behavior_definitions_level_control_export.LevelControlServer.md#stopwithonoff)
- [toString](behavior_definitions_level_control_export.LevelControlServer.md#tostring)
- [alter](behavior_definitions_level_control_export.LevelControlServer.md#alter)
- [enable](behavior_definitions_level_control_export.LevelControlServer.md#enable)
- [for](behavior_definitions_level_control_export.LevelControlServer.md#for)
- [set](behavior_definitions_level_control_export.LevelControlServer.md#set)
- [with](behavior_definitions_level_control_export.LevelControlServer.md#with)

## Constructors

### constructor

• **new LevelControlServer**(`agent`, `backing`): [`LevelControlServer`](behavior_definitions_level_control_export.LevelControlServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`LevelControlServer`](behavior_definitions_level_control_export.LevelControlServer.md)

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### currentLevel

• **currentLevel**: `number`

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).currentLevel

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:84](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L84)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](../modules/behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](../modules/behavior_definitions_level_control_export.md#levelcontrolinterface)\>\>, ``"options$Changing"`` \| ``"remainingTime$Changing"`` \| ``"options$Changed"`` \| ``"remainingTime$Changed"`` \| ``"currentLevel$Changing"`` \| ``"onLevel$Changing"`` \| ``"minLevel$Changing"`` \| ``"maxLevel$Changing"`` \| ``"onOffTransitionTime$Changing"`` \| ``"onTransitionTime$Changing"`` \| ``"offTransitionTime$Changing"`` \| ``"defaultMoveRate$Changing"`` \| ``"currentLevel$Changed"`` \| ``"onLevel$Changed"`` \| ``"minLevel$Changed"`` \| ``"maxLevel$Changed"`` \| ``"onOffTransitionTime$Changed"`` \| ``"onTransitionTime$Changed"`` \| ``"offTransitionTime$Changed"`` \| ``"defaultMoveRate$Changed"`` \| ``"startUpCurrentLevel$Changing"`` \| ``"startUpCurrentLevel$Changed"``\> & \{ `currentLevel$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `onLevel$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `defaultMoveRate$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `maxLevel$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `minLevel$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `offTransitionTime$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `onOffTransitionTime$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `onTransitionTime$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\>  } & \{ `currentLevel$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `onLevel$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `defaultMoveRate$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `maxLevel$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `minLevel$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `offTransitionTime$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `onOffTransitionTime$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `onTransitionTime$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: `never`

Supported features as a flag object.

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### maxLevel

• **maxLevel**: `number`

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).maxLevel

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:76](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L76)

___

### minLevel

• **minLevel**: `number`

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).minLevel

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:71](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L71)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`State`](behavior_definitions_level_control_export.LevelControlServerLogic.State.md), ``"options"`` \| ``"remainingTime"`` \| ``"startUpCurrentLevel"`` \| ``"currentLevel"`` \| ``"minLevel"`` \| ``"maxLevel"`` \| ``"onOffTransitionTime"`` \| ``"onLevel"`` \| ``"onTransitionTime"`` \| ``"offTransitionTime"`` \| ``"defaultMoveRate"``\> & \{ `currentLevel`: ``null`` \| `number` ; `onLevel`: ``null`` \| `number` ; `options`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>  } & \{ `defaultMoveRate?`: ``null`` \| `number` ; `maxLevel?`: `number` ; `minLevel?`: `number` ; `offTransitionTime?`: ``null`` \| `number` ; `onOffTransitionTime?`: `number` ; `onTransitionTime?`: ``null`` \| `number`  } & {} & {}

Access the behavior's state.

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:311](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L311)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff)]\>, typeof [`LevelControlServerLogic`](../modules/behavior_definitions_level_control_export.LevelControlServerLogic.md)\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

▪ `Static` `Readonly` **ExtensionInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `handleOnOffChange` | (`onOff`: `boolean`) => `void` |
| `moveLogic` | (`moveMode`: [`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md), `rate`: ``null`` \| `number`, `withOnOff`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |
| `moveToLevelLogic` | (`level`: `number`, `transitionTime`: ``null`` \| `number`, `withOnOff`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |
| `setLevel` | (`level`: `number`, `withOnOff`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |
| `setRemainingTime` | (`remainingTime`: `number`) => `void` |
| `stepLogic` | (`stepMode`: [`StepMode`](../enums/cluster_export.LevelControl.StepMode.md), `stepSize`: `number`, `transitionTime`: ``null`` \| `number`, `withOnOff`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |
| `stopLogic` | () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).ExtensionInterface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`LevelControlInterface`](../modules/behavior_definitions_level_control_export.md#levelcontrolinterface)

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### Internal

▪ `Static` `Readonly` **Internal**: typeof [`Internal`](behavior_definitions_level_control_export.LevelControlServerLogic.Internal.md)

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff)]\>, typeof [`LevelControlServerLogic`](../modules/behavior_definitions_level_control_export.LevelControlServerLogic.md)\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff)]\>, typeof [`LevelControlServerLogic`](../modules/behavior_definitions_level_control_export.LevelControlServerLogic.md)\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff)]\>, typeof [`LevelControlServerLogic`](../modules/behavior_definitions_level_control_export.LevelControlServerLogic.md)\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff)]\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff)]\>, typeof [`LevelControlServerLogic`](../modules/behavior_definitions_level_control_export.LevelControlServerLogic.md)\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"levelControl"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L198)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L125)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).assertAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### handleOnOffChange

▸ **handleOnOffChange**(`onOff`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onOff` | `boolean` |

#### Returns

`void`

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).handleOnOffChange

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:602](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L602)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### move

▸ **move**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.2

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).move

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:76](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L76)

___

### moveLogic

▸ **moveLogic**(`moveMode`, `rate`, `withOnOff`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md) |
| `rate` | ``null`` \| `number` |
| `withOnOff` | `boolean` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).moveLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:592](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L592)

___

### moveToLevel

▸ **moveToLevel**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.1

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).moveToLevel

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:71](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L71)

___

### moveToLevelLogic

▸ **moveToLevelLogic**(`level`, `transitionTime`, `withOnOff`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `transitionTime` | ``null`` \| `number` |
| `withOnOff` | `boolean` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).moveToLevelLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:591](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L591)

___

### moveToLevelWithOnOff

▸ **moveToLevelWithOnOff**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).moveToLevelWithOnOff

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:100](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L100)

___

### moveWithOnOff

▸ **moveWithOnOff**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).moveWithOnOff

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:105](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L105)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L212)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).requireAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### setLevel

▸ **setLevel**(`level`, `withOnOff`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `withOnOff` | `boolean` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).setLevel

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:600](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L600)

___

### setRemainingTime

▸ **setRemainingTime**(`remainingTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `remainingTime` | `number` |

#### Returns

`void`

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).setRemainingTime

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:601](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L601)

___

### step

▸ **step**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second.
A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this
as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is
able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.3

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).step

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:90](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L90)

___

### stepLogic

▸ **stepLogic**(`stepMode`, `stepSize`, `transitionTime`, `withOnOff`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../enums/cluster_export.LevelControl.StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | ``null`` \| `number` |
| `withOnOff` | `boolean` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).stepLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:593](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L593)

___

### stepWithOnOff

▸ **stepWithOnOff**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).stepWithOnOff

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:110](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L110)

___

### stop

▸ **stop**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.4

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).stop

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:95](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L95)

___

### stopLogic

▸ **stopLogic**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).stopLogic

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:599](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L599)

___

### stopWithOnOff

▸ **stopWithOnOff**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).stopWithOnOff

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:115](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L115)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

LevelControlServerLogic.with(LevelControl.Feature.OnOff).toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L203)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

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

LevelControlServerLogic.with(LevelControl.Feature.OnOff).with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
