---
title: Backup/Restore Config
sidebar_position: 14
slug: backuprestore-config
---

Import or export the custom visual configuration data as a JSON file. A JSON file provides granular-level customizations that can be easily shared and imported into a new visual. Using the export/import custom configuration options, you can standardize the reports and charts formats and visual configurations across all reports using Inforiver visual. This section will cover how to:

1. [Backup Report Configs]
2. [Restore Report Configs]

## Backup Report Config

:::tip

**💡 Note:** Available only in Power BI Services.

:::
- Select the **Export** tab on the toolbar and select **Config**.

![Config drop-down menu list](/img/Setting/Backup/backup1.png)

Config drop-down menu list


- Select **Backup Report Config** to backup configurations such as color, navigation, scaling, number format, conditional formatting, and templates.
- Right Click on the the `.json` file name and select **Save Link As** option.
    
    ![Export Config dialog box](/img/Setting/Backup/backup2.png)

    Export Config dialog box
    
- Navigate to your desired storage location and select **Save**.
- Your visual data will be downloaded in a `json` format which can be used in other reports through Import Config.

## Restore Report Configurations

To import and apply custom configurations from an exported file:

- From the **Export** tab on the toolbar, select **Config**.

![Untitled](/img/Setting/Backup/backup3.png)

- Select **Restore Report Config** from the drop down menu bar.
    
    ![Screenshot 2022-06-21 at 3.07.46 PM.png](/img/Setting/Backup/backup4.png)
    
- Select **Upload** and navigate to the location of the exported config file.
- Select the `JSON` format exported file and select **Open**.
- Click Yes after confirmation. this action cannot be undone.

![Screenshot 2022-06-21 at 3.12.57 PM.png](/img/Setting/Backup/backup5.png)

- Select **Yes** to confirm importing the config file.

Your visual will be now updated with the data configurations from the exported file.

## Related Links

[Style, Colors, Borders](build/Style,color,border)

[Number Formatting](/build/number-formatting)

[Alignment](/build/alignment)

[Templates](/build/Template)

[Show and Hide](/build/showandhide)

[Conditional Formatting](/analyze/conditional-formatting)