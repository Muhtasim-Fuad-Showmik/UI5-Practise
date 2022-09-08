# UI5-Practise

## Debugging

### Issue 1: Mock Server won't work after adding routing config

In the *"manifest.json"* file, the document fails to specify that *routing.config.async* needs to be set to *true*.
Add this property to the object if it already has not been added.
