[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / EndpointListType

# Enumeration: EndpointListType

[exports/cluster](../modules/exports_cluster.md).EndpointListType

Types of endpoint lists.

**`See`**

MatterCoreSpecificationV1_0 § 9.14.9.6

## Table of contents

### Enumeration Members

- [Other](exports_cluster.EndpointListType.md#other)
- [Room](exports_cluster.EndpointListType.md#room)
- [Zone](exports_cluster.EndpointListType.md#zone)

## Enumeration Members

### Other

• **Other** = ``0``

Another group of endpoints, tied specifically to this action, not independently created by the user.

#### Defined in

packages/matter.js/dist/cjs/cluster/ActionsCluster.d.ts:62

___

### Room

• **Room** = ``1``

User-configured group of endpoints where an endpoint can be in only one room

#### Defined in

packages/matter.js/dist/cjs/cluster/ActionsCluster.d.ts:64

___

### Zone

• **Zone** = ``2``

User-configured group of endpoints where an endpoint can be in any number of zones

#### Defined in

packages/matter.js/dist/cjs/cluster/ActionsCluster.d.ts:66
