[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / OnOffSwitchConfiguration

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

[packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts#L52)

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

> `readonly` **id**: `7` = `0x7`

##### name

> `readonly` **name**: `"OnOffSwitchConfiguration"` = `"OnOffSwitchConfiguration"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts#L37)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts#L55)
