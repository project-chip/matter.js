[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DiagnosticLogs](../README.md) / RetrieveLogsRequest

# Interface: RetrieveLogsRequest

Input to the DiagnosticLogs retrieveLogsRequest command

## See

MatterSpecification.v11.Core § 11.10.5.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRetrieveLogsRequest`](../README.md#tlvretrievelogsrequest)\>

## Properties

### intent

> **intent**: [`Intent`](../enumerations/Intent.md)

This field shall indicate why the diagnostic logs are being retrieved from the Node. A Node may utilize this
field to selectively determine the logs to transfer.

#### See

MatterSpecification.v11.Core § 11.10.5.1.1

#### Inherited from

`TypeFromSchema.intent`

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L89)

***

### requestedProtocol

> **requestedProtocol**: [`TransferProtocol`](../enumerations/TransferProtocol.md)

This field shall be used to indicate how the log transfer is to be realized. If the field is set to BDX,
then if the receiving Node supports BDX it shall attempt to use BDX to transfer any potential diagnostic
logs; if the receiving Node does not support BDX then the Node shall follow the requirements defined for a
TransferProtocolEnum of ResponsePayload. If this field is set to ResponsePayload the receiving Node shall
only utilize the LogContent field of the RetreiveLogsResponse command to transfer diagnostic log information.

#### See

MatterSpecification.v11.Core § 11.10.5.1.2

#### Inherited from

`TypeFromSchema.requestedProtocol`

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L100)

***

### transferFileDesignator?

> `optional` **transferFileDesignator**: `string`

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

#### See

MatterSpecification.v11.Core § 11.10.5.1.3

#### Inherited from

`TypeFromSchema.transferFileDesignator`

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L137)
