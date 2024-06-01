[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [AccountLogin](../README.md) / GetSetupPinResponse

# Interface: GetSetupPinResponse

This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
account identified in the request does not match the active account of the running Content App.

## See

MatterSpecification.v11.Cluster § 6.2.4.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetSetupPinResponse`](../README.md#tlvgetsetuppinresponse)\>

## Properties

### setupPin

> **setupPin**: `null` \| `string`

This field shall provide the setup PIN code as a text string at least 11 characters in length or null to
indicate that the accounts do not match.

#### See

MatterSpecification.v11.Cluster § 6.2.4.2.1

#### Inherited from

`TypeFromSchema.setupPin`

#### Source

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L55)
