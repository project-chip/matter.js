[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / BooleanState

# Namespace: BooleanState

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [StateChangeEvent](interfaces/StateChangeEvent.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:62

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.stateValue

> `readonly` **stateValue**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

This represents a Boolean state.

###### See

MatterSpecification.v11.Cluster § 1.7.4.1

##### events

> `readonly` **events**: `object`

##### events.stateChange

> `readonly` **stateChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated when the StateValue attribute changes.

The StateValue field shall indicate the new value of the StateValue attribute.

###### See

MatterSpecification.v11.Cluster § 1.7.5.1

##### id

> `readonly` **id**: `69`

##### name

> `readonly` **name**: `"BooleanState"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:30

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:65

***

### TlvStateChangeEvent

> `const` **TlvStateChangeEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the BooleanState stateChange event

#### See

MatterSpecification.v11.Cluster § 1.7.5.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:17
