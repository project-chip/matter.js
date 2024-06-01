[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [AdministratorCommissioning](../README.md) / OpenBasicCommissioningWindowRequest

# Interface: OpenBasicCommissioningWindowRequest

Input to the AdministratorCommissioning openBasicCommissioningWindow command

## See

MatterSpecification.v11.Core § 11.18.8.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvOpenBasicCommissioningWindowRequest`](../README.md#tlvopenbasiccommissioningwindowrequest)\>

## Properties

### commissioningTimeout

> **commissioningTimeout**: `number`

This field shall specify the time in seconds during which commissioning session establishment is allowed by
the Node. This is known as Open Basic Commissioning Window (OBCW). This timeout shall follow guidance as
specified in Announcement Duration.

When a Node receives the Open Basic Commissioning Window command, it shall begin advertising on DNS-SD as
described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in Section
11.18.8.2.1, “CommissioningTimeout Field”. When the command is received by a SED, it shall enter into active
mode and set its fast-polling interval to SLEEPY_AC

TIVE_INTERVAL for at least the entire duration of the CommissioningTimeout.

#### See

MatterSpecification.v11.Core § 11.18.8.2.1

#### Inherited from

`TypeFromSchema.commissioningTimeout`

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L44)
