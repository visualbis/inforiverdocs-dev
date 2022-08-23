---
title: Insert Column and Insert Measures
sidebar_position: 7
slug: insert-column-and-insert-measures
---



Inforiver is a powerful data manipulation and reporting tool that allows you to quickly and easily insert columns or measures into your data set.


Insert columns outside the hierarchy to perform calculations.


In insert Measure : Add columns that are repeated for every hierarchy level.


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b2ef0dcc-f2fe-46cd-9400-d9cdbf9185df/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105434Z&X-Amz-Expires=3600&X-Amz-Signature=f5ee813d5e87bd675c42cecb1189c4d5cd81e7d2417cc2fec8c90bf016f4ac3c&X-Amz-SignedHeaders=host&x-id=GetObject)


:::tip

**Note:** To insert a column, you must have a field added to the “Columns” section in the visual.

:::



### Quick Formula


Quick Formula lets you create new measures and formulas using calculations and functions which can be based on existing columns or measures.

- Select the **Insert** tab from the toolbar, and select **Quick Formula** from the ribbon.
- Select inputs from the dropdown.

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c9bad9bd-fecc-42da-b5eb-544f9bded0ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=36809d78efa1749832b52723081996a12b4f74145e58facb8d48036cae62a2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

- Select the **Insert** tab from the toolbar, select **Quick formula** from the ribbon.
- Choose one from the following quick calculations available:
	- **Running total** – Creates a running total for any measure (from data source or the inserted measures)

	![Running Total Measure Side Panel](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2452e188-6a9b-41d4-9324-91d8474bed49/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=271e1662132b21093aa9b189fb9728b348b1a63f732c512d22e9d02e2cd64028&X-Amz-SignedHeaders=host&x-id=GetObject)


![Running Total Measure Inserted](/img/595464689.png)

- **% Cont to Parent** – Shows the contribution of the Child Node to the Parent Total for the selected measure with an option to show as Progress Bar

	![% Cont to Parent Side Panel](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8c92d17e-26db-4102-9aa9-7061836872e8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=7a1b22e42594acb98b9c3d5cc5ab292e0c64fa486c42e115fd0ae22d0122da53&X-Amz-SignedHeaders=host&x-id=GetObject)


	![% Cont to Parent inserted with the bar chart](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eb3afa1c-7744-47c0-973e-e198db8f6262/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=9704c62df7862fbd165a345f888b6b9a6c59cbb347ad7b3d8434b1ae2086e284&X-Amz-SignedHeaders=host&x-id=GetObject)

	- **% Cont. to Grand Total** – Shows the Contribution of child to the Grand Total for the selected measure with an option to show as Progress Bar

	![% Cont to Grand Total Side Panel](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4e708373-d16c-4527-b9f5-39749da20856/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=febbed42eaf9357ced8f48d313d6c61d8de45c6922dc8c9542f64821307e9098&X-Amz-SignedHeaders=host&x-id=GetObject)


	![% Cont GT Measure with Progress Bar](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f7639aed-25ff-4649-8527-f25e18773556/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=83139c44db9b87bc61825006dbb379621b479ae135c159ffa634745a114ed747&X-Amz-SignedHeaders=host&x-id=GetObject)

	- **Lead/Lag** – Create a measure based on an offset that is given either to lead or lag

	![Lead/Lag  measure Side Panel](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b1b952b-ac7d-4db3-bad9-2bc9e8c4eb86/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=8d48880449894a8042d9d52403ba848efa80c20eea6c1e7dc0f2af72d7c4350a&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Lead Measure inserted](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/45d7557c-9c32-4394-8426-0590e8d04fcc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=631a4f648e0ba63e48906a3250f92f4070865c8f9f310785b5322d6f13651a28&X-Amz-SignedHeaders=host&x-id=GetObject)

	- **Overall Rank Measure**: Choose the **Overall rank measure** from the dropdown on the Quick formula to insert the ranking for the entire matrix.

	![Overall rank measure side panel](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/59ec22d2-63c7-4320-8abf-0bbc8253a04a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=cc2928ff7503b1ea2bd403e13e22dbe24032a15cbda4d051ee0e57a1be6014bb&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Over all Rank Measure inserted](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/495786ab-1f36-4151-a21b-c4d8d5a055fc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=d5840e56bff5e8182dc487240d8e8f337fb137faab72b736515b2587e02095a7&X-Amz-SignedHeaders=host&x-id=GetObject)

	- **Ranking Within Group**:  Choose Ranking within the group from the dropdown on Quick formula to insert the ranking for the values only inside the group.

	![Rank Measure inserted](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2f98cad4-e948-4047-842b-7fa1294994f0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105435Z&X-Amz-Expires=3600&X-Amz-Signature=7442c11dddaab4c6684b2ae3aaf6cc6f7d52fb58f6eae6c69eb81f83d5b442c2&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Rank measure Side Panel](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9376ce3b-092a-4b0e-9ddf-394fc9e22290/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105436Z&X-Amz-Expires=3600&X-Amz-Signature=c04f8b28a37fb3c1254e2872b97b20bcc8549bcf4779d176b9f2a0c5f1667e95&X-Amz-SignedHeaders=host&x-id=GetObject)


## Insert Formula


Formula Measure lets you create new measures using calculations and functions which can be based on existing columns or measures.


Consider the example of adding a Forecast based on Actuals and Growth value:

- Select the **Insert** tab, and select **Insert Formula** from the ribbon bar.
- Enter title name
- Select Visual Measure or Visual Column

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/37a17e0a-acbd-4742-928c-f4694d07e1bd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105436Z&X-Amz-Expires=3600&X-Amz-Signature=bb73e30adf7698699aaad12cdb5b69934718e244e220f2e4de1876fac8174b9f&X-Amz-SignedHeaders=host&x-id=GetObject)


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1d07349c-e47f-4d70-9e46-064fcfa27653/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105436Z&X-Amz-Expires=3600&X-Amz-Signature=1f879f5b7e5cc44e9a3326010d12d17a7fe64b313fa7c0f1435c1194572db6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

- Select **Formula** from the dropdown
- Select row aggression type from the dropdown
- Enter description as required
- Click Create

	![Enter Formula and create Visual Measure](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/95980302-ca4a-4f16-a047-9ca3826b4a2e/Screenshot_2022-06-08_at_12.38.34_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105436Z&X-Amz-Expires=3600&X-Amz-Signature=04aa68d2690590e09ef0740b0df8415aba6218a39d1660bc1d692335b21ec2c1&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Enter Formula and create Visual Column](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f04f022a-3336-4f7b-9424-b03bd3287587/Screenshot_2022-06-08_at_12.01.21_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105436Z&X-Amz-Expires=3600&X-Amz-Signature=6f7b28492d8244236af500adbb2f989379ccd70ab4a02403f736975207e97575&X-Amz-SignedHeaders=host&x-id=GetObject)


### Blend


It merges or blends the selected measures. 

- Select the **Insert** tab, select **Blend** from the ribbon
- Enter title
- Select measure 1 and measure 2 columns to blend together
- You can select the option to blend vertically or horizontally

	![Blend 2 columns in vertical directions](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a375b37f-f91b-4eec-8ad8-2956683e843e/Screenshot_2022-06-08_at_12.57.09_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105436Z&X-Amz-Expires=3600&X-Amz-Signature=d5fd5973c2b7fb25cfdcad2d44186bbaa5b0ef61c1a13a2a939e5c6cd4c37d92&X-Amz-SignedHeaders=host&x-id=GetObject)


### Simulate

- In the **Insert** tab, select **Simulate** from the ribbon
- Enter title name
- Choose whether to insert it as a visual measure or visual column
- You can insert Simulation fields based on measures to perform analysis.

	![Insert simulation ](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b1761bd3-cde3-4df5-b65a-dba31913cad3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105437Z&X-Amz-Expires=3600&X-Amz-Signature=9335a2d5fd09a747872c5a2e646e4a22a284fb9b9ba23f26eaadffe287547b32&X-Amz-SignedHeaders=host&x-id=GetObject)


### Manual Input

- In the **Insert** tab, select **Manual Input** from the ribbon bar, side pan opens.
- Enter title
- Choose whether to insert it as a visual measure or visual column
- Select Input Type from the drop-down
- Select sum aggregation from the drop-down
- Check the box to distribute the parent value to children

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/048c1e48-436b-491c-a1ed-7820e232905e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105437Z&X-Amz-Expires=3600&X-Amz-Signature=d5dcc0653595f840bebdb22ba93103e5557a4b069174741003cda2a8f67e34f3&X-Amz-SignedHeaders=host&x-id=GetObject)

- Values can be added manually to the cell.
- Add value to total or subtotal then select for distribution.
- You can find the tab next to the value to distribute value equally to parent and child with options to distribute to rows
- Values can be distributed in all the below ways
	- Distribute to rows: Either Equally or you can also customise the value
	- Distribute to rows by weights of: With reference to the category

		![Distribute value to rows](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aea70e87-e93a-46a4-9a8f-060da94455b4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105438Z&X-Amz-Expires=3600&X-Amz-Signature=de7613e322064e307994f422ec813f08beb32bd853537ef81e59837e1b16a651&X-Amz-SignedHeaders=host&x-id=GetObject)


		![Distribute value to rows by weights of category](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/140d18f7-9945-4305-b869-d73350f06407/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105438Z&X-Amz-Expires=3600&X-Amz-Signature=8bf99e9d1c3656feb5ec54f640168cb3403832793e1dd89074ede227ec7738b2&X-Amz-SignedHeaders=host&x-id=GetObject)


### Manage

- To view/edit existing measures/columns, choose to **Manage** under the ribbon. You can update the properties such as name, formula etc
- To delete the inserted measure, click on the Delete icon from the Inserted Measures screen on the right.
- Another way to delete the inserted measure is to choose “Delete Column” from the menu near the column.
- To hide the inserted measure, switch off the measure from the Inserted Measures screen on the right.

	![Manage Insert Columns and Measures](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a0df46e0-05e0-49ad-894a-762d37065c00/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105439Z&X-Amz-Expires=3600&X-Amz-Signature=869e48bb76544b1c25536229c194324a2f508de0e5a6a466679d484c5a2a60b2&X-Amz-SignedHeaders=host&x-id=GetObject)

