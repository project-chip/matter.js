[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / RemoveFabricRequest

# Interface: RemoveFabricRequest

Input to the OperationalCredentials removeFabric command

## See

MatterSpecification.v11.Core § 11.17.6.12

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvRemoveFabricRequest`](../README.md#tlvremovefabricrequest)\>

## Properties

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

This field shall contain the Fabric Index reference (see fabric-index) associated with the Fabric which is
to be removed from the device.

Effect on Receipt

If the FabricIndex field does not match the FabricIndex of any entry within the Fabrics list, then an
NOCResponse with a StatusCode of InvalidFabricIndex shall be returned for the command and there shall NOT be
any permanent changes to any device data.

Otherwise, one of the following outcomes shall occur:

  1. If the FabricIndex matches the last remaining entry in the Fabrics list, then the device shall delete
     all Matter related data on the node which was created since it was commissioned. This includes all
     Fabric-Scoped data, including Access Control List, bindings, scenes, group keys,

operational certificates, etc. All Trusted Roots shall also be removed. Any Matter related data including
logs, secure sessions, exchanges and interaction model constructs shall also be removed. Since this
operation involves the removal of the secure session data that may underpin the current set of exchanges,
the Node invoking the command SHOULD NOT expect a response before terminating its secure session with the
target.

2. If the FabricIndex does not equal the accessing fabric index, then the device shall begin the process of
irrevocably deleting all associated Fabric-Scoped data, including Access Control List, bindings, group keys,
operational certificates, etc. Any remaining Trusted Roots no longer referenced by any operational
certificate shall also be removed. All secure sessions, exchanges and interaction model constructs related
to the Operational Identity under the given Fabric shall also be removed. Following the removal, an
NOCResponse with a StatusCode of OK shall be returned.

3. If the FabricIndex equals the accessing fabric index, then the device shall begin the process of
irrevocably deleting all associated Fabric-Scoped data, including Access Control Entries, bindings, group
keys, operational certificates, etc. Any remaining Trusted Roots no longer referenced by any operational
certificate shall also be removed. All secure sessions, exchanges and interaction model constructs related
to the Operational Identity under the given Fabric shall also be removed. Since this operation involves the
removal of the secure session data that may underpin the current set of exchanges, the Node invoking the
command SHOULD NOT expect a response before terminating its secure session with the target.

#### See

MatterSpecification.v11.Core § 11.17.6.12.1

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:609
