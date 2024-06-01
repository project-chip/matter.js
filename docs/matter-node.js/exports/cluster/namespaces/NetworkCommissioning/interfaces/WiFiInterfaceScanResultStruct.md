[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [NetworkCommissioning](../README.md) / WiFiInterfaceScanResultStruct

# Interface: WiFiInterfaceScanResultStruct

WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.

## See

MatterSpecification.v11.Core § 11.8.5.5

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvWiFiInterfaceScanResultStruct`](../README.md#tlvwifiinterfacescanresultstruct)\>

## Properties

### bssid?

> `optional` **bssid**: `Uint8Array`

#### Inherited from

`TypeFromSchema.bssid`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:185

***

### channel?

> `optional` **channel**: `number`

#### Inherited from

`TypeFromSchema.channel`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:186

***

### rssi?

> `optional` **rssi**: `number`

This field, if present, shall denote the signal strength in dBm of the associated scan result.

#### See

MatterSpecification.v11.Core § 11.8.5.5.2

#### Inherited from

`TypeFromSchema.rssi`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:199

***

### security?

> `optional` **security**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### unencrypted

> **unencrypted**: [`BitFlag`](../../../../schema/README.md#bitflag)

Supports unencrypted Wi-Fi

##### wep

> **wep**: [`BitFlag`](../../../../schema/README.md#bitflag)

Supports Wi-Fi using WEP security

##### wpa2Personal

> **wpa2Personal**: [`BitFlag`](../../../../schema/README.md#bitflag)

Supports Wi-Fi using WPA2-Personal security

##### wpa3Personal

> **wpa3Personal**: [`BitFlag`](../../../../schema/README.md#bitflag)

Supports Wi-Fi using WPA3-Personal security

##### wpaPersonal

> **wpaPersonal**: [`BitFlag`](../../../../schema/README.md#bitflag)

Supports Wi-Fi using WPA-Personal security

#### Inherited from

`TypeFromSchema.security`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:162

***

### ssid?

> `optional` **ssid**: `Uint8Array`

#### Inherited from

`TypeFromSchema.ssid`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:184

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:193
