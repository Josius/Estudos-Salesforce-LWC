# NOTES
### Component Naming Convention
-  begin with a lowercase letter
-  contain only alphanumeric or underscore
-  must be unique in the namespace
-  can't include whitespace
-  can't end with an underscore
-  can't contain 2 consecutive underscore
-  can't contain a hyphen/dash (-)
  
### Two ways to create component
1. **Terminal**
   - sfdx force:lightning:component:create --type lwc -n **mycomponent**
   - sf lightning generate component --name **mycomponent** --type lwc --output-dir force-app/main/default/lwc
2. **Using command Palette**
   - View -> Command Palette -> SFDX: Create Lightning Web Component -> then follow each step