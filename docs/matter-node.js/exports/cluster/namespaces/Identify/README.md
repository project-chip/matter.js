[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / Identify

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

> `readonly` **identify**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command starts or stops the receiving device identifying itself.

###### See

MatterSpecification.v11.Cluster § 1.2.6.1

##### commands.triggerEffect

> `readonly` **triggerEffect**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **query**: [`BitFlag`](../../../schema/README.md#bitflag)

Query

Multicast query for identification state

##### id

> `readonly` **id**: `3`

##### name

> `readonly` **name**: `"Identify"`

##### revision

> `readonly` **revision**: `4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:197

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:441

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

> `readonly` **identify**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command starts or stops the receiving device identifying itself.

###### See

MatterSpecification.v11.Cluster § 1.2.6.1

##### commands.triggerEffect

> `readonly` **triggerEffect**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **query**: [`BitFlag`](../../../schema/README.md#bitflag)

Query

Multicast query for identification state

##### id

> `readonly` **id**: `3`

##### name

> `readonly` **name**: `"Identify"`

##### revision

> `readonly` **revision**: `4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:311

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:558

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### commands

> `readonly` **commands**: `object`

##### commands.identify

> `readonly` **identify**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command starts or stops the receiving device identifying itself.

###### See

MatterSpecification.v11.Cluster § 1.2.6.1

##### commands.identifyQuery

> `readonly` **identifyQuery**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.triggerEffect

> `readonly` **triggerEffect**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command allows the support of feedback to the user, such as a certain light effect. It is used to
allow an implementation to provide visual feedback to the user under certain circumstances such as a
color light turning green when it has successfully connected to a network. The use of this command and
the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful
but it is not the same as and does not replace the identify mechanism used during commissioning.

###### See

MatterSpecification.v11.Cluster § 1.2.6.3

##### features

> `readonly` **features**: `object`

##### features.query

> `readonly` **query**: [`BitFlag`](../../../schema/README.md#bitflag)

Query

Multicast query for identification state

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"Identify"`

##### revision

> `readonly` **revision**: `4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:447

***

### QueryComponent

> `const` **QueryComponent**: `object`

A IdentifyCluster supports these elements if it supports feature Query.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.identifyQuery

> `readonly` **identifyQuery**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command allows the sending device to request the target or targets to respond if they are currently
identifying themselves.

This command has no data fields.

###### See

MatterSpecification.v11.Cluster § 1.2.6.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:160

***

### TlvIdentifyQueryResponse

> `const` **TlvIdentifyQueryResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

#### See

MatterSpecification.v11.Cluster § 1.2.6.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:19

***

### TlvIdentifyRequest

> `const` **TlvIdentifyRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Identify identify command

#### See

MatterSpecification.v11.Cluster § 1.2.6.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:70

***

### TlvTriggerEffectRequest

> `const` **TlvTriggerEffectRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Identify triggerEffect command

#### See

MatterSpecification.v11.Cluster § 1.2.6.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:126
