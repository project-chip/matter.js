[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AdministratorCommissioning](../modules/cluster_export.AdministratorCommissioning.md) / OpenBasicCommissioningWindowRequest

# Interface: OpenBasicCommissioningWindowRequest

[cluster/export](../modules/cluster_export.md).[AdministratorCommissioning](../modules/cluster_export.AdministratorCommissioning.md).OpenBasicCommissioningWindowRequest

Input to the AdministratorCommissioning openBasicCommissioningWindow command

**`See`**

MatterSpecification.v11.Core § 11.18.8.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvOpenBasicCommissioningWindowRequest`](../modules/cluster_export.AdministratorCommissioning.md#tlvopenbasiccommissioningwindowrequest)\>

  ↳ **`OpenBasicCommissioningWindowRequest`**

## Table of contents

### Properties

- [commissioningTimeout](cluster_export.AdministratorCommissioning.OpenBasicCommissioningWindowRequest.md#commissioningtimeout)

## Properties

### commissioningTimeout

• **commissioningTimeout**: `number`

This field shall specify the time in seconds during which commissioning session establishment is allowed by
the Node. This is known as Open Basic Commissioning Window (OBCW). This timeout shall follow guidance as
specified in Announcement Duration.

When a Node receives the Open Basic Commissioning Window command, it shall begin advertising on DNS-SD as
described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in Section
11.18.8.2.1, “CommissioningTimeout Field”. When the command is received by a SED, it shall enter into active
mode and set its fast-polling interval to SLEEPY_AC

TIVE_INTERVAL for at least the entire duration of the CommissioningTimeout.

**`See`**

MatterSpecification.v11.Core § 11.18.8.2.1

#### Inherited from

TypeFromSchema.commissioningTimeout

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:44](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L44)
