---
title: Conditional Formatting
sidebar_position: 10
slug: conditional-formatting
---



Conditional Formatting can be used to highlight the important data in your visual. This feature can be used to spot trends of different kinds. This section will cover the following:

- [Quick Rule](/Setup a Navigation Layout.md)

- Color Scheme

- [Classification](/Setup a Navigation Layout.md)

- [Create Rule](/Setup a Navigation Layout.md)

- [Manage Rules](/Setup a Navigation Layout.md)

## Related Links










## **Quick Rule**


Quick Rule is used to highlight the positive and negative values. By default, positive values are shown in green and negative values in red. 


	![Highlight Negative values in a couple of clicks] 


	![Create Quick Rule to highlight Positive and negative values ] 


You can customize the color for the highlighted numbers


	![Customize the conditional formatting] 


## Color Scheme


Color schemes visualize the data in a 2-dimensional format in the form of colored maps. The color maps use hue, saturation, or luminance to achieve color variation to display various details. There are different formats such as sequential, qualitative, diverging, continuous, and continuous - diverging.


	![Highlight the values using a predefined Color Scheme] 


## **Classification**


Classification provides options to highlight values using text, icon set, and rating. The available options are shown in the below image. 


Consider a simple example.


Click on the column 2021 plan and select the option ‘High Medium Low’ from the menu.


	![Classify the values into different groups]


Conditional formatting is applied and shown in another column.


![New column with the classification added to visual](/img/539253738.png)


We will be covering the menu on the right side and classification ranges in detail in the [next section.](/Setup a Navigation Layout.md)


## **Create Rule**


In addition to the above formatting options, users can build custom rules to highlight the insights in the visual. 


These rules can be applied to the Row Header, Rows, or other value fields in the report.

- Select **Home > Conditional Formatting > Create Rule**.
- From the side panel, give a name for the rule.
- In the below example ‘2020 Actuals’ (value field) is chosen.
- Choose the measure to apply the rule

	![Create a new Conditional Formatting Rule](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dbb887de-d674-4ae3-aa62-bcfb16e86fa1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105455Z&X-Amz-Expires=3600&X-Amz-Signature=163262dfb2dd862f3fda9b147e9a9987944b456653fd559d251ac54bd0233baa&X-Amz-SignedHeaders=host&x-id=GetObject)

- ‘**Row Hierarchy Level(s)**’ can be used to apply the rule to Values only, Totals only or both

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dde34711-c6b3-452f-ba84-53917b03eb4b/Screenshot_2022-06-09_at_3.46.48_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105455Z&X-Amz-Expires=3600&X-Amz-Signature=1adbc522bb9a0de565a86e9be77f7737fb4b247de5c689946e75a7b9615f3746&X-Amz-SignedHeaders=host&x-id=GetObject)

- ‘**Format by**’ specifies the type of formatting that can be applied. It can be by:
	1. If Condition
	2. Color Scale
	3. Classification

	![Create rule based on three formats](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6bbba59f-a898-4b5d-8231-79a408773f25/Screenshot_2022-06-09_at_4.02.19_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105455Z&X-Amz-Expires=3600&X-Amz-Signature=0e878d9f99f7b6bfefc749b2272a6cce49273784047c10bf406f0bd07d4ef0a4&X-Amz-SignedHeaders=host&x-id=GetObject)


### 1. Format by: **IF Conditions**


If condition can be used to specify the logical condition which returns a true or false value based on the expression. When the condition evaluates to true, the style mentioned would be applied to the values.


**Style** can be used to format the text, background or to add icons.


	![Format using various style, border and icon](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c2616eb5-d9a3-4b47-bb66-860abd14b38a/image9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105456Z&X-Amz-Expires=3600&X-Amz-Signature=9f2414248f7017ebe90845a4d1cbe9f18eb23baef2d39fb0c3a405be45806947&X-Amz-SignedHeaders=host&x-id=GetObject)


	**Example 1**: Highlight the text to any color  to show the relation between variance. You can apply If conditions along with relative with respect to Number, Data selection, Values or Formula wrt number.


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f4a5184e-feda-472b-b664-d0ce8d8f00aa/Screenshot_2022-06-10_at_12.05.52_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105456Z&X-Amz-Expires=3600&X-Amz-Signature=b57fb5e22f4e098d627d2f34868b1f79101f14b43450a12d1d5d65282c04de0a&X-Amz-SignedHeaders=host&x-id=GetObject)


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1aadb703-90d4-491a-97ab-137cf3148712/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105456Z&X-Amz-Expires=3600&X-Amz-Signature=2a7a691c8be32c6dc1b3d45591d5d903a5b60395a7bc2933defc55c61182bcc7&X-Amz-SignedHeaders=host&x-id=GetObject)


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8ea0a6d3-c8e6-45f3-a4c3-b6c454599c22/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105456Z&X-Amz-Expires=3600&X-Amz-Signature=123635642a320cac14b64d1600f2eab0bec03f4b0cdcaad7dd83bab3e9cb33d0&X-Amz-SignedHeaders=host&x-id=GetObject)


**Example 2**: Highlight values less than any of the existing values.

- Here ‘**Data selection**’ from the condition menu is used to choose from the list of values in the visual. If ‘2020 plan’ is less than that value, highlight it in green font and add a red down arrow on the left of data.
- After selecting ‘Data selection’ from conditions, click on any cell from the visual.
- That cell value will be populated in the textbox. In the below example the ‘2020 Plan’.
- Display text can be used to add text instead of icons.

	![Conditional formatting for Less than comparative value](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a249cf89-0597-4dee-b50a-dd806ce61ffb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105457Z&X-Amz-Expires=3600&X-Amz-Signature=3a572b2fb9e01ab54dffdeed7677aed9e5a5be90c169d9b3246c909fb2664904&X-Amz-SignedHeaders=host&x-id=GetObject)

	- You can also use Icons to show the highlights in the value.
	- Some default icons are provided but there is also an option for the user to add icons
	- Customized text can also be displayed as icon by clicking on the display text checkbox.

	![Highlight with icon](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/83ecb2f9-9f40-4b2f-bfa8-40caea2525eb/Screenshot_2022-06-13_at_6.12.16_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105457Z&X-Amz-Expires=3600&X-Amz-Signature=29f08140f44ea254c99a333aa2629600a4aec19b3a756b448c4e71d9380288a2&X-Amz-SignedHeaders=host&x-id=GetObject)


**Example 3**: Highlight the values when Plan is greater than the Actual. 


**Value** can be used to compare two values.


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/808af515-8de2-4185-9c60-5b27e3575c43/Screenshot_2022-06-13_at_6.41.22_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105457Z&X-Amz-Expires=3600&X-Amz-Signature=03e8f160c061122cd6b20feec57da36b5d7677e900413dce3d0777415a66520f&X-Amz-SignedHeaders=host&x-id=GetObject)


**Example 4:** Format using formula. Highlight cells for '2020 Actuals' whose value is less than (2020 Plan + 1 million)


	![Use formula to create a  more complex condition](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/38931e93-a988-4ea7-b6e6-95ffb8d75255/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105457Z&X-Amz-Expires=3600&X-Amz-Signature=89ae422ce3c5fc0e7a0fead9cbf88485345fdb35042d8d9d30b523d3cede6c50&X-Amz-SignedHeaders=host&x-id=GetObject)


	**Example 5:** Format using And / Or condition. You can add more than one condition

	- Create a rule
	- Click on Add Condition
	- Select And / Or condition
	- Click on Apply
	- Added condition can be easily deleted from the delete button provided just before the plan

	![Image with more than one condition](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eee6a04f-3a51-40c8-90b3-cc7ccfeb52fe/Screenshot_2022-06-13_at_6.31.12_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105458Z&X-Amz-Expires=3600&X-Amz-Signature=f4bb0bcc2a53d4f037b8f0602a1de70ecf5bd4dcc7c0e3d61278b28e4bea06cd&X-Amz-SignedHeaders=host&x-id=GetObject)


### 2. Format by: **Color Scale**


     **Color Scale** can be used to apply a gradient color scale to highlight the important information.


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81df55a8-9201-4622-ba48-41bb7fdec2bc/image16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105458Z&X-Amz-Expires=3600&X-Amz-Signature=2124667508aae3202ac71b1b4172f6d63bbf5441752687d374ac924f40ea7c48&X-Amz-SignedHeaders=host&x-id=GetObject)

- **Color scale for:** Color scale can be applied to background or font.
- **Color scale type:** refers to the type of the color scale. Below are the various options.

	![Color Scale type options](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b8468441-bf41-46d7-bf4c-ebbffcdf2587/image17.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105459Z&X-Amz-Expires=3600&X-Amz-Signature=59e0146fbc0a941c9a04f90a668a92954d196dad41304263bdc34ee8d90874c9&X-Amz-SignedHeaders=host&x-id=GetObject)

- **Reverse color**: If the order needs to be changed from light to dark or dark to light based on values.
- **Number of Bands:** represents the number of color bands. It can range from 1 to 20
- **Hide value** hides the value and shows only the back
- **Auto font color**: Will automatically change the font color based on background so that the values are visible.

**Example 1:** Sequential Color Scale


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4bb4ab8d-21d3-4ed4-b2a4-c9793092f964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105459Z&X-Amz-Expires=3600&X-Amz-Signature=125127354eb048ee146f16bc298e0691f05ea8a3d09cc4d7df4a4ba4ef018486&X-Amz-SignedHeaders=host&x-id=GetObject)


**Example 2:** Diverging Color Scale 


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a904354a-52c9-4c58-8313-5f876ee5d655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105459Z&X-Amz-Expires=3600&X-Amz-Signature=846422a848075a2661393891afbe5576ebf76978bd348c864d31503dacd94038&X-Amz-SignedHeaders=host&x-id=GetObject)


**Example 3:** Custom Range : Custom range can be specified. The range can be based on the percentage value or the value range itself.


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3f174b3a-1209-4718-b2d5-a7a506db52c1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105500Z&X-Amz-Expires=3600&X-Amz-Signature=7d8ac50fcc79adce6e77542856e0ea4ccfb127e8ebbbdc8d840c41d49567e804&X-Amz-SignedHeaders=host&x-id=GetObject)


Here instead of typing the values, it can be chosen from the selections.


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/94564a43-7f3b-42ee-b1d7-1e1d644cc28b/image21.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105500Z&X-Amz-Expires=3600&X-Amz-Signature=14e11792fac5d7c29a6e7592df837c2f6dd696519ea8b6dfd1a4183960bf931e&X-Amz-SignedHeaders=host&x-id=GetObject)


**Example 4:** Qualitative Scale type


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c673911e-6a71-4077-afa9-fa3e03782006/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105501Z&X-Amz-Expires=3600&X-Amz-Signature=320d3733aa7a280aa35e7a12d82cedb4eeeac864a66d0ae9d2485bc2b7eb47df&X-Amz-SignedHeaders=host&x-id=GetObject)


	**Example 5:** Continuous Range


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eda6246a-e15d-4df3-8584-550f7a3185e0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105501Z&X-Amz-Expires=3600&X-Amz-Signature=eaca01ae825074b0712f07eea42fb0818eb35690cc06368443a34b61a7ed8554&X-Amz-SignedHeaders=host&x-id=GetObject)


**Example 6**: Continuous Diverging range


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/63bf4c51-9180-42e1-8305-8be5af970270/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105501Z&X-Amz-Expires=3600&X-Amz-Signature=8647e46b23fa9570a65cdd40e593c174113a80494c248eab4fce43d7bc03028f&X-Amz-SignedHeaders=host&x-id=GetObject)


### 3. Format by : Classification

- **Classification ranges** can be used to give the range of the value along with the condition.
- The values can be in the percentage or value range. In the below example the values are in the percentage range.
- Percentage text can be used to display the percentage range.

	![Classify the data and add text and color](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f29f553c-19bb-4818-b02b-29afc8429316/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105501Z&X-Amz-Expires=3600&X-Amz-Signature=88a4e04af1cf9336d88c449981821d7431ab73ad02fac7c5ee4703b97cb700af&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Classification icon position can be set as per the requirement - to the left, right or only text
	- In only text values are replaced by the text and it also provides the option to show data in different column

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/856481e0-2610-4c5f-9b88-630ca656e344/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105501Z&X-Amz-Expires=3600&X-Amz-Signature=8eb1bee324394703d5a27c7f4a589a40bc1aa257da0de36e79a87a8a148c8fdd&X-Amz-SignedHeaders=host&x-id=GetObject)


## **Manage Rules**


**Manage Rules** section allows you to manage the user-specific rules created in the **Create Rule** section.


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a999b671-f43f-4583-ba3d-6acdb78fe037/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105502Z&X-Amz-Expires=3600&X-Amz-Signature=afeb0610105dbc4a621f28a9e1a9a1ace9a72cefa621a793e7abbdb5296bc094&X-Amz-SignedHeaders=host&x-id=GetObject)


**Rules management:**

- Edit the existing rules using the Pencil icon.
- Use the duplicate icon as a shortcut to copy the rules that were created using the **Create Rule** feature. Once you duplicate an existing rule, you can then edit it as needed.

	![Duplicate rule to quickly add similar conditions](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/48050ed7-ca12-44e8-a089-45ae69267385/image25.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105502Z&X-Amz-Expires=3600&X-Amz-Signature=92851b9cb5b11965a23a00df031a7c7db2d554308b2064ce9952fab6a73dd041&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Duplicate disabled for Quick Rules, Heat map, Classifications](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f6bfd7d-403d-4143-a9af-dc437fbead34/image26.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105502Z&X-Amz-Expires=3600&X-Amz-Signature=0aaa2f495d60349db455729058b2cca74e8169ea6e8a6b9ed3ae85c750a87746&X-Amz-SignedHeaders=host&x-id=GetObject)


:::tip

**Note:** You cannot duplicate conditional formatting types such as quick rules, heat maps, and classifications.

:::


- Delete the rules using the delete icon.
- To enable/disable the rule(s) use the on/off toggle.
- Reorder (using the gripper) the rules to prioritize the order in which the rules will be applied in the manage tab.
