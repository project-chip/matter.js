[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [KeypadInput](../README.md) / Cluster

# Interface: Cluster

Keypad Input

This cluster provides an interface for key code based input and control on a device like a Video Player or an
endpoint like a Content App. This may include text or action commands such as UP, DOWN, and SELECT.

KeypadInputCluster supports optional features that you can enable with the KeypadInputCluster.with() factory
method.

## See

MatterSpecification.v11.Cluster § 6.8

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: `object`

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

#### sendKey

> `readonly` **sendKey**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall process a keycode as input to the media device.

If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will
consider the first key press to be a press and hold. When such a repeat KeyCode value is not received
within 200ms, then the endpoint will consider the last key press to be a release.

##### See

MatterSpecification.v11.Cluster § 6.8.3.1

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

> **extensions**: readonly []

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### locationKeys

> `readonly` **locationKeys**: [`BitFlag`](../../../../schema/README.md#bitflag)

LocationKeys

Supports CEC keys 0x0A (Settings) and 0x09 (Home)

#### navigationKeyCodes

> `readonly` **navigationKeyCodes**: [`BitFlag`](../../../../schema/README.md#bitflag)

NavigationKeyCodes

Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU

#### numberKeys

> `readonly` **numberKeys**: [`BitFlag`](../../../../schema/README.md#bitflag)

NumberKeys

Supports numeric input 0..9

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`1289`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"KeypadInput"`

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
