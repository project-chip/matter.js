[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / OnOffSwitchConfiguration

# Namespace: OnOffSwitchConfiguration

## Index

### Enumerations

- [SwitchActions](enumerations/SwitchActions.md)
- [SwitchType](enumerations/SwitchType.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffSwitchConfigurationCluster.d.ts:44

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.switchActions

> `readonly` **switchActions**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`SwitchActions`](enumerations/SwitchActions.md), `any`\>

##### attributes.switchType

> `readonly` **switchType**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`SwitchType`](enumerations/SwitchType.md), `any`\>

##### id

> `readonly` **id**: `7`

##### name

> `readonly` **name**: `"OnOffSwitchConfiguration"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffSwitchConfigurationCluster.d.ts:30

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffSwitchConfigurationCluster.d.ts:47
