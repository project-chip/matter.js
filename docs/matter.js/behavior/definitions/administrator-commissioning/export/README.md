[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/administrator-commissioning/export

# behavior/definitions/administrator-commissioning/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [AdministratorCommissioningBehavior](namespaces/AdministratorCommissioningBehavior/README.md)
- [AdministratorCommissioningInterface](namespaces/AdministratorCommissioningInterface/README.md)
- [AdministratorCommissioningServer](namespaces/AdministratorCommissioningServer/README.md)

### Classes

- [AdministratorCommissioningServer](classes/AdministratorCommissioningServer.md)

### Interfaces

- [AdministratorCommissioningBehavior](interfaces/AdministratorCommissioningBehavior.md)

## Type Aliases

### AdministratorCommissioningInterface

> **AdministratorCommissioningInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L69)

***

### OpenBasicCommissioningWindowRequest

> **OpenBasicCommissioningWindowRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvOpenBasicCommissioningWindowRequest`](../../../../cluster/export/namespaces/AdministratorCommissioning/README.md#tlvopenbasiccommissioningwindowrequest)\>

This command may be used by a current Administrator to instruct a Node to go into commissioning mode, if the node
supports the Basic Commissioning Method. The Basic Commissioning Method specifies a window of time during which an
already commissioned Node accepts PASE sessions. The current Administrator shall specify a timeout value for the
duration of OBCW.

If a commissioning window is already currently open, this command shall fail with a cluster specific status code of
Busy.

If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code of Busy,
since it is likely that concurrent commissioning operations from multiple separate Commissioners are about to take
place.

In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.

The commissioning into a new Fabric completes when the Node successfully receives a CommissioningComplete command,
see Section 5.5, “Commissioning Flows”. The new Administrator shall discover the Node on the IP network using
DNS-based Service Discovery (DNS-SD) for commissioning.

#### See

MatterSpecification.v11.Core § 11.18.8.2

#### Source

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L67)

***

### OpenCommissioningWindowRequest

> **OpenCommissioningWindowRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvOpenCommissioningWindowRequest`](../../../../cluster/export/namespaces/AdministratorCommissioning/README.md#tlvopencommissioningwindowrequest)\>

This command is used by a current Administrator to instruct a Node to go into commissioning mode. The Enhanced
Commissioning Method specifies a window of time during which an already commissioned Node accepts PASE sessions. The
current Administrator MUST specify a timeout value for the duration of OCW.

When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE passcode
verifier as well as stop publishing the DNS-SD record corresponding to this command as described in Section 4.3.1,
“Commissionable Node Discovery”. The commissioning into a new Fabric completes when the Node successfully receives a
CommissioningComplete command, see Section 5.5, “Commissioning Flows”.

The parameters for OpenCommissioningWindow command are as follows:

A current Administrator may invoke this command to put a node in commissioning mode for the next Administrator. On
completion, the command shall return a cluster specific status code from the enumeration below reflecting success or
reasons for failure of the operation. The new Administrator shall discover the Node on the IP network using
DNS-based Service Discovery (DNS-SD) for commissioning.

If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments arise, this
command shall fail with a cluster specific status code of PAKEParameterError.

If a commissioning window is already currently open, this command shall fail with a cluster specific status code of
Busy.

If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code of Busy,
since it is likely that concurrent commissioning operations from multiple separate Commissioners are about to take
place.

In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.

#### See

MatterSpecification.v11.Core § 11.18.8.1

#### Source

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L44)

## Variables

### AdministratorCommissioningBehavior

> `const` **AdministratorCommissioningBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/AdministratorCommissioning/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`AdministratorCommissioningInterface`](README.md#administratorcommissioninginterface)\>, [`AdministratorCommissioningInterface`](README.md#administratorcommissioninginterface)\>

AdministratorCommissioningBehavior is the base class for objects that support interaction with AdministratorCommissioning.Cluster.

This class does not have optional features of AdministratorCommissioning.Cluster enabled. You can enable additional
features using AdministratorCommissioningBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningBehavior.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningBehavior.ts#L20)
