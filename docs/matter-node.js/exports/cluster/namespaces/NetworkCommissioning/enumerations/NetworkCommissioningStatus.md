[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [NetworkCommissioning](../README.md) / NetworkCommissioningStatus

# Enumeration: NetworkCommissioningStatus

## See

MatterSpecification.v11.Core § 11.8.5.3

## Enumeration Members

### AuthFailure

> **AuthFailure**: `7`

Cannot associate due to authentication failure

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:78

***

### BoundsExceeded

> **BoundsExceeded**: `2`

A collection would exceed its size limit

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:58

***

### DuplicateNetworkId

> **DuplicateNetworkId**: `4`

The NetworkID is already among the collection of added networks

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:66

***

### IpBindFailed

> **IpBindFailed**: `11`

Failure to bind Wi-Fi <-> IP interfaces

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:94

***

### Ipv6Failed

> **Ipv6Failed**: `10`

Failure to generate an IPv6 address

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:90

***

### NetworkIdNotFound

> **NetworkIdNotFound**: `3`

The NetworkID is not among the collection of added networks

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:62

***

### NetworkNotFound

> **NetworkNotFound**: `5`

Cannot find AP: SSID Not found

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:70

***

### OtherConnectionFailure

> **OtherConnectionFailure**: `9`

Other association failure

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:86

***

### OutOfRange

> **OutOfRange**: `1`

Value Outside Range

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:54

***

### RegulatoryError

> **RegulatoryError**: `6`

Cannot find AP: Mismatch on band/channels/regulatory domain / 2.4GHz vs 5GHz

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:74

***

### Success

> **Success**: `0`

OK, no error

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:50

***

### UnknownError

> **UnknownError**: `12`

Unknown error

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:98

***

### UnsupportedSecurity

> **UnsupportedSecurity**: `8`

Cannot associate due to unsupported security mode

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:82
