[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / AnnouncementReason

# Enumeration: AnnouncementReason

## See

MatterSpecification.v11.Core § 11.19.7.4.1

## Enumeration Members

### SimpleAnnouncement

> **SimpleAnnouncement**: `0`

An OTA Provider is announcing its presence.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:77

***

### UpdateAvailable

> **UpdateAvailable**: `1`

An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY
be available.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:82

***

### UrgentUpdateAvailable

> **UrgentUpdateAvailable**: `2`

An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY
be available, which contains an update that needs to be applied urgently.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:87
