[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / EthernetNetworkDiagnostics

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

> `readonly` **carrierDetect**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean` \| `null`, `any`\>

The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the
ethernet network interface. A value of null shall indicate that the interface is not currently
configured or operational.

###### See

MatterSpecification.v11.Core § 11.15.6.8

##### attributes.fullDuplex

> `readonly` **fullDuplex**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean` \| `null`, `any`\>

The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating
mode. A value of null shall indicate that the interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.15.6.2

##### attributes.phyRate

> `readonly` **phyRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`PHYRate`](enumerations/PHYRate.md) \| `null`, `any`\>

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

> `readonly` **errorCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the ethernet interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the ethernet
interface.

##### id

> `readonly` **id**: `55`

##### name

> `readonly` **name**: `"EthernetNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:157

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:495

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.carrierDetect

> `readonly` **carrierDetect**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean` \| `null`, `any`\>

The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the
ethernet network interface. A value of null shall indicate that the interface is not currently
configured or operational.

###### See

MatterSpecification.v11.Core § 11.15.6.8

##### attributes.fullDuplex

> `readonly` **fullDuplex**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean` \| `null`, `any`\>

The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating
mode. A value of null shall indicate that the interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.15.6.2

##### attributes.phyRate

> `readonly` **phyRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`PHYRate`](enumerations/PHYRate.md) \| `null`, `any`\>

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

> `readonly` **errorCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the ethernet interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the ethernet
interface.

##### id

> `readonly` **id**: `55`

##### name

> `readonly` **name**: `"EthernetNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:321

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:703

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_AttributeId/README.md)[], `never`\>

##### attributes.carrierDetect

> `readonly` **carrierDetect**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean` \| `null`, `any`\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.collisionCount

> `readonly` **collisionCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.fullDuplex

> `readonly` **fullDuplex**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean` \| `null`, `any`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.packetRxCount

> `readonly` **packetRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.packetTxCount

> `readonly` **packetTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.phyRate

> `readonly` **phyRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`PHYRate`](enumerations/PHYRate.md) \| `null`, `any`\>

##### attributes.timeSinceReset

> `readonly` **timeSinceReset**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

##### attributes.txErrCount

> `readonly` **txErrCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands

> `readonly` **commands**: `object`

##### commands.resetCounts

> `readonly` **resetCounts**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### features

> `readonly` **features**: `object`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the ethernet interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the ethernet
interface.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"EthernetNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:501

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

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:82

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

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:60

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

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:112
