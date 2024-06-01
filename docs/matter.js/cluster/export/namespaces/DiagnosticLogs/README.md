[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / DiagnosticLogs

# Namespace: DiagnosticLogs

## Index

### Enumerations

- [Intent](enumerations/Intent.md)
- [Status](enumerations/Status.md)
- [TransferProtocol](enumerations/TransferProtocol.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [RetrieveLogsRequest](interfaces/RetrieveLogsRequest.md)
- [RetrieveLogsResponse](interfaces/RetrieveLogsResponse.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:282](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L282)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.retrieveLogsRequest

> `readonly` **retrieveLogsRequest**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Reception of this command starts the process of retrieving diagnostic logs from a Node.

###### See

MatterSpecification.v11.Core § 11.10.5.1

##### id

> `readonly` **id**: `50` = `0x32`

##### name

> `readonly` **name**: `"DiagnosticLogs"` = `"DiagnosticLogs"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:254](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L254)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:285](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L285)

***

### TlvRetrieveLogsRequest

> `const` **TlvRetrieveLogsRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the DiagnosticLogs retrieveLogsRequest command

#### See

MatterSpecification.v11.Core § 11.10.5.1

#### Type declaration

##### intent

> **intent**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Intent`](enumerations/Intent.md)\>

This field shall indicate why the diagnostic logs are being retrieved from the Node. A Node may utilize this
field to selectively determine the logs to transfer.

###### See

MatterSpecification.v11.Core § 11.10.5.1.1

##### requestedProtocol

> **requestedProtocol**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TransferProtocol`](enumerations/TransferProtocol.md)\>

This field shall be used to indicate how the log transfer is to be realized. If the field is set to BDX,
then if the receiving Node supports BDX it shall attempt to use BDX to transfer any potential diagnostic
logs; if the receiving Node does not support BDX then the Node shall follow the requirements defined for a
TransferProtocolEnum of ResponsePayload. If this field is set to ResponsePayload the receiving Node shall
only utilize the LogContent field of the RetreiveLogsResponse command to transfer diagnostic log information.

###### See

MatterSpecification.v11.Core § 11.10.5.1.2

##### transferFileDesignator

> **transferFileDesignator**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This field shall be present if the RequestedProtocol is BDX. The TransferFileDesignator shall be set as the
File Designator of the BDX transfer if initiated.

Effect on Receipt

On receipt of this command, the Node shall respond with a RetrieveLogsResponse command.

If the RequestedProtocol is set to BDX the Node SHOULD immediately realize the RetrieveLogsResponse command
by initiating a BDX Transfer, sending a BDX SendInit message with the File Designator field of the message
set to the value of the TransferFileDesignator field of the RetrieveLogsRequest. On reception of a BDX
SendAccept message the Node shall send a RetrieveLogsResponse command with a Status field set to Success and
proceed with the log transfer over BDX. If a failure StatusReport is received in response to the SendInit
message, the Node shall send a RetrieveLogsResponse command with a Status of Denied. In the case where the
Node is able to fit the entirety of the requested logs within the LogContent field, the Status field of the
RetrieveLogsResponse shall be set to Exhausted and a BDX session shall NOT be initiated.

If the RequestedProtocol is set to BDX and either the Node does not support BDX or it is not possible for
the Node to establish a BDX session, then the Node shall utilize the LogContent field of the
RetrieveLogsResponse command to transfer as much of the current logs as it can fit within the response, and
the Status field of the RetrieveLogsResponse shall be set to Exhausted.

If the RequestedProtocol is set to ResponsePayload the Node shall utilize the LogContent field of the
RetrieveLogsResponse command to transfer as much of the current logs as it can fit within the

response, and a BDX session shall NOT be initiated.

If the RequestedProtocol is set to BDX and there is no TransferFileDesignator the command shall fail with a
Status Code of INVALID_COMMAND.

If the Intent and/or the RequestedProtocol arguments contain invalid (out of range) values the command shall
fail with a Status Code of INVALID_COMMAND.

###### See

MatterSpecification.v11.Core § 11.10.5.1.3

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L82)

***

### TlvRetrieveLogsResponse

> `const` **TlvRetrieveLogsResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

#### See

MatterSpecification.v11.Core § 11.10.5.2

#### Type declaration

##### logContent

> **logContent**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall be included in the command if the Status field has a value of Success or Exhausted. A Node
SHOULD utilize this field to transfer the newest diagnostic log entries. This field shall be empty if BDX is
requested and the Status field has a value of Success.

###### See

MatterSpecification.v11.Core § 11.10.5.2.2

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Status`](enumerations/Status.md)\>

This field shall indicate the result of an attempt to retrieve diagnostic logs.

###### See

MatterSpecification.v11.Core § 11.10.5.2.1

##### timeSinceBoot

> **timeSinceBoot**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number` \| `bigint`\>

This field SHOULD be included in the command if the Status field has a value of Success. When included, the
TimeSinceBoot field shall contain the time of the oldest log entry in the diagnostic logs that are being
transferred represented by the number of microseconds since the last time the Node went through a reboot.

###### See

MatterSpecification.v11.Core § 11.10.5.2.4

##### utcTimeStamp

> **utcTimeStamp**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number` \| `bigint`\>

This field SHOULD be included in the command if the Status field has a value of Success and the Node
maintains a wall clock. When included, the UTCTimeStamp field shall contain the value of the oldest log
entry in the diagnostic logs that are being transferred.

###### See

MatterSpecification.v11.Core § 11.10.5.2.3

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:207](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L207)
