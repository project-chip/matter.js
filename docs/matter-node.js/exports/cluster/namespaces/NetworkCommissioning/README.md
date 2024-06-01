[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / NetworkCommissioning

# Namespace: NetworkCommissioning

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [NetworkCommissioningStatus](enumerations/NetworkCommissioningStatus.md)
- [WiFiBand](enumerations/WiFiBand.md)

### Interfaces

- [AddOrUpdateThreadNetworkRequest](interfaces/AddOrUpdateThreadNetworkRequest.md)
- [AddOrUpdateWiFiNetworkRequest](interfaces/AddOrUpdateWiFiNetworkRequest.md)
- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [ConnectNetworkRequest](interfaces/ConnectNetworkRequest.md)
- [ConnectNetworkResponse](interfaces/ConnectNetworkResponse.md)
- [NetworkConfigResponse](interfaces/NetworkConfigResponse.md)
- [NetworkInfoStruct](interfaces/NetworkInfoStruct.md)
- [RemoveNetworkRequest](interfaces/RemoveNetworkRequest.md)
- [ReorderNetworkRequest](interfaces/ReorderNetworkRequest.md)
- [ScanNetworksRequest](interfaces/ScanNetworksRequest.md)
- [ScanNetworksResponse](interfaces/ScanNetworksResponse.md)
- [ThreadInterfaceScanResultStruct](interfaces/ThreadInterfaceScanResultStruct.md)
- [WiFiInterfaceScanResultStruct](interfaces/WiFiInterfaceScanResultStruct.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all NetworkCommissioning clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.interfaceEnabled

> `readonly` **interfaceEnabled**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`boolean`, `any`\>

This attribute shall indicate whether the associated network interface is enabled or not. By default all
network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true).

It is undefined what happens if InterfaceEnabled is written to false on the same interface as that which
is used to write the value. In that case, it is possible that the Administrator would have to await
expiry of the fail-safe, and associated recovery of network configuration to prior safe values, before
being able to communicate with the node again (see Section 11.9.6.2, “ArmFailSafe Command”).

It may be possible to disable Ethernet interfaces but it is implementation-defined. If not supported, a
write to this attribute with a value of false shall fail with a status of INVALID_ACTION. When disabled,
an Ethernet interface would longer employ media detection. That is, a simple unplug and replug of the
cable shall NOT re-enable the interface.

On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server cluster
instances with InterfaceEnabled set to true.

###### See

MatterSpecification.v11.Core § 11.8.6.5

##### attributes.lastConnectErrorValue

> `readonly` **lastConnectErrorValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an
operational network, using this interface, whether by invocation of the ConnectNetwork command or by
autonomous connection after loss of connectivity or during initial establishment. If no such attempt was
made, or no network configurations exist in the Networks attribute, then this attribute shall be set to
null.

If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus
attribute, then this field shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.8

##### attributes.lastNetworkId

> `readonly` **lastNetworkId**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

This attribute shall indicate the NetworkID used in the last attempt to connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

If a network configuration is removed from the Networks attribute using the RemoveNetwork command after
a connection attempt, this field may indicate a NetworkID that is no longer configured on the Node.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.7

##### attributes.lastNetworkingStatus

> `readonly` **lastNetworkingStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`NetworkCommissioningStatus`](enumerations/NetworkCommissioningStatus.md) \| `null`, `any`\>

This attribute shall indicate the status of the last attempt either scan or connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.6

##### attributes.maxNetworks

> `readonly` **maxNetworks**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This shall indicate the maximum number of network configuration entries that can be added, based on
available device resources. The length of the Networks attribute list shall be less than or equal to
this value.

###### See

MatterSpecification.v11.Core § 11.8.6.1

##### attributes.networks

> `readonly` **networks**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This attribute shall indicate the network configurations that are usable on the network interface
represented by this cluster server instance.

The order of configurations in the list reflects precedence. That is, any time the Node attempts to
connect to the network it shall attempt to do so using the configurations in Networks Attribute in the
order as they appear in the list.

The order of list items shall only be modified by the AddOrUpdateThreadNetwork, AddOrUpdateWiFiNetwork
and ReorderNetwork commands. In other words, the list shall be stable over

time, unless mutated externally.

Ethernet networks shall be automatically populated by the cluster server. Ethernet Network Commissioning
Cluster instances shall always have exactly one Section 11.8.5.4, “NetworkInfoStruct” instance in their
Networks attribute. There shall be no way to add, update or remove Ethernet network configurations to
those Cluster instances.

###### See

MatterSpecification.v11.Core § 11.8.6.2

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which NetworkCommissioningCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.ethernetNetworkInterface

> `readonly` **ethernetNetworkInterface**: [`BitFlag`](../../../schema/README.md#bitflag)

EthernetNetworkInterface

Ethernet related features

##### features.threadNetworkInterface

> `readonly` **threadNetworkInterface**: [`BitFlag`](../../../schema/README.md#bitflag)

ThreadNetworkInterface

Thread related features

##### features.wiFiNetworkInterface

> `readonly` **wiFiNetworkInterface**: [`BitFlag`](../../../schema/README.md#bitflag)

WiFiNetworkInterface

Wi-Fi related features

##### id

> `readonly` **id**: `49`

##### name

> `readonly` **name**: `"NetworkCommissioning"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1510

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:4275

***

### ClusterInstance

> `const` **ClusterInstance**: [`ExtensibleOnly`](../MutableCluster/interfaces/ExtensibleOnly.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.interfaceEnabled

> `readonly` **interfaceEnabled**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`boolean`, `any`\>

This attribute shall indicate whether the associated network interface is enabled or not. By default all
network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true).

It is undefined what happens if InterfaceEnabled is written to false on the same interface as that which
is used to write the value. In that case, it is possible that the Administrator would have to await
expiry of the fail-safe, and associated recovery of network configuration to prior safe values, before
being able to communicate with the node again (see Section 11.9.6.2, “ArmFailSafe Command”).

It may be possible to disable Ethernet interfaces but it is implementation-defined. If not supported, a
write to this attribute with a value of false shall fail with a status of INVALID_ACTION. When disabled,
an Ethernet interface would longer employ media detection. That is, a simple unplug and replug of the
cable shall NOT re-enable the interface.

On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server cluster
instances with InterfaceEnabled set to true.

###### See

MatterSpecification.v11.Core § 11.8.6.5

##### attributes.lastConnectErrorValue

> `readonly` **lastConnectErrorValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an
operational network, using this interface, whether by invocation of the ConnectNetwork command or by
autonomous connection after loss of connectivity or during initial establishment. If no such attempt was
made, or no network configurations exist in the Networks attribute, then this attribute shall be set to
null.

If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus
attribute, then this field shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.8

##### attributes.lastNetworkId

> `readonly` **lastNetworkId**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

This attribute shall indicate the NetworkID used in the last attempt to connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

If a network configuration is removed from the Networks attribute using the RemoveNetwork command after
a connection attempt, this field may indicate a NetworkID that is no longer configured on the Node.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.7

##### attributes.lastNetworkingStatus

> `readonly` **lastNetworkingStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`NetworkCommissioningStatus`](enumerations/NetworkCommissioningStatus.md) \| `null`, `any`\>

This attribute shall indicate the status of the last attempt either scan or connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.6

##### attributes.maxNetworks

> `readonly` **maxNetworks**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This shall indicate the maximum number of network configuration entries that can be added, based on
available device resources. The length of the Networks attribute list shall be less than or equal to
this value.

###### See

MatterSpecification.v11.Core § 11.8.6.1

##### attributes.networks

> `readonly` **networks**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This attribute shall indicate the network configurations that are usable on the network interface
represented by this cluster server instance.

The order of configurations in the list reflects precedence. That is, any time the Node attempts to
connect to the network it shall attempt to do so using the configurations in Networks Attribute in the
order as they appear in the list.

The order of list items shall only be modified by the AddOrUpdateThreadNetwork, AddOrUpdateWiFiNetwork
and ReorderNetwork commands. In other words, the list shall be stable over

time, unless mutated externally.

Ethernet networks shall be automatically populated by the cluster server. Ethernet Network Commissioning
Cluster instances shall always have exactly one Section 11.8.5.4, “NetworkInfoStruct” instance in their
Networks attribute. There shall be no way to add, update or remove Ethernet network configurations to
those Cluster instances.

###### See

MatterSpecification.v11.Core § 11.8.6.2

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which NetworkCommissioningCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.ethernetNetworkInterface

> `readonly` **ethernetNetworkInterface**: [`BitFlag`](../../../schema/README.md#bitflag)

EthernetNetworkInterface

Ethernet related features

##### features.threadNetworkInterface

> `readonly` **threadNetworkInterface**: [`BitFlag`](../../../schema/README.md#bitflag)

ThreadNetworkInterface

Thread related features

##### features.wiFiNetworkInterface

> `readonly` **wiFiNetworkInterface**: [`BitFlag`](../../../schema/README.md#bitflag)

WiFiNetworkInterface

Wi-Fi related features

##### id

> `readonly` **id**: `49`

##### name

> `readonly` **name**: `"NetworkCommissioning"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:2883

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:5005

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.connectMaxTimeSeconds

> `readonly` **connectMaxTimeSeconds**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.interfaceEnabled

> `readonly` **interfaceEnabled**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`boolean`, `any`\>

This attribute shall indicate whether the associated network interface is enabled or not. By default all
network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true).

It is undefined what happens if InterfaceEnabled is written to false on the same interface as that which
is used to write the value. In that case, it is possible that the Administrator would have to await
expiry of the fail-safe, and associated recovery of network configuration to prior safe values, before
being able to communicate with the node again (see Section 11.9.6.2, “ArmFailSafe Command”).

It may be possible to disable Ethernet interfaces but it is implementation-defined. If not supported, a
write to this attribute with a value of false shall fail with a status of INVALID_ACTION. When disabled,
an Ethernet interface would longer employ media detection. That is, a simple unplug and replug of the
cable shall NOT re-enable the interface.

On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server cluster
instances with InterfaceEnabled set to true.

###### See

MatterSpecification.v11.Core § 11.8.6.5

##### attributes.lastConnectErrorValue

> `readonly` **lastConnectErrorValue**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an
operational network, using this interface, whether by invocation of the ConnectNetwork command or by
autonomous connection after loss of connectivity or during initial establishment. If no such attempt was
made, or no network configurations exist in the Networks attribute, then this attribute shall be set to
null.

If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus
attribute, then this field shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.8

##### attributes.lastNetworkId

> `readonly` **lastNetworkId**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

This attribute shall indicate the NetworkID used in the last attempt to connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

If a network configuration is removed from the Networks attribute using the RemoveNetwork command after
a connection attempt, this field may indicate a NetworkID that is no longer configured on the Node.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.7

##### attributes.lastNetworkingStatus

> `readonly` **lastNetworkingStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`NetworkCommissioningStatus`](enumerations/NetworkCommissioningStatus.md) \| `null`, `any`\>

This attribute shall indicate the status of the last attempt either scan or connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.6

##### attributes.maxNetworks

> `readonly` **maxNetworks**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This shall indicate the maximum number of network configuration entries that can be added, based on
available device resources. The length of the Networks attribute list shall be less than or equal to
this value.

###### See

MatterSpecification.v11.Core § 11.8.6.1

##### attributes.networks

> `readonly` **networks**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This attribute shall indicate the network configurations that are usable on the network interface
represented by this cluster server instance.

The order of configurations in the list reflects precedence. That is, any time the Node attempts to
connect to the network it shall attempt to do so using the configurations in Networks Attribute in the
order as they appear in the list.

The order of list items shall only be modified by the AddOrUpdateThreadNetwork, AddOrUpdateWiFiNetwork
and ReorderNetwork commands. In other words, the list shall be stable over

time, unless mutated externally.

Ethernet networks shall be automatically populated by the cluster server. Ethernet Network Commissioning
Cluster instances shall always have exactly one Section 11.8.5.4, “NetworkInfoStruct” instance in their
Networks attribute. There shall be no way to add, update or remove Ethernet network configurations to
those Cluster instances.

###### See

MatterSpecification.v11.Core § 11.8.6.2

##### attributes.scanMaxTimeSeconds

> `readonly` **scanMaxTimeSeconds**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands

> `readonly` **commands**: `object`

##### commands.addOrUpdateThreadNetwork

> `readonly` **addOrUpdateThreadNetwork**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.addOrUpdateWiFiNetwork

> `readonly` **addOrUpdateWiFiNetwork**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.connectNetwork

> `readonly` **connectNetwork**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.removeNetwork

> `readonly` **removeNetwork**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.reorderNetwork

> `readonly` **reorderNetwork**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.scanNetworks

> `readonly` **scanNetworks**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

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

##### features.ethernetNetworkInterface

> `readonly` **ethernetNetworkInterface**: [`BitFlag`](../../../schema/README.md#bitflag)

EthernetNetworkInterface

Ethernet related features

##### features.threadNetworkInterface

> `readonly` **threadNetworkInterface**: [`BitFlag`](../../../schema/README.md#bitflag)

ThreadNetworkInterface

Thread related features

##### features.wiFiNetworkInterface

> `readonly` **wiFiNetworkInterface**: [`BitFlag`](../../../schema/README.md#bitflag)

WiFiNetworkInterface

Wi-Fi related features

##### id

> `readonly` **id**: `49`

##### name

> `readonly` **name**: `"NetworkCommissioning"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:4281

***

### ThreadNetworkInterfaceComponent

> `const` **ThreadNetworkInterfaceComponent**: `object`

A NetworkCommissioningCluster supports these elements if it supports feature ThreadNetworkInterface.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.addOrUpdateThreadNetwork

> `readonly` **addOrUpdateThreadNetwork**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall be used to add or modify Thread network configurations.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for
behavior of addition/update.

The XPAN ID in the OperationalDataset serves as the NetworkID for the network configuration to be added
or updated.

If the Networks attribute list does not contain an entry with the same NetworkID as the one provided in
the OperationalDataset, the operation shall be considered an addition, otherwise, it shall be considered
an update.

###### See

MatterSpecification.v11.Core § 11.8.7.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1408

***

### TlvAddOrUpdateThreadNetworkRequest

> `const` **TlvAddOrUpdateThreadNetworkRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

#### See

MatterSpecification.v11.Core § 11.8.7.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:724

***

### TlvAddOrUpdateWiFiNetworkRequest

> `const` **TlvAddOrUpdateWiFiNetworkRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the NetworkCommissioning addOrUpdateWiFiNetwork command

#### See

MatterSpecification.v11.Core § 11.8.7.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:659

***

### TlvConnectNetworkRequest

> `const` **TlvConnectNetworkRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the NetworkCommissioning connectNetwork command

#### See

MatterSpecification.v11.Core § 11.8.7.9

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:467

***

### TlvConnectNetworkResponse

> `const` **TlvConnectNetworkResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Before generating a ConnectNetworkResponse, the server shall:

  • Set the LastNetworkingStatus attribute value to the NetworkingStatus matching the response.

  • Set the LastNetworkID attribute value to the NetworkID that was used in the ConnectNetwork command which
    caused the response to be generated.

  • Set the LastConnectErrorValue attribute value to the ErrorValue matching the response, including setting it
    to null if the ErrorValue is not applicable.

#### See

MatterSpecification.v11.Core § 11.8.7.10

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:502

***

### TlvNetworkConfigResponse

> `const` **TlvNetworkConfigResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This response command relates status information for some commands which require it as their response command.
See each individual cluster server command for the situations that may cause a NetworkingStatus different than
Success.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value to the
NetworkID that was used in the command for which an invocation caused the response to be generated.

#### See

MatterSpecification.v11.Core § 11.8.7.8

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:412

***

### TlvNetworkInfoStruct

> `const` **TlvNetworkInfoStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks attribute.

#### See

MatterSpecification.v11.Core § 11.8.5.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:754

***

### TlvRemoveNetworkRequest

> `const` **TlvRemoveNetworkRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the NetworkCommissioning removeNetwork command

#### See

MatterSpecification.v11.Core § 11.8.7.7

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:376

***

### TlvReorderNetworkRequest

> `const` **TlvReorderNetworkRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the NetworkCommissioning reorderNetwork command

#### See

MatterSpecification.v11.Core § 11.8.7.11

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:578

***

### TlvScanNetworksRequest

> `const` **TlvScanNetworksRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the NetworkCommissioning scanNetworks command

#### See

MatterSpecification.v11.Core § 11.8.7.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:18

***

### TlvScanNetworksResponse

> `const` **TlvScanNetworksResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
operation was successful.

Results are valid only if NetworkingStatus is Success.

Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

#### See

MatterSpecification.v11.Core § 11.8.7.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:246

***

### TlvThreadInterfaceScanResultStruct

> `const` **TlvThreadInterfaceScanResultStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

ThreadInterfaceScanResultStruct represents a single Thread network scan result.

#### See

MatterSpecification.v11.Core § 11.8.5.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:213

***

### TlvWiFiInterfaceScanResultStruct

> `const` **TlvWiFiInterfaceScanResultStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.

#### See

MatterSpecification.v11.Core § 11.8.5.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:161

***

### WiFiNetworkInterfaceComponent

> `const` **WiFiNetworkInterfaceComponent**: `object`

A NetworkCommissioningCluster supports these elements if it supports feature WiFiNetworkInterface.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.addOrUpdateWiFiNetwork

> `readonly` **addOrUpdateWiFiNetwork**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall be used to add or modify Wi-Fi network configurations.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

The Credentials associated with the network are not readable after execution of this command, as they do
not appear in the Networks attribute list, for security reasons.

See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for
behavior of addition/update.

###### See

MatterSpecification.v11.Core § 11.8.7.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1300

***

### WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent

> `const` **WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent**: `object`

A NetworkCommissioningCluster supports these elements if it supports features WiFiNetworkInterface or
ThreadNetworkInterface.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.connectMaxTimeSeconds

> `readonly` **connectMaxTimeSeconds**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum duration taken, in seconds, by the network interface on this
cluster server instance to report a successful or failed network connection indication. This maximum
time shall account for all operations needed until a successful network connection is deemed to have
occurred, including, for example, obtaining IP addresses, or the execution of necessary internal retries.

###### See

MatterSpecification.v11.Core § 11.8.6.4

##### attributes.scanMaxTimeSeconds

> `readonly` **scanMaxTimeSeconds**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum duration taken, in seconds, by the network interface on this
cluster server instance to provide scan results.

See Section 11.8.7.1, “ScanNetworks Command” for usage.

###### See

MatterSpecification.v11.Core § 11.8.6.3

##### commands

> `readonly` **commands**: `object`

##### commands.connectNetwork

> `readonly` **connectNetwork**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall attempt to connect to a network whose configuration was previously added by either
the AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its NetworkID.

This command shall fail with a BUSY status code returned to the initiator if the server is currently
unable to proceed with such an operation, such as if it is currently attempting to connect in the
background, or is already proceeding with a prior ConnectNetwork.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

Success or failure of this command shall be communicated by the ConnectNetworkResponse command, unless
some data model validations caused a FAILURE status to be sent prior to finishing execution of the
command. The ConnectNetworkResponse shall indicate the value Success in the NetworkingStatus field on
successful connection. On failure to connect, the ConnectNetworkResponse shall contain an appropriate
NetworkingStatus, DebugText and ErrorValue indicating the reason for failure.

The amount of time needed to determine successful or failing connectivity on the cluster server’s
associated interface is provided by the ConnectMaxTimeSeconds attribute. Clients shall NOT consider the
connection to have timed-out until at least that duration has taken place. For non-concurrent
commissioning situations, the client SHOULD allow additional margin of time to account for its delay in
executing operational discovery of the Node once it is connected to the new network.

On successful connection, the entry associated with the given Network configuration in the Networks
attribute shall indicate its Connected field set to true, and all other entries, if any exist, shall
indicate their Connected field set to false.

On failure to connect, the entry associated with the given Network configuration in the Networks
attribute shall indicate its Connected field set to false.

The precedence order of any entry subject to ConnectNetwork shall NOT change within the Networks
attribute.

Even after successfully connecting to a network, the configuration shall revert to the prior state

of configuration if the CommissioningComplete command (see Section 11.9.6.6, “CommissioningComplete
Command”) is not successfully invoked before expiry of the Fail-Safe timer.

When non-concurrent commissioning is being used by a Commissioner or Administrator, it is possible that
the only method to determine success of the operation is operational discovery of the Node on the new
operational network. Therefore, before invoking the ConnectNetwork command, the client SHOULD re-invoke
the Arm Fail-Safe command with a duration that meets the following:

  1. Sufficient time to meet the minimum required time (see Section 11.8.6.4, “ConnectMaxTimeSeconds
     Attribute”) that may be taken by the server to connect to the desired network.

  2. Sufficient time to account for possible message-layer retries when a response is requested.

  3. Sufficient time to allow operational discovery on the new network by a Commissioner or
     Administrator.

  4. Sufficient time to establish a CASE session after operational discovery

  5. Not so long that, in error situations, the delay to reverting back to being discoverable for
     commissioning with a previous configuration would cause significant user-perceived delay.

Note as well that the CommissioningTimeout duration provided in a prior OpenCommissioningWindow or
OpenBasicCommissioningWindow command may impact the total time available to proceed with error recovery
after a connection failure.

The LastNetworkingStatus, LastNetworkID and LastConnectErrorValue attributes may assist the client in
determining the reason for a failure after reconnecting over a Commissioning channel, especially in
non-concurrent commissioning situations.

###### See

MatterSpecification.v11.Core § 11.8.7.9

##### commands.removeNetwork

> `readonly` **removeNetwork**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall remove the network configuration from the Cluster if there was already a network
configuration with the same NetworkID. The relative order of the entries in the Networks attribute list
shall remain unchanged, except for the removal of the requested network configuration.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If the Networks attribute does not contain a matching entry, the command shall immediately respond with
NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound.

On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based
index of the entry in the Networks attribute that was just removed, and a NetworkingStatus status field
set to Success.

###### See

MatterSpecification.v11.Core § 11.8.7.7

##### commands.reorderNetwork

> `readonly` **reorderNetwork**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall set the specific order of the network configuration selected by its NetworkID in the
Networks attribute list to match the position given by NetworkIndex.

###### See

MatterSpecification.v11.Core § 11.8.7.11

##### commands.scanNetworks

> `readonly` **scanNetworks**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This command shall scan on the Cluster instance’s associated network interface for either of:

  • All available networks (non-directed scanning)

  • Specific networks (directed scanning)

Scanning for available networks detects all networks of the type corresponding to the cluster server
instance’s associated network interface that are possible to join, such as all visible Wi-Fi access
points for Wi-Fi cluster server instances, all Thread PANs for Thread cluster server instances, within
bounds of the maximum response size.

Scanning for a specific network (i.e. directed scanning) takes place if a network identifier (e.g. Wi-Fi
SSID) is provided in the command arguments. Directed scanning shall restrict the result set to the
specified network only.

The client shall NOT expect the server to be done scanning and have responded with ScanNetworksResponse
before ScanMaxTimeSeconds seconds have elapsed. Enough transport time affordances for retries SHOULD be
expected before a client determines the operation to have timed-out.

This command shall fail with a status code of BUSY if the server determines that it will fail to
reliably send a response due to changes of networking interface configuration at runtime for the
interface over which the command was invoked, or if it is currently unable to proceed with such an
operation.

Clients shall be resilient to a server that either does not support or cannot proceed with the
ScanNetworks command.

###### See

MatterSpecification.v11.Core § 11.8.7.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:802

***

### WiFiSecurityBitmap

> `const` **WiFiSecurityBitmap**: `object`

WiFiSecurityBitmap encodes the supported Wi-Fi security types present in the Security field of the
WiFiInterfaceScanResultStruct.

#### See

MatterSpecification.v11.Core § 11.8.5.1

#### Type declaration

##### unencrypted

> **unencrypted**: [`BitFlag`](../../../schema/README.md#bitflag)

Supports unencrypted Wi-Fi

##### wep

> **wep**: [`BitFlag`](../../../schema/README.md#bitflag)

Supports Wi-Fi using WEP security

##### wpa2Personal

> **wpa2Personal**: [`BitFlag`](../../../schema/README.md#bitflag)

Supports Wi-Fi using WPA2-Personal security

##### wpa3Personal

> **wpa3Personal**: [`BitFlag`](../../../schema/README.md#bitflag)

Supports Wi-Fi using WPA3-Personal security

##### wpaPersonal

> **wpaPersonal**: [`BitFlag`](../../../schema/README.md#bitflag)

Supports Wi-Fi using WPA-Personal security

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:106
