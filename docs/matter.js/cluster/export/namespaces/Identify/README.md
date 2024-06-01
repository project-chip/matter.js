[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / Identify

# Namespace: Identify

* THIS FILE IS GENERATED, DO NOT EDIT **

## Index

### Enumerations

- [EffectIdentifier](enumerations/EffectIdentifier.md)
- [EffectVariant](enumerations/EffectVariant.md)
- [Feature](enumerations/Feature.md)
- [IdentifyType](enumerations/IdentifyType.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [IdentifyQueryResponse](interfaces/IdentifyQueryResponse.md)
- [IdentifyRequest](interfaces/IdentifyRequest.md)
- [TriggerEffectRequest](interfaces/TriggerEffectRequest.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all Identify clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.identifyTime

> `readonly` **identifyTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to
identify itself.

If this attribute is set to a value other than 0 then the device shall enter its identification state,
in order to indicate to an observer which of several nodes and/or endpoints it is. It is RECOMMENDED
that this state consists of flashing a light with a period of 0.5 seconds. The IdentifyTime attribute
shall be decremented every second while in this state.

If this attribute reaches or is set to the value 0 then the device shall terminate its identification
state.

###### See

MatterSpecification.v11.Cluster § 1.2.5.1

##### attributes.identifyType

> `readonly` **identifyType**: [`Attribute`](../../interfaces/Attribute.md)\<[`IdentifyType`](enumerations/IdentifyType.md), `any`\>

This attribute specifies how the identification state is presented to the user. This field shall contain
one of the values listed below:

Table 2. Values of the IdentifyType attribute

###### See

MatterSpecification.v11.Cluster § 1.2.5.2

##### commands

> `readonly` **commands**: `object`

##### commands.identify

> `readonly` **identify**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command starts or stops the receiving device identifying itself.

###### See

MatterSpecification.v11.Cluster § 1.2.6.1

##### commands.triggerEffect

> `readonly` **triggerEffect**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command allows the support of feedback to the user, such as a certain light effect. It is used to
allow an implementation to provide visual feedback to the user under certain circumstances such as a
color light turning green when it has successfully connected to a network. The use of this command and
the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful
but it is not the same as and does not replace the identify mechanism used during commissioning.

###### See

MatterSpecification.v11.Cluster § 1.2.6.3

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which IdentifyCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.query

> `readonly` **query**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Query

Multicast query for identification state

##### id

> `readonly` **id**: `3` = `0x3`

##### name

> `readonly` **name**: `"Identify"` = `"Identify"`

##### revision

> `readonly` **revision**: `4` = `4`

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L226)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:324](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L324)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.identifyTime

> `readonly` **identifyTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to
identify itself.

If this attribute is set to a value other than 0 then the device shall enter its identification state,
in order to indicate to an observer which of several nodes and/or endpoints it is. It is RECOMMENDED
that this state consists of flashing a light with a period of 0.5 seconds. The IdentifyTime attribute
shall be decremented every second while in this state.

If this attribute reaches or is set to the value 0 then the device shall terminate its identification
state.

###### See

MatterSpecification.v11.Cluster § 1.2.5.1

##### attributes.identifyType

> `readonly` **identifyType**: [`Attribute`](../../interfaces/Attribute.md)\<[`IdentifyType`](enumerations/IdentifyType.md), `any`\>

This attribute specifies how the identification state is presented to the user. This field shall contain
one of the values listed below:

Table 2. Values of the IdentifyType attribute

###### See

MatterSpecification.v11.Cluster § 1.2.5.2

##### commands

> `readonly` **commands**: `object`

##### commands.identify

> `readonly` **identify**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command starts or stops the receiving device identifying itself.

###### See

MatterSpecification.v11.Cluster § 1.2.6.1

##### commands.triggerEffect

> `readonly` **triggerEffect**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command allows the support of feedback to the user, such as a certain light effect. It is used to
allow an implementation to provide visual feedback to the user under certain circumstances such as a
color light turning green when it has successfully connected to a network. The use of this command and
the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful
but it is not the same as and does not replace the identify mechanism used during commissioning.

###### See

MatterSpecification.v11.Cluster § 1.2.6.3

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which IdentifyCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.query

> `readonly` **query**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Query

Multicast query for identification state

##### id

> `readonly` **id**: `3` = `0x3`

##### name

> `readonly` **name**: `"Identify"` = `"Identify"`

##### revision

> `readonly` **revision**: `4` = `4`

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:303](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L303)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:350](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L350)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: [`Merge`](../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../README.md#globalattributesf)\<`object`\>\> = `Cluster.attributes`

###### Type declaration

###### identifyTime

> `readonly` **identifyTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to
identify itself.

If this attribute is set to a value other than 0 then the device shall enter its identification state,
in order to indicate to an observer which of several nodes and/or endpoints it is. It is RECOMMENDED
that this state consists of flashing a light with a period of 0.5 seconds. The IdentifyTime attribute
shall be decremented every second while in this state.

If this attribute reaches or is set to the value 0 then the device shall terminate its identification
state.

###### See

MatterSpecification.v11.Cluster § 1.2.5.1

###### identifyType

> `readonly` **identifyType**: [`Attribute`](../../interfaces/Attribute.md)\<[`IdentifyType`](enumerations/IdentifyType.md), `any`\>

This attribute specifies how the identification state is presented to the user. This field shall contain
one of the values listed below:

Table 2. Values of the IdentifyType attribute

###### See

MatterSpecification.v11.Cluster § 1.2.5.2

##### commands

> `readonly` **commands**: `object`

##### commands.identify

> `readonly` **identify**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command starts or stops the receiving device identifying itself.

###### See

MatterSpecification.v11.Cluster § 1.2.6.1

##### commands.identifyQuery

> `readonly` **identifyQuery**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.triggerEffect

> `readonly` **triggerEffect**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command allows the support of feedback to the user, such as a certain light effect. It is used to
allow an implementation to provide visual feedback to the user under certain circumstances such as a
color light turning green when it has successfully connected to a network. The use of this command and
the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful
but it is not the same as and does not replace the identify mechanism used during commissioning.

###### See

MatterSpecification.v11.Cluster § 1.2.6.3

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.query

> `readonly` **query**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Query

Multicast query for identification state

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`3`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"Identify"` = `Cluster.name`

##### revision

> `readonly` **revision**: `4` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:332](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L332)

***

### QueryComponent

> `const` **QueryComponent**: `object`

A IdentifyCluster supports these elements if it supports feature Query.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.identifyQuery

> `readonly` **identifyQuery**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This command allows the sending device to request the target or targets to respond if they are currently
identifying themselves.

This command has no data fields.

###### See

MatterSpecification.v11.Cluster § 1.2.6.2

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L189)

***

### TlvIdentifyQueryResponse

> `const` **TlvIdentifyQueryResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

#### See

MatterSpecification.v11.Cluster § 1.2.6.4

#### Type declaration

##### timeout

> **timeout**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field contains the current value of the IdentifyTime attribute, and specifies the length of time, in
seconds, that the device will continue to identify itself.

###### See

MatterSpecification.v11.Cluster § 1.2.6.4.1

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L33)

***

### TlvIdentifyRequest

> `const` **TlvIdentifyRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Identify identify command

#### See

MatterSpecification.v11.Cluster § 1.2.6.1

#### Type declaration

##### identifyTime

> **identifyTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L91)

***

### TlvTriggerEffectRequest

> `const` **TlvTriggerEffectRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Identify triggerEffect command

#### See

MatterSpecification.v11.Cluster § 1.2.6.3

#### Type declaration

##### effectIdentifier

> **effectIdentifier**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`EffectIdentifier`](enumerations/EffectIdentifier.md)\>

This field specifies the identify effect to use. All values of the EffectIdentifier shall be supported.
Implementors may deviate from the example light effects in the table below, but they SHOULD indicate during
testing how they handle each effect.

This field shall contain one of the non-reserved values listed below.

Table 3. Values of the EffectIdentifier Field of the TriggerEffect Command

###### See

MatterSpecification.v11.Cluster § 1.2.6.3.1

##### effectVariant

> **effectVariant**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Default`](enumerations/EffectVariant.md#default)\>

This field is used to indicate which variant of the effect, indicated in the EffectIdentifier field, SHOULD
be triggered. If a device does not support the given variant, it shall use the default variant. This field
shall contain one of the values listed below:

Table 4. Values of the EffectVariant Field of the TriggerEffect Command

###### See

MatterSpecification.v11.Cluster § 1.2.6.3.2

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L153)
