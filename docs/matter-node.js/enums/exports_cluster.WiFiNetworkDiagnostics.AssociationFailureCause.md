[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [WiFiNetworkDiagnostics](../modules/exports_cluster.WiFiNetworkDiagnostics.md) / AssociationFailureCause

# Enumeration: AssociationFailureCause

[exports/cluster](../modules/exports_cluster.md).[WiFiNetworkDiagnostics](../modules/exports_cluster.WiFiNetworkDiagnostics.md).AssociationFailureCause

**`See`**

MatterCoreSpecificationV1_1 § 11.14.5.3

## Table of contents

### Enumeration Members

- [AssociationFailed](exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md#associationfailed)
- [AuthenticationFailed](exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md#authenticationfailed)
- [SsidNotFound](exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md#ssidnotfound)
- [Unknown](exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md#unknown)

## Enumeration Members

### AssociationFailed

• **AssociationFailed** = ``1``

An error occurred during association.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:93

___

### AuthenticationFailed

• **AuthenticationFailed** = ``2``

An error occurred during authentication.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:97

___

### SsidNotFound

• **SsidNotFound** = ``3``

The specified SSID could not be found.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:101

___

### Unknown

• **Unknown** = ``0``

The reason for the failure is unknown.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:89
