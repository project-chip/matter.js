[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [behavior/cluster/export](../../../README.md) / [ClusterBehavior](../README.md) / Type

# Interface: Type\<C, B, I\>

A ClusterBehavior specialized for a specific Cluster.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `C` *extends* [`ClusterType`](../../../../../../cluster/export/interfaces/ClusterType.md) | [`ClusterType`](../../../../../../cluster/export/interfaces/ClusterType.md) |
| `B` *extends* [`Type`](../../../../../export/namespaces/Behavior/interfaces/Type.md) | [`Type`](../../../../../export/namespaces/Behavior/interfaces/Type.md) |
| `I` *extends* [`ClusterInterface`](../../../README.md#clusterinterfacef) | [`InterfaceOf`](../../ClusterInterface/README.md#interfaceofb)\<`B`\> |

## Constructors

### new Type()

> **new Type**(`agent`, `backing`): [`Instance`](../README.md#instancecbi)\<`C`, `B`, `I`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../-internal-/classes/BehaviorBacking.md) |

#### Returns

[`Instance`](../README.md#instancecbi)\<`C`, `B`, `I`\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### Events

> `readonly` **Events**: [`Type`](../../ClusterEvents/README.md#typecb)\<`C`, `B`\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### ExtensionInterface

> `readonly` **ExtensionInterface**: [`ExtensionInterfaceOf`](../../../README.md#extensioninterfaceofb)\<`B`\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

***

### Interface

> `readonly` **Interface**: `I`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### Internal

> `readonly` **Internal**: `B`\[`"Internal"`\]

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

***

### State()

> `readonly` **State**: () => [`Type`](../../ClusterState/README.md#typecb)\<`C`, `B`\>

#### Returns

[`Type`](../../ClusterState/README.md#typecb)\<`C`, `B`\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

***

### cluster

> `readonly` **cluster**: `C`

Base cluster state include all attribute values but may be extended by subclasses.

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `readonly` **defaults**: [`Type`](../../ClusterState/README.md#typecb)\<`C`, `B`\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `readonly` **early**: `boolean`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `readonly` **id**: `Uncapitalize`\<`C`\[`"name"`\]\>

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `readonly` **name**: `string`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `optional` `readonly` **schema**: [`Schema`](../../../-internal-/README.md#schema)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `readonly` **supervisor**: [`RootSupervisor`](../../../-internal-/classes/RootSupervisor.md)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

***

### supports()

> **supports**: (`other`) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`Type`](../../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### alter()

> **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](Type.md)\<[`WithAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](Type.md)\<[`ClusterType`](../../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../README.md#clusterinterfacef)\<`object`\>\> |
| `AlterationsT` *extends* [`Alterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#alterationsoriginalt)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](Type.md)\<[`WithAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

***

### enable()

> **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](Type.md)\<[`WithAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](Type.md)\<[`ClusterType`](../../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../README.md#clusterinterfacef)\<`object`\>\> |
| `FlagsT` *extends* [`ElementFlags`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagsclustert)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](Type.md)\<[`WithAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

***

### for()

> **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema`?): [`Type`](Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](Type.md)\<[`ClusterType`](../../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../README.md#clusterinterfacef)\<`object`\>\> |
| `ClusterT` *extends* [`ClusterType`](../../../../../../cluster/export/interfaces/ClusterType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema`? | [`Schema`](../../../-internal-/README.md#schema) |

#### Returns

[`Type`](Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

***

### set()

> **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../../../../../../cluster/export/namespaces/ClusterType/README.md#relaxtypesv)\<`InstanceType`\<`This`\[`"State"`\]\>\>\> |

#### Returns

`This`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

***

### with()

> **with**\<`This`, `FeaturesT`\>(`this`, ...`features`): [`Type`](Type.md)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](Type.md)\<[`ClusterType`](../../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../README.md#clusterinterfacef)\<`object`\>\> |
| `FeaturesT` *extends* [`FeatureSelection`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#featureselectiont)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| ...`features` | `FeaturesT` |

#### Returns

[`Type`](Type.md)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
