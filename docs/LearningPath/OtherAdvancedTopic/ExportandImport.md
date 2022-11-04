---
title: ExportandImport
sidebar_position: 01
slug: ExportandImport
---
# Backup/Restore Config

Import or export the custom visual configuration data as a JSON file. A JSON file provides granular level customizations that can be easily shared and imported in a new visual. Using the export/import custom configuration options, you can standardize the reports and charts formats and visual configurations across all reports using Inforiver visual. This section will cover how to:

1. [Backup Report Configs](https://www.notion.so/Backup-Restore-Config-59befd3dbf2f41d297dc0e6801f54f74)
2. [Restore Report Configs](https://www.notion.so/Backup-Restore-Config-59befd3dbf2f41d297dc0e6801f54f74)

## Backup Report Config

<aside>
💡 **Note:** Available only in Power BI Services.

</aside>

- Select the **Export** tab on the toolbar and select **Config**.

![Config drop-down menu list](/img/Othertopic/Creatingreportbackup/Fig1Backupmenu.png)

Config drop-down menu list

## Related Links

[Style, Colors, Borders](https://www.notion.so/Style-Colors-Borders-01f324e80d53439e8e0e834939833e24)

[Number Formatting](https://www.notion.so/Number-Formatting-1ee72b10702d430b8b6a4ee3b315a302)

[Alignment](https://www.notion.so/Alignment-43437a8a0e0643689f6a589971252d89)

[Templates](https://www.notion.so/Templates-3989d8878347402d8111ccc7374c6001)

[Show and Hide](https://www.notion.so/Show-and-Hide-9a90d2c89afa41b582204a5802de1e4e)

[Conditional Formatting](https://www.notion.so/Conditional-Formatting-7e5c1206793c4c00a604f9b2f865d452)

- Select **Backup Report Config** to backup configurations such as color, navigation, scaling, number format, conditional formatting, and templates.
- Right Click on the the `.json` file name and select **Save Link As** option.
    
    ![Export Config dialog box](/static/img/Othertopic/Creatingreportbackup/Fig2.ExportConfigdialogbox.png)
    
    Export Config dialog box
    
- Navigate to your desired storage location and select **Save**.
- Your visual data will be downloaded in a `json` format which can be used in other reports through Import Config.

## Restore Report Configurations

To import and apply custom configurations from an exported file:

- From the **Export** tab on the toolbar, select **Config**.

![Untitled](/static/img/Othertopic/Creatingreportbackup/Fig3Restoremenu.png)

- Select **Restore Report Config** from the drop down menu bar.
    
    ![Screenshot 2022-06-21 at 3.07.46 PM.png](static/img/Othertopic/Creatingreportbackup/Fig4.Importconfig.png)
    
- Select **Upload** and navigate to the location of the exported config file.
- Select the `JSON` format exported file and select **Open**.
- Click Yes after confirmation. this action cannot be undone.

![Screenshot 2022-06-21 at 3.12.57 PM.png](/static/img/Othertopic/Creatingreportbackup/Fig5.Configundone.png)

- Select **Yes** to confirm importing the config file.

Your visual will be now updated with the data configurations from the exported file.