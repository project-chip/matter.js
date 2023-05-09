# Readme additional infos (temporary)

These infos will be merged into the official Readme before we merge this PR and accept all these changes.

## Changelog for this PR
* April 30th: 
  * initial commit and first smaller adjustments and fixes
* May 6th: 
  * Breaking: Rename class "Matter" -> "MatterServer"
  * Breaking: Move DeviceTypes.ts from common to device and rename DEVICE to "DeviceTypes"
  * Autoregister Crypto, Time and Network in their Node.js variants when including packages from @project-chip/matter-node.js root package but only if not yet registered (so can be overridden by the developer)
  * Moved the examples/reference implementations into examples directory and add own README_EXAMPLES.md file and moved content from main readme into it
  * Add new package.json entries and rename "matter" to "matter-device"
  * Add hints for all imports in the examples to show what the corresponding "matter-node.js" import would be (because they can not be used directly for build reasons)
  * Introduce NamedHandler util class for an event style typed and named handler/callback approach 
  * Use NamedHandler as commandHandler to forward command calls like identify to the Device classes and testEvenTriggered for commissionable node class 
  * Add constructor value to hand over initial values of the onoff Cluster when initialing the default cluster
  * make sure BridgedBasicInformation cluster is always set when adding a bridged device and no data parameters were provided
* May 8th:
  * Breaking (internally): Revert ClusterClient back to object style and also adjust CLusterServer to it and sync the API between them (see API Readme). This means: all new CLusterClient/Server becomes just "ClusterServer/ClusterClient" without the "new"
  * ClusterClient interface names changed to get/set/subscribeNAMEAttribute to prevent overlappings with commands
  * ClusterServer interface also added get/set/subscribeNAMEAttribute to be able to use the same interface, only difference is that CLusterServer interface is NOT async!
  * Add missing global Attributes for attributeList, acceptedCommandList and generatedCommandList
  * Added one fix to GroupsCluster with a wrong Command request ID
* May 9th:
  * Add a log of JSDoc to the new API classes
  * Add basic logic to automatically instantiate optional clusters and add them on "get" calls to be used when we do next clusters/device types
  * Classes derived from "Device" need to potentially implement additional methods createOptionalClusterClient and createOptionalClusterServer
  * Some smaller refactorings
  * Rename example files again
  * Prepare changelog and such
  * Added the "npm run matter-*" commands also to the base package.json
* May 9th-2:
  * Rename PairableNode -> CommissioningCOntroller and CommissionableNode -> CommissioningServer and the relevant add-methods in MatterServer
