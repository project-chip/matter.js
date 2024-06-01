[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [PulseWidthModulation](../README.md) / Cluster

# Interface: Cluster

Pulse Width Modulation

This cluster provides an interface for controlling a characteristic of a device that can be set to a level, for
example the brightness of a light, the degree of closure of a door, or the power output of a heater.

PulseWidthModulationCluster supports optional features that you can enable with the
PulseWidthModulationCluster.with() factory method.

## See

MatterSpecification.v11.Cluster § 1.6

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### currentLevel

> `readonly` **currentLevel**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
dependent.

###### See

MatterSpecification.v11.Cluster § 1.6.5.1

##### defaultMoveRate

> `readonly` **defaultMoveRate**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is
received with a null value Rate parameter.

###### See

MatterSpecification.v11.Cluster § 1.6.5.13

##### maxLevel

> `readonly` **maxLevel**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned.

###### See

MatterSpecification.v11.Cluster § 1.6.5.4

##### minLevel

> `readonly` **minLevel**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned.

###### See

MatterSpecification.v11.Cluster § 1.6.5.3

##### offTransitionTime

> `readonly` **offTransitionTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The OffTransitionTime attribute represents the time taken to move the current level from the maximum
level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.12

##### onLevel

> `readonly` **onLevel**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff
attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off
cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no
effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.

###### See

MatterSpecification.v11.Cluster § 1.6.5.10

##### onOffTransitionTime

> `readonly` **onOffTransitionTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On
or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a
second.

The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note that
if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD NOT be
implemented.

###### See

MatterSpecification.v11.Cluster § 1.6.5.9

##### onTransitionTime

> `readonly` **onTransitionTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The OnTransitionTime attribute represents the time taken to move the current level from the minimum
level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.11

##### options

> `readonly` **options**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The Options attribute is meant to be changed only during commissioning. The Options attribute is a
bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
the Options attribute shall first construct a temporary Options bitmap that is in effect during the
command processing. The temporary Options bitmap has the same format and meaning as the Options
attribute, but includes any bits that may be overridden by command fields.

Below is the format and description of the Options attribute and temporary Options bitmap and the effect
on dependent commands.

Table 19. Options Attribute

###### See

MatterSpecification.v11.Cluster § 1.6.5.8

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

#### move

> `readonly` **move**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.6.6.2

#### moveToLevel

> `readonly` **moveToLevel**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.6.6.1

#### moveToLevelWithOnOff

> `readonly` **moveToLevelWithOnOff**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.6.6

#### moveWithOnOff

> `readonly` **moveWithOnOff**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.6.6

#### step

> `readonly` **step**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a
second. A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as
close to this as the device is able. If the TransitionTime field is equal to null, the device SHOULD
move as fast as it is able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

##### See

MatterSpecification.v11.Cluster § 1.6.6.3

#### stepWithOnOff

> `readonly` **stepWithOnOff**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.6.6

#### stop

> `readonly` **stop**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.6.6.4

#### stopWithOnOff

> `readonly` **stopWithOnOff**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

##### See

MatterSpecification.v11.Cluster § 1.6.6

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

#### frequency

> `readonly` **frequency**: [`BitFlag`](../../../../schema/README.md#bitflag)

Frequency

Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency
control.

#### lighting

> `readonly` **lighting**: [`BitFlag`](../../../../schema/README.md#bitflag)

Lighting

Behavior that supports lighting applications

#### onOff

> `readonly` **onOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`28`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"PulseWidthModulation"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `5`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### onOff

> `readonly` **onOff**: `true`

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
