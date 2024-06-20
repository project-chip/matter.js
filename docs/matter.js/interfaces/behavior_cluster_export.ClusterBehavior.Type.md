[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [ClusterBehavior](../modules/behavior_cluster_export.ClusterBehavior.md) / Type

# Interface: Type\<C, B, I\>

[behavior/cluster/export](../modules/behavior_cluster_export.md).[ClusterBehavior](../modules/behavior_cluster_export.ClusterBehavior.md).Type

A ClusterBehavior specialized for a specific Cluster.

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ClusterType`](cluster_export.ClusterType-1.md) = [`ClusterType`](cluster_export.ClusterType-1.md) |
| `B` | extends [`Type`](behavior_export.Behavior.Type.md) = [`Type`](behavior_export.Behavior.Type.md) |
| `I` | extends [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface) = [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`B`\> |

## Table of contents

### Constructors

- [constructor](behavior_cluster_export.ClusterBehavior.Type.md#constructor)

### Properties

- [Events](behavior_cluster_export.ClusterBehavior.Type.md#events)
- [ExtensionInterface](behavior_cluster_export.ClusterBehavior.Type.md#extensioninterface)
- [Interface](behavior_cluster_export.ClusterBehavior.Type.md#interface)
- [Internal](behavior_cluster_export.ClusterBehavior.Type.md#internal)
- [State](behavior_cluster_export.ClusterBehavior.Type.md#state)
- [cluster](behavior_cluster_export.ClusterBehavior.Type.md#cluster)
- [defaults](behavior_cluster_export.ClusterBehavior.Type.md#defaults)
- [dependencies](behavior_cluster_export.ClusterBehavior.Type.md#dependencies)
- [early](behavior_cluster_export.ClusterBehavior.Type.md#early)
- [id](behavior_cluster_export.ClusterBehavior.Type.md#id)
- [name](behavior_cluster_export.ClusterBehavior.Type.md#name)
- [schema](behavior_cluster_export.ClusterBehavior.Type.md#schema)
- [supervisor](behavior_cluster_export.ClusterBehavior.Type.md#supervisor)
- [supports](behavior_cluster_export.ClusterBehavior.Type.md#supports)

### Methods

- [alter](behavior_cluster_export.ClusterBehavior.Type.md#alter)
- [enable](behavior_cluster_export.ClusterBehavior.Type.md#enable)
- [for](behavior_cluster_export.ClusterBehavior.Type.md#for)
- [set](behavior_cluster_export.ClusterBehavior.Type.md#set)
- [with](behavior_cluster_export.ClusterBehavior.Type.md#with)

## Constructors

### constructor

• **new Type**(`agent`, `backing`): [`Instance`](../modules/behavior_cluster_export.ClusterBehavior.md#instance)\<`C`, `B`, `I`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](../classes/endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](../classes/behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`Instance`](../modules/behavior_cluster_export.ClusterBehavior.md#instance)\<`C`, `B`, `I`\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### Events

• `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<`C`, `B`\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

• `Readonly` **ExtensionInterface**: [`ExtensionInterfaceOf`](../modules/behavior_cluster_export.md#extensioninterfaceof)\<`B`\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

___

### Interface

• `Readonly` **Interface**: `I`

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### Internal

• `Readonly` **Internal**: `B`[``"Internal"``]

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

___

### State

• `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<`C`, `B`\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<`C`, `B`\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<`C`, `B`\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

___

### cluster

• `Readonly` **cluster**: `C`

Base cluster state include all attribute values but may be extended by subclasses.

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

• `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<`C`, `B`\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

• `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](behavior_export.Behavior.Type.md)\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

• `Readonly` **early**: `boolean`

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

• `Readonly` **id**: `Uncapitalize`\<`C`[``"name"``]\>

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

• `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

• `Readonly` **supervisor**: [`RootSupervisor`](../classes/behavior_cluster_export._internal_.RootSupervisor.md)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

___

### supports

• **supports**: (`other`: [`Type`](behavior_export.Behavior.Type.md)) => `boolean`

#### Type declaration

▸ (`other`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Type`](behavior_export.Behavior.Type.md) |

##### Returns

`boolean`

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### alter

▸ **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](cluster_export.ClusterType-1.md), [`Type`](behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

___

### enable

▸ **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](cluster_export.ClusterType-1.md), [`Type`](behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

___

### for

▸ **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema?`): [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](cluster_export.ClusterType-1.md), [`Type`](behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `ClusterT` | extends [`ClusterType`](cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema?` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) |

#### Returns

[`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

___

### set

▸ **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<`InstanceType`\<`This`[``"State"``]\>\>\> |

#### Returns

`This`

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

___

### with

▸ **with**\<`This`, `FeaturesT`\>(`this`, `...features`): [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](cluster_export.ClusterType-1.md), [`Type`](behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FeaturesT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `...features` | `FeaturesT` |

#### Returns

[`Type`](behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
