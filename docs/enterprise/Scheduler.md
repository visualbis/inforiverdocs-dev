---
title: Scheduler
sidebar_position: 2
slug: Scheduler
---

# Scheduler

Last Edited Time: August 19, 2022 11:54 AM

![Scheduler.png](/img/Enterprise/Scheduler/Scheduler1.png)

# Scheduler

***Inforiver > Export > Schedule***

Scheduler will allow users to set up report sharing at different days and times for each report type. The reports will then be automatically generated at the scheduled time on the scheduled day to all the selected destinations.

Inforiver schedule feature allows scheduled delivery of reports in PDF, Excel & High-Quality image format to multiple destinations like Email, OneDrive, SharePoint, Teams etc.

Upon clicking the Export tab in the ribbon, the Schedule section appears. It has 2 main components, New Schedule and Manage Schedule.

![Fig 2.i Scheduler](/img/Enterprise/Scheduler/Scheduler2.png)

Fig 2.i Scheduler

## Create Schedules

**New Schedule**

- Click on New schedule and the Scheduler app opens through the visual.
- Portal will fetch the report name directly from the visual. If the Scheduler App is opened in a browser independently, it will not populate any report name and the user has to go and select the workspace and report manually.
    
    ![Fig 2.ii](/img/Enterprise/Scheduler/Scheduler3.png)
    Fig 2.ii
    

**Manage Schedule:**

- It is to see the record of schedules.
- Users can also check the history by clicking on Schedules in the left pane

![Fig 2.iii](/img/Enterprise/Scheduler/Scheduler4.png)

Fig 2.iii

# Major Activities

Inforiver’s Schedule report segment has below 2 major activity

1. **Creating a schedule** 
    1. Select Report
    2. Set Schedule Frequency
    3. Select Destination
2. **Scheduled job Status**

## 1. Creating a Schedule

![Fig 2.1.1](/img/Enterprise/Scheduler/Scheduler5.png)

Fig 2.1.1

### a. **Select Report:**

- Select the workspace -  The user can select from workspaces and a complete list of the workspaces that they have access to is displayed.
- Select the Report Name- from the adjacent drop-down tab.
- Row level Security - the row-level security functionality enables you to have more control over the data that your employees see. This supports only Email destination
- Report Plus Layout - Reports can be sent directly in report plus format by the user.
- Pages - ****Users have an option to share only the selected page or All Pages

**Refresh Datasets**

![Fig 2.1.4](/img/Enterprise/Scheduler/Scheduler6.png)

Fig 2.1.4

- By enabling the checkbox, the dataset will be refreshed every time before sending the email.
- Once this checkbox is selected entering the dataset owner email ID becomes mandatory
- Enter dataset owner email Id
- Once users save these changes an email is sent to the Dataset owner, requesting his permission.
- Only after the dataset owner approves, dataset get refreshed before the report gets delivered.

**Notifications**

If the scheduler job fails partially or completely then an Email notification is sent to the recipient(s), whose Email ID is mentioned here. 

![Fig 2.1.5](/img/Enterprise/Scheduler/Scheduler7.png)

Fig 2.1.5

**Export settings**

Users can add an Appendix on the last page of the PDF the details are attached with the report as part of the PDF 

- Select the check box, if the Appendix is required.
- Select **Next** to proceed
- The details include report name, page name, dataset owner name and other details.

### b. Set Schedule Frequency

**Set Schedule frequency:** Once a schedule begins running, the frequency parameter determines how often the schedule runs. 

- Set the Start Date and the End Date: determines the date that the user wants the schedule to start, and the end date that the user wants the schedule to stop.  User also gets an option to choose between next week, next month, the next six months, next year as predefined templates.
- Set Time: Schedule the Time when the report will run and fetch the details. Different time-zone can be selected from the drop-down. By default, local timezone is selected
- Click **Next** to proceed
- Frequencies can be selected from Daily, weekly, monthly or once.
- Frequency: **Daily**
    - Users can set report frequency as daily or alternate days or any number of days by setting the number of days
        
        ![Fig 2.2.1](/img/Enterprise/Scheduler/Scheduler8.png)

        Fig 2.2.1
        
        - Frequency:  **Weekly**
            - Users can select multiple days on which the report has to be generated in a week
            - For example, the above report will be generated on Monday, Thursday and Friday of every week
            
            ![Fig 2.2.2](/img/Enterprise/Scheduler/Scheduler9.png)
            
            Fig 2.2.2
            
        - Frequency: **Monthly**
            - Users can select month(s)
            - Select the date on which the report has to be generated
            - For example, 1st day of the Month or first Monday of the Month.
            - Enter Start Date and End Date.
            - Select the Schedule Time
            - Click Next to Save
            
            ![Fig 2.2.3](/img/Enterprise/Scheduler/Scheduler10.png)
            
            Fig 2.2.3
            
        
        - Frequency: **Once**
            - Select the date, on that date, the report is generated and shared.
        
        ![Fig 2.2.4](/img/Enterprise/Scheduler/Scheduler11.png)
        
        Fig 2.2.4
        

### c. Select Destination

The generated report can be shared with multiple people via various methods such as Email, OneDrive, Teams, SharePoint or Google Drive. 

![Fig 2.3.1](/img/Enterprise/Scheduler/Scheduler12.png)

Fig 2.3.1

1. **Email**: 
    - To share the report via email, enter the email Id in the space provided.
    - For multiple mail Ids, enter all the email ids with ‘**,’** separated or the app also provides a facility for bulk upload.
    - Bulk Upload - user can upload recipient names in bulk.
        - Save the names in an excel sheet
        - Excel sheet format - 2 columns 1. Names 2. Filter
        - Under Names - provide email ids and under Filter - provide Report filter if any.
        - The Excel sheet should be in. CSV format only
        
        | Name | Filter |
        | --- | --- |
        | rani@google.com | cityeqCanada |
        | Victoria@webmail.com |  |
        | Marcus@domain.com |  |
- Send with Report Filter: this is the section where the user can apply a filter to a report and share the filtered version with the recipient.
    
    ![Fig 2.3.2](/img/Enterprise/Scheduler/Scheduler13.png)
    
    Fig 2.3.2
    
- Subject: Subject can be mentioned as a detailed description of the report. After all, the subject line is what subscribers see in their inbox, and is what determines if they even open your email or not.
- Using @ user can add variables directly as Date, time, current month etc.
- Body: The user can keep the email draft ready in the body section, this draft will be used when the report is scheduled for sharing.
- Send Report As: Report can be sent in all the below formats
- PDF, EXCEL or Preview Image(HD). For PDF and Excel Multiple or Merged can be chosen. The report will be sent in the selected format.
    
    ![Fig 2.3.3](/img/Enterprise/Scheduler/Scheduler14.png)
    
    Fig 2.3.3
    
1. **OneDrive:** 
    
    Users can schedule the Reports saved in the OneDrive destination folder
    
    ![Fig 2.3.4](/img/Enterprise/Scheduler/Scheduler15.png)
    Fig 2.3.4
    
- Allow to sign in through the Onedrive portal
- Select the folder where the reports will be saved into OneDrive
- Select the complete path of the report by choosing the Folder name and subfolder name.
- Users can also customize the File Name
- Use @ to insert variables for saving the report
- Send Report As: This report can be shared in PDF or Excel format. Select the checkbox and the format will be saved.
- Send with Report Filter: this is the section where the user can apply a  filter to a report and share the filtered version with the recipient.
1. **Microsoft Team:**
    
    Users can share the reports and deliver it in the folder with a notification in Teams Channel 
    
    ![Fig 2.3.5](/img/Enterprise/Scheduler/Scheduler16.png)

    Fig 2.3.5
    
- Select the OneDrive folder where the reports will be saved and shared
- Select the complete path of the report by choosing the Folder name and subfolder name
- Users can also customize the File Name
- Use @ to insert variables for saving the report
- Channel name: users can add the Channel name of the team to share the reports
- WEBhook URL: Select General -> More option (...) -> Connectors -> Incoming webhook -> Configure
    - Select TEAMS tab
    - Select Connectors from General
        
        ![Fig 2.3.5 (i)](/img/Enterprise/Scheduler/Scheduler17.png)

        Fig 2.3.5 (i)
        
        ![Fig 2.3.5 (ii)](/img/Enterprise/Scheduler/Scheduler18.png)

        Fig 2.3.5 (ii)
        
    
    - Enter details and click on **Create**
- Send Report As: in this format, users can send reports in Excel and PDf formats

<aside>
💡 Folder for Onedrive and Teams remains the same, saved into the OneDrive location

</aside>

1. **SharePoint:**

Users can share the reports in SharePoint destination folders

![Fig 2.3.6](/img/Enterprise/Scheduler/Scheduler19.png)

Fig 2.3.6

- Get connected with Sharepoint and users can share the reports
- Enter SharePoint Site address
    
    ![Fig 2.3.6(i)](/img/Enterprise/Scheduler/Scheduler20.png)
    
    Fig 2.3.6(i)
    
    - Select Sharepoint URL till the site name
    - Click OK
    - The site name is the folder name.
    
    ![Fig 2.3.7](/img/Enterprise/Scheduler/Scheduler21.png)
    
    Fig 2.3.7
    
- Users can directly enter the correct Site name in the space provided.
- Click on Browse. If the site name is incorrect Drive section remains empty and asks for the correct Site name. Else shows the site name.
- Select the folder and subfolder name can also be given with @ inserting variables.
- Users can customize the filename
- Send Report As: This report can be shared in PDF or Excel format. Select the checkbox and the format will be saved.
- Send with Report Filter: this is the section where the user can apply a filter to a report and share the filtered version with the recipient.
1. **Google Drive:**
    
    Users can share the report on Google Drive also
    
    ![Untitled](/img/Enterprise/Scheduler/Scheduler22.png)

- Sign in through a google account to get connected through Google drive
- After successful Login below screen appears
- Add the Folder name where the report is saved
- Customize the report name
- Send Report As PDF and Excel
- Users can also add more than one folder by clicking on Add folder tab from the top right corner.

<aside>
💡 The user has to select the existing Google Drive folder from within the application

</aside>

### d. Save and Run the Schedule

- Click on Review tab
- Details about the Report and the schedule can be reviewed before saving
- Click on Save Schedule

![Fig 2.4.1](/img/Enterprise/Scheduler/Scheduler23.png)

Fig 2.4.1

- Users can also send a test email before saving the schedule (Only for email destinations)
- Click on the down arrow next to Save schedule
- Test Email will be sent to all the email Ids marked in “To”.
- Users can add multiple recipients, subject and email body is copied from the draft
- In the test email, filters are not applied. The entire report is delivered to the recipients.

![Fig 2.4.2](/img/Enterprise/Scheduler/Scheduler24.png)

Fig 2.4.2

- Click on the Send Test email, the below tab opens
    
    ![Fig 2.4.3](/img/Enterprise/Scheduler/Scheduler25.png)
    
    Fig 2.4.3
    
- Add the details and the user can test the report email and finally save the schedule.
- If need to perform any changes, users can go back and perform the changes before saving the final schedule.

**Duplicate Report**

- Users can also duplicate the Schedule reports
- Click on the Report name from the Schedule
- In the top right corner, the Duplicate tab appears
- Click on the tab and Duplicate a schedule report
    
    ![Fig 2.4.4](/img/Enterprise/Scheduler/Scheduler26.png)

    Fig 2.4.4
    

## 2. Scheduled Job Status

### Schedule Report

Once the schedule is saved user can recheck the schedule 

![Fig 2.5.1](/img/Enterprise/Scheduler/Scheduler27.png)

Fig 2.5.1

In the last column, on the right corner 3 action buttons are available, Run, Pause and delete

- Run Now: When users click on this button, irrespective of the scheduled time the job will start immediately.
- Pause: clicking on pause will hold the schedule until resumed.
- Delete: delete button will delete the saved schedule

**Schedule Starts**

Once the job is started the page is refreshed every 10 sec. From start job till final delivery the report has to pass through all the validation, load reports, collect visual data and generate attachments till the end phases.

![Fig 2.5.2](/img/Enterprise/Scheduler/Scheduler28.png)
Fig 2.5.2

- On each step, users can view which phase the report is going through, by clicking on the highlighted tabs in Milestones. Once the schedule starts it will go through the validation steps
- These are the tokens i.e. to check if the details provided by the users are valid or not and if they are accessible.
- Each job runs and the color of the tab changes from Grey —> Blue —> green.
    
    
    | Colors | Indication | Action  |
    | --- | --- | --- |
    | Red | Fail | Re - Run Job and check the logs |
    | Orange | Partial Sucess | Check the logs for the failure sections |
    | Green  | Sucess | Job runs successfully  |
- If at any milestone stage fails then the stage shows Amber color. Users can recheck the validation stage by clicking on it and checking the logs.
- Once the job is successfully completed an email option appears in the summary showing “success”, also it shows all the email Ids marked in the test mail

# Troubleshooting

1. In delivering the scheduled report, there are five milestones, if Validation fails at any one of them the milestone color changes to red.
- If Job Status is failed and takes, longer time to start then - Restart the job

![Untitled](/img/Enterprise/Scheduler/Scheduler29.png)

- If process fails at the **Start Job** and the color changes to red  - Restart the job
- If process fails at the **Validation step** and the color changes to red - Click on the Validation step and check at which location the failure has occurred, also click on refresh dataset. Users can click on Check Logs to check the reasons for failure.

![Untitled](/img/Enterprise/Scheduler/Scheduler30.png)

![Check Logs](/img/Enterprise/Scheduler/Scheduler31.png)

Check Logs

- If process fails at Load Report and the color changes to red - Click on the Load report and check at which location failure has occurred. Users can also click on Check Logs to check the reasons for failure.

![Untitled](/img/Enterprise/Scheduler/Scheduler31.png)

- If process fails at the **Collect Visual Data** and the color changes to red - Click on the collect visual data step and check at which location failure has occurred. Users can click on Check Logs to check the reasons for failure
- If process fails at the **Generate Attachment** and the color changes to red - it means the attachment is missing. Users can click on Check Logs to check the reasons for failure.

![Untitled](/img/Enterprise/Scheduler/Scheduler32.png)

- If process fails at the **Deliver to destination** fails - A report will be sent to all remaining destinations if more than one destination is selected and one destination fails. The failure report can be viewed from the logs, job status is also changed to **Partial success.**
1. Partial Success - This is the process where one or more validation is completed but some has failed. the process may or may not move to the next step depending upon the number of failures. Click on the validation step and check for the failures. Users can also click on Check Logs to check the reasons for failure

![Untitled](/img/Enterprise/Scheduler/Scheduler33.png)

<aside>
💡 Users can contact our executives for any support.

</aside>