---
title: Conditional Formatting
sidebar_position: 10
slug: conditional-formatting
---

# Conditional Formatting

Conditional Formatting can be used to highlight the important data in your visual. This feature can be used to spot trends of different kinds. This section will cover the following:

- [Quick Rule](/analyze/conditional-formatting#quick-rule)
- [Color Scheme](/analyze/conditional-formatting#color-scheme)
- [Classification](/analyze/conditional-formatting)
- [Create Rule](/analyze/conditional-formatting)
- [Manage Rules](/analyze/conditional-formatting)

## **Quick Rule**

Quick Rule is used to highlight the positive and negative values. By default, positive values are shown in green and negative values in red. 

![Highlight Negative values in a couple of clicks](/img/Analysis/CF/CF1.png)
Highlight Negative values in a couple of clicks

![Create Quick Rule to highlight Positive and negative values ](/img/Analysis/CF/CF2.png)
Create Quick Rule to highlight Positive and negative values 

You can customize the color for the highlighted numbers

![Customize the conditional formatting](/img/Analysis/CF/CF3.png)

Customize the conditional formatting

## Color Scheme

Color schemes visualize the data in a 2-dimensional format in the form of colored maps. The color maps use hue, saturation, or luminance to achieve color variation to display various details. There are different formats such as sequential, qualitative, diverging, continuous, and continuous - diverging.

![Highlight the values using a predefined Color Scheme](/img/Analysis/CF/CF4.png)

Highlight the values using a predefined Color Scheme

## **Classification**

Classification provides options to highlight values using text, icon set, and rating. The available options are shown in the below image. 

Consider a simple example.

Click on the column 2021 plan and select the option ‘High Medium Low’ from the menu.

![Classify the values into different groups](/img/Analysis/CF/CF5.png)

Classify the values into different groups

Conditional formatting is applied and shown in another column.

![New column with the classification added to visual](/img/Analysis/CF/CF6.png)

New column with the classification added to visual

We will be covering the menu on the right side and classification ranges in detail in the [next section.](/analyze/conditional-formatting)

## **Create Rule**

In addition to the above formatting options, users can build custom rules to highlight the insights in the visual. 

These rules can be applied to the Row Header, Rows, or other value fields in the report.

- Select **Home > Conditional Formatting > Create Rule**.
- From the side panel, give a name for the rule.
- In the below example ‘2020 Actuals’ (value field) is chosen.
- Choose the measure to apply the rule
    
    ![Create a new Conditional Formatting Rule](/img/Analysis/CF/CF7.png)
    
    Create a new Conditional Formatting Rule
    
- ‘**Row Hierarchy Level(s)**’ can be used to apply the rule to Values only, Totals only or both
    
    ![Screenshot 2022-06-09 at 3.46.48 PM.png](/img/Analysis/CF/CF8.png)
    
- ‘**Format by**’ specifies the type of formatting that can be applied. It can be by:
    1. If Condition
    2. Color Scale 
    3. Classification
    
    ![Create rule based on three formats](/img/Analysis/CF/CF9.png)
    
    Create rule based on three formats
    

### 1. Format by: **IF Conditions**

If condition can be used to specify the logical condition which returns a true or false value based on the expression. When the condition evaluates to true, the style mentioned would be applied to the values.

**Style** can be used to format the text, background or to add icons.

![Format using various style, border and icon](/img/Analysis/CF/CF10.png)

Format using various style, border and icon

**Example 1**: Highlight the text to any color  to show the relation between variance. You can apply If conditions along with relative with respect to Number, Data selection, Values or Formula wrt number.

![Screenshot 2022-06-10 at 12.05.52 PM.png](/img/Analysis/CF/CF11.png)

![Untitled](/img/Analysis/CF/CF12.png)

![Untitled](/img/Analysis/CF/CF13.png)

**Example 2**: Highlight values less than any of the existing values.

- Here ‘**Data selection**’ from the condition menu is used to choose from the list of values in the visual. If ‘2020 plan’ is less than that value, highlight it in green font and add a red down arrow on the left of data.
- After selecting ‘Data selection’ from conditions, click on any cell from the visual.
- That cell value will be populated in the textbox. In the below example the ‘2020 Plan’.
- Display text can be used to add text instead of icons.

![Conditional formatting for Less than comparative value](/img/Analysis/CF/CF14.png)

Conditional formatting for Less than comparative value

- You can also use Icons to show the highlights in the value.
- Some default icons are provided but there is also an option for the user to add icons
- Customized text can also be displayed as icon by clicking on the display text checkbox.

![Highlight with icon](/img/Analysis/CF/CF15.png)

Highlight with icon

**Example 3**: Highlight the values when Plan is greater than the Actual. 

**Value** can be used to compare two values.

![Screenshot 2022-06-13 at 6.41.22 PM.png](/img/Analysis/CF/CF16.png)

**Example 4:** Format using formula. Highlight cells for '2020 Actuals' whose value is less than (2020 Plan + 1 million)

![Use formula to create a  more complex condition](/img/Analysis/CF/CF17.png)

Use formula to create a  more complex condition

**Example 5:** Format using And / Or condition. You can add more than one condition

- Create a rule
- Click on Add Condition
- Select And / Or condition
- Click on Apply
- Added condition can be easily deleted from the delete button provided just before the plan

![Image with more than one condition](/img/Analysis/CF/CF18.png)

Image with more than one condition

### 2. Format by: **Color Scale**

     **Color Scale** can be used to apply a gradient color scale to highlight the important information.

![Conditional%20Formatting%208e422fd2046b46c6bd7f4bd7d3f062d1/image16.png](/img/Analysis/CF/CF19.png)

- **Color scale for:** Color scale can be applied to background or font.
- **Color scale type:** refers to the type of the color scale. Below are the various options.
    
    ![Color Scale type options](/img/Analysis/CF/CF20.png)

    Color Scale type options
    
- **Reverse color**: If the order needs to be changed from light to dark or dark to light based on values.
- **Number of Bands:** represents the number of color bands. It can range from 1 to 20
- **Hide value** hides the value and shows only the back
- **Auto font color**: Will automatically change the font color based on background so that the values are visible.

**Example 1:** Sequential Color Scale

![Untitled](/img/Analysis/CF/CF21.png)

**Example 2:** Diverging Color Scale 

![Untitled](/img/Analysis/CF/CF22.png)

**Example 3:** Custom Range : Custom range can be specified. The range can be based on the percentage value or the value range itself.

![Untitled](/img/Analysis/CF/CF23.png)

Here instead of typing the values, it can be chosen from the selections.

![image21.png](/img/Analysis/CF/CF24.png)

**Example 4:** Qualitative Scale type

![Untitled](/img/Analysis/CF/CF25.png)

**Example 5:** Continuous Range

![Untitled](/img/Analysis/CF/CF26.png)

**Example 6**: Continuous Diverging range

![Untitled](/img/Analysis/CF/CF27.png)

### 3. Format by : Classification

- **Classification ranges** can be used to give the range of the value along with the condition.
- The values can be in the percentage or value range. In the below example the values are in the percentage range.
- Percentage text can be used to display the percentage range.

![Classify the data and add text and color](/img/Analysis/CF/CF28.png)

Classify the data and add text and color

- Classification icon position can be set as per the requirement - to the left, right or only text
- In only text values are replaced by the text and it also provides the option to show data in different column

![Untitled](/img/Analysis/CF/CF29.png)

## **Manage Rules**

**Manage Rules** section allows you to manage the user-specific rules created in the **Create Rule** section.

![Untitled](/img/Analysis/CF/CF30.png)

**Rules management:**

- Edit the existing rules using the Pencil icon.
- Use the duplicate icon as a shortcut to copy the rules that were created using the **Create Rule** feature. Once you duplicate an existing rule, you can then edit it as needed.
    
    ![Duplicate rule to quickly add similar conditions](/img/Analysis/CF/CF31.png)
    
    Duplicate rule to quickly add similar conditions
    
    ![Duplicate disabled for Quick Rules, Heat map, Classifications](/img/Analysis/CF/CF32.png)
    
    Duplicate disabled for Quick Rules, Heat map, Classifications
    

<aside>
**💡 Note:** You cannot duplicate conditional formatting types such as quick rules, heat maps, and classifications.

</aside>

- Delete the rules using the delete icon.
- To enable/disable the rule(s) use the on/off toggle.
- Reorder (using the gripper) the rules to prioritize the order in which the rules will be applied in the manage tab.


## Related Links

[Insert Column and Insert measure](/visual/insert-column-and-insert-measures)