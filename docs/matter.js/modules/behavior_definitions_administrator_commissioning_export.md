[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/administrator-commissioning/export

# Module: behavior/definitions/administrator-commissioning/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_administrator_commissioning_export._internal_.md)

### Namespaces

- [AdministratorCommissioningBehavior](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningBehavior.md)
- [AdministratorCommissioningInterface](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningInterface.md)
- [AdministratorCommissioningServer](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)

### Classes

- [AdministratorCommissioningServer](../classes/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer-1.md)

### Interfaces

- [AdministratorCommissioningBehavior](../interfaces/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningBehavior-1.md)

### Type Aliases

- [AdministratorCommissioningInterface](behavior_definitions_administrator_commissioning_export.md#administratorcommissioninginterface)
- [OpenBasicCommissioningWindowRequest](behavior_definitions_administrator_commissioning_export.md#openbasiccommissioningwindowrequest)
- [OpenCommissioningWindowRequest](behavior_definitions_administrator_commissioning_export.md#opencommissioningwindowrequest)

### Variables

- [AdministratorCommissioningBehavior](behavior_definitions_administrator_commissioning_export.md#administratorcommissioningbehavior)

## Type Aliases

### AdministratorCommissioningInterface

Ƭ **AdministratorCommissioningInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningInterface.Base.md)  }, \{ `flags`: \{ `basic`: ``true``  } ; `methods`: [`Basic`](../interfaces/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningInterface.Basic.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L80)

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L167)

___

### OpenBasicCommissioningWindowRequest

Ƭ **OpenBasicCommissioningWindowRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvOpenBasicCommissioningWindowRequest`](cluster_export.AdministratorCommissioning.md#tlvopenbasiccommissioningwindowrequest)\>

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

This field shall specify the time in seconds during which commissioning session establishment is allowed by the
Node. This is known as Open Basic Commissioning Window (OBCW). This timeout shall follow guidance as specified in
Announcement Duration.

When a Node receives the Open Basic Commissioning Window command, it shall begin advertising on DNS-SD as described
in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in Section 11.18.8.2.1,
“CommissioningTimeout Field”. When the command is received by a SED, it shall enter into active mode and set its
fast-polling interval to SLEEPY_AC

TIVE_INTERVAL for at least the entire duration of the CommissioningTimeout.

**`See`**

MatterSpecification.v11.Core § 11.18.8.2

#### Defined in

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L78)

___

### OpenCommissioningWindowRequest

Ƭ **OpenCommissioningWindowRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvOpenCommissioningWindowRequest`](cluster_export.AdministratorCommissioning.md#tlvopencommissioningwindowrequest)\>

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

**`See`**

MatterSpecification.v11.Core § 11.18.8.1

#### Defined in

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L44)

## Variables

### AdministratorCommissioningBehavior

• `Const` **AdministratorCommissioningBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.AdministratorCommissioning.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`AdministratorCommissioningInterface`](behavior_definitions_administrator_commissioning_export.md#administratorcommissioninginterface)\>, [`AdministratorCommissioningInterface`](behavior_definitions_administrator_commissioning_export.md#administratorcommissioninginterface)\>

AdministratorCommissioningBehavior is the base class for objects that support interaction with AdministratorCommissioning.Cluster.

This class does not have optional features of AdministratorCommissioning.Cluster enabled. You can enable additional
features using AdministratorCommissioningBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningBehavior.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningBehavior.ts#L20)

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningBehavior.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningBehavior.ts#L25)

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningBehavior.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningBehavior.ts#L27)
