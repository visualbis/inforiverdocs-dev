---
title: Instal
sidebar_position: 3
slug: Instal
---

# Inforiver On-Premise Installation Guide

*This document details installation and configuration steps for Inforiver Enterprise (On-Premise).*

## Introduction

Inforiver is a custom visual that extends Microsoft’s Power BI reporting tool. Specifically, Inforiver adds the ability to produce dense, information rich reports, which users can easily collaborate upon and share with others.

![Example Inforiver Report](/img/Instal/Instal1.png)
Example Inforiver Report

In this document, you’ll learn how to install the on-premises version of Inforiver Enterprise. This on-premises version gives you complete control over how and where your data is stored. This means that all the Inforiver services are running in your environment in the Azure Cloud. It also means that the only outbound network calls are either to Microsoft services or the Inforiver licensing service. This will satisfy your organization’s strict data security, data governance and data residency policy, because the software runs entirely in your environment.

## Prerequisite:

Azure is the only cloud cloud platform we currently support for on-premises edition. Other cloud providers like AWS, GCP are currently unsupported. We might add support to these platforms in future. Please feel free to contact our support team to get more information.

### Platform Requirements:

1. **Azure Subscription**: An existing Azure subscription in which you would deploy our solution.
2. **New Azure Resource Group**: A new resource group would be needed to deploy the solution.
3. **Azure CLI Access**: To configure few steps after deployment, you need to have a working Azure CLI.
4. **Azure AD Application:** Inforiver will use multiple Office 365 APIs to fetch relevant information like Power BI Report metadata, User emails and groups, SharePoint and OneDrive integration. For this Azure AD application, steps needs to be created in your tenant by following the steps mentioned below. The details would be needed from app while we deploy our application.
    - **To Create an Azure AD App**
        
        Creation Steps
        
        1. Login into the [Azure Portal](https://portal.azure.com) account
        2. Click on **Manage Azure Active Directory** from the menu tab
        3. Click **App registrations** in the left sub menu
        4. Click the **New Registration** tab in the top left menu bar
        
        ![Fig 1.1  Register Application](/img/Instal/Instal2.png)
        Fig 1.1  Register Application
        
        1. Enter an **Application name** to be displayed to the users
        2. In the section **Who can use this application, s**elect **Accounts in this organizational directory only**
        3. In the section **Redirect URI**
            - Select **Web**
            - Enter the URL where installation of the solution will be done by following the below template. For example, if your app URL is going to [app.inforiver.com](http://app.inforiver.com) then replace the **<ADD-ON-FQDN>** with app.inforiver.com.
            
            ```bash
            https://<ADD-ON-FQDN>/Redirect
            https://<ADD-ON-FQDN>/rls/redirect
            https://<ADD-ON-FQDN>/visual/redirect
            https://<ADD-ON-FQDN>/external-storage/redirect
            ```
            
            Note: Use the **https** protocol.
            
            - Click **Register**
            
            ![Fig 1.2 Authentication - URLs](/img/Instal/Instal3.png)
            
            Fig 1.2 Authentication - URLs
            
        
        <aside>
        ✅ Azure AD assigns a unique application and client, ID to your app.
        
        </aside>
        
        1. The portal opens your application's **Overview** page. *Do the below configuration from Azure Portal*
        - **Authentication**
            - Go to **Authentication > Implicit grant** section
            - Ensure that both the check boxes **Access Tokens** and **ID tokens** are ticked
        - **API permissions**
            - Go to **API permissions**
            - In the **Microsoft Graph** Permissions, add
                - open id
                - profile
                - User.ReadBasic.All
                - Files.ReadWrite.All
                - Sites.ReadWrite.All
            - **Power BI Service**
                - Report.Read.All
                - Dashboard.Read.All
                - Workspace.Read.All
                - App.Read.All
                - Dataset.ReadWrite.All
        - Grant admin consent for the entire organization
        
        ![Fig 1.3 API Permission](/img/Instal/Instal4.png)
        
        Fig 1.3 API Permission
        
        | Permission | Description | O365 Group | Features
        Dependent | Actions done
        from App | Status |
        | --- | --- | --- | --- | --- | --- |
        | Files.ReadWrite.All | Have full access to all files user can access | OneDrive | Scheduler & Writeback | External destination folder browsing and file delivery to OneDrive / Teams location | Partially Required |
        | Group.Read.All | Read all Groups | O365 | People Manager API  (Scheduler / Comments) | The People Manager API lists users in the organization, along with the users list. The API can return groups configured in the organization.
        The listing of groups is an optional feature, hence, this permission will be requested only if the option is enabled in the settings. | Optional |
        | Sites.ReadWrite.All | Edit or delete items in all site collections | SharePoint | Scheduler & Writeback | External destination folder browsing and file delivery to SharePoint site location | Partially Required |
        | User.ReadBasic.All | Read all users' basic profiles | O365 | All features | This is required to capture basic user details like image, fullName etc. | Required |
        | Dataflow.Read.All | View all Dataflows | PowerBI | Scheduler Dataset lineage tracking, this is an optional feature which can be turned on from the settings page. |  | Optional |
        | Dataset.Read.All | View all Datasets | PowerBI | Scheduler Dataset details and lineage tracking |  | Partially Required |
        | Dataset.ReadWrite.All | Read and Write all Datasets | PowerBI | Scheduled Dataset refresh | Scheduler Dataset Refresh - We can configure scheduled dataset refresh from our scheduler add-on. If the dataset refresh option is enabled, the Dataset.ReadWrite.All permission is requested from the dataset owner. | Optional |
        | Report.Read.All | View all reports | PowerBI | Scheduler - Report selection |  | Partially Required |
        | Workspace.Read.All | View all workspaces | PowerBI | Scheduler - Workspace selection |  | Partially Required |
        |  |  |  |  |  |  |
        
        <aside>
        💡 Partially Required are the ones which are required for that feature to work completely but not the product itself.
        
        </aside>
        
        1. Go to the **Overview** section, copy and save the **Application (client) ID** and **Directory (tenant) ID**.
        
        > For the secret value, go to the **Certificates and Secrets section,** then create a **New client secret**. You will be shown a **secret value** and we need this later for our app setup.
        > 
        
        *In this method, all the services will be deployed by using the Azure native cloud components. You could install it by using the ARM template. The template will be provided separately by our team at a later point while deploying it in the customer environment.*
        
5. **SMTP Service Credentials:** To enable email notification from Inforiver, we need SMTP service connection details.
    - **SMTP Prerequisites**
        1. SMTP Host/Server Address: An SMTP email server will have an address (or addresses) that can be set by the mail client or application that user is using and is generally formatted as **smtp.serveraddress.com**
        2. SMTP Username: User have to mention **full email** address as SMTP Username, and  email password as the SMTP password in mail configuration settings/coding
        3. SMTP Password: The SMTP password is **the same as web password**, unless user is using 2SV. Use smtp.gmail.com, port 465, SSL or port 587/STARTTLS.
        4. SMTP Port: SMTP is used to set up communication rules between the servers.
6. **Inforiver License Key**: Prevents Illegal Use of Software. It is a unique string of characters and numbers provided by Inforiver team on purchase of the product. A user must agree to the terms of the license when acquiring the software.
    - **Steps to Acquire License Key**
        
        <aside>
        ⚠️ Only License Admin or License Owner can perform the steps. In case you need any help on this, please connect with support team.
        
        </aside>
        
        - Flow 1: Billing Admins who also have License Admin access
            1. Navigate to [https://inforiver.com/login/](https://inforiver.com/login/)
            2. Enter billing email in the login page and click on **Send Verification Code**. (*Note: verification code will be sent via email)* 
                
                ![sign in.png](/img/Instal/Instal5.png)
                
            3. Enter the received verification code in the login screen and click on **Login**.
            4. In the Subscription Overview page, click on **View Downloads** under **Downloads** or **View Details** under **Actions** within the subscription that has On Prem enabled. 
                
                ![subscription.png](/img/Instal/Instal6.png)
                
            5. In the Subscription Details page, the Key Code a.k.a **Inforiver License Key** can be found under the **On Prem Details** section. *(refer screenshot below)* 
                
                ![key code.png](/img/Instal/Instal7.png)
                
        - Flow 2: License Admins who do not have Billing Admin access
            1. Navigate to [https://inforiver.com/login/](https://inforiver.com/login/)
            2. Click on **Are you the license admin?** at the bottom right of the login dialog.
            3. Enter licensee email and subscription id, then click on **Send Verification Code**. (*Note: To get Subscription Id, contact your Billing Admin)*
                
                ![sign1.png](/img/Instal/Instal8.png)
                
            4. Enter the received verification code in the login screen and click on **Login**.
            5. In the Subscription Details page, the Key Code a.k.a **Inforiver License Key** can be found under the **On Prem Details** section. *(refer screenshot below)* 
                
                ![key code.png](/img/Instal/Instal9.png)
                

## **Azure Pricing:**

> After deployment you may incur additional Azure cost apart from Inforiver Licensing cost. This is based on your billing terms and agreements with Microsoft Azure. But for the standard pricing estimate, please click the link below. This is an estimated pricing and will be subjected to change from time to time.
> 

[Cloud Computing Services | Microsoft Azure](https://azure.com/e/3e1628c326a84286b7074812b1eb367f)

## Architecture and Components:

### Architecture Design:

Below is an ideal architecture diagram that can be configured up to organizational standards. The bare minimal deployment architecture can be found at the bottom of this section.

![Fig 2: Network Architecture](/img/Instal/Instal10.png)

Fig 2: Network Architecture

### Architecture Description:

Following are the components that are mentioned in the architecture above.

<aside>
💡 Please note that all the components won’t be installed. We will only deploy the required components and others are optional or external.

</aside>

### Core Components

Only the following components will get created and configured in your Resource Group when you are deploying by using the marketplace app.

1. **Azure Web App Service and Plan:** API Server. This service handles all the APIs triggered from the visual or Add-on App. This contains all the business logic and acts as a back-end service and route handler to serve static files like HTML, JS, CSS, and all images for the Inforiver Add-On.
2. **Azure Kubernetes Service and its dependent Resource Group:** With this service, applications are quickly brought up on the cloud. This means no lock-in to a single vendor or system. To support applications that have different compute or storage demands, a user needs to create additional node pools. User node pools serve the primary purpose of hosting your application pods.
3. **Azure SQL Server and Database:** It's a fully managed database-as-a-service that can handle mission-critical workloads with predictable performance, security, high availability, and dynamic scalability. Users can create highly scalable applications with complex security.
4. **Azure Cache for Redis:** It serves both for caching and queue for our background worker jobs.
5. **Azure Blob Storage:** It stores the static files which are uploaded or created from the Inforiver application.
6. **Virtual Network and Subnets:** It provides IP based communication options to the deployed resources. The subnets are classified in terms or traffic segregation.
7. **Private Links and Private Endpoints:** Private endpoint is a network interface that uses a private IP address from a virtual network. This network interface connects privately and securely to a service that's powered by Azure Private Link. By enabling a private endpoint, the service into your virtual network can be obtained.

### External Dependencies

1. **Azure Container Registry (External):** All application code would be compiled and stored in this centralized registry from where each component will pull its code.
2. **Licensing Service (External):** This service will help Inforiver to identify your license information and the features available to you. This will exchange only your license information.
3. **Power BI Service (External):** Power BI Service in which the Inforiver visual would be running. 
4. **Azure Active Directory Service (External)**: This service would help us to fetch information from your O365.
5. **SMTP Service (External):** This service will help us to send email from Inforiver.

### Optional Components

1. **Application Gateway (Optional)**: Application Gateway connects web applications to the cloud. It provides a web interface so that users can monitor traffic usage.
2. **Application Insights (Optional):** Application Insights is a feature of Azure Monitor that provides extensible application performance management (APM) and monitoring for live web apps.
3. **Azure Key Vault (Optional):** It helps teams to securely store and manage sensitive information such as keys, passwords, and certificates in centralized storage with industry-standard algorithms, it even has fine granular control for permissions over sensitive data.

![Fig 3: On-Prem Network Architecture](/img/Instal/Instal11.png)
Fig 3: On-Prem Network Architecture

## Product Installation Steps:

The following steps will guide you through the installation process of ‘Inforiver Add-on’ in your Azure subscription. The deployment process is straightforward as long as the instance details are valid and all software requirements are met before you begin.

**Step 1:** Log in to [https://portal.azure.com](https://portal.azure.com)

![Fig 3.1 Azure Portal](/img/Instal/Instal12.png)

Fig 3.1 Azure Portal

**Step 2:**  Click on “***Create a resource***” from Azure services section.

![Fig 3.2 Create  ](/img/Instal/Instal13.png)

Fig 3.2 Create  

**Step 3:** Search for **Inforiver Addon** from Azure Marketplace

![Fig 3.3 Marketplace search](/img/Instal/Instal14.png)

Fig 3.3 Marketplace search

**Step 4:** Clicking on the result opens the following page.

- Click on **Create ****button

![Fig 3.4 Create a link ](/img/Instal/Instal15.png)

Fig 3.4 Create a link 

**Step 5:** In the Create Inforiver AddOn section, 

- Under Basics - fill in Project details and Instance details
- Fill in all the mandatory details (*)
    
    > *Docker password will be shared by Inforiver on product purchase*
    > 
- Once the data is completely filled then, Click on **Next: Review+Create**

![Fig3.5 Enter Details](/img/Instal/Instal16.png)
Fig3.5 Enter Details

<aside>
📌 The field ‘SQL Admin Password’ must be a valid one with complexity requirements fulfilled as per Azure guidelines. The deployment will fail if the password is not complex enough.

</aside>

**Step 6:** The deployment process proceeds to the Next stage 

- The final Deployment stage

<aside>
⚠️ The Deployment might take from 15 to 30 minutes because the Redis cache will take time to come online

</aside>

![Fig 3.6 Deployment execution](/img/Instal/Instal17.png)

Fig 3.6 Deployment execution

- After successful deployment, the user will see the below message
    
    ***“✅Your deployment is complete”***
    

![Fig 3.7 Deployment completed](/img/Instal/Instal18.png)

Fig 3.7 Deployment completed

## Product Configuration Steps:

By following the above steps you would have deployed entire Inforiver application in your Azure tenant. There are few configuration steps which we need to do for the Inforiver application to work properly.

> Before proceeding, please make sure that you have access to the newly created internal AKS resource group. This was created as a managed resource group while AKS creation.
> 

**PHASE I - AKS configuration (YAML files deployment)**

Prerequisite files:

1. Coredns-custom
    
    [coredns-custom.yaml](/img/Instal/Instal19.png)
    

 2. Compiled           

[compiled.yaml](/img/Instal/Instal20.png)

1**) Custom DNS Setup**

Go to ‘Configuration’ → ‘Config maps’ → ‘coredns-custom’, 

![Coredns.png(Inforiver%20On-Premise%20Installation%20Guide%20230a570d341f4bb89dec44b1af3210c4/Coredns.png)

Click on ‘YAML’ and paste the contents from ‘coredns-custom.yaml’ file below and check the checkbox on ‘Confirm manifest changes’ and ‘Save’.

![host.png(Inforiver%20On-Premise%20Installation%20Guide%20230a570d341f4bb89dec44b1af3210c4/host.png)

<aside>
💡 We have to delete the existing coredns pods in the workload section. Once deleted, it would be recreated automatically.

</aside>

2) **Creating Kubernetes Resources**

Go to ‘Overview’ section and click on ‘Create’ and select ‘Create with YAML’ option. 

![Ks.png(Inforiver%20On-Premise%20Installation%20Guide%20230a570d341f4bb89dec44b1af3210c4/Ks.png)

Then paste the contents from ‘compiled.yaml’ file.

![ks2.png](/img/Instal/Instal21.png)

Add or change the env variables like smtp, Redis, etc. based on your needs and click ‘Add’.

## Custom Visual Generation:

Since the Inforiver supporting application is customized and deployed in your Azure tenant, we cannot use the generic Custom Visual which is mapped to our SaaS solution. You have to generate your own custom visual and use it. Please follow the steps below to generate the custom visual.

<aside>
⚠️ Only License admin or License owner can generate new custom visual. In case you need any help on this, please connect with support team.

</aside>

**Steps to Generate Custom Visual**

- Flow 1: Billing Admins who also have License Admin access
    1. Navigate to [https://inforiver.com/login/](https://inforiver.com/login/)
    2. Enter billing email in the login page and click on **Send Verification Code**. (*Note: verification code will be sent via email)* 
        
        ![sign in.png](/img/Instal/Instal22.png)
        
    3. Enter the received verification code in the login screen and click on **Login**.
    4. In the Subscription Overview page, click on **View Downloads** under **Downloads** or **View Details** under **Actions** within the subscription that has On-Prem enabled. 
        
        ![subscription.png](/img/Instal/Instal23.png)
        
    5. In the Subscription Details page, **Custom Build** can be found under the **On-Prem Details** section. *(refer screenshot below)* 
        
        ![custom build.png(Inforiver%20On-Premise%20Installation%20Guide%20230a570d341f4bb89dec44b1af3210c4/custom_build.png)
        
    6. Enter Backend Url and select one of the available versions, then click on **Generate Build**. 
    7. A custom build will be generated and delivered via email. It will also appear below the custom build generation from within the customer portal.
- Flow 2: License Admins who do not have Billing Admin access
    1. Navigate to [https://inforiver.com/login/](https://inforiver.com/login/)
    2. Click on **Are you the license admin?** at the bottom right of the login dialog.
    3. Enter licensee email and subscription id, then click on **Send Verification Code**. 
    (*Note: To get Subscription Id, contact your Billing Admin )*
        
        ![sign1.png(Inforiver%20On-Premise%20Installation%20Guide%20230a570d341f4bb89dec44b1af3210c4/sign1%201.png)
        
    4. Enter the received verification code in the login screen and click on **Login**.
    5. In the Subscription Details page, the **Custom Build** section can be found under the **On-Prem Details** section. *(refer screenshot below)*
        
        ![custom build.png(Inforiver%20On-Premise%20Installation%20Guide%20230a570d341f4bb89dec44b1af3210c4/custom_build%201.png)
        
    6. Enter Backend Url and select one of the available versions, then click on **Generate Build**. 
    7. A custom build will be generated and delivered via email. It will also appear below the custom build generation from within the customer portal.

Once you have your own custom visual generated, you can start importing Inforiver in your Power BI report.

# Troubleshooting responses

1. While logging in to Inforiver, if you encounter this screen, the O365 admin needs to provide approval. Detailed steps are provided **[here](https://www.notion.so/Microsoft-Login-Admin-Consent-b3b8eea861ff4070ab0d586f0b5cc3d7).**
    
    ![Inforiver Enterprise Edition — On-premiseEdit](/img/Instal/Instal18.png)
    
    Inforiver Enterprise Edition — On-premiseEdit