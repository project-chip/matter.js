[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [MediaPlayback](../README.md) / Cluster

# Interface: Cluster

Media Playback

This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media device such as a
TV, Set-top Box, or Smart Speaker.

MediaPlaybackCluster supports optional features that you can enable with the MediaPlaybackCluster.with() factory
method.

## See

MatterSpecification.v11.Cluster § 6.10

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### currentState

> `readonly` **currentState**: [`Attribute`](../../../interfaces/Attribute.md)\<[`PlaybackState`](../enumerations/PlaybackState.md), `any`\>

This shall indicate the current playback state of media.

During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING.

###### See

MatterSpecification.v11.Cluster § 6.10.3.1

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### next

> `readonly` **next**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context-
specific. This will often Go forward to the next media playback item.

##### See

MatterSpecification.v11.Cluster § 6.10.4.6

#### pause

> `readonly` **pause**: [`Command`](../../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall pause playback of the media.

##### See

MatterSpecification.v11.Cluster § 6.10.4.2

#### play

> `readonly` **play**: [`Command`](../../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play
shall return media to normal playback speed.

##### See

MatterSpecification.v11.Cluster § 6.10.4.1

#### previous

> `readonly` **previous**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is
context-specific. This will often Go back to the previous media playback item.

##### See

MatterSpecification.v11.Cluster § 6.10.4.5

#### skipBackward

> `readonly` **skipBackward**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Skip backward in the media by the given number of milliseconds.

##### See

MatterSpecification.v11.Cluster § 6.10.4.10

#### skipForward

> `readonly` **skipForward**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Skip forward in the media by the given number of milliseconds.

##### See

MatterSpecification.v11.Cluster § 6.10.4.9

#### startOver

> `readonly` **startOver**: [`OptionalCommand`](../../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Start Over with the current media playback item.

##### See

MatterSpecification.v11.Cluster § 6.10.4.4

#### stop

> `readonly` **stop**: [`Command`](../../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This may
navigate the user back to the location from where the media was originally launched.

##### See

MatterSpecification.v11.Cluster § 6.10.4.3

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: readonly [`object`, `object`]

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### advancedSeek

> `readonly` **advancedSeek**: [`BitFlag`](../../../../schema/README.md#bitflag)

AdvancedSeek

Enables clients to implement more advanced media seeking behavior in their user interface, such as for
example a "seek bar". Adds support for Attributes and Commands related to advanced seek support

#### variableSpeed

> `readonly` **variableSpeed**: [`BitFlag`](../../../../schema/README.md#bitflag)

VariableSpeed

Support for commands to support variable speed playback on media that supports it.

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`1286`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"MediaPlayback"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `1`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
