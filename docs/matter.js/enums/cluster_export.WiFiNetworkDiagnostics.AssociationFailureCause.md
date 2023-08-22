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

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:133](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L133)

___

### AuthenticationFailed

• **AuthenticationFailed** = ``2``

An error occurred during authentication.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:138](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L138)

___

### SsidNotFound

• **SsidNotFound** = ``3``

The specified SSID could not be found.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:143](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L143)

___

### Unknown

• **Unknown** = ``0``

The reason for the failure is unknown.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:128](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L128)
