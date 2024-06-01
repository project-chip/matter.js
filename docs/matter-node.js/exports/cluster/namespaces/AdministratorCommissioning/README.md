[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / AdministratorCommissioning

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

> `readonly` **adminFabricIndex**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/FabricIndex"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_FabricIndex/README.md) \| `null`, `any`\>

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be
used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.

If, during an open commissioning window, the fabric for the Administrator that opened the window is
removed, then this attribute shall be set to null.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

###### See

MatterSpecification.v11.Core § 11.18.7.2

##### attributes.adminVendorId

> `readonly` **adminVendorId**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_VendorId/README.md) \| `null`, `any`\>

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

> `readonly` **openCommissioningWindow**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **basic**: [`BitFlag`](../../../schema/README.md#bitflag)

Basic

Node supports Basic Commissioning Method.

##### id

> `readonly` **id**: `60`

##### name

> `readonly` **name**: `"AdministratorCommissioning"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:210

***

### BasicComponent

> `const` **BasicComponent**: `object`

A AdministratorCommissioningCluster supports these elements if it supports feature Basic.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.openBasicCommissioningWindow

> `readonly` **openBasicCommissioningWindow**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:152

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:643

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.adminFabricIndex

> `readonly` **adminFabricIndex**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/FabricIndex"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_FabricIndex/README.md) \| `null`, `any`\>

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be
used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.

If, during an open commissioning window, the fabric for the Administrator that opened the window is
removed, then this attribute shall be set to null.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

###### See

MatterSpecification.v11.Core § 11.18.7.2

##### attributes.adminVendorId

> `readonly` **adminVendorId**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_VendorId/README.md) \| `null`, `any`\>

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

> `readonly` **openCommissioningWindow**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **basic**: [`BitFlag`](../../../schema/README.md#bitflag)

Basic

Node supports Basic Commissioning Method.

##### id

> `readonly` **id**: `60`

##### name

> `readonly` **name**: `"AdministratorCommissioning"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:421

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:843

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### commands

> `readonly` **commands**: `object`

##### commands.openBasicCommissioningWindow

> `readonly` **openBasicCommissioningWindow**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.openCommissioningWindow

> `readonly` **openCommissioningWindow**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **features**: `object`

##### features.basic

> `readonly` **basic**: [`BitFlag`](../../../schema/README.md#bitflag)

Basic

Node supports Basic Commissioning Method.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"AdministratorCommissioning"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:649

***

### TlvOpenBasicCommissioningWindowRequest

> `const` **TlvOpenBasicCommissioningWindowRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the AdministratorCommissioning openBasicCommissioningWindow command

#### See

MatterSpecification.v11.Core § 11.18.8.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:18

***

### TlvOpenCommissioningWindowRequest

> `const` **TlvOpenCommissioningWindowRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the AdministratorCommissioning openCommissioningWindow command

#### See

MatterSpecification.v11.Core § 11.18.8.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:64
