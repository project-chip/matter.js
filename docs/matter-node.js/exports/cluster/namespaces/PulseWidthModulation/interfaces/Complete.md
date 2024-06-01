[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [PulseWidthModulation](../README.md) / Complete

# Interface: Complete

This cluster supports all PulseWidthModulation features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`CompleteInstance`](../README.md#completeinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### attributeList

> `readonly` **attributeList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/README.md#attributeid)[], `never`\>

##### clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

##### currentFrequency

> `readonly` **currentFrequency**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### currentLevel

> `readonly` **currentLevel**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### defaultMoveRate

> `readonly` **defaultMoveRate**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

##### eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/README.md#eventid)[], `never`\>

##### featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

##### generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### maxFrequency

> `readonly` **maxFrequency**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### maxLevel

> `readonly` **maxLevel**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

##### minFrequency

> `readonly` **minFrequency**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### minLevel

> `readonly` **minLevel**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

##### offTransitionTime

> `readonly` **offTransitionTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

##### onLevel

> `readonly` **onLevel**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

##### onOffTransitionTime

> `readonly` **onOffTransitionTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### onTransitionTime

> `readonly` **onTransitionTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

##### options

> `readonly` **options**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

##### remainingTime

> `readonly` **remainingTime**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### startUpCurrentLevel

> `readonly` **startUpCurrentLevel**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

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

#### moveToClosestFrequency

> `readonly` **moveToClosestFrequency**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

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

> **extensions**: `undefined`

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

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<[`Branded`](../../../../../util/export/README.md#brandedtb)\<`28`, `"ClusterId"`\>, `"ClusterId"`\>

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

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

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

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/README.md#attributeid)[], `never`\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.currentFrequency

> `readonly` **currentFrequency**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.currentLevel

> `readonly` **currentLevel**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### attributes.defaultMoveRate

> `readonly` **defaultMoveRate**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/README.md#eventid)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### attributes.maxFrequency

> `readonly` **maxFrequency**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.maxLevel

> `readonly` **maxLevel**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

##### attributes.minFrequency

> `readonly` **minFrequency**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.minLevel

> `readonly` **minLevel**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

##### attributes.offTransitionTime

> `readonly` **offTransitionTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

##### attributes.onLevel

> `readonly` **onLevel**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

##### attributes.onOffTransitionTime

> `readonly` **onOffTransitionTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.onTransitionTime

> `readonly` **onTransitionTime**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

##### attributes.remainingTime

> `readonly` **remainingTime**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.startUpCurrentLevel

> `readonly` **startUpCurrentLevel**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.move

> `readonly` **move**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.2

##### commands.moveToClosestFrequency

> `readonly` **moveToClosestFrequency**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands.moveToLevel

> `readonly` **moveToLevel**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.1

##### commands.moveToLevelWithOnOff

> `readonly` **moveToLevelWithOnOff**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.moveWithOnOff

> `readonly` **moveWithOnOff**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.step

> `readonly` **step**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a
second. A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as
close to this as the device is able. If the TransitionTime field is equal to null, the device SHOULD
move as fast as it is able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

###### See

MatterSpecification.v11.Cluster § 1.6.6.3

##### commands.stepWithOnOff

> `readonly` **stepWithOnOff**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.stop

> `readonly` **stop**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.4

##### commands.stopWithOnOff

> `readonly` **stopWithOnOff**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### features

> `readonly` **features**: `object`

##### features.frequency

> `readonly` **frequency**: [`BitFlag`](../../../../schema/README.md#bitflag)

Frequency

Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency
control.

##### features.lighting

> `readonly` **lighting**: [`BitFlag`](../../../../schema/README.md#bitflag)

Lighting

Behavior that supports lighting applications

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`28`, `"ClusterId"`\>

##### name

> `readonly` **name**: `"PulseWidthModulation"`

##### revision

> `readonly` **revision**: `5`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
