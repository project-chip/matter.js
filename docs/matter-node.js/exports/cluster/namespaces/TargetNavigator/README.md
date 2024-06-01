[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / TargetNavigator

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

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:192

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentTarget

> `readonly` **currentTarget**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `null`, `any`\>

The CurrentTarget attribute shall represent the Identifier for the target which is currently in
foreground on the corresponding Endpoint (Video Player or Content App), or null to indicate that no
target is in the foreground.

When not null, the CurrentTarget shall be an Identifier value contained within one of the
TargetInfoStruct objects in the TargetList attribute list.

###### See

MatterSpecification.v11.Cluster § 6.11.3.2

##### attributes.targetList

> `readonly` **targetList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

The TargetList attribute shall represent a list of targets that can be navigated to within the
experience presented to the user by the Endpoint (Video Player or Content App). The list shall not
contain any entries with the same Identifier in the TargetInfoStruct object.

###### See

MatterSpecification.v11.Cluster § 6.11.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.navigateTarget

> `readonly` **navigateTarget**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall navigation the UX to the target identified.

###### See

MatterSpecification.v11.Cluster § 6.11.4.1

##### id

> `readonly` **id**: `1285`

##### name

> `readonly` **name**: `"TargetNavigator"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:111

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:195

***

### TlvNavigateTargetRequest

> `const` **TlvNavigateTargetRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the TargetNavigator navigateTarget command

#### See

MatterSpecification.v11.Cluster § 6.11.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:43

***

### TlvNavigateTargetResponse

> `const` **TlvNavigateTargetResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall be generated in response to NavigateTarget command.

#### See

MatterSpecification.v11.Cluster § 6.11.4.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:87

***

### TlvTargetInfoStruct

> `const` **TlvTargetInfoStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This indicates an object describing the navigable target.

#### See

MatterSpecification.v11.Cluster § 6.11.5.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:17
