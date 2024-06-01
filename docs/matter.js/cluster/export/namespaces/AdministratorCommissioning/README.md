[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / AdministratorCommissioning

# Namespace: AdministratorCommissioning

## Index

### Enumerations

- [CommissioningWindowStatus](enumerations/CommissioningWindowStatus.md)
- [Feature](enumerations/Feature.md)
- [StatusCode](enumerations/StatusCode.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [OpenBasicCommissioningWindowRequest](interfaces/OpenBasicCommissioningWindowRequest.md)
- [OpenCommissioningWindowRequest](interfaces/OpenCommissioningWindowRequest.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all AdministratorCommissioning clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.adminFabricIndex

> `readonly` **adminFabricIndex**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`FabricIndex`](../../../../datatype/export/README.md#fabricindex), `any`\>

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be
used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.

If, during an open commissioning window, the fabric for the Administrator that opened the window is
removed, then this attribute shall be set to null.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

###### See

MatterSpecification.v11.Core § 11.18.7.2

##### attributes.adminVendorId

> `readonly` **adminVendorId**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`VendorId`](../../../../datatype/export/README.md#vendorid), `any`\>

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID
associated with the Fabric scoping of the Administrator that opened the window. This field shall match
the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened
the window, at the time of window opening. If the fabric for the Administrator that opened the window is
removed from the node while the commissioning window is still open, this attribute shall NOT be updated.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

###### See

MatterSpecification.v11.Core § 11.18.7.3

##### attributes.windowStatus

> `readonly` **windowStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommissioningWindowStatus`](enumerations/CommissioningWindowStatus.md), `any`\>

This attribute shall indicate whether a new Commissioning window has been opened by an Administrator,
using either the OCW command or the OBCW command.

This attribute shall revert to WindowNotOpen upon expiry of a commissioning window.

Note that an initial commissioning window is not opened using either the OCW command or the OBCW
command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.

###### See

MatterSpecification.v11.Core § 11.18.7.1

##### commands

> `readonly` **commands**: `object`

##### commands.openCommissioningWindow

> `readonly` **openCommissioningWindow**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command is used by a current Administrator to instruct a Node to go into commissioning mode. The
Enhanced Commissioning Method specifies a window of time during which an already commissioned Node
accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW.

When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE
passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as
described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric
completes when the Node successfully receives a CommissioningComplete command, see Section 5.5,
“Commissioning Flows”.

The parameters for OpenCommissioningWindow command are as follows:

A current Administrator may invoke this command to put a node in commissioning mode for the next
Administrator. On completion, the command shall return a cluster specific status code from the
enumeration below reflecting success or reasons for failure of the operation. The new Administrator
shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.

If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments
arise, this command shall fail with a cluster specific status code of PAKEParameterError.

If a commissioning window is already currently open, this command shall fail with a cluster specific
status code of Busy.

If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code
of Busy, since it is likely that concurrent commissioning operations from multiple separate
Commissioners are about to take place.

In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.

###### See

MatterSpecification.v11.Core § 11.18.8.1

##### commands.revokeCommissioning

> `readonly` **revokeCommissioning**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command is used by a current Administrator to instruct a Node to revoke any active Open
Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the
Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing
the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window
command, see Section 4.3.1, “Commissionable Node Discovery”.

If no commissioning window was open at time of receipt, this command shall fail with a cluster specific
status code of WindowNotOpen.

###### See

MatterSpecification.v11.Core § 11.18.8.3

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which AdministratorCommissioningCluster elements matter.js activates for specific
feature combinations.

##### features

> `readonly` **features**: `object`

##### features.basic

> `readonly` **basic**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Basic

Node supports Basic Commissioning Method.

##### id

> `readonly` **id**: `60` = `0x3c`

##### name

> `readonly` **name**: `"AdministratorCommissioning"` = `"AdministratorCommissioning"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L225)

***

### BasicComponent

> `const` **BasicComponent**: `object`

A AdministratorCommissioningCluster supports these elements if it supports feature Basic.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.openBasicCommissioningWindow

> `readonly` **openBasicCommissioningWindow**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command may be used by a current Administrator to instruct a Node to go into commissioning mode, if
the node supports the Basic Commissioning Method. The Basic Commissioning Method specifies a window of
time during which an already commissioned Node accepts PASE sessions. The current Administrator shall
specify a timeout value for the duration of OBCW.

If a commissioning window is already currently open, this command shall fail with a cluster specific
status code of Busy.

If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code
of Busy, since it is likely that concurrent commissioning operations from multiple separate
Commissioners are about to take place.

In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.

The commissioning into a new Fabric completes when the Node successfully receives a
CommissioningComplete command, see Section 5.5, “Commissioning Flows”. The new Administrator shall
discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.

###### See

MatterSpecification.v11.Core § 11.18.8.2

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:175](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L175)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:369](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L369)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.adminFabricIndex

> `readonly` **adminFabricIndex**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`FabricIndex`](../../../../datatype/export/README.md#fabricindex), `any`\>

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be
used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.

If, during an open commissioning window, the fabric for the Administrator that opened the window is
removed, then this attribute shall be set to null.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

###### See

MatterSpecification.v11.Core § 11.18.7.2

##### attributes.adminVendorId

> `readonly` **adminVendorId**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`VendorId`](../../../../datatype/export/README.md#vendorid), `any`\>

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID
associated with the Fabric scoping of the Administrator that opened the window. This field shall match
the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened
the window, at the time of window opening. If the fabric for the Administrator that opened the window is
removed from the node while the commissioning window is still open, this attribute shall NOT be updated.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

###### See

MatterSpecification.v11.Core § 11.18.7.3

##### attributes.windowStatus

> `readonly` **windowStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommissioningWindowStatus`](enumerations/CommissioningWindowStatus.md), `any`\>

This attribute shall indicate whether a new Commissioning window has been opened by an Administrator,
using either the OCW command or the OBCW command.

This attribute shall revert to WindowNotOpen upon expiry of a commissioning window.

Note that an initial commissioning window is not opened using either the OCW command or the OBCW
command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.

###### See

MatterSpecification.v11.Core § 11.18.7.1

##### commands

> `readonly` **commands**: `object`

##### commands.openCommissioningWindow

> `readonly` **openCommissioningWindow**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command is used by a current Administrator to instruct a Node to go into commissioning mode. The
Enhanced Commissioning Method specifies a window of time during which an already commissioned Node
accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW.

When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE
passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as
described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric
completes when the Node successfully receives a CommissioningComplete command, see Section 5.5,
“Commissioning Flows”.

The parameters for OpenCommissioningWindow command are as follows:

A current Administrator may invoke this command to put a node in commissioning mode for the next
Administrator. On completion, the command shall return a cluster specific status code from the
enumeration below reflecting success or reasons for failure of the operation. The new Administrator
shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.

If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments
arise, this command shall fail with a cluster specific status code of PAKEParameterError.

If a commissioning window is already currently open, this command shall fail with a cluster specific
status code of Busy.

If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code
of Busy, since it is likely that concurrent commissioning operations from multiple separate
Commissioners are about to take place.

In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.

###### See

MatterSpecification.v11.Core § 11.18.8.1

##### commands.revokeCommissioning

> `readonly` **revokeCommissioning**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command is used by a current Administrator to instruct a Node to revoke any active Open
Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the
Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing
the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window
command, see Section 4.3.1, “Commissionable Node Discovery”.

If no commissioning window was open at time of receipt, this command shall fail with a cluster specific
status code of WindowNotOpen.

###### See

MatterSpecification.v11.Core § 11.18.8.3

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which AdministratorCommissioningCluster elements matter.js activates for specific
feature combinations.

##### features

> `readonly` **features**: `object`

##### features.basic

> `readonly` **basic**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Basic

Node supports Basic Commissioning Method.

##### id

> `readonly` **id**: `60` = `0x3c`

##### name

> `readonly` **name**: `"AdministratorCommissioning"` = `"AdministratorCommissioning"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:353](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L353)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:399](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L399)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: [`Merge`](../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../README.md#globalattributesf)\<`object`\>\> = `Cluster.attributes`

###### Type declaration

###### adminFabricIndex

> `readonly` **adminFabricIndex**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`FabricIndex`](../../../../datatype/export/README.md#fabricindex), `any`\>

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be
used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.

If, during an open commissioning window, the fabric for the Administrator that opened the window is
removed, then this attribute shall be set to null.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

###### See

MatterSpecification.v11.Core § 11.18.7.2

###### adminVendorId

> `readonly` **adminVendorId**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`VendorId`](../../../../datatype/export/README.md#vendorid), `any`\>

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID
associated with the Fabric scoping of the Administrator that opened the window. This field shall match
the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened
the window, at the time of window opening. If the fabric for the Administrator that opened the window is
removed from the node while the commissioning window is still open, this attribute shall NOT be updated.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

###### See

MatterSpecification.v11.Core § 11.18.7.3

###### windowStatus

> `readonly` **windowStatus**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommissioningWindowStatus`](enumerations/CommissioningWindowStatus.md), `any`\>

This attribute shall indicate whether a new Commissioning window has been opened by an Administrator,
using either the OCW command or the OBCW command.

This attribute shall revert to WindowNotOpen upon expiry of a commissioning window.

Note that an initial commissioning window is not opened using either the OCW command or the OBCW
command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.

###### See

MatterSpecification.v11.Core § 11.18.7.1

##### commands

> `readonly` **commands**: `object`

##### commands.openBasicCommissioningWindow

> `readonly` **openBasicCommissioningWindow**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.openCommissioningWindow

> `readonly` **openCommissioningWindow**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command is used by a current Administrator to instruct a Node to go into commissioning mode. The
Enhanced Commissioning Method specifies a window of time during which an already commissioned Node
accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW.

When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE
passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as
described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric
completes when the Node successfully receives a CommissioningComplete command, see Section 5.5,
“Commissioning Flows”.

The parameters for OpenCommissioningWindow command are as follows:

A current Administrator may invoke this command to put a node in commissioning mode for the next
Administrator. On completion, the command shall return a cluster specific status code from the
enumeration below reflecting success or reasons for failure of the operation. The new Administrator
shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.

If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments
arise, this command shall fail with a cluster specific status code of PAKEParameterError.

If a commissioning window is already currently open, this command shall fail with a cluster specific
status code of Busy.

If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code
of Busy, since it is likely that concurrent commissioning operations from multiple separate
Commissioners are about to take place.

In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.

###### See

MatterSpecification.v11.Core § 11.18.8.1

##### commands.revokeCommissioning

> `readonly` **revokeCommissioning**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command is used by a current Administrator to instruct a Node to revoke any active Open
Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the
Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing
the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window
command, see Section 4.3.1, “Commissionable Node Discovery”.

If no commissioning window was open at time of receipt, this command shall fail with a cluster specific
status code of WindowNotOpen.

###### See

MatterSpecification.v11.Core § 11.18.8.3

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.basic

> `readonly` **basic**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Basic

Node supports Basic Commissioning Method.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`60`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"AdministratorCommissioning"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:377](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L377)

***

### TlvOpenBasicCommissioningWindowRequest

> `const` **TlvOpenBasicCommissioningWindowRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the AdministratorCommissioning openBasicCommissioningWindow command

#### See

MatterSpecification.v11.Core § 11.18.8.2

#### Type declaration

##### commissioningTimeout

> **commissioningTimeout**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall specify the time in seconds during which commissioning session establishment is allowed by
the Node. This is known as Open Basic Commissioning Window (OBCW). This timeout shall follow guidance as
specified in Announcement Duration.

When a Node receives the Open Basic Commissioning Window command, it shall begin advertising on DNS-SD as
described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in Section
11.18.8.2.1, “CommissioningTimeout Field”. When the command is received by a SED, it shall enter into active
mode and set its fast-polling interval to SLEEPY_AC

TIVE_INTERVAL for at least the entire duration of the CommissioningTimeout.

###### See

MatterSpecification.v11.Core § 11.18.8.2.1

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L29)

***

### TlvOpenCommissioningWindowRequest

> `const` **TlvOpenCommissioningWindowRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the AdministratorCommissioning openCommissioningWindow command

#### See

MatterSpecification.v11.Core § 11.18.8.1

#### Type declaration

##### commissioningTimeout

> **commissioningTimeout**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall specify the time in seconds during which commissioning session establishment is allowed by
the Node. This is known as Open Commissioning Window (OCW). This timeout value shall follow guidance as
specified in Announcement Duration. The CommissioningTimeout applies only to cessation of any announcements
and to accepting of new commissioning sessions; it does not apply to abortion of connections, i.e., a
commissioning session SHOULD NOT abort prematurely upon expiration of this timeout.

###### See

MatterSpecification.v11.Core § 11.18.8.1.1

##### discriminator

> **discriminator**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall be used by the Node as the long discriminator for DNS-SD advertisement (see Commissioning
Discriminator) for discovery by the new Administrator. The new Administrator can find and filter DNS-SD
records by long discriminator to locate and initiate commissioning with the appropriate Node.

###### See

MatterSpecification.v11.Core § 11.18.8.1.3

##### iterations

> **iterations**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall be used by the Node as the PAKE iteration count associated with the ephemeral PAKE passcode
verifier to be used for this commissioning, which shall be sent by the Node to the new Administrator’s
software as response to the PBKDFParamRequest during PASE negotiation. The permitted range of values shall
match the range specified in Section 3.9, “Password-Based Key Derivation Function (PBKDF)”, within the
definition of the Crypto_PBKDFParameterSet.

###### See

MatterSpecification.v11.Core § 11.18.8.1.4

##### pakePasscodeVerifier

> **pakePasscodeVerifier**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall specify an ephemeral PAKE passcode verifier (see Section 3.10, “Password-Authenticated Key
Exchange (PAKE)”) computed by the existing Administrator to be used for this commissioning. The field is
concatenation of two values (w0 || L) shall be (CRYPTO_GROUP_SIZE_BYTES +
CRYPTO_PUBLIC_KEY_SIZE_BYTES)-octets long as detailed in Crypto_PAKEValues_Responder. It shall be derived
from an ephemeral passcode (See PAKE). It shall be deleted by the Node at the end of commissioning or
expiration of OCW, and shall be deleted by the existing Administrator after sending it to the Node(s).

###### See

MatterSpecification.v11.Core § 11.18.8.1.2

##### salt

> **salt**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field shall be used by the Node as the PAKE Salt associated with the ephemeral PAKE passcode verifier
to be used for this commissioning, which shall be sent by the Node to the new

Administrator’s software as response to the PBKDFParamRequest during PASE negotiation. The constraints on
the value shall match those specified in Section 3.9, “Password-Based Key Derivation Function (PBKDF)”,
within the definition of the Crypto_PBKDFParameterSet.

When a Node receives the Open Commissioning Window command, it shall begin advertising on DNS-SD as
described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in Section
11.18.8.1.1, “CommissioningTimeout Field”. When the command is received by a SED, it shall enter into active
mode and set its fast-polling interval to SLEEPY_ACTIVE_INTERVAL for at least the entire duration of the
CommissioningTimeout.

###### See

MatterSpecification.v11.Core § 11.18.8.1.5

#### Source

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L79)
