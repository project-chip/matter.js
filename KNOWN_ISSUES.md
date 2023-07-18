# Known issues (with Controllers/Ecosystems)

This page tries to list the currently known issues with some controllers and ecosystems, where we believe that the 
reasons are causing on the controller side and not inside matter.js. if you have more information please let us know.

## Apple Home/iOS
* Names/Labels provided by matter.js for Devices or Composed devices are currently ignored by Apple when pairing and always "Matter Accessory" is used. For Bridges the names from the BridgedBasicInformationCluster are used, so there it works. Just the name for the "Bridge" again is not used as provided.
* Bridged devices, when assigned to rooms might lose there room association after a while.
* When deleting a device from Apple Home not all fabrics are deleted. This was used to work in <iOS 16.5 but in 16.5.1 it seems broken. You need to manually reset the storage.
* When using a Bridge Apple tries to access the BridgedBasicInformation cluster on the Root endpoint where this cluster do not exist by definition. (Error in log: MA-rootdevice(0x0)/unknown(0x39)/0x11 unsupported path: Status=195)
* Apple is requesting OTA cluster attributes on the Root endpoint where this cluster do not exist (Error in Log: MA-rootdevice(0x0)/unknown(0x2a)/0x0 unsupported path: Status=195)

## Google Home
* Reconnections after device restarts can partially take long.

## Amazon Alexa
* Bridges are not supported!

## Samsung SmartThings
* Bridges are not supported!
* On some device commissioning the SmartThings app report a timeout, but all was paired correctly.

## Tuya
* Bridges are not supported!
