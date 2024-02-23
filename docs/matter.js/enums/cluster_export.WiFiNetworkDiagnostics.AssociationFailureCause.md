[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [WiFiNetworkDiagnostics](../modules/cluster_export.WiFiNetworkDiagnostics.md) / AssociationFailureCause

# Enumeration: AssociationFailureCause

[cluster/export](../modules/cluster_export.md).[WiFiNetworkDiagnostics](../modules/cluster_export.WiFiNetworkDiagnostics.md).AssociationFailureCause

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.14.5.3

## Table of contents

### Enumeration Members

- [AssociationFailed](cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md#associationfailed)
- [AuthenticationFailed](cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md#authenticationfailed)
- [SsidNotFound](cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md#ssidnotfound)
- [Unknown](cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md#unknown)

## Enumeration Members

### AssociationFailed

• **AssociationFailed** = ``1``

An error occurred during association.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:124](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L124)

___

### AuthenticationFailed

• **AuthenticationFailed** = ``2``

An error occurred during authentication.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:129](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L129)

___

### SsidNotFound

• **SsidNotFound** = ``3``

The specified SSID could not be found.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:134](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L134)

___

### Unknown

• **Unknown** = ``0``

The reason for the failure is unknown.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:119](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L119)
