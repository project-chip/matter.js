[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / EndpointListType

# Enumeration: EndpointListType

[cluster](../modules/cluster.md).EndpointListType

Types of endpoint lists.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.14.9.6

## Table of contents

### Enumeration Members

- [Other](cluster.EndpointListType.md#other)
- [Room](cluster.EndpointListType.md#room)
- [Zone](cluster.EndpointListType.md#zone)

## Enumeration Members

### Other

• **Other** = ``0``

Another group of endpoints, tied specifically to this action, not independently created by the user.

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:155](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L155)

___

### Room

• **Room** = ``1``

User-configured group of endpoints where an endpoint can be in only one room

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:158](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L158)

___

### Zone

• **Zone** = ``2``

User-configured group of endpoints where an endpoint can be in any number of zones

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:161](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L161)
