[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / WiFiInterfaceScanResultStruct

# Interface: WiFiInterfaceScanResultStruct

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).WiFiInterfaceScanResultStruct

WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.

**`See`**

MatterSpecification.v11.Core § 11.8.5.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvWiFiInterfaceScanResultStruct`](../modules/cluster_export.NetworkCommissioning.md#tlvwifiinterfacescanresultstruct)\>

  ↳ **`WiFiInterfaceScanResultStruct`**

## Table of contents

### Properties

- [bssid](cluster_export.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#bssid)
- [channel](cluster_export.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#channel)
- [rssi](cluster_export.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#rssi)
- [security](cluster_export.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#security)
- [ssid](cluster_export.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#ssid)
- [wiFiBand](cluster_export.NetworkCommissioning.WiFiInterfaceScanResultStruct.md#wifiband)

## Properties

### bssid

• `Optional` **bssid**: `Uint8Array`

#### Inherited from

TypeFromSchema.bssid

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L199)

___

### channel

• `Optional` **channel**: `number`

#### Inherited from

TypeFromSchema.channel

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L200)

___

### rssi

• `Optional` **rssi**: `number`

This field, if present, shall denote the signal strength in dBm of the associated scan result.

**`See`**

MatterSpecification.v11.Core § 11.8.5.5.2

#### Inherited from

TypeFromSchema.rssi

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:215](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L215)

___

### security

• `Optional` **security**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `unencrypted`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wep`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpa2Personal`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpa3Personal`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wpaPersonal`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.security

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L197)

___

### ssid

• `Optional` **ssid**: `Uint8Array`

#### Inherited from

TypeFromSchema.ssid

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L198)

___

### wiFiBand

• `Optional` **wiFiBand**: [`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)

This field, if present, may be used to differentiate overlapping channel number values across different
Wi-Fi frequency bands.

**`See`**

MatterSpecification.v11.Core § 11.8.5.5.1

#### Inherited from

TypeFromSchema.wiFiBand

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:208](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L208)
