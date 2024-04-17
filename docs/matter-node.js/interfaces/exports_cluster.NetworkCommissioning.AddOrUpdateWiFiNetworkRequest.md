[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / AddOrUpdateWiFiNetworkRequest

# Interface: AddOrUpdateWiFiNetworkRequest

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).AddOrUpdateWiFiNetworkRequest

Input to the NetworkCommissioning addOrUpdateWiFiNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAddOrUpdateWiFiNetworkRequest`](../modules/exports_cluster.NetworkCommissioning.md#tlvaddorupdatewifinetworkrequest)\>

  ↳ **`AddOrUpdateWiFiNetworkRequest`**

## Table of contents

### Properties

- [breadcrumb](exports_cluster.NetworkCommissioning.AddOrUpdateWiFiNetworkRequest.md#breadcrumb)
- [credentials](exports_cluster.NetworkCommissioning.AddOrUpdateWiFiNetworkRequest.md#credentials)
- [ssid](exports_cluster.NetworkCommissioning.AddOrUpdateWiFiNetworkRequest.md#ssid)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:638

___

### credentials

• **credentials**: `Uint8Array`

Credentials is the passphrase or PSK for the network (if any is needed).

Security type, cipher and credential format (passphrase or PSK) shall be contextually auto- selected during
execution of the ConnectNetwork Command and during subsequent operational state network connections, based
on the most secure Wi-Fi security type available within beacons and probe responses for the set of all
discovered BSSIDs for the configured SSID. The type of PSK or passphrase used shall be inferred based on the
length and contents of the Credentials field provided, matching the security type chosen.

Valid Credentials length are:

  • 0 bytes: Unsecured (open) connection

  • 5 bytes: WEP-64 passphrase

  • 10 hexadecimal ASCII characters: WEP-64 40-bit hex raw PSK

  • 13 bytes: WEP-128 passphrase

  • 26 hexadecimal ASCII characters: WEP-128 104-bit hex raw PSK

  • 8..63 bytes: WPA/WPA2/WPA3 passphrase

  • 64 bytes: WPA/WPA2/WPA3 raw hex PSK

These lengths shall be contextually interpreted based on the security type of the BSSID where connection
will occur.

When the length of Credentials and available set of BSSID admits more than one option, such as the presence
of both WPA2 and WPA security type within the result set, WPA2 shall be considered more secure.

Note that it may occur that a station cannot connect to a particular access point with higher security and
selects a lower security connectivity type if the link quality is deemed to be too low to achieve successful
operation, or if all retry attempts fail.

See Section 11.8.7.1.2, “Breadcrumb Field” for usage.

**`See`**

MatterSpecification.v11.Core § 11.8.7.3.1

#### Inherited from

TypeFromSchema.credentials

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:637

___

### ssid

• **ssid**: `Uint8Array`

#### Inherited from

TypeFromSchema.ssid

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:597
