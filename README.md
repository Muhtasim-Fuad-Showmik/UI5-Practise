# UI5-Practise

## Debugging

### Issue 1: Mock Server won't work after adding routing config

In the *"manifest.json"* file, the document fails to specify that *routing.config.async* needs to be set to *true*.
Add this property to the object if it already has not been added.

### Issue 2: Making the site responsive broke my application entirely and kept throwing an error stating that a certain component could no longer be loaded.

Using step 19, "Aggregation Binding", from the documentation, revert all changes that implemented the mock server in 
the first place. Start using index.html again and hopefully the issue will be resolved.