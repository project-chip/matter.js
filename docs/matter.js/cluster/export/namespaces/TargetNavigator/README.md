[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / TargetNavigator

# Namespace: TargetNavigator

## Index

### Enumerations

- [Status](enumerations/Status.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [NavigateTargetRequest](interfaces/NavigateTargetRequest.md)
- [NavigateTargetResponse](interfaces/NavigateTargetResponse.md)
- [TargetInfoStruct](interfaces/TargetInfoStruct.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L174)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentTarget

> `readonly` **currentTarget**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

The CurrentTarget attribute shall represent the Identifier for the target which is currently in
foreground on the corresponding Endpoint (Video Player or Content App), or null to indicate that no
target is in the foreground.

When not null, the CurrentTarget shall be an Identifier value contained within one of the
TargetInfoStruct objects in the TargetList attribute list.

###### See

MatterSpecification.v11.Cluster § 6.11.3.2

##### attributes.targetList

> `readonly` **targetList**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The TargetList attribute shall represent a list of targets that can be navigated to within the
experience presented to the user by the Endpoint (Video Player or Content App). The list shall not
contain any entries with the same Identifier in the TargetInfoStruct object.

###### See

MatterSpecification.v11.Cluster § 6.11.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.navigateTarget

> `readonly` **navigateTarget**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall navigation the UX to the target identified.

###### See

MatterSpecification.v11.Cluster § 6.11.4.1

##### id

> `readonly` **id**: `1285` = `0x505`

##### name

> `readonly` **name**: `"TargetNavigator"` = `"TargetNavigator"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L129)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L177)

***

### TlvNavigateTargetRequest

> `const` **TlvNavigateTargetRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the TargetNavigator navigateTarget command

#### See

MatterSpecification.v11.Cluster § 6.11.4.1

#### Type declaration

##### data

> **data**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate Optional app-specific data.

###### See

MatterSpecification.v11.Cluster § 6.11.4.1.2

##### target

> **target**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the Identifier for the target for UX navigation. The Target shall be an Identifier value
contained within one of the TargetInfoStruct objects in the TargetList attribute list.

###### See

MatterSpecification.v11.Cluster § 6.11.4.1.1

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L54)

***

### TlvNavigateTargetResponse

> `const` **TlvNavigateTargetResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to NavigateTarget command.

#### See

MatterSpecification.v11.Cluster § 6.11.4.2

#### Type declaration

##### data

> **data**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate Optional app-specific data.

###### See

MatterSpecification.v11.Cluster § 6.11.4.2.2

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Status`](enumerations/Status.md)\>

This shall indicate the of the command.

###### See

MatterSpecification.v11.Cluster § 6.11.4.2.1

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L103)

***

### TlvTargetInfoStruct

> `const` **TlvTargetInfoStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This indicates an object describing the navigable target.

#### See

MatterSpecification.v11.Cluster § 6.11.5.1

#### Type declaration

##### identifier

> **identifier**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

An unique id within the TargetList.

###### See

MatterSpecification.v11.Cluster § 6.11.5.1.1

##### name

> **name**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

A name string for the TargetInfoStruct.

###### See

MatterSpecification.v11.Cluster § 6.11.5.1.2

#### Source

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L26)
