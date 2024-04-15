[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / WiFiInterfaceScanResultStruct

# Interface: WiFiInterfaceScanResultStruct

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).WiFiInterfaceScanResultStruct

WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.

**`See`**

MatterSpecification.v11.Core § 11.8.5.5

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvWiFiInterfaceScanResultStruct`](../modules/exports_cluster.NetworkCommissioning.md#tlvwifiinterfacescanresultstruct)\>

  ↳ **`WiFiInterfaceScanResultStruct`**

## Table of contents

### Properties

- [bssid](exports_cluster.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#bssid)
- [channel](exports_cluster.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#channel)
- [rssi](exports_cluster.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#rssi)
- [security](exports_cluster.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#security)
- [ssid](exports_cluster.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#ssid)
- [wiFiBand](exports_cluster.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#wifiband)

## Properties

### bssid

• `Optional` **bssid**: `Uint8Array`

#### Inherited from

TypeFromSchema.bssid

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:185

___

### channel

• `Optional` **channel**: `number`

#### Inherited from

TypeFromSchema.channel

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:186

___

### rssi

• `Optional` **rssi**: `number`

This field, if present, shall denote the signal strength in dBm of the associated scan result.

**`See`**

MatterSpecification.v11.Core § 11.8.5.5.2

#### Inherited from

TypeFromSchema.rssi

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:199

___

### security

• `Optional` **security**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `unencrypted`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wep`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wpa2Personal`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wpa3Personal`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wpaPersonal`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.security

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:162

___

### ssid

• `Optional` **ssid**: `Uint8Array`

#### Inherited from

TypeFromSchema.ssid

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:184

___

### wiFiBand

• `Optional` **wiFiBand**: [`WiFiBand`](../enums/exports_cluster.NetworkCommissioning.WiFiBand.md)

This field, if present, may be used to differentiate overlapping channel number values across different
Wi-Fi frequency bands.

**`See`**

MatterSpecification.v11.Core § 11.8.5.5.1

#### Inherited from

TypeFromSchema.wiFiBand

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:193
