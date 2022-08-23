---
title: Backup/Restore Config
sidebar_position: 14
slug: backup%2Frestore-config
---



Import or export the custom visual configuration data as a JSON file. A JSON file provides granular-level customizations that can be easily shared and imported into a new visual. Using the export/import custom configuration options, you can standardize the reports and charts formats and visual configurations across all reports using Inforiver visual. This section will cover how to:

1. [Backup Report Configs](59befd3dbf2f41d297dc0e6801f54f74#ef708fb154e24b8da9e7dca7b8d1866c)

2. [Restore Report Configs](59befd3dbf2f41d297dc0e6801f54f74#1328bd51daf7443dbea4af782ccfa6e9)

## Backup Report Config

:::tip

**Note:** Available only in Power BI Services.

:::


- Select the **Export** tab on the toolbar and select **Config**.

![Config drop-down menu list](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ec8e03d0-0195-4858-a69f-ceaddc3dfce9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105532Z&X-Amz-Expires=3600&X-Amz-Signature=7298da5df5c7adbaa7568945083e5c14b87b751a57f8e3268cfed39c0bd683b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Related Links













- Select **Backup Report Config** to backup configurations such as color, navigation, scaling, number format, conditional formatting, and templates.
- Right Click on the the `.json` file name and select **Save Link As** option.

	![Export Config dialog box](https://divyabhushan.github.io/inforiverdocs/img/export/export-config.png)

- Navigate to your desired storage location and select **Save**.
- Your visual data will be downloaded in a `json` format which can be used in other reports through Import Config.

## Restore Report Configurations


To import and apply custom configurations from an exported file:

- From the **Export** tab on the toolbar, select **Config**.

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/942e78b7-9a67-4326-97d8-0d1d53d7cd44/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105533Z&X-Amz-Expires=3600&X-Amz-Signature=a10cc781f16592fdf7d3c496a42b703638269c6ae00a7f4018bda0347abd027a&X-Amz-SignedHeaders=host&x-id=GetObject)

- Select **Restore Report Config** from the drop down menu bar.

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2e449343-2e61-4631-af29-5ddc875968b2/Screenshot_2022-06-21_at_3.07.46_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105533Z&X-Amz-Expires=3600&X-Amz-Signature=2129af8d721cb3667ba810e9f531088e994e7db2c1faa61669fce1f5113962b5&X-Amz-SignedHeaders=host&x-id=GetObject)

- Select **Upload** and navigate to the location of the exported config file.
- Select the `JSON` format exported file and select **Open**.
- Click Yes after confirmation. this action cannot be undone.

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/51a423a8-6670-4594-91e8-6b84f545d8d7/Screenshot_2022-06-21_at_3.12.57_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105533Z&X-Amz-Expires=3600&X-Amz-Signature=fb394062276477eb4c2de9f10bb89b40417546d8d1ef1868893cb5ce13a6181b&X-Amz-SignedHeaders=host&x-id=GetObject)

- Select **Yes** to confirm importing the config file.

Your visual will be now updated with the data configurations from the exported file.

