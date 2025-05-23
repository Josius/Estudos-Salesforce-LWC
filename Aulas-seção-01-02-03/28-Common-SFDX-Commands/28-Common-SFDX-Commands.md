List of Common SFDX Commands
Notification: Transition from SFDX to SF Commands

The SFDX CLI has been deprecated. In our videos, we have demonstrated commands using the legacy sfdx style. If you are now using the sf CLI, here are the corresponding updated commands:
Command Mappings

    Create Scratch Org

        Legacy SFDX Command:
        sfdx force:org:create -s -f config/project-scratch-def.json -d 30 -a recipes

        New SF Command:
        sf org create scratch -d -f config/project-scratch-def.json -y 30 -a recipes

        Changes:

            Add the scratch subcommand.

            The "assign default org" flag changes from -s to -d.

            The scratch org duration flag changes from -d to -y.

    Push Source

        Legacy SFDX Command:
        sfdx force:source:push

        New SF Command:
        sf project deploy start

        Changes:

            A significant change; the new command works for all project formats (source or metadata).

    Delete Scratch Org

        Legacy SFDX Command:
        sfdx force:org:delete -p -u recipes

        New SF Command:
        sf org delete scratch -p -o recipes

        Changes:

            Add the scratch subcommand.

            The target org flag changes from -u to -o.

    Assign Permission Set

        Legacy SFDX Command:
        sfdx force:user:permset:assign -n recipes

        New SF Command:
        sf org assign permset -n recipes

        Changes:

            The topic changes from user to org.

            The order of the subcommands changes.

    Import Data Tree

        Legacy SFDX Command:
        sfdx force:data:tree:import -p data/data-plan.json

        New SF Command:
        sf data import tree -p data/data-plan.json

        Changes:

            Imports data using the same plan file with slight changes in syntax.

    Open Org

        Legacy SFDX Command:
        sfdx force:org:open -p lightning/n/Hello

        New SF Command:
        sf org open -p lightning/n/Hello

        Changes:

            Opens the specified Lightning component in the org.

    Run Apex Tests

        Legacy SFDX Command:
        sfdx force:apex:test:run -c -r human -w 20

        New SF Command:
        sf apex test run -c -r human -w 20

        Changes:

            Command is updated with equivalent flags for test execution.

    Go through this website for both sfdx and sf commands

    https://sfexplorer.netlify.app/

