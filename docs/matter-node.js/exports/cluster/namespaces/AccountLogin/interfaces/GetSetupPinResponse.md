[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [AccountLogin](../README.md) / GetSetupPinResponse

# Interface: GetSetupPinResponse

This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
account identified in the request does not match the active account of the running Content App.

## See

MatterSpecification.v11.Cluster § 6.2.4.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvGetSetupPinResponse`](../README.md#tlvgetsetuppinresponse)\>

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

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:46
