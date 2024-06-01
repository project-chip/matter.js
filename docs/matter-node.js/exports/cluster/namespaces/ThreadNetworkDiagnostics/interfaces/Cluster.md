[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / Cluster

# Interface: Cluster

Thread Network Diagnostics

The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be
used by a Node to assist a user or Administrator in diagnosing potential problems. The Thread Network
Diagnostics Cluster attempts to centralize all metrics that are relevant to a potential Thread radio running on
a Node.

ThreadNetworkDiagnosticsCluster supports optional features that you can enable with the
ThreadNetworkDiagnosticsCluster.with() factory method.

## See

MatterSpecification.v11.Core § 11.13

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### activeNetworkFaults

> `readonly` **activeNetworkFaults**: [`Attribute`](../../../interfaces/Attribute.md)\<[`NetworkFault`](../enumerations/NetworkFault.md)[], `any`\>

The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node.

When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to
this list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When
the Node detects that all conditions contributing to a fault has been cleared, the corresponding
NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange

###### See

MatterSpecification.v11.Core § 11.13.6.63

##### activeTimestamp

> `readonly` **activeTimestamp**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number` \| `bigint`, `any`\>

This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.57

##### channel

> `readonly` **channel**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The Channel attribute shall indicate the 802.15.4 channel number configured on the Node’s Thread
interface (that is, the Active Operational Dataset’s current Channel value). A value of null shall
indicate that the Thread interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.1

##### channelPage0Mask

> `readonly` **channelPage0Mask**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM band. The
channels are represented in most significant bit order, with bit value 1 meaning selected, bit value 0
meaning unselected. For example, the most significant bit of the left-most byte indicates channel 0. If
channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. This attribute shall be null when
there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.61

##### dataVersion

> `readonly` **dataVersion**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The DataVersion attribute shall indicate the full Network Data Version the Node currently uses. This
attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.12

##### delay

> `readonly` **delay**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.59

##### extendedPanId

> `readonly` **extendedPanId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

The ExtendedPanId attribute shall indicate the unique 64-bit identifier of the Node on the Thread
network. A value of null shall indicate that the Thread interface is not currently configured or
operational.

###### See

MatterSpecification.v11.Core § 11.13.6.5

##### leaderRouterId

> `readonly` **leaderRouterId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The LeaderRouterId attribute shall indicate the 8-bit LeaderRouterId the Node shall attempt to utilize
upon becoming a router or leader on the Thread network. This attribute shall be null if not attached to
a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.14

##### meshLocalPrefix

> `readonly` **meshLocalPrefix**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

The MeshLocalPrefix attribute shall indicate the mesh-local IPv6 prefix for the Thread network that the
Node has been configured to join to. A value of null shall indicate that the Thread interface is not
currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.6

##### neighborTable

> `readonly` **neighborTable**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The NeighborTable attribute shall indicate the current list of Nodes that comprise the neighbor table on
the Node.

###### See

MatterSpecification.v11.Core § 11.13.6.8

##### networkName

> `readonly` **networkName**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `string`, `any`\>

The NetworkName attribute shall indicate a human-readable (displayable) name for the Thread network that
the Node has been configured to join to. A value of null shall indicate that the Thread interface is not
currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.3

##### operationalDatasetComponents

> `readonly` **operationalDatasetComponents**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of various
operationally acquired values.

###### See

MatterSpecification.v11.Core § 11.13.6.62

##### panId

> `readonly` **panId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The PanId attribute shall indicate the 16-bit identifier of the Node on the Thread network. A value of
null shall indicate that the Thread interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.4

##### partitionId

> `readonly` **partitionId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The PartitionId attribute shall indicate the Thread Leader Partition Id for the Thread network to which
the Node is joined. This attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.10

##### pendingTimestamp

> `readonly` **pendingTimestamp**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number` \| `bigint`, `any`\>

This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.58

##### routeTable

> `readonly` **routeTable**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The RouteTable attribute shall indicate the current list of router capable Nodes for which routes have
been established.

###### See

MatterSpecification.v11.Core § 11.13.6.9

##### routingRole

> `readonly` **routingRole**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`RoutingRole`](../enumerations/RoutingRole.md), `any`\>

The RoutingRole attribute shall indicate the role that this Node has within the routing of messages
through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined in the
following table. A value of null shall indicate that the Thread interface is not currently configured or
operational.

###### See

MatterSpecification.v11.Core § 11.13.6.2

##### securityPolicy

> `readonly` **securityPolicy**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The SecurityPolicy attribute indicates the current security policies for the Thread partition to which a
Node is connected. This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.60

##### stableDataVersion

> `readonly` **stableDataVersion**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The StableDataVersion attribute shall indicate the Network Data Version for the stable subset of

data the Node currently uses. This attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.13

##### weighting

> `readonly` **weighting**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The Weighting attribute shall indicate the Thread Leader Weight used when operating in the Leader role.
This attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.11

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Thread network has
changed.

##### See

MatterSpecification.v11.Core § 11.13.8.2

#### networkFaultChange

> `readonly` **networkFaultChange**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

##### See

MatterSpecification.v11.Core § 11.13.8.1

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: readonly [`object`, `object`, `object`]

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

ErrorCounts

Server supports the counts for the number of errors that have occurred during the reception and
transmission of packets on the Thread interface.

#### macCounts

> `readonly` **macCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

MacCounts

Server supports the counts for various MAC layer happenings.

#### mleCounts

> `readonly` **mleCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

MleCounts

Server supports the counts for various MLE layer happenings.

#### packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

PacketCounts

Server supports the counts for the number of received and transmitted packets on the Thread interface.

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`53`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"ThreadNetworkDiagnostics"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `1`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
