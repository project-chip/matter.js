[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DiagnosticLogs](../README.md) / RetrieveLogsResponse

# Interface: RetrieveLogsResponse

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

## See

MatterSpecification.v11.Core § 11.10.5.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvRetrieveLogsResponse`](../README.md#tlvretrievelogsresponse)\>

## Properties

### logContent

> **logContent**: `Uint8Array`

This field shall be included in the command if the Status field has a value of Success or Exhausted. A Node
SHOULD utilize this field to transfer the newest diagnostic log entries. This field shall be empty if BDX is
requested and the Status field has a value of Success.

#### See

MatterSpecification.v11.Core § 11.10.5.2.2

#### Inherited from

`TypeFromSchema.logContent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:201

***

### status

> **status**: [`Status`](../enumerations/Status.md)

This field shall indicate the result of an attempt to retrieve diagnostic logs.

#### See

MatterSpecification.v11.Core § 11.10.5.2.1

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:193

***

### timeSinceBoot?

> `optional` **timeSinceBoot**: `number` \| `bigint`

This field SHOULD be included in the command if the Status field has a value of Success. When included, the
TimeSinceBoot field shall contain the time of the oldest log entry in the diagnostic logs that are being
transferred represented by the number of microseconds since the last time the Node went through a reboot.

#### See

MatterSpecification.v11.Core § 11.10.5.2.4

#### Inherited from

`TypeFromSchema.timeSinceBoot`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:217

***

### utcTimeStamp?

> `optional` **utcTimeStamp**: `number` \| `bigint`

This field SHOULD be included in the command if the Status field has a value of Success and the Node
maintains a wall clock. When included, the UTCTimeStamp field shall contain the value of the oldest log
entry in the diagnostic logs that are being transferred.

#### See

MatterSpecification.v11.Core § 11.10.5.2.3

#### Inherited from

`TypeFromSchema.utcTimeStamp`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:209
