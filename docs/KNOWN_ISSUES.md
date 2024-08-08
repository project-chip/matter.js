# Known issues (with Controllers/Ecosystems)

This page tries to list the currently known issues with some controllers and ecosystems where we believe that the issue lies on the controller side rather than with matter.js.

Please let us know if you have more information about any of the items in this list.

## Apple Home/iOS
* Names/Labels provided by matter.js for devices and composed devices are currently ignored by Apple when pairing. Devices are always labeled "Matter Accessory". For bridges the names from the BridgedBasicInformationCluster apply correctly, so the labels work. Just the name for the bridge itself is ignored.
* When deleting a device from Apple Home not all fabrics are deleted. You will potentially need to delete the pairing from Apple System Settings to clear the extra fabric.
* When using a bridge Apple tries to access the BridgedBasicInformation cluster on the root endpoint.  This cluster does not exist per the Matter specification. (Error in matter.js log: MA-rootdevice(0x0)/unknown(0x39)/0x11 unsupported path: Status=195)
* Apple is requesting OTA cluster attributes on the root endpoint.  This cluster also doesn't exist per the Matter specification. (Error in matter.js log: MA-rootdevice(0x0)/unknown(0x2a)/0x0 unsupported path: Status=195)

## Google Home
* Names/Labels provided by matter.js for devices and composed devices are currently ignored by Apple when pairing. Devices are always labeled "Matter Accessory". For bridges the names from the BridgedBasicInformationCluster apply correctly, so the labels work. Just the name for the bridge itself is ignored.

## Amazon Alexa
* Amazon only discovers matter devices on port 5540, so you need to use this port and none else. This limits the devices to be published to one per Host for Amazon.  This is a limitation of the Amazon implementation.
* Routines are not always available for Matter devices.

## Samsung SmartThings
* On some devices, during commissioning the SmartThings app reports a timeout even when pairing completes successfully.

## Tuya
* Bridges are not supported!
