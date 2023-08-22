[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / EndpointListType

# Enumeration: EndpointListType

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).EndpointListType

The Room and Zone values are provided for the cases where a user (or the system on behalf of the user) has
created logical grouping of the endpoints (e.g. bridged devices) based on location.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.5

## Table of contents

### Enumeration Members

- [Other](cluster_export.Actions.EndpointListType.md#other)
- [Room](cluster_export.Actions.EndpointListType.md#room)
- [Zone](cluster_export.Actions.EndpointListType.md#zone)

## Enumeration Members

### Other

• **Other** = ``0``

Another group of endpoints

This value is provided for the case of an endpoint list which is tied specifically to this action i.e. not
independently created by the user. For Type=Other the Name may be empty. A Matter controller would typically
not use this for anything else than just to know which endpoints would be affected by the action.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:278](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L278)

___

### Room

• **Room** = ``1``

User-configured group of endpoints where an endpoint can be in only one room

Is used for the situation where an endpoint can only be part of one such rooms (e.g. physical mapping).
Using these exposed logical groups, a Matter controller who has a similar grouping concept can use it to
place each endpoint (bridged device) in the right room automatically, without user having to redo that setup
for each device in each system - both at first contact and upon later updates to the endpoints (e.g. user
adds a bridged device or creates a new room).

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:291](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L291)

___

### Zone

• **Zone** = ``2``

User-configured group of endpoints where an endpoint can be in any number of zones

Is a more general concept where an endpoint can be part of multiple zones, e.g. a light in the living

room can be part of the "reading corner" zone (subset of the lights in the living room) but also part of the
"downstairs" zone which contains all the lights on a floor, e.g. combining living room, kitchen and hallway.
This indicates that a user has defined this list of endpoints as something they logically would like to
control as a group, so Matter controllers could provide the user with a way to do as such.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:305](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L305)
