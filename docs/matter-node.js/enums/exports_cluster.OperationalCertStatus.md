[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OperationalCertStatus

# Enumeration: OperationalCertStatus

[exports/cluster](../modules/exports_cluster.md).OperationalCertStatus

Used by the NOCResponse datatype response command to convey detailed outcome of several of this cluster’s operations.

**`See`**

MatterCoreSpecificationV1_0 § 11.17.5.9

## Table of contents

### Enumeration Members

- [FabricConflict](exports_cluster.OperationalCertStatus.md#fabricconflict)
- [InvalidAdminSubject](exports_cluster.OperationalCertStatus.md#invalidadminsubject)
- [InvalidFabricIndex](exports_cluster.OperationalCertStatus.md#invalidfabricindex)
- [InvalidNodeOpId](exports_cluster.OperationalCertStatus.md#invalidnodeopid)
- [InvalidOperationalCert](exports_cluster.OperationalCertStatus.md#invalidoperationalcert)
- [InvalidPublicKey](exports_cluster.OperationalCertStatus.md#invalidpublickey)
- [LabelConflict](exports_cluster.OperationalCertStatus.md#labelconflict)
- [MissingCsr](exports_cluster.OperationalCertStatus.md#missingcsr)
- [Success](exports_cluster.OperationalCertStatus.md#success)
- [TableFull](exports_cluster.OperationalCertStatus.md#tablefull)

## Enumeration Members

### FabricConflict

• **FabricConflict** = ``9``

Trying to AddNOC instead of UpdateNOC against an existing Fabric.

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:41

___

### InvalidAdminSubject

• **InvalidAdminSubject** = ``6``

Invalid CaseAdminSubject field for an AddNOC command.

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:39

___

### InvalidFabricIndex

• **InvalidFabricIndex** = ``11``

FabricIndex argument is invalid.

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:45

___

### InvalidNodeOpId

• **InvalidNodeOpId** = ``2``

The Node Operational ID in the NOC is not formatted correctly.

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:31

___

### InvalidOperationalCert

• **InvalidOperationalCert** = ``3``

Any other validation error in NOC chain.

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:33

___

### InvalidPublicKey

• **InvalidPublicKey** = ``1``

Public Key in the NOC does not match the public key in the NOCSR.

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:29

___

### LabelConflict

• **LabelConflict** = ``10``

Label already exists on another Fabric.

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:43

___

### MissingCsr

• **MissingCsr** = ``4``

No record of prior CSR for which this NOC could match.

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:35

___

### Success

• **Success** = ``0``

OK, no error.

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:27

___

### TableFull

• **TableFull** = ``5``

NOCs table full, cannot add another one.

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:37
