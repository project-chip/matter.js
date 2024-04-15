[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/network-commissioning/export](../modules/behavior_definitions_network_commissioning_export.md) / [NetworkCommissioningInterface](../modules/behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.md) / WiFiNetworkInterfaceOrThreadNetworkInterface

# Interface: WiFiNetworkInterfaceOrThreadNetworkInterface

[behavior/definitions/network-commissioning/export](../modules/behavior_definitions_network_commissioning_export.md).[NetworkCommissioningInterface](../modules/behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.md).WiFiNetworkInterfaceOrThreadNetworkInterface

## Table of contents

### Methods

- [connectNetwork](behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.WiFiNetworkInterfaceOrThreadNetworkInterface.md#connectnetwork)
- [removeNetwork](behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.WiFiNetworkInterfaceOrThreadNetworkInterface.md#removenetwork)
- [reorderNetwork](behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.WiFiNetworkInterfaceOrThreadNetworkInterface.md#reordernetwork)
- [scanNetworks](behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.WiFiNetworkInterfaceOrThreadNetworkInterface.md#scannetworks)

## Methods

### connectNetwork

▸ **connectNetwork**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>\>

This command shall attempt to connect to a network whose configuration was previously added by either the
AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its NetworkID.

This command shall fail with a BUSY status code returned to the initiator if the server is currently unable
to proceed with such an operation, such as if it is currently attempting to connect in the background, or is
already proceeding with a prior ConnectNetwork.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

Success or failure of this command shall be communicated by the ConnectNetworkResponse command, unless some
data model validations caused a FAILURE status to be sent prior to finishing execution of the command. The
ConnectNetworkResponse shall indicate the value Success in the NetworkingStatus field on successful
connection. On failure to connect, the ConnectNetworkResponse shall contain an appropriate NetworkingStatus,
DebugText and ErrorValue indicating the reason for failure.

The amount of time needed to determine successful or failing connectivity on the cluster server’s associated
interface is provided by the ConnectMaxTimeSeconds attribute. Clients shall NOT consider the connection to
have timed-out until at least that duration has taken place. For non-concurrent commissioning situations,
the client SHOULD allow additional margin of time to account for its delay in executing operational
discovery of the Node once it is connected to the new network.

On successful connection, the entry associated with the given Network configuration in the Networks
attribute shall indicate its Connected field set to true, and all other entries, if any exist, shall
indicate their Connected field set to false.

On failure to connect, the entry associated with the given Network configuration in the Networks attribute
shall indicate its Connected field set to false.

The precedence order of any entry subject to ConnectNetwork shall NOT change within the Networks attribute.

Even after successfully connecting to a network, the configuration shall revert to the prior state

of configuration if the CommissioningComplete command (see Section 11.9.6.6, “CommissioningComplete
Command”) is not successfully invoked before expiry of the Fail-Safe timer.

When non-concurrent commissioning is being used by a Commissioner or Administrator, it is possible that the
only method to determine success of the operation is operational discovery of the Node on the new
operational network. Therefore, before invoking the ConnectNetwork command, the client SHOULD re-invoke the
Arm Fail-Safe command with a duration that meets the following:

  1. Sufficient time to meet the minimum required time (see Section 11.8.6.4, “ConnectMaxTimeSeconds
     Attribute”) that may be taken by the server to connect to the desired network.

  2. Sufficient time to account for possible message-layer retries when a response is requested.

  3. Sufficient time to allow operational discovery on the new network by a Commissioner or Administrator.

  4. Sufficient time to establish a CASE session after operational discovery

  5. Not so long that, in error situations, the delay to reverting back to being discoverable for
     commissioning with a previous configuration would cause significant user-perceived delay.

Note as well that the CommissioningTimeout duration provided in a prior OpenCommissioningWindow or
OpenBasicCommissioningWindow command may impact the total time available to proceed with error recovery
after a connection failure.

The LastNetworkingStatus, LastNetworkID and LastConnectErrorValue attributes may assist the client in
determining the reason for a failure after reconnecting over a Commissioning channel, especially in
non-concurrent commissioning situations.

This field shall contain the NetworkID for the entry used to configure the connection: the SSID for Wi-Fi
and XPAN ID for Thread.

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.8.7.9

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:442](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L442)

___

### removeNetwork

▸ **removeNetwork**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>\>

This command shall remove the network configuration from the Cluster if there was already a network
configuration with the same NetworkID. The relative order of the entries in the Networks attribute list
shall remain unchanged, except for the removal of the requested network configuration.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If the Networks attribute does not contain a matching entry, the command shall immediately respond with
NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound.

On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based index of
the entry in the Networks attribute that was just removed, and a NetworkingStatus status field set to
Success.

This field shall contain the NetworkID for the entry to remove: the SSID for Wi-Fi and XPAN ID

for Thread.

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.8.7.7

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:371](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L371)

___

### reorderNetwork

▸ **reorderNetwork**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>\>

This command shall set the specific order of the network configuration selected by its NetworkID in the
Networks attribute list to match the position given by NetworkIndex.

This field shall contain the NetworkID for the entry to reorder: the SSID for Wi-Fi and XPAN ID for Thread.

This field shall contain the 0-based index of the new desired position of the entry in the Networks
attribute.

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

Effect when received

If the Networks attribute does not contain a matching entry, the command shall immediately respond with
NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound.

If the NetworkIndex field has a value larger or equal to the current number of entries in the Networks
attribute, the command shall immediately respond with NetworkConfigResponse having NetworkingStatus status
field set to OutOfRange.

On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based index of
the entry in the Networks attribute that was just updated, matching the incoming NetworkIndex, and a
NetworkingStatus status field set to Success.

The entry selected shall be inserted at the new position in the list. All other entries, if any exist, shall
be moved to allow the insertion, in a way that they all retain their existing relative order between each
other, with the exception of the newly re-ordered entry.

Re-ordering to the same NetworkIndex as the current location shall be considered as a success and yield no
visible changes of the Networks attribute.

Examples of re-ordering

To better illustrate the re-ordering operation, consider this initial state, exemplary of a Wi-Fi

device:

On receiving ReorderNetwork with:

  • NetworkId = Home-Guest

  • NetworkIndex = 0

The outcome, after applying to the initial state would be:

In the above outcome, FancyCat and BlueDolphin moved "down" and Home-Guest became the highest priority
network in the list.

On receiving ReorderNetwork with:

  • NetworkId = FancyCat

  • NetworkIndex = 3

The outcome, after applying to the initial state would be:

In the above outcome, BlueDolphin, Home-Guest and WillowTree moved "up" and FancyCat became the lowest
priority network in the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.8.7.11

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:505](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L505)

___

### scanNetworks

▸ **scanNetworks**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `channel`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `lqi`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bssid`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `unencrypted`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wep`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpa2Personal`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpa3Personal`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpaPersonal`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `ssid`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>[]\>  }\>\>

This command shall scan on the Cluster instance’s associated network interface for either of:

  • All available networks (non-directed scanning)

  • Specific networks (directed scanning)

Scanning for available networks detects all networks of the type corresponding to the cluster server
instance’s associated network interface that are possible to join, such as all visible Wi-Fi access points
for Wi-Fi cluster server instances, all Thread PANs for Thread cluster server instances, within bounds of
the maximum response size.

Scanning for a specific network (i.e. directed scanning) takes place if a network identifier (e.g. Wi-Fi
SSID) is provided in the command arguments. Directed scanning shall restrict the result set to the specified
network only.

The client shall NOT expect the server to be done scanning and have responded with ScanNetworksResponse
before ScanMaxTimeSeconds seconds have elapsed. Enough transport time affordances for retries SHOULD be
expected before a client determines the operation to have timed-out.

This command shall fail with a status code of BUSY if the server determines that it will fail to reliably
send a response due to changes of networking interface configuration at runtime for the interface over which
the command was invoked, or if it is currently unable to proceed with such an operation.

Clients shall be resilient to a server that either does not support or cannot proceed with the ScanNetworks
command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<``null`` \| `Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `channel`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `lqi`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bssid`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `unencrypted`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wep`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpa2Personal`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpa3Personal`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpaPersonal`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `ssid`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>[]\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.8.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:346](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L346)
