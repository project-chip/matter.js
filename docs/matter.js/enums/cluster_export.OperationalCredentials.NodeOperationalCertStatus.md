[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / NodeOperationalCertStatus

# Enumeration: NodeOperationalCertStatus

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).NodeOperationalCertStatus

This enumeration is used by the NOCResponse common response command to convey detailed out

come of several of this cluster’s operations.

**`See`**

MatterSpecification.v11.Core § 11.17.4.3

## Table of contents

### Enumeration Members

- [FabricConflict](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#fabricconflict)
- [InvalidAdminSubject](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#invalidadminsubject)
- [InvalidFabricIndex](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#invalidfabricindex)
- [InvalidNoc](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#invalidnoc)
- [InvalidNodeOpId](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#invalidnodeopid)
- [InvalidPublicKey](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#invalidpublickey)
- [LabelConflict](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#labelconflict)
- [MissingCsr](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#missingcsr)
- [Ok](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#ok)
- [TableFull](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#tablefull)

## Enumeration Members

### FabricConflict

• **FabricConflict** = ``9``

Trying to AddNOC instead of UpdateNOC against an existing Fabric.

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:493](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L493)

___

### InvalidAdminSubject

• **InvalidAdminSubject** = ``6``

Invalid CaseAdminSubject field for an AddNOC command.

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:488](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L488)

___

### InvalidFabricIndex

• **InvalidFabricIndex** = ``11``

FabricIndex argument is invalid.

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:503](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L503)

___

### InvalidNoc

• **InvalidNoc** = ``3``

Any other validation error in NOC chain

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:473](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L473)

___

### InvalidNodeOpId

• **InvalidNodeOpId** = ``2``

The Node Operational ID in the NOC is not formatted correctly.

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:468](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L468)

___

### InvalidPublicKey

• **InvalidPublicKey** = ``1``

Public Key in the NOC does not match the public key in the NOCSR

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:463](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L463)

___

### LabelConflict

• **LabelConflict** = ``10``

Label already exists on another Fabric.

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:498](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L498)

___

### MissingCsr

• **MissingCsr** = ``4``

No record of prior CSR for which this NOC could match

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:478](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L478)

___

### Ok

• **Ok** = ``0``

OK, no error

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:458](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L458)

___

### TableFull

• **TableFull** = ``5``

NOCs table full, cannot add another one

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:483](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L483)
