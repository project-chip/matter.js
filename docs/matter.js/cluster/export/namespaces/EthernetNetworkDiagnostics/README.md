[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / EthernetNetworkDiagnostics

# Namespace: EthernetNetworkDiagnostics

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [PHYRate](enumerations/PHYRate.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all EthernetNetworkDiagnostics clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.carrierDetect

> `readonly` **carrierDetect**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `boolean`, `any`\>

The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the
ethernet network interface. A value of null shall indicate that the interface is not currently
configured or operational.

###### See

MatterSpecification.v11.Core § 11.15.6.8

##### attributes.fullDuplex

> `readonly` **fullDuplex**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `boolean`, `any`\>

The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating
mode. A value of null shall indicate that the interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.15.6.2

##### attributes.phyRate

> `readonly` **phyRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`PHYRate`](enumerations/PHYRate.md), `any`\>

The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical layer
of the Node. A value of null shall indicate that the interface is not currently configured or
operational.

###### See

MatterSpecification.v11.Core § 11.15.6.1

##### attributes.timeSinceReset

> `readonly` **timeSinceReset**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

###### See

MatterSpecification.v11.Core § 11.15.6

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`]

This metadata controls which EthernetNetworkDiagnosticsCluster elements matter.js activates for specific
feature combinations.

##### features

> `readonly` **features**: `object`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the ethernet interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the ethernet
interface.

##### id

> `readonly` **id**: `55` = `0x37`

##### name

> `readonly` **name**: `"EthernetNetworkDiagnostics"` = `"EthernetNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L183)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:269](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L269)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.carrierDetect

> `readonly` **carrierDetect**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `boolean`, `any`\>

The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the
ethernet network interface. A value of null shall indicate that the interface is not currently
configured or operational.

###### See

MatterSpecification.v11.Core § 11.15.6.8

##### attributes.fullDuplex

> `readonly` **fullDuplex**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `boolean`, `any`\>

The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating
mode. A value of null shall indicate that the interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.15.6.2

##### attributes.phyRate

> `readonly` **phyRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`PHYRate`](enumerations/PHYRate.md), `any`\>

The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical layer
of the Node. A value of null shall indicate that the interface is not currently configured or
operational.

###### See

MatterSpecification.v11.Core § 11.15.6.1

##### attributes.timeSinceReset

> `readonly` **timeSinceReset**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

###### See

MatterSpecification.v11.Core § 11.15.6

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`]

This metadata controls which EthernetNetworkDiagnosticsCluster elements matter.js activates for specific
feature combinations.

##### features

> `readonly` **features**: `object`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the ethernet interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the ethernet
interface.

##### id

> `readonly` **id**: `55` = `0x37`

##### name

> `readonly` **name**: `"EthernetNetworkDiagnostics"` = `"EthernetNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:254](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L254)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:322](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L322)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.carrierDetect

> `readonly` **carrierDetect**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `boolean`, `any`\>

The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the
ethernet network interface. A value of null shall indicate that the interface is not currently
configured or operational.

###### See

MatterSpecification.v11.Core § 11.15.6.8

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.collisionCount

> `readonly` **collisionCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.fullDuplex

> `readonly` **fullDuplex**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `boolean`, `any`\>

The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating
mode. A value of null shall indicate that the interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.15.6.2

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.packetRxCount

> `readonly` **packetRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.packetTxCount

> `readonly` **packetTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.phyRate

> `readonly` **phyRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`PHYRate`](enumerations/PHYRate.md), `any`\>

The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical layer
of the Node. A value of null shall indicate that the interface is not currently configured or
operational.

###### See

MatterSpecification.v11.Core § 11.15.6.1

##### attributes.timeSinceReset

> `readonly` **timeSinceReset**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

###### See

MatterSpecification.v11.Core § 11.15.6

##### attributes.txErrCount

> `readonly` **txErrCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.resetCounts

> `readonly` **resetCounts**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the ethernet interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the ethernet
interface.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`55`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"EthernetNetworkDiagnostics"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L278)

***

### ErrorCountsComponent

> `const` **ErrorCountsComponent**: `object`

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.collisionCount

> `readonly` **collisionCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\>

The CollisionCount attribute shall indicate the number of collisions that have occurred while attempting
to transmit a packet on the ethernet network interface. The CollisionCount attribute shall be reset to 0
upon a reboot of the Node.

###### See

MatterSpecification.v11.Core § 11.15.6.6

##### attributes.overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\>

The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, due
to lack of buffer memory to retain all packets on the ethernet network interface. The OverrunCount
attribute shall be reset to 0 upon a reboot of the Node.

###### See

MatterSpecification.v11.Core § 11.15.6.7

##### attributes.txErrCount

> `readonly` **txErrCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\>

The TxErrCount attribute shall indicate the number of failed packet transmissions that have occurred on
the ethernet network interface. The TxErrCount attribute shall be reset to 0 upon a reboot of the Node.

###### See

MatterSpecification.v11.Core § 11.15.6.5

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L102)

***

### PacketCountsComponent

> `const` **PacketCountsComponent**: `object`

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.packetRxCount

> `readonly` **packetRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\>

The PacketRxCount attribute shall indicate the number of packets that have been received on the ethernet
network interface. The PacketRxCount attribute shall be reset to 0 upon a reboot of the Node.

###### See

MatterSpecification.v11.Core § 11.15.6.3

##### attributes.packetTxCount

> `readonly` **packetTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\>

The PacketTxCount attribute shall indicate the number of packets that have been successfully transferred
on the ethernet network interface. The PacketTxCount attribute shall be reset to 0 upon a reboot of the
Node.

###### See

MatterSpecification.v11.Core § 11.15.6.4

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L78)

***

### PacketCountsOrErrorCountsComponent

> `const` **PacketCountsOrErrorCountsComponent**: `object`

A EthernetNetworkDiagnosticsCluster supports these elements if it supports features PacketCounts or ErrorCounts.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.resetCounts

> `readonly` **resetCounts**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Reception of this command shall reset the following attributes to 0:

  • PacketRxCount

  • PacketTxCount

  • TxErrCount

  • CollisionCount

  • OverrunCount

This command has no associated data.

###### See

MatterSpecification.v11.Core § 11.15.7.1

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L135)
