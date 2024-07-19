[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/thread-network-diagnostics/export](../modules/behavior_definitions_thread_network_diagnostics_export.md) / [ThreadNetworkDiagnosticsBehavior](../modules/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.md) / State

# Interface: State

[behavior/definitions/thread-network-diagnostics/export](../modules/behavior_definitions_thread_network_diagnostics_export.md).[ThreadNetworkDiagnosticsBehavior](../modules/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_thread_network_diagnostics_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [activeNetworkFaults](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#activenetworkfaults)
- [activeTimestamp](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#activetimestamp)
- [channel](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#channel)
- [channelPage0Mask](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#channelpage0mask)
- [dataVersion](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#dataversion)
- [delay](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#delay)
- [extendedPanId](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#extendedpanid)
- [leaderRouterId](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#leaderrouterid)
- [meshLocalPrefix](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#meshlocalprefix)
- [neighborTable](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#neighbortable)
- [networkName](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#networkname)
- [operationalDatasetComponents](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#operationaldatasetcomponents)
- [panId](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#panid)
- [partitionId](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#partitionid)
- [pendingTimestamp](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#pendingtimestamp)
- [routeTable](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#routetable)
- [routingRole](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#routingrole)
- [securityPolicy](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#securitypolicy)
- [stableDataVersion](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#stabledataversion)
- [weighting](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.State.md#weighting)

## Properties

### activeNetworkFaults

• **activeNetworkFaults**: [`NetworkFault`](../enums/cluster_export.ThreadNetworkDiagnostics.NetworkFault.md)[]

The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node.

When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to
this list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When
the Node detects that all conditions contributing to a fault has been cleared, the corresponding
NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange

**`See`**

MatterSpecification.v11.Core § 11.13.6.63

#### Inherited from

StateType.activeNetworkFaults

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1161](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1161)

___

### activeTimestamp

• `Optional` **activeTimestamp**: ``null`` \| `number` \| `bigint`

This attribute shall be null when there is no dataset configured.

**`See`**

MatterSpecification.v11.Core § 11.13.6.57

#### Inherited from

StateType.activeTimestamp

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1106](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1106)

___

### channel

• **channel**: ``null`` \| `number`

The Channel attribute shall indicate the 802.15.4 channel number configured on the Node’s Thread
interface (that is, the Active Operational Dataset’s current Channel value). A value of null shall
indicate that the Thread interface is not currently configured or operational.

**`See`**

MatterSpecification.v11.Core § 11.13.6.1

#### Inherited from

StateType.channel

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:996](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L996)

___

### channelPage0Mask

• **channelPage0Mask**: ``null`` \| `Uint8Array`

The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM band. The
channels are represented in most significant bit order, with bit value 1 meaning selected, bit value 0
meaning unselected. For example, the most significant bit of the left-most byte indicates channel 0. If
channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. This attribute shall be null when
there is no dataset configured.

**`See`**

MatterSpecification.v11.Core § 11.13.6.61

#### Inherited from

StateType.channelPage0Mask

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1139](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1139)

___

### dataVersion

• **dataVersion**: ``null`` \| `number`

The DataVersion attribute shall indicate the full Network Data Version the Node currently uses. This
attribute shall be null if not attached to a Thread network.

**`See`**

MatterSpecification.v11.Core § 11.13.6.12

#### Inherited from

StateType.dataVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1081](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1081)

___

### delay

• `Optional` **delay**: ``null`` \| `number`

This attribute shall be null when there is no dataset configured.

**`See`**

MatterSpecification.v11.Core § 11.13.6.59

#### Inherited from

StateType.delay

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1120](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1120)

___

### extendedPanId

• **extendedPanId**: ``null`` \| `number` \| `bigint`

The ExtendedPanId attribute shall indicate the unique 64-bit identifier of the Node on the Thread
network. A value of null shall indicate that the Thread interface is not currently configured or
operational.

**`See`**

MatterSpecification.v11.Core § 11.13.6.5

#### Inherited from

StateType.extendedPanId

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1032](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1032)

___

### leaderRouterId

• **leaderRouterId**: ``null`` \| `number`

The LeaderRouterId attribute shall indicate the 8-bit LeaderRouterId the Node shall attempt to utilize
upon becoming a router or leader on the Thread network. This attribute shall be null if not attached to
a Thread network.

**`See`**

MatterSpecification.v11.Core § 11.13.6.14

#### Inherited from

StateType.leaderRouterId

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1099](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1099)

___

### meshLocalPrefix

• **meshLocalPrefix**: ``null`` \| `Uint8Array`

The MeshLocalPrefix attribute shall indicate the mesh-local IPv6 prefix for the Thread network that the
Node has been configured to join to. A value of null shall indicate that the Thread interface is not
currently configured or operational.

**`See`**

MatterSpecification.v11.Core § 11.13.6.6

#### Inherited from

StateType.meshLocalPrefix

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1041](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1041)

___

### neighborTable

• **neighborTable**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `age`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `averageRssi`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `extAddress`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `frameErrorRate`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `fullNetworkData`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `fullThreadDevice`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `isChild`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `lastRssi`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `linkFrameCounter`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `lqi`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `messageErrorRate`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `mleFrameCounter`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rloc16`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rxOnWhenIdle`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>[]

The NeighborTable attribute shall indicate the current list of Nodes that comprise the neighbor table on
the Node.

**`See`**

MatterSpecification.v11.Core § 11.13.6.8

#### Inherited from

StateType.neighborTable

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1049](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1049)

___

### networkName

• **networkName**: ``null`` \| `string`

The NetworkName attribute shall indicate a human-readable (displayable) name for the Thread network that
the Node has been configured to join to. A value of null shall indicate that the Thread interface is not
currently configured or operational.

**`See`**

MatterSpecification.v11.Core § 11.13.6.3

#### Inherited from

StateType.networkName

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1015](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1015)

___

### operationalDatasetComponents

• **operationalDatasetComponents**: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `activeTimestampPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `channelMaskPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `channelPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `delayPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `extendedPanIdPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `masterKeyPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `meshLocalPrefixPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `networkNamePresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `panIdPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `pendingTimestampPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `pskcPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `securityPolicyPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>

The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of various
operationally acquired values.

**`See`**

MatterSpecification.v11.Core § 11.13.6.62

#### Inherited from

StateType.operationalDatasetComponents

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1147](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1147)

___

### panId

• **panId**: ``null`` \| `number`

The PanId attribute shall indicate the 16-bit identifier of the Node on the Thread network. A value of
null shall indicate that the Thread interface is not currently configured or operational.

**`See`**

MatterSpecification.v11.Core § 11.13.6.4

#### Inherited from

StateType.panId

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1023](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1023)

___

### partitionId

• **partitionId**: ``null`` \| `number`

The PartitionId attribute shall indicate the Thread Leader Partition Id for the Thread network to which
the Node is joined. This attribute shall be null if not attached to a Thread network.

**`See`**

MatterSpecification.v11.Core § 11.13.6.10

#### Inherited from

StateType.partitionId

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1065](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1065)

___

### pendingTimestamp

• `Optional` **pendingTimestamp**: ``null`` \| `number` \| `bigint`

This attribute shall be null when there is no dataset configured.

**`See`**

MatterSpecification.v11.Core § 11.13.6.58

#### Inherited from

StateType.pendingTimestamp

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1113](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1113)

___

### routeTable

• **routeTable**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `age`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `allocated`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `extAddress`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `linkEstablished`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `lqiIn`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `lqiOut`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `nextHop`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pathCost`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rloc16`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `routerId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[]

The RouteTable attribute shall indicate the current list of router capable Nodes for which routes have
been established.

**`See`**

MatterSpecification.v11.Core § 11.13.6.9

#### Inherited from

StateType.routeTable

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1057](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1057)

___

### routingRole

• **routingRole**: ``null`` \| [`RoutingRole`](../enums/cluster_export.ThreadNetworkDiagnostics.RoutingRole.md)

The RoutingRole attribute shall indicate the role that this Node has within the routing of messages
through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined in the
following table. A value of null shall indicate that the Thread interface is not currently configured or
operational.

**`See`**

MatterSpecification.v11.Core § 11.13.6.2

#### Inherited from

StateType.routingRole

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1006](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1006)

___

### securityPolicy

• **securityPolicy**: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `flags`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rotationTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>

The SecurityPolicy attribute indicates the current security policies for the Thread partition to which a
Node is connected. This attribute shall be null when there is no dataset configured.

**`See`**

MatterSpecification.v11.Core § 11.13.6.60

#### Inherited from

StateType.securityPolicy

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1128](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1128)

___

### stableDataVersion

• **stableDataVersion**: ``null`` \| `number`

The StableDataVersion attribute shall indicate the Network Data Version for the stable subset of

data the Node currently uses. This attribute shall be null if not attached to a Thread network.

**`See`**

MatterSpecification.v11.Core § 11.13.6.13

#### Inherited from

StateType.stableDataVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1090](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1090)

___

### weighting

• **weighting**: ``null`` \| `number`

The Weighting attribute shall indicate the Thread Leader Weight used when operating in the Leader role.
This attribute shall be null if not attached to a Thread network.

**`See`**

MatterSpecification.v11.Core § 11.13.6.11

#### Inherited from

StateType.weighting

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1073](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1073)
