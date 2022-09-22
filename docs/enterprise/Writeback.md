---
title: Writeback
sidebar_position: 2
slug: Writeback
---
# Writeback

Last Edited Time: September 21, 2022 6:52 PM

# 1. Overview

Writeback allows data from Inforiver Visual to be sent to multiple destinations. Data can either be exported as a file in CSV format or loaded into a database table.

<aside>
💡 Writeback is an add-on service that is available only on the Inforiver’s Enterprise edition.

</aside>

### Configure Writeback

<aside>
💡 To configure the Writeback with Inforiver, you must be the report's owner and must open the report in edit mode in Power BI.

</aside>

1. Select the **Export** tab from the top ribbon bar.
2. From the **Writeback** section, select Writeback.
    1. Log in using your **Office 365** to configure writeback. 
    2. Once you log in, select **Export > Writeback** again and now select **Configure Writeback** for first-time configurations.
    
    ![Fig Writeback (W)](/img/Enterprise/Writeback/Write1.png)
    
    Fig Writeback (W)
    

Along with Writeback tab, settings and logs are available 

<aside>
💡 The writeback tab is visible only if users have access or they are added to a particular tenant.

</aside>

- This Pop- up appears automatically once users sign in
    
    ![Screenshot 2022-08-25 at 9.25.16 AM.png](/img/Enterprise/Writeback/Write2.png)
    
- Once successful sign in you can view the destination configuration, click on Continue
    
    ![Fig W 1.1](/img/Enterprise/Writeback/Write3.png)
    
    Fig W 1.1
    
- Since there will be no configuration settings done for the first time, the user receives the above message.
- Click on Continue and it will open the Writeback App. Select the New Destination button on the top right.
    
    ![Untitled](/img/Enterprise/Writeback/Write4.png)

Scenario based settings

## Scenario

Scenarios can be created through this tab, where host can provide access or restrict access to users.

### Create Scenario

1. Scenario Name: Assign name for your created scenario, by default name is New Scenario
    
    ![Untitled](/img/Enterprise/Writeback/Write5.png)

    1. Select Series/Measure: select the measure from all the available options
    2. Permission: Access can be given to individual or group or all the users within the enterprise. Click on the radio button and then add the email Ids of the users to provide access
    3. By enabling the check box user can writeback in Reading mode
    4. Click on Create to save.
    
    ### View Scenario
    
    ![Untitled](/img/Enterprise/Writeback/Write6.png)

    Scenario sections shows 4 options Upload on Cloud, Edit, Delete and Lock your scenario
    
    - Upload on Cloud: This tab will take to the destination database page where user can select the destination for writeback
    - Edit: This tab enables to edit the created scenarios.
    - Delete: clicking on this tab user can delete the scenario
    - Lock: This tab locks the scenario and  user cannot writeback then.
    - Click on New scenario to add scenarios
    
    ***All series is a default scenario, which cannot be edited or deleted but it can be locked.***
    
    ### Edit Scenario
    
    To update already created scenario select the scenario name from the list and update.
    
    Click on Update to save the changes
    
    ![Untitled](/img/Enterprise/Writeback/Write7.png)

## Writeback Settings

**Inforiver>Writeback>Settings**

This section provides various options to configure the settings required for the user to perform Writeback.

A pop up opens up on click of WriteBack as below. 

![Screenshot 2022-09-21 at 4.28.54 PM.png](/img/Enterprise/Writeback/Write8.png)

![Fig W 2.1](/img/Enterprise/Writeback/Write9.png)

Fig W 2.1

**General**

- **Series Configuration**: Select visual series to be written back. User can either **Select All** or check to select individual series. Columns or series chosen for Writeback will be written back to the database, and the remaining series will not be written back.
- **Writeback only changes**: Using this option, only changes to the data are pushed to the databases. By default, the entire dataset is written back to the database if this option is not enabled
- **Exclude Totals and Subtotals**: When the cell values are updated Total and subtotal values also change. These values are visible in the final result only if this box is checked to **YES**
- **Filter**: Users have 3 options to display the result
    - Data with comments only
    - Calculated row only
    - Users can also customise the filters

**Destination** 

In the Destination section, the user can view all the destinations selected from the configuration tab.

![Fig W 2.2](/img/Enterprise/Writeback/Write10.png)

Fig W 2.2

- All the database added along with the details including the table name can be viewed from this tab.
- User/Admin with power bi report edit access can also add more destinations by clicking on Manage destinations .

**Others**

![Fig W 2.3](/img/Enterprise/Writeback/Write11.png)

Fig W 2.3

- Here users can update the Webhooks URL from Teams
- Copy and Enter a URL

**Permission**

- Select the user(s) who can Writeback from this report. Select all users in the domain or specify certain users from the same domain.
- Click on **SAVE** to confirm

## Writeback Destination

Database destinations can be selected from the list provided. You can add the destinations

![Screenshot 2022-09-21 at 4.40.16 PM.png](/img/Enterprise/Writeback/Write12.png)

Add database from the list. Select the database. Click on continue.

![Screenshot 2022-09-21 at 4.40.32 PM.png](/img/Enterprise/Writeback/Write13.png)

**Available Destinations:**

- [SQL Server](https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5)
- [OneDrive](https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5)
- [SharePoint](https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5)
- [MySQL](https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5)

- [Snowflake](https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5)
- [BigQuery](https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5)
- [PostgreSQL](https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5)
- [SAP HANA](https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5)

<aside>
💡 If users need to add any other destination, reach out to our support team

</aside>

- Users can select the destination from the available list and provide the required details
- The table name is user-specific and unique for the database. (table name must be without space)

<aside>
💡 Users can update only values and not the dimension members.

</aside>

**Sample Destination Added - Snowflake and Azure SQL**

![Fig W 1.3](/img/Enterprise/Writeback/Write14.png)

Fig W 1.3

- Clicking on **Help** user can view how to fill in the details for the selected database
- After filling in the details click on **Save Destination** to confirm.
- Users can also configure multiple destinations for the same database.

> *Enable collaboration is available only for the reading mode.*
> 

![Fig W 1.4](/img/Enterprise/Writeback/Write15.png)

Fig W 1.4

- Users can add more than one destination either from the same or different databases.
    - Click on Add destination
    - Select from the list again and enter the details
- Users can use tools for editing and deleting the selected database
    
    ![Fig W 1.5](/img/Enterprise/Writeback/Write16.png)
    
    Fig W 1.5
    
- After the database is saved user can again click on the Writeback in Powerbi.

![Fig W 1.6](/img/Enterprise/Writeback/Write17.png)

Fig W 1.6

1. **Series**: The columns added in the visuals are listed here. Visual series to be exported. Users can either **Select All** or check to select individual series. 
    
    There are 2 types of Writeback versions available 
    
    1. Users can update the new content on the existing file, version number remains the same.
    2. Users can also create a new file with updates, the version number is updated every time a new file is created
2. **Destination**: The databases added from the configuration page will be visible here. The user can choose the destination(s) for the write-back of the data by checking the box on that destination.
3. **Settings**: the current applied setting is visible from here. which shows the selections of what to include in the Writeback, changes, totals, filters etc. 
- Click on the Writeback tab to start the process of Writeback.
- Click on Cancel to close the popup window with no action.

<aside>
💡 Updated data is shown only on the visual until the user performs a Writeback to the destination.

</aside>

![Fig W 1.7](/img/Enterprise/Writeback/Write18.png)

Fig W 1.7

- The logs tab displays the history of Writeback jobs performed
- Click on the number ID to view all the below details
    
    ![Fig W 1.8](/img/Enterprise/Writeback/Write19.png)
    
    Fig W 1.8
    
- Click on the Report name to view the sheet in power bi with updated values.

## Writeback Logs

Go to the Writeback Logs to access the config setup.

![Fig W 3.1](/img/Enterprise/Writeback/Write20.png)

Fig W 3.1

For each Writeback operation that users perform, the logs are maintained in the **Logs** section with the following details:

- In the Logs section, users can view the history of all the Writeback performed and their status
- Clicking on the Logs, users will be redirected to the Logs tab in write back portal
- Click on the ID and users can view details about the particular Writeback action performed

**Writeback Logs**

- **Version**: Latest Writeback version.
- **Started At**: Timestamp of when the Writeback was triggered.
- **Started By**: Name of the username who triggered Writeback.
- **Status**: Status of the Writeback operation. The status message may be 'Success', 'Failure', or 'Partial Success' (when one of the destinations failed). If user has clicked on **Run Now** - Queued option is also available

Select any of the version numbers to see the detailed logs for each Writeback destination configured.

### Following are the columns in the export format:

[Writeback export format (2)](/img/Enterprise/Writeback/Write21.png)

## Writeback in Read Mode

When users want to perform writeback from the reading view of the report for data consolidation/capture, follow the below steps.  Inforiver Writeback configuration for Reading Mode involves a few additional steps apart from setting up Destination.

**Configure Writeback destination:**

1. Select a database destination type that supports DirectQuery Mode in Power BI. At present, we recommend using the Azure SQL database for performing Writeback in reading mode.
2. When creating the scenario if owner has given access in the reading mode then user can perform writeback in reading mode also.
    
    ![Untitled](/img/Enterprise/Writeback/Write22.png)
    
    1. In Reading mode user can add

**Enable the Series for Writeback in Read mode:**

1. Now, navigate to Writeback settings, and under the Collaboration tab, choose the series that needs to be enabled for Writeback in reading mode.
2. Publish the report to Power BI Service.
3. Now, if users open the same report using Power BI Service, there is a possibility that you may face a Gateway error. Users need to navigate to the Settings section of the Dataset and add the required gateways.
4. As we are all set now, users who have access to this report, need to sign in to inforiver visual and would be able to edit the data in reading mode successfully by double-clicking on a cell.
5. Once the data is edited, you can navigate to the Export tab and click on the Writeback icon to perform the operation in Full Mode or click on the Save button in Minimal mode.
    
    ![Untitled](/img/Enterprise/Writeback/Write23.png)

## Troubleshooting

1. If the user is not a part of the Workspace or Tenant then that user will not be able to log in - Users should get connected with Admin for the resolution 

![Fig W 5.1](/img/Enterprise/Writeback/Write24.png)

Fig W 5.1

1. In the Read Mode: If users need other visuals to refresh on data update, they can set up the page refresh on the report and select refresh mode as change detection based on the IR_Timestamp column for the desired refresh interval (say 5-10 secs)