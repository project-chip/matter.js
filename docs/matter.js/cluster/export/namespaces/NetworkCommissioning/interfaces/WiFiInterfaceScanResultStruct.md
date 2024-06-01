[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [NetworkCommissioning](../README.md) / WiFiInterfaceScanResultStruct

# Interface: WiFiInterfaceScanResultStruct

WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.

## See

MatterSpecification.v11.Core § 11.8.5.5

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvWiFiInterfaceScanResultStruct`](../README.md#tlvwifiinterfacescanresultstruct)\>

## Properties

### bssid?

> `optional` **bssid**: `Uint8Array`

#### Inherited from

`TypeFromSchema.bssid`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L199)

***

### channel?

> `optional` **channel**: `number`

#### Inherited from

`TypeFromSchema.channel`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:200](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L200)

***

### rssi?

> `optional` **rssi**: `number`

This field, if present, shall denote the signal strength in dBm of the associated scan result.

#### See

MatterSpecification.v11.Core § 11.8.5.5.2

#### Inherited from

`TypeFromSchema.rssi`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L215)

***

### security?

> `optional` **security**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### unencrypted

> **unencrypted**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Supports unencrypted Wi-Fi

##### wep

> **wep**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Supports Wi-Fi using WEP security

##### wpa2Personal

> **wpa2Personal**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Supports Wi-Fi using WPA2-Personal security

##### wpa3Personal

> **wpa3Personal**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Supports Wi-Fi using WPA3-Personal security

##### wpaPersonal

> **wpaPersonal**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Supports Wi-Fi using WPA-Personal security

#### Inherited from

`TypeFromSchema.security`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:197](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L197)

***

### ssid?

> `optional` **ssid**: `Uint8Array`

#### Inherited from

`TypeFromSchema.ssid`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L198)

***

### wiFiBand?

> `optional` **wiFiBand**: [`WiFiBand`](../enumerations/WiFiBand.md)

This field, if present, may be used to differentiate overlapping channel number values across different
Wi-Fi frequency bands.

#### See

MatterSpecification.v11.Core § 11.8.5.5.1

#### Inherited from

`TypeFromSchema.wiFiBand`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L208)
