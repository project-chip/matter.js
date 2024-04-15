[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/administrator-commissioning/export](../modules/behavior_definitions_administrator_commissioning_export.md) / [AdministratorCommissioningInterface](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningInterface.md) / Basic

# Interface: Basic

[behavior/definitions/administrator-commissioning/export](../modules/behavior_definitions_administrator_commissioning_export.md).[AdministratorCommissioningInterface](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningInterface.md).Basic

## Table of contents

### Methods

- [openBasicCommissioningWindow](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningInterface.Basic.md#openbasiccommissioningwindow)

## Methods

### openBasicCommissioningWindow

▸ **openBasicCommissioningWindow**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command may be used by a current Administrator to instruct a Node to go into commissioning mode, if the
node supports the Basic Commissioning Method. The Basic Commissioning Method specifies a window of time
during which an already commissioned Node accepts PASE sessions. The current Administrator shall specify a
timeout value for the duration of OBCW.

If a commissioning window is already currently open, this command shall fail with a cluster specific status
code of Busy.

If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code of
Busy, since it is likely that concurrent commissioning operations from multiple separate Commissioners are
about to take place.

In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.

The commissioning into a new Fabric completes when the Node successfully receives a CommissioningComplete
command, see Section 5.5, “Commissioning Flows”. The new Administrator shall discover the Node on the IP
network using DNS-based Service Discovery (DNS-SD) for commissioning.

This field shall specify the time in seconds during which commissioning session establishment is allowed by
the Node. This is known as Open Basic Commissioning Window (OBCW). This timeout shall follow guidance as
specified in Announcement Duration.

When a Node receives the Open Basic Commissioning Window command, it shall begin advertising on DNS-SD as
described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in Section
11.18.8.2.1, “CommissioningTimeout Field”. When the command is received by a SED, it shall enter into active
mode and set its fast-polling interval to SLEEPY_AC

TIVE_INTERVAL for at least the entire duration of the CommissioningTimeout.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.18.8.2

#### Defined in

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L163)
