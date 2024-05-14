[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/mode-select/export](../modules/behavior_definitions_mode_select_export.md) / ModeSelectServer

# Class: ModeSelectServer

[behavior/definitions/mode-select/export](../modules/behavior_definitions_mode_select_export.md).ModeSelectServer

## Hierarchy

- [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior-1.md)\<`this`\> & `Omit`\<[`ModeSelectServerLogic`](behavior_definitions_mode_select_export.ModeSelectServerLogic.md), ``"state"`` \| ``"initialize"`` \| typeof `asyncDispose` \| ``"cluster"`` \| ``"events"`` \| ``"changeToMode"``\> & [`Base`](../interfaces/behavior_definitions_mode_select_export.ModeSelectInterface.Base.md) & `Omit`\<\{ `changeToMode`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>\>  } & {}, ``"changeToMode"``\> & \{ `cluster`: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<... \| ..., `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\> ; `events`: [`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: ... ; `mode`: ... ; `semanticTags`: ...  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<..., ...\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, typeof [`ModeSelectServerLogic`](behavior_definitions_mode_select_export.ModeSelectServerLogic.md)\> ; `features`: {} ; `state`: [`ClusterState`](../modules/behavior_cluster_export.md#clusterstate)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: ... ; `mode`: ... ; `semanticTags`: ...  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<..., ...\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, typeof [`ModeSelectServerLogic`](behavior_definitions_mode_select_export.ModeSelectServerLogic.md)\> ; `[asyncDispose]`: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>  }

  ↳ **`ModeSelectServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_mode_select_export.ModeSelectServer.md#constructor)

### Properties

- [#agent](behavior_definitions_mode_select_export.ModeSelectServer.md##agent)
- [[reference]](behavior_definitions_mode_select_export.ModeSelectServer.md#[reference])
- [agent](behavior_definitions_mode_select_export.ModeSelectServer.md#agent)
- [cluster](behavior_definitions_mode_select_export.ModeSelectServer.md#cluster)
- [context](behavior_definitions_mode_select_export.ModeSelectServer.md#context)
- [endpoint](behavior_definitions_mode_select_export.ModeSelectServer.md#endpoint)
- [events](behavior_definitions_mode_select_export.ModeSelectServer.md#events)
- [features](behavior_definitions_mode_select_export.ModeSelectServer.md#features)
- [session](behavior_definitions_mode_select_export.ModeSelectServer.md#session)
- [state](behavior_definitions_mode_select_export.ModeSelectServer.md#state)
- [Events](behavior_definitions_mode_select_export.ModeSelectServer.md#events-1)
- [ExtensionInterface](behavior_definitions_mode_select_export.ModeSelectServer.md#extensioninterface)
- [Interface](behavior_definitions_mode_select_export.ModeSelectServer.md#interface)
- [Internal](behavior_definitions_mode_select_export.ModeSelectServer.md#internal)
- [State](behavior_definitions_mode_select_export.ModeSelectServer.md#state-1)
- [cluster](behavior_definitions_mode_select_export.ModeSelectServer.md#cluster-1)
- [defaults](behavior_definitions_mode_select_export.ModeSelectServer.md#defaults)
- [dependencies](behavior_definitions_mode_select_export.ModeSelectServer.md#dependencies)
- [early](behavior_definitions_mode_select_export.ModeSelectServer.md#early)
- [id](behavior_definitions_mode_select_export.ModeSelectServer.md#id)
- [name](behavior_definitions_mode_select_export.ModeSelectServer.md#name)
- [schema](behavior_definitions_mode_select_export.ModeSelectServer.md#schema)
- [supervisor](behavior_definitions_mode_select_export.ModeSelectServer.md#supervisor)
- [supports](behavior_definitions_mode_select_export.ModeSelectServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_mode_select_export.ModeSelectServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_mode_select_export.ModeSelectServer.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_mode_select_export.ModeSelectServer.md#assertattributeenabled)
- [callback](behavior_definitions_mode_select_export.ModeSelectServer.md#callback)
- [changeToMode](behavior_definitions_mode_select_export.ModeSelectServer.md#changetomode)
- [initialize](behavior_definitions_mode_select_export.ModeSelectServer.md#initialize)
- [reactTo](behavior_definitions_mode_select_export.ModeSelectServer.md#reactto)
- [requireAttributeEnabled](behavior_definitions_mode_select_export.ModeSelectServer.md#requireattributeenabled)
- [toString](behavior_definitions_mode_select_export.ModeSelectServer.md#tostring)
- [alter](behavior_definitions_mode_select_export.ModeSelectServer.md#alter)
- [enable](behavior_definitions_mode_select_export.ModeSelectServer.md#enable)
- [for](behavior_definitions_mode_select_export.ModeSelectServer.md#for)
- [set](behavior_definitions_mode_select_export.ModeSelectServer.md#set)
- [with](behavior_definitions_mode_select_export.ModeSelectServer.md#with)

## Constructors

### constructor

• **new ModeSelectServer**(`agent`, `backing`): [`ModeSelectServer`](behavior_definitions_mode_select_export.ModeSelectServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`ModeSelectServer`](behavior_definitions_mode_select_export.ModeSelectServer.md)

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ModeSelect.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.ModeSelect.Feature.md#onoff)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ModeSelect.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ModeSelectInterface`](../modules/behavior_definitions_mode_select_export.md#modeselectinterface)\>, [`ModeSelectInterface`](../modules/behavior_definitions_mode_select_export.md#modeselectinterface)\>\>, ``"description$Changing"`` \| ``"description$Changed"`` \| ``"standardNamespace$Changing"`` \| ``"supportedModes$Changing"`` \| ``"currentMode$Changing"`` \| ``"startUpMode$Changing"`` \| ``"standardNamespace$Changed"`` \| ``"supportedModes$Changed"`` \| ``"currentMode$Changed"`` \| ``"startUpMode$Changed"`` \| ``"onMode$Changing"`` \| ``"onMode$Changed"``\> & \{ `currentMode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `description$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `standardNamespace$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `supportedModes$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `mfgCode`: ... ; `value`: ...  }\>[]\>  }\>[], `any`\>\>  } & \{ `startUpMode$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\>  } & \{ `currentMode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `description$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `standardNamespace$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `supportedModes$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `mfgCode`: ... ; `value`: ...  }\>[]\>  }\>[], `any`\>\>  } & \{ `startUpMode$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: [`FeaturesAsFlags`](../modules/cluster_export.ClusterComposer.md#featuresasflags)\<[`Cluster`](../interfaces/cluster_export.ModeSelect.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.ModeSelect.Feature.md#onoff)]\>

Supported features as a flag object.

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ModeSelect.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.ModeSelect.Feature.md#onoff)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ModeSelect.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ModeSelectInterface`](../modules/behavior_definitions_mode_select_export.md#modeselectinterface)\>, [`ModeSelectInterface`](../modules/behavior_definitions_mode_select_export.md#modeselectinterface)\>\>, ``"description"`` \| ``"onMode"`` \| ``"standardNamespace"`` \| ``"supportedModes"`` \| ``"currentMode"`` \| ``"startUpMode"``\> & \{ `currentMode`: `number`  } & \{ `startUpMode?`: ``null`` \| `number`  } & \{ `description`: `string` ; `standardNamespace`: ``null`` \| `number` ; `supportedModes`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `mfgCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]\>  }\>[]  } & {}

Access the behavior's state.

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:311](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L311)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, typeof [`ModeSelectServerLogic`](behavior_definitions_mode_select_export.ModeSelectServerLogic.md)\>

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

▪ `Static` `Readonly` **ExtensionInterface**: `Object`

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).ExtensionInterface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`ModeSelectInterface`](../modules/behavior_definitions_mode_select_export.md#modeselectinterface)

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### Internal

▪ `Static` `Readonly` **Internal**: () => {}

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, typeof [`ModeSelectServerLogic`](behavior_definitions_mode_select_export.ModeSelectServerLogic.md)\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, typeof [`ModeSelectServerLogic`](behavior_definitions_mode_select_export.ModeSelectServerLogic.md)\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, typeof [`ModeSelectServerLogic`](behavior_definitions_mode_select_export.ModeSelectServerLogic.md)\>

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `mfgCode`: ... ; `value`: ...  }\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `semanticTags`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = OnOffComponent; `flags`: \{ `onOff`: ``true`` = true }  }] ; `features`: \{ `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``80`` = 0x50; `name`: ``"ModeSelect"`` = "ModeSelect"; `revision`: ``1`` = 1 }\>, typeof [`ModeSelectServerLogic`](behavior_definitions_mode_select_export.ModeSelectServerLogic.md)\>

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"modeSelect"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L198)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L125)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).assertAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### changeToMode

▸ **changeToMode**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported
list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.8.6.1

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).changeToMode

#### Defined in

[packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts:33](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/mode-select/ModeSelectInterface.ts#L33)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L192)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L212)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).requireAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/Behavior.ts#L203)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

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

ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)).with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
