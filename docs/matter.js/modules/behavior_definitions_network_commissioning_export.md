[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/network-commissioning/export

# Module: behavior/definitions/network-commissioning/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_network_commissioning_export._internal_.md)

### Namespaces

- [NetworkCommissioningBehavior](behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior.md)
- [NetworkCommissioningInterface](behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.md)

### Classes

- [NetworkCommissioningServer](../classes/behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md)

### Interfaces

- [NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md)

### Type Aliases

- [AddOrUpdateThreadNetworkRequest](behavior_definitions_network_commissioning_export.md#addorupdatethreadnetworkrequest)
- [AddOrUpdateWiFiNetworkRequest](behavior_definitions_network_commissioning_export.md#addorupdatewifinetworkrequest)
- [ConnectNetworkRequest](behavior_definitions_network_commissioning_export.md#connectnetworkrequest)
- [ConnectNetworkResponse](behavior_definitions_network_commissioning_export.md#connectnetworkresponse)
- [NetworkCommissioningInterface](behavior_definitions_network_commissioning_export.md#networkcommissioninginterface)
- [NetworkConfigResponse](behavior_definitions_network_commissioning_export.md#networkconfigresponse)
- [RemoveNetworkRequest](behavior_definitions_network_commissioning_export.md#removenetworkrequest)
- [ReorderNetworkRequest](behavior_definitions_network_commissioning_export.md#reordernetworkrequest)
- [ScanNetworksRequest](behavior_definitions_network_commissioning_export.md#scannetworksrequest)
- [ScanNetworksResponse](behavior_definitions_network_commissioning_export.md#scannetworksresponse)

### Variables

- [NetworkCommissioningBehavior](behavior_definitions_network_commissioning_export.md#networkcommissioningbehavior)

## Type Aliases

### AddOrUpdateThreadNetworkRequest

Ƭ **AddOrUpdateThreadNetworkRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAddOrUpdateThreadNetworkRequest`](cluster_export.NetworkCommissioning.md#tlvaddorupdatethreadnetworkrequest)\>

This command shall be used to add or modify Thread network configurations.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe Command”), then
this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for behavior of
addition/update.

The XPAN ID in the OperationalDataset serves as the NetworkID for the network configuration to be added or updated.

If the Networks attribute list does not contain an entry with the same NetworkID as the one provided in the
OperationalDataset, the operation shall be considered an addition, otherwise, it shall be considered an update.

**`See`**

MatterSpecification.v11.Core § 11.8.7.4

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:313](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L313)

___

### AddOrUpdateWiFiNetworkRequest

Ƭ **AddOrUpdateWiFiNetworkRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAddOrUpdateWiFiNetworkRequest`](cluster_export.NetworkCommissioning.md#tlvaddorupdatewifinetworkrequest)\>

This command shall be used to add or modify Wi-Fi network configurations.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe Command”), then
this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

The Credentials associated with the network are not readable after execution of this command, as they do not appear
in the Networks attribute list, for security reasons.

See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for behavior of
addition/update.

This field shall contain the SSID to which to attempt connection. Specific BSSID selection is not supported by this
cluster.

**`See`**

MatterSpecification.v11.Core § 11.8.7.3

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L295)

___

### ConnectNetworkRequest

Ƭ **ConnectNetworkRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvConnectNetworkRequest`](cluster_export.NetworkCommissioning.md#tlvconnectnetworkrequest)\>

This command shall attempt to connect to a network whose configuration was previously added by either the
AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its NetworkID.

This command shall fail with a BUSY status code returned to the initiator if the server is currently unable to
proceed with such an operation, such as if it is currently attempting to connect in the background, or is already
proceeding with a prior ConnectNetwork.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe Command”), then
this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

Success or failure of this command shall be communicated by the ConnectNetworkResponse command, unless some data
model validations caused a FAILURE status to be sent prior to finishing execution of the command. The
ConnectNetworkResponse shall indicate the value Success in the NetworkingStatus field on successful connection. On
failure to connect, the ConnectNetworkResponse shall contain an appropriate NetworkingStatus, DebugText and
ErrorValue indicating the reason for failure.

The amount of time needed to determine successful or failing connectivity on the cluster server’s associated
interface is provided by the ConnectMaxTimeSeconds attribute. Clients shall NOT consider the connection to have
timed-out until at least that duration has taken place. For non-concurrent commissioning situations, the client
SHOULD allow additional margin of time to account for its delay in executing operational discovery of the Node once
it is connected to the new network.

On successful connection, the entry associated with the given Network configuration in the Networks attribute shall
indicate its Connected field set to true, and all other entries, if any exist, shall indicate their Connected field
set to false.

On failure to connect, the entry associated with the given Network configuration in the Networks attribute shall
indicate its Connected field set to false.

The precedence order of any entry subject to ConnectNetwork shall NOT change within the Networks attribute.

Even after successfully connecting to a network, the configuration shall revert to the prior state

of configuration if the CommissioningComplete command (see Section 11.9.6.6, “CommissioningComplete Command”) is not
successfully invoked before expiry of the Fail-Safe timer.

When non-concurrent commissioning is being used by a Commissioner or Administrator, it is possible that the only
method to determine success of the operation is operational discovery of the Node on the new operational network.
Therefore, before invoking the ConnectNetwork command, the client SHOULD re-invoke the Arm Fail-Safe command with a
duration that meets the following:

  1. Sufficient time to meet the minimum required time (see Section 11.8.6.4, “ConnectMaxTimeSeconds Attribute”)
     that may be taken by the server to connect to the desired network.

  2. Sufficient time to account for possible message-layer retries when a response is requested.

  3. Sufficient time to allow operational discovery on the new network by a Commissioner or Administrator.

  4. Sufficient time to establish a CASE session after operational discovery

  5. Not so long that, in error situations, the delay to reverting back to being discoverable for commissioning with
     a previous configuration would cause significant user-perceived delay.

Note as well that the CommissioningTimeout duration provided in a prior OpenCommissioningWindow or
OpenBasicCommissioningWindow command may impact the total time available to proceed with error recovery after a
connection failure.

The LastNetworkingStatus, LastNetworkID and LastConnectErrorValue attributes may assist the client in determining
the reason for a failure after reconnecting over a Commissioning channel, especially in non-concurrent commissioning
situations.

This field shall contain the NetworkID for the entry used to configure the connection: the SSID for Wi-Fi and XPAN
ID for Thread.

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

**`See`**

MatterSpecification.v11.Core § 11.8.7.9

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L178)

___

### ConnectNetworkResponse

Ƭ **ConnectNetworkResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvConnectNetworkResponse`](cluster_export.NetworkCommissioning.md#tlvconnectnetworkresponse)\>

Before generating a ConnectNetworkResponse, the server shall:

  • Set the LastNetworkingStatus attribute value to the NetworkingStatus matching the response.

  • Set the LastNetworkID attribute value to the NetworkID that was used in the ConnectNetwork command which caused
    the response to be generated.

  • Set the LastConnectErrorValue attribute value to the ErrorValue matching the response, including setting it to
    null if the ErrorValue is not applicable.

The NetworkingStatus field shall indicate the status of the last connection attempt, taking one of these values:

  • Success: Connection succeeded.

  • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the attempt to join
    the network.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • NetworkIdNotFound: The network identifier was not found among the added network configurations in Networks
    attribute.

  • RegulatoryError: Could not connect to a network due to lack of regulatory configuration.

  • UnknownError: An internal error occurred during the operation.

  • Association errors (see also description of errors in Section 11.8.5.3, “NetworkCommissioningStatusEnum”):
    AuthFailure, UnsupportedSecurity, OtherConnectionFailure, IPV6Failed, IPBindFailed

See Section 11.8.7.2.2, “DebugText Field” for usage.

**`See`**

MatterSpecification.v11.Core § 11.8.7.10

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:214](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L214)

___

### NetworkCommissioningInterface

Ƭ **NetworkCommissioningInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: \{ `wiFiNetworkInterface`: ``true``  } ; `methods`: [`WiFiNetworkInterfaceOrThreadNetworkInterface`](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.WiFiNetworkInterfaceOrThreadNetworkInterface.md)  }, \{ `flags`: \{ `threadNetworkInterface`: ``true``  } ; `methods`: [`WiFiNetworkInterfaceOrThreadNetworkInterface`](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.WiFiNetworkInterfaceOrThreadNetworkInterface.md)  }, \{ `flags`: \{ `wiFiNetworkInterface`: ``true``  } ; `methods`: [`WiFiNetworkInterface`](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.WiFiNetworkInterface.md)  }, \{ `flags`: \{ `threadNetworkInterface`: ``true``  } ; `methods`: [`ThreadNetworkInterface`](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.ThreadNetworkInterface.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:315](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L315)

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:552](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L552)

___

### NetworkConfigResponse

Ƭ **NetworkConfigResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvNetworkConfigResponse`](cluster_export.NetworkCommissioning.md#tlvnetworkconfigresponse)\>

This response command relates status information for some commands which require it as their response command. See
each individual cluster server command for the situations that may cause a NetworkingStatus different than Success.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value to the NetworkID
that was used in the command for which an invocation caused the response to be generated.

The NetworkingStatus field shall indicate the status of the last operation attempting to modify the Networks
attribute configuration, taking one of these values:

  • Success: Operation succeeded.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • BoundsExceeded: Adding this network configuration would exceed the limit defined by Section 11.8.6.1,
    “MaxNetworks Attribute”.

  • NetworkIdNotFound: The network identifier was expected to be found, but was not found among the added network
    configurations in Networks attribute.

  • UnknownError: An internal error occurred during the operation.

See Section 11.8.7.2.2, “DebugText Field” for usage.

**`See`**

MatterSpecification.v11.Core § 11.8.7.8

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L107)

___

### RemoveNetworkRequest

Ƭ **RemoveNetworkRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRemoveNetworkRequest`](cluster_export.NetworkCommissioning.md#tlvremovenetworkrequest)\>

This command shall remove the network configuration from the Cluster if there was already a network configuration
with the same NetworkID. The relative order of the entries in the Networks attribute list shall remain unchanged,
except for the removal of the requested network configuration.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe Command”), then
this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If the Networks attribute does not contain a matching entry, the command shall immediately respond with
NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound.

On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based index of the
entry in the Networks attribute that was just removed, and a NetworkingStatus status field set to Success.

This field shall contain the NetworkID for the entry to remove: the SSID for Wi-Fi and XPAN ID

for Thread.

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

**`See`**

MatterSpecification.v11.Core § 11.8.7.7

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L76)

___

### ReorderNetworkRequest

Ƭ **ReorderNetworkRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvReorderNetworkRequest`](cluster_export.NetworkCommissioning.md#tlvreordernetworkrequest)\>

This command shall set the specific order of the network configuration selected by its NetworkID in the Networks
attribute list to match the position given by NetworkIndex.

This field shall contain the NetworkID for the entry to reorder: the SSID for Wi-Fi and XPAN ID for Thread.

This field shall contain the 0-based index of the new desired position of the entry in the Networks attribute.

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

Effect when received

If the Networks attribute does not contain a matching entry, the command shall immediately respond with
NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound.

If the NetworkIndex field has a value larger or equal to the current number of entries in the Networks attribute,
the command shall immediately respond with NetworkConfigResponse having NetworkingStatus status field set to
OutOfRange.

On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based index of the
entry in the Networks attribute that was just updated, matching the incoming NetworkIndex, and a NetworkingStatus
status field set to Success.

The entry selected shall be inserted at the new position in the list. All other entries, if any exist, shall be
moved to allow the insertion, in a way that they all retain their existing relative order between each other, with
the exception of the newly re-ordered entry.

Re-ordering to the same NetworkIndex as the current location shall be considered as a success and yield no visible
changes of the Networks attribute.

Examples of re-ordering

To better illustrate the re-ordering operation, consider this initial state, exemplary of a Wi-Fi

device:

On receiving ReorderNetwork with:

  • NetworkId = Home-Guest

  • NetworkIndex = 0

The outcome, after applying to the initial state would be:

In the above outcome, FancyCat and BlueDolphin moved "down" and Home-Guest became the highest priority network in
the list.

On receiving ReorderNetwork with:

  • NetworkId = FancyCat

  • NetworkIndex = 3

The outcome, after applying to the initial state would be:

In the above outcome, BlueDolphin, Home-Guest and WillowTree moved "up" and FancyCat became the lowest priority
network in the list.

**`See`**

MatterSpecification.v11.Core § 11.8.7.11

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:276](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L276)

___

### ScanNetworksRequest

Ƭ **ScanNetworksRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvScanNetworksRequest`](cluster_export.NetworkCommissioning.md#tlvscannetworksrequest)\>

This command shall scan on the Cluster instance’s associated network interface for either of:

  • All available networks (non-directed scanning)

  • Specific networks (directed scanning)

Scanning for available networks detects all networks of the type corresponding to the cluster server instance’s
associated network interface that are possible to join, such as all visible Wi-Fi access points for Wi-Fi cluster
server instances, all Thread PANs for Thread cluster server instances, within bounds of the maximum response size.

Scanning for a specific network (i.e. directed scanning) takes place if a network identifier (e.g. Wi-Fi SSID) is
provided in the command arguments. Directed scanning shall restrict the result set to the specified network only.

The client shall NOT expect the server to be done scanning and have responded with ScanNetworksResponse before
ScanMaxTimeSeconds seconds have elapsed. Enough transport time affordances for retries SHOULD be expected before a
client determines the operation to have timed-out.

This command shall fail with a status code of BUSY if the server determines that it will fail to reliably send a
response due to changes of networking interface configuration at runtime for the interface over which the command
was invoked, or if it is currently unable to proceed with such an operation.

Clients shall be resilient to a server that either does not support or cannot proceed with the ScanNetworks command.

**`See`**

MatterSpecification.v11.Core § 11.8.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L39)

___

### ScanNetworksResponse

Ƭ **ScanNetworksResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvScanNetworksResponse`](cluster_export.NetworkCommissioning.md#tlvscannetworksresponse)\>

This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
operation was successful.

Results are valid only if NetworkingStatus is Success.

Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

**`See`**

MatterSpecification.v11.Core § 11.8.7.2

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L52)

## Variables

### NetworkCommissioningBehavior

• `Const` **NetworkCommissioningBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `threadNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``false`` = false; `threadNetworkInterface`: ``false`` = false; `wiFiNetworkInterface`: ``false`` = false }  }] ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``49`` = 0x31; `name`: ``"NetworkCommissioning"`` = "NetworkCommissioning"; `revision`: ``1`` = 1 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`NetworkCommissioningInterface`](behavior_definitions_network_commissioning_export.md#networkcommissioninginterface)\>, [`NetworkCommissioningInterface`](behavior_definitions_network_commissioning_export.md#networkcommissioninginterface)\>

NetworkCommissioningBehavior is the base class for objects that support interaction with NetworkCommissioning.Cluster.

NetworkCommissioning.Cluster requires you to enable one or more optional features. You can do so using NetworkCommissioningBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningBehavior.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningBehavior.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningBehavior.ts#L26)

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningBehavior.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningBehavior.ts#L28)
